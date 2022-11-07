<template>
<div>


<main class="container">
  <div class="bg-light p-5 rounded">
    <h1>Navbar example</h1>
    <p class="lead">This example is a quick exercise to illustrate how the top-aligned navbar works. As you scroll, this navbar remains in its original position and moves with the rest of the page.</p>
    <a class="btn btn-lg btn-primary" href="/docs/5.0/components/navbar/" role="button">View navbar docs &raquo;</a>
  </div>
</main>
</div>


</template>

<script>
export default {
    data() {
        return {
            coures: [],
            loadingx: false,
        }
    },

    methods: {
        getCoures (){

                this.loadingx = true
                
                axios({
                url: process.env.VUE_APP_URL + '/api/modules',
                method: 'get',
                // data: formData,
                // headers: {
                //   'Authorization': 'Bearer ' +localStorage.getItem('user_token')
                // }
              })
              .then((response) =>{

                this.loadingx = false

                this.coures = response.data

                console.log(response)

              })
              .catch((response) =>{

                this.loadingx = false

                console.log(response)
              });

        }
    },

    mount() {
        
    },
}
</script>

<style>

</style>
