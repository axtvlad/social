import {connect} from "react-redux";
import {follow, getUsersList, unfollow} from "../../Redux/reducers/usersReducer";
import Users from "./Users";
import React from 'react';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPageSelector,
    getFollowingInProgressSelector,
    getPageSizeSelectorSelector,
    getTotalUsersCountSelector,
    getUsersIsFetchingSelector,
    getUsersSelector
} from "../../Redux/selectors/usersSelectors";
import Paginator from "../common/Paginator/Paginator";
import {UserType} from "../../types/types";
import {AppStateType} from "../../Redux/redux-store";

type MapStatePropsType = {
    pageSize: number
    currentPage: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UserType>
    followingInProgress: Array<number>
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsersList: (pageSize: number, currentPage: number) => void
}

type OwnPropsType = {}

type Props = MapDispatchPropsType & MapStatePropsType & OwnPropsType

class UsersContainer extends React.Component<Props> {
    componentDidMount() {
        const {getUsersList, pageSize, currentPage} = this.props;

        getUsersList(pageSize, currentPage);
    }

    changePage = (pageNumber: number) => {
        const {getUsersList, pageSize} = this.props;

        getUsersList(pageSize, pageNumber);
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

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelectorSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getUsersIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state)
    }
}

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
        follow,
        unfollow,
        getUsersList
    }),
)(UsersContainer)