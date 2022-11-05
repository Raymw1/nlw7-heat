import { Router } from 'express';

import { AuthenticateUserController } from './controllers/AuthenticateUserController';

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

export { routes };
