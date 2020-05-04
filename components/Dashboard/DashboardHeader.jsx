import BlackButton from '../BlackButton';
import { OverlayTrigger, Popover, Button } from 'react-bootstrap';

const DashboardHeader = (props) => {
  return (
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
      <div className="login-header-div">{/* USER OPTIONS */}</div>
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
                <h6 style={{ fontWeight: 700, marginTop: 6 }}>
                  Akul Srivastava
                </h6>
                <h6 style={{ fontWeight: 300 }}>My Projects</h6>
                <h6 style={{ fontWeight: 300 }}>Categories</h6>
                <h6 style={{ fontWeight: 300 }}>Developers</h6>
                <h6 style={{ fontWeight: 300 }}>About Us</h6>
                <h6 style={{ fontWeight: 300, marginBottom: 12 }}>
                  Contact Us
                </h6>
                <BlackButton title="Logout"></BlackButton>
              </Popover.Content>
            </Popover>
          }
        >
          <Button variant="none" className="m-0 p-0">
            <h5>Akul</h5>
          </Button>
        </OverlayTrigger>
      </div>
    </div>
  );
};

export default DashboardHeader;