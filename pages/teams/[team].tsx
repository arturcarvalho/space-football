import { useRouter } from "next/router";
import teams from "../../teams.json";
import { Player, Team } from "../../types";

interface Props {
  player: Player;
  position: number;
}

const Player = (props: Props) => {
  const { player, position } = props;
  return (
    <div className="border-t py-4">
      <span className="text-neutral-500 pr-6">#{position}</span>
      <span className="text-sky-800 inline-block w-64">{player.full_name}</span>
      <span className="px-4 text-sky-900">{player.age} years</span>
      <span className="px-4 text-sky-900">{player.position}</span>
      <span className="px-4 text-sky-900">{player.goals_overall} goals</span>
    </div>
  );
};

const Result = (props: { description: string; num: number }) => {
  return (
    <div className="flex flex-col rounded mr-3 py-2 pr-4 w-32 shadow bg-neutral-100">
      <div className="pl-2 uppercase text-sky-800 font-bold">
        {props.description}
      </div>
      <div className="pl-2  text-sky-900">{props.num}</div>
    </div>
  );
};

const TeamPage = () => {
  const router = useRouter();

  const t = (teams as Team[]).find((t) => t.slug === router.query.team) as Team;

  return (
    <div className="px-4">
      <h1 className="text-sky-800 text-4xl pb-2">{t?.team_name}</h1>

      <div className="flex my-4">
        <Result description="Wins" num={t.wins} />
        <Result description="Draws" num={t.draws} />
        <Result description="Losses" num={t.losses} />
      </div>

      <h2 className="text-sky-900 text-2xl pt-8">Top Players</h2>
      <div className="py-6">
        {t?.top_players.map((p, idx) => {
          return <Player key={idx} player={p} position={idx + 1} />;
        })}
      </div>
    </div>
  );
};

export default TeamPage;
