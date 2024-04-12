import { useState } from "react";
import "../style/Create.css";

function Create() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setUser((prevValue) => {
      return { ...prevValue, [e.target.name]: e.target.value };
    });
  };

  const onClick = () => {};

  return (
    <div className="create">
      <div className="create__title">Registar to participate in the raffle:</div>
      <form action="">
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
          <button className="create__btn1"  onClick={onClick}>Submit</button>
          <button className="create__btn2" onClick={onClick}>Reset</button>
        </div>
      </form>
    </div>
  );
}

export default Create;
