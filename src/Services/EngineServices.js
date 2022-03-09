import axios from "./AxiosServices";

//Display all Registry
export function getEngines() {
	return axios.get("engine");
}

//Edit the Registry
export function deleteEngine(engine) {
	return axios.put("engine/" + engine);
}

//Create new Registry
export function addEngine(engine) {
	return axios.post("engine/" + engine);
}

//Delete the  Registry
export function editEngine(engine) {
	return axios.delete("engine/Delete/", engine);
}
