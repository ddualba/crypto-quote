import React from 'react';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport
} from '@material-ui/data-grid';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const PricesGrid = ({ coins }) => {
  // material-ui grid - columns | default width of 100px if not declared
  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'symbol',
      headerName: 'Symbol',
      flex: 1,
      description: 'CoinMarketCap slug from search input'
    },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'price', headerName: 'Price', type: 'number', flex: 1 }
  ];

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rowHeight={25}
        rows={coins}
        columns={columns}
        components={{
          Toolbar: CustomToolbar
        }}
      />
    </div>
  );
};

export default PricesGrid;
