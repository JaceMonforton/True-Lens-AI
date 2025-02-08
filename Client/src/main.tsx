import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import About from './pages/AboutPage.tsx';
import Home from './pages/HomePage.tsx'
import Results from './pages/ResultsPage.tsx';
import Contact from './pages/ContactPage.tsx'
createRoot(document.getElementById('root')!).render(
<>
    <Toaster 
    position='top-center'
    reverseOrder={false}
    />

    <BrowserRouter>
      
      <StrictMode>

      <Routes>
        <Route path='/' element={ <App /> } />
        <Route path='/Home' element={ <Home /> }/>
        <Route path='/Results' element={ <Results /> }/>
        <Route path='/about' element={ <About /> }/>
        <Route path='/contact' element={ <Contact /> }/>
      </Routes>
      
      </StrictMode>,
    </BrowserRouter>
</>

)
