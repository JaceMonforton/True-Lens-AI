import '../results.css'
import Navbar from '../components/Navbar';
function About() {

return (
    <>
    <Navbar/>
        <div className="About-page-container">
            <h1 className='results-container'>TrueLensAI</h1>

            <p className='output-container'>
            True-Lens AI is designed for businesses, researchers, and individuals who seek a reliable and comprehensive method for evaluating their AI models before deployment. It provides a structured framework to assess fairness, detect ethical biases, and ensure that AI-driven systems operate transparently and responsibly. By offering in-depth analysis and actionable insights, True-Lens AI helps organizations build trust in their AI technologies before they are introduced into real-world applications.

            </p>

        </div>
    </>
    )
}


export default About
