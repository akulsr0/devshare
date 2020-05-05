import { OverlayTrigger, Popover, Button } from 'react-bootstrap';
import Link from 'next/link';
import axios from 'axios';
import Router from 'next/router';

const DashboardHeader = ({ user }) => {
  const logout = (event) => {
    event.preventDefault();
    axios
      .post('/api/logout')
      .then((res) => {
        Router.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="header container pt-1">
      <div className="header-title-div m-0" style={{ flex: 1 }}>
        <Link href="/">
          <h2 style={{ fontWeight: 800 }}>DevShare</h2>
        </Link>
      </div>
      <div className="login-header-div">
        <OverlayTrigger
          trigger="click"
          key="bottom"
          placement="bottom"
          overlay={
            <Popover id={`popover-positioned-bottom`}>
              <Popover.Content>
                {/* UserOptions */}
                <img
                  src="https://github.com/akulsr0.png?size=50"
                  alt=""
                  style={{ borderRadius: '50%' }}
                />
                <h6 style={{ fontWeight: 700, marginTop: 6 }}>{user.name}</h6>
                <h6 style={{ fontWeight: 300 }}>My Projects</h6>
                <h6 style={{ fontWeight: 300 }}>Categories</h6>
                <h6 style={{ fontWeight: 300 }}>Developers</h6>
                <button className="black-button mt-2" onClick={logout}>
                  Logout
                </button>
              </Popover.Content>
            </Popover>
          }
        >
          <Button variant="none" className="m-0 p-0 mb-2">
            <img
              src={`https://github.com/${user.username}.png?size=400`}
              alt=""
              style={{ borderRadius: '50%', width: 30 }}
            />
            <strong className="ml-2">{user.username + ' ▼'}</strong>
          </Button>
        </OverlayTrigger>
      </div>
      <div className="menu-div">
        <OverlayTrigger
          trigger="click"
          key="bottom"
          placement="bottom"
          className="menu-content"
          overlay={
            <Popover className="menu-content" id={`popover-positioned-bottom`}>
              <Popover.Content className="menu-content ">
                {/* UserOptions */}
                <img
                  src="https://github.com/akulsr0.png?size=400"
                  alt=""
                  style={{ borderRadius: '50%', width: 30 }}
                />
                <h6 style={{ fontWeight: 700, marginTop: 6 }}>{user.name}</h6>
                <h6 style={{ fontWeight: 300 }}>My Projects</h6>
                <h6 style={{ fontWeight: 300 }}>Categories</h6>
                <h6 style={{ fontWeight: 300 }}>Developers</h6>
                <h6 style={{ fontWeight: 300 }}>About Us</h6>
                <h6 style={{ fontWeight: 300, marginBottom: 12 }}>
                  Contact Us
                </h6>
                <button className="black-button" onClick={logout}>
                  Logout
                </button>
              </Popover.Content>
            </Popover>
          }
        >
          <Button variant="none" className="m-0 p-0 mb-2">
            <img
              src={`https://github.com/${user.username}.png?size=400`}
              alt=""
              style={{ borderRadius: '50%', width: 30 }}
            />
            <strong className="ml-2">{user.username + ' ▼'}</strong>
          </Button>
        </OverlayTrigger>
      </div>
    </div>
  );
};

export default DashboardHeader;
