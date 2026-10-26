#!/bin/bash 
set -x
set -e

rm -r bin
mkdir bin

javac -d bin src/cs1302/adt/BoundedStack.java
javac -cp bin -d bin src/cs1302/app/StackUtils.java
javac -cp bin -d bin src/cs1302/app/Main.java

java -cp bin cs1302.app.Main