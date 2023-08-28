import appserver from "./appserve";

// const API_URL = "/accounts";

const judgments = {
  async getJudgmentList() {
    return await appserver.get(`/RetrieveCivilList`);
  }
}

export default judgments;