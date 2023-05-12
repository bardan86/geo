



    // console.log(response.body)

    //const data1 = JSON.parse (response.body) // as we use request packge from npm we can do this ( json : true )
    

    // console.log(data1)
    // console.log(response.body.location.name)
    // // console.log(data1.current.condition.text)
    // console.log(response.body.current.condition.text)

    const request = require("request")

    const forecast = (longitude ,Latitude , callback ) =>{

        
const url = "https://api.weatherapi.com/v1/current.json?key=d4b955fc90884714b6c125238230905&q=" + longitude +"," + Latitude
request ({url , json : true }, (error , response) =>{

    if (error){
        callback("Unable to connect whther services" , undefined)
    }else if (response.body.error){
        callback(response.body.error.message , undefined)
    }else {

        callback(undefined , response.body.location.name + " weather it's " + response.body.current.condition.text 
        + " and temp is " +response.body.current.temp_c + " country : " +response.body.location.country )
        // console.log(response.body.location.name)
        // console.log(response.body.current.condition.text)


    }

})
}


module.exports=forecast