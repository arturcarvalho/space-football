import teams from "./teams.json";
import { Team } from "./types";

const totalGames = 38;
const homeGames = totalGames / 2;
const awayGames = totalGames / 2;

export function getTeams(): Team[] {
  const result = teams.map((t: any) => {
    const {
      team_name,
      common_name,
      slug,
      wins,
      wins_home,
      wins_away,
      draws,
      losses,
      league_position,
    } = t;
    const total_points = t.wins * 3 + t.draws;
    const percent_wins_home = ((t.wins_home / homeGames) * 100).toFixed(1);
    const percent_wins_away = ((t.wins_away / awayGames) * 100).toFixed(1);
    const more_wins_home = percent_wins_home > percent_wins_away;

    return {
      team_name,
      common_name,
      slug,
      wins,
      wins_home,
      wins_away,
      draws,
      losses,
      league_position,
      total_points,
      percent_wins_home,
      percent_wins_away,
      more_wins_home,
    };
  });

  return result as Team[];
}
