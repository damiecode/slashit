import React, { useState } from "react";
import { Card, Row, Col, Input, Button, Form, Select, message } from "antd";
import { useMutation, useQuery } from "@apollo/client";
import { SendOutlined } from "@ant-design/icons";
import Lipstick from "./assets/Lipstick.png";
import AppleBtn from "./components/Buttons/AppleBtn";
import GoogleBtn from "./components/Buttons/GoogleBtn";
import Copyright from "./assets/icons8-copyright-64.png";
import { LINK, ORDER } from "./utils/query";

const { Option } = Select;

const Home = () => {
  const { error, data } = useQuery(ORDER);
  const [sendText, {data: linkData}] = useMutation(LINK);
  const [isProcessing, setProcessing] = useState(false);
  const order = data?.FetchOrderById?.order;

  if(error) {
    return message.error(error.message);
  }

  const style = {
    width: "400px",
    height: "210px"
  }

  return (
    <>
    <div className="grid place-items-center h-screen w-5/6 p-10 mx-20">
      <div className="mt-10 grid place-items-center">
        <Card className="rounded-3xl px-6" style={style} loading={!data}>
          <Row gutter={[16,16]} className="mb-10">
            <Col span={6}>
              <img src={Lipstick} alt="Lipstick" />
            </Col>
            <Col span={18} className="mt-3">
              <h3>{order?.products[0]?.title || ""} | By {order?.businessName || ""} </h3>
               <h3> Price: <span className="opacity-75">{order?.currency}{order?.amount}</span></h3>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <AppleBtn />
            </Col>
            <Col span={12}>
              <GoogleBtn />
            </Col>
          </Row>
        </Card>
      </div>
      <div className="grid place-items-center">
        <Card className="bg-transparent rounded-lg flex w-5/6" style={{height: "57px"}}>
          <Form 
            className="-mt-4 -mx-6"
            onFinish={values => {
            setProcessing(true)
            sendText({ variables: { phone: values.phone, country: values.country } });
            setProcessing(false)
            if(linkData?.Applink?.success === false) {
              message.error(linkData?.Applink?.message)
              return;
            }
            message.success(linkData?.AppLink?.message)
          }}>
            <h3 className="text-white text-2xl">
              <Row>
                <Col span={6}>
                  <Form.Item
                    name="country"
                  >
                    <Select
                      name="country"
                      size="large"
                      bordered={false}
                      style={{width: "80px", color: "#fff", fontSize: "bold"}}
                      defaultValue="+234"
                    >
                      <Option value="NG">+234</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <span style={{height: "40px"}} className="text-6xl -mt-4">|</span>
                <Col span={13}>
                  <Form.Item  
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Number is required!",
                    },
                  ]}>
                    <Input
                        size="large"
                        name="phone"
                        bordered={false}
                        style={{color: "#fff", fontSize: "18px", background: "transparent", width: "100%" }}
                        placeholder="Text me App Link"
                      />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item>
                    <Button size="large"
                      htmlType="submit"
                      type="link"
                      loading={isProcessing} 
                      icon={<SendOutlined  style={{color: "#fff", transform: "rotate(315deg)"}} />} 
                    /> 
                  </Form.Item>
                </Col>
              </Row>
            </h3>
          </Form>
        </Card>
      </div>
      <div className="grid place-items-center w-1/5">
        <h3 className="text-white opacity-50 text-lg text-center">Get the app now to shop this
          product and more products like this
          one.
        </h3>
      </div>
      <div className="-mb-24 grid place-items-center">
        <h3 className="text-white opacity-50 text-lg flex space-x-4">
          <img src={Copyright} alt="copyright" className="w-1/5" /> ShopLens</h3>
      </div>
    </div>
    </>
  )
}

export default Home;