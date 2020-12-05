import React from 'react';
import Post from "./Post/Post";
import classes from './MyPosts.module.css'
import {PostType, ProfileType} from "../../../types/types";
import AddPostForm from "./AddPostForm/AddPostForm";

type Props = {
    posts: Array<PostType>
    profile: ProfileType | null

    addPost: (postMessage: string) => void
}

type AddPostFormType = {
    postText: string
}

const MyPosts: React.FC<Props> = React.memo(({posts, profile, addPost}) => {
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

    const addNewPost = ({postText}: AddPostFormType) => {
        addPost(postText);
    }

    return (
        <div className={classes.postsBloc}>
            <h3>my posts</h3>
            <AddPostForm onSubmit={addNewPost}/>
            <div className={classes.posts}>
                {postsList}
            </div>
        </div>
    );
})

export default MyPosts
