import appserver from "./appserve";

const API_URL = "/questions";

const markConfig = {
  async getMarkConfigList(params) {
    return await appserver.get(`${API_URL}/`, {params});
  },
  async addMarkConfig(params) {
    return await appserver.patch(`${API_URL}/`, params);
  },
  async updateMarkConfig(id, params) {
    return await appserver.patch(`${API_URL}/${id}`, params);
  }
}

export default markConfig;