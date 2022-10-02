import { AxiosError } from 'axios'

export interface ApiError {
  statusCode: number
  message: Array<string>
  error: string
}

export type AxiosErrorCustom = AxiosError<ApiError>
