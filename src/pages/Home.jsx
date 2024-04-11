import { useState } from "react";
import AllRaffles from "../components/AllRaffles";
import "../style/Home.css";


const API = process.env.REACT_APP_API_URL;

function Home({ raffles }) {
  const [key, setKey] = useState({
    name: "",
    key: ""
});

  const handleChange = (e) => {
    setKey((prevVal) => {
      return  {...prevVal, [e.target.name]: e.target.value}
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, key: secretToken } = key; 
    try {
      const response = await fetch(`${API}/api/raffles`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, key: secretToken }),
      });
      if (response.ok) {
        const newRaffle = await response.json();
        console.log(newRaffle);
        setKey({
          name: "",
          key: ""
        });
      } else {
        throw new Error("Something went wrong");
      }
    } catch (err) {
      console.error(err);
    }
  };
  


  return (
    <div className="home__wrapper">
      <div className="home__title">Raffle App</div>
      <div className="home">
        <form onSubmit={handleSubmit}>
        <h3>New Raffle</h3>
        <label htmlFor="">Raffle Name:*</label>
        <input type="text" name="name" value={key.name} onChange={handleChange} required />
        <label htmlFor="">Raffle Secret Token*</label>
        <input type="text" name="key" value={key.key} onChange={handleChange} required />
        <div>
          You must remeber the Raffle Token beacuse it will be asked when
          picking a winner
        </div>
        <button type="submit">Create New Raffle</button>
        </form>
      </div>
      <AllRaffles raffles={raffles} />
    </div>
  );
}

export default Home;
