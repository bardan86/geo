// const request = require("request")
// //const { json } = require("stream/consumers")



// const url = "https://api.weatherapi.com/v1/current.json?key=d4b955fc90884714b6c125238230905&q=germany"

// request ({url , json : true }, (error , response) =>{
//     // console.log(response.body)

//     //const data1 = JSON.parse (response.body) // as we use request packge from npm we can do this ( json : true )
    

//     // console.log(data1)
//     // console.log(response.body.location.name)
//     // // console.log(data1.current.condition.text)
//     // console.log(response.body.current.condition.text)

//     if (error){

//         console.log("error has occured")
//     }else if (response.body.error){
//         console.log(response.body.error.message)
//     }else {
//         console.log(response.body.location.name)
//         console.log(response.body.current.condition.text)


//     }

// })

const request = require("request");

const forecast = require("./weather")



// forecast(29.871903452398 ,26.4941838299718,(error,data) =>
// {
//     console.log("Error" , error)
//     console.log("Data" , data)
// })

// process .argv  string    to send input to terminal by string olny
// yargs :{}                to send input to terminal by object 

const geocode = require("./geoapp")
const country = process.argv[2]
geocode (country, (error,data) =>
{
    console.log("Error  :" , error)
    console.log("Data   :" , data)
if (error){console.log("country not found")}
else {
    forecast(data.Latitude ,data.longitude,(error,data) =>{

    console.log("Error :" , error)
    console.log("Data  :" , data)
    
    })
}
})




