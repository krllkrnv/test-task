<template>
    <div class="list-container">
        <sorting-menu class="sorting-menu" v-if="vehicles.length > 0"></sorting-menu>

        <v-container v-if="vehicles.length > 0">
            <v-row no-gutters>
                <v-col v-for="vehicle in vehicles" :key="vehicle.id" cols="12" sm="4">
                    <vehicle-element @on-edit="getEmitData" :vehicle="vehicle"></vehicle-element>
                </v-col>
            </v-row>
        </v-container>

        <div class="mt-5" v-else>
            Список пуст. Нажмите на кнопку "Загрузить данные".
        </div>

        <v-dialog v-model="showDialog" max-width="500">
            <element-edit-form @close-dialog="showDialog = false" :vehicle="dialogElement"></element-edit-form>
        </v-dialog>
    </div>
</template>

<script setup lang="ts">
import vehicleElement from '../components/vehicleElement.vue'
import elementEditForm from '../components/elementEditForm.vue'
import sortingMenu from '../components/sortingMenu.vue'

import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const vehicles = computed(() => store.getters.GET_VEHICLES);

let showDialog = ref(false);
let dialogElement;

const getEmitData = (data) => {
    dialogElement = data;
    showDialog.value = true;
}
</script>

<style scoped>
.vehicles-container {
    display: grid;
    grid-column: 1;
}

.card-actions {
    display: flex;
    justify-content: space-between;
}

.sorting-menu {
  align-self: flex-start;
  margin-left: 50px;
}

.list-container {
    display: flex;
    flex-direction: column;
}
</style>
