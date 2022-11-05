import { Router } from 'express';

import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { GetLast3MessagesController } from './controllers/GetLast3MessagesController';

const routes = Router();

routes.get('/github', (request, response) =>
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  )
);

routes.get('/signin/callback', (request, response) => {
  const { code } = request.query;
  return response.json(code);
});

routes.post('/authenticate', new AuthenticateUserController().handle);

routes.get('/messages/last3', new GetLast3MessagesController().handle);

routes.post(
  '/messages',
  ensureAuthenticated,
  new CreateMessageController().handle
);

export { routes };
