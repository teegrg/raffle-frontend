import Raffle from "./Raffle";
import '../style/Raffle.css'

function AllRaffles({ raffles }) {
    return (
        <div >
            <h3 className="allRaffles">All Raffles:</h3>
            {raffles.map(raffle => <Raffle key={raffle.id} raffle={raffle}/>)}
        </div>
    )
}

export default AllRaffles;
