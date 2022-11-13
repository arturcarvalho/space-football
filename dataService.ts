import teams from "./teams.json";
import { Team } from "./types";

const totalGames = 38;
const homeGames = totalGames / 2;
const awayGames = totalGames / 2;

export function getTeams(): any {
  return teams.map((t: any) => {
    const total_points = t.wins * 3 + t.draws;
    const percent_wins_home = ((t.wins_home / homeGames) * 100).toFixed(1);
    const percent_wins_away = ((t.wins_away / awayGames) * 100).toFixed(1);
    const more_wins_home = percent_wins_home > percent_wins_away;

    return {
      ...t,
      total_points,
      percent_wins_home,
      percent_wins_away,
      more_wins_home,
    };
  });
}
