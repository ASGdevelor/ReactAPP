import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import './components/header/header';
import './components/header/button'
import  Header  from './components/header/header';
import  Footer  from './components/footer/Footer'

import About from './components/About/About';

import Main from './components/MainPage/Main';
import Catalog from './components/Catalog/Catalog';
import AuthorizationPage from './components/authorization/AuthorizationPage';
import Faq from './components/FAQ/Faq';
import PopularPage from './components/PopularPage/PopularPage';
import BronsPage from './components/Brons/BronsPage';
import News from './components/News/News';
import NewsPage from './components/NewsPage/NewsPage';
import ProfilePage from './components/Profile/ProfilePage';
import ProtectedRoute from './components/ProtectedRoute';
import ErrorPage from './components/Error404/ErrorPage';
function App() {
  return (
   
      <div className="App px-12">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About title="О нас" />} />
            <Route path="/catalog" element={<Catalog/>} />
            <Route path="/authorization" element={<AuthorizationPage/>} />
            <Route path="/faq" element={<Faq/>}/>
            <Route path="/popular" element={<PopularPage/>}/>
            <Route path="/brons" element={<BronsPage/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/news/newsPage" element={<NewsPage />} />
            <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
            <Route path="/brons" element={<ProtectedRoute><BronsPage /></ProtectedRoute>} />
            <Route path="/errorPage" element={<ErrorPage/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
  );
}

export default App;
