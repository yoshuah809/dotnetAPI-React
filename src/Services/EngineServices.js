import axios from "./AxiosServices";

//Create new Registry - Create
export function addEngine(engine) {
	return axios.post("engine/" + engine);
}
//Display all Registry (Read)
export function getEngines() {
	return axios.get("engine/");
}

//Update the Registry (Update)
export function updateEngine(engine) {
	return axios.put("engine/" + engine);
}

//Delete the  Registry (Delete)
export function editEngine(engine) {
	return axios.delete("engine/Delete/", engine);
}
