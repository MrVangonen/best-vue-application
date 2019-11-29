<template>
  <div id="app" class="root-page-wrapper">
    <Header class="header" v-bind:msg="msg" />
    <Menu class="menu" v-if="showMenu" />
    <router-view class="content" />
    <Footer class="footer" />
  </div>
</template>

<script>
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
      msg: "Simple message to Header",
      showMenu: true
    };
  }
};
</script>

<style lang="scss">
.root-page-wrapper {
  height: 100%;
  display: grid;
  grid-gap: 3px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 2 0vh 100% 20vh; 
}

.header {
  grid-column: span 12;
}

.menu {
  grid-column: span 4;
}

.content {
  grid-column: span 8;
}

.footer {
  grid-column: span 12;
}

@media screen and (max-width: 640px) {
  .menu {
    display: none;
  }

  .content {
    grid-column: span 12;
  }

  .header-burger-button {
    display: inline-block!important;
    margin-right: 20px;
  }
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
