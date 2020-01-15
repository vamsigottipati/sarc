<template>
    <div class="toolbar">
        <p class="link" @click="$router.push('/')">Home</p>
        <p class="link" @click="$router.push('/ciie')">CIIE</p>
        <p class="link" @click="$router.push('/merch')">Merchandise</p>
        <p class="link" @click="$router.push('/events')">Events</p>
        <p class="link" @click="$router.push('/admin')">Admin</p>
        <p class="link" @click="$router.push('/contact')">Contact</p>
    </div>
</template>

<script>

export default {
    name: 'toolbar'
}

</script>

<style scoped>

.toolbar {
    background: #EA4360;
    position: fixed;
    z-index: 90;
    top: 80px;
    left: 0px;
    height: 60px;
    width: 100vw;
    display: flex; flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
}
.link{
    all: unset;
    flex: 1;
    color: white;
    text-align: center;
    cursor: pointer;
}

</style>