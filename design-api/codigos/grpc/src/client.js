const PROTO_PATH = __dirname + '/../protos/helloworld.proto';

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const options = { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true };
const packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

const target = 'localhost:50051';
const client = new proto.Greeter(target, grpc.credentials.createInsecure());

client.sum({ num_1: 2, num_2: 3 }, function(err, response) {
  console.log('Sum:', response.result);
});

client.sayHello({ name: 'Foo' }, function(err, response) {
  console.log('Message:', response.message);
});
