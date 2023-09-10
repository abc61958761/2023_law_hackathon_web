import projectsAPI from "../../api/project";
import moment from 'moment';

const project = {
    state: {
        projectList: [],
        project: {}
    },
    mutations: {
        updateProjectList(state, payload) {
            state.projectList = payload;
        },
        updateProject(state, payload) {
            state.project = payload;
        }
    },
    actions: {
        async createProject({ commit }, project) {
            project['userId'] = 1
            await projectsAPI.createProject(project);

            commit("updateProjectList");
        },
        async getProjectList({ commit }) {
            const response = await projectsAPI.getProjectList();
            let projectList = []
            for(const project of response.data) {
                projectList.push({
                    ...project,
                    startTime: moment(project.startTime).format('YYYY-MM-DD'),
                    endTime: project.endTime ? moment(project.endTime).format('YYYY-MM-DD') : project.endTime
                })
            }
            commit("updateProjectList", projectList);
        },
        async getProject({commit}, projectId) {
            const response = await projectsAPI.getProject(projectId);
            commit("updateProject", response.data);
            return response.data
        }
    },
    getters: {
        projectList(state) {
            return state.projectList;
        },
        project(state) {
            return state.project
        }
    }
}


export default project;