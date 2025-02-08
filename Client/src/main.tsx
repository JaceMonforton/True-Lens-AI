import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/HomePage.tsx'

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
      </Routes>
      
      </StrictMode>,
    </BrowserRouter>
</>

)
