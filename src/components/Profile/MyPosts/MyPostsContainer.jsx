import {addPost} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {getPostsSelector, getProfileSelector} from "../../../Redux/profileSelectors";

let mapStateToProps = (state) => {
    return {
        posts: getPostsSelector(state),
        profile: getProfileSelector(state)
    }
};

const MyPostsContainer = connect(mapStateToProps, {
    addPost,
})(MyPosts);

export default MyPostsContainer;
