import React from "react";
import { Button } from "antd";
import GoogleImg from "../../assets/icons8-google-play-144.png";

const GoogleBtn = () => {
  return (
    <Button 
      className="bg-black text-white rounded-lg border-transparent ml-5" 
      size="large"
      type="primary"
    >
      <div className="flex">
        <div>
          <img src={GoogleImg} alt="Apple" style={{maxWidth: "25px", marginLeft: "-5px"}}  />
        </div>
        <div>
          <h3 className="text-white text-xs uppercase tracking-wider ml-2" style={{fontSize: "10px"}}>Get it on</h3>
          <h3 className="text-white text-xs ml-2">Google Play</h3>
        </div>
      </div>
    </Button>
  )
}

export default GoogleBtn;