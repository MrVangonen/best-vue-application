<template>
    <div id="nav">
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
@import "@/content/scss/_variables.scss";

.menu {
    background-color: #fff;
    color: $usual-font-color;
}

.list-group {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 20px;

    &__item {
        padding: 30px 20px;
        background-color: $light-color;
        text-decoration: none;
        color: #fff;

        &.router-link-exact-active {
            background-color: $highlight-color;
            color: $usual-font-color;
        }

        &:hover {
            background-color: $highlight-color;
        }

        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }
}
</style>
