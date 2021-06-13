import React, {FC, useState} from 'react'
import undefinedAva from '../../../media/user.png'
import ProfileStatus from "./ProfileStatus/ProfileStatus"
import {ProfileDataForm} from "./ProfileData/ProfileDataForm"
import ProfileData from "./ProfileData/ProfileData"
import {EditProfileDataForm, ProfileType} from "../../../types/types"
import {Avatar, Button, Card, Upload} from "antd"
import Meta from "antd/es/card/Meta"
import {CameraOutlined} from '@ant-design/icons'
import {RcCustomRequestOptions} from "antd/es/upload/interface";

type Props = {
    profile: ProfileType
    updateProfileStatus: (status: string) => void
    profileStatus: string
    isOwner: boolean
    uploadPhoto: (photo: File) => void
    saveProfileData: (formData: EditProfileDataForm) => any
}

const ProfileInfo: FC<Props> = (props) => {
    const {profile, updateProfileStatus, profileStatus, isOwner, uploadPhoto, saveProfileData} = props

    const [editMode, setEditMode] = useState(false)

    const onPhotoSelected = (file: RcCustomRequestOptions) => {
        uploadPhoto(file.file)
    }

    const editModeOn = () => {
        setEditMode(true)
    }

    const saveProfile = (formData: EditProfileDataForm) => {
        // todo remove .then

        saveProfileData(formData)
            .then(() => {
                setEditMode(false)
            })
    }

    const styles = {
        descriptionBlock: {
            padding: 10
        },
        card: {
            width: 250
        }
    }

    return (
        <div style={styles.descriptionBlock}>
            <Card
                style={styles.card}
                bordered={true}
                actions={isOwner ? [
                    <Upload
                        listType={'picture'}
                        showUploadList={false}
                        type={"select"}
                        multiple={false}
                        accept={'.png,.jpeg,.jpg,.svg,.heic'}
                        customRequest={onPhotoSelected}
                    >
                        <Button type={"dashed"} icon={<CameraOutlined/>}/>
                    </Upload>
                ] : []}
            >
                <Meta avatar={<Avatar size={200} src={profile.photos.large || undefinedAva}/>}
                />
            </Card>

            {isOwner && editMode
                ? <ProfileDataForm saveProfile={saveProfile} profile={profile}/>
                : <ProfileData
                    editModeOn={editModeOn}
                    profile={profile}
                    isOwner={isOwner}
                />
            }

            <ProfileStatus profileStatus={profileStatus} updateProfileStatus={updateProfileStatus}/>
        </div>
    );
}

export default ProfileInfo;
