<template>
    <v-card variant="outlined" class="ma-2 pa-2 card-item">
        <v-card-text class="pa-0" v-for="(value, name, index) in vehicle">
            {{ name }}: {{ value }}
        </v-card-text>
        <v-card-actions class="card-actions">
            <v-btn @click="$emit('onEdit', vehicle)" variant="tonal" color="amber">Изменить</v-btn>
            <v-btn @click="deleteElement(vehicle.id)" variant="tonal" color="red">Удалить</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';

const emit = defineEmits({
    onEdit: (vehicle) => {
        return vehicle
    }
})

const props = defineProps({
    vehicle: {
        type: Object,
        required: true,
    },
});
const store = useStore();

const deleteElement = (elementId) => {
    store.commit('DELETE_VEHICLE', elementId);
}
</script>

<style scoped>
.card-item {
    background-color: white;
}
.card-item:hover {
    transform: scale(1.01);
}
</style>
