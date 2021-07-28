const express = require('express');
const router = express.Router();
const axios = require('axios').default;

// const cmc_key = process.env.cmc_test_key;
const cmc_key = process.env.cmc_private_key;

// @route   POST api/coins
// @desc    Get prices for coins in search string
// @access  Public

router.post('/coins', async (req, res) => {
  const symbolString = req.body.symbols;

  try {
    axios.defaults.headers.common['X-CMC_PRO_API_KEY'] = cmc_key;

    const prices = await axios.get(
      // 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
      {
        params: {
          symbol: symbolString
        }
      }
    );
    res.send(prices.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error, check all data submitted is valid');
  }
});

module.exports = router;
