# Message Bottle

Transmitting data over a poor connection can be a frustrating and complex process, especially when that connection is not under the control of the person(s) sending the data.

Message Bottle is intended to be a tool/mechanism/API to send messages and chunk larger files into a form that can be sent over these poor connections, with the following features:

* Scheduling - Sometimes you just want to manually block the pipe and hold all traffic, or some types of traffic
* Throttling - Limit the usage of the pipe
* Prioritization - Some traffic is just much more important and timely
* Pipelineing - Grouping smaller transmissions so connections aren't constantly being created and destroyed
* Offline caching - Hold files in-memory on or-disk until the connction is restored
* Delivering receipts - Know when a message or larger file has been transmitted in its entirety
* Performance metrics - Know how well Message Bottle is running
* Health metrics - Know how well your connection is performing