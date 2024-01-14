State
{
    todos: []
    remainTasks: 0
}

Action
ADD_TODO - add a task to todos array
CLEAR_TODO - clear all completed todo from todos
CHANGE_STATUS_BY_ID - change a task in todos to be completed/uncompleted
MARK_ALL_DONE - mark all todos done

Reducer
case ADD_TODO :
    todos = todos.concat(new_task)
    remainTasks++

case CLEAR_TODO :
    todos = for all todos, remove completed
    remainTasks = todos.length

case CHANGE_STATUS_BY_ID:
    todos = change status if match id passed in
    remainTasks = todos.compute number of completed

case MARK_ALL_DONE:
    todos = for all todos mark done
    remainTasks = 0