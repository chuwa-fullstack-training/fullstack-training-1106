import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, useParams, Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardTitle from 'react-bootstrap/esm/CardTitle'
import { useEffect } from 'react'

const Home = () => {
  return(
    <>
        <p>Home</p>
      <Link to='/1'> First card</Link>
      <Link to='/2'> Second card</Link>
      <Link to='/3'> Third card</Link>
      <Link to='/4'> Fourth card</Link>
      <Link to='/5'> Fifth card</Link>
      <Link to='/6'> Sixth card</Link>
        </>
  )
}

const User = () => {
  const [color, setColor] = useState([' #0d6efd','#6610f2','#6f42c1','#d63384','#fd7e14','#20c997']);
  const {id} = useParams();
  const [card, setCard] = useState(localStorage.getItem(id));
  const [titleColor, setTitleColor] = useState('color');
  
  // const [user, setUser] = useState(() => {
  //   const storeUser = localStorage.getItem(id);
  //   return storeUser? JSON.parse(storeUser) : undefined;
  // });

  const handleColor = (eventKey) => {
    setCard(eventKey);
    setTitleColor(eventKey);
    localStorage.setItem(id,eventKey);
  }

  const componentStyle = {
    backgroundColor: card,
    margin:'1px'
  }
  return (
    <div>
      {card ? (
        <div>
          <DropdownButton title={titleColor} onSelect={handleColor}>
            {color.map((c, idx) => (
              <Dropdown.Item key={idx} as="button" eventKey={c}>
                {" "}
                {c}{" "}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <Card style={componentStyle}>
            <CardTitle>component name</CardTitle>
          </Card>
        </div>
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
}

function App() {
  useEffect(() => {
    if(!localStorage.getItem('user')){
      for(let i of Array.from({length:6}, (_,index) => index+1)){
        localStorage.setItem(i,'0d6efd');
      }
      localStorage.setItem('user','exsit');
    }
  },[])

  return (
    <Router>
      <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/:id' element={<User />} />
      </Routes>
    </>
    </Router>
    // <>
    // <div className='dropdown-container'>
    //   <DropdownButton id="dropdown-item-button" title={titleCate} >
    //     {category && category.map((c,idx) => <Dropdown.Item key={idx} as="button" onClick={() => handleCate(c)}> {c.name} </Dropdown.Item>)}
    //   </DropdownButton>

    //   <DropdownButton title={titleColor} onSelect={handleColor}>
    //     {color.map((c,idx) => <Dropdown.Item key={idx} as="button" eventKey={c}> {c} </Dropdown.Item>)}
    //   </DropdownButton>
    // </div>
      
    //   <div className="card-container">
    //   {cards.map((card,idx) => {
    //     return <User key={idx} id={idx} bgColor={card.color} setCategory={updateCategory}></User>;
    //   }
        
    //   )}
    //   </div>
      
    // </>
  )
}

export default App
