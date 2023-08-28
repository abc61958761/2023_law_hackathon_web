<template>
    <div class="d-flex" style="flex-direction:column; flex:1">
        <div class="d-flex pa-4" style="height:54px;align-items: center;">
            <div class="mr-4 font-weight-medium">判決書總覽 </div>
            <v-divider class="mr-4" vertical></v-divider>
            <v-breadcrumbs :items="breadcrumbItems" class="pa-0">
                <template v-slot:divider>
                   —
                </template>
            </v-breadcrumbs>
            <v-spacer></v-spacer>
            <v-btn depressed class="btn-back" @click="$router.go(-1)">返回</v-btn>
        </div>
        <div style="background: #FAFCFE;overflow: scroll; flex:1; flex-direction:column;" class="pa-4 d-flex">
            <h2 class="mb-4">判決書總覽</h2>
            <div style="border-radius:12px; background: #ffffff" class="px-8 py-5 mb-4">
                <div class="d-flex align-center mb-4">
                    <h3 class="mr-4 ">標記狀況</h3>
                    <span>判決書總數：200</span>
                </div>
                <div class="d-flex align-center mb-4 justify-space-between">
                    <div style="width: 50%; border:1px solid #E4E6EF; border-radius:4px" class="d-flex align-center pa-4 mr-2">
                        <div style="width: 50%" class="d-flex justify-center">
                            <v-progress-circular
                                :rotate="-90"
                                :size="100"
                                :width="15"
                                value="30"
                                color="teal"
                                >
                                30
                            </v-progress-circular>
                        </div>
                        <div style="width: 50%">
                            <div class="d-flex align-center">
                                <span style="color:#5E6278" class="mr-4">完成率</span>
                                <h1>25%</h1>
                            </div>
                            <div>
                                <div class="d-flex align-center">
                                    <div class="mr-2" style="height:3px;width:10px; background:#6291F4; border-radius: 10px;"></div>
                                    <span style="color:#B5B5C3" class="mr-4">已完成</span>
                                    <h2 style="color:#5E6278">50</h2>
                                </div>
                                <div class="d-flex align-center">
                                    <div class="mr-2" style="height:3px;width:10px; background:#E4E6EF; border-radius: 10px;"></div>
                                    <span style="color:#B5B5C3" class="mr-4">未完成</span>
                                    <h2 style="color:#5E6278">150</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="width: 50%; border:1px solid #E4E6EF; border-radius:4px" class="d-flex align-center pa-4 ml-2">
                        <div style="width: 50%" class="d-flex justify-center">
                            <v-progress-circular
                                :rotate="-90"
                                :size="100"
                                :width="15"
                                value="30"
                                color="#FFCC67"
                                >
                                30
                            </v-progress-circular>
                        </div>
                        <div style="width: 50%">
                            <div class="d-flex align-center">
                                <span style="color:#5E6278" class="mr-4">完成率</span>
                                <h1>25%</h1>
                            </div>
                            <div>
                                <div class="d-flex align-center">
                                    <div class="mr-2" style="height:3px;width:10px; background:#FFCC67; border-radius: 10px;"></div>
                                    <span style="color:#B5B5C3" class="mr-4">已完成</span>
                                    <h2 style="color:#5E6278">50</h2>
                                </div>
                                <div class="d-flex align-center">
                                    <div class="mr-2" style="height:3px;width:10px; background:#E4E6EF; border-radius: 10px;"></div>
                                    <span style="color:#B5B5C3" class="mr-4">未完成</span>
                                    <h2 style="color:#5E6278">150</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="border-radius:12px; background: #ffffff" class="px-8 py-5">
                <div class="d-flex mb-4">
                    <h3>列表</h3>
                    <v-spacer></v-spacer>
                    <v-btn depressed class="btn-depressed">匯出Excel表單</v-btn>
                </div>
                <div style="background: #F5F8FA; border-radius:4px" class="d-flex align-center pa-4 mb-4">
                    <span class="font-weight-medium mr-4">關鍵字</span>
                    <v-text-field placeholder="請輸入判決書名稱" outlined dense hide-details="true" class="mr-4"></v-text-field>
                    <v-spacer></v-spacer>
                    <v-btn depressed class="mr-4 btn-depressed">搜尋</v-btn>
                    <v-btn outlined class="btn-outlined">清除</v-btn>
                </div>
                <div>
                    <v-switch
                    color="#81C828"
                    label="僅顯示「已檢查」之判決書"
                    ></v-switch>
                </div>
                <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :page.sync="page"
                    hide-default-footer
                    class="elevation-0 project_table"
                    @page-count="pageCount = $event"
                >
                    <template v-slot:item.schedule>
                        <v-progress-linear value="15"></v-progress-linear>
                    </template>
                    <template v-slot:item.check>
                        <v-icon color="#50CD89">mdi-check</v-icon>
                    </template>
                    <template v-slot:item.name="{item}">
                        <router-link to="/" @click.native="goVerdictDetail(item)">{{item.name}}</router-link>
                    </template>
                    <template v-slot:item.delete>
                        <v-btn @click="deleteItem=true" class="mx-1 pa-0 btn-icon__trash" small depressed>
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
                        color="#53BBB2"
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
            projectId: 1,
            pageCount: 10,
            page: 1,
            dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
            date: "",
            menu2: false,
            headers: [{
                text: '名稱',
                align: 'start',
                sortable: false,
                value: 'name'
            },
            { text: '進度', value: 'schedule' },
            { text: '檢查', value: 'check' },
            { text: '標記者', value: 'markers' },
            { text: '標記時間', value: 'markTime'},
            { text: '刪除', value: 'delete',align: 'center' }],
            desserts: [{
                id: 1,
                name: "法務部 法律字第10603504060號",
                schedule: 100,
                check: false,
                markers: ["test1"],
                markTime: "2021-11-11"
            }],
            breadcrumbItems: [{
                text: '我的專案',
                disabled: false,
                to: "/projects",
                exact: true
            }, {
                text: '判決書總覽',
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
        goVerdictDetail(item) {
            this.$router.push(`/projects/${item.id}/verdicts/${item.id}`)
        }
    }
}
</script>
<style lang="scss">
.project_table {
    .v-data-table-header {
        background: #EFF4FF;
        color: #3F4254;
    }
}
</style>>