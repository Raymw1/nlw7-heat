import { Request, Response } from 'express';
import { io } from '../app';
import { CreateMessageService } from '../services/CreateMessageService';

class CreateMessageController {
  async handle(request: Request, response: Response) {
    const { text } = request.body;
    const createMessageService = new CreateMessageService();
    const message = await createMessageService.execute(text, request.user_id);
    const infoWS = {
      text: message.text,
      user_id: message.user_id,
      created_at: message.created_at,
      user: { name: message.user.name, avatar_url: message.user.avatar_url },
    };
    io.emit('new_message', infoWS);
    return response.status(201).json(message);
  }
}

export { CreateMessageController };
