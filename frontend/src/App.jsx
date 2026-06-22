import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {


  return (
    <>
      
 <main className='min-h-[calc(100vh-120px)]'>
     <Header/>
     
      <Outlet/>
   
    <Footer/>
        
     </main>
  

  
    </>
  )
}

export default App
