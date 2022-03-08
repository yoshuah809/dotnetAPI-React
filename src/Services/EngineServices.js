import axios from "./AxiosServices";

export function getEngines() {
	return axios.get("engine/");
}

export function addEngine(engine) {
	return axios.post("engine/Add/", engine);
}

export function deleteEngine(engine) {
	return axios.put("engine/Delete/", engine);
}

export function editEngine(engine) {
	return axios.delete("engine/Delete/", engine);
}
