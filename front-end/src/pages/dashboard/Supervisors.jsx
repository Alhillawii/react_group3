import Table from "../.././components/dashboard/Table.jsx";

function Supervisors() {
    return (
        <Table
            getUrl="http://127.0.0.1:8000/api/supervisor"
            updateUrl="http://127.0.0.1:8000/api/supervisorUpdate"
            deleteUrl="http://127.0.0.1:8000/api/supervisorDelete"
            name="Supervisor"
            show ={true}
            edit = {true}
        />
    )
}

export default Supervisors;