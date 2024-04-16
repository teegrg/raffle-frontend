import { useState } from "react";
import "../style/Create.css";
import { useParams } from "react-router-dom";
import { message } from 'react-message-popup'

const API = process.env.REACT_APP_API_URL;

function Create() {
  const { id } = useParams();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    raffle_id:`${id}`,
  });

  const handleChange = (e) => {
    setUser((prevValue) => {
      return { ...prevValue, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/api/raffles/${id}/participants`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  
      await response.json();
      message.success('Participant created', 4000)
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleReset = () => {
    setUser({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
    });
  };
  
  return (
    <div className="create">
      <div className="create__title">Registar to participate in the raffle:</div>
      <form onSubmit={handleSubmit}>
        <div className="create__lable">
        <label htmlFor="">First Name*</label>
        <input
          type="text"
          value={user.first_name}
          name="first_name"
          placeholder="First Name"
          onChange={handleChange}
          required
        />
        <label htmlFor="">Last Name*</label>
        <input
          type="text"
          value={user.last_name}
          name="last_name"
          placeholder="Last Name"
          onChange={handleChange}
          required
        />
        </div>
        <label htmlFor="">Email*</label>
        <input
          type="text"
          value={user.email}
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <label htmlFor="">Phone</label>
        <input
          type="text"
          value={user.phone}
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
        />
        <div className="create__btn">
          <button type= "submit" className="create__btn1">Submit</button>
          <button type="button" className="create__btn2" onClick={handleReset}>Reset</button>
                   </div>
      </form>
    </div>
  );
}

export default Create;
