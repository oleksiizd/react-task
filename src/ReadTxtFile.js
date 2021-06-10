import React from 'react'

const ReadTxtFile = ({setMas1}) => {
   const showFile = async (e) => {
      e.preventDefault()
      const reader = new FileReader()
      reader.onload = async (e) => { 
        const text = (e.target.result)
        
        var mas1 = text.split('\r\n');
        var mas2 = [];

        for(let i = 4; i < mas1.length; i++){
        mas1[i-4] = mas1[i].split(' ');
            for(let j = 0; j < mas1.length; j++){
                var fmas = mas1[i-4].filter(function(value, index, arr){ 
                    return value !== "";
                });
                mas1[i-4]=fmas;
                mas2[i]=fmas;
             }
        }
        
        var mas2_2 = mas2.filter(function (el) {
          return el != null;
        });

        const headData = mas2_2.shift();
        headData.push('prov')
        headData.unshift('id');


        let rows = [];
        let obj123 = {};
        
        for (let j = 0; j < mas2_2.length; j++){
          
          let tempValue = mas2_2[j];
          tempValue.unshift(j);
          headData.forEach(function (k, m) {
            obj123[k] = tempValue[m];
          })
         
          rows.push(obj123);
          obj123 = {};
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