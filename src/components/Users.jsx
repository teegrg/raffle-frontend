import { useState } from "react";
import User from "./User";

import "../style/User.css";

function Users({ participants }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredParticipants = participants.filter((participant) =>
    participant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="user__container">
      <div className="user__title">Participants: {participants.length} </div>
      <input
        className="user__input"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
      />

      {filteredParticipants.length === 0 ? (
        <div>No participants found</div>
      ) : (
        filteredParticipants.map((participant) => (
          <User key={participant.id} participant={participant} />
        ))
      )}
    </div>
  );
}

export default Users;
