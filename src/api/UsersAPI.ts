import {api, GetItemsType} from "./api";
import {APIResponseType} from "./AuthAPI";

export const usersAPI = {
    getUsers(pageSize = 5, pageNumber = 1) {
        return api.get<GetItemsType>(`users?count=${pageSize}&page=${pageNumber}`)
            .then(res => res.data);
    },
    follow(userId: number) {
        return api.post<APIResponseType>(`follow/${userId}`)
            .then(res => res.data);
    },
    unfollow(userId: number) {
        return api.delete<APIResponseType>(`follow/${userId}`)
            .then(res => res.data);  // as Promise<ResponseType>
    }
}