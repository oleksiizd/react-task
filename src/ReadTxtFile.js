import React from 'react'

const ReadTxtFile = ({setMas1}) => {
   const showFile = async (e) => {
      e.preventDefault()
      const reader = new FileReader()
      reader.onload = async (e) => { 
        const text = (e.target.result)
        
        let mas1 = text.split('\r\n');
        let mas2 = [];
        let rows = [];
        let obj = {};

        for(let i = 4; i < mas1.length; i++){
        mas1[i-4] = mas1[i].split(' ');
            
                let fmas = mas1[i-4].filter(function(value, index, arr){ 
                    return value !== "";
                });
                mas2[i] = fmas;
             
        }
        let mas3 = mas2.filter(function (el) {
          return el != null;
        });

        let headData = mas3[0];
        headData.push('prov')
        headData.push('id')
        
        for (let j = 0; j < mas3.length; j++){
          let tempValue = mas3[j];
          headData.forEach(function (k, m) {
            obj[k] = tempValue[m];
          })
          rows.push(obj);
          obj = {};
        }
       
        setMas1(rows)
      };
      reader.readAsText(e.target.files[0])
      
    }
    return (
      <div>
        <input type="file" onChange={(e) => showFile(e)} />
      </div>
    )
  }
  
  export default ReadTxtFile;