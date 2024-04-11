import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const API = process.env.REACT_APP_API_URL;

function Winner() {
    const [ winner,  setWinner ] = useState([]);
    const { id } = useParams();

    const fetchWinner = async () => {
        try {
            const response = await fetch (`${API}/api/raffles/${id}/winner`);
            const { data } = await response.json;
            if(response.ok){
                setWinner(data);
            }
        }catch(err){
            console.log(err.message);
        }
    }

    useEffect(() => {
        fetchWinner();
    }, [id]);

console.log(winner);
    return (
        <div className="winner">
            <div>{winner.winner_id}</div>
        </div>
    )
};

export default Winner;