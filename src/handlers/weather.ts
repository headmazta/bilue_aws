import { returnResponse } from "./return";
import { getWeather } from "../services";

export const myhandler = async ({ queryStringParameters }) => {
  // this is my code, this is my destiny\

  try {
    const zip = queryStringParameters.zip;
    let result = await getWeather(zip).then((response) => { return response });
    return returnResponse(200, result);
  }
  catch (error) {
    return returnResponse(500, { message: error.message });
  }
}

export const handler = myhandler;