# Poor Clares Arundel [![Build Status](https://travis-ci.org/johnnyreilly/poor-clares-arundel-koa.svg?branch=master)](https://travis-ci.org/johnnyreilly/poor-clares-arundel-koa)

The Poor Clares of Arundel's website - the source of: http://www.poorclaresarundel.org/

To my knowledge this is the first Convent with Continuous Deployment.

Built on Angular 1.x and Koa.

## Developing

To run locally you can `docker-compose up`; remember to update `docker-compose.yml` with variables.

You can debug the server in VS Code by hitting F5.

Before you do that either:

```
cd src/client
yarn watch
```

or

```
cd src/client
yarn build
```

## Licence

Copyright © 2014 [John Reilly](twitter.com/johnny_reilly). This project is licensed under the [MIT license](http://opensource.org/licenses/mit-license.php).