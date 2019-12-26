<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="disciplines"
            :items-per-page="5"
            class="elevation-1"
        >
        </v-data-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            headers: [
                {
                    text: "Дисциплины",
                    align: "left",
                    sortable: false,
                    value: "discipline"
                },
                {
                    text: "Группы",
                    value: "groop",
                    width: "100px"
                },
                {
                    text: "Форма обучения",
                    value: "learningForm",
                    width: "150px"
                },
                {
                    text: "Семестр",
                    value: "semester",
                    width: "100px"
                },
                {
                    text: "Институт",
                    value: "institution"
                },
                {
                    text: "Направление",
                    value: "direction",
                    width: "150px"
                },
                {
                    text: "Часов лекций",
                    value: "lectionsHours"
                },
                {
                    text: "Часов практик",
                    value: "practicesHoures"
                },
                {
                    text: "Часов лабораторных",
                    value: "labsHours"
                }
            ],
            disciplines: [
                {
                    discipline: "Теория игр",
                    groop: 205,
                    learningForm: "Очная",
                    semester: 2,
                    institution:
                        "ИНСТИТУТ МАТЕМАТИКИ И ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ",
                    direction: "ИСИТ",
                    lectionsHours: 200,
                    practicesHoures: 120,
                    labsHours: 50
                },
                {
                    discipline: "Мемология",
                    groop: 144,
                    learningForm: "Зачная + Очная",
                    semester: 1,
                    institution:
                        "ИНСТИТУТ МАТЕМАТИКИ И ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ",
                    direction: "ИСИТ",
                    lectionsHours: 120,
                    practicesHoures: 300,
                    labsHours: 50
                },
                {
                    discipline: "Просто о таблицах",
                    groop: 908,
                    learningForm: "Очная",
                    semester: 1,
                    institution: "Медицинский институт",
                    direction: "Лечебное дело",
                    lectionsHours: 10,
                    practicesHoures: 15,
                    labsHours: 3
                },
                {
                    discipline: "Таблетки",
                    groop: 909,
                    learningForm: "Очная",
                    semester: 1,
                    institution: "Медицинский институт",
                    direction: "Фармация",
                    lectionsHours: 400,
                    practicesHoures: 50,
                    labsHours: 200
                },
                {
                    discipline: "Кардио",
                    groop: 909,
                    learningForm: "Очная",
                    semester: 1,
                    institution: "Медицинский институт",
                    direction: "Педиатрия",
                    lectionsHours: 199,
                    practicesHoures: 0,
                    labsHours: 0
                },
                {
                    discipline: "Кардио",
                    groop: 909,
                    learningForm: "Очная",
                    semester: 1,
                    institution: "Медицинский институт",
                    direction: "Педиатрия",
                    lectionsHours: 199,
                    practicesHoures: 0,
                    labsHours: 0
                }
            ]
        };
    }
};
</script>

<style lang="scss">
.table-cell {
    width: 1225px;
}
</style>
