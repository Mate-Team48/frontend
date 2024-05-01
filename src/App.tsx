import './styles/page.scss';

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { AuthPage } from '@modules/authorization/pages/AuthPage.tsx';
import { MainPage } from "@pages/MainPage";
import { FundraisersPage } from '@pages/FundraisersPage';
import { NotFoundPage } from '@pages/NotFoundPage';

function App() {
  // const [token, setToken] = useState<string>(localStorage.getItem('token') || '');
  const [openedAuthModalWin, setOpenedAuthModalWin] = useState<boolean>(true);
  
  // function openAuthModalWin() {
  //   setOpenedAuthModalWin(true)
  // }
  
  function closeAuthModalWin() {
    setOpenedAuthModalWin(false)
  }
 
  return (
    <div className='page'>
      <Router>
        <Header classNames='page__header'/>
        <div className="container">
          <main className="page__main main">
            <Routes>
              <Route path="frontend/" element={<MainPage />} />
              <Route path="frontend/fundraisers-page" element={<FundraisersPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            {openedAuthModalWin && <AuthPage closeModal={closeAuthModalWin}/>}
          </main>
        </div>
        <Footer classNames='page__footer'/>
      </Router>
    </div>
  )
}

export default App;
