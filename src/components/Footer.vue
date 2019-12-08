<template>
    <div>
        <div class="wrapper">
            <div class="left-side">
                <span> CopyRight 2019</span>
            </div>
            <div class="right-side">
                <a href="https://petrsu.ru" target="_blank">petrsu</a>
                <span>Subscribe</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/content/scss/_variables.scss";

.wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $dark-color;
    color: #fff;
    padding: 10px 20px;
}
.right-side {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > :not(:last-child) {
        margin-bottom: 10px;
    }
}
</style>
