<template>
  <div>
    
    <div class="container">

      <div class="jumbotron">
        <center>
           <h3 class="">Estado de Cuenta en Linea</h3>
           <p class="">El siguiente tramite en linea le permitirá solicitar su Estado de Cuenta.</p>
        </center>
        
        <hr class="my-4">
        <form>
        <div class="form-group">
          <label for="">Numero de documento</label>
          <input type="text" class="form-control" id="exampleInputEmail1" v-model="document" aria-describedby="emailHelp" placeholder="Ruc o DNI">
        </div>
        <div class="form-group">
          <label for="">Nombres / Razon Social</label>
          <input type="text" class="form-control" id="exampleInputEmail1" v-model="name" aria-describedby="emailHelp" placeholder="">
        </div>
        <div class="form-group">
          <label for="">Celular</label>
          <input type="text" class="form-control" id="exampleInputEmail1" v-model="phone" aria-describedby="emailHelp" placeholder="Numero de celular">
        </div>
        <div class="form-group">
          <label for="">Correo electronico</label>
          <input type="email" class="form-control" id="exampleInputEmail1" v-model="email" aria-describedby="emailHelp" placeholder="munipuntahermosa@gmail.com">
          <small id="emailHelp" class="form-text text-muted">Deberá registrar un correo electronico valido.</small>
        </div>
        <div class="form-group">
          <label for="">Año de Estado de Cuenta</label>
          <input type="text" class="form-control" id="exampleInputEmail1" v-model="year" aria-describedby="emailHelp" placeholder="2019 ó 2018,2019,2020">
        </div>
        <center>
        <button type="submit" @click="createsolicitud" class="btn btn-primary">Solicitar Estado de Cuenta</button>
        </center>

      </form>
      </div>
       
    </div>
   
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'EstadoCuenta',
  data() {
    return {
      document: '',
      name: '',
      phone: '',
      email:'',
      year:''
    }
  },
  methods: {
    createsolicitud() {
      let newEstado = {
        document: this.document,
        name: this.name,
        phone: this.phone,
        email: this.email,
        year: this.year
      }
      axios.post('https://immense-journey-88777.herokuapp.com/solicitud/', newEstado)
        .then(res => {
          this.error = '';
          console.log("newEstado")
        
          //this.$router.push('/Home');
        }, err => {
          console.log(err.response)
          this.error = err.response.data.error
        })
    }
  }
  }

</script>

