import {connect} from "react-redux"
import {FilterType, follow, getUsersList, unfollow} from "../../Redux/reducers/usersReducer"
import Users from "./Users"
import React from 'react'
import Preloader from "../common/Preloader/Preloader"
import {compose} from "redux"
import {
    getCurrentPageSelector,
    getFollowingInProgressSelector,
    getPageSizeSelectorSelector,
    getTotalUsersCountSelector,
    getUsersFilterSelector,
    getUsersIsFetchingSelector,
    getUsersSelector
} from "../../Redux/selectors/usersSelectors"
import Paginator from "../common/Paginator/Paginator"
import {UserType} from "../../types/types"
import {AppStateType} from "../../Redux/redux-store"
import UsersSearchForm from "./UsersSearchForm"

type StateToProps = {
    pageSize: number
    currentPage: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UserType>
    followingInProgress: Array<number>
    filter: FilterType
}

type DispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsersList: (pageSize: number, currentPage: number, filter: FilterType) => void
}

type Props = DispatchToProps & StateToProps

class UsersContainer extends React.Component<Props> {
    componentDidMount() {
        const {getUsersList, pageSize, currentPage, filter} = this.props;

        getUsersList(pageSize, currentPage, filter);
    }

    changePage = (pageNumber: number) => {
        const {getUsersList, pageSize, filter} = this.props;

        getUsersList(pageSize, pageNumber, filter);
    }

    onFilterChanged = (filter: FilterType) => {
        const {pageSize, getUsersList} = this.props;

        getUsersList(pageSize, 1, filter); //current page 1, если обновляем фильтр
    }

    render() {
        const {
            isFetching,
            totalUsersCount,
            pageSize,
            currentPage,
            users, follow,
            unfollow,
            followingInProgress
        } = this.props;

        return (
            <>
                <UsersSearchForm onFilterChanged={this.onFilterChanged}/>
                <Paginator
                    currentPage={currentPage}
                    changePage={this.changePage}
                    totalItemsCount={totalUsersCount}
                    pageSize={pageSize}
                />
                {isFetching ? <Preloader/> :
                    <Users
                        users={users}
                        follow={follow}
                        unfollow={unfollow}
                        followingInProgress={followingInProgress}
                    />
                }
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType): StateToProps => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelectorSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getUsersIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state),
        filter: getUsersFilterSelector(state)
    }
}

export default compose<React.ComponentType>(
    connect<StateToProps, DispatchToProps, {}, AppStateType>(mapStateToProps, {
        follow,
        unfollow,
        getUsersList
    }),
)(UsersContainer)