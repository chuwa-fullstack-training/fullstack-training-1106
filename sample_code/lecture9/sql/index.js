const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('test', 'root', 'root1234', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(error => {
    console.error('Unable to connect to the database: ', error);
  });

const User = sequelize.define('users', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

const Post = sequelize.define('posts', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    defaultValue: 'default content'
  }
});

Post.Author = Post.belongsTo(User, { as: 'author' });

// INSERT INTO users (firstName, lastName, email) VALUES ('Aaron', 'Zhang', 'test@gmail');
function createUser({ firstName, lastName, email }) {
  return User.create({
    firstName,
    lastName,
    email
  });
}

// SELECT * FROM users;
function findAllUsers() {
  return User.findAll();

  // SELECT firstName, lastName FROM users;
  // return User.findAll({ attributes: ['firstName', 'lastName'] })
}

// SELECT * FROM users WHERE id = <id>;
function findUserById(id, callback) {
  return User.findByPk(id).then(user => {
    if (callback) return callback(user);
    console.log(user.firstName, user.lastName);
    return Promise.resolve(user);
  });
}

// UPDATE users SET firstName = 'Alex', lastName = 'Chen' WHERE id = <id>;
function updateUser(id) {
  return findUserById(id, user => {
    user.firstName = 'Alex';
    user.lastName = 'Chen';
    return user.save();
  });
}

// DELETE FROM users WHERE id = <id>;
function deleteUser(id) {
  return findUserById(id, user => {
    return user.destroy();
  });
}

sequelize
  .sync({ force: true })
  .then(() => {
    console.log('tables created successfully!');
    // createUser({ firstName: 'something', lastName: 'new', email: 'unknown@test.com' });
    // return findAllUsers();
    // return findUserById(1);
    // return updateUser(1);
    // return deleteUser(1);
    // return Post.create(
    //   {
    //     title: 'Hello World',
    //     content: 'This is my first post!',
    //     author: {
    //       firstName: 'Aaron',
    //       lastName: 'Zhang',
    //       email: 'test@gmail.com'
    //     }
    //   },
    //   { include: [Post.Author] }
    // );
  })
  //   .then(users => {
  //     users.forEach(user => {
  //       console.log(user.firstName, user.lastName);
  //     });
  //   })
  //   .then(user => {
  //     console.log(user.firstName, user.lastName);
  //   })
  //   .then(() => {
  //     console.log('updated successfully!');
  //   })
  //   .then(() => {
  //     console.log('deleted successfully!');
  //   })
  // .then(post => console.log(post.title, post.author.firstName))
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    sequelize.close();
  });
