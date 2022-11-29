import React, { Component } from "react";
import PacienteService from "../services/PacienteService";

class UpdatePacienteComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: this.props.match.params.id,
			nombre: "",
			apellido: "",
			dni: "",
			fecha: "",
		};
		this.changenombreHandler = this.changenombreHandler.bind(this);
		this.changeapellidoHandler = this.changeapellidoHandler.bind(this);
		this.updatePaciente = this.updatePaciente.bind(this);
	}

	componentDidMount() {
		PacienteService.getPacienteById(this.state.id).then((res) => {
			let Paciente = res.data;
			this.setState({
				nombre: Paciente.nombre,
				apellido: Paciente.apellido,
				dni: Paciente.dni,
				fecha: Paciente.fecha,
			});
		});
	}

	updatePaciente = (e) => {
		e.preventDefault();
		let Paciente = {
			nombre: this.state.nombre,
			apellido: this.state.apellido,
			dni: this.state.dni,
		};
		console.log("Paciente => " + JSON.stringify(Paciente));
		console.log("id => " + JSON.stringify(this.state.id));
		PacienteService.updatePaciente(Paciente, this.state.id).then((res) => {
			this.props.history.push("/Pacientes");
		});
	};

	changenombreHandler = (event) => {
		this.setState({ nombre: event.target.value });
	};

	changeapellidoHandler = (event) => {
		this.setState({ apellido: event.target.value });
	};

	changeDniHandler = (event) => {
		this.setState({ dni: event.target.value });
	};
	changeFechaHandler = (event) => {
		this.setState({ fecha: event.target.value });
	};

	cancel() {
		this.props.history.push("/Pacientes");
	}

	render() {
		return (
			<div>
				<br></br>
				<div className="container">
					<div className="row">
						<div className="card col-md-6 offset-md-3 offset-md-3">
							<h3 className="text-center">Actualizar Paciente</h3>
							<div className="card-body">
								<form>
									<div className="form-group">
										<label> Nombre: </label>
										<input
											placeholder="First Name"
											name="nombre"
											className="form-control"
											value={this.state.nombre}
											onChange={this.changenombreHandler}
										/>
									</div>
									<div className="form-group">
										<label> Apellido: </label>
										<input
											placeholder="Last Name"
											name="apellido"
											className="form-control"
											value={this.state.apellido}
											onChange={this.changeapellidoHandler}
										/>
									</div>
									<div className="form-group">
										<label> DNI: </label>
										<input
											placeholder="DNI"
											name="dni"
											className="form-control"
											value={this.state.dni}
											onChange={this.changeEmailHandler}
										/>
										<input
											placeholder="Fecha de Alta"
											name="fecha"
											className="form-control"
											value={this.state.fecha}
											onChange={this.changeFechaHandler}
										/>
									</div>

									<button
										className="btn btn-success"
										onClick={this.updatePaciente}
									>
										Save
									</button>
									<button
										className="btn btn-danger"
										onClick={this.cancel.bind(this)}
										style={{ marginLeft: "10px" }}
									>
										Cancel
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default UpdatePacienteComponent;
