const DevBox = (props) => {
  if (props.first) {
    return (
      <div
        className='dev-box'
        style={{
          background: `url('${props.link}')`,
        }}
      ></div>
    );
  } else {
    return (
      <div
        className='dev-box ml-2'
        style={{
          background: `url('${props.link}')`,
        }}
      ></div>
    );
  }
};

export default DevBox;
