// See the below code snippet and advise, will there be any issue making a REST API call in a component’s useEffect hook?

import { useState } from "react";
import axios from "axios";

function MyComponent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api/data").then((response) => {
      setData(response.data);
    });
  }, []);
 
  return <div>{data.map((d) => <p>{d.text}</p>)}</div>;
}