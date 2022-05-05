import { useState } from "react";
import type { NextPage } from "next";
import DataGrid, {
  Editing,
  Column,
  Selection,
  GroupPanel,
  SearchPanel,
  FilterRow,
  HeaderFilter,
  ColumnFixing,
  ColumnChooser,
} from "devextreme-react/data-grid";
import exportation from "../src/constants/exportation";
import { OperationCell } from "../src/components/OperationCell";
import esMessages from "devextreme/localization/messages/es.json";
import { locale, loadMessages, formatDate } from "devextreme/localization";
import { TimeCell } from "../src/components/TimeCell";

const Operations: NextPage = () => {
  loadMessages(esMessages);
  locale("es");

  const [data, setData] = useState(exportation.getData());

  const onRowUpdated = (e: any) => {
    setData([...data].map((i) => (i.ID === e.key ? { ...e.data } : i)));
  };

  return (
    <div>
      {/* {JSON.stringify(data, null, 3)}  */}
      <DataGrid
        id="gridContainerAC"
        keyExpr="ID"
        dataSource={data}
        showBorders={true}
        allowColumnReordering={true}
        allowColumnResizing={true}
        columnAutoWidth={true}
        onRowUpdated={onRowUpdated}
      >
        <FilterRow visible={true} />
        <HeaderFilter visible={true} />
        <Selection mode="single" />
        <ColumnFixing enabled={true} />
        <ColumnChooser enabled={true} mode="select" />

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
        <Column caption="Informacion" alignment="center">
          <Column dataField="OUT" fixed={true} />
          <Column dataField="QQD" fixed={true} />
          <Column
            dataField="agencyName"
            width={130}
            caption="Agencia"
            allowEditing={false}
            fixed={true}
          />
          <Column
            dataField="consigneeName"
            width={160}
            caption="Consignatario"
            allowEditing={false}
            fixed={true}
          />
          <Column dataField="origin" caption="Origen" />
          <Column dataField="destination" caption="Destino" />
          <Column dataField="AWB" />
          <Column dataField="number" caption="Número" />
          <Column dataField="weight" caption="Peso reserva" />
          <Column dataField="m3Booking" caption="m3 Reserva" />
          <Column dataField="bod" caption="Bod" />
          <Column dataField="DV" />
          <Column dataField="transport" caption="Transporte" />
          <Column dataField="remarks" caption="Remarks" />
          <Column dataField="PR" />
          <Column dataField="shipment" caption="Carga" />
          <Column dataField="flight" caption="Vuelo / Doc" />
          <Column
            dataField="hours"
            caption="Hora Docs"
            dataType="datetime"
            format="shortTime"
          />
          {/* <Column dataField="hours" cellRender={TimeCell} /> */}
        </Column>
        <Column caption="Cierres o Docs Recibidos" alignment="center">
          <Column dataField="pieces" caption="Piezas" />
          <Column dataField="netWeight" caption="Peso neto" />
          <Column dataField="volumeWeight" caption="Peso volumne" />
          <Column dataField="m3" />
        </Column>
        <Column caption="Total" cellRender={OperationCell} />
      </DataGrid>
    </div>
  );
};

export default Operations;
