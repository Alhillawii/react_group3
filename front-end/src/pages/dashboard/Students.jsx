import Table from "../.././components/dashboard/Table.jsx";

function Students() {

    return (
        <>
        <Table
            name="Students"
            getUrl="http://127.0.0.1:8000/api/student"
            updateUrl="http://127.0.0.1:8000/api/studentUpdate"
            deleteUrl="http://127.0.0.1:8000/api/studentDelete"
            show ={true}
            edit = {true}
        />
        </>
    );
}

export default Students;