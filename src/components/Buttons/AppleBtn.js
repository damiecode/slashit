import { Button } from "antd";
import React from "react";
import AppleImg from "../../assets/icons8-apple-logo-100 (1).png";

const AppleBtn = () => {
  return (
    <Button 
      className="bg-black text-white rounded-lg border-transparent ml-2" 
      size="large" 
      type="primary"
    >
      <div className="flex">
        <div>
          <img src={AppleImg} alt="Apple" style={{maxWidth: "25px", marginLeft: "-5px"}} />
        </div>
        <div>
          <h3 className="text-white text-xs ml-2">Download on the</h3>
          <h3 className="text-white text-xs"> App Store</h3>
        </div>
      </div>
    </Button>
  )
}

export default AppleBtn;