import React, { Component } from "react";

export default class Recordatorio extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="recordatorio">
        <h3>Selección anterior: {this.props.seleccionAnterior}</h3>
        <h4>Historial de opciones elegidas:</h4>
        <ul>
          {this.props.historial.map((element, index) => {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      </div>
    );
  }
}