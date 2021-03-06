export class MCurrentWeather{
    // fields
    tempValue: number;
    tempIconLink : string; // mandatory
    otherParamValues : number[]; // mandatory
    // consts
    static readonly paramName = ['maxTemp', 'minTemp', 'humidity', 'windSpeed', 'pressure'];
    static readonly iconLinks = ['./assets/icon-max-temp.png','./assets/icon-min-temp.png','./assets/icon-humidity.png','./assets/icon-wind.png','./assets/icon-pressure.png'];

    constructor (tempValue: number, tempIconLink : string, otherParamValues : number[]){
        this.tempValue = tempValue,
        this.tempIconLink = tempIconLink,
        this.otherParamValues = otherParamValues
    }

    static getDefault():MCurrentWeather{
        return new MCurrentWeather(
            10, //tempValue, metric
            'https://openweathermap.org/img/w/02d.png', // tempIconLink
            [12, 10, 74, 1.51, 880], // otherParamValue, metric
        )
    }
}
