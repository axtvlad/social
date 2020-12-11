export type PostType = {
    id: number
    message: string
    likes: number
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
    [key: string]: string
}

export type PhotosType = {
    small: string | null
    large: string | null
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe: string
}

export type UserType = {
    followed: boolean;
    id: number
    name: string
    status: string
    photos: PhotosType
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type LoginFormDataType = {
    email: string
    password: string,
    captcha?: string
    rememberMe: boolean
}

export type SendMessageFormDataType = {
    messageText: string
}

export type AddPostFormDataType = {
    postText: string
}