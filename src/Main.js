import React from 'react';
import './App.css';
import Home from './components/Home';

export default function Main(props) {
    const { language } = props;
    return (
        <div className="main">
            <Home language={language}></Home>
        </div>
    )
}
