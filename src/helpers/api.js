import * as axios from "axios";
import { SERVER_ENDPOINT, AUTH_TOKEN } from "../constants";

class API {
  constructor() {
    this.api_token = null;
    this.client = null;
    this.api_url = SERVER_ENDPOINT;
  }

  init = () => {
    let headers = {
      Accept: "application/json"
    };

    if (this.api_token) {
      headers.Authorization = `${AUTH_TOKEN}`;
    }

    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 31000,
      headers: headers
    });

    return this.client;
  };

  createUser = params => {
    return this.init().post("/users", { params: params });
  };
}

export default API;
