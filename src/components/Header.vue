<template>
    <div>
        <button class="header-burger-button">
          <i class="fas fa-bars"></i>
        </button>
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
    name: "Header",
    props: {
        msg: String
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
    background-color: #42b983;
    box-shadow: 0 1px 0 rgba(12, 13, 14, 0.1), 0 1px 6px rgba(59, 64, 69, 0.1);
    display: flex;
}
.header-burger-button {
  display: none;
}
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
