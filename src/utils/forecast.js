const request=require('request');

const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=d37a033eefd37e24a62dfd6a7fc15af5&query='+latitude+','+longitude+'&units=f'
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('cant connect',undefined)
        }else if(body.error){
            callback('provide value',undefined)
        }else{
            callback(undefined, body.current.weather_descriptions +" its currently "+ body.current.temperature+" degree out But  feels like "+
         body.current["feelslike"]+" degree")
        }
    })
}

module.exports=forecast