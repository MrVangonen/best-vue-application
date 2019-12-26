<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/images/lang.jpg">
        <h1 class="home__title">
            Super Schedule
        </h1>
            <ScheduleTable class="scedule-table"/>
        <!-- <li v-for="item in items" :key= "item"> {{item.text}} </li> --> 
    </div>
</template>

<script>
import ScheduleTable from "@/components/ScheduleTable.vue";
export default {
    name: "home",
    components: { ScheduleTable },
    data() {
        return {
        }
    },
    methods: {
        showHideMenu() {
            // Todo:
            // надо по клику по бургер-кнопке из header показывать и прятать menu 
        }
    }
};
</script>

<style scoped lang="scss">
@import "@/content/scss/_variables.scss";
.home__title {
    margin-top: 50px;
}
</style>
