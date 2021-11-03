<template>
  <div class=" form-control container-sm  w-75">
    <h1>Lista de Tareas de {{ usuario.email }}</h1>
    <h2>Agrega una nueva tarea</h2>
      
      <input
        type="text"
        class="form-control"
        placeholder="Agregar Nueva Tarea"
        aria-label="Username"
        aria-describedby="basic-addon1"
        v-model="tarea"
      />
      <button  @click="limpiar()" type="button"  class="form-control my-2 btn btn-dark">
        Agregar
      </button>
    
    <h3 class="text-sm-start ">lista de tareas pendientes:</h3>
    <ul>
      <li v-for="(item, index) in tareas" :key="index">
          <div class="form-control my-2 d-flex justify-content-between align-items-center ">
            <p class="text-start" :class="{ 'text-decoration-line-through': item.estado }"  >{{item.name}}</p>
            <div> 
              <router-link class="noline" to="/editar"  ><button type="button" @click="getTarea({nombre: item.name, id:item.id})" class="btn btn-warning">Editar</button></router-link>
              <button type="button" class="btn mx-2" :class="item.estado ? 'btn-success' : 'btn-primary'"  @click="cambiar(item)"> {{ item.estado ? "Finalizada" : "Pendiente" }}</button>
              <button v-if="item.estado" type="button" class="btn btn-danger mx-2" @click="deleteTask(item.id)">Eliminar</button>
              
            </div>
          </div>
      </li>
    </ul>

  </div>
</template>

<script>
// @ is an alias to /src

import { mapState, mapActions } from "vuex";
export default {
  data(){
    return{
        tarea: '',
    }
  },
  name: "Home",
  components: {},
  computed: {
    ...mapState(["usuario", "tareas"]),
  },
  methods: {
    ...mapActions(["leerDatabase",'addTask','limpiarTasks','getTarea','deleteTask','changeState']),
    cambiar(item){
      
      this.changeState({estado:item.estado,id:item.id})
      item.estado = !item.estado
    },
    limpiar(){
      this.addTask({nombre:this.tarea,estado:false})
      this.tarea = ''
      
    }
  },
  created() {
    this.limpiarTasks();
    this.leerDatabase();
  },
};
</script>
<style scoped>
li {
  list-style: none;
}
p{
  margin: 0;
}
ul{
  padding: 0;
}
</style>