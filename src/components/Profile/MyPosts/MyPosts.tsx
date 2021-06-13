import React, {FC} from 'react';
import Post from "./Post/Post";
import classes from './MyPosts.module.css'
import {AddPostFormDataType} from "../../../types/types";
import AddPostForm from "./AddPostForm/AddPostForm";
import {useDispatch, useSelector} from "react-redux";
import {selectPosts, selectProfile} from "../../../Redux/selectors/profileSelectors";
import {actions} from '../../../Redux/reducers/profileReducer';

export const MyPosts: FC = React.memo((props) => {
    const posts = useSelector(selectPosts)
    const profile = useSelector(selectProfile)

    const dispatch = useDispatch()

    const onAddPost = (formData: AddPostFormDataType) => {
        dispatch(actions.addPost(formData))
    }

    const postsList = [...posts]
        .reverse()
        .map(item =>
            <Post
                profile={profile}
                message={item.message}
                likes={item.likes}
                key={item.id}
            />
        )

    const styles = {
        postsBloc: {
            padding: 10
        },
        posts: {
            marginTop: 5
        }
    }

    return (
        <div style={styles.postsBloc}>
            <h3>my posts</h3>
            <AddPostForm addPost={onAddPost}/>
            <div style={styles.posts}>
                {postsList}
            </div>
        </div>
    );
})
