import { Router } from 'express';

import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';

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

routes.post(
  '/messages',
  ensureAuthenticated,
  new CreateMessageController().handle
);

export { routes };
