import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import Head from 'next/head';
import BlackButton from '../components/BlackButton';
import Header from '../components/Header';
import CategoriesView from '../components/CategoriesView';
import DevelopersView from '../components/DevelopersView';
import Dashboard from '../components/Dashboard/Dashboard';
import Loading from '../components/Loading';

const Index = () => {
  const { data } = useSWR('/api/auth', fetcher);

  if (!data) {
    return <Loading />;
  }
  if (data.user !== null) {
    return <Dashboard data={data} />;
  }

  return (
    <div>
      <Head>
        <title>DevShare</title>
      </Head>
      <div className="top-content">
        <Header />
        <div className="top-content-div">
          <div className="top-content-text-div">
            <h1 style={{ fontWeight: 800, textAlign: 'center' }}>
              All in one place to showcase your projects.
            </h1>
            <h5
              style={{
                fontWeight: 400,
                textAlign: 'center',
                marginTop: 10,
                marginBottom: 26,
              }}
            >
              Build and host your projects and share them here with the
              developer community to get the perfect audience.
            </h5>
          </div>
          <BlackButton title="Get Started"></BlackButton>
          <img
            src="https://assets-ouch.icons8.com/download/301/f5eb9da0-37ec-451c-b83e-5c3754e96414.svg?filename=clip-programming.svg"
            className="feature-image"
            alt=""
          />
        </div>
      </div>
      <br />
      <CategoriesView />
      <br />
      <DevelopersView />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Index;
