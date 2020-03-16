import axios from "axios";
const URL = process.env.REACT_APP_URL;

const Services = {
  login: payload => {
    return axios
      .post(`${URL}/login`, payload)
      .then(res => {
        return {
          data: res.data
        };
      })
      .catch(error => {
        return { errorMessage: error };
      });
  }
};

export default Services;
