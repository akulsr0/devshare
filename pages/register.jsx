import { OverlayTrigger, Popover, Button } from 'react-bootstrap';
import Head from 'next/head';

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
          {/* REGISTERATION FORM HERE */}
        </center>
      </div>
    </>
  );
};

export default Register;
