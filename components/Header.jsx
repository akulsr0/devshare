import BlackButton from './BlackButton';
import { OverlayTrigger, Popover, Button } from 'react-bootstrap';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="header container pt-2 pb-2">
      <div className="header-title-div">
        <Link href="/">
          <h2 style={{ fontWeight: 800, cursor: 'pointer' }}>DevShare</h2>
        </Link>
      </div>
      <div className="menu-items pr-2">
        <h6 className="pl-3" style={{ cursor: 'pointer' }}>
          Projects
        </h6>
        <h6 className="pl-3" style={{ cursor: 'pointer' }}>
          Categories
        </h6>
        <h6 className="pl-3" style={{ cursor: 'pointer' }}>
          Developers
        </h6>
        <h6 className="pl-3" style={{ cursor: 'pointer' }}>
          About Us
        </h6>
        <h6 className="pl-3" style={{ cursor: 'pointer' }}>
          Contact Us
        </h6>
      </div>
      <div className="login-header-div">
        <a href="/login">
          <BlackButton title="Login/SignUp"></BlackButton>
        </a>
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
                <h6 style={{ fontWeight: 300 }}>Projects</h6>
                <h6 style={{ fontWeight: 300 }}>Categories</h6>
                <h6 style={{ fontWeight: 300 }}>Developers</h6>
                <h6 style={{ fontWeight: 300 }}>About Us</h6>
                <h6 style={{ fontWeight: 300, marginBottom: 12 }}>
                  Contact Us
                </h6>
                <a href="/login">
                  <BlackButton title="Login/SignUp"></BlackButton>
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
  );
};

export default Header;
