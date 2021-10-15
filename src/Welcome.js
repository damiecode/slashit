import { Button, Card } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

const Welcome = () => {
  const history = useHistory();
  return (
    <div className="grid place-items-center h-screen w-5/6 p-10 mx-20">
      <Card className="text-center rounded-3xl px-6 w-1/2">
        <h3 className="text-3xl mb-5">Welcome to Slashit Products page</h3>
        <Button type="primary" onClick={() => {
            history.push(`/orderID=48465491`);
          }}>Click to view Product</Button>
      </Card>
    </div>
  )
}

export default Welcome;