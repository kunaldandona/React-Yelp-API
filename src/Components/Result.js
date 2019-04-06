import React from 'react';
import Paper from '@material-ui/core/Paper';
import '../App.css'

const Result = (props) => {
  const data = props.result;
    return (
        <div>
           
    {data.map((value, index) =>
    <Paper>
        <li className="StockListItem" key={index}>
        <img src={value.image_url} style={{width: '200px', height: '200px'}}/>
        <div className="StockListItem_Symbol"><span>Name:</span>{value.name}</div>
        <div className="StockListItem_Symbol"><span>Open:</span>{value.is_closed}</div>
        <div className="StockListItem_Symbol"><span>Price:</span>{value.price}</div>
        <div className="StockListItem_Symbol"><span>No of Reviews:</span>{value.review_count}</div>
        <div className="StockListItem_Symbol"><span>Rating:</span>{value.rating}</div>
        <div className="StockListItem_Symbol"><span>Address:</span>{value.location.address1}</div>
        <div className="StockListItem_Symbol"><span>Phone:</span>{value.phone}</div>
        <div className="StockListItem_Symbol"><span>Yelp link:</span>{value.url}</div>
            
        </li> 
    </Paper>
    )}
           
        </div> 
      )
    }

export default Result;