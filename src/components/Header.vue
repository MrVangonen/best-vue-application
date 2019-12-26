<template>
    <div>
        <button class="header-burger-button">
            <i class="fas fa-bars"></i>
        </button>
        <a class="logo-container d-flex flex-row align-center" title="Личный кабинет" href="https://www.petrsu.ru" target="_blank">
            <img width="30" height="30" class="mr-3" src="../assets/images/petrsu_logo_blue.png" />
            <h2>Личный Кабинет Преподавателя ПетрГУ</h2>
        </a>
    </div>
</template>

<script>
export default {
    name: "Header",
    props: {
        msg: String
    },
    data() {
        return {
            showBurgerButton: true
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/content/scss/_variables.scss";

.header {
    background-color: #ffffff;
    color: $dark-color;
    display: flex;
    height: $toolbar-height;
    align-items: center;
    padding: 0 20px;
    border-bottom: 2px solid $dark-color;
}
.header-burger-button {
    display: none;
    margin-right: 20px;
}
</style>
