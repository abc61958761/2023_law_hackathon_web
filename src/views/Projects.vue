<template>
    <div style="flex:1; flex-direction:column;" class="d-flex">
        <div class="d-flex pa-4" style="height:54px;align-items: center;">
            <div class="mr-4 font-weight-medium">我的專案 </div>
            <v-divider class="mr-4" vertical></v-divider>
            <v-breadcrumbs :items="breadcrumbItems" class="pa-0">
                <template v-slot:divider>
                   —
                </template>
            </v-breadcrumbs>
            <v-spacer></v-spacer>
            <v-btn depressed class="btn-depressed__light-grayish-blue">已結束專案</v-btn>
            <v-btn depressed class="ml-4 btn-depressed" @click="createProject">建立專案</v-btn>
        </div>
        <div style="background: #FAFCFE;overflow: scroll; flex:1; flex-direction:column;" class="pa-4 d-flex">
            <h2 class="mb-4">我的專案</h2>
            <div style="border-radius:12px; background: #ffffff" class="px-8 py-5">
                <div style="background: #F5F8FA; border-radius:4px" class="d-flex align-center pa-4 mb-4">
                    <span class="font-weight-medium mr-4">關鍵字</span>
                    <v-text-field placeholder="請輸入判決書名稱" outlined dense hide-details="true" class="mr-4"></v-text-field>
                    <v-menu
                        v-model="menu2"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="auto"
                        >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                hide-details="true"
                                dense
                                outlined
                                placeholder="起始時間"
                                v-model="computedDateFormatted"
                                v-bind="attrs"
                                v-on="on"
                                append-icon="mdi-calendar"
                            ></v-text-field>
                        </template>
                        <v-date-picker v-model="date" no-title @input="menu2 = false"></v-date-picker>
                    </v-menu>
                    <span class="mx-2">
                    至
                    </span>
                    <v-menu v-model="menu2"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="auto"
                        >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                hide-details="true"
                                dense
                                outlined
                                placeholder="結束時間"
                                v-model="computedDateFormatted"
                                v-bind="attrs"
                                v-on="on"
                                append-icon="mdi-calendar"
                            ></v-text-field>
                        </template>
                        <v-date-picker v-model="date" no-title @input="menu2 = false"></v-date-picker>
                    </v-menu>
                    <v-spacer></v-spacer>
                    <v-btn depressed class="mr-4 btn-depressed">搜尋</v-btn>
                    <v-btn outlined class="btn-outlined">清除</v-btn>
                </div>
                <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :page.sync="page"
                    hide-default-footer
                    class="elevation-0 project_table"
                    @page-count="pageCount = $event"
                >
                    <template v-slot:item.isPublic="{item}">
                        <div>
                            <v-switch color="#53BBB2" v-model="item.isPublic" hide-details="true"></v-switch>
                        </div>
                    </template>
                    <template v-slot:item.actions="{item}">
                        <v-btn outlined class="mr-2 btn-outlined__grayish-blue" @click="markSetting(item)">標記設定</v-btn>
                        <v-btn depressed class="btn-depressed__grayish-blue" @click="goVerdicts(item)">查看標記狀況</v-btn>
                    </template>
                    <template v-slot:item.edit="{item}">
                        <v-btn style="color:#F18B41" color="#FFF2E3" depressed @click="goEditProject(item)">
                            專案設定
                        </v-btn>
                    </template>
                    <template v-slot:item.delete>
                        <v-btn @click="deleteItem=true" class="mx-1 pa-0" style="min-wight:30px;color:#F1416C" color="#FFF5F8" small depressed>
                            <v-icon dark>
                                mdi-trash-can
                            </v-icon>
                        </v-btn>
                    </template>
                </v-data-table>
                <div class="d-flex mt-4 align-center">
                    <span>Showing 1 to 10 of 50 entries</span>
                    <v-spacer></v-spacer>
                    <v-pagination
                        v-model="page"
                        :length="pageCount"
                    ></v-pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: vm => ({
            pageCount: 10,
            page: 1,
            dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
            date: "",
            menu2: false,
            headers: [
            { text: '公開', value: 'isPublic', class: 'my-header-style' },
            {
                text: '專案名稱',
                align: 'start',
                sortable: false,
                value: 'name',
                class: 'my-header-style'
            },
            { text: '起始時間', value: 'startTime', class: 'my-header-style' },
            { text: '結束時間', value: 'endTime', class: 'my-header-style' },
            { text: '參與人員', value: 'joinMembers', class: 'my-header-style' },
            { text: '操作', value: 'actions' ,align: 'center', class: 'my-header-style'},
            { text: '編輯', value: 'edit',align: 'center', class: 'my-header-style' },
            { text: '刪除', value: 'delete',align: 'center' ,class: 'my-header-style'}],
            desserts: [{
                isPublic: true,
                id: 1,
                name: "test",
                startTime: "2021-11-11",
                endTime: "2021-11-12",
                joinMembers: ["test1"]
            },{
                isPublic: false,
                id: 2,
                name: "test",
                startTime: "2021-11-11",
                endTime: "2021-11-12",
                joinMembers: ["test1"]
            },{
                isPublic: true,
                id: 3,
                name: "test",
                startTime: "2021-11-11",
                endTime: "2021-11-12",
                joinMembers: ["test1"]
            }],
            breadcrumbItems: [{
                text: '我的專案',
                disabled: true
            }]
        }
    ),
    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },
    watch: {
      date () {
        this.dateFormatted = this.formatDate(this.date)
      },
    },
    methods: {
        markSetting(item) {
            this.$router.push(`/mark-setting/${item.id}`)
        },
        goVerdicts(item) {
            this.$router.push(`/projects/${item.id}/verdicts`)
        },
        formatDate (date) {
            if (!date) return null

            const [year, month, day] = date.split('-')
            return `${year}/${month}/${day}`
        },
        parseDate (date) {
            if (!date) return null

            const [month, day, year] = date.split('/')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
        createProject() {
            this.$router.push(`/create-project`)
        },
        goEditProject(item) {
            console.log(item)
            this.$router.push(`/projects/${item.id}/edit`)
        }
    }
}
</script>
<style lang="scss">
.my-header-style {
    background: #E9FCFA;
    color: #3F4254;
}

</style>