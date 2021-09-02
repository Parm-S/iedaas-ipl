

    fetch('https://ipl-t20.herokuapp.com/teams',{
       
        headers:{
            Accept :'application/json',
            'Access-Control-Allow-Origin': '*'

        }
    })
    .then((response)=>{
         return response.json();
    }).then((data)=>{
        const[csk,dc,pk,kkr,mi,rr,rcb,srh]=data;
        console.log(csk);
        
    }).catch((error)=>{console.log(error);});
