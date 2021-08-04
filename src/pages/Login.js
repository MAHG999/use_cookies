import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../index.css';
import Cookies from 'universal-cookie';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        usuario: "",
        password: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if(this.state.form.usuario.trim()=='borja' && this.state.form.password.trim()=='123'){
      const cookies = new Cookies();
      cookies.set('idUsuario', '1', {path: '/'});
      cookies.set('nombreUsuario', 'Borja', {path: '/'});
      cookies.set('rolUsuario', 'Administrador', {path: '/'});
      window.location.href='./dashboard';

    }
    else{
      alert('El usuario o la contraseña no son correctos');
    }
  };

  render() {
    return (
      <div className="container">
        <div className="loginContainer">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="usuario">
              <h5>Usuario: </h5>
            </label>
            <br />
            <input
              id="user"
              name="usuario"
              type="text"
              onChange={this.handleChange}
            />
            <br />
            <br />
            <label htmlFor="password">
              <h5>Contraseña: </h5>
            </label>
            <br />
            <input
              id="pwd"
              name="password"
              type="password"
              onChange={this.handleChange}
            />
            <br />
            <br />
            <input
              type="submit"
              className="btn btn-success btnLogin"
              value="Iniciar Sesión"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;