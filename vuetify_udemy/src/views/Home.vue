<template>
<div>
<v-layout :wrap="true">
  <v-row justify="center">
        <v-date-picker
      v-model="fecha"
      full-width
      class="mt-4"
      :min = "mini"
      :max = "maxi"
      @change="getdolar(fecha)"
    ></v-date-picker>
  </v-row>
  <v-flex xs12>
 <v-card color="error" dark>
   <v-card-text class="display-1 text-center" >
    El valor del dolar vs el euro es: {{valor}}
   </v-card-text>
 </v-card>
  </v-flex>
</v-layout>
</div>

</template>

<script>
import axios from "axios";
import {mapMutations} from 'vuex'
  export default {
    data(){
      return{
        fecha: new Date().toISOString().substr(0,10),
        mini: "1984",
        maxi: new Date().toISOString().substr(0,10),
        valor: null
      }
    },

      methods:{
          ...mapMutations(['mostrarLoading','ocultarLoading']),
          async getdolar(dia){
            let arrayfecha = dia.split(['-'])
            let fecha = arrayfecha[2] + '-'+ arrayfecha[1]+'-'+ arrayfecha[0]
            
            try {
                this.mostrarLoading({titulo:'cargando'})
                let dato1 = await axios.get(`https://mindicador.cl/api/dolar/${fecha}`)
                let dato2 = await axios.get(`https://mindicador.cl/api/euro/${fecha}`)

                
                let dolar = await dato1.data.serie[0].valor;
                let euro = await dato2.data.serie[0].valor;
                
                let conversion = euro/dolar
                this.valor = conversion.toFixed(2);

            } catch (error) {
                this.valor = 'sin resultados'
            }finally{
              this.ocultarLoading()
            }

          
          }
      },
      created(){
        this.getdolar(this.fecha)
      }  
  }
</script>
