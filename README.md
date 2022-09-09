### To run the application

#### development

`yarn dev`

#### build

`yarn build`

#### start

`yarn start`

#### build docker image

`docker build -t docketbook-api:latest .`

#### run docker image

`docker run -p 3000:3000 docketbook-api:latest`

#### When running, go to localhost:3000 at paths:

#### dockets

`/dockets`

#### docket by id

`/dockets/:id`
