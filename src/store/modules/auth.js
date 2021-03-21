import axios from "axios";
import {default as config} from "/config.json"

export default {
    state: {
        is_login: false,
        user_data: {}
    },

    getters: {
        getUserData(state){
            return state.user_data
        },
        getLoginStatus(state){
            return state.is_login
        }
    },

    actions: {
        async send_auth_data({commit}, data){
            let form_data = new FormData()
            data.append('username', data['username'])
            data.append('password', data['password'])

            let axios_config = {
                method: "post",
                url: `${config.your_backend_api}auth/`,
                data: form_data
            }
            let res = await axios(axios_config);
            if (res.status === 200){
                commit("set_user_data", await axios.get(`${config.your_backend_api}user/`))
                commit("set_user_login_status", true)
            }
        }
    },

    mutations: {
        set_user_data(state, user_data){
            state.user_data = user_data
        },
        set_user_login_status(state, login_status){
            state.is_login = login_status
        }
    }
}
