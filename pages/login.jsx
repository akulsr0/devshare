import { OverlayTrigger, Popover, Button } from 'react-bootstrap';
import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import React, { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import Loading from '../components/Loading';

const Login = () => {
  const { data } = useSWR('/api/auth', fetcher);
  if (data) {
    if (data.user !== null) {
      return Router.push('/');
    }
  }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setLoggingIn] = useState(false);

  const loginUser = (event) => {
    event.preventDefault();
    setLoggingIn(true);
    if (username === '' || password === '') {
      setLoggingIn(false);
      return window.alert('Enter all fields');
    }

    axios
      .post('/api/login', {
        username,
        password,
      })
      .then((res) => {
        if (!res.data.loginSuccess) {
          setLoggingIn(false);
          return window.alert(res.data.msg);
        }
      })
      .catch((err) => {
        setLoggingIn(false);
        console.log(err);
      });
  };
  return (
    <div>
      <Head>
        <title>DevShare: Login</title>
      </Head>
      <div style={{ backgroundColor: '#bfdaff' }}>
        <div className="header container pt-2 pb-1">
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
            <Link href="/register">
              <button className="black-button">Sign Up</button>
            </Link>
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
                    <Link href="/register">
                      <button className="black-button">Sign Up</button>
                    </Link>
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
              <form method="POST">
                <center>
                  <h4 className="extra-bold">User Login</h4>
                </center>
                <div className="form-group">
                  <label htmlFor="username" className="bold">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mt-3">
                  <center>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={loginUser}
                    >
                      Login
                    </button>
                    {isLoggingIn ? (
                      <img src="https://i.imgur.com/RlS6YST.gif" />
                    ) : (
                      <div></div>
                    )}
                  </center>
                </div>
              </form>
              <div className="mt-2">
                <b>
                  Didn't have an account?{' '}
                  <Link href="/register">
                    <strong style={{ cursor: 'pointer' }}>Sign Up</strong>
                  </Link>
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
