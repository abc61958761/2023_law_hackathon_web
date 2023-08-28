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
                <h2 class="mb-4">法務部 法律字第10603504060號</h2>
                <div ref="content" v-on:mouseup="testFunction" style="display: inline;">
                    <div class="newContent">{{newContent}}</div>
                </div>
            </div>
            <v-card style="width:400px" class="pa-4" outlined>
                <h3 class="mb-4">標記題目</h3>
                <v-card outlined v-for="(item, index) in items" :key="index" class="pa-4 mb-2">
                    <div class="d-flex">
                        法院層級
                        <v-spacer></v-spacer>
                        <v-btn class="mx-1 pa-0" @click="test" style="min-wight:30px;color:#F18B41" color="#FFF2E3" small depressed>
                            <v-icon dark>
                                mdi-pencil
                            </v-icon>
                        </v-btn>
                    </div>
                    
                    <v-radio-group row v-model="radioGroup" v-if="item.type=='radio'" hide-details="true">
                        <v-radio
                            label="是"
                            value="Yes"
                        ></v-radio>
                        <v-radio
                            label="否"
                            value="No"
                        ></v-radio>
                    </v-radio-group>
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
                        v-if="item.type=='field'"
                        outlined
                        hide-details="true"
                        class="mt-4"
                    ></v-text-field>
                </v-card>
            </v-card>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
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
            content: "(四)刑法第 310 條第 3 項前段:「對於所誹謗之事，能證明其為真實者，不罰」。司法院釋字第 509 號解釋亦認該 條項前段所稱:「對於所誹謗之事，能證明其為真實者，不罰」等語，係以指摘或傳述足以毀損他人名譽事項之 行為人，其言論內容與事實相符者為不罰之條件，其「並非謂行為人必須自行證明其言論內容確屬真實，始能免 於刑責。惟行為人雖不能證明言論內容為真實，但依其所提證據資料，認為行為人有相當理由確信其為真實者， 即不能以誹謗罪之刑責相繩，亦不得以此項規定而免除檢察官或自訴人於訴訟程序中，依法應負行為人故意毀損 他人名譽之舉證責任，或法院發現其為真實之義務」等語(參見該解釋文及解釋理由書)，賦予刑法第 310 條第 3 項之規定，具有類似(民事上)舉證責任及(刑事上)舉證義務轉換之效果，亦即民事上之原告，或刑事上之公 訴檢察官、自訴人等，如欲提出此項誹謗罪之名譽賠償或刑事追訴，應負有舉證責任，證明被告具有「故意毀損 他人名譽」之意圖。換言之，大法官認為名譽受到某發表言論之人侵害者，必須能夠證明發表言論者具有「真正 惡意」，亦即發表言論者於發表言論時明知所言非真實或過於輕率疏忽而未探究所言是否為真實，則此種不實內容之言論才要受法律制裁或負擔賠償責任。惟刑法第 309 條之侮辱罪，係指未指摘事實之抽象謾罵而言，已如上 述，既無事實，自無證明真實與否之問題，且刑法第 310 條第 3 項既與誹謗罪規定於同條項內，足認僅誹謗罪有 其適用，於侮辱罪原則上無適用之餘地。然言論中事實陳述與意見表達在概念上本屬流動，有時難期其涇渭分 明。是若意見係以某項事實為基礎或發言過程中夾論夾敘，將事實敘述與評論混為一談時，即應考慮事實之真偽 問題。換言之，此時不能將評論自事實抽離，而不論事實之真實與否，逕以「評論」粗俗不堪，論以公然侮辱。 否則屬於事實陳述之言論因符合刑法第 310 條第 3 項之要件而不罰，基於該事實陳述而為之意見表達，反因所為 用語損及名譽而受處罰，自非法理之平。(五)刑法第 311 條第 3 款規定:「以善意發表言論，而有左列情形之一者，不罰:三、對於可受公評之事，而為適當之評論者」。此一不罰事由，既規定於同一章，則在同為「妨害名譽」言論類型的公然侮辱罪，當未可逕行排 斥其適用。惟所謂「可受公評之事」，係指依該事實之性質，在客觀上係可接受公眾評論者，如國家或地方之政 事、政治人物之言行、公務員執行職務之行為、與公共安全、社會秩序、公眾利益有關之事件等。又所謂「適當條免罰事由之前提，須「以善意發表言論」，然對人主觀之評論意見，除了正面之評價外，負面的評價亦所在多有，對被評論人而言，如認為該負面的評價使其名譽受損，自難認為評論之人係善意發表言論，故所謂「善意」價，亦難認係非善意發表言論。反之，評論人之評論並非合理適當，超過社會一般大眾可接受之程度，足認其非 善意發表言論，如該言論又係公然為之，自成立公然侮辱罪。 (六)被告雖辯稱:告訴人自己做了妨害自己名譽之行為，被告留言之評論對告訴人種種行為在社會上之客觀評價並無影響，不應視為名譽之侵害云云。惟查:告訴人雖因領取其母親存款而遭其弟賈正道、其妹賈淑宜提出竊盜告訴，並經檢察官偵查中，然犯罪嫌疑人於 判決確定前均受有無罪推定原則之保護，在事實不明之情況下，任何人關於此事件對告訴人所為之負面評論，客 觀上對告訴人名譽自然有所損害。被告此部分所辯，並不足採。故本件應審酌者，為被告之評論是否合理適當。 查被告發表如附表編號 1、2(即附件編號 3、7)所示留言之前後脈絡詳如附件所示之新聞報導及留言，被告與 其他網友於標題為「賈家道口燒雞爆爭產，兄妹反目成仇」之新聞後「發表迴響」欄發表意見之情形如下: 1被告以「Andy」之暱稱，於 100 年 3 月 13 日中午 12 時 16 分許，發表如附件留言編號 1 之內容(為被告所坦 承，此部分經檢察官不另為不起訴處分)。2暱稱「阿華」之人，於 100 年 3 月 13 日中午 12 時 19 分許，發表如附件留言編號 2 所示之內容。",
            markContent: {},
            newContent:"(四)刑法第 310 條第 3 項前段:「對於所誹謗之事，能證明其為真實者，不罰」。司法院釋字第 509 號解釋亦認該 條項前段所稱:「對於所誹謗之事，能證明其為真實者，不罰」等語，係以指摘或傳述足以毀損他人名譽事項之 行為人，其言論內容與事實相符者為不罰之條件，其「並非謂行為人必須自行證明其言論內容確屬真實，始能免 於刑責。惟行為人雖不能證明言論內容為真實，但依其所提證據資料，認為行為人有相當理由確信其為真實者， 即不能以誹謗罪之刑責相繩，亦不得以此項規定而免除檢察官或自訴人於訴訟程序中，依法應負行為人故意毀損 他人名譽之舉證責任，或法院發現其為真實之義務」等語(參見該解釋文及解釋理由書)，賦予刑法第 310 條第 3 項之規定，具有類似(民事上)舉證責任及(刑事上)舉證義務轉換之效果，亦即民事上之原告，或刑事上之公 訴檢察官、自訴人等，如欲提出此項誹謗罪之名譽賠償或刑事追訴，應負有舉證責任，證明被告具有「故意毀損 他人名譽」之意圖。換言之，大法官認為名譽受到某發表言論之人侵害者，必須能夠證明發表言論者具有「真正 惡意」，亦即發表言論者於發表言論時明知所言非真實或過於輕率疏忽而未探究所言是否為真實，則此種不實內容之言論才要受法律制裁或負擔賠償責任。惟刑法第 309 條之侮辱罪，係指未指摘事實之抽象謾罵而言，已如上 述，既無事實，自無證明真實與否之問題，且刑法第 310 條第 3 項既與誹謗罪規定於同條項內，足認僅誹謗罪有 其適用，於侮辱罪原則上無適用之餘地。然言論中事實陳述與意見表達在概念上本屬流動，有時難期其涇渭分 明。是若意見係以某項事實為基礎或發言過程中夾論夾敘，將事實敘述與評論混為一談時，即應考慮事實之真偽 問題。換言之，此時不能將評論自事實抽離，而不論事實之真實與否，逕以「評論」粗俗不堪，論以公然侮辱。 否則屬於事實陳述之言論因符合刑法第 310 條第 3 項之要件而不罰，基於該事實陳述而為之意見表達，反因所為 用語損及名譽而受處罰，自非法理之平。(五)刑法第 311 條第 3 款規定:「以善意發表言論，而有左列情形之一者，不罰:三、對於可受公評之事，而為適當之評論者」。此一不罰事由，既規定於同一章，則在同為「妨害名譽」言論類型的公然侮辱罪，當未可逕行排 斥其適用。惟所謂「可受公評之事」，係指依該事實之性質，在客觀上係可接受公眾評論者，如國家或地方之政 事、政治人物之言行、公務員執行職務之行為、與公共安全、社會秩序、公眾利益有關之事件等。又所謂「適當條免罰事由之前提，須「以善意發表言論」，然對人主觀之評論意見，除了正面之評價外，負面的評價亦所在多有，對被評論人而言，如認為該負面的評價使其名譽受損，自難認為評論之人係善意發表言論，故所謂「善意」價，亦難認係非善意發表言論。反之，評論人之評論並非合理適當，超過社會一般大眾可接受之程度，足認其非 善意發表言論，如該言論又係公然為之，自成立公然侮辱罪。 (六)被告雖辯稱:告訴人自己做了妨害自己名譽之行為，被告留言之評論對告訴人種種行為在社會上之客觀評價並無影響，不應視為名譽之侵害云云。惟查:告訴人雖因領取其母親存款而遭其弟賈正道、其妹賈淑宜提出竊盜告訴，並經檢察官偵查中，然犯罪嫌疑人於 判決確定前均受有無罪推定原則之保護，在事實不明之情況下，任何人關於此事件對告訴人所為之負面評論，客 觀上對告訴人名譽自然有所損害。被告此部分所辯，並不足採。故本件應審酌者，為被告之評論是否合理適當。 查被告發表如附表編號 1、2(即附件編號 3、7)所示留言之前後脈絡詳如附件所示之新聞報導及留言，被告與 其他網友於標題為「賈家道口燒雞爆爭產，兄妹反目成仇」之新聞後「發表迴響」欄發表意見之情形如下: 1被告以「Andy」之暱稱，於 100 年 3 月 13 日中午 12 時 16 分許，發表如附件留言編號 1 之內容(為被告所坦 承，此部分經檢察官不另為不起訴處分)。2暱稱「阿華」之人，於 100 年 3 月 13 日中午 12 時 19 分許，發表如附件留言編號 2 所示之內容。",
            selectEl: null
        }
    },
    mounted() {
        document.addEventListener('mouseup', event => {
        if (event.target === this.$refs.target || event.target.contains(this.$refs.target))
            this.testFunction();
        });
    },
    methods: {
        test() {
            let positions = [];
            let normalizedPositions = [];
            console.log(this.markContent)
            positions.push({ positions: this.markContent.start_index, value: 1})
            positions.push({ positions: this.markContent.end_index, value: -1})
            // for(const item of this.markContent) {
                
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
            let highlighted = this.createHighlighted(content.slice(this.markContent.start_index, this.markContent.end_index+1));
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

        },
        testFunction(event) {
            console.log(event.target);
            
            if (window.getSelection().toString().length == 0) return
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
}
</style>