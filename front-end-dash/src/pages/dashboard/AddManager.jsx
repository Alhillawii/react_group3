import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddManager() {
  const navigate = useNavigate();
  const [newTeacher, setNewTeacher] = useState({
    Full_name: '',
    username: '',
    email: '',
    password: '',
    address: '',
    dob: '',
    gender: '',
    phone: '',
    image: '',

  });

  const [errors, setErrors] = useState({}); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTeacher((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); 
  };

  const validate = () => {
    const newErrors = {};
    if (!newTeacher.Full_name) newErrors.Full_name = 'Full Name is required';
    if (!newTeacher.username) newErrors.username = 'Username is required';
    if (!newTeacher.email) newErrors.email = 'Email is required';
    if (!newTeacher.password) newErrors.password = 'Password is required';
    if (!newTeacher.address) newErrors.address = 'Address is required';
    if (!newTeacher.dob) newErrors.dob = 'Date of Birth is required';
    if (!newTeacher.gender) newErrors.gender = 'Gender is required';
    if (!newTeacher.phone) newErrors.phone = 'Phone number is required';
    if (!newTeacher.image) newErrors.image = 'Image is required';

    return newErrors;
  };

  const handleAddTeacher = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const formData = new FormData();
      for (const key in newTeacher) {
        formData.append(key, newTeacher[key]);
      }
      await axios.post('http://127.0.0.1:8000/api/add_managers', formData);
    navigate('/managers');
    } catch (err) {
      console.error('Error adding teacher', err);
    }
  };

  return (
    <div className="container my-5">
      <div className="card shadow-sm p-4">
        <h3 className="mb-4">Add New Teacher</h3>
        <form onSubmit={handleAddTeacher}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Full Name</label>
              <input
                type="text"
                name="Full_name"
                value={newTeacher.Full_name}
                onChange={handleChange}
                className={`form-control ${errors.Full_name ? 'is-invalid' : ''}`}
                placeholder="Enter Full Name"
              />
              {errors.Full_name && <div className="invalid-feedback">{errors.Full_name}</div>}
            </div>
            <div className="col-md-6 mb-3">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={newTeacher.username}
                onChange={handleChange}
                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                placeholder="Enter Username"
              />
              {errors.username && <div className="invalid-feedback">{errors.username}</div>}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={newTeacher.email}
                onChange={handleChange}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                placeholder="Enter Email"
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="col-md-6 mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={newTeacher.password}
                onChange={handleChange}
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                placeholder="Enter Password"
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={newTeacher.address}
                onChange={handleChange}
                className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                placeholder="Enter Address"
              />
              {errors.address && <div className="invalid-feedback">{errors.address}</div>}
            </div>
            <div className="col-md-6 mb-3">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={newTeacher.dob}
                onChange={handleChange}
                className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
              />
              {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Gender</label>
              <select
                name="gender"
                value={newTeacher.gender}
                onChange={handleChange}
                className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
            </div>
            <div className="col-md-6 mb-3">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={newTeacher.phone}
                onChange={handleChange}
                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                placeholder="Enter Phone"
              />
              {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Image</label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                className={`form-control ${errors.image ? 'is-invalid' : ''}`}
              />
              {errors.image && <div className="invalid-feedback">{errors.image}</div>}
            </div>
          
          </div>


          <button type="submit" className="btn btn-primary mt-3">Add Manager</button>
          <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>
            Back
          </button>
        </form>
      </div>
    </div>
  );
}
