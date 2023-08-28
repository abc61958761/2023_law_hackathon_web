import judgments from "../../api/judgment";

const judgment = {
    state: {
        judgmentList: [],
    },
    mutations: {
        updateJudgmentList(state, payload) {
            state.judgmentList = payload;
        }
    },
    actions: {
        async getJudgmentList({ commit }) {
            console.log("getJudgmentList")
            const response = await judgments.getJudgmentList();
            console.log(response)

            commit("updateJudgmentList",response.data);
        },
    },
    getters: {
        judgmentList(state) {
            return state.judgmentList;
        },
    }
}


export default judgment;