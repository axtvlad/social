import {addPost, deletePost, profileReducer} from "../reducers/profileReducer";

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
    ]
}

it('New post should be added to posts', () => {
    const action = addPost('Post testing');
    const newState = profileReducer(initial, action);

    expect(newState.posts.length).toBe(3);
});

it('Id of new post should be 3', () => {
    const action = addPost('Post testing');
    const newState = profileReducer(initial, action);

    expect(newState.posts[2].id).toBe(3);
});

it('Message of new post should be correct', () => {
    const action = addPost('Post testing');
    const newState = profileReducer(initial, action);

    expect(newState.posts[2].message).toBe('Post testing');
});

it('Likes of new post should be 0', () => {
    const action = addPost('Post testing');
    const newState = profileReducer(initial, action);

    expect(newState.posts[2].likes).toBe(0);
});

it('After deleting length of posts should be decrement', () => {
    const action = deletePost(1);
    const newState = profileReducer(initial, action);

    expect(newState.posts.length).toBe(1);
});

it('Length of posts should not be changed if incorrect post id', () => {
    const action = deletePost(100);
    const newState = profileReducer(initial, action);

    expect(newState.posts.length).toBe(2);
});
