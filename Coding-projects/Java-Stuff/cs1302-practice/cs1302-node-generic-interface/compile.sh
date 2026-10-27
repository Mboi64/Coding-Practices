#!/bin/bash 

set -x
set -e

rm -r bin
mkdir bin

javac -d bin src/cs1302/node/Node.java
javac -d bin src/cs1302/adt/Container.java
javac -cp bin -d bin src/cs1302/adt/AbstractLinkedContainer.java
javac -cp bin -d bin src/cs1302/adt/LinkedStack.java
javac -cp bin -d bin src/cs1302/adt/LinkedQueue.java
javac -cp bin -d bin src/cs1302/app/ContainerUtil.java
javac -cp bin -d bin src/cs1302/app/Main.java

java -cp bin cs1302.app.Main