<script setup>
import { guatemala } from "../../constants/guatemala";
import estacionesService from "../../services/estacionesService";
import { ref, onMounted, computed } from 'vue'
const estados = ref([]);
const guatemalaEstaciones = ref([]);
const estadoSelected = ref('*');
onMounted(() => {
    const lib = new estacionesService();
    estaciones.value = lib.orderByCountryName();
    estados.value = lib.getEstados();
    guatemalaEstaciones.value = guatemala;
});
//propiedades computadas
const estaciones = computed(() => {
    const lib = new estacionesService();
    if (estadoSelected.value == '*') {
        return lib.orderByCountryName();
    } else {
        return lib.filterByCountryOrdered(estadoSelected.value);
    }
});
</script>
<template>
    <section id="mx" class="max-w-7xl m-auto mt-3 py-3 transition-[height] duration-300">
        <div class="flex items-center justify-center mb-3">
            <h1 class="border-b border-red-500 text-red-500 pb-1.5 mb-3 font-bold text-4xl text-center">México</h1>
            <img src="src/img/banderas/mexico.jfif" alt="Descripción de la imagen" class="ml-4"
                style="max-width: 100px;">
        </div>
        <div class="flex flex-wrap gap-2 items-center justify-center mb-5">
            <label for="all">
                <input type="radio" name="estado" id="all" value="*" v-model="estadoSelected" class="hidden peer">
                <span
                    class="block cursor-pointer transition-colors duration-300 hover:bg-slate-700 hover:text-red-50 peer-checked:bg-red-800 peer-checked:border-red-800 peer-checked:text-red-50 font-semibold border border-red-900 text-gray-400 px-2 py-1 rounded-full">Todos</span>
            </label>
            <label v-for="estado in estados" :key="estado" :for="estado">
                <input type="radio" name="estado" :id="estado" :value="estado" v-model="estadoSelected"
                    class="hidden peer">
                <span
                    class="block cursor-pointer transition-colors duration-300 hover:bg-slate-700 hover:text-red-50 peer-checked:bg-red-800 peer-checked:border-red-800 peer-checked:text-red-50 font-semibold border border-neutral-300 text-gray-400 px-2 py-1 rounded-full">{{
                        estado }}</span>
            </label>
        </div>
        <div class="flex flex-wrap justify-center gap-3 max-h-96 overflow-y-auto">
            <div v-for="(estacion, key) in estaciones" :key="key" class="w-full mx-2 sm:mx-0 sm:max-w-72 sm:min-w-64">
                <a :href="estacion.url" target="_blank"
                    class="bg-neutral-300 text-neutral-700 flex flex-col w-full h-full px-3 py-2 rounded-md hover:shadow-lg hover:scale-110 transition-all duration-300">
                    <h2 class="font-semibold mb-1">{{ estacion.name }}</h2>
                    <div class="flex flex-col justify-end gap-1 h-full text-xs">
                        <div class="w-full flex gap-2 items-center h-full">
                            <div class="text-red-500">
                                <svg class="size-5" fill="currentColor" viewBox="0 0 384 512">
                                    <path
                                        d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                </svg>
                            </div>
                            <p class="text-balance text-neutral-700">{{ estacion.direccion }}</p>
                        </div>
                        <div class="w-full flex gap-3 text-cyan-600 items-center h-fit">
                            <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5" />
                                <path d="M9 4v13" />
                                <path d="M15 7v5.5" />
                                <path
                                    d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" />
                                <path d="M19 18v.01" />
                            </svg>
                            <span>{{ estacion.estado }}</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
    <br>
    <!-- --------------------------GUATEMALA------------------------------------- -->
    <section id="gt" class="max-w-7xl m-auto mt-3 py-3 transition-[height] duration-300">
        <div class="flex items-center justify-center mb-3">
            <h1 class="border-b border-red-500 text-red-500 pb-1.5 mb-3 font-bold text-4xl text-center">Guatemala</h1>
            <img src="src/img/banderas/guatemala.jfif" alt="Descripción de la imagen" class="ml-4"
                style="max-width: 100px;">
        </div>
        <div class="flex flex-wrap justify-center gap-3 max-h-96 overflow-y-auto">
            <div v-for="(estacion, key) in guatemalaEstaciones" :key="key"
                class="w-full mx-2 sm:mx-0 sm:max-w-72 sm:min-w-64">
                <a :href="estacion.url" target="_blank"
                    class="bg-neutral-300 text-neutral-700 flex flex-col w-full h-full px-3 py-2 rounded-md hover:shadow-md hover:scale-110 transition-all duration-300">
                    <h2 class="font-semibold mb-1">{{ estacion.name }}</h2>
                    <div class="flex flex-col justify-end gap-1 h-full text-xs">
                        <div class="w-full flex gap-2 items-center h-full">
                            <div class="text-red-500">
                                <svg class="size-5" fill="currentColor" viewBox="0 0 384 512">
                                    <path
                                        d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                </svg>
                            </div>
                            <p class="text-balance text-neutral-700">{{ estacion.direccion }}</p>
                        </div>
                        <div class="w-full flex gap-3 text-cyan-600 items-center h-fit">
                            <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5" />
                                <path d="M9 4v13" />
                                <path d="M15 7v5.5" />
                                <path
                                    d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" />
                                <path d="M19 18v.01" />
                            </svg>
                            <span>{{ estacion.estado }}</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
    <!-- <section class="max-w-7xl m-auto mt-3 py-3 transition-[height] duration-300">
        <h1 class="border-b border-slate-800 text-slate-800 pb-0.5 mb-3 font-bold text-4xl text-center">México</h1>
        <section v-for="(estado, index) in estaciones" :key="index" class="mt-2 border rounded-lg overflow-hidden border-red-700 max-w-7xl m-auto" x-data="{ collapse : false }" x-on:click.away="collapse=false">
            <h1 x-on:click="collapse=!collapse" class="px-3 py-1 text-lg font-semibold bg-red-700 text-red-100 cursor-pointer">{{index}}</h1>
            <div class="px-3" x-bind:class="{ 'py-3': collapse }">
                <div class="flex flex-wrap items-stretch justify-center sm:justify-start gap-2" x-show="collapse" x-collapse>
                    <div v-for="(estacion,key) in estado" :key="key" class="max-w-72 min-w-64">
                        <a :href="estacion.url" target="_blank" class="bg-white block w-full h-full border p-2 rounded-md hover:shadow-md hover:scale-110 transition-all duration-300">
                            <h2 class="font-semibold mb-1">{{estacion.name}}</h2>
                            <div class="flex gap-2 items-center">
                                <div class=" text-orange-600">
                                    <svg class="size-6" fill="currentColor" viewBox="0 0 384 512">
                                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                                    </svg>
                                </div>
                                <p class="text-xs text-balance text-gray-600">{{estacion.direccion}}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </section> -->
</template>