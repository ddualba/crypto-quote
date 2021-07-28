import axios from 'axios';

function checkForDuplicates(array) {
  return new Set(array).size !== array.length;
}

const getPrices = (search, setCoins) => {
  // validate input and fetch data if valid
  if (search.length === 0) {
    alert('enter something in search field'); // [ ] replace with show message
    return;
  }
  if (/\s/.test(search)) {
    alert('Please remove any spaces from search field'); // [ ] replace with show message
    return;
  }
  // check for duplicates
  if (checkForDuplicates(search.split(','))) {
    alert('Remove duplicates from search string');
    return;
  }

  fetchPrices(search, setCoins);
};

const fetchPrices = async (search, setCoins) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // const symbolList =
  //   'BTC,ETH,ADA,BNB,THETA,VET,VTHO,DOT,SOL,MATIC,LINK,ONE,ENJ,BEPRO,VRA,SAFEMOON,HNT';
  const symbolList = search.toUpperCase();

  const formData = {
    symbols: symbolList
  };

  try {
    const res = await axios.post(`/coins`, formData, config);

    const coins = res.data.data;
    const coinData = [];

    let i = 1;
    for (let symbol of symbolList.split(',')) {
      coinData.push({
        id: i,
        symbol: coins[symbol].symbol,
        name: coins[symbol].name,
        price: coins[symbol].quote.USD.price.toFixed(8)
      });
      i++;
    }

    setCoins(coinData);
  } catch (err) {
    console.log(
      'There was an error with your search, check your search string is all valid symbols and API key is good.'
    );
    console.log(err);
  }
};

export default getPrices;
