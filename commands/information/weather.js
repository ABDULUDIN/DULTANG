module.exports = {
    name: "weather",
    code: `$title[Weather Di $message] 
    $description[
    Lokasi: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;location;]**
    Temperatura: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;temperature;]**
    Humidity: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;humidity;]**
    Wind Speed: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;wind_speed;]**
    Wind display: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;wind_display;]**
    Observation Time: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;observation_time;]**
    ]
    $argsCheck[>1;:x: Pilih negara locacion!]
    $color[76C8C0]`
    }