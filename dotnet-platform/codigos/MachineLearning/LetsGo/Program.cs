using Microsoft.ML;
using Microsoft.ML.Data;
using static Microsoft.ML.DataOperationsCatalog;
using LetsGo.Data;

string TrainingDatasetPath = "Data/heart-training.csv";
string TestDatasetPath = "Data/heart-test.csv";
string ModelPath = "MLModels/LetsGoModel.zip";

MLContext mlContext = new MLContext();

var trainingDataView = mlContext.Data.LoadFromTextFile<HeartData>(
    TrainingDatasetPath,
    hasHeader: true,
    separatorChar: ';'
);

ITransformer model = BuildAndTrainModel();

Evaluate();
SaveTrainedModel();
TestPrediction();

ITransformer BuildAndTrainModel()
{
    var pipeline = mlContext.Transforms.Concatenate(
        "Features","Age", "Sex", "Cp", "TrestBps", "Chol", "Fbs", "RestEcg", "Thalac", "Exang",
        "OldPeak", "Slope", "Ca", "Thal")
        .Append(mlContext.BinaryClassification.Trainers.FastTree(
            labelColumnName: "Label",
            featureColumnName: "Features"));

    Console.WriteLine("--- Training Model ---");

    var model = pipeline.Fit(trainingDataView);

    Console.WriteLine("--- End of Training ---");

    return model;
}

void Evaluate()
{
    var testDataView = mlContext.Data.LoadFromTextFile<HeartData>(
        TestDatasetPath,
        hasHeader: true,
        separatorChar: ';'
    );

    Console.WriteLine("--- Evaluating Model ---");

    IDataView predictions = model.Transform(testDataView);

    CalibratedBinaryClassificationMetrics metrics =
        mlContext.BinaryClassification.Evaluate(predictions, "Label", "Score");

    Console.WriteLine("Avaliação das métricas de qualidade do modelo");
    Console.WriteLine($"Acurácia: {metrics.Accuracy:P2}");
    Console.WriteLine($"AAC-Roc: {metrics.AreaUnderRocCurve:P2}");
    Console.WriteLine($"F1-Score: {metrics.F1Score:P2}");

    Console.WriteLine("--- End of Evaluating Model ---");
}

void SaveTrainedModel()
{
    mlContext.Model.Save(model, trainingDataView.Schema, ModelPath);
    Console.WriteLine("--- Trained model saved ---");
}

void TestPrediction()
{
    ITransformer trainedModel = mlContext.Model.Load(ModelPath, out var modelInputSchem);

    var predictionEngine = mlContext.Model.CreatePredictionEngine<HeartData, HeartPrediction>(trainedModel);

    foreach (var heartData in DataSample.heartDataList)
    {
        var prediction = predictionEngine.Predict(heartData);

        Console.WriteLine($"--- Single Prediction ---");
        Console.WriteLine($"Age: {heartData.Age} ");
        Console.WriteLine($"Sex: {heartData.Sex} ");
        Console.WriteLine($"Cp: {heartData.Cp} ");
        Console.WriteLine($"TrestBps: {heartData.TrestBps} ");
        Console.WriteLine($"Chol: {heartData.Chol} ");
        Console.WriteLine($"Fbs: {heartData.Fbs} ");
        Console.WriteLine($"RestEcg: {heartData.RestEcg} ");
        Console.WriteLine($"Thalac: {heartData.Thalac} ");
        Console.WriteLine($"Exang: {heartData.Exang} ");
        Console.WriteLine($"OldPeak: {heartData.OldPeak} ");
        Console.WriteLine($"Slope: {heartData.Slope} ");
        Console.WriteLine($"Ca: {heartData.Ca} ");
        Console.WriteLine($"Thal: {heartData.Thal} ");
        Console.WriteLine($"Prediction Value: {(Convert.ToBoolean(prediction.Prediction))} ");
        Console.WriteLine($"Prediction: {(prediction.Prediction ? "A disease could be present" : "Not present disease" )} ");
        Console.WriteLine($"Probability: {prediction.Probability} ");
    }
}
