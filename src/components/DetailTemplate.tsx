import React, { useState } from "react";
import {
  DataGrid,
  Column,
  Selection,
  Editing,
} from "devextreme-react/data-grid";
import ArrayStore from "devextreme/data/array_store";
import DataSource from "devextreme/data/data_source";
import service from "../constants/employees";

const tasks = service.getTasks();

const DetailTemplate = (props: any) => {
  const { agencyName, consigneeName } = props.data.data;

  const [data, setData] = useState(getTasks(props.data.key));
  return (
    <React.Fragment>
      <div className="master-detail-caption">
        {`Agencia ${agencyName} - ${consigneeName}`}
      </div>
      <DataGrid dataSource={data} showBorders={true} columnAutoWidth={true}>
        <Editing
          mode="batch"
          allowUpdating={true}
          allowAdding={true}
          allowDeleting={true}
        />
        <Selection mode="single" />
        <Column dataField="QQD" />
        <Column dataField="via" caption="Vía" />
        <Column dataField="origin" caption="Origen" />
        <Column dataField="destination" caption="Destino" />
        <Column dataField="AWB" dataType="number" />
        <Column dataField="number" caption="Número" />
        <Column dataField="close" caption="Cierre" dataType="number" />
        <Column dataField="transport" caption="Transporte" />
      </DataGrid>
    </React.Fragment>
  );
};

function getTasks(key: any) {
  return new DataSource({
    store: new ArrayStore({
      data: tasks,
      key: "ID",
    }),
    filter: ["agencyConsignee", "=", key],
  });
}

export default DetailTemplate;
