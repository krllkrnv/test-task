<template>
    <yandex-map style="margin: 0 auto" height="550px" :settings="{
        location: LOCATION,
        showScaleInCopyrights: true,
    }" width="75vw">
        <yandex-map-default-scheme-layer />
        <yandex-map-default-features-layer />
        <yandex-map-default-marker v-for="marker in markersGeoJsonSource" :key="marker.title" :settings="marker" />
    </yandex-map>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { ref, watch } from 'vue';

const store = useStore();

import {
    YandexMap,
    YandexMapDefaultFeaturesLayer,
    YandexMapDefaultMarker,
    YandexMapDefaultSchemeLayer,
} from 'vue-yandex-maps';
import type { YMapLocationRequest } from '@yandex/ymaps3-types/imperative/YMap';

const LOCATION: YMapLocationRequest = {
    center: [37.623082, 55.75254],
    zoom: 5,
};

const markersGeoJsonSource = ref([]);

store.getters.GET_VEHICLES.forEach(item => {
    markersGeoJsonSource.value.push({
        coordinates: [item.longitude, item.latitude],
    });
});

watch(() => store.getters.GET_VEHICLES, () => {
    markersGeoJsonSource.value = [];
    store.getters.GET_VEHICLES.forEach(item => {
        markersGeoJsonSource.value.push({
            coordinates: [item.longitude, item.latitude],
        });
    });
});
</script>