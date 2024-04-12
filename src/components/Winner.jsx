import { useEffect, useState } from "react";

import ConfettiExplosion from "react-confetti-explosion";
import pic from "../components/pic/winner.jpeg";
import '../style/Winner.css'

import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function Winner({ participants }) {
  const [winner, setWinner] = useState([]);
  const [token, setToken] = useState("");
  const [clicked, setClicked] = useState(false);
  const [ raffleById, setRaffleById ] = useState("");
  const { id } = useParams();

  const [isExploding, setIsExploding] = useState(true);

  const handleChange = (e) => {
    setToken(e.target.value);
  };

  const handleClick = () => {
    if(raffleById.key === token ){
        const pick = participants[Math.floor(Math.random() * participants.length)];
        setWinner(pick);
        setClicked(true);
    }
  };

  const fetchRaffle = async () => {
    try {
        const response = await fetch(`${API}/api/raffles/${id}`)
        const { data } = await response.json();
        if(response.ok){
            setRaffleById(data)
        }
    }catch(err){
        console.log(err.message);
    }
  }

  useEffect(() => {
    fetchRaffle();
  }, []);

  return (
    <>
      {!clicked ? (
        <div className="pick__winner">
          <div className="pick__title">Pick Winner</div>
          <input
            type="text"
            value={token}
            onChange={handleChange}
            placeholder="Serect token"
            required
          />
          <button onClick={handleClick}>Pick a Winner</button>
          <div className="pick__footer">
            <div className="footer__title">Secret Token</div>
            <div className="footer__foot">
              The secret token used when creating the raffle must be provided.
            </div>
          </div>
        </div>
      ) : (
        <div className="winner">
          <h3>Winner</h3>
          <div></div>
          <div>{isExploding && <ConfettiExplosion />}</div>
          <img src={pic} alt="we got winner" />
          <div>{winner.name}</div>
          <div>Registered on: {winner.created_at}</div>
          <hr />
          <div># {winner.id}</div>
          <div>
            <EmailIcon />
            {winner.email}
                  </div>
          <div>
            <LocalPhoneIcon />
            {winner.phone}
          </div>
        </div>
      )}
    </>
  );
}

export default Winner;
