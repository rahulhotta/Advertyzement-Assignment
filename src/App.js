import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import UserList from "./Components/UserList";
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
   function getUsers() {
     fetch(`https://reqres.in/api/users?page=1`)
       .then((response) => response.json())
       .then((actualData) => {
         setData(actualData.data);
         setError(null);
         setLoading(true);
       })
       .catch((err) => {
         setError(err.message);
         setData(null);
         setLoading(false);
       })
       .finally(() => {
         setLoading(false);
       });
      }
    
    
  return (
    <div className="App">
      <NavBar getUsers={getUsers} />
      <UserList
      data={data}
      loading={loading}
      error={error}
      />
    </div>
  );
}

export default App;
