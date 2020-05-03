import CategoryBox from './CategoryBox';
const CategoriesView = () => {
  return (
    <div className='container categories-view'>
      <div className='categories-view-heading'>
        <h5 style={{ flex: 1, fontWeight: 700, cursor: 'pointer' }}>
          Categories
        </h5>
        <h6 style={{ cursor: 'pointer' }}>View all</h6>
      </div>
      <div className='categories-items-view'>
        <CategoryBox
          link='https://img.icons8.com/metro/40/000000/android-os.png'
          name='Android'
          first={true}
        />
        <CategoryBox
          link='https://img.icons8.com/ios-filled/40/000000/react-native.png'
          name='React'
        />
        <CategoryBox
          link='https://img.icons8.com/ios-filled/40/000000/angularjs.png'
          name='Angular'
        />
        <CategoryBox
          link='https://img.icons8.com/windows/40/000000/vuejs.png'
          name='Vue'
        />
        <CategoryBox
          link='https://img.icons8.com/windows/40/000000/django.png'
          name='Django'
        />
        <CategoryBox
          link='https://img.icons8.com/windows/40/000000/nodejs.png'
          name='Node.js'
        />
        <CategoryBox
          link='https://img.icons8.com/material-sharp/40/000000/typescript.png'
          name='Typescript'
        />
        <CategoryBox
          link='https://img.icons8.com/material-sharp/40/000000/flutter.png'
          name='Flutter'
        />
      </div>
    </div>
  );
};

export default CategoriesView;
