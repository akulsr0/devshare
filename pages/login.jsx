import { OverlayTrigger, Popover, Button } from 'react-bootstrap';
import Head from 'next/head';
import Link from 'next/link';
import BlackButton from '../components/BlackButton';
import React from 'react';

const Login=()=>{
  
    return (
      <div>
        <Head>
          <title>DevShare: Login</title>
        </Head>
        <div style={{ backgroundColor: '#bfdaff' }}>
          <div className="header container pt-2">
            <div className="header-title-div">
              <Link href="/">
                <h2 style={{ fontWeight: 800, cursor: 'pointer' }}>DevShare</h2>
              </Link>
            </div>
            <div className="menu-items px-2">
              <h6 className="pl-3">Projects</h6>
              <h6 className="pl-3">Categories</h6>
              <h6 className="pl-3">Developers</h6>
              <h6 className="pl-3">About Us</h6>
              <h6 className="pl-3">Contact Us</h6>
            </div>
            <div className="login-header-div">
              <a href="/login">
                <BlackButton title="Login"></BlackButton>
              </a>
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
                      <a href="/login">
                        <BlackButton title="Login"></BlackButton>
                      </a>
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
            <br />
          </center>
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
                  <center>
                    <h4 className="extra-bold">User Login</h4>
                  </center>
                  <div className="form-group">
                    <label htmlFor="uName" className="bold">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="uName"
                      name="uname"
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="bold">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="mt-3">
                    <center>
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                    </center>
                  </div>
                </form>
                <div className="mt-2">
                  <b>
                    Didn't have an account? <Link href="/register"><strong>Sign Up</strong></Link>
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default Login;
