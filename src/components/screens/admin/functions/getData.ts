import axios from "axios";


export const getData = async (url: string) => {
  let response;

  try {
    response = await axios.get(url);
    let data = response.data;
    console.log('response: ', response.data);
    return data;
  } catch(error) {
    console.log(error);
  }

}
