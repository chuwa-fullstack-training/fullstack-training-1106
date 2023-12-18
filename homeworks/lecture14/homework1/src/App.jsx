import { useState, useEffect } from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {CCard,CCardBody,CCardImage,CCardText,CCardTitle,CButton} from '@coreui/react'

function App() {
  const [Data, setData] = useState(undefined);
  const [User, setUser] = useState(undefined);
  const [loading, setLoading] = useState(true);
  useEffect( () => {
    const fetchData = async () => {
      try{
        const res = await fetch('https://api.github.com/users');
        const result = await res.json();
        setData(result);
        setLoading(false);
    }catch (err) {
      console.log(err);
    }
  }
  fetchData();
  },[])

  const handleClick = (row) => {
    console.log(row.id);
    Data.map((item) => {
      if(item.id === row.id) setUser(item);
    })
  }

  if(loading){
    return(
      <div> Page is loading</div>
    )
  }else{
    return (
      <>
      <div className="container">
      <div>
          <thead>
            <tr>
              <th>ID</th>
              <th>UserName</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((item, idx) => (
              <tr key={idx} id={item.id} onClick={ () => handleClick(item)}>
                <td>{item.id}</td>
                <td>{item.login}</td>
                <td>
                  <img src={item.avatar_url} style={{ maxWidth: "30%" }} />
                </td>
              </tr>
            ))}
          </tbody>
        </div>
        <div>
        {/* show the user's avatar, username, name, and some repositories */}
        {User &&
          <CCard style={{ width: "18rem" }} className="user-profile">
            <CCardImage orientation="top" src={User.avatar_url} />
            <CCardBody>
              <CCardTitle>{User.login}</CCardTitle>
              <CCardText>{User.id}</CCardText>
              <CCardText>
                {User.url}
              </CCardText>
              <CButton href={User.html_url}>Visit my page</CButton>
            </CCardBody>
          </CCard>}
        </div>
      </div>
        

        <p className="read-the-docs">@Right reserved</p>
      </>
    );
  }
  
}

export default App
