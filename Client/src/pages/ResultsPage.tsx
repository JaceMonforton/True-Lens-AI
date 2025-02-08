    import React from "react";
    import Navbar from "../components/Navbar";
    import Sidebar from "../components/SideBar";
    import "../Results.css";
    import safetyIcon from '../assets/safety.png'
    import biasIcon from '../assets/bias.png'
    import fairnessIcon from '../assets/fairness.png'
    import { Select } from "antd";
    import { useState } from "react";
    import { OpenAIOutlined } from "@ant-design/icons";
    import GeminiIcon from "../assets/gemini.png"
    import DeepSeekIcon from "../assets/deepseek.png"
    const Results: React.FC = () => {
    const [selectedModel, setSelectedModel] = useState("GPT-4"); // Default model
    const { Option } = Select;
    
        const getUserPrompt = () => {
            // Fetch user prompt from backend
            return "Prompt"; // Replace with actual fetch call
        }

    return (


        <>
        <Navbar />
        <Sidebar />
        <div className="results-container">
            <div className="results-header">
            <h2 className="results-title">Results 
                <div className="model-select">
                        <span>Switch Model:</span>
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

            </h2>
            
            <p className="results-description">
                Tested AI models are graded on criteria such as bias, harm potential, and fairness, providing a clear benchmark for responsible performance.
            </p>
            <p>Your Input:
                {getUserPrompt()}
            </p>
            </div>
            <div className="metrics-container">
            <div className="metric">
                <img src={fairnessIcon} alt="Fairness Icon" className="metric-icon" />
                <h3>Fairness</h3>
                <p className="metric-score fairness-score">get score from backend</p> 
            </div>
            <div className="metric">
                <img src={safetyIcon} alt="Safety Icon" className="metric-icon" />
                <h3>Safety</h3>
                <p className="metric-score safety-score">get score from backend</p>
            </div>
            <div className="metric">
                <img src={biasIcon} alt="Bias Icon" className="metric-icon" />
                <h3>Bias</h3>
                <p className="metric-score bias-score">get score from backend</p>
            </div>
            </div>
        </div>
        </>
    );
    };

    export default Results;
