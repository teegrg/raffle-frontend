import { useEffect, useState } from "react";
import User from "./User";
import { useParams } from "react-router-dom";

import "../style/User.css";


const API = process.env.REACT_APP_API_URL;

function Users() {
    const { id } = useParams();
    const [participants, setParticipants] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");

    const fetchData = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await fetch(`${API}/api/raffles/${id}/participants`);
            const { data } = await response.json();
            if (response.ok) {
                setParticipants(data);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const filteredParticipants = participants.filter(participant =>
        participant.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="user__container">
            <div>Participants: {participants.length} </div>
            <input className="user__input" type="text" placeholder="Search..." value={search} onChange={handleSearch} />
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error}</div>
            ) : filteredParticipants.length === 0 ? (
                <div>No participants found with the name "{search}"</div>
            ) : (
                filteredParticipants.map(participant => <User key={participant.id} participant={participant} />)
            )}
        </div>
    );
}

export default Users;
