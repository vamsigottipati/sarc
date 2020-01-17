<template>
    <div class="page_body">
        <navbar style="position: fixed;"/> <!--  v-bind:class="{'low_opacity': showModal}"  -->
        <div class="sidebar" ref="sidebar" style="position: fixed;top: 20vh;left: 0px;width: calc(200vw / 7);height: 80vh;display: flex; flex-direction: column;">
            <button @click="decOpacity" class="btn_outline" style="margin-left: auto; margin-right: auto;margin-top: 5vh;">Post an Idea</button>
            <div style="width: 90%; height: auto;background: transparent; border: 2px solid #EA4360; border-radius: 10px; margin-top: 10vh;margin-left: 5%;">
                <p style="color: black;padding: 20px;text-align: left;">This is some tect to explain how ideahub works. Lorem ipsum dolor, 
                sit amet consectetur adipisicing elit. Aliquam labore mollitia doloremque, 
                alias dolores beatae dolor asperiores! Ab, reprehenderit odit. Lorem ipsum dolor sit, 
                amet consectetur adipisicing elit. Delectus deserunt culpa deleniti nobis illo iusto 
                ab nemo beatae necessitatibus? Aliquam, delectus? Animi quaerat libero non blanditiis, 
                distinctio eius iusto ea deserunt vero incidunt rem architecto, aut accusamus consequatur 
                culpa! Officiis?
                </p>
            </div>
        </div>
        <!-- <div v-if="showModal" style="position: fixed; width: 100vw; height: 100vh;top: 0px; left: 0px;background: transparent;z-index: 999;border-radius: 10px;" class="post_modal">
            <div style="width: 60vw; height: 90vh;margin-top: 5vh; margin-left: 20vw;background: #EA4360;border-radius: 10px;z-index: 999;overflow: auto;text-align: left;">
                <div style="display: flex; flex-direction: row;">
                    <p style="color: white; padding-left: 40px;font-weight: 800; font-size: 22px;padding-top: 30px;margin-top: 0px;">Write a post explaining your Idea</p>
                    <img @click="incOpacity" src="../assets/cross.png" style="width: 15px; height: 15px;cursor: pointer;margin-left: auto;margin-top: 30px; margin-right: 40px;" alt="">
                </div>
                <p style="color: #eee; padding-left: 40px;font-weight: 800; font-size: 18px;padding-top: 30px;margin-top: 0px;;text-align: left;">Give a Title for Your Post</p>
                <input placeholder="And the Title Is ..... " style="width: 80%" class="main_input" v-model="title" name="title" type="text">
                <p style="color: #eee; padding-left: 40px;font-weight: 800; font-size: 18px;padding-top: 30px;margin-top: 0px;">A Description might be Good</p>
                <input placeholder="The Description might be ..... " style="width: 80%" class="main_input" v-model="description" name="description" type="text">
                <p style="color: #eee; padding-left: 40px;font-weight: 800; font-size: 18px;padding-top: 30px;margin-top: 0px;">Explain your Idea</p>
                <textarea placeholder="So, the idea is ....." class="main_input" v-model="body_text" ref="body_text_ref" name="bodyText" style="border-radius: 10px;height: 50vh;width: 80%" type="text"> </textarea>
                <p style="color: #eee; padding-left: 40px;font-weight: 800; font-size: 18px;padding-top: 30px;margin-top: 0px;">Choose an Image</p>
                <div style="background: transparent;margin-left: 40px;">
                    <input type="file" name="file" id="file" ref="uploadContent" class="inputfile" />
                    <label for="file">Pick a picture</label>
                </div>
                <button class="btn_outline_alt" style="margin: 40px;">Submit</button>
            </div>
        </div> -->

        <div ref="main" class="page_body_main">
            <div style="flex: 2;"></div>
            <div style="flex: 5;height: 80vh;" v-if="!showModal">
                <div ref="posts_main" style="background: transparent;margin-left: auto;margin-right: auto;">
                    <div v-for="(sp, i) in this.posts" :ref="'post_' + i" :key="i" class="card_cont" style="background: transparent; margin-left: 5vw; margin-top: 50px;height: 60vh;width: 60vw;">
                        <img @click="$router.push('/post/' + sp.id)" class="card_img" :src="sp.image" style="width: 60vw; height: 60vh;object-fit: cover;z-index: 3;border-radius: 15px;cursor: pointer;" alt="">
                        <div class="card_text_cont" style="background: #eeeeee;height: auto;min-height: 20%; width: 100%;z-index: 9;transform: translateY(-18vh);display: flex; flex-direction: row;">
                            <div style="width: 40px;" :class="{'bg_red': i%3 == 1, 'bg_yellow': i%3 == 2, 'bg_blue': i%3 == 0}" ></div>
                            <div style="display: flex; flex-direction: column;justify-content: center;">
                                <p style="font-weight: 900;font-size: 28px;color: black;padding: 0px;margin: 0px;text-align: left;padding-left: 40px;">{{ sp.title }}</p>
                                <p style="font-weight: 600; font-size: 18px; color: #9E9E9E;padding: 0px;margin: 0px;text-align: left;padding-top: 5px;padding-left: 40px;">{{ sp.description }}</p>
                            </div>
                            <img v-if="!sp.stars.includes(userid)" @click="sendStar(sp.id, i)" src="../assets/star.svg" style="width: 20px; height: 20px;align-self: flex-end;margin-bottom: 20px;margin-left: auto;margin-right: 30px;cursor: pointer;" alt="">
                            <img v-if="sp.stars.includes(userid)" @click="removeStar(sp.id, i)" src="../assets/star_alt.svg" style="width: 25px; height: 25px;align-self: flex-end;margin-bottom: 20px;margin-left: auto;margin-right: 30px;cursor: pointer;" alt="">
                            <img v-if="!sp.bucket.includes(userid)" @click="sendBucket(sp.id, i)" src="../assets/bucket.svg" style="width: 20px; height: 20px;align-self: flex-end;margin-bottom: 20px;margin-right: 30px;cursor: pointer;" alt="">
                            <img v-if="sp.bucket.includes(userid)" @click="removeBucket(sp.id, i)" src="../assets/bucket_alt.svg" style="width: 20px; height: 20px;align-self: flex-end;margin-bottom: 20px;margin-right: 30px;cursor: pointer;" alt="">
                            <img src="../assets/pointer.svg" @click="$router.push('/post/' + sp.id)" style="width: 20px; height: 20px;align-self: flex-end;margin-bottom: 20px;margin-right: 30px;cursor: pointer;" alt="">
                        </div> 
                    </div>
                </div>
            </div>
            <div style="background: transparent;flex: 5;margin-left: auto;margin-right: auto;height: 80vh;" v-if="showModal">
                <div class="create_post" style="height: 60vh; width: 60vw; margin-left: auto; margin-right: auto;background: #f1f1f1; border-radius: 10px;margin-top: 50px;display: flex; flex-direction: column;">
                    <div style="display: flex; flex-direction: row;">
                        <p>Give a Title To Your Idea</p>
                        <input type="text">
                    </div>
                    <div style="display: flex; flex-direction: row;">
                        <p>Write a Description </p>
                        <input type="text">
                    </div>
                    <div style="display: flex; flex-direction: row;">
                        <p>Explain Your Idean in your own words</p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div style="display: flex; flex-direction: row;">
                        
                    </div>
                    <div style="display: flex; flex-direction: row;">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped> 
    .page_body_main {
        display: flex;
        flex-direction: row;
        height: auto;
        margin-top: 20vh;
    }
    .btn_outline{
        all: unset;
        background: transparent;
        border: 2px solid #EA4360;
        border-radius: 10000px;
        text-align: center;
        padding: 15px 40px 15px 40px;
        cursor: pointer;
        font-weight: 900;
        color: black;
    }
    .btn_outline_alt {
        all: unset;
        background: transparent;
        border: 2px solid white;
        border-radius: 10000px;
        text-align: center;
        padding: 15px 40px 15px 40px;
        cursor: pointer;
        font-weight: 900;
        color: white;
    }
    .btn_outline_alt:hover{
        background: white;
        color: #EA4360;
    }
    .btn_outline:hover{
        background: #EA4360;
        color: white;
    }
    textarea:focus {
        outline: 0;
    } 
    .bg_focus {
        background: #F1F1F1;
    }
    .card_cont{
        -webkit-animation: fadeAnim 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fadeAnim 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }
    .card_img{
        -webkit-animation: bg_shadow 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: bg_shadow 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    .bg_blue{
        background: #2BCEFE;
    }
    .bg_yellow{
        background: #FECD2B;
    }
    .bg_red{
        background: #E34848;
    }
    .bg_grey {
        background: #F1F1F1;
    }
    .no_overflow {
        overflow: hidden;
    }
    .rotator {
        -webkit-animation: rotator 1s ease-in-out infinite;
	        animation: rotator 1s ease-in-out infinite;
    }
    .post_modal {
        -webkit-animation: bg_shadow 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: bg_shadow 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    .create_post {
        -webkit-animation: bg_shadow_small 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: bg_shadow_small 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;    
    }
    .low_opacity {
        opacity: 0.1
    }
    .main_input {
        all: unset;
        background: #eeeeee;
        color: black;
        padding: 15px 40px 15px 40px;
        margin-left: 40px;
        margin-right: 40px;
        border-radius: 1000000px;
        text-align: left;
    }
    .inputfile {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }
    .inputfile + label {
        font-size: 16px;
        font-weight: 700;
        color: white;
        background-color: #EA4360;
        border-radius: 100000px;
        color: white;
        border: 2px solid white;
        padding: 16px;
        padding-left: 50px;
        padding-right: 50px;
        display: inline-block;
    }

    .inputfile:focus + label,
    .inputfile + label:hover {
        background-color: white;
        color: #EA4360;
    }
    .inputfile + label {
        cursor: pointer; /* "hand" cursor */
    }

/* Keyframes */

    @-webkit-keyframes bg_shadow {
        0% {
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);
        }
        100% {
            box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.25), 12px 0 20px -12px rgba(0, 0, 0, 0.25);
        }
    }
    @keyframes bg_shadow {
        0% {
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);
        }
        100% {
            box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.25), 12px 0 20px -12px rgba(0, 0, 0, 0.25);
        }
    }

    @-webkit-keyframes bg_shadow_small {
        0% {
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
        100% {
            box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.15);
        }
    }
    @keyframes bg_shadow_small{
        0% {
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
        100% {
            box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.15);
        }
    }

    @-webkit-keyframes fadeAnim {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes fadeAnim {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>

<script>

import navbar from '../components/navbar.vue'

export default {
    name: 'ideahub',
    data () {
        return {
            heading: '',
            sub_heading: '',
            description_ip: '',
            showModal: false,
            title: '',
            description: '',
            body_text: '',
            userid: '',
            posts: [
                {
                    id: 'aosdiuaiousdhoiasd',
                    image: 'https://firebasestorage.googleapis.com/v0/b/sarc-bits.appspot.com/o/post_pics%2FZ2buD1561358348037home2_2x.png?alt=media&token=b5060f91-65da-47e3-8a68-22021e4b9144',
                    title: 'Some Title',
                    description: 'Some Description',
                    stars: [],
                    bucket: []
                },
                {
                    id: 'aosdiuaiousdhoiasd',
                    image: 'https://firebasestorage.googleapis.com/v0/b/sarc-bits.appspot.com/o/post_pics%2FZ2buD1561358348037home2_2x.png?alt=media&token=b5060f91-65da-47e3-8a68-22021e4b9144',
                    title: 'Some Title',
                    description: 'Some Description',
                    stars: [],
                    bucket: []
                },
                {
                    id: 'aosdiuaiousdhoiasd',
                    image: 'https://firebasestorage.googleapis.com/v0/b/sarc-bits.appspot.com/o/post_pics%2FZ2buD1561358348037home2_2x.png?alt=media&token=b5060f91-65da-47e3-8a68-22021e4b9144',
                    title: 'Some Title',
                    description: 'Some Description',
                    stars: [],
                    bucket: []
                },
                {
                    id: 'aosdiuaiousdhoiasd',
                    image: 'https://firebasestorage.googleapis.com/v0/b/sarc-bits.appspot.com/o/post_pics%2FZ2buD1561358348037home2_2x.png?alt=media&token=b5060f91-65da-47e3-8a68-22021e4b9144',
                    title: 'Some Title',
                    description: 'Some Description',
                    stars: [],
                    bucket: []
                },
                
            ]
        }
    },
    mounted: function () {
        this.initTextAutoSetHeight()
        this.getUserId()
    },
    components: {
        navbar
    },
    methods: {
        getUserId () {
            this.$http.headers.common['Authorization'] = 'Bearer ' +  localStorage.getItem('auth_token')
            var vm = this
            this.$http.get('https://sarc-bphc-backend.herokuapp.com/api/auth').then( resp => {
                if (resp.body.authdata.user.username.length) {
                    vm.userid = resp.body.authdata.user.username
                }else {
                    alert('no user found')
                }
            })
        },
        observe(el, event, handler) {
            if (window.attachEvent) {
                el.attachEvent("on" + event, handler)
            } else {
                el.addEventListener(event, handler, false)
            }
        },
        initTextAutoSetHeight() {
            var text = this.$refs.body_text_ref
            function resize() {
                text.style.height = "auto";
                text.style.height = text.scrollHeight + "px"
            }
            /* 0-timeout to get the already changed text */
            function delayedResize() {
                window.setTimeout(resize, 0)
            }
            this.observe(text, "change", resize)
            this.observe(text, "cut", delayedResize)
            this.observe(text, "paste", delayedResize)
            this.observe(text, "drop", delayedResize)
            this.observe(text, "keydown", delayedResize)

            text.focus()
            text.select()
            resize()
        },
        decOpacity () {
            this.showModal = true;
            // this.$refs.sidebar.style.opacity = '0.1'
            // this.$refs.main.style.opacity = '0.1'
        },
        incOpacity () {
            this.showModal = false;
            // this.$refs.sidebar.style.opacity = '1'
            // this.$refs.main.style.opacity = '1'
        },
    },
}
</script>