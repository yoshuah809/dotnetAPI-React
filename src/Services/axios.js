import axios from "axios";

const baseUrl = "https://localhost:44383/api/engine/";

const [data, setData] = useState([]);

const getData = async () => {
	await axios
		.get(baseUrl)
		.then((response) => {
			setData(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
};

const postData = async () => {
	delete selectedEngine.id;
	selectedEngine.launched = parseInt(selectedEngine.launched);
	await axios
		.post(baseUrl, selectedEngine)
		.then((response) => {
			setData(data.concat(response.data));
			openCloseInsertModal();
		})
		.catch((error) => {
			console.log(error);
		});
};

const putData = async () => {
	selectedEngine.launched = parseInt(selectedEngine.launched);
	await axios
		.put(baseUrl + selectedEngine.id, selectedEngine)
		.then((response) => {
			var resp = response.data;
			var tmpData = data;
			tmpData.map((engine) => {
				if (engine.id === selectedEngine.id) {
					engine.name = resp.name;
					engine.launched = resp.launched;
					engine.developer = resp.developer;
				}
			});
			openCloseEditModal();
		})
		.catch((error) => {
			console.log(error);
		});
};

const deleteData = async () => {
	selectedEngine.launched = parseInt(selectedEngine.launched);
	await axios
		.delete(baseUrl + selectedEngine.id, selectedEngine)
		.then((response) => {
			setData(data.filter((engine) => engine.id !== response.data));
			openCloseDeleteModal();
		})
		.catch((error) => {
			console.log(error);
		});
};
