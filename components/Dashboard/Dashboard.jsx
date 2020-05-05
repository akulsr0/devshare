import DashboardHeader from './DashboardHeader';
import Head from 'next/head';
const Dashboard = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.user.name}</title>
      </Head>
      <div style={{ backgroundColor: '#bfdaff' }}>
        <DashboardHeader user={data.user} />
      </div>
    </>
  );
};

export default Dashboard;
