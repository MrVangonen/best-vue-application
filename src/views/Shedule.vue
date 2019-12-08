<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <h1 class="home__title">
            Lorem Text Title
        </h1>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            impedit vel sed id nesciunt cum distinctio explicabo? Praesentium
            consectetur provident officia voluptatem, architecto in numquam
            eaque ipsam porro laboriosam voluptates.
        </p>
        <p class="home__next">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
            laboriosam similique porro accusamus sit suscipit maxime voluptatum,
            atque illo dolorem esse fugit necessitatibus nesciunt vero minima ex
            voluptatem magni obcaecati Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Impedit labore sunt ipsa consectetur ex neque
            voluptatibus autem itaque magnam, at ea repudiandae deserunt,
            possimus numquam odio totam accusantium! Tempora, quis. 
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
            laboriosam similique porro accusamus sit suscipit maxime voluptatum,
            atque illo dolorem esse fugit necessitatibus nesciunt vero minima ex
            voluptatem magni obcaecati Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Impedit labore sunt ipsa consectetur ex neque
            voluptatibus autem itaque magnam, at ea repudiandae deserunt,
            possimus numquam odio totam accusantium! Tempora, quis. 
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
            laboriosam similique porro accusamus sit suscipit maxime voluptatum,
            atque illo dolorem esse fugit necessitatibus nesciunt vero minima ex
            voluptatem magni obcaecati Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Impedit labore sunt ipsa consectetur ex neque
            voluptatibus autem itaque magnam, at ea repudiandae deserunt,
            possimus numquam odio totam accusantium! Tempora, quis. 
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
            laboriosam similique porro accusamus sit suscipit maxime voluptatum,
            atque illo dolorem esse fugit necessitatibus nesciunt vero minima ex
            voluptatem magni obcaecati Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Impedit labore sunt ipsa consectetur ex neque
            voluptatibus autem itaque magnam, at ea repudiandae deserunt,
            possimus numquam odio totam accusantium! Tempora, quis. 
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
            laboriosam similique porro accusamus sit suscipit maxime voluptatum,
            atque illo dolorem esse fugit necessitatibus nesciunt vero minima ex
            voluptatem magni obcaecati Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Impedit labore sunt ipsa consectetur ex neque
            voluptatibus autem itaque magnam, at ea repudiandae deserunt,
            possimus numquam odio totam accusantium! Tempora, quis. 
        </p>
    </div>
</template>

<script>
export default {
    name: "home",
    components: {}
};
</script>

<style scoped lang="scss">
@import "@/content/scss/_variables.scss";

.home {
    background-color: #fff;
    color: $dark-color;

    &__title {
        color: $main-font-color;
        font-size: 24px;
        padding-bottom: 10px;
    }

    &__next {
        color: $usual-font-color;
    }
}
</style>
