
const request = require("request")

const geocode = (address , callback) =>{

const geourl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
+ address +
'.json?access_token=pk.eyJ1IjoiYmFyZGFuIiwiYSI6ImNsaGlwMmN1czBhNDYzZ216eXdxajVuM2gifQ.90Trc0foBU4ETKInnTwz6Q'

request({url : geourl , json : true} , (error, response) => {
    

    if (error){
       callback ("unable to conect geocode" , undefined)
    }
    else if (response.body.features.length == 0){
        callback("unable to find location" , undefined)
    }
    else if (response.body.message){
        callback(response.body.message , undefined)
    }
    else {

        callback (undefined , {
        longitude : response.body.features[0].center[0],
        Latitude : response.body.features[0].center[1]
        
        } )
    }
    

})
}


module.exports=geocode
