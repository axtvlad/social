import React from 'react';
import User from "./User/User";

const Users = ({unfollow, follow, followingInProgress, users}) => {
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