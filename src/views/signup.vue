<template style="overflow: hidden;">
    <div style="display: flex; flex-direction: row;height: 100vh; width: 100vw;overflow: hidden;" class="page_body">
        <div @click="$router.push('/home')" style="flex: 1; background: #f1f1f1;display: flex;justify-content: center;">
            <img  src="../assets/logo.svg" style="width: 50%;height: auto;align-self: center;" alt="">
        </div>
        <div v-if="this.loading" style="flex: 1;display: flex; flex-direction: column;justify-content: center;">
            <img v-if="!this.afterAuth" src="../assets/loader_2.png" class="rotator" style="width: 80px; height: 80px;align-self: center;" alt="">
            <p v-if="this.afterAuth">Succesfully Registered</p>
            <router-link v-if="this.afterAuth" to="/">Go Home</router-link>
        </div>
        <div v-if="!this.loading" ref="right" style="flex: 1;display: flex; flex-direction: column;justify-content: center;">
            <h1 style="color: black;word-spacing: 8px;align-self: center;padding-bottom: 10vh;">Signup to <strong> SARC </strong> services</h1>
            <input v-model="name" class="input" placeholder="Enter Your Name" type="text">
            <input v-model="email" class="input" placeholder="Enter Your Email ID" type="email">
            <input v-model="password" class="input" placeholder="Enter Your Password" type="password">
            <input v-model="password_re" class="input" placeholder="Re-Enter Your Password" type="password">
            <button @click="signup" class="btn_submit" >Signup</button>
            <p @click="$router.push('/login')" style="margin-top: 10vh;font-weight: 600;cursor: pointer">Already Have an Account</p>
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
    name: 'signup',
    components: {},
    data () {
        return {
            name: '',
            email: '',
            password: '',
            password_re: '',
            loading: false,
            afterAuth: false,
        }
    },
    mounted: function () {
    },
    methods: {
        signup () {
            var vm = this
            if ( this.name && this.email && this.password && this.password_re ) {
                if (this.password == this.password_re) {
                    if(this.email.includes('@gmail.com') && this.email) {
                        vm.loading = true
                        firebase.auth().createUserWithEmailAndPassword(vm.email, vm.password).then(resp => {
                            console.log(resp)
                            firebase.auth().currentUser.sendEmailVerification().then( () => {
                                alert('Email Verification Sent!');
                                firebase.auth().currentUser.updateProfile({
                                    displayName: vm.name
                                }).then(function() {vm.afterAuth = true}).catch(function(e) {
                                    console.log(e)
                                });
                            });
                        }).catch( error => {
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            if (errorCode == 'auth/weak-password') {
                                alert('The password is too weak.');
                            } else {
                                alert(errorMessage);
                            }
                            alert(error);
                        })
                    }
                } else {
                    alert('Password donot match')
                }
            }else {
                alert('Please fill all the fields')
            }
        }
    }
}
</script>
