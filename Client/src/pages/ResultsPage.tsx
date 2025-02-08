import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../Results.css";
import safetyIcon from '../assets/safety.png';
import biasIcon from '../assets/bias.png';
import fairnessIcon from '../assets/fairness.png';
import { Select, Spin } from "antd";
import { OpenAIOutlined } from "@ant-design/icons";
import GeminiIcon from "../assets/gemini.png";
import DeepSeekIcon from "../assets/deepseek.png";

const Results: React.FC = () => {
    const location = useLocation();
    const { model: initialModel, prompt: userPrompt } = location.state || {};
    
    const [selectedModel, setSelectedModel] = useState(initialModel || "GPT-4");
    const [evaluationResult, setEvaluationResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const { Option } = Select;

    useEffect(() => {
        const fetchEvaluation = async () => {
            if (!selectedModel || !userPrompt) return;
    
            setLoading(true);
            try {
                const response = await axios.post("http://127.0.0.1:5000/api/evaluate_prompt", {
                    model: selectedModel,
                    prompt: userPrompt
                });
    
                setEvaluationResult(response.data);
            } catch (error) {
                console.error("Error fetching evaluation:", error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchEvaluation();
    }, [selectedModel, userPrompt]);

    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="results-container">
                <div className="results-header">
                    <h2 className="results-title">
                        Results 
                        <div className="model-select-results">
                            <span>Switch Model?</span>
                            <Select
                                value={selectedModel}
                                style={{ width: 200, marginLeft: 10, backgroundColor:'#101010'}}
                                onChange={(value) => setSelectedModel(value)}
                            >
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
                    </h2>
                    
                    <p className="results-description">
                        Tested AI models are graded on criteria such as bias, harm potential, and fairness, providing a clear benchmark for responsible performance.
                    </p>
                    <p><strong>Your Input:</strong> {userPrompt}</p>
                </div>

                {loading ? (
                    <Spin size="large" />
                ) : (
                    <div className="metrics-container">
                        <div className="metric">
                            <img src={fairnessIcon} alt="Fairness Icon" className="metric-icon" />
                            <h3>Fairness</h3>
                            <p className="metric-score fairness-score">{evaluationResult?.scores?.[0] ?? "N/A"}</p>
                        </div>
                        <div className="metric">
                            <img src={safetyIcon} alt="Safety Icon" className="metric-icon" />
                            <h3>Safety</h3>
                            <p className="metric-score safety-score">{evaluationResult?.scores?.[1] ?? "N/A"}</p>
                        </div>
                        <div className="metric">
                            <img src={biasIcon} alt="Bias Icon" className="metric-icon" />
                            <h3>Bias</h3>
                            <p className="metric-score bias-score">{evaluationResult?.scores?.[2] ?? "N/A"}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Results;
