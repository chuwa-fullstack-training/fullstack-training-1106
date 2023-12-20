import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardTitle from 'react-bootstrap/esm/CardTitle'



const User = (props) => {
  const [message, setMessage] = useState('');
  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      props.setCategory(props.id, message);
    }
  }
  
  const handleChange = (e) => {
    setMessage(e.target.value);
  }
  const componentStyle = {
    backgroundColor: props.bgColor,
    margin:'1px'
  }
  return (
    <div>
      <Card style={componentStyle}>
        <CardTitle>
          component name
        </CardTitle>
      <input value={message} 
      onKeyDown={handleKeyDown}
      onChange={handleChange}></input>
      </Card>
    </div>
  )
}

function App() {
  const [category, setCategory] = useState([{id:0,name:''},{id:1,name:''},{id:2,name:''},{id:3,name:''},{id:4,name:''},{id:5,name:''}]);
  const [color, setColor] = useState([' #0d6efd','#6610f2','#6f42c1','#d63384','#fd7e14','#20c997']);
  const [cards, setCards] = useState([{id:0,color:' red'},{id:1,color:'red'},{id:2,color:'red'},{id:3,color:'red'},{id:4,color:'red'},{id:5,color:'red'}]);
  const [selectCate, setSelectCate] = useState('');
  const [titleCate, setTitleCate] = useState('category');
  const [titleColor, setTitleColor] = useState('color');
  

  const updateCategory = (id, msg) => {
    const newCategory = category.map((item) => item.id === Number(id)?{...item, name:msg}:item);
    setCategory(newCategory);
  }

  const handleCate = (eventKey) => {
    setSelectCate(Number(eventKey.id));
    setTitleCate(eventKey.name);
  }

  const handleColor = (eventKey) => {
    
    const newCards = cards.map((i) => 
      i.id === selectCate ? {...i, color:eventKey}:i
    )
    setCards(newCards);
    setTitleColor(eventKey);
  }

  return (
    <>
    <div className='dropdown-container'>
      <DropdownButton id="dropdown-item-button" title={titleCate} >
        {category && category.map((c,idx) => <Dropdown.Item key={idx} as="button" onClick={() => handleCate(c)}> {c.name} </Dropdown.Item>)}
      </DropdownButton>

      <DropdownButton title={titleColor} onSelect={handleColor}>
        {color.map((c,idx) => <Dropdown.Item key={idx} as="button" eventKey={c}> {c} </Dropdown.Item>)}
      </DropdownButton>
    </div>
      
      <div className="card-container">
      {cards.map((card,idx) => {
        return <User key={idx} id={idx} bgColor={card.color} setCategory={updateCategory}></User>;
      }
        
      )}
      </div>
      
    </>
  )
}

export default App
