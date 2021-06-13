import React, {FC, useEffect} from 'react'
import User from "./User/User"
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPageSelector,
    getFollowingInProgressSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersFilterSelector,
    getUsersSelector
} from "../../Redux/selectors/usersSelectors";
import {FilterType, follow, getUsersList, unfollow} from "../../Redux/reducers/usersReducer";
import UsersSearchForm from "./UsersSearchForm";
import {Paginator} from "../common/Paginator/Paginator";
import {useHistory} from 'react-router-dom';
import qs from 'qs'

type QueryParamsType = {
    term?: string
    page?: string
    friend?: string
}
export const Users: FC = (props) => {
    const users = useSelector(getUsersSelector)
    const followingInProgress = useSelector(getFollowingInProgressSelector)
    const totalUsersCount = useSelector(getTotalUsersCountSelector)
    const currentPage = useSelector(getCurrentPageSelector)
    const pageSize = useSelector(getPageSizeSelector)
    const filter = useSelector(getUsersFilterSelector)

    const dispatch = useDispatch()
    const history = useHistory()

    const unfollowUser = (userId: number) => {
        dispatch(unfollow(userId))
    }

    const followUser = (userId: number) => {
        dispatch(follow(userId))
    }

    const onChangePage = (pageNumber: number) => {
        dispatch(getUsersList(pageSize, pageNumber, filter))
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsersList(pageSize, 1, filter)) //current page = 1, если обновляем фильтр
    }

    useEffect(() => {
        dispatch(getUsersList(pageSize, currentPage, filter))
    }, [])

    useEffect(() => {
        const parsedQs = qs.parse(history.location.search.substr(1)) as QueryParamsType

        let actualPage = currentPage
        let actualFilter = filter

        if (parsedQs.page) {
            actualPage = JSON.parse(parsedQs.page)
        }

        if (parsedQs.term) {
            actualFilter = {...actualFilter, term: parsedQs.term as string}
        }

        if (parsedQs.friend) {
            actualFilter = {...actualFilter, friend: JSON.parse(parsedQs.friend)}
        }

        dispatch(getUsersList(pageSize, actualPage, actualFilter))
    }, [])

    useEffect(() => {
        const queryParams: QueryParamsType = {}

        if (filter.term) {
            queryParams.term = filter.term
        }

        if (filter.friend !== null) {
            queryParams.friend = JSON.stringify(filter.friend)
        }

        if (currentPage !== 1) {
            queryParams.page = JSON.stringify(currentPage)
        }

        history.push({
            pathname: '/users',
            search: qs.stringify(queryParams)
        })
    }, [filter, currentPage])

    return (
        <>
            <UsersSearchForm onFilterChanged={onFilterChanged}/>
            <Paginator
                currentPage={currentPage}
                changePage={onChangePage}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
            />
            {users.map(user =>
                <User
                    key={user.id}
                    user={user}
                    follow={followUser}
                    unfollow={unfollowUser}
                    followingInProgress={followingInProgress}
                />
            )}
        </>
    )
}