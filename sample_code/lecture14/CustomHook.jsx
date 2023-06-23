import React from "react";
import useFetch from "./hooks/useFetch";

const App = () => {
  const { data, loading, error } = useFetch("https://api.github.com/users");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Data from GitHub API:</h1>
      {Array.isArray(data) ? (
        data.map((element) => <p>{element.login}</p>)
      ) : (
        <code>{JSON.stringify(data, null, "\t")}</code>
      )}
    </div>
  );
};

export default App;
