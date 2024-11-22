import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import JobSeekerAndProvider from './components/JobSeekerAndProvider';
import './App.css'; 

const App = () => {
    return (
        <Router>
            <div className="page-container">
                <Header />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<JobSeekerAndProvider />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
