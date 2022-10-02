export interface ILoginEntity {
  username: string
  password: string
}

export interface LoginError {
  statusCode: number
  error: string
  message: string
}

export interface LoginResponse {
  access_token: string
  refresh_token: string
}
