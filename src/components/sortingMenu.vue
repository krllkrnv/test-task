<template>
    <div class="text-center">
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn variant="text" class="mt-5" color="black" dark v-bind="props">
                    Сортировка: {{ pickedOption }}
                </v-btn>
            </template>

            <v-list>
                <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                    <v-list-item-title @click="pickedOption = item">{{ item }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const items = ['По умолчанию', 'По дате', 'По стоимости'];

let pickedOption = ref(items[0]);

watch(pickedOption, (newValue, oldValue) => {
    switch (newValue) {
        case items[0]:
            store.commit('SORT_VEHICLES', 'id');
            break;
        case items[1]:
            store.commit('SORT_VEHICLES', 'year');
        break;
        case items[2]:
        store.commit('SORT_VEHICLES', 'price');
        break;
        default:
            break;
    }});
</script>

<style scoped></style>
