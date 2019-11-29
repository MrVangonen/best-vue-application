<template>
  <div class="wrapper">
    <div class="wrapper__left">
      <div class="wrapper__static-text">
        <span class="d-links" data-b="24">
          <span class="d-link deco-link d-links__toggle">
            Подписаться
            <span
              class="d-icon deco-icon d-icon_arrow-up d-icon_rotate-upside-down d-links__toggle-icon"
            ></span>
          </span>
        </span>
      </div>
    </div>
    <div class="wrapper__right">
      <div class="wrapper__static-text">
        <div class="d-lang-switcher" data-b="25">
          <div class="d-select deco-button d-select_type_links d-select_size_S" data-b="362">
            <div class="d-select__inner deco-button-stylable">
              <span class="d-select__inner-item">
                <span
                  class="d-flag d-lang-switcher__current-lang-icon d-flag_size_S d-flag_undefined d-flag_ru"
                ></span>
                <span class="d-select__text">RU</span>
              </span>
              <div class="d-select__button deco-button-simple deco-button">
                <span class="d-icon deco-icon d-icon_dropdown"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper__static-text">
        © 2019&nbsp;
        <a
          href="//yandex.ru/"
          class="d-link deco-link"
          target="_blank"
          rel="noopener"
        >ООО «Яндекс»</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "wrapper"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper {
  padding: 20px 30px;
  display: flex;
  flex-wrap: wrap;
  line-height: 18px;
  background-color: rebeccapurple;
  overflow: hidden;
}

.wrapper__left {
  .wrapper__static-text {
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 15px;
  }
}

.wrapper__right {
      flex-shrink: 0;
    margin-left: auto;
    text-align: right;
  .wrapper__static-text {
    margin-top: -5px;
    margin-left: 20px;
    margin-bottom: 15px;
  }
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
