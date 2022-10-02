import axios from 'axios'
import { ILoginEntity, LoginResponse } from './entities/login.entity'

export const login = async ({
  username,
  password
}: ILoginEntity): Promise<LoginResponse> => {
  const { data } = await axios.post(`login`, {
    username,
    password
  })
  return {
    access_token: data.access_token,
    refresh_token: data.refresh_token
  }
}
