import React, { Component } from 'react';

class TodoCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        };
    }

    handleChange = (event) => {
        this.setState({
            title: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: '',
        });
    };

    render() {
        return (
            <div className="todo-input-bar">
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder={'Type a todo and hit Enter'}
                        onChange={this.handleChange}
                        value={this.state.title}
                        style={{ width: '300px' }}
                    />
                </form>
            </div>
        );
    }
}

export default TodoCreate;


// import React, { useState } from 'react';


// function TodoCreate({ addTodo}){
//     const [title, setTitle] = useState('');
//     const handleChange = (event)=>{
//         setTitle(event.target.value);
//     }

//     const handleSubmit = (event)=>{
//         event.preventDefault();
//         addTodo(title);
//         setTitle('');
//     }

//     return (
//         <div className="todo-input-bar">
//             <form onSubmit={handleSubmit}>
//                 <input placeholder={'Type a todo abd hit Enter'} onChange={handleChange} value={title} style={{width:'300px'}}/>
//             </form>
//         </div>
//     )
    
// }

// export default TodoCreate;