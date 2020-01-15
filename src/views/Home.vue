<template>
  <div class="home">
    <navbar> </navbar>
    <div style="display: flex; flex-direction: row;margin-top: 140px;">
        <div ref="catCont" style="height: calc(100vh - 140px);background: transparent; display: flex; flex-direction: column;align-items: flex-start;width: 360px; position: fixed; top: 140px; left: 0px;overflow: auto;">
          <!-- <p style="font-size: 20px; font-weight: 600;padding-left: 30px;margin-top: 40px;">Categories</p> -->
          <p class="categories" style="margin-top: 80px" ref="all" id="all" @click="showActive('all')">All Categories</p>
          <p class="categories" v-for="cat in this.categories" :key="cat" :id="cat" @click="showActive(cat)">{{cat}}</p>
        </div>
        <div style="height: auto;background: transparent; display: flex; flex-direction: column;align-items: center;width: calc(100% - 360px);overflow: auto;margin-left: 360px;">
          <div v-for="post in posts" :key="post._id" @click="$router.push('/post/' + post._id)" style="cursor: pointer;" class="card">
            <img :src="post.image" style="width: 100%; height: auto;max-height: 600px;border-radius: 10px;" alt="">
            <div class="innerCard">
              <div class="rand" style="width: 30px;height: 100%;background: MediumSeaGreen"></div>
              <div style="display: flex; flex-direction: column;">
                <p style="text-align:left;font-size: 28px;padding: 0px;margin: 0px;margin-left: 50px;line-height: 22px;margin-top: auto;font-weight: 700;">{{post.title}}</p>
                <p style="text-align:left;font-size: 14px;padding: 0px;margin-left: 50px;line-height: 18px;margin-bottom: auto;color: #777;">{{post.description}}</p>
              </div>
              <div v-if="Object.keys(post).includes('stars')" style="align-self: center;margin-left: auto;margin-right: 30px;">
                <img v-if="Object.keys(post.stars).includes(uid)" src="../assets/star_alt.svg" style="width: 20px; height: auto;" alt="">
              </div>
              <div v-if="!Object.keys(post).includes('stars')" style="align-self: center;margin-left: auto;margin-right: 30px;">
                <img src="../assets/star.svg" style="width: 20px; height: auto;" alt="">
              </div>
              <div v-if="Object.keys(post).includes('buckets')" style="align-self: center;margin-right: 60px;">
                <img v-if="Object.keys(post.buckets).includes(uid)" src="../assets/bucket_alt.svg" style="width: 20px; height: auto;" alt="">
              </div>
              <div v-if="!Object.keys(post).includes('buckets')" style="align-self: center;margin-right: 60px;">
                <img src="../assets/bucket.svg" style="width: 20px; height: auto;" alt="">
              </div>
            </div>
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
      categories: [],
      activeCat: "all",
      posts: [],
      uid: "",
      colors : [
          "Tomato",
          "Red",
          "Violet",
          "Cyan",
          "Khaki",
          "Gray",
          "SlateBlue",
          "DodgerBlue",
          "Orange",
          "MediumSeaGreen"
        ]
    }
  },
  mounted () {
    this.getCategories()
    this.getPosts()
    this.showActive("all")
    this.uid = firebase.auth.currentUser.uid
  },
  methods: {
    getCategories () {
        var vm = this
        firebase.rtdb.ref("categories").once('value').then(snapshot => {
            var data = Object.values(snapshot.val())
            vm.categories = data
        })
    },
    getPosts () {
        var vm = this
        firebase.rtdb.ref("posts").once('value').then(snapshot => {
            var data = Object.values(snapshot.val())
            vm.posts = data
            data.forEach(post => {
            console.log(Object.keys(post).includes('stars'))
            })
        })
    },
    showActive(e) {
      this.$refs.catCont.children.forEach(el => {
        el.style.background = "transparent"
      });
      document.getElementById(e).style.background = "#f1f1f1"
      console.log(e.replace(/ /g,'').toLowerCase())
    },
  }
}
</script>

<style scoped>
  .categories {
    margin-top: 40px;
    margin-left: 30px;
    padding: 10px 40px 10px 40px;
    border-radius: 1000000px;
    cursor: pointer;
    width: calc(100% - 140px);
    text-align: left;
    flex-shrink: 0;
  }
  .card {
    width: 70%;
    background: #f1f1f1;
    height: 600px;
    margin-top: 60px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }
  .card:first-of-type{
    margin-top: 80px;
  }

  .innerCard {
    width: 100%;
    background: #ffffff;
    height: 100px;
    display: flex; flex-direction: row;
    transform: translateY(-200px);
  }

</style>


