<template>
  <v-app>
    <v-app-bar app elevation="0" color="#fffff">
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer app >
      <v-list class="pa-0">
        <v-list-item style="background: #53BBB2;" class="py-1">
            <img
              src="../assets/logo.png"
              alt="Logo"
              width="100%"
            >
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list v-if="!isVerdictPage">
        <v-subheader>專案管理</v-subheader>
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            
            @click="goRoute(item)"
            v-for="(item, i) in items"
            :key="i"
            class="v-disabled"
          >
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <!-- <div v-if="isVerdictPage" style="position: absolute; top:0; background: #ffffff; width: 100%; top: 64px; height:100%; border-right: 1px solid black;" class="d-flex"> -->
      <v-list v-else>
        <v-list-item>

          判決書列表
          <v-spacer></v-spacer>
        </v-list-item>
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in judgementList"
            :key="i"
            @click="setJudgement(item)"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.name" class="mb-4"></v-list-item-title>
              <v-progress-linear :value="item.progress"></v-progress-linear>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <!-- </div> -->

    </v-navigation-drawer>
    
    <v-main>
      <v-container style="margin-top:64px; display:flex; flex:1">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: "App",
    data: () => ({
      selectedItem: null,
      items: [{
        icon: "mdi-ballot-outline",
        text: "我的專案",
        path: "projects"
      },{
        icon: "mdi-target-variant",
        text: "標記設定",
        path: "mark-setting"
      }],
      projectId: ""
      //
    }),
    async mounted() {
        this.projectId = this.$route.params.projectId
        console.log(this.projectId )
        if (this.projectId) {
            await this.$store.dispatch("getJudgementList", {projectId: this.projectId});

        }
    },
    watch: {
      judgementList(data) {
          for (const item of data) {
              const noList = item.no.split(',')
              item.name = `${item.court} ${noList[0]}年 ${noList[1]}字 ${noList[2]}號`
          }
      }
    },
    computed: {
      ...mapGetters({
        isVerdictPage: "getIsVerdictPage",
        judgementList: "judgementList"
      }),
    },
    methods: {
      goRoute(item) {
        this.$router.push(`/${item.path}`)
      },
      setIsVerdictPage() {
        
      },
      async setJudgement(item) {
        if (this.$route.params.verdictId == item.id) return
        await this.$store.dispatch("getJudgement", {id: item.id});
        this.$router.push(`/projects/${this.projectId}/verdicts/${item.id}`)
        this.$forceUpdate()
      }
    }
  };
</script>
<style lang="scss">
  // .container {
  .v-main {
    padding-top: 0 !important;
    flex: 1;
    display: flex;
    height: 100vh;
    .v-main__wrap {
      display: flex;
      height: 100vh;
      overflow: hidden;
      

    }
  }
  .v-data-table > .v-data-table__wrapper {
    display: flex !important;
    flex: 1 !important;
    overflow: auto;
    tbody {
      tr.v-data-table__expanded__content {
        box-shadow: 0 0 !important;
        background: rgba(0, 0, 0, 0.1) !important;
        font-size: 0.875rem !important;
      }
    }
  }
  table {
    tr:not(.v-data-table__expanded__content) td:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .v-input.v-input--selection-controls {
      margin-top: 0;
      padding-top: 0;
    }
  }

  .add-item {
    .v-input {
      margin-top: 0;
    }
  }
  .v-application--wrap {
    flex-direction: row !important;
  }
  #Verdict {
    // .v-list-item.v-item--active {
    //   background: yellow;
    // }
  }
  #menu {
    // .v-list-item.v-disabled{
    //   background: #ffffff !important;
    //   color: #ffffff !important;
    // }
  }
  .btn-depressed {
    background: #53BBB2 !important;
    color:#ffffff !important;
  }
  .btn-outlined {
    background: #ffffff !important;
    color:#53BBB2 !important;
  }
  .btn-depressed__grayish-blue {
    background: #A1A5B7 !important;
    color:#ffffff !important;
  }
  .btn-outlined__grayish-blue {
    background: #ffffff !important;
    color:#A1A5B7 !important;
  }
  .btn-depressed__light-grayish-blue {
    background: #F5F8FA !important;
    color:#7E8299 !important;
  }
  .btn-back {
    background: #F5F8FA !important;
    color: #7E8299 !important;
  }
  .btn-icon {
    min-width: 30px !important;
    &__trash{
      color:#F1416C !important;
      background: #FFF5F8 !important;
    }
    &__arrow {
      color:#A1A5B7 !important;
      background: #F5F8FA !important;
    }
    &__pencil{
      color:#F18B41 !important;
      background: #FFF2E3 !important;
    }
  }

</style>
