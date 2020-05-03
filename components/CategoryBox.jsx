const CategoryBox = (props) => {
  if (props.first) {
    return (
      <div className='category-item'>
        <img src={props.link} />
        <h6 className='mt-4' style={{ fontWeight: 600 }}>
          {props.name}
        </h6>
      </div>
    );
  } else {
    return (
      <div className='category-item ml-4'>
        <img src={props.link} />
        <h6 className='mt-4' style={{ fontWeight: 600 }}>
          {props.name}
        </h6>
      </div>
    );
  }
};

export default CategoryBox;
