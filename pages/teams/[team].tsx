import { useRouter } from "next/router";
import teams from "../../teams.json";
import { Team } from "../../types";
const TeamPage = () => {
  const router = useRouter();

  const t = (teams as Team[]).find(t => t.slug === router.query.team);

  return <pre>Team: {JSON.stringify(t, null, 2)}</pre>;
};

export default TeamPage;
