import axios from "axios";

const contactService = {
  baseUrl: process.env.REACT_APP_API_BASE_URL,
  get: async function (id = undefined) {
    console.log(this.baseUrl);
    if (id)
      return (await axios.get(`${this.baseUrl}/contact/${id}`)).data.data;
    
    return (await axios.get(`${this.baseUrl}/contact`)).data.data;
  }
};

export default contactService;