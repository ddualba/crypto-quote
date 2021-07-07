import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    marginBottom: '10px'
  },
  button: {
    margin: '10px'
  }
});

const SearchBar = ({ handleInput, getPrices, search }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FormGroup>
        <TextField
          id='searchField'
          variant='outlined'
          type='text'
          placeholder='BTC,ETH,ADA'
          label='search string'
          onChange={handleInput}
        />
        <Button
          className={classes.button}
          size='large'
          variant='contained'
          color='primary'
          disabled={!search}
          onClick={getPrices}
        >
          Get Prices
        </Button>
      </FormGroup>
    </div>
  );
};

export default SearchBar;
