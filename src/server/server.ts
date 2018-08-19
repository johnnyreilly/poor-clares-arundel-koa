import * as Koa from 'koa';
import * as serve from 'koa-static';
import * as path from 'path';

import { config } from './config';
import { logger } from './logging';
// import { routes } from "./routes";

const app = new Koa();

app.use(logger);
// app.use(routes);

const publicPath = path.join(__dirname, '../', 'public');
app.use(serve(publicPath));

app.listen(config.port);

console.log(`Server running in ${publicPath} on port ${config.port}`);
