// What is wrong with using async/await in a useEffect hook in reference to the below code snippet?

function TestComponent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/data");
      const json = await response.json();
      setData(json);
    };
	  fetchData();

    return () => {

    }

  }, []);

  return <div>{data.map((d) => <p>{d.text}</p>)}</div>;
}