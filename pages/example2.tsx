import { useState } from "react";
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
  FilterRow,
  HeaderFilter,
  ColumnFixing,
} from "devextreme-react/data-grid";
import { agencyConsignees } from "../src/constants/agencyConsignees";
import { ContextMenuCell } from "../src/components/ContextMenuCell";
import esMessages from "devextreme/localization/messages/es.json";
import { locale, loadMessages } from "devextreme/localization";

const Home: NextPage = () => {
  loadMessages(esMessages);
  locale("es");

  const [data, setData] = useState(agencyConsignees);

  const onRowUpdated = (e: any) => {
    setData([...data].map((i) => (i.id === e.key ? { ...e.data } : i)));
  };

  const onHandleContextMenuPreparing = (e: any) => {
    let items = [];
    const field: string = e.column.dataField;
    const fields: string[] = field.split(".");

    if (fields.length > 1 && e.row.rowType === "data") {
      items.push(
        {
          text: "Kilos añadidos (amarillo)",
          onItemClick: () => {
            e.row.data[fields[0]].tag = "added";
            setData([...data].map((i) => (i.id === e.key ? { ...e.data } : i)));
          },
        },
        {
          text: "Kilos eliminados (verde)",
          onItemClick: () => {
            e.row.data[fields[0]].tag = "deleted";
            setData([...data].map((i) => (i.id === e.key ? { ...e.data } : i)));
          },
        },
        {
          text: "Alerta: cancelación (rojo)",
          onItemClick: () => {
            e.row.data[fields[0]].tag = "cancelation";
            setData([...data].map((i) => (i.id === e.key ? { ...e.data } : i)));
          },
        }
      );
    }

    e.items = items;
  };

  const renderTitleHeader = (data: any) => {
    return <p style={{ fontWeight: "bold" }}>{data.column.caption}</p>;
  };

  return (
    <div>
      {/* {JSON.stringify(data, null, 3)}  */}
      <DataGrid
        id="gridContainerAC"
        keyExpr="id"
        dataSource={data}
        showBorders={true}
        allowColumnReordering={true}
        allowColumnResizing={true}
        columnAutoWidth={true}
        onRowUpdated={onRowUpdated}
        // onContextMenuPreparing={onHandleContextMenuPreparing}
      >
        <FilterRow visible={true} />
        <HeaderFilter visible={true} />
        <Selection mode="single" />
        <ColumnFixing enabled={true} />
        <Editing
          mode="batch"
          allowUpdating={true}
          allowAdding={false}
          allowDeleting={false}
          selectTextOnEditStart={true}
          startEditAction="click"
        />
        <GroupPanel visible={true} />
        <SearchPanel visible={true} placeholder="Buscar " />
        <Column dataField="id" caption="id" allowEditing={false} fixed={true} />
        <Column
          dataField="agencyName"
          width={130}
          caption="Agencia"
          allowEditing={false}
          fixed={true}
          // headerCellRender={renderTitleHeader}
        />
        <Column
          dataField="consigneeName"
          width={160}
          caption="Consignatario"
          allowEditing={false}
          fixed={true}
        />
        {/* <Column dataField="edit.valueKg" width={160} caption="Editable" /> */}
        <Column
          width={160}
          dataField="edit.valueKg"
          caption="Editable"
          cellRender={ContextMenuCell}
        />
        <Column
          width={160}
          dataField="close.valueKg"
          caption="Cierre"
          cellRender={ContextMenuCell}
        />
        <Column
          width={160}
          dataField="structural.valueKg"
          caption="Estructura"
          cellRender={ContextMenuCell}
        />
        <Column
          width={160}
          dataField="booking.valueKg"
          caption="Reserva"
          cellRender={ContextMenuCell}
        />
        <Column
          dataField="agencyName"
          caption="Agencia"
          groupIndex={1}
          fixed={true}
        />
        <Column dataField="day" caption="Dia" groupIndex={0} fixed={true} />

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
