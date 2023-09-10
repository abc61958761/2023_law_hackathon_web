<template>
    <div class="d-flex" style="flex-direction:column; flex:1">
        <div class="d-flex pa-4" style="height:54px;align-items: center;">
            <div class="mr-4 font-weight-medium">標記內容 </div>
            <v-divider class="mr-4" vertical></v-divider>
            <v-breadcrumbs :items="breadcrumbItems" class="pa-0">
                <template v-slot:divider>
                   —
                </template>
            </v-breadcrumbs>
        </div>
        <div class="d-flex" style="overflow: hidden; height:100%">
            <div style="width: 100%;overflow: scroll;" class="pa-4 pb-8">
                <h2 class="mb-4">{{judgement.name}}</h2>
                <div id="content" ref="content" v-on:mouseup="testFunction" style="display: inline;">
                    <div ref="newContent" class="newContent">{{newContent}}</div>
                </div>
            </div> 
            <v-card style="width:600px;" class="pa-4 d-flex flex-column" outlined>
                <h3 class="mb-4">標記題目</h3>
                <div style="flex:1; overflow: scroll;">
                    <v-card outlined v-for="(item, index) in variableList" :key="item.id" class="pa-4 mb-2">
                        <div class="d-flex">
                            {{item.issue}}
                            <v-spacer></v-spacer>
                            <v-btn class="mx-1 pa-0" v-if="!item.isEdit" @click="editBtn(item, index)" style="min-wight:30px;color:#F18B41" color="#FFF2E3" small depressed>
                                <v-icon dark>
                                    mdi-pencil
                                </v-icon>
                            </v-btn>
                            <v-btn class="mx-1 pa-0" v-if="item.isEdit"  @click="closeBtn(item, index)" style="min-wight:30px;color:#9A9A9A" color="#F4F4F4" small depressed>
                                <v-icon dark>
                                    mdi-close-thick
                                </v-icon>
                            </v-btn>
                            <v-btn class="mx-1 pa-0" v-if="item.isEdit" @click="checkBtn(item,index)" style="min-wight:30px;color:#53BBB2" color="#E9FCFA" small depressed>
                                <v-icon dark>
                                    mdi-check-bold
                                </v-icon>
                            </v-btn>
                        </div>
                        
                        <v-radio-group row v-model="item.answer" v-if="item.unitType == 'radio'" hide-details="true">
                            <v-radio
                                label="是"
                                value="Yes"
                                color="#53BBB2"
                                :disabled="!item.isEdit"
                            ></v-radio>
                            <v-radio
                                label="否"
                                value="No"
                                color="#53BBB2"
                                :disabled="!item.isEdit"
                            ></v-radio>
                        </v-radio-group>
                        <div class="d-flex" v-if="item.unitType == 'multipleChoice'">
                            <v-checkbox :disabled="!item.isEdit" class="mr-2" color="#53BBB2" hide-details v-for="(value, name, index) in item.answer" :key="index" :label="name"></v-checkbox>
                        </div>
                            <v-text-field
                                :disabled="!item.isEdit"
                                v-if="item.unitType=='text'"
                                outlined
                                hide-details="true"
                                class="mt-4"
                                v-model="item.answer"
                                color="#53BBB2"
                            ></v-text-field>
                        <v-menu
                            ref="dateFormatted"
                            v-if="item.unitType == 'datatime'"
                            v-model="datatimeMenu"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    :disabled="!item.isEdit"
                                    color="#53BBB2"
                                    v-model="item.answer"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                color="#53BBB2"
                                v-model="item.answer"
                                no-title
                                scrollable
                                @change="datatimeMenu = false"
                                >
                            </v-date-picker>
                        </v-menu>
                    </v-card>
                </div>
                <v-btn depressed class="btn-depressed" @click="submitMarkConfig">完成標記</v-btn>
            </v-card>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            datatimeMenu: false,
            starts:[],
            ends: [],
            breadcrumbItems: [{
                text: '我的專案',
                disabled: false,
                to: "/projects",
                exact: true
            }, {
                text: '標記狀況',
                disabled: true
            }],
            items: [{
                type: 'radio',
                value: '2'
            }, {
                type: 'textarea',
                value: '2'
            }, {
                type: 'field',
                value: '2'
            }],
            radioGroup: 0,
            content: "",
            markContent: {},
            newContent: "",
            selectEl: null,
            variableList:[],
            anw: {},
            tmpContent: {},
            tempPositions: {}
        }
    },
    computed: {
      ...mapGetters({
        judgement: "judgement",
        markConfigList: "markConfigList"
      }),
    },
    watch: {
        markConfigList(data) {
            for (const item of data.selectQuestions.categoricalVariableList) {
                console.log(item)
                item['isEdit'] = false
                this.variableList.push(item)
                if (item.positions && item.positions.length >0) {
                    if (!this.tempPositions[item.judgementId]) {
                        this.tempPositions[item.judgementId] = {}
                    }
                    this.tempPositions[item.judgementId][item.positions[0]] = item.positions
                }
            }
            for (const item of data.selectQuestions.continuousVariableList) {
                item['isEdit'] = false
                this.variableList.push(item)
                if (item.positions && item.positions.length >0) {
                    if (!this.tempPositions[item.judgementId]) {
                        this.tempPositions[item.judgementId] = {}
                    }
                    this.tempPositions[item.judgementId][item.positions[0]] = item.positions
                }
            }

            this.initContent(this.tempPositions)
        },
        judgement(data) {
            const content = document.getElementById("content")
            while (content.firstChild) {
                content.removeChild(content.firstChild);
            }
            this.content = data.judgement
            this.newContent = data.judgement
            const node = this.createTextNode(data.judgement)
            content.appendChild(node)
            this.initContent(this.tempPositions)
        }
    },
    async mounted() {
        const verdictId = this.$route.params.verdictId
        const projectId = this.$route.params.projectId
        document.addEventListener('mouseup', event => {
            if (event.target === this.$refs.target || event.target.contains(this.$refs.target))
                this.testFunction();
        });
        await this.$store.dispatch("getJudgement", {id: verdictId});
        // const noList = this.judgement.no.split(',')
        // this.judgement['name'] = `${this.judgement.court} ${noList[0]}年 ${noList[1]}字 ${noList[2]}號`
        // this.content = this.judgement.judgement
        // this.newContent = this.judgement.judgement
        await this.$store.dispatch("getMarkConfigList", {projectId});
        
    },
    methods: {
        initContent(tempPositions) {
            const positions = tempPositions[this.judgement.id]
            if (!positions) return;
            console.log(positions)
            for (const [key, value] of Object.entries(positions)) {
                let newContents =  document.getElementsByClassName("newContent")
                // console.log(newContents.length)
                this.selectEl = newContents[newContents.length-1]
                // console.log(this.selectEl)
                let content = this.selectEl.innerHTML
                let documentFragment = document.createDocumentFragment();
                let withoutHighlightingStart = 0;
                // console.log(content)
                console.log("key", key)
                // console.log("withoutHighlightingStart", withoutHighlightingStart)
                if (value[0] > withoutHighlightingStart) {
                    let notHighlighted = this.createTextNode(content.slice(withoutHighlightingStart, value[0]));
                    // console.log(notHighlighted)
                    documentFragment.appendChild(notHighlighted);
                }
                let highlighted = this.createHighlighted(content.slice(value[0], value[1]+1));
                documentFragment.appendChild(highlighted);
                withoutHighlightingStart = value[1]+1
                let lastNotHighlighted = this.createTextNode(content.slice(withoutHighlightingStart));
                documentFragment.appendChild(lastNotHighlighted);
                this.selectEl.replaceWith(documentFragment)
            }
            
        },
        editBtn(item, index) {
            
            let positions = [];
            let normalizedPositions = [];
            console.log(this.markContent)
            positions.push({ positions: this.markContent.start_index, value: 1})
            positions.push({ positions: this.markContent.end_index, value: -1})
            // for(const item of this.markContent) {
            try {
  
            // }
            // console.log(positions)
            // this.starts.forEach(function(position) {
            //     positions.push({position, value: 1});
            // });
            // this.ends.forEach(function(position) {
            //     positions.push({position, value: -1});
            // });
            positions = positions.sort(function(a, b) {
                return a.position - b.position || 
                    b.value - a.value
            });
            var currentSection = {from: 0, counter: 0};

            for(const position of positions) {
                if (!currentSection.counter) {
                    if (position.value === -1) {
                        throw `inconsistent boundaries: closing before opening ${position.position}`;
                    }
                    currentSection.from = position.position;  
                }
                currentSection.counter += position.value;

                if (!currentSection.counter) { 
                    normalizedPositions.push({
                        from: currentSection.from, 
                        to: position.position
                    });
                }
            }

            if (currentSection.counter) {
                throw "last section has not been closed properly";   
            }

            // let parentNode = this.$refs.content;
            let content = this.selectEl.innerHTML
            // let textNodeToReplace = parentNode.childNodes[0];
            // console.log(textNodeToReplace)
            let documentFragment = document.createDocumentFragment();
            // let documentFragment = document.createElement('div')
            let withoutHighlightingStart = 0;
            // for (const item of this.markContent) {
            if (this.markContent.start_index > withoutHighlightingStart) {
                let notHighlighted = this.createTextNode(content.slice(withoutHighlightingStart, this.markContent.start_index));
                // console.log(notHighlighted)
                documentFragment.appendChild(notHighlighted);
            }
            console.log(content.slice(this.markContent.start_index, this.markContent.end_index+1))
            let highlighted = this.createHighlighted(content.slice(this.markContent.start_index, this.markContent.end_index+1));
            console.log(highlighted)
            // console.log(highlighted)
            documentFragment.appendChild(highlighted);
            withoutHighlightingStart = this.markContent.end_index+1
                // console.log(withoutHighlightingStart)
                // console.log(documentFragment)
            // }
            // normalizedPositions.forEach((highlightRange) => {
            //     if (highlightRange.from> withoutHighlightingStart) {
            //         let notHighlighted = this.createTextNode(this.content.slice(withoutHighlightingStart, highlightRange.from));
            //         documentFragment.appendChild(notHighlighted);
            //     }
            //     let highlighted = this.createHighlighted(this.content.slice(highlightRange.from, highlightRange.to));
            //     documentFragment.appendChild(highlighted);
            //     withoutHighlightingStart = highlightRange.to;
            // });
            let lastNotHighlighted = this.createTextNode(content.slice(withoutHighlightingStart));
            documentFragment.appendChild(lastNotHighlighted);
            console.log(documentFragment)
            // parentNode.replaceChild(documentFragment, textNodeToReplace);

            this.selectEl.replaceWith(documentFragment)
            
            // console.log(parentNode)
            if (item) {
                this.changeBtn(item,index)
                this.anw[item.id] = {
                    positions: [this.markContent.start_index, this.markContent.end_index]
                }
            }
            
            } catch (e) {
                console.log(e)
            }

        },
        testFunction(event) {
            console.log(event.target);
            
            if (window.getSelection().toString().length == 0) return
            console.log(event.target)
            this.selectEl = event.target
            console.log(window.getSelection())
            console.log(window.getSelection().toString())
            console.log(window.getSelection().anchorOffset)
            const end_index = window.getSelection().anchorOffset + window.getSelection().toString().length - 1
            console.log(end_index)
            console.log(this.content[window.getSelection().anchorOffset])
            this.markContent = {
                start_index: window.getSelection().anchorOffset,
                end_index: end_index
            }
        },
        createHighlighted(str) {
            let span = document.createElement('div');
            span.classList.add('highlight');
            span.classList.add('newContent');
            // span.appendChild(this.createTextNode(str));
            span.appendChild(document.createTextNode(str));
            return span;
        },
        createTextNode(str) {
            let span = document.createElement('div');
            span.classList.add('newContent');
            span.appendChild(document.createTextNode(str));
            return span
        },
        async submitMarkConfig() {
            for (const [key, value] of Object.entries(this.anw)) {
                console.log({answer: value.answer, positions: value})
                if (!this.tempPositions[this.judgement.id]) {
                    this.tempPositions[this.judgement.id] = {}
                }
                this.tempPositions[this.judgement.id][value.positions] = value.positions
                
                await this.$store.dispatch("updateMarkConfig", {
                    params: {answer: value.answer, positions: value.positions, judgementId: this.judgement.id},
                    id: key
                });
            }
        },
        changeBtn(item, index) {
            this.variableList.splice(index, 1, {
                ...item,
                isEdit: !item.isEdit
            })
        },
        closeBtn(item, index) {
            this.variableList.splice(index, 1, {
                ...item,
                isEdit: !item.isEdit
            })
        },
        checkBtn(item, index) {
            
            this.anw[item.id]['answer'] = item.answer 
            
            this.variableList.splice(index, 1, {
                ...item,
                isEdit: !item.isEdit
            })
        }
    },
    created() {
        this.$store.dispatch("setIsVerdictPage", true);
    },
    destroyed() {
        this.$store.dispatch("setIsVerdictPage", false);
    }
}
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  font-family: 'Verdana'
}

ul {
  list-style: none;
}

.header {
  background: rgba(245,246,247);
  padding: 20px;
}

.nav {
  display: flex;
}

.nav > ul > li {
  display: inline;
  margin: 20px;
}

.nav button {
  border: 2px solid gray;
  border-radius: 9999px;
  padding: 12px 20px;
}

.nav #card {
  display: flex;
  align-items: center;
}

#usercard {
  margin: 20px;
  padding: 10px;
}

.selectable{ 
  box-shadow: 0 0 0 2px green;
}
.highlight {
    background-color: yellow;
    color: dark-blue;
}
.newContent {
    display: inline;
    white-space: pre;
}
</style>