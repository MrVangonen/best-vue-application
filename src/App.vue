<template>
    <v-app>
        <div id="app" class="root-page-wrapper">
            <Header class="header" v-bind:msg="msg" />
            <div class="my-container">
                <Menu id="menu" class="menu" />
                <router-view class="content" />
            </div>
            <Footer class="footer" />
        </div>
    </v-app>
</template>

<script>
// import "@/content/base.css";
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
import Header from "@/components/Header.vue";

export default {
    name: "app",
    components: {
        Footer,
        Menu,
        Header
    },
    data() {
        return {
            msg: "Simple message to Header"
        };
    },
    methods: {
        showHideMenu() {
            // Todo:
            // надо по клику по бургер-кнопке из header показывать и прятать menu
        }
    }
};
</script>

<style lang="scss">
@import "@/content/scss/_variables.scss";

.my-container {
    padding-top: $toolbar-height;
    min-height: 100vh;
}

.header {
    position: fixed;
    width: 100%;
}

.menu {
    position: fixed;
    width: $menu-width;
    height: 100%;

    &_show {
        display: initial;
    }

    &_hide {
        display: none;
    }
}

.content {
    margin-left: $menu-width;
    padding: 10px 20px;

    &_show {
        display: initial;
    }

    &_hide {
        display: none;
    }
}

.footer {
    width: 100%;
    position: absolute;
}

@media screen and (max-width: 640px) {
    .menu {
        display: none;
    }

    .content {
        margin-left: 0;
    }

    .header-burger-button {
        display: inline-block !important;
    }
}

#app {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
    text-align: center;

    a {
        color: initial;
        text-decoration: none;
    }

    a:hover {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
}
</style>
