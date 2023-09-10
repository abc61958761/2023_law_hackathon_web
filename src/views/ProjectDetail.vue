<template>
  <div style="flex:1; flex-direction:column;" class="d-flex">
    <div class="d-flex pa-4" style="height:54px;align-items: center;">
      <div class="mr-4 font-weight-medium">專業設定</div>
      <v-divider class="mr-4" vertical></v-divider>
      <v-breadcrumbs :items="breadcrumbItems" class="pa-0">
        <template v-slot:divider>
          —
        </template>
      </v-breadcrumbs>
      <v-spacer></v-spacer>
      <v-btn depressed class="btn-back" @click="$router.go(-1)"
        >返回</v-btn
      >
    </div>
    <div
      style="background: #FAFCFE;overflow: scroll; flex:1; flex-direction:column;"
      class="pa-4 d-flex"
    >
      <h2 class="mb-4" v-if="projectId">更新專案</h2>
      <h2 class="mb-4" v-else>建立新專案</h2>
      
      <div
        style="border-radius:12px; background: #ffffff"
        class="px-8 py-5 mb-4"
      >
        <h3 class="mb-8">專案設定</h3>
        <v-row class="align-center">
          <v-col class="col-1 pa-0">
            <span class="font-weight-medium">專案名稱</span>
          </v-col>
          <v-col class="pa-0">
            <v-text-field
              placeholder="輸入文字內容"
              outlined
              dense
              hide-details="true"
              v-model="projectName"
              class="mr-4"
              color="#53BBB2"
            ></v-text-field>
          </v-col>
          <v-col class="col-1 pa-0">
            <span class="font-weight-medium">專案狀態</span>
          </v-col>
          <v-col class="pa-0">
            <v-radio-group v-model="isPublic" row>
              <v-radio label="公開" value="public" color="#53BBB2"></v-radio>
              <v-radio label="私人" value="private" color="#53BBB2"></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row class="align-center">
          <v-col class="col-1 pa-0">
            <div class="font-weight-medium">標記者</div>
          </v-col>
          <v-col class="pa-0">
            <v-autocomplete
              color="#53BBB2"
              v-model="taggers"
              :items="userList"
              chips
              item-text="username"
              item-value="id"
              multiple
              outlined
              dense
              hide-details="true"
              class="pr-4"
            >
              <template v-slot:selection="data">
                <v-chip
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  close
                  @click="data.select"
                  @click:close="remove(data.item)"
                  class="mb-1"
                >
                  {{ data.item.username }}
                </v-chip>
              </template>
            </v-autocomplete>
          </v-col>
          <v-col class="col-1 pa-0">
            <span class="font-weight-medium">標籤</span>
          </v-col>
          <v-col class="pa-0">
            <v-combobox
              v-model="tags"
              multiple
              chips
              outlined
              dense
              hide-details="true"
              color="#53BBB2"
            >
              <template v-slot:selection="data">
                <v-chip
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  @click:close="removeTag(data.item)"
                  @click="data.select"
                  close
                  class="mb-1"
                >
                  <span class="pr-2">
                    {{ data.item }}
                  </span>
                </v-chip>
              </template>
            </v-combobox>
          </v-col>
        </v-row>
        <!-- <div class="d-flex mt-8">
          <v-spacer></v-spacer>
          <v-btn outlined class="mr-4 btn-outlined">清除</v-btn>
          <v-btn depressed class="btn-depressed" @click="setProjectConfig">確定</v-btn>
        </div> -->
      </div>
      <div style="border-radius:12px; background: #ffffff" class="px-8 py-5">
        <div style="background: #F5F8FA; border-radius:4px" class="pa-4 mb-4">
          <h3>加入判決書</h3>
          <div class="mb-4 px-4">
            <v-row class="align-center">
              <v-col class="col-1 pa-0">
                <span class="font-weight-medium">判決類型</span>
              </v-col>
              <v-col>
                <v-radio-group v-model="judgementType" row>
                  <v-radio label="民事" value="civil"></v-radio>
                  <v-radio label="刑事" value="criminal"></v-radio>
                  <v-radio label="行政" value="administrative"></v-radio>
                  <v-radio label="憲法" value="constitution"></v-radio>
                  <v-radio label="懲戒" value="discipline"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col class="col-1 pa-0">
                <span class="font-weight-medium">裁判時間</span>
              </v-col>
              <v-col class="pa-0">
                <v-row class="align-center">
                  <v-col class="pa-0 pr-1">
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
                      <v-date-picker
                        v-model="date"
                        no-title
                        @input="menu2 = false"
                      ></v-date-picker>
                    </v-menu>
                  </v-col>
                  至
                  <v-col class="pa-0 pl-1">
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
                          placeholder="結束時間"
                          v-model="computedDateFormatted"
                          v-bind="attrs"
                          v-on="on"
                          append-icon="mdi-calendar"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="date"
                        no-title
                        @input="menu2 = false"
                      ></v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row class="align-center">
              <v-col class="col-1 pa-0">
                <span class="font-weight-medium">法院類別</span>
              </v-col>
              <v-col class="pa-0 col-5">
                <v-row class="mr-0 pa-1">
                  <v-col class="pa-0 pr-1">
                    <v-select
                      dense
                      outlined
                      hide-details="true"
                      placeholder="地方法院"
                    ></v-select>
                  </v-col>
                  <v-col class="pa-0">
                    <v-select
                      dense
                      outlined
                      hide-details="true"
                      placeholder="所有區域"
                    ></v-select>
                  </v-col>
                </v-row>
              </v-col>
              <v-col class="col-1 pa-0 pl-3">
                <span class="font-weight-medium">
                    關鍵字
                   
                </span>
                 
              </v-col>
              <v-col class="pa-0 col-5" style="display: contents;">
                <v-text-field
                  placeholder="請輸入判決書名稱"
                  outlined
                  dense
                  hide-details="true"
                  class="mr-1"
                ></v-text-field>
                <v-tooltip bottom >
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon
                        v-bind="attrs"
                        v-on="on"
                        >
                        mdi-information-slab-circle
                        </v-icon>
                    </template>
                    <span v-html="tips"></span>
                </v-tooltip>
              </v-col>
            </v-row>
          </div>
          <div class="d-flex align-center mt-8">
            <v-spacer></v-spacer>
            <v-btn depressed class="mr-4 btn-depressed">搜尋</v-btn>
            <v-btn outlined class="btn-outlined">清除</v-btn>
          </div>
        </div>
        <v-data-table
          v-model="selectedJudgements"
          :headers="headers"
          :items="judgementList"
          :page.sync="page"
          :single-select="singleSelect"
          hide-default-footer
          class="elevation-0 project_table"
          show-select
          @page-count="pageCount = $event"
        >
          <template v-slot:item.name="{ item }">
            <div>{{ item.name }}</div>
          </template>
          <template v-slot:item.judgement="{ item }">
            <span class="two-line-ellipsis">{{ item.judgement }}</span>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-btn
              depressed
              style="background: #A1A5B7;color:#ffffff"
              @click="viewJudgement(item)"
              >查看</v-btn
            >
          </template>
        </v-data-table>
        <div class="d-flex mt-4 align-center">
          <span>Showing 1 to 10 of {{judgementList.length}} entries</span>
          <v-spacer></v-spacer>
          <v-pagination
            color="#53BBB2"
            v-model="page"
            :length="pageCount"
          ></v-pagination>
        </div>
        <div class="d-flex mt-8">
          <v-btn depressed class="mr-4 btn-depressed" @click="setProjectConfig">確定</v-btn>
          <v-btn outlined class="btn-outlined">清除</v-btn>
        </div>
      </div>
    </div>
    <v-dialog v-model="openDialog" width="500">
      <v-card>
        <v-card-text style="white-space: pre;" class="py-10 subtitle-1" v-html="judgementString"> </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  import { mapGetters } from "vuex";

  export default {
    data() {
      const srcs = {
        1: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        2: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        3: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        4: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        5: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
      };
      return {
        projectName: "",
        isPublic: "public",
        tips: "搜尋關鍵字用「空白鍵」或「&」連接代表and，用「+」連接代表or，用「-」<br/>連接在關鍵字前方代表不包含此關鍵字，需注意「-」前必須要用空白鍵隔開。",
        people: [
          { header: "Group 1" },
          { name: "Sandra Adams", group: "Group 1", avatar: srcs[1] },
          { name: "Ali Connors", group: "Group 1", avatar: srcs[2] },
          { name: "Trevor Hansen", group: "Group 1", avatar: srcs[3] },
          { name: "Tucker Smith", group: "Group 1", avatar: srcs[2] },
          { divider: true },
          { header: "Group 2" },
          { name: "Britta Holt", group: "Group 2", avatar: srcs[4] },
          { name: "Jane Smith ", group: "Group 2", avatar: srcs[5] },
          { name: "John Smith", group: "Group 2", avatar: srcs[1] },
          { name: "Sandra Williams", group: "Group 2", avatar: srcs[3] },
        ],
        tags: [],
        openDialog: false,
        judgementString: "",
        selectedJudgements: [],
        singleSelect: false,
        pageCount: 10,
        page: 1,
        dateFormatted: null,
        date: "",
        menu2: false,
        headers: [
          {
            text: "裁判字號",
            align: "start",
            sortable: false,
            value: "name",
             width: "200px"
          },
          { text: "判決時間", sortable: false, value: "date", width: "120px" },
          { text: "法院層級", sortable: false, value: "court", width: "120px" },
          { text: "內容預覽", sortable: false, value: "judgement"},
          { text: "操作", sortable: false, value: "actions", align: "center" },
        ],
        breadcrumbItems: [
          {
            text: "我的專案",
            disabled: true,
          },
        ],
        taggers: [],
        judgementType: "",
        projectId: ""
      };
    },
    computed: {
      computedDateFormatted() {
        return this.formatDate(this.date);
      },
      ...mapGetters({
        judgementList: "judgementList",
        project: "project",
        userList: "userList"
      }),
    },
    async mounted() {
      this.projectId = this.$route.params.projectId
      if (this.projectId) {
        await this.$store.dispatch("getProject", this.projectId);
      }
      await this.$store.dispatch("getJudgementList", {});
      await this.$store.dispatch("getUserList", {});
    },
    watch: {
      date() {
        this.dateFormatted = this.formatDate(this.date);
      },
      project(data) {
        if (!data) return
        this.projectName = data.name
        this.isPublic = data.isPublic == 1 ? 'public' : 'private'
        this.taggers = data.participants

      },
      judgementList(data) {
        const judgementSet = new Set(this.project.judgementList)

        if (!this.projectId) return
        for (const judgement of data) {
            if (judgementSet.has(judgement.id)) {
              this.selectedJudgements.push(judgement)
              judgementSet.delete(judgement.id)
            }

            if (judgementSet.size == 0) break
        }
      }
    },
    methods: {
      markSetting(item) {
        this.$router.push(`/mark-setting/${item.id}`);
      },
      viewJudgement(item) {
        this.openDialog = true;
        this.judgementString = item.judgement;
      },
      formatDate(date) {
        if (!date) return null;

        const [year, month, day] = date.split("-");
        return `${year}/${month}/${day}`;
      },
      parseDate(date) {
        if (!date) return null;

        const [month, day, year] = date.split("/");
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
      },
      remove(item) {
        const index = this.friends.indexOf(item.name);
        if (index >= 0) this.friends.splice(index, 1);
      },
      removeTag(item) {
        const index = this.tags.indexOf(item);
        if (index >= 0) this.tags.splice(index, 1);
      },
      async setProjectConfig() {
        if (!this.projectId) {
          await this.createProject()
        }

      },
      async createProject() {
        await this.$store.dispatch("createProject", {
          name: this.projectName,
          judgementList: this.selectedJudgements,
          participants: this.taggers,
          isPublic: this.isPublic == "public" ? true : false
        });

        this.$router.push(`/projects`)
      }
    }
  };
</script>
<style lang="scss">
  .two-line-ellipsis {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .single-line-ellipsis {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
  // .project_table {
  //     .v-data-table-header {
  //         background: #EFF4FF;
  //         color: #3F4254;
  //     }
  // }
</style>
