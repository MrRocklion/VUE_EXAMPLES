<template>
<div class="container-sm  ">
<h1> Iniciar Sesion </h1>
  <form class="px-5 pequeño" @submit.prevent="iniciarSesion({email:email , password:password})" >
    <input type="email" placeholder="ingresa un correo" class="form-control my-2" v-model="email"  required>
    <input type="password" placeholder="ingresa una contraseña" class="form-control my-2"  v-model="password" required >
    <button type="submit"   class="form-control btn  btn-primary"  >Iniciar Sesion</button>


</form>
</div>

</template>

<script>
import {mapState , mapActions} from 'vuex'
export default {
    data(){
        return{
            email: '',
            password: ''
        }
    },
    computed:{
        ...mapState(['errores'])
    },
    methods:{
        ...mapActions(['iniciarSesion'])
    }

}
</script>

<style>
.pequeño{
    width: 450px !important;
    margin-right: auto !important;
    margin-left: auto !important;
}
</style>