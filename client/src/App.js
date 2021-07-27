import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PricesGrid from './components/PricesGrid';
import getPrices from './components/getPrices';

import Container from '@material-ui/core/Container';

const App = () => {
  const [coins, setCoins] = useState({});
  const [search, setSearch] = useState('');

  const handleInput = event => {
    setSearch(event.target.value);
  };

  return (
    <Container style={{ backgroundColor: '#FFF' }}>
      <Header />

      <SearchBar
        handleInput={handleInput}
        getPrices={() => getPrices(search, setCoins)}
        search={search}
      />

      {Object.keys(coins).length === 0 ? (
        <h3>Initiate new search to show results</h3>
      ) : (
        <PricesGrid coins={coins} />
      )}
    </Container>
  );
};

export default App;
