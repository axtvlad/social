import axios from "axios";
import {UserType} from "../types/types";

export const api = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '5a02e0ce-1492-47cd-b69a-6445510cc320',
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10,
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}
