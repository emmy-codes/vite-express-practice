import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [array, setArray] = useState<Person[]>([]);

  // useState is a variable with an update to the variable

  const fetchApi = async () => {
    // in the browser we are seeing the response from the server page 
    // (our response.json inside server.js in the server folder)
    const response = await axios.get("http://localhost:8080/api");
    // updating the array variable with just the car data from the response "data"
    setArray(response.data.person);
  };

  // 

  useEffect(() => {
    fetchApi();
  }, []);

  interface Person {
    name: string,
    age: number,
    profession: string
  };

  return (
    <>
      <h1>Employees at House of Chaos:</h1>
      <div className="card">
        <ol>
          {array.map((person, index) =>
            <li key={index}>{person.name}</li>
          )}
        </ol>
      </div>
    </>
  );
};

export default App
