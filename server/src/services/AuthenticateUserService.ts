import { User } from '@prisma/client';
import axios from 'axios';
import { sign } from 'jsonwebtoken';
import prismaClient from '../prisma';

interface AccessTokenResponse {
  access_token: string;
}

interface UserResponse {
  avatar_url: string;
  login: string;
  id: number;
  name: string;
}

class AuthenticateUserService {
  async execute(code: string) {
    const accessTokenUrl = 'https://github.com/login/oauth/access_token';
    const {
      data: { access_token },
    } = await axios.post<AccessTokenResponse>(accessTokenUrl, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        Accept: 'application/json',
      },
    });

    const { data: userResponse } = await axios.get<UserResponse>(
      'https://api.github.com/user',
      {
        headers: { authorization: `Bearer ${access_token}` },
      }
    );
    const { login, id, avatar_url, name } = userResponse;
    let user: any = await prismaClient.user.findFirst({
      where: { github_id: id },
    });
    if (!user) {
      user = await prismaClient.user.create({
        data: { github_id: id, name, avatar_url, login },
      });
    }

    const token = sign(
      {
        user: { name: user.name, avatar_url: user.avatar_url, id: user.id },
      },
      process.env.JWT_SECRET as string,
      { subject: user.id, expiresIn: '1d' }
    );

    return { token, user };
  }
}

export { AuthenticateUserService };
