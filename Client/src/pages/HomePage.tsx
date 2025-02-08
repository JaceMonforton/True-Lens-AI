import React, { useState } from "react";
import { Button, Select } from "antd"; // Import Select
import "../Home.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import Navbar from "../components/Navbar";
import axios from "axios";
import Sidebar from "../components/SideBar";
import { OpenAIOutlined } from "@ant-design/icons";
import GeminiIcon from "../assets/gemini.png"
import DeepSeekIcon from "../assets/deepseek.png"

const { Option } = Select;
const Home: React.FC = () => {
    const [message, setMessage] = useState("");
    const [selectedModel, setSelectedModel] = useState("GPT-4"); // Default model

    const handleClick = async () => {
        try {
            const response = await axios.post("/api/test-model", {
                model: selectedModel,
                prompt: message,
            });
            console.log("Response:", response.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="home-container">
                <h3 className="home-title">
                    Enter a Prompt to be examined or click to generate a random prompt
                </h3>

                <div className="chat-container">
                    <div className="model-select">
                        <span>Model:</span>
                        <Select
                            defaultValue={selectedModel}
                            style={{ width: 200, marginLeft: 10, backgroundColor:'#1e1e1e'}}
                            onChange={(value) => setSelectedModel(value)}
                        >
                            <Option value="Gemini">
                            <p><img src = {GeminiIcon} alt="Gemini" style={{display: 'flex', alignSelf: 'center', width: '20px', height: '20px'}}/> Gemini</p></Option>
                            <Option value="GPT-4o"><OpenAIOutlined /> GPT-4o mini</Option>
                            <Option value="Deepseek">
                            <p><img src = {DeepSeekIcon} alt="deepseek" style={{display: 'flex', alignSelf: 'center', width: '15px', height: '15px'}}/> Deepseek</p></Option>
                        </Select>
                    </div>

                    <textarea
                        className="chat-input"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={1}
                    />

                    <Button type="primary" className="send-button" onClick={handleClick}>
                        <ArrowRightOutlined />
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Home;
