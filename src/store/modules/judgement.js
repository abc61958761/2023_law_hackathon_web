import judgements from "../../api/judgement";
  import moment from 'moment';

const judgement = {
    state: {
        judgementList: [],
        judgement: {}
    },
    mutations: {
        updateJudgementList(state, payload) {
            state.judgementList = payload;
        },
        updateJudgement(state, payload) {
            state.judgement = payload
        }
    },
    actions: {
        async getJudgementList({ commit }, params) {
            const response = await judgements.getJudgementList(params);
            for (const judgement of response.data) {
                const noList = judgement.no.split(',')
                judgement.name = `${judgement.court} ${noList[0]}年 ${noList[1]}字 ${noList[2]}號`
                judgement.date = moment(judgement.date).format("yyyy-MM-DD")

                // judgement.date = moment(judgement.date).format("yyyy-MM-DD")
                // if (judgementSet.has(judgement.id)) {
                //   this.selectedJudgements.push(judgement)
                //   judgementSet.delete(judgement.id)
                // }
    
                // if (judgementSet.size == 0) break
            }

            commit("updateJudgementList",response.data);
        },
        async getJudgement({commit}, params) {
            const response = await judgements.getJudgement(params);
            const judgement =  response.data
            const noList = judgement.no.split(',')
            judgement.name = `${judgement.court} ${noList[0]}年 ${noList[1]}字 ${noList[2]}號`

            commit("updateJudgement",judgement);
        }
    },
    getters: {
        judgementList(state) {
            return state.judgementList;
        },
        judgement(state) {
            return state.judgement
        }
    }
}


export default judgement;