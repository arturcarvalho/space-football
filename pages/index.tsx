import Head from "next/head";
import teams from "../teams.json";
import TeamsTable from "../components/TeamsTable";

export default function Home() {
  console.log(teams);

  return (
    <div className="flex flex-col h-full">
      <Head>
        <title>Space Football</title>
        <meta name="description" content="Space Football, but on Earth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-1">
        <nav className="bg-blue-300 text-center p-4 text-2xl font-serif uppercase">
          Space Football
        </nav>

        <TeamsTable teams={teams} />
      </main>

      <footer className="bg-red-300 flex-2 text-center p-4">
        Built by Artur
      </footer>
    </div>
  );
}
