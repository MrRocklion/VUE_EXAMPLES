<template>
        <div>
    <form @submit.prevent="editarTarea({tarea: nTarea , id: tarea.id})" class="form-control container-sm w-50">
        <h1>Seccion Editar Tarea</h1>    
    <h2>{{tarea.id}} - {{tarea.nombre}}</h2>
    
            <p class="text-start form-control my-2" >Tarea actual: {{tarea.nombre}}</p>
   
      <input
        type="text"
        class="form-control"
        placeholder="Escribe la nueva tarea"
        aria-label="Username"
        aria-describedby="basic-addon1"
        v-model="nTarea"
      />
      <button  type="submit" class="form-control my-2 btn btn-dark">
        Editar
      </button>
      <p>{{nTarea}}</p>
    </form>
        </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'Editar',
    data(){
        return {
            nTarea: '',
        }
    },
    created(){
        
    },
    methods:{
        ...mapActions(['editarTarea'])
        
    },
    computed:{
        ...mapState(['tarea'])
    }
}
</script>