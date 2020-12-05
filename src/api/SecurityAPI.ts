import {api} from "./api";

type GetCaptchaUrlResponseType = {
    url: string
}

export const securityAPI = {
    getCaptchaUrl() {
        return api.get<GetCaptchaUrlResponseType>(`security/get-captcha-url`)
            .then(res => res)
    }
}