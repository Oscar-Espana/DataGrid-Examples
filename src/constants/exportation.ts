const tasks = [
  {
    ID: 1,
    OUT: false,
    QQD: false,
    agencyName: "LAM 1",
    agencyId: "24b12203-5b19-4a55-ba54-230f9bc4e7ab",
    consigneeId: "2c3c3895-4f17-43d8-9c4e-51adb2cc08ee",
    consigneeName: "Consignatario 1",
    origin: "UIO",
    destination: "MIA",
    AWB: 145,
    number: "145-08239792",
    weight: 2646,
    m3Booking: 20.19,
    bod: "P",
    DV: "MIA",
    transport: "CUARTO VLO",
    remarks: "Si se queda pasa al sig",
    PR: 3,
    shipment: "PEF",
    flight: "UC1400",
    hours: new Date(),
    pieces: 100,
    netWeight: 1234,
    volumeWeight: 543,
    m3: 10,
  },
  {
    ID: 2,
    OUT: true,
    QQD: false,
    agencyName: "LAM 1",
    agencyId: "24b12203-5b19-4a55-ba54-230f9bc4e7ab",
    consigneeId: "123c3895-4f17-43d8-9c4e-51adb2cc08ee",
    consigneeName: "Consignatario 2",
    origin: "UIO",
    destination: "MIA",
    AWB: 145,
    number: "145-08239792",
    weight: 2646,
    m3Booking: 20.19,
    bod: "P",
    DV: "MIA",
    transport: "CUARTO VLO",
    remarks: "Si se queda pasa al sig",
    PR: 3,
    shipment: "PEF",
    flight: "UC1400",
    hours: new Date(),
    pieces: 100,
    netWeight: 1234,
    volumeWeight: 543,
    m3: 10,
  },
  {
    ID: 3,
    OUT: false,
    QQD: true,
    agencyName: "LAM 1",
    agencyId: "24b12203-5b19-4a55-ba54-230f9bc4e7ab",
    consigneeId: "443e-4f17-43d8-9c4e-51adb2cc08ee",
    consigneeName: "Consignatario 3",
    origin: "UIO",
    destination: "MIA",
    AWB: 145,
    number: "145-08239792",
    weight: 2646,
    m3Booking: 20.19,
    bod: "P",
    DV: "MIA",
    transport: "CUARTO VLO",
    remarks: "Si se queda pasa al sig",
    PR: 3,
    shipment: "PEF",
    flight: "UC1400",
    hours: new Date(),
    pieces: 100,
    netWeight: 1234,
    volumeWeight: 543,
    m3: 10,
  },
  {
    ID: 4,
    OUT: false,
    QQD: false,
    agencyName: "AVIANCA",
    agencyId: "13412203-5b19-4a55-ba54-230f9bc4e7ab",
    consigneeId: "2c3c3895-4f17-43d8-9c4e-51adb2cc08ee",
    consigneeName: "Consignatario 1",
    origin: "UIO",
    destination: "MIA",
    AWB: 145,
    number: "145-08239792",
    weight: 2646,
    m3Booking: 20.19,
    bod: "P",
    DV: "MIA",
    transport: "CUARTO VLO",
    remarks: "Si se queda pasa al sig",
    PR: 3,
    shipment: "PEF",
    flight: "UC1400",
    hours: new Date(),
    pieces: 100,
    netWeight: 1234,
    volumeWeight: 543,
    m3: 10,
  },
  {
    ID: 5,
    OUT: false,
    QQD: false,
    agencyName: "AVIANCA",
    agencyId: "13412203-5b19-4a55-ba54-230f9bc4e7ab",
    consigneeId: "234D895-4f17-43d8-9c4e-51adb2cc08ee",
    consigneeName: "Consignatario 2",
    origin: "UIO",
    destination: "MIA",
    AWB: 145,
    number: "145-08239792",
    weight: 2646,
    m3Booking: 20.19,
    bod: "P",
    DV: "MIA",
    transport: "CUARTO VLO",
    remarks: "Si se queda pasa al sig",
    PR: 3,
    shipment: "PEF",
    flight: "UC1400",
    hours: new Date(),
    pieces: 100,
    netWeight: 1234,
    volumeWeight: 543,
    m3: 10,
  },
  {
    ID: 6,
    OUT: false,
    QQD: false,
    agencyName: "LAM 1",
    agencyId: "24b12203-5b19-4a55-ba54-230f9bc4e7ab",
    consigneeId: "6U9W33-4f17-43d8-9c4e-51adb2cc08ee",
    consigneeName: "Consignatario 3",
    origin: "UIO",
    destination: "MIA",
    AWB: 145,
    number: "145-08239792",
    weight: 2646,
    m3Booking: 20.19,
    bod: "P",
    DV: "MIA",
    transport: "CUARTO VLO",
    remarks: "Si se queda pasa al sig",
    PR: 3,
    shipment: "PEF",
    flight: "UC1400",
    hours: new Date(),
    pieces: 100,
    netWeight: 1234,
    volumeWeight: 543,
    m3: 10,
  },
  {
    ID: 7,
    OUT: false,
    QQD: false,
    agencyName: "LATAM",
    agencyId: "47820D-5b19-4a55-ba54-230f9bc4e7ab",
    consigneeId: "s6w890xx-4f17-43d8-9c4e-51adb2cc08ee",
    consigneeName: "Consignee 1",
    origin: "UIO",
    destination: "MIA",
    AWB: 145,
    number: "145-08239792",
    weight: 2646,
    m3Booking: 20.19,
    bod: "P",
    DV: "MIA",
    transport: "CUARTO VLO",
    remarks: "Si se queda pasa al sig",
    PR: 3,
    shipment: "PEF",
    flight: "UC1400",
    hours: new Date(),
    pieces: 100,
    netWeight: 1234,
    volumeWeight: 543,
    m3: 10,
  },
];

export default {
  getData() {
    return tasks;
  },
};
