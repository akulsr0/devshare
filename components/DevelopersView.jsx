import DevBox from './DevBox';

const DevelopersView = (props) => {
  return (
    <div className='container dev-view'>
      <div className='dev-view-heading'>
        <h5 style={{ flex: 1, fontWeight: 700, cursor: 'pointer' }}>
          Developers
        </h5>
        <h6 style={{ cursor: 'pointer' }}>View all</h6>
      </div>
      <div className='dev-items-view'>
        <DevBox
          link='https://randomuser.me/api/portraits/men/86.jpg'
          first={true}
        />
        <DevBox link='https://randomuser.me/api/portraits/women/45.jpg' />
        <DevBox link='https://randomuser.me/api/portraits/men/23.jpg' />
        <DevBox link='https://randomuser.me/api/portraits/men/40.jpg' />
        <DevBox link='https://randomuser.me/api/portraits/women/6.jpg' />
        <DevBox link='https://randomuser.me/api/portraits/women/32.jpg' />
        <DevBox link='https://randomuser.me/api/portraits/men/26.jpg' />
        <DevBox link='https://randomuser.me/api/portraits/men/21.jpg' />
      </div>
    </div>
  );
};

export default DevelopersView;
