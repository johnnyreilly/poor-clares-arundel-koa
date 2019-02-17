import * as Koa from 'koa';
import * as helmet from 'koa-helmet';
import * as send from 'koa-send';
import * as serve from 'koa-static';
import * as path from 'path';

import { config } from './config';
import { logger } from './logging';
import { routes } from './routes';

const isDevelopment = process.env.NODE_ENV === 'development';

const app = new Koa();

app.use(helmet.contentSecurityPolicy({
    directives: {
      // tslint:disable-next-line:quotemark
      scriptSrc: ["'self'", "'unsafe-inline'", "storage.googleapis.com", "www.google-analytics.com"],
    }
  }));
app.use(logger);
app.use(routes);

const publicPath = isDevelopment
    ? path.join(__dirname, '..', '..', 'client', 'build')
    : path.join(__dirname, '..', 'client', 'build');

const indexHtmlPath = path.join(publicPath, 'index.html');
app.use(serve(publicPath));
app.use(async ctx => {
    await send(ctx, 'index.html', { root: publicPath });
});

app.listen(config.port);

// tslint:disable-next-line:max-line-length
console.log(
    `Server running on port ${config.port}; static files served from ${publicPath}, SPA template from ${indexHtmlPath}`
);
