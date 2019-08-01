<template>
    
</template>

<script>
    export default {
        created(){
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            Toast.fire({
                type: 'success',
                title: 'Successfully Log Out!'
            })
            this.$router.push({ name: 'login' })
        }
    }
</script>

<style scoped>

</style>