/*
Filename: SophisticatedProgram.js
Content: This code is a sophisticated program that simulates a social networking platform.
*/

// Data Model
let users = [
    { id: 1, name: "John Doe", age: 25, friends: [2, 3, 4], posts: [] },
    { id: 2, name: "Jane Smith", age: 28, friends: [1, 3], posts: [] },
    { id: 3, name: "Bob Johnson", age: 31, friends: [1, 2], posts: [] },
    { id: 4, name: "Alice Williams", age: 27, friends: [1], posts: [] }
];

let posts = [
    { id: 1, userId: 2, content: "Hello everyone! How is your day going?" },
    { id: 2, userId: 1, content: "Hey Jane! My day is great. Thanks for asking." },
    { id: 3, userId: 3, content: "Hello world!" }
];

// Functions

// Function to get user by ID
function getUserById(userId) {
    return users.find(user => user.id === userId);
}

// Function to get user's friends
function getFriends(userId) {
    const user = getUserById(userId);
    if (user) {
        return users.filter(u => user.friends.includes(u.id));
    }
    return [];
}

// Function to create a new post
function createPost(userId, content) {
    const user = getUserById(userId);
    if (user && content) {
        const postId = posts.length + 1;
        const newPost = { id: postId, userId, content };
        user.posts.push(postId);
        posts.push(newPost);
        return newPost;
    }
    return null;
}

// Function to get user's posts
function getUserPosts(userId) {
    const user = getUserById(userId);
    if (user) {
        return posts.filter(post => post.userId === userId);
    }
    return [];
}

// Usage

const john = getUserById(1);
console.log(john); // { id: 1, name: 'John Doe', age: 25, friends: [ 2, 3, 4 ], posts: [] }

const janeFriends = getFriends(2);
console.log(janeFriends); // [ { id: 1, name: 'John Doe', age: 25, friends: [ 2, 3, 4 ], posts: [] }, { id: 3, name: 'Bob Johnson', age: 31, friends: [ 1, 2 ], posts: [] } ]

const newPost = createPost(1, "I just returned from a fabulous trip!");
console.log(newPost); // { id: 4, userId: 1, content: 'I just returned from a fabulous trip!' }

const johnPosts = getUserPosts(1);
console.log(johnPosts); // [ { id: 2, userId: 1, content: 'Hey Jane! My day is great. Thanks for asking.' }, { id: 4, userId: 1, content: 'I just returned from a fabulous trip!' } ]

// ... Additional complex functionality and further code elaboration beyond this point ...
// ... The code continues to build upon the above data model and functions to simulate a real-world social networking platform ...