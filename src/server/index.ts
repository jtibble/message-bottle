
require("@babel/register")({extensions: ['.js', '.ts']})

import express from 'express';
import program from 'commander';
import network from '../network/network';
import heartbeat from '../heartbeat/heartbeat';

function helloWorldMiddleware(req, res) {
  res.send('Hello, world!');
}

function heatbeatReceiverMiddleware(req, res){
  console.log(`Heartbeat Middleware: ${JSON.stringify(req.body, null, 4)}`);
  res.send('Heartbeat acknowledged!');
}

async function run(argv) {

  program
    .option("-p, --port <port>", "What port to run the service on")
    .option('-d, --destination <destination>', 'What URL to send the traffic to');

  program.parse(argv);

  if (!program.port) {
    throw "Cannot start the server without a port specified";
  }

  if (!program.destination){
    throw 'Cannot start the server without a destination url';
  }

  const app = express();

  app.use(express.json()) // for parsing application/json

  app.get('/', helloWorldMiddleware);
  app.post('/', heatbeatReceiverMiddleware);

  app.listen(program.port);


  network.configure({
    destination: program.destination
  });

  heartbeat(network);

  return app;
};

run(process.argv);

export { run, helloWorldMiddleware, heatbeatReceiverMiddleware };