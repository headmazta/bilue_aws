import { HttpClient, HttpException } from '../utils';
import * as constants from '../constants';

export const getWeather = async (payload: any): Promise<Object> => {
  
  let client = new HttpClient('https://api.openweathermap.org/');
  let res = await client.get('https://api.openweathermap.org/data/2.5/weather?zip=' + payload + '&appid=' + constants.API_KEY)
    .then((response) => {
      return {msg: 'success', data: response.data};
    
    })
    .catch((error) => {
      const err:HttpException = error;
      return {msg: 'failed', error: err.message};
      
    });
  
    if(res.msg == 'success')
    {
      let data = res['data'];
      return {
        "lon": data['coord'].lon,
        "lat": data['coord'].lat,
        "main": data['clouds'],
        "description": data['weather'].description,
        "temp": data['main'].temp,
        "feels_like": data['main'].feels_like,
        "temp_min": data['main'].temp_min,
        "temp_max": data['main'].temp_max,
        "pressure": data['main'].pressure,
        "humidity": data['main'].humidity
      };
    }
    else
    {
      return { 'error': true, 'message': res['error']};
    }
};
