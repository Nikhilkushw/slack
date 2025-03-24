import React from 'react'
const close = <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z"/></svg>
import google_icon from "../assets/Google.jpg"
import picture from "../assets//picture.jpeg"
import planet from "../assets/planet.png"
import carvan from "../assets/carvana.png"
import kiva from "../assets/kiva.png"
import circle from "../assets/cirlce.png"
import board from "../assets/board.jpeg"
import deva from "../assets/deva.png"
import intuit from "../assets/Intuit.png"
import fox from "../assets/fox.png"
import "../Content/content.css"

const content = () => {
  return (
    <div className="content-container">
      <div className="content-box">
        <p>
          Slack is your digital HQ. Meet the new features keeping teams
          connected in a work-from-anywhere world. <a style={{color: "white"}} href="">Let's go</a>
        </p>
        <p style={{cursor: "pointer"}}>{close}</p>
      </div>
      <div style={{width: "900px", display: "flex", gap: "20px", marginTop: "20px", alignItems: "center"}}>
        <div style={{width: "400px", padding: "10px"}}>
            <h1 style={{fontSize: "42px", fontFamily: "'Open Sans', sans-serif", fontWeight: "700", margin: "0px"}}>Slack is where the future works</h1>
            <p style={{fontSize: "12px", margin: "20px 10px", width: "310px", fontFamily: "'Open Sans', sans-serif", fontWeight: "600"}}>Transform the way you work with one place for everyone and everything you need to get stuff done.</p>
            <div style={{display: "flex", gap: "20px", height: "45px"}}>
                <button style={{padding: "0px 30px", margin: "0px",color: "white", border: "none", backgroundColor: "#693382", borderRadius: "6px", fontSize: "12px", boxShadow: "0px 0px 10px rgba(105, 51, 130, 0.8),inset 0px -2px 5px rgba(105, 51, 130, 0.5)"}}>TRY FOR FREE</button>
                <button style={{display: "flex", gap: "10px", alignItems: "center",border: "none",color: "white", backgroundColor: "#0D92F4", borderRadius: "6px", fontSize: "12px", boxShadow: "0px 0px 10px rgba(11, 140, 232, 0.8),inset 0px -2px 5px rgba(11, 140, 232, 0.5)"}}>
                    <h1 style={{width: "30px", height: "30px", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center"}}><img style={{display: "flex", alignItems: "center", width: "15px", height: "15px", justifyContent: "center"}} src={google_icon} alt="google_icon" /></h1>
                    <p>SIGN UP WITH GOOGLE</p>
                </button>
            </div>
        </div>
        <div style={{width: "400px", padding: "10px"}}>
            <img style={{backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", width: "440px"}} src={picture} alt="picture_photo" />
        </div>
      </div>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%", // Ensures full width for spacing
        maxWidth: "850px", // Adjust based on layout
        margin: "0 auto", // Centers the div
    }}>
        <img style={{width: "40px"}} src={fox} alt="fox" />
        <img style={{width: "150px"}} src={planet} alt="planet" />
        <img style={{width: "90px"}} src={intuit} alt="intuit" />
        <img style={{width: "90px"}} src={carvan} alt="carvan" />
        <img style={{width: "40px"}} src={kiva} alt="kiva" />
        <img style={{width: "40px"}} src={circle} alt="circle" />
        <img style={{width: "90px"}} src={deva} alt="fox" />
      </div>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "900px"}}>
        <div>
            <img style={{width: "420px", height: "150px", borderRadius: "6px"}} src={board} alt="board_image" />
        </div>
        <div style={{display: "flex",flexDirection: "column", width: "340px",marginRight: "80px", gap: "10px"}}>
            <h3 style={{margin: "0px"}}>Now is your moment to build a better tomorrow</h3>
            <p style={{margin: "0px", fontSize: "12px"}}>We've seen what the future can be. Now it's time to decide what it will be.</p>
            <button style={{padding: "6px",width: "120px", border: "2px solid #693382", color: "#693382", borderRadius: "6px", fontWeight: "600"}}>WATCH VIDEO</button>
        </div>
      </div>
    </div>
  )
}

export default content