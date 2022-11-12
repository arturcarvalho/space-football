
export interface Team {
    team_name: string;
    common_name: string;
    slug: string;
    wins: number;
    wins_home: number;
    wins_away: number;
    draws: number;
    losses: number;
    league_position: number;
    top_players: Player[]
}

export interface Player {
    full_name: string;
    age: number;
    position: string;    
    goals_overall: number;
}