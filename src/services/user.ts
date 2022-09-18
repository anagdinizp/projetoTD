import { ApiBase } from "../authorizations/ApiBase";

const prefix = "/user";

export default {
  //login: (payload: any) => ApiBase.post(`${prefix}`/login, payload),
  login: async (payload: {
    email: string;
    password: string;
    age?: number;
    locale?: string;
    telefone?: number;
    name?: string;
  }): Promise<{data: {token:string; id: string; name:string;}}> => {
    localStorage.setItem("token", "tokenzao");
    return Promise.resolve({
      data: {
        token: "tokenzao",
        id: "123",
        name: "Ana",
      }
    })
  }
}
