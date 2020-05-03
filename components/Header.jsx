import BlackButton from './BlackButton';

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
        <img
          src='https://img.icons8.com/ios-filled/50/000000/menu.png'
          className='menu-image'
        />
        <div className='menu-content'></div>
      </div>
    </div>
  );
};

export default Header;
