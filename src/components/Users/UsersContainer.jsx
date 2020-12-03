import {connect} from "react-redux";
import {follow, getUsersList, unfollow} from "../../Redux/reducers/usersReducer";
import Users from "./Users";
import React from 'react';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPageSelector,
    getFollowingInProgressSelector,
    getUsersIsFetchingSelector,
    getPageSizeSelectorSelector,
    getTotalUsersCountSelector,
    getUsersSelector
} from "../../Redux/selectors/usersSelectors";
import Paginator from "../common/Paginator/Paginator";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {getUsersList, pageSize, currentPage} = this.props;

        getUsersList(pageSize, currentPage);
    }

    changePage = (pageNumber) => {
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

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelectorSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getUsersIsFetchingSelector(state),
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