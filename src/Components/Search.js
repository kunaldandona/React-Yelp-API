import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const Search = (props) => {
    return  (
        <div >
            <TextField
                id="standard-search"
                label="Search field"
                type="search"
                margin="normal"
                variant="outlined"
                fullWidth
                style={{margin: '10px'}}
                name="term"
                onChange={props.onChange}
            />

            <TextField
                id="standard-search"
                label="Categories"
                type="search"
                margin="normal"
                variant="outlined"
                fullWidth
                style={{margin: '10px'}}
                name="category"
                onChange={props.onChange}
            />

            <TextField
                id="standard-search"
                label="City/Location"
                type="search"
                margin="normal"
                variant="outlined"
                fullWidth
                style={{margin: '10px'}}
                name="location"
                onChange={props.onChange}
            />
            <InputLabel htmlFor="age-simple">Match Type</InputLabel>
            <Select
            name="sort"
            onChange={props.onChange}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
            fullWidth
            variant="outlined"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>best_match</MenuItem>
            <MenuItem value={20}>rating</MenuItem>
            <MenuItem value={30}>review_count</MenuItem>
            <MenuItem value={40}>distance</MenuItem>
          </Select>
            

            <Button name="search" onClick={props.onClick} style={{width: '30%', margin: '10px', verticalAlign: 'center'}} variant="contained">
                Search Now
            </Button>
        </div>
    );
}

export default Search;