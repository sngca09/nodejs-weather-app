const request=require('request');

const geocode=(address,callback)=>{
    const  url='https://api.mapbox.com/geocoding/v5/mapbox.places/' +encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYW5ha2hhMTYiLCJhIjoiY2w1b3V6djc3MWhrcjNkbXBoeDRlcTBwaCJ9.c5v_HleJ3_-3VejWolZ5MQ&limit=1'
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('cant connect',undefined);
        }else if(body.features.length===0){
            callback('specify location',undefined)
        }else{
            callback(undefined,{
                latitude:body.features[0].center[1] ,
                longitude:body.features[0].center[0] ,
                location:body.features[0].place_name

            })
        }

    })
}



module.exports=geocode