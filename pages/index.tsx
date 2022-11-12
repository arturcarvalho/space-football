import teams from "../teams.json";
import TeamsTable from "../components/TeamsTable";

export default function Home() {
  return <TeamsTable teams={teams} />;
}
