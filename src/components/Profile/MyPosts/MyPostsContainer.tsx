import {actions} from "../../../Redux/reducers/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {getPostsSelector, getProfileSelector} from "../../../Redux/selectors/profileSelectors";
import React from "react";
import {AddPostFormDataType, PostType, ProfileType} from "../../../types/types";
import {AppStateType} from "../../../Redux/redux-store";

type StateToProps = {
    posts: Array<PostType>
    profile: ProfileType | null
}

type DispatchToProps = {
    addPost: (postText: AddPostFormDataType) => void
}

type Props = StateToProps & DispatchToProps

class MyPostsContainer extends React.Component<Props> {
    render() {
        const {posts, addPost, profile} = this.props;

        return (
            <MyPosts posts={posts} addPost={addPost} profile={profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): StateToProps => {
    return {
        posts: getPostsSelector(state),
        profile: getProfileSelector(state)
    }
};

export default connect<StateToProps, DispatchToProps, {}, AppStateType>(mapStateToProps, {
    addPost: formData => actions.addPost(formData),
})(MyPostsContainer);
