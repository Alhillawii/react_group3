

import { useState, useEffect } from 'react';
import axios from 'axios';
import $ from 'jquery';
import 'datatables.net-bs5';

export default function UserInfo() {
  const [userData, setUserData] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', password: '' });
  const [editUser, setEditUser] = useState({ id: '', name: '', email: '', password: '' });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (userData.length > 0) {
      $('#add-row').DataTable();
    }
  }, [userData]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/users');
      setUserData(response.data.results);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/userDelete/${id}`);
      setUserData((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error('Error deleting user', error);
    }
  };

  const handleChange = (e, formType) => {
    const { name, value } = e.target;
    if (formType === 'add') {
      setNewUser((prev) => ({ ...prev, [name]: value }));
    } else if (formType === 'edit') {
      setEditUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/add_user', newUser);
      setUserData((prev) => [...prev, response.data]);
      setNewUser({ name: '', email: '', password: '' });
      fetchData()
    } catch (err) {
      console.error('Error adding user', err);
    }
  };

  const handleEditClick = (user) => {
    setEditUser({ id: user.id, name: user.name, email: user.email, password: '' });
  };

 const handleEditUser = async (e) => {
  e.preventDefault();
  try {
    const updatedFields = {};
    if (editUser.name !== '') updatedFields.name = editUser.name;
    if (editUser.email !== '') updatedFields.email = editUser.email;
    if (editUser.password !== '') updatedFields.password = editUser.password;

    await axios.put(`http://127.0.0.1:8000/api/userUpdate/${editUser.id}`, updatedFields);
    setUserData((prev) =>
      prev.map((user) => (user.id === editUser.id ? { ...user, ...updatedFields } : user))
    );
    setEditUser({ id: '', name: '', email: '', password: '' });
  } catch (err) {
    console.error('Error editing user', err);
  }
};

  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3 className="fw-bold mb-3">User Info</h3>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="d-flex align-items-center">
                  <h4 className="card-title">Add User</h4>
                  <button
                    className="btn btn-primary btn-round ms-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#addRowModal"
                  >
                    <i className="fa fa-plus" /> Add User
                  </button>
                </div>
              </div>
              <div className="card-body">
                {/* Add User Modal */}
                <div className="modal fade" id="addRowModal" tabIndex={-1} role="dialog" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header border-0">
                        <h5 className="modal-title">
                          <span className="fw-mediumbold">New</span>
                          <span className="fw-light"> User </span>
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                      </div>
                      <div className="modal-body">
                        <form onSubmit={handleAddUser}>
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="form-group form-group-default">
                                <label>Name</label>
                                <input
                                  name="name"
                                  value={newUser.name}
                                  onChange={(e) => handleChange(e, 'add')}
                                  type="text"
                                  className="form-control"
                                  placeholder="Fill name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6 pe-0">
                              <div className="form-group form-group-default">
                                <label>Email</label>
                                <input
                                  name="email"
                                  value={newUser.email}
                                  onChange={(e) => handleChange(e, 'add')}
                                  type="email"
                                  className="form-control"
                                  placeholder="Fill email"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group form-group-default">
                                <label>Password</label>
                                <input
                                  name="password"
                                  value={newUser.password}
                                  onChange={(e) => handleChange(e, 'add')}
                                  type="password"
                                  className="form-control"
                                  placeholder="Fill password"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer border-0">
                            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                              Add
                            </button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                              Close
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Edit User Modal */}
                <div className="modal fade" id="editRowModal" tabIndex={-1} role="dialog" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header border-0">
                        <h5 className="modal-title">
                          <span className="fw-mediumbold">Edit</span>
                          <span className="fw-light"> User </span>
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                      </div>
                      <div className="modal-body">
                        <form onSubmit={handleEditUser}>
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="form-group form-group-default">
                                <label>Name</label>
                                <input
                                  name="name"
                                  value={editUser.name}
                                  onChange={(e) => handleChange(e, 'edit')}
                                  type="text"
                                  className="form-control"
                                  placeholder="Fill name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6 pe-0">
                              <div className="form-group form-group-default">
                                <label>Email</label>
                                <input
                                  name="email"
                                  value={editUser.email}
                                  onChange={(e) => handleChange(e, 'edit')}
                                  type="email"
                                  className="form-control"
                                  placeholder="Fill email"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group form-group-default">
                                <label>Password</label>
                                <input
                                  name="password"
                                  value={editUser.password}
                                  onChange={(e) => handleChange(e, 'edit')}
                                  type="password"
                                  className="form-control"
                                  placeholder="Fill password"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer border-0">
                            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                              Save Changes
                            </button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                              Close
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="table-responsive">
                  <table id="add-row" className="display table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th style={{ width: '10%' }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userData.map((user) => (
                        <tr key={user.id}>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>
                            <div className="form-button-action">
                              <button
                                type="button"
                                className="btn btn-link btn-primary btn-lg"
                                data-bs-toggle="modal"
                                data-bs-target="#editRowModal"
                                onClick={() => handleEditClick(user)}
                              >
                                <i className="fa fa-edit" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-link btn-danger"
                                onClick={() => handleDelete(user.id)}
                              >
                                <i className="fa fa-times" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}