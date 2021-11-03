<template>
<div class="container-sm ">
<h1> Registrarse </h1>
<form class="px-5" @submit.prevent="crearUsuario({email:email,password:pass1})" >
    <input type="email" placeholder="ingresa un correo" class="form-control my-2" v-model="email" required>
    <input type="password" placeholder="ingresa una contraseña" class="form-control my-2" v-model="pass1" required >
    <input type="password" placeholder="repita la contraseña" class="form-control my-2" v-model="pass2" required>
    <button type="submit"   class="form-control btn  btn-primary" :disabled='!desactivar' >Registrar Usuario</button>
    <div class="alert alert-danger my-2" role="alert" v-if="errores !== null">
    {{errores}}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
</form>
</div>

</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    data(){
        return{
            email: '',
            pass1: '',
            pass2: '',
        }
    },
    methods:{
        ...mapActions(['crearUsuario'])
    },
    computed:{
        ...mapState(['errores']),
        desactivar(){
            return this.pass1 === this.pass2 && this.pass1.trim() !== '' && this.pass1.length > 5
        }
    }
}
</script>

<style>

</style>