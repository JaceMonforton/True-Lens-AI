    import React from "react";
    import Navbar from "../components/Navbar";
    import "../Results.css";
    import safetyIcon from '../assets/safety.png'
    import biasIcon from '../assets/bias.png'
    import fairnessIcon from '../assets/fairness.png'
    const Results: React.FC = () => {
    return (
        <>
        <Navbar />
        <div className="results-container">
            <div className="results-header">
            <h2 className="results-title">Results</h2>
            <p className="results-description">
                Tested AI models are graded on criteria such as bias, harm potential, and fairness, providing a clear benchmark for responsible performance.
            </p>
            </div>
            <div className="metrics-container">
            <div className="metric">
                <img src={fairnessIcon} alt="Fairness Icon" className="metric-icon" />
                <h3>Fairness</h3>
                <p className="metric-score fairness-score">8.5</p> 
            </div>
            <div className="metric">
                <img src={safetyIcon} alt="Safety Icon" className="metric-icon" />
                <h3>Safety</h3>
                <p className="metric-score safety-score">3.5</p>
            </div>
            <div className="metric">
                <img src={biasIcon} alt="Bias Icon" className="metric-icon" />
                <h3>Bias</h3>
                <p className="metric-score bias-score">5.2</p>
            </div>
            </div>
        </div>
        </>
    );
    };

    export default Results;
