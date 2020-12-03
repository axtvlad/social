import React from 'react';
import Post from "./Post/Post";
import classes from './MyPosts.module.css'
import {Field, Form} from "react-final-form";
import {composeValidators, maxLength, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const AddPostForm = ({onSubmit}) => {
    return (
        <Form onSubmit={onSubmit}>
            {(props) => {
                return (
                    <form onSubmit={props.handleSubmit} name={'AddPostForm'}>
                        <div>
                            <Field
                                component={Textarea}
                                name={'postText'}
                                validate={composeValidators(required, maxLength(300))}
                                placeholder={'post msg'}
                            />
                        </div>
                        <div>
                            <button>
                                Add post
                            </button>
                        </div>
                    </form>
                )
            }}
        </Form>
    )
}

const MyPosts = React.memo(({posts, profile, addPost}) => {
    const postsList = [...posts]
        .reverse()
        .map(item =>
            <Post
                profile={profile}
                message={item.message}
                likes={item.likes}
                id={item.id}
                key={item.id}
            />
        )

    const addNewPost = (values) => {
        addPost(values.postText);
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
});

export default MyPosts;
