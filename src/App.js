import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {
  const [isSidebarShow, setIsSidebarShow] = useState(true);

  const handleToggleMenubar = () =>{
      setIsSidebarShow(!isSidebarShow)
  }
  
  return (
    <BrowserRouter>
      <Header isSidebarShow={isSidebarShow} handleToggleMenubar={handleToggleMenubar} />
      <Routes>
        <Route path='/' exact={true} element={<Dashboard isSidebarShow={isSidebarShow} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
