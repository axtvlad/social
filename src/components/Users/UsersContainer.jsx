import {connect} from "react-redux";
import {follow, getUsersList, unfollow} from "../../Redux/usersReducer";
import Users from "./Users";
import React from 'react';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPageSelector,
    getFollowingInProgressSelector,
    getIsFetchingSelector,
    getPageSizeSelectorSelector,
    getTotalUsersCountSelector,
    getUsersSelector
} from "../../Redux/usersSelectors";
import Paginator from "../common/Paginator/Paginator";

class UsersContainer extends React.Component {
    componentDidMount() {
        let {getUsersList, pageSize, currentPage} = this.props;

        getUsersList(pageSize, currentPage);
    }

    changePage = (pageNumber) => {
        let {getUsersList, pageSize} = this.props;

        getUsersList(pageSize, pageNumber);
    }

    render() {
        let {
            isFetching,
            totalUsersCount,
            pageSize,
            currentPage,
            users, follow,
            unfollow,
            setFollowingInProgress,
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
                        setFollowingInProgress={setFollowingInProgress}
                        followingInProgress={followingInProgress}
                    />
                }
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelectorSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        getUsersList
    }),
)(UsersContainer)