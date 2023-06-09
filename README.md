## Problem Statement

API should have a few basic methods like 
• fetching N news articles
• finding a news article with a specific title or author  
• searching by keywords

Include a cache in your API service as well so users are not fetching the same things over and over.

## Description

[NewsApp](https://github.com/geekrishabh/newsapp). News App repo

This is build using NESTJS. 


## Clone 

```bash
$ git clone https://github.com/GeekRishabh/newsapp.git
```

## Installation

```bash
$ npm install
```

## Running the app

Make sure you copy `.env.exmaple` and create `.env` 
update the value for .env that you can get from https://gnews.io/


```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Swagger Document 

It can be accessed at host:port/api

Dev mode `http:localhost:3000/api`


## Deploying on Docker

docker build -t news-app .

docker run -dp 3000:3000 --name news-app news-app