import React from 'react';
import './App.css';
import HomeNav from './components/HomeNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import CourseList from './components/CourseList';
import LandingPage from './components/LandingPage';
import { CourseProvider } from './components/SelectedCourse';
import Payment from './components/Payment';
function App() {
  return (
    <div className="App">
      <CourseProvider>
        <BrowserRouter>
          <HomeNav />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/course' element={<CourseList />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/payment' element={<Payment />} />
          </Routes>
        </BrowserRouter>
      </CourseProvider>
    </div>
  );
}

export default App;
