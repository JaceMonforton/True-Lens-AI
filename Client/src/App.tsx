import './App.css'
import { Button } from "antd";
import { useNavigate } from 'react-router';
import { ArrowRightOutlined } from '@ant-design/icons';
import Logo from './assets/AI-Ethics.png'
import Navbar from './components/Navbar';
function App() {

  const Navigate = useNavigate();

  return (
    <>
    <Navbar/>
      <div className='Onboarding-page-body'>
      <h1 className='page-title'>
        TruelensAI
      </h1>
      <p className='Onboarding-paragraph'>
        Ensure your AI models are fair, transparent, and unbiased with our powerful ethics auditing tool. 
        Our platform helps businesses, researchers, and developers detect bias, improve explainability, and uphold ethical AI standards with ease.
      </p>
      
        <Button type='primary' onClick={ () => Navigate('/home')}>Try Now! <ArrowRightOutlined /></Button>
        <img src={Logo} alt="Onboarding" className="logo-image" />

      </div>
      </>
  )
}


export default App
