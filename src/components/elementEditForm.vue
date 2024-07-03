<template>
    <v-card class="ma-2 pa-2">
        <v-form @sumbit.prevent>

            <v-text-field label="Марка" v-model="propsData['name']"/>
            <v-text-field label="Модель" v-model="propsData['model']"/>
            <v-text-field label="Стоимость" v-model.number="propsData['price']" type="number"/>

            <v-btn class="w-100" @click="submitChange(propsData)" color="success">Применить</v-btn>
        </v-form>
    </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';

const emit = defineEmits(['close-dialog']);

const props = defineProps({
    vehicle: {
        type: Object,
        required: true,
    },
});

const store = useStore();

let propsData = ref(JSON.parse(JSON.stringify(props.vehicle)));

const submitChange = (item) => {
    console.log(typeof item.price)
    store.commit('CHANGE_VEHICLE', item)
    emit('close-dialog')
}
</script>

<style scoped></style>
