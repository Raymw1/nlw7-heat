import { Request, Response } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    try {
      const { code } = request.body;
      const authenticateUserService = new AuthenticateUserService();
      const result = await authenticateUserService.execute(code);
      return response.json(result);
    } catch (error: any) {
      return response.status(401).json(error.message);
    }
  }
}

export { AuthenticateUserController };
