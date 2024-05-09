<script setup>
import { ref, defineProps} from 'vue';
import {createTransport} from 'nodemailer';
//import MailService from "../../services/mailService";
const user=ref({name:'',email:'',option:'',details:''});
const props= defineProps({
        url:String,
        });
const mail=()=>{
    
}
const clases='mt-1 bg-slate-900 border border-slate-700 text-slate-200 rounded-lg w-full p-2';
</script>
<template>
    <form @submit.prevent="mail" class="my-3 sm:my-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-600 flex flex-col gap-2 w-full">
        <label for="Nombre">
            <span>Nombre</span>
            <input id="Nombre" name="Cliente" type="text" v-model="user.name" required :class="clases">
        </label>
        <label for="Email">
            <span>Correo electrónico</span>
            <input id="Email" name="Correo"type="email" v-model="user.email" required placeholder="example@correo.com" :class="clases">
        </label>
        <label for="option" class="flex flex-col">
            <span>Motivo</span>
            <select name="option" id="option" required v-model="user.option" :class="clases">
                <option value="" selected hidden>Seleccione un motivo</option>
                <option value="Quiero facturar">Quiero facturar</option>
                <option value="Licencia FullGas">Licencia FullGas</option>
                <option value="Quiero ser proveedor">Quiero ser proveedor</option>
                <option value="Sugerencias">Sugerencias</option>
            </select>
        </label>
        <label for="Mensaje">
            <span>Mensaje</span>
            <textarea name="Mensaje" id="Mensaje" v-model="user.details" required :class="clases"></textarea>
        </label>
        <button type="submit" class="w-fit px-4 py-2 rounded-lg bg-green-700 text-green-100 hover:bg-green-600 transition-colors duration-300">
            <span>Enviar</span>
        </button>
    </form>
</template>
<!-- <template>
    <form action="https://formsubmit.co/76f680ba250262da84222f3975b4e937" method="POST"  class="my-3 sm:my-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-600 flex flex-col gap-2 w-full">
        <input type="hidden" name="_subject" value="Correo desde página web">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" :value="props.url">
        <label for="Nombre">
            <span>Nombre</span>
            <input id="Nombre" name="Cliente" type="text" v-model="user.name" required :class="clases">
        </label>
        <label for="Email">
            <span>Correo electrónico</span>
            <input id="Email" name="Correo"type="email" v-model="user.email" required placeholder="example@correo.com" :class="clases">
        </label>
        <label for="option" class="flex flex-col">
            <span>Motivo</span>
            <select name="option" id="option" required v-model="user.option" :class="clases">
                <option value="" selected hidden>Seleccione un motivo</option>
                <option value="Quiero facturar">Quiero facturar</option>
                <option value="Licencia FullGas">Licencia FullGas</option>
                <option value="Quiero ser proveedor">Quiero ser proveedor</option>
                <option value="Sugerencias">Sugerencias</option>
            </select>
        </label>
        <label for="Mensaje">
            <span>Mensaje</span>
            <textarea name="Mensaje" id="Mensaje" v-model="user.details" required :class="clases"></textarea>
        </label>
        <button type="submit" class="w-fit px-4 py-2 rounded-lg bg-green-700 text-green-100 hover:bg-green-600 transition-colors duration-300">
            <span>Enviar</span>
        </button>
    </form>
</template> -->
<style>
label > span::before{
    content: '*';
    color:rgb(248 113 113);
}
textarea{
    resize: none;
}
</style>