<template style="overflow: hidden;">
    <div style="display: flex; flex-direction: row;height: 100vh; width: 100vw;overflow: hidden;" class="page_body">
        <div v-if="!this.loading" class="left" style="flex: 1;display: flex; flex-direction: column;justify-content: center;">
            <h1 style="color: black;word-spacing: 8px;align-self: center;padding-bottom: 10vh;">Login to use <strong> SARC </strong> services</h1>
            <input class="input" placeholder="Enter Your Email ID" v-model="email" type="email">
            <input class="input" placeholder="Enter Your Password" v-model="password" type="password">
            <button @click="this.login" class="btn_submit" >Login</button>
            <p @click="$router.push('/signup')" style="margin-top: 10vh;font-weight: 600;cursor: pointer">Click Here To Signup</p>
        </div>
        <div v-if="this.loading" style="flex: 1;display: flex; flex-direction: column;justify-content: center;">
            <img v-if="!this.afterAuth" src="../assets/loader_2.png" class="rotator" style="width: 80px; height: 80px;align-self: center;" alt="">
            <p v-if="this.afterAuth">Succesfully Logged In</p>
            <router-link v-if="this.afterAuth" to="/">Go Home</router-link>
        </div>
        <div class="right" style="flex: 1; background: #f1f1f1;display: flex;justify-content: center;">
            <img @click="$router.push('/home')" src="../assets/logo.svg" style="width: 50%;height: auto;align-self: center;" alt="">
        </div>
    </div>
</template>

<style scoped>
    .input {
        all: unset;
        width: 60%;
        background: #f1f1f1;
        color: black;
        padding: 20px;
        align-self: center;
        margin-top: 20px;
        border-radius: 100000px;
        font-weight: 600;
    }

    .btn_submit{
        all: unset;
        background: transparent;
        border: 2px solid #EA4360;
        padding: 15px;
        width: 13%;
        align-self: center;
        margin-top: 30px;
        border-radius: 100000px;
        cursor: pointer;
        color: black;
        font-weight: 600;
    }
    .btn_submit:hover{
        background: #EA4360;
        color: white;
    }

</style>

<script>

import * as firebase from "firebase"

export default {
    name: 'login',
    components: {},
    data () {
        return {
            email: '',
            password: '',
            loading: false,
            afterAuth: false,
        }
    },
    mounted: function () {

    },
    methods: {
        login () {
            var vm = this
            vm.loading = true
            if ( vm.email && vm.password ) {
                firebase.auth().signInWithEmailAndPassword(vm.email, vm.password).then( () => {
                    vm.afterAuth = true
                }).catch(err => {
                    alert(err)
                })
            }else {
                alert('Please fill all the fields')
            }
        }
    }
}
</script>
