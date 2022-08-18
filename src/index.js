import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import EmojiContext from './context/EmojiContext';
import './styles/global.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <EmojiContext>
        <App />
    </EmojiContext>
);