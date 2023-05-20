import $api from "@/http";
import { IUser } from "@/models/IUser";
import { AuthResponse } from "@/models/response/AuthResponse";
import { AxiosResponse } from "axios";

export default class AuthService {
  static async login(email: string, password: string):Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/auth/signin', {email, password})
  }

  static async reg(email: string, password: string, username:string):Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/auth/signup', {email, password, username})
  }

  static async logout():Promise<void> {
    return $api.post('/auth/logout')
  }

  static async getUser():Promise<AxiosResponse<IUser>> {
    return $api.get('/auth/get-user')
  }

}