import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';

import logoImg from '../../assets/logo.svg'

const Register = () => {
  return (
    <div className="register-container">
      <div className="content">
        <section>
            <img src={logoImg}i alt="Be The Hero"/>
            <h1>Cadastro</h1>
          <p>Faça seu cadastro</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={18} color="#e02041"/>
            Já Tenho Cadastro
          </Link>
        </section>

        <form>
          <input placeholder="Nome da ONG"/>
          <input type="email" placeholder="E-mail"/>
          <input placeholder="WhatsApp"/>

          <div className="input-group">
            <input placeholder="Cidade"/>
            <input placeholder="UF" style={{ width: 80 }}/>
          </div>

          <button className="button" type="submit">cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
