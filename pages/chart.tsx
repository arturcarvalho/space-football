// based on https://wattenberger.com/blog/react-and-d3

import { StackedBarChart } from "../components/StackedBarChart";
import { getTeams } from "../dataService";

const GROUPED_BAR_CHART_DATA: any[] = [
  { label: "Arsenal", values: [18, 14] },
  { label: "Manchester United", values: [17, 13] },
  { label: "Liverpool", values: [12, 9] },
];

export default function Chart() {
  const stackedChartData = getTeams().map((t: any) => {
    return {
      label: t.team_name,
      values: [t.wins_home, t.wins_away]
    };
  });
  return (
    <div className="px-4">
      <StackedBarChart data={stackedChartData} />
    </div>
  );
}
