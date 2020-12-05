import {actions, profileReducer} from "../reducers/profileReducer";
import {PostType, ProfileType} from "../../types/types";

const initial = {
    posts: [
        {
            id: 1,
            message: 'happy ny!',
            likes: 3
        }, {
            id: 2,
            message: 'it is my first post',
            likes: 5
        },
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    isFetching: false,
    profileStatus: '',
}

it('New post should be added to posts', () => {
    const action = actions.addPost('Post testing');
    const newState = profileReducer(initial, action);

    expect(newState.posts.length).toBe(3);
});

it('Id of new post should be 3', () => {
    const action = actions.addPost('Post testing');
    const newState = profileReducer(initial, action);

    expect(newState.posts[2].id).toBe(3);
});

it('Message of new post should be correct', () => {
    const action = actions.addPost('Post testing');
    const newState = profileReducer(initial, action);

    expect(newState.posts[2].message).toBe('Post testing');
});

it('Likes of new post should be 0', () => {
    const action = actions.addPost('Post testing');
    const newState = profileReducer(initial, action);

    expect(newState.posts[2].likes).toBe(0);
});

it('After deleting length of posts should be decrement', () => {
    const action = actions.deletePost(1);
    const newState = profileReducer(initial, action);

    expect(newState.posts.length).toBe(1);
});

it('Length of posts should not be changed if incorrect post id', () => {
    const action = actions.deletePost(100);
    const newState = profileReducer(initial, action);

    expect(newState.posts.length).toBe(2);
});
