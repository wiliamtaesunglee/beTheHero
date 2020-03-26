import React from 'react';
import { FiLogIn } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import './styles.css';

const Logon = () => {
  return(
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero"/>

        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="Sua ID"/>
          <button className="button" type="submit">Entrar</button>

          <a href="/register">
            <FiLogIn size={16} color="#e02041"/>
            Não Tenho Cadastro
          </a>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes"/>
    </div>
  );
};

export default Logon;
