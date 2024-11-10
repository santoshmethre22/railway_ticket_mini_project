

export async function path1(source, destination, setQueryResult, setLoading) {
  if (source === "ARMUGANERI" && destination === "UDAGAMANDALAM") {
    const filteredTrainData = [
      {
        TrainNo: 6106,
        TrainName: 'TCN -MS EXPRESS',
        SEQ: 13,
        StationCode: 'TCN',
        StationName: 'TCN',
        Arrivaltime: '21:38:00',
        DepartureTime: '21:40:00',
        Distance: 104,
        SourceStation: 'ANY',
        SourceStationName: 'ARMUGANERI',
        DestinationStation: 'MDU',
        DestinationStationName: 'MADURAI'
      },
      {
        TrainNo: 16235,
        TrainName: 'TN-MY-EXPRESS',
        SEQ: 14,
        StationCode: 'TN',
        StationName: 'TUTICORIN',
        Arrivaltime: '1:20:00',
        DepartureTime: '1:30:00',
        Distance: 131,
        SourceStation: 'MDU',
        SourceStationName: 'MADURAI',
        DestinationStation: 'ED',
        DestinationStationName: 'ERODE'
      },
      {
        TrainNo: 11013,
        TrainName: 'ED-CBE PASSR',
        SEQ: 1,
        StationCode: 'ED',
        StationName: 'ERODE JN',
        Arrivaltime: '17:38:00',
        DepartureTime: '17:40:00',
        Distance: 189,
        SourceStation: 'ED',
        SourceStationName: 'ERODE',
        DestinationStation: 'CBE',
        DestinationStationName: 'COIMBATORE'
      },
      {
        TrainNo: 11013,
        TrainName: 'CBE- MTP-EXPRESS',
        SEQ: 1,
        StationCode: 'CBE',
        StationName: 'COIMBATORE',
        Arrivaltime: '17:38:00',
        DepartureTime: '17:40:00',
        Distance: 189,
        SourceStation: 'CBE',
        SourceStationName: 'COIMBATORE',
        DestinationStation: 'MTP',
        DestinationStationName: 'METUPALAYAM'
      },
      {
        TrainNo: 6136,
        TrainName: 'MTP-OOTY-EXPRESS',
        SEQ: 6,
        StationCode: 'MTP',
        StationName: 'METUPALAYAM',
        Arrivaltime: '12:30:00PM',
        DepartureTime: 'ENDS',
        Distance: 207,
        SourceStation: 'MTP',
        SourceStationName: 'METUPALAYAM',
        DestinationStation: 'UAM',
        DestinationStationName: 'UDAGAMANDALAM'
      }
    ];

    setQueryResult(filteredTrainData);
  } 
  else if (source === "ARMUGANERI" && destination === "COIMBATORE") {
    const filteredTrainData = [
        {
            TrainNo: 6106,
            TrainName: 'TCN -MS EXPRESS',
            SEQ: 13,
            StationCode: 'TCN',
            StationName: 'TCN',
            Arrivaltime: '21:38:00',
            DepartureTime: '21:40:00',
            Distance: 104,
            SourceStation: 'ANY',
            SourceStationName: 'ARMUGANERI',
            DestinationStation: 'MDu',
            DestinationStationName: 'MADURAI'
        },
        {
            TrainNo: 16235,
            TrainName: 'TN-MY-EXPRESS',
            SEQ: 14,
            StationCode: 'TN',
            StationName: 'TUTICORIN',
            Arrivaltime: '1:20:00',
            DepartureTime: '1:30:00',
            Distance: 131,
            SourceStation: 'MDU',
            SourceStationName: 'MADURAI',
            DestinationStation: 'ED',
            DestinationStationName: 'ERODE JN'
        },
        {
            TrainNo: 11013,
            TrainName: 'ED-CBE PASSR',
            SEQ: 1,
            StationCode: 'ED',
            StationName: 'ERODE JN',
            Arrivaltime: '17:38:00',
            DepartureTime: '17:40:00',
            Distance: 189,
            SourceStation: 'ED',
            SourceStationName: 'ERODE',
            DestinationStation: 'CBE',
            DestinationStationName: 'COIMBATORE'
        }
    ];
    setQueryResult(filteredTrainData);
} 

else if (source === "ARMUGANERI" && destination === "ERODE") {
  const filteredTrainData = [
      {
          TrainNo: 6106,
          TrainName: 'TCN -MS EXPRESS',
          SEQ: 13,
          StationCode: 'TCN',
          StationName: 'TCN',
          Arrivaltime: '21:38:00',
          DepartureTime: '21:40:00',
          Distance: 104,
          SourceStation: 'ANY',
          SourceStationName: 'ARMUGANERI',
          DestinationStation: 'MDU',
          DestinationStationName: 'MADURAI'
      },
      {
          TrainNo: 16235,
          TrainName: 'TN-MY-EXPRESS',
          SEQ: 14,
          StationCode: 'TN',
          StationName: 'TUTICORIN',
          Arrivaltime: '1:20:00',
          DepartureTime: '1:30:00',
          Distance: 131,
          SourceStation: 'MDU',
          SourceStationName: 'MADURAI',
          DestinationStation: 'ED',
          DestinationStationName: 'ERODE JN'
      }
  ];
  setQueryResult(filteredTrainData);
}


  
  else {
    // Fetch data from database based on source and destination
    await fetchTrainDataFromDatabase(source, destination, setQueryResult, setLoading);
  }
}



async function fetchTrainDataFromDatabase(source, destination) {
  const apiUrl = `/api/v1/analytics/train-ctrl?SourceStationName=${source}&DestinationStationName=${destination}`;

}