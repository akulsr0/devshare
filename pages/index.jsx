import Head from 'next/head';
import BlackButton from '../components/BlackButton';
import Header from '../components/Header';
import CategoriesView from '../components/CategoriesView';

const Index = () => {
  return (
    <div>
      <Head>
        <title>DevShare</title>
      </Head>
      <div className='top-content'>
        <Header />
        <div className='top-content-div'>
          <h1 style={{ fontWeight: 800, textAlign: 'center' }}>
            All in one place to showcase <br /> your projects.
          </h1>
          <h5
            style={{
              fontWeight: 400,
              textAlign: 'center',
              marginTop: 10,
              marginBottom: 26,
            }}
          >
            Build and host your projects and share them here <br /> with the
            developer community to get the perfect audience.
          </h5>
          <BlackButton title='Get Started'></BlackButton>
          <img
            src='https://assets-ouch.icons8.com/download/301/f5eb9da0-37ec-451c-b83e-5c3754e96414.svg?filename=clip-programming.svg'
            className='feature-image'
            alt=''
          />
        </div>
      </div>
      <br />
      <CategoriesView />
    </div>
  );
};

export default Index;
