<template>
  <div>
    <button @click="logout">logout</button>
    <h1>HELLO {{ name }}</h1>
    <h2>your email is: {{ email }}</h2>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'Landing',
  data() {
    return {
      name: '',
      email: '',
    }
  },
  created() {
    //user is not authorized
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login');
    }
  },
  mounted() {
    //console.log({ headers: { token: localStorage.getItem('token')}});
    axios.get('https://immense-journey-88777.herokuapp.com/users/', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
          console.log(res.data);
        this.name = res.data.user.name;
        this.email = res.data.user.email;
      })
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    }
  }
}
</script>
