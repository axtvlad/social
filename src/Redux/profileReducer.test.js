import profileReducer, {addPost, deletePost} from "./profileReducer";

let initial = {
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
    let action = addPost('Post testing');
    let newState = profileReducer(initial, action);

    expect(newState.posts.length).toBe(3);
});

it('Id of new post should be 3', () => {
    let action = addPost('Post testing');
    let newState = profileReducer(initial, action);

    expect(newState.posts[2].id).toBe(3);
});

it('Message of new post should be correct', () => {
    let action = addPost('Post testing');
    let newState = profileReducer(initial, action);

    expect(newState.posts[2].message).toBe('Post testing');
});

it('Likes of new post should be 0', () => {
    let action = addPost('Post testing');
    let newState = profileReducer(initial, action);

    expect(newState.posts[2].likes).toBe(0);
});

it('After deleting length of posts should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(initial, action);

    expect(newState.posts.length).toBe(1);
});

it('Length of posts should not be changed if incorrect post id', () => {
    let action = deletePost(100);
    let newState = profileReducer(initial, action);

    expect(newState.posts.length).toBe(2);
});
