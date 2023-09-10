import appserver from "./appserve";

const API_URL = "/judgements";

const judgements = {
  async getJudgementList(params) {
    return await appserver.get(`${API_URL}/`, {params});
  },
  async getJudgement(params) {
    return await appserver.get(`${API_URL}/${params.id}`)
  }
}

export default judgements;