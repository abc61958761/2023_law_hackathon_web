import markConfigAPI from "../../api/markConfig";

const markConfig = {
    state: {
        markConfigList: []
    },
    mutations: {
        updateMarkConfigList(state, payload) {
            state.markConfigList = payload;
        }
    },
    actions: {
        async getMarkConfigList({ commit }, params) {
            params['userId'] = 1
            const response = await markConfigAPI.getMarkConfigList(params);
            const allQuestions = {
                categoricalVariableList: [],
                continuousVariableList: []
            }
            const selectQuestions = {
                categoricalVariableList: [],
                continuousVariableList: []
            }

            for (const item of response.data.allQuestions) {
                if (item.variableType == '類別變項') {
                    allQuestions.categoricalVariableList.push(item)
                }
                if (item.variableType == '連續變項') {
                    allQuestions.continuousVariableList.push(item)
                }
            }

            for (const item of response.data.selectQuestions) {
                if (item.variableType == '類別變項') {
                    selectQuestions.categoricalVariableList.push(item)
                }
                if (item.variableType == '連續變項') {
                    selectQuestions.continuousVariableList.push(item)
                }
            }

            commit("updateMarkConfigList", {
                allQuestions, selectQuestions
            });

            return {
                allQuestions, selectQuestions
            }
        },
        async addMarkConfig({ commit }, params) {
            console.log(commit)
            const response = await markConfigAPI.addMarkConfig(params);
            return response
        },
        async updateMarkConfig({commit}, {id, params}) {
            console.log(commit)
            const response = await markConfigAPI.updateMarkConfig(id, params);
            return response
        }
    },
    getters: {
        markConfigList(state) {
            return state.markConfigList;
        }
    }
}


export default markConfig;