<template>
    <div class="card card-register mx-auto mt-5">
        <div class="card-header">Register an Account</div>
        <div class="card-body">
            <form>
                <div class="form-group">
                    <div class="form-label-group">
                        <input type="email" id="inputFullName" class="form-control" placeholder="Full Name" required="required">
                        <label for="inputFullName">Full Name</label>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-label-group">
                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="required">
                        <label for="inputEmail">Email address</label>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <div class="form-label-group">
                                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="required">
                                <label for="inputPassword">Password</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-label-group">
                                <input type="password" id="confirmPassword" class="form-control" placeholder="Confirm password" required="required">
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

</script>

<style scoped>

</style>