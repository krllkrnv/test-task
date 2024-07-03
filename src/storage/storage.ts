import { createStore } from "vuex";

export default createStore({
    state: {
        STATE_VEHICLES: [],
    },
    getters: {
        GET_VEHICLES: state => {
            return state.STATE_VEHICLES;
        },
    },
    mutations: {
        SET_VEHICLES: (state, payload) => {
            state.STATE_VEHICLES = payload;
        },
        DELETE_VEHICLE: (state, payload) => {
            state.STATE_VEHICLES = state.STATE_VEHICLES.filter(item => item.id !== payload);
        },
        CHANGE_VEHICLE: (state, payload) => {
            state.STATE_VEHICLES.forEach((item, index) => {
                if (item.id === payload.id) {
                    state.STATE_VEHICLES[index] = payload;
                }
            })
        },
        SORT_VEHICLES: (state, payload) => {
            state.STATE_VEHICLES.sort((a, b) => {
                return a[payload] - b[payload];
            });
        },
        
    }
})