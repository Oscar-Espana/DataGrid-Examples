import React, { useState } from "react";
import { formatNumber } from "devextreme/localization";
import DateBox from "devextreme-react/date-box";

function gridCellData(gridData: any) {
  const field: string = gridData.column.dataField;
  const fields: string[] = field.split(".");
  const cell = gridData.data[fields[0]];
  return cell;
}

export const TimeCell = (cellValue: any): React.ReactNode => {
  return <DateBox defaultValue={new Date()} type="time" />;
};
