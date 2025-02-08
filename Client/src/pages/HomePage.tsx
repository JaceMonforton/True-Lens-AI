import React, { useState } from "react";
import { Button } from "antd";
import "../Home.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
const [message, setMessage] = useState("");

return (
    <>
        <Navbar />
        <div className="home-container">
        <h3 className="home-title">Enter a Prompt to be examined or click to generate random prompt</h3>

        <div className="chat-container">
            <textarea
            className="chat-input"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={1}
            />
            <Button type="primary" className="send-button"><ArrowRightOutlined /></Button>
        </div>
        </div>
    </>
    );
};

export default Home;
