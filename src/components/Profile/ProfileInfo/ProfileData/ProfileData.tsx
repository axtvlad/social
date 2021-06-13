import React from 'react';
import {Contact} from "../Contact/Contact";
import {ProfileType} from "../../../../types/types";

type Props = {
    profile: ProfileType
    editModeOn: () => void
    isOwner: boolean
}

const ProfileData: React.FC<Props> = ({profile, editModeOn, isOwner}) => {
    const {fullName, lookingForAJob, lookingForAJobDescription, aboutMe, contacts} = profile;

    return (
        <div>
            <div>
                <b>Full name</b>: {fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {lookingForAJob ? 'yes' : 'no'}
            </div>
            {lookingForAJob &&
            <div>
                <b>My skills</b>: {lookingForAJobDescription}
            </div>
            }
            <div>
                <b>About me</b>: {aboutMe}
            </div>
            <div>
                <b>Contacts</b>:
                {Object.keys(contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={contacts[key]}/>
                })}
            </div>
            {isOwner &&
            <div>
                <button onClick={editModeOn}>Edit user's data</button>
            </div>
            }
        </div>
    )
}

export default ProfileData;
