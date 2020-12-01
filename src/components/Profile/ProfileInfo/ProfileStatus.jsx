import React, {useEffect, useState} from 'react';

const ProfileStatus = ({profileStatus, updateProfileStatus}) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(profileStatus);

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

    const changeProfileStatus = (e) => {
        let value = e.target.value;

        setStatus(value);
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span id={'profileStatus'}
                    onDoubleClick={editModeOn}
                >
                    {profileStatus || '----'}
                </span>
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
