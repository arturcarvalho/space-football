import { useEffect, useState } from "react";
import { Team } from "../types";
import { AgGridReact } from "ag-grid-react";
import Link from "next/link";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ICellRendererParams } from "ag-grid-community";

interface Props {
  teams: Team[];
}

const TeamNameRenderer = (props: ICellRendererParams<Team>) => {
  const link = `team/${props.data?.slug}` ?? "/";

  return (
    <div className="flex">
      <Link className="text-blue-500 font-bold w-full" href={link}>
        {props.value}
      </Link>
    </div>
  );
};

const IconRenderer = (props: ICellRendererParams) => {
  return (
    <div className="mt-2">
      {props.value && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-green-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      )}
      {!props.value && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-red-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
    </div>
  );
};

export default function TeamsTable(props: Props) {
  const [rowData, setRowData] = useState<Team[]>([]);

  useEffect(() => {
    setRowData(props?.teams);
  }, [props.teams]);

  const [columnDefs] = useState<any>([
    {
      field: "team_name",
      sortable: true,
      filter: true,
      sort: "asc",
      headerName: "Team Name",
      width: 250,
      cellRenderer: TeamNameRenderer,
    },
    {
      field: "wins",
      sortable: true,
      headerName: "Wins",
      type: "numericColumn",
      width: 80,
    },
    // {
    //   field: "wins_home",
    //   sortable: true,
    //   headerName: "Wins home",
    //   type: "numericColumn",
    //   width: 120,
    // },
    // {
    //   field: "wins_away",
    //   sortable: true,
    //   headerName: "Wins away",
    //   type: "numericColumn",
    //   width: 120,
    // },
    {
      field: "draws",
      sortable: true,
      headerName: "Draws",
      type: "numericColumn",
      width: 80,
    },
    {
      field: "losses",
      sortable: true,
      headerName: "Losses",
      type: "numericColumn",
      width: 90,
    },
    // {
    //   field: "league_position",
    //   sortable: true,
    //   headerName: "Final Position",
    //   type: "numericColumn",
    //   width: 130,
    // },
    {
      field: "total_points",
      sortable: true,
      headerName: "Total Points",
      type: "numericColumn",
      width: 120,
    },
    {
      field: "percent_wins_home",
      sortable: true,
      headerName: "% wins home",
      type: "numericColumn",
      width: 130,
    },
    {
      field: "percent_wins_away",
      sortable: true,
      headerName: "% wins away",
      type: "numericColumn",
      width: 130,
    },
    {
      field: "more_wins_home",
      sortable: true,
      headerName: "more wins at home than away",
      width: 230,
      cellRenderer: IconRenderer,
    },
  ]);
  return (
    <div className="ag-theme-alpine m-4">
      <AgGridReact
        domLayout="autoHeight"
        rowData={rowData}
        columnDefs={columnDefs}
        animateRows
      />
    </div>
  );
}
