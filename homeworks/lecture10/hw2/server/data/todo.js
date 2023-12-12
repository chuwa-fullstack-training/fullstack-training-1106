const mongoose = require('./connect');
const { Todo} = require('./schema');

const createTodo = async (name) => {
    const todo = new Todo({
        name: name
      });
      let id;
      let post = await todo
                        .save()
                        .then((todo) => {
                        console.log('Todo saved');
                        id = todo.id;
                        return ' Todo added successfully'
                        })
                        .catch(err => {
                        console.log('Error', err);
                        });
        return {name:name,_id:id};
}
const updateTodoById = async (id, args) => {
    let {status} = args;
    id = new mongoose.Types.ObjectId(id);
    let resp = await Todo.findByIdAndUpdate(id, {
        status: status
      })
        .then(() => {
          console.log('Todo updated');
          return 'Success';
        })
        .catch(err => {
          console.log('Error updating todo', err);
        });
      return resp;
}
const getAllTodos = async () => {
    let todos = await Todo.find()
        .then(todos => {
            console.log(todos);
            return todos
        })
        .catch(err => {
            console.log('Error finding todos', err);
        });
    return todos;
}


module.exports = {
    createTodo,
    updateTodoById,
    getAllTodos
}