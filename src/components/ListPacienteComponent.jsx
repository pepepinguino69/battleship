import React, { Component } from "react";
import PacienteService from "../services/PacienteService";
import { withRouter } from "../components/withRouter";

class ListPacienteComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Pacientes: [],
		};
		this.addPaciente = this.addPaciente.bind(this);
		this.editPaciente = this.editPaciente.bind(this);
		this.deletePaciente = this.deletePaciente.bind(this);
	}

	deletePaciente(id) {
		PacienteService.deletePaciente(id).then((res) => {
			this.setState({
				Pacientes: this.state.Pacientes.filter(
					(Paciente) => Paciente.id !== id
				),
			});
		});
	}
	viewPaciente(id) {
		 this.props.navigation.navigate(`/view/${id}`);
	}
	editPaciente(id) {
		this.props.navigation.navigate(`/add/${id}`);
	}

	componentDidMount() {
		PacienteService.getPacientes().then((res) => {
			this.setState({ Pacientes: res.data });
		});
	}

	addPaciente() {
		this.props.navigation.navigate("/add-Paciente/_add");
	}

	render() {
		return (
			<div>
				<h2 className="text-center"> Listado de Pacientes</h2>
				<div className="row">
					<button className="btn btn-primary" onClick={this.addPaciente}>
						{"id"}
						Crear Paciente
					</button>
				</div>
				<br></br>
				<div className="row">
					<table className="table table-striped table-bordered">
						<thead>
							<tr>
								<th> Nombre Paciente</th>
								<th> Apellido Paciente</th>
								<th> DNI Paciente</th>
								<th> Fecha Alta Paciente</th>
								<th> Actions</th>
							</tr>
						</thead>
						<tbody>
							{this.state.Pacientes.map((Paciente) => (
								<tr key={Paciente.id}>
									<td> {Paciente.nombre} </td>
									<td> {Paciente.apellido}</td>
									<td> {Paciente.dni}</td>
									<td> {Paciente.fecha}</td>
									<td>
										<button
											onClick={() => this.editPaciente(Paciente.id)}
											className="btn btn-info"
										>
											Editar
										</button>
										<button
											style={{ marginLeft: "10px" }}
											onClick={() => this.deletePaciente(Paciente.id)}
											className="btn btn-danger"
										>
											Borrar
										</button>
										<button
											style={{ marginLeft: "10px" }}
											onClick={() => this.viewPaciente(Paciente.id)}
											className="btn btn-info"
										>
											Consultar
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default ListPacienteComponent;
