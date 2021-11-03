<template>
  <div id="app">
    <div id="nav">
  <template>
    <div class="center examplex">
      <vs-navbar dark text-white square center-collapsed >
        <template #right>
          <router-link class="noline" to="/login"  v-if="!existUser"  ><vs-button flat >Login</vs-button></router-link>
          <router-link class="noline" to="/registro" v-if="!existUser" ><vs-button flat>Registrarse</vs-button></router-link>
          <vs-button danger @click="cerrarSesion" v-if="existUser">Cerrar Sesion</vs-button>
        </template>
      </vs-navbar>
    </div>
  </template>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapActions,mapGetters } from 'vuex'
export default {
  methods:{
    ...mapActions(['cerrarSesion'])
  },
  computed:{
    ...mapGetters(['existUser'])
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
.noline{
text-decoration: none;
}
</style>
