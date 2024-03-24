import Button from "../custom_components/Button/Button";
import { useState, useEffect } from "react";
const Fetchdata = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let userId = "50";

  useEffect(() => {    
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://api.example.com/data/${userId}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Data</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fetchdata;