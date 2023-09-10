import appserver from "./appserve";

const API_URL = "/users";

const users = {
  async getUserList() {
    return await appserver.get(`${API_URL}/`);
  },
  async getUser(userId) {
    return await appserver.get(`${API_URL}/${userId}`);
  },
}

export default users;