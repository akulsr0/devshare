import { OverlayTrigger, Popover, Button } from 'react-bootstrap';
import Head from 'next/head';
import Country from '../utils/countryArray';

const Register = (props) => {
  return (
    // comment
    <>
      <Head>
        <title>DevShare: Registeration</title>
      </Head>
      <div style={{ backgroundColor: '#bfdaff' }}>
        <div className="header container pt-2">
          <div className="header-title-div">
            <h2 style={{ fontWeight: 800 }}>DevShare</h2>
          </div>
          <div className="menu-items px-2">
            <h6 className="pl-3">Projects</h6>
            <h6 className="pl-3">Categories</h6>
            <h6 className="pl-3">Developers</h6>
            <h6 className="pl-3">About Us</h6>
            <h6 className="pl-3">Contact Us</h6>
          </div>
          <div className="menu-div">
            <OverlayTrigger
              trigger="click"
              key="bottom"
              placement="bottom"
              className="menu-content"
              overlay={
                <Popover
                  className="menu-content"
                  id={`popover-positioned-bottom`}
                >
                  <Popover.Content className="menu-content ">
                    <h6 style={{ fontWeight: 300 }}>Projects</h6>
                    <h6 style={{ fontWeight: 300 }}>Categories</h6>
                    <h6 style={{ fontWeight: 300 }}>Developers</h6>
                    <h6 style={{ fontWeight: 300 }}>About Us</h6>
                    <h6 style={{ fontWeight: 300, marginBottom: 12 }}>
                      Contact Us
                    </h6>
                  </Popover.Content>
                </Popover>
              }
            >
              <Button variant="none">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/menu.png"
                  className="menu-image"
                />
              </Button>
            </OverlayTrigger>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <center>
          <h2 style={{ fontWeight: 800 }}>Welcome to DevShare</h2>
        </center>
        {/* REGISTERATION FORM HERE */}
        <div className="registerbox">
          <div
            className="card"
            style={{
              width: '90%',
              height: 'fitContent',
              backgroundColor: 'white',
            }}
          >
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label for="username">User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Github User Name"
                  />
                </div>
                <div className="form-group">
                  <label for="bio">Bio</label>
                  <input
                    type="text"
                    className="form-control"
                    id="bio"
                    placeholder="Bio"
                  />
                </div>
                <div className="form-group">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="form-group">
                  <label for="cnfpassword">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="cnfpassword"
                    placeholder="Password Again"
                  />
                </div>
                <label>Gender</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    value="option1"
                    checked
                  />
                  <label className="form-check-label" for="male">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    value="option2"
                  />
                  <label className="form-check-label" for="female">
                    Female
                  </label>
                </div>
                <br></br>
                <div className="form-group">
                  <label for="country">Country</label>
                  <select className="form-control" id="country">
                    {
                      /** Add country here */
                      Country.map((country, index)=>(
                        <option value={country}>{country}</option>
                      ))
                    }
                  </select>
                </div>
                <div className="form-group">
                  <label for="language">Prefred Language</label>
                  <select className="form-control" id="language">
                    <option>--Select--</option>
                    <option>Python</option>
                    <option>JavaScript</option>
                    <option>Java</option>
                    <option>Ruby</option>
                  </select>
                </div>
                <div>
                  <center>
                    <button type="submit" class="btn btn-primary">
                      Sign Up
                    </button>
                  </center>
                </div>
              </form>
              <div>
                <b>Already a User </b>
                <a href="#">Sign In</a>
              </div>
            </div>
          </div>
        </div>
      <br/><br/>


        </div>
    </>
  );
};
export default Register;
