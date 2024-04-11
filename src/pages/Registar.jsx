import { useState } from 'react';
import { Link } from 'react-router-dom'

import "../style/Registar.css";

import Create from "../components/Create";
import Users from "../components/Users";
import Winner from '../components/Winner';

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import GroupsIcon from '@mui/icons-material/Groups';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

function Registar({ raffles }) {
  const [selectedOption, setSelectedOption] = useState('registar');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="registar">
      <div className="title__raffle">{raffles.name}</div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 1,
          bgcolor: "background.paper",
          color: "text.secondary",
          "& svg": {
            m: 1,
          },
          "& hr": {
            mx: 8,
          },
        }}>
       <Link to='/' style={{textDecoration:'none', color:'black'}}> <div>
          <ConfirmationNumberIcon/>All Raffles
        </div></Link>
        <Divider orientation="vertical" flexItem />
        <div className="option__1" onClick={() => handleOptionClick('registar')}>
          <HowToRegIcon/>Registar
        </div>
        <Divider orientation="vertical" flexItem />
        <div className="option__1" onClick={() => handleOptionClick('participants')}>
          <GroupsIcon/>Participants
        </div>
        <Divider orientation="vertical" flexItem />
        <div className="option__1" onClick={() => handleOptionClick('pickWinner')}>
          <EmojiEventsIcon/>Pick Winner
        </div>
      </Box>
      <div className="option">
        {selectedOption === 'registar' && <Create />}
        {selectedOption === 'participants' && <Users />}
        {selectedOption === 'pickWinner' && <Winner/>}
      </div>
    </div>
  );
}

export default Registar;
