import React from "react";
import { Card, Row, Col, message } from "antd";
import Lipstick from "../assets/Lipstick.png";
import AppleBtn from "../components/Buttons/AppleBtn";
import GoogleBtn from "../components/Buttons/GoogleBtn";
import Copyright from "../assets/icons8-copyright-48.png";
import { UpOutlined } from "@ant-design/icons";
import { useQuery } from "@apollo/client";
import { ORDER } from "../utils/query";

const MobileHome = () => {
  const { error, data } = useQuery(ORDER);
  const order = data?.FetchOrderById?.order;

  if(error) {
    return message.error(error.message);
  }

  return (
    <div className="overflow-hidden grid place-items-center">
      <Card className="rounded-lg mt-40 grid place-items-center" loading={!data}>
        <div className="text-center flex space-x-20">
          <div className="-mt-1">
            <UpOutlined />
          </div>
          <h3 className="text-center font-bold text-lg">{order?.businessName}</h3>
        </div>
        <div className="grid place-items-center my-6">
            <div>
              <img src={Lipstick} alt="Lipstick" className="w-4/5" />
            </div>
            <div className="mt-2 text-center font-bold">
              <h3 className="my-2">LipStick | By<br/> {order?.businessName} </h3>
               <h3> Price: <span className="opacity-75">{order?.currency}{order?.amount}0</span></h3>
            </div>
          </div>
          <Row>
            <Col span={12}>
              <AppleBtn />
            </Col>
            <Col span={12}>
              <GoogleBtn />
            </Col>
          </Row>
          <div className="ml-16 my-4 w-3/5">
            <h3 className="text-sm text-center">Get the app now to shop this
              product and more products like this
              one.
            </h3>
          </div>
          <div className="grid place-items-center">
            <h3 className="text-sm flex space-x-4 text-center">
              <img src={Copyright} alt="copyright" className="w-5 h-5 text-black" /> ShopLens</h3>
          </div>
      </Card>
    </div>
  )
}

export default MobileHome;