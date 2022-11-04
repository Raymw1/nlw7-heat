import axios from 'axios';

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
    try {
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

      const { data: user } = await axios.get<UserResponse>(
        'https://api.github.com/user',
        {
          headers: { authorization: `Bearer ${access_token}` },
        }
      );
      return user;
    } catch (error) {
      return { error: true };
    }
  }
}

export { AuthenticateUserService };
