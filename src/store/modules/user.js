import userAPI from "../../api/user";

const user = {
    state: {
        userList: [],
        user: {}
    },
    mutations: {
        updateUserList(state, payload) {
            state.userList = payload;
        }
    },
    actions: {
        async getUserList({ commit }) {
            const response = await userAPI.getUserList();
            console.log(response)

            commit("updateUserList", response.data);
        }
    },
    getters: {
        userList(state) {
            return state.userList;
        },
        user(state) {
            return state.user
        }
    }
}


export default user;