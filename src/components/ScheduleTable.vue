<template>
  <div class="home">
    <table>
      <thead>
        <th>Название предмета</th>
        <th>Факультет</th>
        <th>Направление</th>
        <th>Курс</th>
        <th>Группа</th>
        <th>№ кабинета</th>
      </thead>
      <tbody>
        <tr v-for="subject in subjects" :key="subject">
          <td>{{subject.subjectName}}</td>
          <td>{{subject.deparment}}</td>
          <td>{{subject.specialization}}</td>
          <td>{{subject.course}}</td>
          <td>{{subject.group}}</td>
          <td>{{subject.room}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "scedule",
  components: {},
  data() {
    return {
      subjects: [
        {
          subjectName: "Высшая математика",
          deparment: "лесоинженерный",
          specialization: "Ландшафтный дизайн и архитектура",
          course: 4,
          group: 22608,
          room: 315
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import "@/content/scss/_variables.scss";
table {
  margin: 50px 10px;
  border: 3px solid $dark-color;
  border-radius: 5px;
}

th,
td {
  width: 15%;
  padding: 5px 20px;
  border: 1px solid $dark-color;
}
</style>