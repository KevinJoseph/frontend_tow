<template>
  <div>

    <br>
    <div class="container">

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Solicitudes de Estados de Cuenta:</a></li>
    <li class="breadcrumb-item"> <a class="btn btn-primary btn-sm" @click="logout" href="#">Cerrar Sesión</a></li>
  </ol>
</nav>


      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Documento</th>
            <th scope="col">Nombres</th>
            <th scope="col">Celular</th>
            <th scope="col">Email</th>
            <th scope="col">Año</th>
            <th scope="col">Fecha</th>
            <th scope="col">Estado</th>  
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
                        <tr v-for="(estado, index) in estados" v-bind:key="index">
                        <td>{{index+1}}</td>
                        <td>{{estado.document}}</td>
                        <td>{{estado.name}}</td>
                        <td>{{estado.phone}}</td>
                        <td>{{estado.email}}</td>
                        <td>{{estado.year}}</td>
                        <td>{{estado.date}}</td>
                        <td v-if="estado.status == '0'"  style="color:red">Pendiente</td>
                        <td v-else style="color:green">Enviado</td>
                        <td>
                          <button class="btn btn-success btn-sm" @click="EstadoCompletely(estado)" style="font-size:9px"> Sí </button>
                          <button class="btn btn-danger btn-sm" @click="EstadoPending(estado,index)" style="font-size:9px"> No </button>
                        </td>
                    </tr>
        </tbody>
      </table>

    </div>
    
       
  </div>
</template>

<style>
.table {
  font-size: 12px;
}
</style>


<script>
import axios from 'axios';
export default {
  name: 'EstadoCuenta',
  data() {
    return {
      _id:'',
      document: '',
      name: '',
      phone: '',
      email:'',
      year:'',
      status:'',
      date:'',
      estados:[],
      estadoEditar:'',
      estado:{_id:'',document:'', name:'', phone:'', email:'',year:'',status:'',date:''}
    }
  },
  created() {
    //user is not authorized
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login');
    }
  },
  mounted() {
  
      axios.get('https://immense-journey-88777.herokuapp.com/solicitud/', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
          this.estados = res.data;
        //this.name = res.data.user.name;
        //this.email = res.data.user.email;
      })
      .catch(err => {
        console.log(err);
        this.$router.push('login')
      })
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    },
    EstadoCompletely(item){
      //console.log(item._id);
      // Aqui se puede aplicar Promisse ALL
      axios.put(`https://immense-journey-88777.herokuapp.com/solicitud/complety/${item._id}`, item)
      .then(res => {

            axios.get('https://immense-journey-88777.herokuapp.com/solicitud/', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
          this.estados = res.data;
        //this.name = res.data.user.name;
        //this.email = res.data.user.email;
      })
      .catch(err => {
        console.log(err);
        this.$router.push('login')
      })

      })
      .catch(e => {
        console.log(e);
      })
      
    },
    EstadoPending(item){

       axios.put(`https://immense-journey-88777.herokuapp.com/solicitud/pending/${item._id}`, item)
      .then(res => {
        
            axios.get('https://immense-journey-88777.herokuapp.com/solicitud/', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
          this.estados = res.data;
        //this.name = res.data.user.name;
        //this.email = res.data.user.email;
      })
      .catch(err => {
        console.log(err);
        this.$router.push('login')
      })

      })
      .catch(e => {
        console.log(e);
      })
    }
  }
  }

</script>

