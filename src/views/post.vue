<template>
  <div class="home">
    <navbar> </navbar>
    <div class="main">
        <div style="width: 100vw;position: relative;margin-top: 140px;background: transparent;height: auto;" class="top_img">
            <img :src="this.image" style="width: 100vw; height: auto;max-height: calc(100vh - 200px);object-fit: fit;" alt="">
            <div @click="$router.push('/')" style="position: absolute;top: 20vh; left: 20px;width: 40px;height: 40px; border-radius: 50%;background: white;display: flex; flex-direction : column;cursor: pointer;box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.55);">
                <img src="../assets/pointer_alt_left.png" style="width: 15px; height: 20px;align-self: center;margin-top: auto;margin-bottom: auto;" alt="">
            </div>
        </div>
        
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "../components/navbar"
const firebase =  require("../firebaseConfig")

export default {
  name: 'home',
  components: {
    navbar
  },
  data () {
    return {
        image: "",
        postId: this.$route.params.id,
        title: "",
        description: "",
        bodyText: "",
        starStatus: false,
        bucketStatus: false
    }
  },
  mounted () {
      this.getData()
  },
  methods: {
      getData() {
        var vm = this
        console.log(vm.postId)
        firebase.rtdb.ref("posts/" + vm.postId).once('value').then(snapshot => {
            var data = snapshot.val()
            console.log(data)
            vm.image = data.image
            vm.title = data.title
            vm.description = data.description
            vm.bodyText = data.bodyText
            if(Object.keys(data).includes("stars")) {
                if(Object.keys(data.stars).includes(firebase.auth.currentUser.uid)) {
                    vm.starStatus = true
                } else {
                    vm.starStatus = false
                }
            } else {
                vm.starStatus = false
            }

            if(Object.keys(data).includes("buckets")) {
                if(Object.keys(data.buckets).includes(firebase.auth.currentUser.uid)) {
                    vm.bucketStatus = true
                } else {
                    vm.bucketStatus = false
                }
            } else {
                vm.bucketStatus = false
            }
        })
      }
  }
}
</script>

<style scoped>
    .main {
        display: flex;
        flex-direction: column;
    }
</style>


