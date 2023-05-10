
import { useContext } from 'react';
import './App.scss';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import { themeContext } from './Context';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="App" style={{background: darkMode?'black':'',color:darkMode?'white':''}}>

     <Navbar/>
     <Intro/>
     <Services/>
     <Portfolio/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
