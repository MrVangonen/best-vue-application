<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            impedit vel sed id nesciunt cum distinctio explicabo? Praesentium
            consectetur provident officia voluptatem, architecto in numquam
            eaque ipsam porro laboriosam voluptates.
        </p>
        <p class="home_next">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            impedit vel sed id nesciunt cum distinctio explicabo? Praesentium
            consectetur provident officia voluptatem, architecto in numquam
            eaque ipsam porro laboriosam voluptates.
        </p>
    </div>
</template>

<script>
export default {
    name: "home",
    components: {}
};
</script>

<style lang="scss">
.home {
    background-color: black;
    color: white;

    &_next {
        color: aquamarine;
    }
}
</style>
