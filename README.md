# Node Express JS Rest API with Winston Logging Configuration Demo Repo
This is demo repo to demostrate how to work with [Winston](https://www.npmjs.com/package/winston) logging in Node Express JS Rest API. Logging will output to STROUT (console) and log path (/logs/log.log). This repo also contain containerization materials for futher deployment in Kubernetes (K8S) cluster (e.g Azure Kubernetes Service (AKS)). 

Readme update 1.0

## With Winston Logging
* Logging format = Type, Label, Datetime, Status Code, Status Message, Request Path, Request Method, Client IP, Host IP
```shell
Please refer to index.js line 6 - 27 for core Winston configuration.
Line 33 for normal response capture.
Line 38 - 47 for error capture.
```

## Run locally
```shell
node index.js
```

## Test Rest API locally
```shell
http://localhost:8081
```

## Containerize
1. Build a docker image using `Dockerfile`:
   ```
   docker build -t node-express-js-rest-api-demo .
   ```
2. Run docker image locally
   ```
   docker run --rm -p 8081:8081 node-express-js-rest-api-demo
   ```
3. Then you can access the Rest API at http://localhost:8081/listSAs from Postman.

## Deploy to K8S
```shell
kubectl apply -f node-express-js-rest-api-demo.yaml
```