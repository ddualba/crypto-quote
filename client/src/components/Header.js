import React from 'react';
import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';

const Header = () => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '10px' }}>
      <Typography variant='h2'>Crypto Quote</Typography>
      <Typography variant='h5'>Current prices of multiple coins</Typography>
      <Typography variant='subtitle1'>Powered by CoinMarketCap API</Typography>
    </div>
  );
};

export default Header;
