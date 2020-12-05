import {LoginFormDataType} from "../types/types";
import {api, ResultCodeForCaptchaEnum, ResultCodesEnum} from "./api";

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D,
    messages: Array<string>
    resultCode: RC
}

type MeResponseDataType = {
    id: number
    email: string
    login: string
}

type LoginResponseDataType = {
    userId: number
}

export const authAPI = {
    me() {
        return api.get<APIResponseType<MeResponseDataType>>(`auth/me`)
            .then(res => res.data);
    },
    login(formData: LoginFormDataType) {
        return api.post<APIResponseType<LoginResponseDataType, ResultCodesEnum | ResultCodeForCaptchaEnum>>(`auth/login`, formData)
            .then(res => res.data);
    },
    logout() {
        return api.delete(`auth/login`)
            .then(res => res.data);
    }
}