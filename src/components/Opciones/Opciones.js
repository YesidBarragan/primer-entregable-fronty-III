import React, { Component } from "react";

export default class Opciones extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const {metodos, opciones} = this.props;
    
    return (
      <div className="opciones">
        <div className="opcion">
          <button className="botones" onClick={metodos.a}>A</button>
          <h2>{opciones.a}</h2>
        </div>
        <div className="opcion">
          <button className="botones" onClick={metodos.b}>B</button>
          <h2>{opciones.b}</h2>
        </div>
      </div>
    );
  }
}