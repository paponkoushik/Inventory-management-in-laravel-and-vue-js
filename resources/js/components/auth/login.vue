<template>
    <div class="card card-login mx-auto mt-5">
        <div class="card-header">Login</div>
        <div class="card-body">
            <form @submit.prevent="login">
                <div class="form-group">
                    <div class="form-label-group">
                        <input type="email" v-model="form.email" id="inputEmail" class="form-control" placeholder="Email address" required="required" autofocus="autofocus">
                        <label for="inputEmail">Email address</label>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-label-group">
                        <input type="password" v-model="form.password" id="inputPassword" class="form-control" placeholder="Password" required="required">
                        <label for="inputPassword">Password</label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-block">Login</button>
            </form>
            <div class="text-center">
                <router-link to="/register" class="d-block small mt-3">Register an Account</router-link>
                <router-link to="/forget" class="d-block small mt-3">Forgot Password?</router-link>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default{
        data(){
            return{
                form:{
                    email:null,
                    password:null
                }
            }
        },
        methods:{
            login(){
                axios.post('/api/auth/login',this.form)
                    .then(respose => console.log(respose.data))
                    .catch(error => console.log(error.response.data))
            }
        }
    }
</script>

<style scoped>

</style>