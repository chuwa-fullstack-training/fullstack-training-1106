import './App.css';
import React from 'react';
import axios from 'axios';

class Todo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      // status: this.props.status,
      id:''
    };
    this.handleCheck = this.handleCheck.bind(this);
  }
  handleCheck = (event) => {
    if(event.target.checked){
      axios.put('http://localhost:4000/api/updatetodo/'+this.props.id,{"status": true})
      .then(res => {
        console.log(res)
        this.props.changeStatus(this.props.id);
        // this.setState({status:false});
      })
      .catch(e => {
        console.log('error:'+e);
      });
      
    }else{
      axios.put('http://localhost:4000/api/updatetodo/'+this.props.id,{"status": false})
      .then(res => {
        console.log(res);
        this.props.changeStatus(this.props.id);

        // this.setState({status:true});
      })
      .catch(e => {
        console.log('error:'+e);
      });;
    }
  }
   
  render(){
    return(
      <div className="margin-top-20">
              <div className="row">
                 <div className="col-1">
                  <input 
                  className="form-check-input" 
                  type="checkbox" 
                  name="first thing" 
                  id={this.props.id} 
                  onChange={this.handleCheck}  
                  checked={this.props.status} 
                  />
                  </div>
                 <div className="col"><label for="first thing">{this.props.name}</label></div>
              </div>
           </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      cur: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    fetch('http://localhost:4000/api/getalltodos')
      .then(res => res.json())
      .then(data => {
        this.setState({data:data.map(e=> {return{"name":e.name,"id":e._id,"status":e.status}}),loading:false});
      })
      .catch(e => {
        console.log(e);
      });
  }
  changeStatus = (id)=>{
    for(let e of this.state.data){
      if(e.id === id){
        e.status = !e.status;
        this.setState({data:this.state.data});
        break;
      }
    }
  } 
  handleInputChange(event){
    this.setState({cur:event.target.value});
  }
   
  handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:4000/api/createtodo',{"name":this.state.cur})
      .then(res => {
        console.log(res);
        return res.data;
      })
      .then(data => {
        this.setState(prevState => ({
          data:[...prevState.data, {"id":data._id,"name":this.state.cur,"status":false}],
          cur:''
        }));
      });
    
    
  }

  render(){
    const generateComponents = this.state.data.map(item => (
      <Todo name={item.name} id={item.id} status={item.status} changeStatus={this.changeStatus} />
     ));
    return (
      <>
        <html lang="en">
          <head>
              <meta charset="UTF-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
              <title>Todo List </title>
          </head>
          <body>
          <div class="container width-600">
           <div class="row">
              <div class="col">
                 <h1>Todo List</h1>
              </div>
           </div>
           <div class="row">
              <div class="col-8">
                <input class="form-control" name="todo" id="todo" placeholder="Enter todo" value={this.state.cur} onChange={this.handleInputChange} ></input>
                </div>
              <div class="col-4 align-self-center"><button class="btn btn-primary" onClick={this.handleSubmit}>Add Todo</button></div>
           </div>
           {generateComponents}
        </div>
          </body>
          </html>
      </>
    );
  }
  
}

export default App;
