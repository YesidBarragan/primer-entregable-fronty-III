import React, { Component } from "react";
import HistoriaData from "../../assets/data.json"
import Recordatorio from "../Recordatorio/Recordatorio";
import Opciones from "../Opciones/Opciones";

export default class Historia extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      opcion: "1",
      historial: []
    }
  }

  componentDidMount() {
    alert("Empieza tu camino!");
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { id, opcion, historial } = this.state;

    if (prevState.id !== id && id <= 5) {
      historial.push(opcion.substr(1).toUpperCase());
    }
  }

  handleOpcionA = () => {
    const { id } = this.state;

    if (id < 5) {
      this.setState({
        id: id + 1,
        opcion: id + 1 + "a",
      })
    } else {
      alert("Fin del camino!");
    }
  }

  handleOpcionB = () => {
    const { id } = this.state;

    if (id < 5) {
      this.setState({
        id: id + 1,
        opcion: id + 1 + "b",
      })
    } else {
      alert("Fin del camino!");
    }
  }

  render() {

    const { id, opcion, historial } = this.state;
    const historiaData = HistoriaData.find((element) => element.id.includes(opcion));
    const metodos = {
      a: this.handleOpcionA,
      b: this.handleOpcionB
    }

    return(
      <div className="layout">
        <h1 className="historia">
          {historiaData.historia}
        </h1>
        <Opciones
          metodos={metodos}
          opciones={historiaData.opciones}
          id={id}
        />
        <Recordatorio
          seleccionAnterior={opcion.substr(1).toUpperCase()}
          historial={historial}
        />
      </div>
    );
  }
}