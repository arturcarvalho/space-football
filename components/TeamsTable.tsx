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
  const link = `teams/${props.data?.slug}` ?? "/";

  return (
    <span>
      <Link href={link}>{props.value}</Link>
    </span>
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
      width: 100,
    },
    {
      field: "wins_home",
      sortable: true,
      headerName: "Wins at home",
      type: "numericColumn",
      width: 150,
    },
    {
      field: "wins_away",
      sortable: true,
      headerName: "Wins away",
      type: "numericColumn",
      width: 150,
    },
    {
      field: "draws",
      sortable: true,
      headerName: "Draws",
      type: "numericColumn",
      width: 100,
    },
    {
      field: "losses",
      sortable: true,
      headerName: "Losses",
      type: "numericColumn",
      width: 100,
    },
    {
      field: "league_position",
      sortable: true,
      headerName: "Final Position",
      type: "numericColumn",
      width: 150,
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
