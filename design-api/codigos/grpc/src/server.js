const PROTO_PATH = __dirname + '/../protos/helloworld.proto';

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const options = { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true };
const packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

function sayHello(call, callback) {
  callback(null, { message: 'Hello ' + call.request.name });
}

function sum(call, callback) {
  callback(null, { result: call.request.num_1 + call.request.num_2 });
}

const server = new grpc.Server();

server.addService(proto.Greeter.service, { sayHello: sayHello, sum: sum });

server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
  console.log('Server running on port 50051...');
  server.start();
});
