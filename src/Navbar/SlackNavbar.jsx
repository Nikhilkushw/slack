import "./SlackNavbar.css";
import Slack_logo from "../assets/Slack_logo.png"
const search = <svg style={{marginTop: "5px", height: "20px"}} xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>

const SlackNavbar = () => {
  return (
    <nav className="navbar" style={{display: "flex", justifyContent: "center", width: "90%", padding: "20px"}}>
      <div style={{display:"flex", justifyContent: "space-between", width: "80%"}}>
        <div style={{display: "flex"}}>
          <ul className="nav-links" style={{display: "flex", gap: "25px", alignItems: "center"}}>
            <img style={{display: "flex", alignItems: "center", width: "100px", height: "26px"}} className="slack_logo" src={Slack_logo} alt="logo" />
            <li><a href="#">Product</a></li>
            <li><a href="#">Enterprise</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </div>
        <div>
          <ul className="nav-links" style={{display: "flex", gap: "20px", alignItems: "center"}}>
            <li>{search}</li>
            <li><a href="#">Sign in</a></li>
            <div style={{display: "flex", gap: "10px"}}>
              <li className="button1"><a style={{color: "#693382"}} href="#">TALK TO SALES</a></li>
              <li className="button2"><a style={{color: "white"}} href="#">TRY FOR FREE</a></li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SlackNavbar;