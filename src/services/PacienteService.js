import axios from "axios";

const PACIENTE_API_BASE_URL = "http://localhost:8080/api/pacientes/";

class PacienteService {
	getPacientes() {
		return axios.get(PACIENTE_API_BASE_URL);
	}

	createPaciente(Paciente) {
		return axios.post(PACIENTE_API_BASE_URL, Paciente);
	}

	getPacienteById(PacienteId) {
		return axios.get(PACIENTE_API_BASE_URL + PacienteId);
	}

	updatePaciente(Paciente, PacienteId) {
		return axios.put(PACIENTE_API_BASE_URL + "/" + PacienteId, Paciente);
	}

	deletePaciente(PacienteId) {
		return axios.delete(PACIENTE_API_BASE_URL + "/" + PacienteId);
	}
}

export default new PacienteService();
