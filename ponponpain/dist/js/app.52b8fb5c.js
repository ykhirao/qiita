(function(e){function x(x){for(var i,n,d=x[0],r=x[1],v=x[2],o=0,c=[];o<d.length;o++)n=d[o],t[n]&&c.push(t[n][0]),t[n]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);h&&h(x);while(c.length)c.shift()();return l.push.apply(l,v||[]),a()}function a(){for(var e,x=0;x<l.length;x++){for(var a=l[x],i=!0,d=1;d<a.length;d++){var r=a[d];0!==t[r]&&(i=!1)}i&&(l.splice(x--,1),e=n(n.s=a[0]))}return e}var i={},t={app:0},l=[];function n(x){if(i[x])return i[x].exports;var a=i[x]={i:x,l:!1,exports:{}};return e[x].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=i,n.d=function(e,x,a){n.o(e,x)||Object.defineProperty(e,x,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,x){if(1&x&&(e=n(e)),8&x)return e;if(4&x&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&x&&"string"!=typeof e)for(var i in e)n.d(a,i,function(x){return e[x]}.bind(null,i));return a},n.n=function(e){var x=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(x,"a",x),x},n.o=function(e,x){return Object.prototype.hasOwnProperty.call(e,x)},n.p="";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],r=d.push.bind(d);d.push=x,d=d.slice();for(var v=0;v<d.length;v++)x(d[v]);var h=r;l.push([0,"chunk-vendors"]),a()})({0:function(e,x,a){e.exports=a("56d7")},"034f":function(e,x,a){"use strict";var i=a("64a9"),t=a.n(i);t.a},"09ae":function(e,x,a){},"56d7":function(e,x,a){"use strict";a.r(x);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),t=function(){var e=this,x=e.$createElement,a=e._self._c||x;return a("div",{attrs:{id:"app"}},[a("h3",[e._v("pͪoͣnͬpͣoͥnͭpͣa͡inͥ を支える技術")]),a("DraggableText")],1)},l=[],n=function(){var e=this,x=e.$createElement,a=e._self._c||x;return a("div",{attrs:{id:"DraggableText"}},[e._l(e.codes,function(x){return a("span",{key:x.id,staticClass:"flex-span",on:{click:function(a){return e.add(x.id)}}},[e._v("\n    "+e._s(x.val)+"\n  ")])}),a("span",{staticClass:"flex-span",on:{click:e.del}},[e._v("del")]),a("span",{staticClass:"flex-span",on:{click:e.clear}},[e._v("clear")]),a("span",{staticClass:"flex-span",on:{click:e.addSpace}},[e._v("space")]),a("span",{staticClass:"flex-span",on:{click:e.copy}},[e._v("copy")]),a("div",{staticClass:"show-text"},[e._v("\n    "+e._s(e.showText)+"\n  ")]),a("div",[a("input",{staticClass:"input-lower",attrs:{type:"text",placeholder:e.showUpperText,disabled:""}})]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.lowerText,expression:"lowerText"}],staticClass:"input-lower",attrs:{type:"text"},domProps:{value:e.lowerText},on:{input:function(x){x.target.composing||(e.lowerText=x.target.value)}}})]),a("div",[a("input",{staticClass:"input-copy",attrs:{id:"input-copy",type:"text",readonly:""},domProps:{value:e.showText}})]),e._m(0)],2)},d=[function(){var e=this,x=e.$createElement,a=e._self._c||x;return a("div",{attrs:{id:"footer"}},[a("a",{attrs:{href:"https://qiita.com/ykhirao/items/9ca1fbd294883e06dbd6"}},[e._v("Qiita元記事はこちら")])])}],r=(a("7514"),a("28a5"),[{id:768,hex:"0x300",val:"̀"},{id:769,hex:"0x301",val:"́"},{id:770,hex:"0x302",val:"̂"},{id:771,hex:"0x303",val:"̃"},{id:772,hex:"0x304",val:"̄"},{id:773,hex:"0x305",val:"̅"},{id:774,hex:"0x306",val:"̆"},{id:775,hex:"0x307",val:"̇"},{id:776,hex:"0x308",val:"̈"},{id:777,hex:"0x309",val:"̉"},{id:778,hex:"0x30A",val:"̊"},{id:779,hex:"0x30B",val:"̋"},{id:780,hex:"0x30C",val:"̌"},{id:781,hex:"0x30D",val:"̍"},{id:782,hex:"0x30E",val:"̎"},{id:783,hex:"0x30F",val:"̏"},{id:784,hex:"0x310",val:"̐"},{id:785,hex:"0x311",val:"̑"},{id:786,hex:"0x312",val:"̒"},{id:787,hex:"0x313",val:"̓"},{id:788,hex:"0x314",val:"̔"},{id:789,hex:"0x315",val:"̕"},{id:790,hex:"0x316",val:"̖"},{id:791,hex:"0x317",val:"̗"},{id:792,hex:"0x318",val:"̘"},{id:793,hex:"0x319",val:"̙"},{id:794,hex:"0x31A",val:"̚"},{id:795,hex:"0x31B",val:"̛"},{id:796,hex:"0x31C",val:"̜"},{id:797,hex:"0x31D",val:"̝"},{id:798,hex:"0x31E",val:"̞"},{id:799,hex:"0x31F",val:"̟"},{id:800,hex:"0x320",val:"̠"},{id:801,hex:"0x321",val:"̡"},{id:802,hex:"0x322",val:"̢"},{id:803,hex:"0x323",val:"̣"},{id:804,hex:"0x324",val:"̤"},{id:805,hex:"0x325",val:"̥"},{id:806,hex:"0x326",val:"̦"},{id:807,hex:"0x327",val:"̧"},{id:808,hex:"0x328",val:"̨"},{id:809,hex:"0x329",val:"̩"},{id:810,hex:"0x32A",val:"̪"},{id:811,hex:"0x32B",val:"̫"},{id:812,hex:"0x32C",val:"̬"},{id:813,hex:"0x32D",val:"̭"},{id:814,hex:"0x32E",val:"̮"},{id:815,hex:"0x32F",val:"̯"},{id:816,hex:"0x330",val:"̰"},{id:817,hex:"0x331",val:"̱"},{id:818,hex:"0x332",val:"̲"},{id:819,hex:"0x333",val:"̳"},{id:820,hex:"0x334",val:"̴"},{id:821,hex:"0x335",val:"̵"},{id:822,hex:"0x336",val:"̶"},{id:823,hex:"0x337",val:"̷"},{id:824,hex:"0x338",val:"̸"},{id:825,hex:"0x339",val:"̹"},{id:826,hex:"0x33A",val:"̺"},{id:827,hex:"0x33B",val:"̻"},{id:828,hex:"0x33C",val:"̼"},{id:829,hex:"0x33D",val:"̽"},{id:830,hex:"0x33E",val:"̾"},{id:831,hex:"0x33F",val:"̿"},{id:832,hex:"0x340",val:"̀"},{id:833,hex:"0x341",val:"́"},{id:834,hex:"0x342",val:"͂"},{id:835,hex:"0x343",val:"̓"},{id:836,hex:"0x344",val:"̈́"},{id:837,hex:"0x345",val:"ͅ"},{id:838,hex:"0x346",val:"͆"},{id:839,hex:"0x347",val:"͇"},{id:840,hex:"0x348",val:"͈"},{id:841,hex:"0x349",val:"͉"},{id:842,hex:"0x34A",val:"͊"},{id:843,hex:"0x34B",val:"͋"},{id:844,hex:"0x34C",val:"͌"},{id:845,hex:"0x34D",val:"͍"},{id:846,hex:"0x34E",val:"͎"},{id:847,hex:"0x34F",val:"͏"},{id:848,hex:"0x350",val:"͐"},{id:849,hex:"0x351",val:"͑"},{id:850,hex:"0x352",val:"͒"},{id:851,hex:"0x353",val:"͓"},{id:852,hex:"0x354",val:"͔"},{id:853,hex:"0x355",val:"͕"},{id:854,hex:"0x356",val:"͖"},{id:855,hex:"0x357",val:"͗"},{id:856,hex:"0x358",val:"͘"},{id:857,hex:"0x359",val:"͙"},{id:858,hex:"0x35A",val:"͚"},{id:859,hex:"0x35B",val:"͛"},{id:860,hex:"0x35C",val:"͜"},{id:861,hex:"0x35D",val:"͝"},{id:862,hex:"0x35E",val:"͞"},{id:863,hex:"0x35F",val:"͟"},{id:864,hex:"0x360",val:"͠"},{id:865,hex:"0x361",val:"͡"},{id:866,hex:"0x362",val:"͢"},{id:867,hex:"0x363",val:"ͣ"},{id:868,hex:"0x364",val:"ͤ"},{id:869,hex:"0x365",val:"ͥ"},{id:870,hex:"0x366",val:"ͦ"},{id:871,hex:"0x367",val:"ͧ"},{id:872,hex:"0x368",val:"ͨ"},{id:873,hex:"0x369",val:"ͩ"},{id:874,hex:"0x36A",val:"ͪ"},{id:875,hex:"0x36B",val:"ͫ"},{id:876,hex:"0x36C",val:"ͬ"},{id:877,hex:"0x36D",val:"ͭ"},{id:878,hex:"0x36E",val:"ͮ"},{id:879,hex:"0x36F",val:"ͯ"}]),v=r,h={name:"DraggableText",components:{},computed:{showText:function(){var e=this;return this.lowerText.split("").map(function(x,a){return"".concat(x).concat(e.getCodeById(e.upperTextArray[a]))}).join("")},showUpperText:function(){var e=this;return this.upperTextArray.map(function(x){return"  ".concat(e.getCodeById(x))}).join("")}},methods:{removeAt:function(e){this.lower.splice(e,1)},add:function(e){this.upperTextArray.push(e)},getCodeById:function(e){var x=this.codes.find(function(x){return e===x.id});return x?x.val:""},del:function(){this.upperTextArray.splice(-1)},addSpace:function(){this.upperTextArray.push(0)},clear:function(){this.upperTextArray=[]},copy:function(){var e=document.getElementById("input-copy");e.select(),document.execCommand("Copy")}},data:function(){return{lowerText:"ponponpain",upperTextArray:[875,870,871,873,867,875,868,873,866,867],codes:v}}},o=h,c=(a("e390"),a("2877")),s=Object(c["a"])(o,n,d,!1,null,"73406bd0",null),u=s.exports,p={name:"app",components:{DraggableText:u}},f=p,y=(a("034f"),Object(c["a"])(f,t,l,!1,null,null,null)),m=y.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(m)}}).$mount("#app")},"64a9":function(e,x,a){},e390:function(e,x,a){"use strict";var i=a("09ae"),t=a.n(i);t.a}});
//# sourceMappingURL=app.52b8fb5c.js.map