import {actions} from "../../../Redux/reducers/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {getPostsSelector, getProfileSelector} from "../../../Redux/selectors/profileSelectors";
import React from "react";
import {PostType, ProfileType} from "../../../types/types";
import {AppStateType} from "../../../Redux/redux-store";

type StateProps = {
    posts: Array<PostType>
    profile: ProfileType | null
}

type DispatchProps = {
    addPost: (postText: string) => void
}

type Props = StateProps & DispatchProps

class MyPostsContainer extends React.Component<Props> {
    render() {
        const {posts, addPost, profile} = this.props;

        return (
            <MyPosts posts={posts} addPost={addPost} profile={profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): StateProps => {
    return {
        posts: getPostsSelector(state),
        profile: getProfileSelector(state)
    }
};

export default connect<StateProps, DispatchProps, {}, AppStateType>(mapStateToProps, {
    addPost: postText => actions.addPost(postText),
})(MyPostsContainer);
