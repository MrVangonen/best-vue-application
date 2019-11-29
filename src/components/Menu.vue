<template>
    <div id="nav" class="wrapper">
        <div class="list-group">
            <router-link class="list-group__item" to="/">Shedule</router-link>
            <router-link class="list-group__item" to="/students"
                >Students</router-link
            >
            <router-link class="list-group__item" to="/about"
                >About</router-link
            >
        </div>
    </div>
</template>

<script>
export default {
    name: "Menu",
    props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// .wrapper{
//     position: fixed;
//     padding: 20px 20px;
//     width: 285px;
//     top: 50px;
//     height: calc(100% - 50px);
//     overflow-y: auto;
//     -webkit-overflow-scrolling: touch;
//     z-index: 999;
//     background-color: #f2f2f2;
// }

.list-group {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 20px;

    &__item {
        padding: 30px 20px;
        background-color: white;
        text-decoration: none;
        color: black;

        &.router-link-exact-active {
            background-color: #333;
            color: #42b983;
        }

        &:hover {
            background-color: #333;
            color: #fff;
        }

        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }
}

.wrapper {
    background-color: orange;
}

h3 {
    margin: 40px 0 0;
}
</style>
