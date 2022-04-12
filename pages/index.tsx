import type { NextPage } from "next";
import DataGrid, {
  Editing,
  Column,
  Selection,
  Summary,
  GroupItem,
  GroupPanel,
  SearchPanel,
  SortByGroupSummaryInfo,
} from "devextreme-react/data-grid";
import { agencyConsignees } from "../src/constants/agencyConsignees";
import { useState } from "react";

const columns = ["CompanyName", "City", "State", "Phone", "Fax"];

const Home: NextPage = () => {
  const [data, setData] = useState(agencyConsignees);

  const onRowUpdated = (e) => {
    setData([...data].map((i) => (i.id === e.key ? { ...e.data } : i)));
  };

  return (
    <div>
      <h1>Hola Mundo</h1>
      <DataGrid
        id="gridContainerAC"
        keyExpr="id"
        dataSource={data}
        showBorders={true}
        onRowUpdated={onRowUpdated}
      >
        <Selection mode="single" />
        <Editing
          mode="batch"
          allowUpdating={true}
          allowAdding={false}
          allowDeleting={false}
          selectTextOnEditStart={true}
          startEditAction="dblClick"
        />
        <GroupPanel visible={true} />
        <SearchPanel visible={true} placeholder="Buscar " />
        <Column
          dataField="agencyName"
          width={130}
          caption="Agencia"
          allowEditing={false}
        />
        <Column
          dataField="consigneeName"
          width={160}
          caption="Consignatario"
          allowEditing={false}
        />
        <Column dataField="edit.valueKg" width={160} caption="Editable" />
        <Column dataField="close.valueKg" width={160} caption="Cierre" />
        <Column
          dataField="structural.valueKg"
          width={160}
          caption="Estructura"
        />
        <Column dataField="booking.valueKg" width={160} caption="Reserva" />
        <Column dataField="agencyName" caption="Agencia" groupIndex={1} />
        <Column dataField="day" caption="Dia" groupIndex={0} />

        <Summary>
          <GroupItem
            column="agencyName"
            summaryType="count"
            displayFormat="{0} registros"
          />
          <GroupItem
            column="edit.valueKg"
            alignByColumn={true}
            summaryType="sum"
            displayFormat="Total: {0}"
          />
          <GroupItem
            column="close.valueKg"
            alignByColumn={true}
            summaryType="sum"
            displayFormat="Total: {0}"
          />

          <GroupItem
            column="structural.valueKg"
            alignByColumn={true}
            summaryType="sum"
            displayFormat="Total: {0}"
          />
          <GroupItem
            column="booking.valueKg"
            alignByColumn={true}
            summaryType="sum"
            displayFormat="Total: {0}"
          />
        </Summary>
        <SortByGroupSummaryInfo summaryItem="count" />
      </DataGrid>
    </div>
  );
};

export default Home;
