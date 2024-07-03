<template>
    <v-btn @click="loadData" class="load-button">
        Загрузить данные
    </v-btn>
    <map-component class="mt-5" v-if="store.getters.GET_VEHICLES.length > 0"></map-component>
    <vehicles-list></vehicles-list>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

import vehiclesList from '../components/vehiclesList.vue'
import mapComponent from '../components/mapComponent.vue'
import axios from 'axios';

const store = useStore();


const vehicles = computed(() => store.getters.GET_VEHICLES);

const loadData = async () => {
    try {
        const response = await axios.get('https://test.tspb.su/test-task/vehicles', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data);
        store.commit('SET_VEHICLES', response.data);
    } catch (error) {
        console.log(error);
    }
};

onMounted(() => {
    loadData();
})

</script>

<style scoped>
.load-button {
    margin: 0 auto;
    max-width: 300px;
}
</style>
