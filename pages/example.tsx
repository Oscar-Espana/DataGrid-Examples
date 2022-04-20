import React from "react";
import DataGrid, { Column, MasterDetail } from "devextreme-react/data-grid";
import DetailTemplate from "../src/components/DetailTemplate";
import service from "../src/constants/employees";

const employees = service.getEmployees();

const ExamplePage = () => {
  return (
    <DataGrid
      id="grid-container"
      dataSource={employees}
      keyExpr="ID"
      showBorders={true}
    >
      <Column dataField="agencyName" caption="Agencia" />
      <Column dataField="consigneeName" caption="Consignatario" />
      <Column dataField="product" caption="Producto" />
      <Column dataField="day" caption="Dia" />
      <MasterDetail enabled={true} component={DetailTemplate} />
    </DataGrid>
  );
};

export default ExamplePage;
