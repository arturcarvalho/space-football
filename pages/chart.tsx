// based on https://wattenberger.com/blog/react-and-d3

import { StackedBarChart } from "../components/StackedBarChart";

const GROUPED_BAR_CHART_DATA: any[] = [
  { label: "Arsenal", values: [18, 14] },
  { label: "Manchester United", values: [17, 13] },
  { label: "Liverpool", values: [12, 9] },
];

export default function Chart() {
  return (
    <div className="px-4">
      <StackedBarChart data={GROUPED_BAR_CHART_DATA} />
    </div>
  );
}
