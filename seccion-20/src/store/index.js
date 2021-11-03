import Vue from 'vue'
import Vuex from 'vuex'
import {auth,db} from '../firebase'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut   } from "firebase/auth";
import { collection, addDoc,getDocs,updateDoc, doc , deleteDoc} from "firebase/firestore";
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: null,
    errores: null,
    tareas: [],
    tarea: {nombre:'' ,id:''},
  },
  mutations: {
    setUsuario(state,payload){
      state.usuario = payload

    },
    setError(state,payload){
      state.errores = payload
    },
    setTareas(state,payload){
      state.tareas.push(payload)
      
    },
    setTarea(state,payload){
      state.tarea.nombre = payload.nombre
      state.tarea.id = payload.id
    },
    limpiar(state){
      state.tareas = []
    },
    deleteTarea(state,payload){
      state.tareas = state.tareas.filter(item => item.id !== payload)
    },


  },
  actions: {
    crearUsuario({commit}, usuario){
      createUserWithEmailAndPassword(auth, usuario.email, usuario.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.email)
        console.log(user.uid)
        const usuarioCreado = {
          email:user.email,
          uid: user.uid,
        }
        try {
          const docRef =  addDoc(collection(db, user.email), {
    
          });
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        



        commit('setUsuario',usuarioCreado)
        router.push('/')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        commit('setError',errorMessage)
        console.log(errorMessage)
        // ..
      });
    },
    iniciarSesion({commit,state},user){
      signInWithEmailAndPassword(auth, user.email, user.password)
  .then((userCredential) => {

    const user = userCredential.user;
    console.log('user')
    const usuarioLogeado = {
      email:user.email,
      uid: user.uid,
    }
    commit('setUsuario',usuarioLogeado)
    router.push('/')

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
  
    },
    cerrarSesion({commit}){
      signOut(auth)
      console.log('cerro sesion')
      router.push('/login')
      state.tareas = []
    },
    detectarUser({commit},usuario){
      commit('setUsuario',usuario)

    },
     async leerDatabase({commit,state}){
      
      const querySnapshot = await getDocs(collection(db, state.usuario.email));
      querySnapshot.forEach((doc) => {
    
        const tareaContent = doc.data()
        const tarea = {
          name: tareaContent.name,
          estado: tareaContent.estado,
          id: doc.id
        }
        commit('setTareas',tarea)
      })
  },
  async addTask({commit,state},nueva_tarea){
    const docRef = await addDoc(collection(db, state.usuario.email), {
      name: nueva_tarea.nombre,
      estado: nueva_tarea.estado,
    });
    const tarea = {
      name: nueva_tarea.nombre,
      estado: nueva_tarea.estado,
      id: docRef.id
    }
    commit('setTareas',tarea)
  },
  limpiarTasks({commit}){
    commit('limpiar')
  },
  async editarTarea({state},tarea){
  const docRef = doc(db,state.usuario.email,tarea.id);
  await updateDoc(docRef, {
      "name": tarea.tarea,
  }); 
  console.log('actualizacion exitosa') 
  router.push('/')
  },
  getTarea({commit},tarea){
    commit('setTarea',tarea)
    console.log(tarea)
  },
  async deleteTask({commit,state},id){
    await deleteDoc(doc(db,state.usuario.email ,id));
    commit('deleteTarea',id)
  },
  async changeState({state},tarea){
    const docRef = doc(db,state.usuario.email,tarea.id);
  await updateDoc(docRef, {
      "estado": tarea.estado,
  }); 
  console.log('actualizacion exitosa') 
  }
},
  getters:{
    existUser(state){
      if(state.usuario === null){
        return false 
      }else{
        return true 
      }
    }
  },
  modules: {
  }
})
