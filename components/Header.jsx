import BlackButton from './BlackButton';
import { OverlayTrigger, Popover, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <div className='header container pt-2'>
      <div className='header-title-div'>
        <h2 style={{ fontWeight: 800 }}>DevShare</h2>
      </div>
      <div className='menu-items px-2'>
        <h6 className='pl-3'>Projects</h6>
        <h6 className='pl-3'>Categories</h6>
        <h6 className='pl-3'>Developers</h6>
        <h6 className='pl-3'>About Us</h6>
        <h6 className='pl-3'>Contact Us</h6>
      </div>
      <div className='login-header-div'>
        <BlackButton title='Login/SignUp'></BlackButton>
      </div>
      <div className='menu-div'>
        <OverlayTrigger
          trigger='click'
          key='bottom'
          placement='bottom'
          className='menu-content'
          overlay={
            <Popover className='menu-content' id={`popover-positioned-bottom`}>
              <Popover.Content className='menu-content '>
                <h6>Projects</h6>
                <h6>Categories</h6>
                <h6>Developers</h6>
                <h6>About Us</h6>
                <h6>Contact Us</h6>
                <BlackButton title='Login/SignUp'></BlackButton>
              </Popover.Content>
            </Popover>
          }
        >
          <Button variant='none'>
            <img
              src='https://img.icons8.com/ios-filled/50/000000/menu.png'
              className='menu-image'
            />
          </Button>
        </OverlayTrigger>
      </div>
    </div>
  );
};

export default Header;
