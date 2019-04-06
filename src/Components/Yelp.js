import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Search from './Search'
import fetchFunction from '../fetch'

import Result from './Result'


class Yelp extends Component {
    state = {
        result: [],
        term: 'canada',
        location: 'canada',
        sort: 'best_match',
        category: 'education',
        fetch: false,
    };

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        });
        console.log(this.state)
    }

    handleClick = async (e) => {
        e.preventDefault();
        let term = this.state.term;
        let category = this.state.category;
        let location = this.state.location;
        let sort = this.state.sort;

        const data = await fetchFunction(term,category,location,sort)
        let result = data.data.businesses;
        this.setState({result: result, fetch: true})

    }

    render () {
        return (
        <Grid container spacing={24} justify='center'>
            <Grid item xs={10}>
                <Typography variant="title" gutterBottom>
                    Yelp Fusion API
                </Typography>
                <Search onChange={ this.handleChange } onClick={ this.handleClick }/>
                {this.state.fetch && (
                    <Result result={this.state.result}/>
                )}
            </Grid>
        </Grid>
        );
    }     
}

export default Yelp;