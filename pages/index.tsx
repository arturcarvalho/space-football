import TeamsTable from "../components/TeamsTable";
import { getTeams } from "../dataService";

export default function Home() {
  return <TeamsTable teams={getTeams()} />;
}
