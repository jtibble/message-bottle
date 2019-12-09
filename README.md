# Message Bottle

Transmitting data over a poor connection can be a frustrating and complex process, especially when that connection is not under the control of the person(s) sending the data.


# Goals
Message Bottle is intended to be a tool/mechanism/API to send messages and chunk larger files into a form that can be sent over these poor connections, with the following features:

* Scheduling - Sometimes you just want to manually block the pipe and hold all traffic, or some types of traffic
* Throttling - Limit the usage of the pipe
* Prioritization - Some traffic is just much more important and timely
* Pipelineing - Grouping smaller transmissions so connections aren't constantly being created and destroyed
* Offline caching - Hold files in-memory on or-disk until the connction is restored
* Delivering receipts - Know when a message or larger file has been transmitted in its entirety
* Performance metrics - Know how well Message Bottle is running
* Health metrics - Know how well your connection is performing


# Development status

All files (src and test) are written in TypeScript with 100% unit-test coverage with Jest, compiled with Babel into the dist/ folder in the root of the repository.


This code doesn't do much yet, but the first simple heartbeat middleware is written to use a generic "network" object to communicate to the Message Bottle instance running across the app's network connection (which will be configured in testing to emulate poor, lossy connections).


## Running the application

```
npm run server
```
boots up the Express server, targeting itself on localhost:3000. It sends a heartbeat message to itself once the Express server is running.
