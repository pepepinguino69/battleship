import React, { Component } from "react";
import PacienteService from "../services/PacienteService";

class ViewPacienteComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: this.props.match.params.id,
			Paciente: {},
		};
	}

	componentDidMount() {
		PacienteService.getPacienteById(this.state.id).then((res) => {
			this.setState({ Paciente: res.data });
		});
	}

	render() {
		return (
			<div>
				<br></br>
				<div className="card col-md-6 offset-md-3">
					<h3 className="text-center"> Detalles del Paciente</h3>
					<div className="card-body">
						<div className="row">
							<label> Nombre del Paciente: </label>
							<div> {this.state.Paciente.nombre}</div>
						</div>
						<div className="row">
							<label> Apellido del Paciente: </label>
							<div> {this.state.Paciente.apellido}</div>
						</div>
						<div className="row">
							<label> DNI: </label>
							<div> {this.state.Paciente.dni}</div>
						</div>
						<div className="row">
							<label> Fecha de Alta Paciente: </label>
							<div> {this.state.Paciente.fecha}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ViewPacienteComponent;
