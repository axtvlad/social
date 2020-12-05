import React, {ChangeEvent, useEffect, useState} from 'react';

type Props = {
    profileStatus: string
    updateProfileStatus: (status: string) => void
}

const ProfileStatus: React.FC<Props> = ({profileStatus, updateProfileStatus}) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(profileStatus);

    useEffect(() => {
        setStatus(profileStatus)
    }, [profileStatus])

    const editModeOn = () => {
        setEditMode(true)
    }

    const editModeOff = () => {
        setEditMode(false)

        updateProfileStatus(status);
    }

    const changeProfileStatus = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setStatus(value);
    }

    return (
        <div>
            {!editMode &&
            <div>
                <b>
                    <span id={'profileStatus'} onDoubleClick={editModeOn}>
                        {profileStatus || '----'}
                    </span>
                </b>
            </div>
            }
            {editMode &&
            <div>
                <input
                    onChange={changeProfileStatus}
                    onBlur={editModeOff}
                    value={status}
                    type={'text'}
                    autoFocus={true}
                />
            </div>
            }
        </div>
    )
}

export default ProfileStatus;
