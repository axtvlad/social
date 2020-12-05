import {PhotosType, ProfileType} from "../types/types";
import {api} from "./api";
import {APIResponseType} from "./AuthAPI";

type UpdatePhotoResponseDataType = {
    photos: PhotosType
}

export const profileAPI = {
    getProfileAPI(userId: number) {
        return api.get<ProfileType>(`profile/${userId}`)
            .then(res => res.data)
    },
    getProfileStatus(userId: number) {
        return api.get<string>(`profile/status/${userId}`).then(res => res.data)
    },
    updateProfileStatus(status: string) {
        return api.put<APIResponseType>(`profile/status`, {
            status: status
        })
            .then(res => res)
    },
    uploadPhoto(photo: File) {
        const formData = new FormData();

        formData.append('image', photo);

        return api.put<APIResponseType<UpdatePhotoResponseDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => res.data)
    },
    saveProfile(profileData: ProfileType) {
        return api.put<APIResponseType<ProfileType>>(`profile`, profileData)
            .then(res => res.data)
    }
}