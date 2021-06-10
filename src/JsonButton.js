import React from 'react'
import Button from '@material-ui/core/Button'
import fs from 'fs'
import jsonfile from'jsonfile';


export default function JsonButton(props) {
    const { rows } = props;
    
    function createJson() {
        
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