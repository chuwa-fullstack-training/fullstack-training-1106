// import "./style.css"
function Todo({todo, handleChecked}){
    const handleChange = ()=>{
        handleChecked(todo.id);
    }
   return (
    <div style={{width:'100%', border:'1px black solid'}}>
        <label>
            <input type='checkbox' checked={todo.checked} onChange={handleChange} />
            {todo.title}
        </label>
    </div>
   )
};

export default Todo;