import "../style/User.css";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function User({ participant }) {
  return (
    <div className="user">
      <div className="pic">
        <AccountCircleIcon sx={{ fontSize: 48 }} />
      </div>
      <div className="info">
        <div className="name">{participant.name}</div>
        <div># {participant.id}</div>
        <div >
          <EmailIcon style={{ marginRight: 8, marginTop:5 }}/>
          {participant.email}
        </div>
        <div>
          <LocalPhoneIcon style={{ marginRight: 8, marginTop:5 }}/>
          {participant.phone}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default User;
