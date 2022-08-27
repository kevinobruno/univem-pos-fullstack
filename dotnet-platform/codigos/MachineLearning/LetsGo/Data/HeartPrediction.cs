using Microsoft.ML.Data;

namespace LetsGo.Data
{
    public class HeartPrediction : HeartData
    {

        [ColumnName("PredictionLabel")]
        public bool Prediction { get; set; }

        public float Probability { get; set; }

        public float Score { get; set; }

    }
}
