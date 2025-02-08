import React, { useState } from "react";
import { Button, Select, message as antdMessage } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios for API request
import "../Home.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { OpenAIOutlined } from "@ant-design/icons";
import GeminiIcon from "../assets/gemini.png";
import DeepSeekIcon from "../assets/deepseek.png";

const { Option } = Select;

const Home: React.FC = () => {
    const [message, setMessage] = useState("");
    const [selectedModel, setSelectedModel] = useState("Select a Model");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleClick = async () => {
        if (!message.trim()) {
            antdMessage.warning("Please enter a prompt before proceeding.");
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post(
                "http://127.0.0.1:5000/api/evaluate_prompt",
                {
                    model: selectedModel,
                    prompt: message,
                },
                { headers: { "Content-Type": "application/json" } }
            );

            // Navigate to results page with backend response
            navigate("/results", {
                state: {
                    model: selectedModel,
                    prompt: message,
                    evaluationResult: response.data.evaluation_result,
                },
            });
        } catch (error) {
            console.error("Error sending prompt to backend:", error);
            antdMessage.error("Failed to evaluate prompt. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="home-container">
                <h3 className="home-title">Enter a Prompt to be examined or click to generate a random prompt</h3>
                <div className="chat-container">
                    <div className="model-select">
                        <Select value={selectedModel} style={{ width: 200, marginLeft: 10 }} onChange={(value) => setSelectedModel(value)}>
                            <Option value="gemini">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <img src={GeminiIcon} alt="Gemini" style={{ width: '20px', height: '20px' }} />
                                    <span>Gemini</span>
                                </div>
                            </Option>
                            <Option value="openai">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <OpenAIOutlined />
                                    <span>GPT-4o mini</span>
                                </div>
                            </Option>
                            <Option value="deepseek">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <img src={DeepSeekIcon} alt="Deepseek" style={{ width: '15px', height: '15px' }} />
                                    <span>Deepseek</span>
                                </div>
                            </Option>
                        </Select>
                    </div>
                    <textarea
                        className="chat-input"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={1}
                    />
                    <Button type="primary" className="send-button" onClick={handleClick} loading={loading}>
                        <ArrowRightOutlined />
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Home;
