import React from 'react'
import Button from '@material-ui/core/Button'
import fs from 'fs'
import jsonfile from'jsonfile';


export default function JsonButton(props) {
    const { rows } = props;
    
    var file = 'data.json';
    var obj = rows;

    function createJson() {
        console.log("clicked");
        
        

        console.log("passed");
    }
    

    return (
        <>
            <div>JsonButton div</div>
            <Button variant="contained" color="primary" size="large" >
                Name{createJson()}
            </Button>
            
        </>
    )
}