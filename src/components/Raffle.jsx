import "../style/Raffle.css";
import { Link } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

function Raffle({ raffle }) {

  return (
    <Link to={`/registar/${raffle.id}`} style={{textDecoration:'none', color:'black'}}>
      <div className="raffle">
        <div className="raffle__header">{raffle.name}</div>
        <div>
          <CalendarMonthIcon />
          Created on:{raffle.created_at}
        </div>
        <div>
          <EmojiEventsIcon />
          Winner Id:
        </div>
        <div>
          <EventAvailableIcon />
          Raffled on:
        </div>
      </div>
    </Link>
  );
}

export default Raffle;
