import Head from 'next/head';
import BlackButton from '../components/BlackButton';
import Header from '../components/Header';
import CategoriesView from '../components/CategoriesView';

const Index = () => {
  return (
    <div>
      <Head>
        <title>DevShare</title>
        <script
          src='https://code.jquery.com/jquery-3.4.1.slim.min.js'
          integrity='sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n'
          crossorigin='anonymous'
        ></script>
        <script
          src='https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js'
          integrity='sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo'
          crossorigin='anonymous'
        ></script>
        <script
          src='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js'
          integrity='sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6'
          crossorigin='anonymous'
        ></script>
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
