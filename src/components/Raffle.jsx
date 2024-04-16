import "../style/Raffle.css";
import { Link } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

function Raffle({ raffle }) {
  const formatDate = (timestamp) => {
    const options = {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    return new Date(timestamp).toLocaleString("en-US", options);
  };

  return (
    <Link
      to={`/registar/${raffle.id}`}
      style={{ textDecoration: "none", color: "black" }}>
      <div className="raffle">
        <div className="raffle__header">{raffle.name}</div>
        <div className="raffle__content">
          <CalendarMonthIcon />
          Created on:{formatDate(raffle.created_at)}
        </div>
        <div className="raffle__content">
          <EmojiEventsIcon />
          Winner Id:
          {raffle.winner_id === null ? "No one yet" : raffle.winner_id}
        </div>
        <div className="raffle__content">
          <EventAvailableIcon />
          Raffled on:
          {!raffle.raffled_on ? "Not raffled yet" : formatDate(raffle.raffled_on)}
        </div>
      </div>
    </Link>
  );
}

export default Raffle;
