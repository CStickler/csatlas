import Head from 'next/head';
import { Header, Footer } from '../components';
import { client } from '../client';
import TeamMember from '../components/rabbitsIndv';

export default function Rabbits() {
  const { useQuery } = client;
  const { generalSettings } = useQuery();

  const rabbitsIndv = useQuery().rabbitsIndv()?.nodes;

  return (
    <>
      <Header
        title={generalSettings.title}
        description={generalSettings.description}
      />

      <Head>
        <title>Meet the Rabbits!! - {generalSettings.title}</title>
      </Head>

      <main className="content content-single">
        <div className="wrap">
          <h2>Team Members</h2>

          {rabbitsIndv.map((rabbitsIndv) => (
            <RabbitsIndv key={rabbitsIndv.id} rabbitsIndv={rabbitsIndv} />
          ))}
        </div>
      </main>

      <Footer copyrightHolder={generalSettings.title} />
    </>
  );
}
