import { OverlayTrigger, Popover, Button } from 'react-bootstrap';
import { useState } from 'react';
import Head from 'next/head';
import Country from '../utils/countryArray';
import Link from 'next/link';

import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import axios from 'axios';
import Router from 'next/router';

import Loading from '../components/Loading';

const Register = (props) => {
  const { data } = useSWR('/api/auth', fetcher);

  if (data) {
    if (data.user !== null) {
      return Router.replace('/');
    }
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
    const [preferredLanguage, setPreferredLanguage] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);

    const registerUser = (event) => {
      event.preventDefault();
      setIsRegistering(true);

      if (name === '') {
        setIsRegistering(false);
        return window.alert('Enter Name');
      }
      if (username === '') {
        setIsRegistering(false);
        return window.alert('Enter Username');
      }
      if (bio === '') {
        setIsRegistering(false);
        return window.alert('Enter Bio');
      }
      if (email === '') {
        setIsRegistering(false);
        return window.alert('Enter Email');
      }
      if (gender === '') {
        setIsRegistering(false);
        return window.alert('Enter Gender');
      }
      if (country === '') {
        setIsRegistering(false);
        return window.alert('Enter Country');
      }

      if (preferredLanguage === '') {
        setIsRegistering(false);
        return window.alert('Select a Preferred Language');
      }

      if (password !== confirmPassword) {
        setIsRegistering(false);
        return window.alert("Password don't match");
      } else {
        if (password.length < 8) {
          setIsRegistering(false);
          return window.alert('Password must be of 8 characters or more');
        }
      }

      axios
        .post('/api/register', {
          name,
          username,
          email,
          bio,
          gender,
          country,
          preferredLanguage,
          password,
          confirmPassword,
        })
        .then(({ data }) => {
          setIsRegistering(false);
          if (data.success) {
            return window.alert('User Registered');
          }
          if (data.userExist) {
            return window.alert('User already exists');
          }
        })
        .catch((err) => {
          setIsRegistering(false);
          console.log(err);
        });
    };

    return (
      <>
        <Head>
          <title>DevShare: Registeration</title>
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
              <Link href="/login">
                <button className="black-button">Login</button>
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
                      <Link href="/login">
                        <button className="black-button">Login</button>
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
                    <h4 className="extra-bold">User Registeration</h4>
                  </center>
                  <div className="form-group">
                    <label htmlFor="name" className="bold">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username" className="bold">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      placeholder="Github Username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="bio" className="bold">
                      Bio
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="bio"
                      name="bio"
                      placeholder="Bio"
                      onChange={(e) => setBio(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="bold">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="name@example.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <label className="bold">Gender</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                      value="Male"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      value="Female"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>

                  <div className="form-group mt-2">
                    <label htmlFor="country" className="bold">
                      Country
                    </label>
                    <select
                      className="form-control"
                      id="country"
                      name="country"
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option value="" defaultChecked>
                        Select
                      </option>
                      {Country.map((country, index) => (
                        <option value={country} key={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="language"
                      className="bold"
                      name="preferredLanguage"
                    >
                      Preferred Language
                    </label>
                    <select
                      className="form-control"
                      id="language"
                      onClick={(e) => setPreferredLanguage(e.target.value)}
                    >
                      <option value="" defaultChecked>
                        Select
                      </option>
                      <option value="Python">Python</option>
                      <option value="Javascript">Javascript</option>
                      <option value="Java">Java</option>
                      <option value="Ruby">Ruby</option>
                      <option value="Golang">Golang</option>
                      <option value="Rust">Rust</option>
                      <option value="Typescript">Typescript</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="bold" name="password">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div
                    className="form-group"
                    className="bold"
                    name="confirmPassword"
                  >
                    <label htmlFor="cnfpassword">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="cnfpassword"
                      placeholder="Password Again"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div className="mt-3">
                    <center>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={registerUser}
                      >
                        Sign Up
                      </button>
                      {isRegistering ? (
                        <img src="https://i.imgur.com/RlS6YST.gif" />
                      ) : (
                        <div></div>
                      )}
                    </center>
                  </div>
                </form>
                <div>
                  <b>
                    Already have an account?{' '}
                    <Link href="/login">
                      <strong style={{ cursor: 'pointer' }}>Login</strong>
                    </Link>
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <Loading />;
  }
};
export default Register;
