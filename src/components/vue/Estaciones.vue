<script setup>
import { guatemala } from "../../constants/guatemala";
import estacionesService from "../../services/estacionesService";
    import { ref,onMounted, computed } from 'vue'
    const estados = ref([]);
    const guatemalaEstaciones = ref([]);
    const estadoSelected = ref('*');
    onMounted(() => {
        const lib= new estacionesService();
        estaciones.value = lib.orderByCountryName();
        estados.value = lib.getEstados();
        guatemalaEstaciones.value = guatemala;
    });
    //propiedades computadas
    const estaciones = computed(()=>{
        const lib= new estacionesService();
            if(estadoSelected.value=='*'){
                return lib.orderByCountryName();
            }else{
                return lib.filterByCountryOrdered(estadoSelected.value);
            }
    });
</script>
<template>
    <section class="mt-3 py-3 px-2 sm:px-0 bg-red-600">
        <div class="max-w-7xl m-auto flex items-center justify-center gap-2">
            <div>
                <svg class=" size-16"viewBox="0 0 24 24"><rect x="1" y="1" width="22" height="22" rx="7.656" style="fill:#f8de40"/>
                    <path d="M23 13.938a14.69 14.69 0 0 1-12.406 6.531c-5.542 0-6.563-1-9.142-2.529A7.66 7.66 0 0 0 8.656 23h6.688A7.656 7.656 0 0 0 23 15.344z" style="fill:#e7c930"/><path d="M16.53 12.324a8.617 8.617 0 0 1-.494.726 5.59 5.59 0 0 1-1.029 1.058 4.794 4.794 0 0 1-.6.412 1.6 1.6 0 0 1-.162.091c-.055.028-.109.061-.164.09-.115.051-.226.115-.346.163-.26.119-.533.223-.819.329a.231.231 0 0 0 .055.446 3.783 3.783 0 0 0 .979-.022 3.484 3.484 0 0 0 .878-.25 3.718 3.718 0 0 0 .409-.205l.012-.007a4.1 4.1 0 0 0 .379-.26 3.51 3.51 0 0 0 1.1-1.465 3.381 3.381 0 0 0 .222-.871c0-.031.006-.061.009-.092a.231.231 0 0 0-.429-.143z" style="fill:#864e20"/><path d="M21.554 5.693c-.063-.289-2.888-.829-4.871-.829a5.584 5.584 0 0 0-3.3.7A3.125 3.125 0 0 1 12 5.919a3.125 3.125 0 0 1-1.381-.352 5.584 5.584 0 0 0-3.3-.7c-1.983 0-4.808.54-4.871.829s-.113 1.217.088 1.381.439.025.477.6.477 2.976 1.808 3.767 3.741.163 4.6-.365A4.3 4.3 0 0 0 11.3 8.568c.138-.892.351-1.507.7-1.507s.565.615.7 1.507a4.3 4.3 0 0 0 1.883 2.51c.854.528 3.264 1.155 4.6.365s1.77-3.189 1.808-3.767.276-.439.477-.6.149-1.095.086-1.383z" style="fill:#101820"/>
                </svg>
            </div>
            <p class="text-slate-200 font-medium text-2xl">¡Contamos con más de {{estaciones.length}} estaciones ubicadas en la república mexicana y {{guatemalaEstaciones.length}} estaciones en Guatemala!</p>
        </div>
    </section>
    <section id="mx" class="max-w-7xl m-auto mt-3 py-3">
        <h1 class="border-b border-red-200 text-red-200 pb-1.5 mb-3 font-bold text-4xl text-center">México</h1>
        <div class="flex flex-wrap gap-2 items-center justify-center mb-5">
            <label for="all">
                <input type="radio" name="estado" id="all" value="*" v-model="estadoSelected" class="hidden peer">
                <span class="block cursor-pointer transition-colors duration-300 hover:bg-slate-700 hover:text-blue-50 peer-checked:bg-blue-800 peer-checked:border-blue-800 peer-checked:text-blue-50 font-semibold border border-blue-900 text-gray-400 px-2 py-1 rounded-full">Todos</span>
            </label>
            <label v-for="estado in estados" :key="estado" :for="estado">
                <input type="radio" name="estado" :id="estado" :value="estado" v-model="estadoSelected" class="hidden peer">
                <span class="block cursor-pointer transition-colors duration-300 hover:bg-slate-700 hover:text-blue-50 peer-checked:bg-blue-800 peer-checked:border-blue-800 peer-checked:text-blue-50 font-semibold border border-blue-900 text-gray-400 px-2 py-1 rounded-full">{{estado}}</span>
            </label>
        </div>
        <div class="flex flex-wrap justify-center gap-3 max-h-96 overflow-y-auto">
            <div v-for="(estacion,key) in estaciones" :key="key" class="w-full mx-2 sm:mx-0 sm:max-w-72 sm:min-w-64">
                <a :href="estacion.url" target="_blank" class="bg-slate-700 text-slate-300 flex flex-col w-full h-full px-3 py-2 rounded-md hover:shadow-md hover:scale-110 transition-all duration-300">
                    <h2 class="font-semibold mb-1">{{estacion.name}}</h2>
                    <div class="flex flex-col justify-end gap-1 h-full text-xs">
                        <div class="w-full flex gap-2 items-center h-full">
                            <div class="text-orange-600">
                                <svg class="size-5" fill="currentColor" viewBox="0 0 384 512">
                                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                                </svg>
                            </div>
                            <p class="text-balance text-gray-400">{{estacion.direccion}}</p>
                        </div>
                        <div class="w-full flex gap-3 justify-between items-center">
                            <div class="flex gap-3 text-cyan-600 items-center h-fit">
                                <svg  class="size-4"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5" /><path d="M9 4v13" /><path d="M15 7v5.5" /><path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" /><path d="M19 18v.01" />
                                </svg>
                                <span>{{ estacion.estado }}</span>
                            </div>
                            <div class="flex gap-1">
                                <!-- <svg v-for="(fuel, index) in estacion.fuels" :key="index"  class="size-6" :class="[fuel=='magna'&&'text-green-700',fuel=='premium'&&'text-red-600',fuel=='diesel'&&'text-black']" viewBox="0 0 24 24"  fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.708 2.372a2.382 2.382 0 0 0 -.71 .686l-4.892 7.26c-1.981 3.314 -1.22 7.466 1.767 9.882c2.969 2.402 7.286 2.402 10.254 0c2.987 -2.416 3.748 -6.569 1.795 -9.836l-4.919 -7.306c-.722 -1.075 -2.192 -1.376 -3.295 -.686z" /></svg> -->
                                <svg v-for="(fuel, index) in estacion.fuels" :key="index"  class="size-6" :class="[fuel=='magna'&&'text-green-700',fuel=='premium'&&'text-red-600',fuel=='diesel'&&'text-black']" fill="currentColor"viewBox="0 0 384 512">
                                    <path d="M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
    <br>
    <!-- --------------------------GUATEMALA------------------------------------- -->
    <section id="gt"class="max-w-7xl m-auto mt-3 py-3">
        <h1 class="border-b border-red-200 text-red-200 pb-1.5 mb-3 font-bold text-4xl text-center">Guatemala</h1>
        <div class="flex flex-wrap justify-center gap-3 max-h-96 overflow-y-auto">
            <div v-for="(estacion,key) in guatemalaEstaciones" :key="key" class="w-full mx-2 sm:mx-0 sm:max-w-72 sm:min-w-64">
                <a :href="estacion.url" target="_blank" class="bg-slate-700 text-slate-300 flex flex-col w-full h-full px-3 py-2 rounded-md hover:shadow-md hover:scale-110 transition-all duration-300">
                    <h2 class="font-semibold mb-1">{{estacion.name}}</h2>
                    <div class="flex flex-col justify-end gap-1 h-full text-xs">
                        <div class="w-full flex gap-2 items-center h-full">
                            <div class="text-orange-600">
                                <svg class="size-5" fill="currentColor" viewBox="0 0 384 512">
                                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                                </svg>
                            </div>
                            <p class="text-balance text-gray-400">{{estacion.direccion}}</p>
                        </div>
                        <div class="w-full flex gap-3 text-cyan-600 items-center h-fit">
                            <svg  class="size-4"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5" /><path d="M9 4v13" /><path d="M15 7v5.5" /><path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" /><path d="M19 18v.01" />
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