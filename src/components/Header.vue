<template>
    <div>
        <button class="header-burger-button">
            <i class="fas fa-bars"></i>
        </button>
        <h1>Личный Кабинет</h1>
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
    background-color: $dark-color;
    color: #fff;
    display: flex;
    height: $toolbar-height;
    align-items: center;
    padding: 0 20px;
}
.header-burger-button {
    display: none;
    margin-right: 20px;
}
</style>
