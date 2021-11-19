import Head from 'next/head';
import { Header, Footer } from '../components';
import { client } from '../client';

export default function Rabbits() {
  const { useQuery } = client;
  const { generalSettings } = useQuery();
  const teamMembers = useQuery().teamMembers()?.nodes;

  return (
    <>

      <Head>
        <title>Meet the Team - {generalSettings.title}</title>
      </Head>

      <main className="content content-single">
        <div className="wrap">
          <h2>Team Members</h2>
        </div>
      </main>

      <Footer copyrightHolder={generalSettings.title} />
    </>
  );
}
