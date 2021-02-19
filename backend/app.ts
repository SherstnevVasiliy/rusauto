import * as Hapi from '@hapi/hapi';
import * as HapiSwagger from 'hapi-swagger';
import { connect } from 'mongoose';
import * as Boom from '@hapi/boom';
import * as Inert from '@hapi/inert';
import * as Vision from '@hapi/vision';
import * as Joi from 'typesafe-joi';
import * as HapiBearer from 'hapi-auth-bearer-token';
import routes from './routes';
import controllers from './controllers';
import db from './database/models';
import items from './database/models/Items/items';

// const mongoose = require('mongoose');

Joi.object();

class App {
  private server: Hapi.Server;

  private async initServer() {
    this.server = Hapi.server({
      port: 8888,
      routes: {
        cors: {
          origin: ['*'],
        },
        validate: {
          failAction: async (request, h, err) => {
            if (err) {
              throw Boom.badRequest(err.message);
            }
          },
          options: {
            abortEarly: false,
          },
        },
      },
    });

    const swaggerOptions: HapiSwagger.RegisterOptions = {
      info: {
        title: 'Test API Documentation',
      },
      securityDefinitions: {
        Bearer: {
          type: 'apiKey',
          description: 'Your authorization "Bearer token" string',
          name: 'Authorization',
          in: 'header',
        },
      },
      security: [{ Bearer: [] }],
      grouping: 'tags',
      jsonPath: '/api/swagger.json',
      swaggerUIPath: '/api/swaggerui',
      documentationPath: '/api/documentation',
      cors: true,
    };

    const plugins: Array<Hapi.ServerRegisterPluginObject<any>> = [
      {
        plugin: HapiBearer,
      },
      {
        plugin: Inert,
      },
      {
        plugin: Vision,
      },
      {
        plugin: HapiSwagger,
        options: swaggerOptions,
      },
    ];

    await this.server.register(plugins);

    this.server.auth.strategy('static', 'bearer-access-token', {
      validate: controllers.Auth.authUser,
    });
    this.server.realm.modifiers.route.prefix = '/api';
    this.server.events.on('response', request => {
      const {
        info: { remoteAddress },
      } = request;
      const response = <Hapi.ResponseObject>request.response;

      const isSwagger = request.path.includes('/swagger');
      if (isSwagger) return true;
      return true;
    });

    this.server.route(routes);
  }

  private async initDb() {
    connect('mongodb://app_mongo_db:27017/app_db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  }

  private async setItemDb() {
    const foundItems = await db.Items.users.find();
    if (!foundItems.length) {
      const setItems = await db.Items.users.insertMany(items);
      console.log('Товары в базу данных подгружены');
    } else {
      console.log(`Db Items check - ok, товаров в базе - ${foundItems.length}`);
    }
  }

  public async start() {
    process.on('unhandledRejection', err => {
      console.log(err);
      process.exit(1);
    });
    try {
      await this.initServer();
      await this.initDb();
      await this.server.start();
      console.log(
        'Сервер запущен на %s://%s:%s',
        this.server.info.protocol,
        this.server.info.address,
        this.server.info.port
      );

      console.log(
        'Документация к API доступна по ссылке %s://%s:%s/api/documentation',
        this.server.info.protocol,
        this.server.info.address,
        this.server.info.port
      );
      await this.setItemDb();
    } catch (err) {
      console.log(err);
    }
  }
}

export default new App();
