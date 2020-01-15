<template>
    <div style="height: auto;">
        <div class="navbar">
            <img src="../assets/logo.svg" style="height: 45px;width: auto;margin: auto 30px auto 30px" alt="" srcset="">
            <img src="../assets/search.svg" style="width: 18px; height: auto;margin-left: auto;transform: translate(40px, 0px);align-self: center" alt="">
            <input @keyup.enter="search()" style="align-self: center;" type="text" placeholder="Search" class="searchInput" ref="search_bar" v-model="searchInput">
            <button @click="search()" style="margin-left: 30px;margin-right: 30px;" class="btn-outline">Search</button>
            <button v-if="!this.authState" @click="$router.push('/signup')" style="margin-right: 30px;" class="btn-outline">SignUp</button>
        </div>
        <toolbar />
    </div>
</template>

<script>

const firebase = require("../firebaseConfig")
import toolbar from "./toolbar"

export default {
    name: 'navbar',
    components: {
        toolbar
    },
    data () {
        return {
            searchInput: '',
            authState: false
        }
    },
    methods: {
        search() {
            console.log("search")
        },
    },
    mounted () {
        this.authState = firebase.auth.currentUser.uid
    }
}

</script>

<style scoped>

.navbar {
    background: white;
    position: fixed;
    top: 0px;
    left: 0px;
    height: 80px;
    z-index: 99;
    width: 100vw;
    /* -webkit-box-shadow: 0 0px 10px 0px rgba(255, 255, 255, 0.25);
    box-shadow: 0 0px 10px 0px rgba(255, 255, 255, 0.25); */
    display: flex;
    flex-direction: row;
}

.searchInput {
    all: unset;
    height: auto;
    border: 2px solid #e1e1e1;
    border-radius: 1000000px;
    width: 15vw;
    padding: 8px 20px 8px 60px;
    text-align: left;
}

</style>