import Head from 'next/head';
import { Header, Footer } from '../components';
import { client } from '../client';
import RabbitMember from '../components/rabbitMember';

export default function Rabbit() {
  const { useQuery } = client;
  const { generalSettings } = useQuery();

  const rabbitMembers = useQuery().rabbitMembers()?.nodes;

  return (
    <>
      <Header
        title={generalSettings.title}
        description={generalSettings.description}
      />

      <Head>
        <title>Meet the Rabbits!!!xd - {generalSettings.title}</title>
      </Head>

      <main className="content content-single">
        <div className="wrap">
          <h2>Rabbit Members</h2>

          {rabbitMembers.map((rabbitMember) => (
            <RabbitMember key={rabbitMember.id} rabbitMember={rabbitMember} />
          ))}
        </div>
      </main>

      <Footer copyrightHolder={generalSettings.title} />
    </>
  );
}
