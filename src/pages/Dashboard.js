
import React, { Component } from "react";
import "../App.css";
import Cookies from 'universal-cookie';


class Dashboard extends Component {
  render() {
    const cookies = new Cookies();
    return (
      <div className="containerDashboard">
        <h3>Id Usuario: {cookies.get('idUsuario')}</h3>
        <h3>Nombre Usuario: {cookies.get('nombreUsuario')}</h3>
        <h3>Rol Usuario: {cookies.get('rolUsuario')}</h3>
      </div>
    );
  }
}

export default Dashboard;