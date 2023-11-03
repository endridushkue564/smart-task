/* 
   * Code Filename: ComplexCode.js
   * Description: This code demonstrates a complex implementation of a social media network.
   *
   * DISCLAIMER: This code is only a demonstration and may not be fully functional. It's intended to showcase
   *             complexity and creativity rather than providing a real-life product.
   *
   * Author: [Your Name]
   * Date: [Current Date]
   */
  
  // Helper Classes and Functions

  class User {
    constructor(name, age, email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.posts = [];
      this.friends = [];
    }

    addPost(post) {
      this.posts.push(post);
    }

    addFriend(user) {
      this.friends.push(user);
    }
  }

  function createUser(name, age, email) {
    return new User(name, age, email);
  }

  class Post {
    constructor(content, timestamp) {
      this.content = content;
      this.timestamp = timestamp;
    }
  }

  function createPost(content) {
    return new Post(content, new Date());
  }

  // Social Media Network

  const users = [];

  function addUser(user) {
    users.push(user);
  }

  function findUserByEmail(email) {
    return users.find((user) => user.email === email);
  }

  function getPostsByUser(user) {
    return user.posts;
  }

  function getFriendsByUser(user) {
    return user.friends;
  }

  // Example Usage

  const user1 = createUser("Alice", 25, "alice@example.com");
  const user2 = createUser("Bob", 30, "bob@example.com");
  const user3 = createUser("Charlie", 21, "charlie@example.com");

  addUser(user1);
  addUser(user2);
  addUser(user3);

  const post1 = createPost("Hello, world!");
  const post2 = createPost("This is a complex code example in JavaScript.");
  const post3 = createPost("Stay tuned for more sophisticated demos!");

  user1.addPost(post1);
  user1.addPost(post2);
  user2.addPost(post3);

  user1.addFriend(user2);
  user2.addFriend(user1);
  user2.addFriend(user3);
  user3.addFriend(user2);

  console.log("User 1 Posts:", getPostsByUser(user1));
  console.log("User 1 Friends:", getFriendsByUser(user1)); 

  console.log("User 2 Posts:", getPostsByUser(user2));
  console.log("User 2 Friends:", getFriendsByUser(user2));

  console.log("User 3 Posts:", getPostsByUser(user3));
  console.log("User 3 Friends:", getFriendsByUser(user3));
