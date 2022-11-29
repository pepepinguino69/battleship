import React, { Component } from "react";
import PacienteService from "../services/PacienteService";

class CreatePacienteComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// step 2
			id: this.props.match.params.id,
			nombre: "",
			apellido: "",
			dni: "",
			fecha: "",
		};
		this.changeNombreHandler = this.changeNombreHandler.bind(this);
		this.changeApellidoHandler = this.changeApellidoHandler.bind(this);
		this.saveOrUpdatePaciente = this.saveOrUpdatePaciente.bind(this);
	}

	// step 3
	componentDidMount() {
		// step 4
		if (this.state.id === "_add") {
			return;
		} else {
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
	}
	saveOrUpdatePaciente = (e) => {
		e.preventDefault();
		let Paciente = {
			nombre: this.state.nombre,
			apellido: this.state.apellido,
			dni: this.state.dni,
			fecha: this.state.fecha,
		};
		console.log("Paciente => " + JSON.stringify(Paciente));

		// step 5
		if (this.state.id === "_add") {
			PacienteService.createPaciente(Paciente).then((res) => {
				this.props.history.push("/Pacientes");
			});
		} else {
			PacienteService.updatePaciente(Paciente, this.state.id).then((res) => {
				this.props.history.push("/Pacientes");
			});
		}
	};

	changeNombreHandler = (event) => {
		this.setState({ nombre: event.target.value });
	};

	changeApellidoHandler = (event) => {
		this.setState({ apellido: event.target.value });
	};

	changeDni = (event) => {
		this.setState({ dni: event.target.value });
	};
	changeFecha = (event) => {
		this.setState({ fecha: event.target.value });
	};

	cancel() {
		this.props.history.push("/Pacientes");
	}

	getTitle() {
		if (this.state.id === "_add") {
			return <h3 className="text-center">Add Paciente</h3>;
		} else {
			return <h3 className="text-center">Update Paciente</h3>;
		}
	}
	render() {
		return (
			<div>
				<br></br>
				<div className="container">
					<div className="row">
						<div className="card col-md-6 offset-md-3 offset-md-3">
							{this.getTitle()}
							<div className="card-body">
								<form>
									<div className="form-group">
										<label> Nombre: </label>
										<input
											placeholder="Nombre"
											name="nombre"
											className="form-control"
											value={this.state.nombre}
											onChange={this.changeNombreHandler}
										/>
									</div>
									<div className="form-group">
										<label> Apellido: </label>
										<input
											placeholder="Apellido"
											name="apellido"
											className="form-control"
											value={this.state.apellido}
											onChange={this.changeApellidoHandler}
										/>
									</div>
									<div className="form-group">
										<label> DNI: </label>
										<input
											placeholder="DNI"
											name="dni"
											className="form-control"
											value={this.state.dni}
											onChange={this.changeDniHandler}
										/>
										<input
											placeholder="Fecha"
											name="fecha"
											className="form-control"
											value={this.state.fecha}
											onChange={this.changeFechaHandler}
										/>
									</div>

									<button
										className="btn btn-success"
										onClick={this.saveOrUpdatePaciente}
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

export default CreatePacienteComponent;
