import React, { useState } from "react";
import ContextMenu from "devextreme-react/context-menu";
import notify from "devextreme/ui/notify";
import { formatNumber } from "devextreme/localization";

export const OperationCell = (cellValue: any): React.ReactNode => {
  const data = cellValue.data;
  const response = data.m3Booking + data.weight;

  return <div id="menu">{response}</div>;
};
