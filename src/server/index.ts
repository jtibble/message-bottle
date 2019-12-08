import express from 'express';
import program from 'commander';

function helloWorldMiddleware(req: Express.Request, res: Express.Response) {
  (res as any).send('Hello, world!')
}

async function run(argv: string[]) {

  program.option("-p, --port <port>", "What port to run the service on");

  program.parse(argv);

  if (!program.port) {
    throw "Cannot start the server without a port specified";
  }

  const app = express();

  app.get('/', helloWorldMiddleware);

  app.listen(program.port);

  return app;
};

run(process.argv);

export  {run, helloWorldMiddleware};