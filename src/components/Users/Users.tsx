import React from 'react';
import User from "./User/User";
import {UserType} from "../../types/types";

type Props = {
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    followingInProgress: Array<number>
    users: Array<UserType>
}

const Users: React.FC<Props> = ({unfollow, follow, followingInProgress, users}) => {
    return (
        <div>
            {users.map(user =>
                <User
                    key={user.id}
                    user={user}
                    follow={follow}
                    unfollow={unfollow}
                    followingInProgress={followingInProgress}
                />
            )}
        </div>
    )
}

export default Users;