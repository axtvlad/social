import {useSelector} from "react-redux"
import React, {FC} from 'react'
import {getUsersIsFetchingSelector} from "../../Redux/selectors/usersSelectors"
import {Users} from "./Users";
import Preloader from "../common/Preloader/Preloader";

export const UsersPage: FC = (props) => {
    const isFetching = useSelector(getUsersIsFetchingSelector)

    return (
        <>
            {isFetching && <Preloader/>}
            <Users/>
        </>
    )
}