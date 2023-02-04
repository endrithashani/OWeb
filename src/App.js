import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage  from './Pages/HomePage'
import './App.css';
import NavBar from './components/NavBar.js/NavBar';
import Footer from './components/NavBar.js/Footer';
function App() {
  return (
      <BrowserRouter>
      <div className="App" style={{backgroundColor:"#FFFFFF"}}>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
        <Footer/>
      </div>
      </BrowserRouter>
  );
}

export default App;
