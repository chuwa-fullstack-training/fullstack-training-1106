import "./style.css"
function Todo({todo, handleChecked}){
    const handleChange = ()=>{
        handleChecked(todo.id);
    }
   return (
    <div className="todo">
        <label>
            <input type='checkbox' checked={todo.checked} onChange={handleChange} />
            {todo.title}
        </label>
    </div>
   )
};

export default Todo;