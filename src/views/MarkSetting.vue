<template>
    <div style="flex:1; flex-direction:column;" class="d-flex">
        <div class="d-flex pa-4" style="height:54px;align-items: center;">
            <div class="mr-4 font-weight-medium">標記設定 </div>
            <v-divider class="mr-4" vertical></v-divider>
            <v-breadcrumbs :items="items" class="pa-0">
                <template v-slot:divider>
                   —
                </template>
            </v-breadcrumbs>
            <v-spacer></v-spacer>
            <v-btn depressed class="btn-back" @click="$router.go(-1)">返回</v-btn>
            <v-btn depressed class="ml-4 btn-depressed" @click="addMarkConfigList">更新標記設定</v-btn>
        </div>
        <div style="background: #FAFCFE;overflow: scroll; flex:1; flex-direction:column;" class="pa-4 d-flex">
            <div class="mb-4" style="font-weight:700; font-size:20px">{{project.name}}</div>
            <div class="d-flex">
                <v-card elevation="0" class="pa-4 mr-2" style="flex:1" v-if="markConfigList.allQuestions">
                    <div class="d-flex align-center">
                        <v-card-title>選擇變相</v-card-title>
                        <v-spacer></v-spacer>
                        <v-btn depressed class="btn-depressed" @click="markSettingDialog=true">建立自訂義</v-btn>
                    </div>                        
                    <v-card elevation="0" class="mt-4">
                        <v-card-subtitle style="font-weight:700">類別變項</v-card-subtitle>
                        <v-card elevation="0" style="background: #FAFCFE;">
                            <v-chip
                            @click="addCategoricalVariable(value)"
                            class="ma-2"
                            label
                            size="x-large"
                            v-for="value in markConfigList.allQuestions.categoricalVariableList" :key="value.id"
                            >
                            {{value.issue}}
                            </v-chip>
                        </v-card>
                    </v-card>
                    <v-divider class="my-4"></v-divider>
                    <v-card elevation="0">
                        <v-card-subtitle style="font-weight:700">連續變相</v-card-subtitle>
                        <v-card elevation="0" style="background: #FAFCFE;">
                            <v-chip
                            @click="addContinuousVariable(value)"
                            class="ma-2"
                            label
                            size="x-large"
                            v-for="value in markConfigList.allQuestions.continuousVariableList" :key="value.id"
                            >
                            {{value.issue}}
                            </v-chip>
                        </v-card>
                    </v-card>
                </v-card>
                <v-card  elevation="0" style="flex:1" class="ml-2 pa-4">
                    <v-card-title>預覽</v-card-title>
                    <v-card outlined v-for="(item, index) in categoricalVariableList" :key="item.id" class="pa-4 mb-2">
                        <div class="d-flex">
                            {{item.issue}}
                            <v-spacer></v-spacer>
                            <v-btn :disabled="index==0" @click="down(index)" class="mx-1 pa-0 btn-icon__arrow" small depressed>
                                <v-icon dark>
                                    mdi-arrow-up-bold
                                </v-icon>
                            </v-btn>
                            <v-btn @click="top(index)" :disabled="index==test.length-1"  class="mx-1 pa-0 btn-icon__arrow" small depressed>
                                <v-icon dark>
                                    mdi-arrow-down-bold
                                </v-icon>
                            </v-btn>
                            <v-btn class="mx-1 pa-0 btn-icon__pencil" small depressed>
                                <v-icon dark>
                                    mdi-pencil
                                </v-icon>
                            </v-btn>
                           <v-btn @click="deleteItem=true" class="mx-1 pa-0 btn-icon__trash" small depressed>
                                <v-icon dark>
                                    mdi-trash-can
                                </v-icon>
                            </v-btn>
                        </div>
                        <v-radio-group row v-model="radioGroup" v-if="item.unitType == 'radio'" hide-details="true">
                            <v-radio
                                label="是"
                                value="Yes"
                            ></v-radio>
                            <v-radio
                                label="否"
                                value="No"
                            ></v-radio>
                        </v-radio-group>
                        <div class="d-flex" v-if="item.unitType == 'multipleChoice'">
                            <v-checkbox class="mr-2" color="#53BBB2" hide-details v-for="(option, index) in item.options" :key="index" :label="option"></v-checkbox>
                        </div>
                    </v-card>
                    <v-card outlined v-for="(item, index) in continuousVariableList" :key="item.id" class="pa-4 mb-2">
                        <div class="d-flex">
                            {{item.issue}}
                            <v-spacer></v-spacer>
                            <v-btn :disabled="index==0" @click="down(index)" class="mx-1 pa-0 btn-icon__arrow" small depressed>
                                <v-icon dark>
                                    mdi-arrow-up-bold
                                </v-icon>
                            </v-btn>
                            <v-btn @click="top(index)" :disabled="index==test.length-1"  class="mx-1 pa-0 btn-icon__arrow" small depressed>
                                <v-icon dark>
                                    mdi-arrow-down-bold
                                </v-icon>
                            </v-btn>
                            <v-btn class="mx-1 pa-0 btn-icon__pencil" small depressed>
                                <v-icon dark>
                                    mdi-pencil
                                </v-icon>
                            </v-btn>
                           <v-btn @click="deleteItem=true" class="mx-1 pa-0 btn-icon__trash" small depressed>
                                <v-icon dark>
                                    mdi-trash-can
                                </v-icon>
                            </v-btn>
                        </div>
                        <v-textarea
                            v-if="item.type=='textarea'"
                            auto-grow
                            outlined
                            rows="1"
                            row-height="15"
                            hide-details="true"
                            class="mt-4"
                            ></v-textarea>
                        <v-text-field
                            v-if="item.unitType=='text'"
                            outlined
                            hide-details="true"
                            class="mt-4"
                        ></v-text-field>
                    </v-card>
                </v-card>
            </div>
        </div>
        <v-dialog
        v-model="markSettingDialog"
        width="500"
        >
            <v-card>
                <v-card-title class="text-h6">
                    建立自訂義
                    <v-spacer></v-spacer>
                    <span class="body-2 mr-4">加入變項</span>
                    <v-switch v-model="switch1" color="#53BBB2"></v-switch>
                </v-card-title>
                <v-divider />
                <v-card-text class="py-10">
                    <v-row class="mb-4 align-center" no-gutters>
                        <v-col md="4">
                            類型<span style="color:#F1416C" class="font-weight-bold">＊</span>
                        </v-col>
                        <v-col md="8">
                            <v-select
                                v-model="selfType"
                                :items="selfTypeItems"
                                dense
                                outlined
                                hide-details="true"
                                @change="changeSelfType"
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row class="mb-4 align-center" no-gutters>
                    <v-col md="4">
                        題目<span style="color:#F1416C" class="font-weight-bold">＊</span>
                    </v-col>
                    <v-col md="8">
                        <v-text-field
                        outlined
                        dense
                        hide-details="true"
                        placeholder="請填寫名稱"
                    ></v-text-field>
                    </v-col>
                    </v-row>
                    <v-row class="mb-4 align-center" no-gutters>
                    <v-col md="4">
                        樣式<span style="color:#F1416C" class="font-weight-bold">＊</span>
                    </v-col>
                    <v-col md="8">
                        <v-select
                            color="#53BBB2"
                            v-model="pattern"
                            :items="patternItems"
                            dense
                            outlined
                            hide-details="true"
                        ></v-select>
                    </v-col>
                    </v-row>
                    <!-- =============== 多選 ================= -->
                    <template v-if="pattern== '多選'">
                        <v-row v-for="(item, index) of multipleItems" :key="index" class="mb-2 align-center" no-gutters>
                            <template v-if="index==0">
                                <v-col md="4">
                                    選項
                                </v-col>
                                <v-col md="6">
                                    <v-text-field
                                    v-model="item.value"
                                    outlined
                                    dense
                                    hide-details="true"
                                    ></v-text-field>
                                </v-col>
                                <v-col md="2" class="justify-center d-flex">
                                    <v-btn class="pa-0" style="min-wight:30px;color:#53BBB2" color="#E9FCFA" small depressed @click="addMultipleItems">
                                        新增
                                    </v-btn>
                                </v-col>
                            </template>
                            <template v-else>
                                <v-col md="4">
                                </v-col>
                                <v-col md="6">
                                    <v-text-field
                                    v-model="item.value"
                                    outlined
                                    dense
                                    hide-details="true"
                                    ></v-text-field>
                                </v-col>
                                <v-col md="2" class="justify-center d-flex">
                                    <v-btn @click="removeMultipleItems(index)" class="mx-1 pa-0" style="min-wight:30px;color:#F1416C" color="#FFF5F8" small depressed>
                                        <v-icon dark>
                                            mdi-trash-can
                                        </v-icon>
                                    </v-btn>
                                </v-col>
                            </template>
                        </v-row>
                        <v-row class="mt-2 mb-4 align-center" no-gutters>
                            <v-col md="4">
                                說明
                            </v-col>
                            <v-col md="8">
                                <v-textarea
                                auto-grow
                                outlined
                                rows="1"
                                row-height="15"
                                hide-details="true"
                                ></v-textarea>
                            </v-col>
                        </v-row>
                    </template>

                    <!-- =============== 文字欄位 ================= -->
                    <template v-if="pattern== '文字欄位'">
                        <v-row class="mb-4 align-center" no-gutters>
                            <v-col md="4">
                                格式<span style="color:#F1416C" class="font-weight-bold">＊</span>
                            </v-col>
                            <v-col md="8">
                                <v-radio-group row v-model="radioGroup" hide-details="true">
                                    <v-radio
                                        color="#53BBB2"
                                        label="不限"
                                        value="Yes"
                                    ></v-radio>
                                    <v-radio
                                        color="#53BBB2"
                                        label="僅限數字"
                                        value="No"
                                    ></v-radio>
                                </v-radio-group>
                            </v-col>
                        </v-row>
                        <v-row class="mb-4 align-center" no-gutters>
                            <v-col md="4">
                                字數限制
                            </v-col>
                            <v-col md="3">
                                <v-checkbox
                                    v-model="checkbox"
                                    label="限制"
                                    color="#53BBB2"
                                ></v-checkbox>
                            </v-col>
                            <v-col md="5">
                                <v-text-field
                                    v-if="checkbox"
                                    outlined
                                    dense
                                    hide-details="true"
                                    ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row class="mb-4 align-center" no-gutters>
                            <v-col md="4">
                                說明
                            </v-col>
                            <v-col md="8">
                                <v-textarea
                                auto-grow
                                outlined
                                rows="1"
                                row-height="15"
                                hide-details="true"
                                ></v-textarea>
                            </v-col>
                        </v-row>
                    </template>

                    <!-- =============== 日期 ================= -->
                    <template v-if="pattern== '日期'">
                        <v-row class="mb-4 align-center" no-gutters>
                        <v-col md="4">
                            說明
                        </v-col>
                        <v-col md="8">
                            <v-textarea
                            auto-grow
                            outlined
                            rows="1"
                            row-height="15"
                            hide-details="true"
                            ></v-textarea>
                        </v-col>
                        </v-row>
                    </template>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    class="btn-back"
                    depressed
                    @click="markSettingDialog = false"
                >
                    取消
                </v-btn>
                <v-btn

                    depressed
                    class="btn-depressed"
                    @click="markSettingDialog = false"
                >
                    建立
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog
        v-model="deleteItem"
        width="500"
        >
            <v-card>
                <v-card-title class="text-h6">
                立即刪除
                </v-card-title>
                <v-divider />
                <v-card-text class="py-10">
                    <div class="font-weight-bold">提醒您！</div>
                    <div>刪除此變相之後，無法再復原，必須重新建立</div>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="#F5F8FA"
                    style="color:#7E8299"
                    depressed
                    @click="deleteItem = false"
                >
                    取消
                </v-btn>
                <v-btn

                    depressed
                    color="#F1416C"
                    style="color:#FFFFFF"
                    @click="clickDeleteItem"
                >
                    刪除
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
    
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            projectId: "",
            project: {},
            multipleItems: [{
                value: ""
            }],
            checkbox: true,
            switch1: true,
            selfType: "類別變項",
            selfTypeItems: [{
                text: "類別變項"
            }, {
                text: "連續變項"
            }],
            pattern: "單選",
            patternItems:[{
                text: "單選"
            },
            {
                text: "多選"
            }],
            markSettingDialog: false,
            deleteItem: false,
            radioGroup: "",
            items: [
                {
                text: '專案列表',
                disabled: false,
                to: "/projects",
                exact: true
                },
                {
                text: '標記設定',
                disabled: true
                },
            ],
            test: [{
                type: 'radio',
                value: '2'
            }, {
                type: 'textarea',
                value: '2'
            }, {
                type: 'field',
                value: '2'
            }],
            selectedCategoricalVariableList:{},
            selectedContinuousVariableList:{},
            categoricalVariableList:[],
            continuousVariableList: []
        }
    },
    computed: {
      ...mapGetters({
        markConfigList: "markConfigList",
      }),
    },
    async mounted() {
      this.projectId = this.$route.params.projectId
      this.project = {}
      const markConfigParmas = {}
      if (this.projectId) {
        markConfigParmas['projectId'] = this.projectId
        this.project = await this.$store.dispatch("getProject", this.projectId);
      }
      await this.$store.dispatch("getMarkConfigList", markConfigParmas);
    },
    watch: {
        markConfigList(data) {
            this.continuousVariableList = data.selectQuestions.continuousVariableList
            this.categoricalVariableList = data.selectQuestions.categoricalVariableList
        }
    },
    methods: {
        clickDeleteItem() {
            this.deleteItem = false
        },
        addMultipleItems() {
            this.multipleItems.push({value: ""})
        },
        removeMultipleItems(index) {
            this.multipleItems.splice(index, 1);
        },
        down(index) {
            const tmp = this.test[index]
            this.test.splice(index, 1)
            this.test.splice(index-1, 0, tmp)
        },
        top(index) {
            const tmp = this.test[index]
            this.test.splice(index, 1)
            this.test.splice(index+1, 0, tmp)
        },
        changeSelfType() {
            if(this.selfType == "類別變項") {
                this.pattern = "多選"
                this.patternItems = [{
                    text: "多選"
                }]
            }
            if (this.selfType == "連續變項") {
                this.pattern = "文字欄位"
                this.patternItems = [{
                    text: "文字欄位"
                }, {
                    text: "日期"
                }]
            }
        },
        addCategoricalVariable(item) {
            for(const markConfig of this.categoricalVariableList) {
                if (markConfig.questionId == item.id) return
            }
            this.categoricalVariableList.push({
                ...item,
                questionId: item.id
            })
            Object.assign(this.selectedCategoricalVariableList, {[item.id] : {
                ...item,
                questionId: item.id
            }})
        },
        addContinuousVariable(item) {
            for(const markConfig of this.continuousVariableList) {
                if (markConfig.questionId == item.id) return
            }
            this.continuousVariableList.push({
                ...item,
                questionId: item.id
            })
            Object.assign(this.selectedContinuousVariableList, {[item.id] : {
                ...item,
                questionId: item.id
            }})
        },
        async addMarkConfigList() {
            console.log( this.selectedCategoricalVariableList)
            for (const [key, value] of Object.entries(this.selectedCategoricalVariableList)) {
                console.log(key)
                await this.$store.dispatch("addMarkConfig", {
                    ...value,
                    projectId: this.projectId
                });
            }
            for (const [key, value] of Object.entries(this.selectedContinuousVariableList)) {
                console.log(key)
                await this.$store.dispatch("addMarkConfig", {
                    ...value,
                    projectId: this.projectId
                });
            }

        }
    }
}
</script>