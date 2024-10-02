export default function Container() {
  return (
    <div className="container">
      <div className="page-inner">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Profile</div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 col-lg-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name</label>
                      <div className="input-icon">
                        <span className="input-icon-addon">
                          <i className="fa fa-user" />
                        </span>
                        <input
                          type="text"
                          id="fullName"
                          className="form-control"
                          placeholder="Enter Full Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <div className="input-icon">
                        <span className="input-icon-addon">
                          <i className="fa fa-user" />
                        </span>
                        <input
                          type="text"
                          id="username"
                          className="form-control"
                          placeholder="Enter Username"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <div className="input-icon">
                        <span className="input-icon-addon">
                          <i className="fa fa-envelope" />
                        </span>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Enter Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <div className="input-icon">
                        <span className="input-icon-addon">
                          <i className="fa fa-lock" />
                        </span>
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="dob">Date of Birth</label>
                      <input type="date" id="dob" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <div className="input-icon">
                        <span className="input-icon-addon">
                          <i className="fa fa-phone" />
                        </span>
                        <input
                          type="tel"
                          id="phone"
                          className="form-control"
                          placeholder="Enter Phone Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="address">Address</label>
                      <div className="input-icon">
                        <span className="input-icon-addon">
                          <i className="fa fa-map-marker" />
                        </span>
                        <input
                          type="text"
                          id="address"
                          className="form-control"
                          placeholder="Enter Address"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="image">Profile Image</label>
                      <input type="file" id="image" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 mb-3">
                    <div className="form-group">
                      <label>Gender</label>
                      <br />
                      <div className="d-flex">
                        <div className="form-check me-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="genderMale"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="genderMale"
                          >
                            Male
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="genderFemale"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="genderFemale"
                          >
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-action">
  <button className="btn btn-success me-3 border border-success rounded">Save</button>
  <button className="btn btn-danger border border-danger rounded">Close</button>
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
