import './App.css'
import { Button } from "antd";
import { useNavigate } from 'react-router';
import { ArrowRightOutlined } from '@ant-design/icons';
import React from 'react';
import Logo from './assets/AI-Ethics.png'
function App() {

  const Navigate = useNavigate();

  return (
      <div className='Onboarding-page-body'>
      <img src={Logo} alt="Onboarding" className="logo-image" />

      <h1 className='page-title'>
        TruelensAI
      </h1>
      <p className='Onboarding-paragraph'>
        Ensure your AI models are fair, transparent, and unbiased with our powerful ethics auditing tool. 
        Our platform helps businesses, researchers, and developers detect bias, improve explainability, and uphold ethical AI standards with ease.
      </p>
      
        <Button type='primary' onClick={ () => Navigate('/home')}>Try Now! <ArrowRightOutlined /></Button>

      </div>
  )
}


export default App
