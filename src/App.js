// App.js
import React from 'react';
import LoginForm from './LoginForm';
import  { useEffect } from 'react';

import './App.css'; // Importez votre fichier CSS principal

const App = () => {
  useEffect(() => {
    document.title = 'Prof abderhman';
    // Optionally, you can return a cleanup function if needed
    // return () => {
    //   cleanup logic if necessary
    // };
  }, []);
  return (

    
    <div className="app">
      <div className="login-container">
        <div className="facebook-logo">
          {/* Votre logo ou tout autre contenu */}
        </div>
        <LoginForm />
        {/* Autres composants ou contenu */}
      </div>

      {/* Ajoutez les deux divs ici */}
      <div className="language-options">
        <div className="lang">
          <div>
            <p>Français (France)</p>
            <a href="#">Español</a>
            <a href="#">English (US)</a>
            <a href="#">中文(简体)</a>
          </div>
          <div>
            <a href="#">العربية</a>
            <a href="#">Português (Brasil)</a>
            <a href="#">한국어</a>
            <a href="#">Italiano</a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div>
          à propos • Aide • Plus
        </div>
        <div className="meta">
          Meta © 2023
        </div>
      </div>
    </div>
  );
};

export default App;
