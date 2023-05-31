import AxiosRequest from "./axios-base";

class HttpRequest {
  baseRequest = null;
  constructor() {
    this.baseRequest = AxiosRequest;
  }

  async get(url, config = null) {
    return this.baseRequest.get(url, config);
  }

  async post(url, payload = {}, config = null) {
    return this.baseRequest.post(url, payload, config);
  }

  async put(url, payload = {}, config = null) {
    return this.baseRequest.put(url, payload, config);
  }
  async delete(url, config = null) {
    return this.baseRequest.delete(url, config);
  }
}

export default new HttpRequest();
