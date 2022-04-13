import React, { useState } from "react";
import ContextMenu from "devextreme-react/context-menu";
import notify from "devextreme/ui/notify";
import { formatNumber } from "devextreme/localization";

function gridCellData(gridData) {
  const field: string = gridData.column.dataField;
  const fields: string[] = field.split(".");
  const cell = gridData.data[fields[0]];
  return cell;
}

const getBackgroundColor = (tag: string) => {
  switch (tag) {
    case "added":
      return "#F3F80F";
    case "deleted":
      return "#44D600";
    case "cancelation":
      return "#F44336";
    default:
      return "transparent";
  }
};

export const ContextMenuCell = (cellValue: any): React.ReactNode => {
  const cell = gridCellData(cellValue);

  return (
    <div id="menu" style={{ background: getBackgroundColor(cell.tag) }}>
      {formatNumber(cell.valueKg, {
        type: "currency",
        currency: "USD",
        precision: 2,
      })}
    </div>
  );
};
