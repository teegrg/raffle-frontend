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
  const [raffleById, setRaffleById] = useState("");
  const { id } = useParams();
  const [isExploding, setIsExploding] = useState(true);
  const [invalidToken, setInvalidToken] = useState(false);

  const formatDate = (timestamp) => {
    const options = { 
      weekday: 'short',
        day: 'numeric', 
        month: 'short', 
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
    };
    return new Date(timestamp).toLocaleString('en-US', options);
};

  const handleChange = (e) => {
    setToken(e.target.value);
    setInvalidToken(false); 
  };

  const handleClick = async () => {
    if (raffleById.key === token) {
      const pick = participants[Math.floor(Math.random() * participants.length)];
      setWinner(pick);
      setClicked(true);
      await updateRaffle(pick.id);
    } else {
      setInvalidToken(true); 
    }
  };

  const fetchRaffle = async () => {
    try {
      const response = await fetch(`${API}/api/raffles/${id}`);
      const { data } = await response.json();
      if (response.ok) {
        setRaffleById(data);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const updateRaffle = async (winnerId) => {
    try {
      const response = await fetch(`${API}/api/raffles/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ winner_id: winnerId }),
      });
      if(response.ok){
        console.log("success")
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  
  useEffect(() => {
    fetchRaffle();
    updateRaffle();
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
            placeholder="Enter Secret Token"
            required
          />
          {invalidToken && <div className="invalid__token">Wrong secret token. Please try again.</div>}
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
          <div>Registered on: {formatDate(winner.created_at)}</div>
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
