import appserver from "./appserve";

const API_URL = "/projects";

const projects = {
  async createProject(config) {
    return await appserver.post(`${API_URL}/`, config);
  },
  async getProjectList() {
    return await appserver.get(`${API_URL}/`);
  },
  async getProject(projectId) {
    return await appserver.get(`${API_URL}/${projectId}`);
  },
}

export default projects;