<template>
    <div class="card card-register mx-auto mt-5">
        <div class="card-header">Register an Account</div>
        <div class="card-body">
            <form @submit.prevent = "signup">
                <div class="form-group">
                    <div class="form-label-group">
                        <input type="text" v-model="form.name" id="inputFullName" class="form-control" placeholder="Full Name">
                        <small class="text-danger" v-if="errors.name" style="color: red;"> {{ errors.name[0] }} </small>
                        <label for="inputFullName">Full Name</label>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-label-group">
                        <input type="email" v-model="form.email" id="inputEmail" class="form-control" placeholder="Email address">
                        <small class="text-danger" v-if="errors.email" style="color: red;"> {{ errors.email[0] }} </small>
                        <label for="inputEmail">Email address</label>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <div class="form-label-group">
                                <input type="password" v-model="form.password" id="inputPassword" class="form-control" placeholder="Password">
                                <small class="text-danger" v-if="errors.password" style="color: red;"> {{ errors.password[0] }} </small>
                                <label for="inputPassword">Password</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-label-group">
                                <input type="password" v-model="form.password_confirmation" id="confirmPassword" class="form-control" placeholder="Confirm password">
                                <label for="confirmPassword">Confirm password</label>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-block">Register</button>
            </form>
            <div class="text-center">
                <router-link to="/" class="d-block small mt-3">Already have an account?</router-link>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        created(){
            if (User.loggedIn()) {
                this.$router.push({name : 'home'})
            }
        },
        data(){
            return {
                form:{
                    name: null,
                    email: null,
                    password: null,
                    confirm_password: null
                },
                errors:{},
            }
        },
        methods:{
            signup(){
                axios.post('/api/auth/signup',this.form)
                    .then(res => {
                        User.responseAfterLogin(res)
                        Toast.fire({
                            type: 'success',
                            title: 'Signed in successfully'
                        })
                        this.$router.push({ name : 'home'})
                    })
                    .catch(error => this.errors = error.response.data.errors)

            }
        }
    }
</script>

<style scoped>

</style>