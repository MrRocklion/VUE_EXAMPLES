<template>
  <v-app>
     <!-- <v-toolbar dark sense src="./images/estrellas.jpg">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title
        >APLICACION DE AUTENTICACION POR DAVID DIAZ</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-btn depressed color="primary" class="mr-3" > Iniciar Sesion </v-btn>

      <v-btn depressed color="#28B463"  class="mr-3" > Registrarse </v-btn>


    </v-toolbar> -->
  <v-card
    color="grey lighten-4"
    flat
    tile
  >
  <v-toolbar dark sense src="./images/estrellas.jpg">
      <v-toolbar-title
        >APLICACION DE AUTENTICACION POR DAVID DIAZ</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-btn depressed color="primary" class="mr-3" > <v-icon leftdark class="mr-2"> fas fa-sign-in-alt</v-icon> Iniciar Sesion  </v-btn>

      <v-btn depressed color="#28B463"  class="mr-3" > Registrarse </v-btn>


    </v-toolbar> 
  </v-card>
   <v-main class="fondo">
     <v-container>
      <router-view />
     </v-container>
   </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.fondo{
  background-color: #2C3E50 ;
}
</style>