(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"04f8":function(t,e,r){"use strict";var n=r("2d00"),i=r("d039"),a=r("da84"),o=a.String;t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol("symbol detection");return!o(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},"06cf":function(t,e,r){"use strict";var n=r("83ab"),i=r("c65b"),a=r("d1e7"),o=r("5c6c"),s=r("fc6a"),c=r("a04b"),u=r("1a2d"),l=r("0cfb"),f=Object.getOwnPropertyDescriptor;e.f=n?f:function(t,e){if(t=s(t),e=c(e),l)try{return f(t,e)}catch(r){}if(u(t,e))return o(!i(a.f,t,e),t[e])}},"07fa":function(t,e,r){"use strict";var n=r("50c4");t.exports=function(t){return n(t.length)}},"0cfb":function(t,e,r){"use strict";var n=r("83ab"),i=r("d039"),a=r("cc12");t.exports=!n&&!i((function(){return 7!==Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(t,e,r){"use strict";var n=String;t.exports=function(t){try{return n(t)}catch(e){return"Object"}}},"13d2":function(t,e,r){"use strict";var n=r("e330"),i=r("d039"),a=r("1626"),o=r("1a2d"),s=r("83ab"),c=r("5e77").CONFIGURABLE,u=r("8925"),l=r("69f3"),f=l.enforce,p=l.get,d=String,h=Object.defineProperty,g=n("".slice),b=n("".replace),v=n([].join),m=s&&!i((function(){return 8!==h((function(){}),"length",{value:8}).length})),x=String(String).split("String"),y=t.exports=function(t,e,r){"Symbol("===g(d(e),0,7)&&(e="["+b(d(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!o(t,"name")||c&&t.name!==e)&&(s?h(t,"name",{value:e,configurable:!0}):t.name=e),m&&r&&o(r,"arity")&&t.length!==r.arity&&h(t,"length",{value:r.arity});try{r&&o(r,"constructor")&&r.constructor?s&&h(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var n=f(t);return o(n,"source")||(n.source=v(x,"string"==typeof e?e:"")),t};Function.prototype.toString=y((function(){return a(this)&&p(this).source||u(this)}),"toString")},"14d9":function(t,e,r){"use strict";var n=r("23e7"),i=r("7b0b"),a=r("07fa"),o=r("3a34"),s=r("3511"),c=r("d039"),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},f=u||!l();n({target:"Array",proto:!0,arity:1,forced:f},{push:function(t){var e=i(this),r=a(e),n=arguments.length;s(r+n);for(var c=0;c<n;c++)e[r]=arguments[c],r++;return o(e,r),r}})},1626:function(t,e,r){"use strict";var n=r("8ea1"),i=n.all;t.exports=n.IS_HTMLDDA?function(t){return"function"==typeof t||t===i}:function(t){return"function"==typeof t}},"1a2d":function(t,e,r){"use strict";var n=r("e330"),i=r("7b0b"),a=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return a(i(t),e)}},"1d80":function(t,e,r){"use strict";var n=r("7234"),i=TypeError;t.exports=function(t){if(n(t))throw i("Can't call method on "+t);return t}},"23cb":function(t,e,r){"use strict";var n=r("5926"),i=Math.max,a=Math.min;t.exports=function(t,e){var r=n(t);return r<0?i(r+e,0):a(r,e)}},"23e7":function(t,e,r){"use strict";var n=r("da84"),i=r("06cf").f,a=r("9112"),o=r("cb2d"),s=r("6374"),c=r("e893"),u=r("94ca");t.exports=function(t,e){var r,l,f,p,d,h,g=t.target,b=t.global,v=t.stat;if(l=b?n:v?n[g]||s(g,{}):(n[g]||{}).prototype,l)for(f in e){if(d=e[f],t.dontCallGetSet?(h=i(l,f),p=h&&h.value):p=l[f],r=u(b?f:g+(v?".":"#")+f,t.forced),!r&&void 0!==p){if(typeof d==typeof p)continue;c(d,p)}(t.sham||p&&p.sham)&&a(d,"sham",!0),o(l,f,d,t)}}},"241c":function(t,e,r){"use strict";var n=r("ca84"),i=r("7839"),a=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,a)}},"2d00":function(t,e,r){"use strict";var n,i,a=r("da84"),o=r("342f"),s=a.process,c=a.Deno,u=s&&s.versions||c&&c.version,l=u&&u.v8;l&&(n=l.split("."),i=n[0]>0&&n[0]<4?1:+(n[0]+n[1])),!i&&o&&(n=o.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=o.match(/Chrome\/(\d+)/),n&&(i=+n[1]))),t.exports=i},"342f":function(t,e,r){"use strict";t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},3511:function(t,e,r){"use strict";var n=TypeError,i=9007199254740991;t.exports=function(t){if(t>i)throw n("Maximum allowed index exceeded");return t}},"3a34":function(t,e,r){"use strict";var n=r("83ab"),i=r("e8b5"),a=TypeError,o=Object.getOwnPropertyDescriptor,s=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=s?function(t,e){if(i(t)&&!o(t,"length").writable)throw a("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},"3a9b":function(t,e,r){"use strict";var n=r("e330");t.exports=n({}.isPrototypeOf)},"40d5":function(t,e,r){"use strict";var n=r("d039");t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},"437f":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"max-w-screen-2xl mx-auto flex flex-wrap"},[e("h2",{staticClass:"w-full m-0 text-[#5DFF18] text-white font-extrabold text-5xl text-center"},[t._v(t._s(t.location))]),t._l(t.data,(function(t){return e("Card",{key:t.index,attrs:{id:t.id,page:"character",images:t.image,title:t.name,status:t.status,species:t.species}})}))],2)},i=[],a=(r("14d9"),r("bc3a")),o=r.n(a),s=r("9d59"),c={name:"Location Detail",data(){return{id:null,list:null,data:null,location:null}},methods:{getData:function(t){o.a.get("https://rickandmortyapi.com/api/location/"+t).then(t=>this.list=t.data.residents)}},watch:{id:function(){this.getData(this.id)},list:function(){this.data=[],this.list.forEach(t=>o.a.get(t).then(t=>this.data.push(t.data)))}},created(){this.id=this.$route.params.id,this.location=this.$route.params.name},components:{Card:s["a"]}},u=c,l=r("2877"),f=Object(l["a"])(u,n,i,!1,null,null,null);e["default"]=f.exports},"44ad":function(t,e,r){"use strict";var n=r("e330"),i=r("d039"),a=r("c6b6"),o=Object,s=n("".split);t.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"===a(t)?s(t,""):o(t)}:o},"485a":function(t,e,r){"use strict";var n=r("c65b"),i=r("1626"),a=r("861d"),o=TypeError;t.exports=function(t,e){var r,s;if("string"===e&&i(r=t.toString)&&!a(s=n(r,t)))return s;if(i(r=t.valueOf)&&!a(s=n(r,t)))return s;if("string"!==e&&i(r=t.toString)&&!a(s=n(r,t)))return s;throw o("Can't convert object to primitive value")}},"4d64":function(t,e,r){"use strict";var n=r("fc6a"),i=r("23cb"),a=r("07fa"),o=function(t){return function(e,r,o){var s,c=n(e),u=a(c),l=i(o,u);if(t&&r!==r){while(u>l)if(s=c[l++],s!==s)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},"50c4":function(t,e,r){"use strict";var n=r("5926"),i=Math.min;t.exports=function(t){return t>0?i(n(t),9007199254740991):0}},5692:function(t,e,r){"use strict";var n=r("c430"),i=r("c6cd");(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.32.1",mode:n?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.1/LICENSE",source:"https://github.com/zloirock/core-js"})},"56ef":function(t,e,r){"use strict";var n=r("d066"),i=r("e330"),a=r("241c"),o=r("7418"),s=r("825a"),c=i([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=a.f(s(t)),r=o.f;return r?c(e,r(t)):e}},5926:function(t,e,r){"use strict";var n=r("b42e");t.exports=function(t){var e=+t;return e!==e||0===e?0:n(e)}},"59ed":function(t,e,r){"use strict";var n=r("1626"),i=r("0d51"),a=TypeError;t.exports=function(t){if(n(t))return t;throw a(i(t)+" is not a function")}},"5a14":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"max-w-screen-2xl mx-auto flex flex-wrap"},[t._l(t.list,(function(t){return e("Card",{key:t.index,attrs:{page:"episode",status:t.episode,title:t.name,species:t.air_date}})})),e("Pagition",{attrs:{item:t.item,pages:t.pagition,firstpage:[1,2,3]},on:{item:function(e){t.item=e}}})],2)},i=[],a=r("bc3a"),o=r.n(a),s=r("9d59"),c=r("fb31"),u={name:"Episde",data(){return{item:1,list:null,pagition:null}},methods:{getData:function(t){o.a.get("https://rickandmortyapi.com/api/episode?page="+t).then(t=>this.list=t.data.results)},listPage:function(){o.a.get("https://rickandmortyapi.com/api/episode").then(t=>this.pagition=t.data.info.pages)}},watch:{item:function(){this.getData(this.item)}},components:{Pagition:c["a"],Card:s["a"]},mounted(){this.getData(this.item),this.listPage()}},l=u,f=r("2877"),p=Object(f["a"])(l,n,i,!1,null,null,null);e["default"]=p.exports},"5c6c":function(t,e,r){"use strict";t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"5e77":function(t,e,r){"use strict";var n=r("83ab"),i=r("1a2d"),a=Function.prototype,o=n&&Object.getOwnPropertyDescriptor,s=i(a,"name"),c=s&&"something"===function(){}.name,u=s&&(!n||n&&o(a,"name").configurable);t.exports={EXISTS:s,PROPER:c,CONFIGURABLE:u}},6374:function(t,e,r){"use strict";var n=r("da84"),i=Object.defineProperty;t.exports=function(t,e){try{i(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},"69f3":function(t,e,r){"use strict";var n,i,a,o=r("cdce"),s=r("da84"),c=r("861d"),u=r("9112"),l=r("1a2d"),f=r("c6cd"),p=r("f772"),d=r("d012"),h="Object already initialized",g=s.TypeError,b=s.WeakMap,v=function(t){return a(t)?i(t):n(t,{})},m=function(t){return function(e){var r;if(!c(e)||(r=i(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return r}};if(o||f.state){var x=f.state||(f.state=new b);x.get=x.get,x.has=x.has,x.set=x.set,n=function(t,e){if(x.has(t))throw g(h);return e.facade=t,x.set(t,e),e},i=function(t){return x.get(t)||{}},a=function(t){return x.has(t)}}else{var y=p("state");d[y]=!0,n=function(t,e){if(l(t,y))throw g(h);return e.facade=t,u(t,y,e),e},i=function(t){return l(t,y)?t[y]:{}},a=function(t){return l(t,y)}}t.exports={set:n,get:i,has:a,enforce:v,getterFor:m}},7234:function(t,e,r){"use strict";t.exports=function(t){return null===t||void 0===t}},7418:function(t,e,r){"use strict";e.f=Object.getOwnPropertySymbols},7839:function(t,e,r){"use strict";t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7a56":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"max-w-screen-2xl mx-auto p-4 rounded-lg",class:"Dead"==t.list.status?"bg-red-500":"unknown"==t.list.status?"bg-amber-300 ":"bg-[#5DFF18]"},[e("div",{staticClass:"flex flex-col"},[e("div",{staticClass:"w-full flex justify-center"},[e("img",{staticClass:"rounded-full border-8 max-h-60 mb-4 border-zinc-800",attrs:{src:t.list.image,alt:""}})]),e("div",[e("div",{staticClass:"flex w-full mb-4 text-4xl text-center text-black justify-center font-bold"},[e("h2",[t._v(t._s(t.list.name))])])])]),e("div",{staticClass:"flex flex-wrap bg-zinc-800 rounded-lg"},[t._m(0),t._l(t.episode,(function(r){return e("Card",{key:r.index,attrs:{page:"episode",status:t.list.status,title:r.name,species:r.air_date}})}))],2)])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full"},[e("h4",{staticClass:"text-white text-3xl py-2 mt-4 font-extrabold"},[t._v("Episode")])])}],a=(r("14d9"),r("bc3a")),o=r.n(a),s=r("9d59"),c={name:"CharacterDetail",components:{Card:s["a"]},data(){return{id:null,list:null,episode:null}},methods:{getData:function(t){o.a.get("https://rickandmortyapi.com/api/character/"+t).then(t=>this.list=t.data)}},watch:{id:function(){this.getData(this.id)},list:function(){this.episode=[],this.list.episode.forEach(t=>o.a.get(t).then(t=>this.episode.push(t.data)))}},created(){this.id=this.$route.params.id}},u=c,l=r("2877"),f=Object(l["a"])(u,n,i,!1,null,null,null);e["default"]=f.exports},"7b0b":function(t,e,r){"use strict";var n=r("1d80"),i=Object;t.exports=function(t){return i(n(t))}},"825a":function(t,e,r){"use strict";var n=r("861d"),i=String,a=TypeError;t.exports=function(t){if(n(t))return t;throw a(i(t)+" is not an object")}},"83ab":function(t,e,r){"use strict";var n=r("d039");t.exports=!n((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(t,e,r){"use strict";var n=r("1626"),i=r("8ea1"),a=i.all;t.exports=i.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:n(t)||t===a}:function(t){return"object"==typeof t?null!==t:n(t)}},8925:function(t,e,r){"use strict";var n=r("e330"),i=r("1626"),a=r("c6cd"),o=n(Function.toString);i(a.inspectSource)||(a.inspectSource=function(t){return o(t)}),t.exports=a.inspectSource},"8e3a":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"max-w-screen-2xl mx-auto flex flex-wrap"},[t._l(t.list,(function(t){return e("Card",{key:t.id,attrs:{page:"location",title:t.name,id:t.id,species:t.dimension,status:t.type}})})),e("Pagition",{attrs:{item:t.item,pages:t.pagition,firstpage:[1,2,3,4,5]},on:{item:function(e){t.item=e}}})],2)},i=[],a=r("bc3a"),o=r.n(a),s=r("fb31"),c=r("9d59"),u={data(){return{item:1,list:null,pagition:null}},methods:{getData:function(t){o.a.get("https://rickandmortyapi.com/api/location?page="+t).then(t=>this.list=t.data.results)},pageData:function(){o.a.get("https://rickandmortyapi.com/api/location?page="+event).then(t=>this.pagition=t.data.info.pages)}},watch:{item:function(){this.getData(this.item)}},components:{Pagition:s["a"],Card:c["a"]},mounted(){this.getData(this.item),this.pageData()}},l=u,f=r("2877"),p=Object(f["a"])(l,n,i,!1,null,null,null);e["default"]=p.exports},"8ea1":function(t,e,r){"use strict";var n="object"==typeof document&&document.all,i="undefined"==typeof n&&void 0!==n;t.exports={all:n,IS_HTMLDDA:i}},"90e3":function(t,e,r){"use strict";var n=r("e330"),i=0,a=Math.random(),o=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+a,36)}},9112:function(t,e,r){"use strict";var n=r("83ab"),i=r("9bf2"),a=r("5c6c");t.exports=n?function(t,e,r){return i.f(t,e,a(1,r))}:function(t,e,r){return t[e]=r,t}},"94ca":function(t,e,r){"use strict";var n=r("d039"),i=r("1626"),a=/#|\.prototype\./,o=function(t,e){var r=c[s(t)];return r===l||r!==u&&(i(e)?n(e):!!e)},s=o.normalize=function(t){return String(t).replace(a,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},"9bf2":function(t,e,r){"use strict";var n=r("83ab"),i=r("0cfb"),a=r("aed9"),o=r("825a"),s=r("a04b"),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,f="enumerable",p="configurable",d="writable";e.f=n?a?function(t,e,r){if(o(t),e=s(e),o(r),"function"===typeof t&&"prototype"===e&&"value"in r&&d in r&&!r[d]){var n=l(t,e);n&&n[d]&&(t[e]=r.value,r={configurable:p in r?r[p]:n[p],enumerable:f in r?r[f]:n[f],writable:!1})}return u(t,e,r)}:u:function(t,e,r){if(o(t),e=s(e),o(r),i)try{return u(t,e,r)}catch(n){}if("get"in r||"set"in r)throw c("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},"9d59":function(t,e,r){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-black w-full xl:w-3/12 lg:w-2/6 md:w-1/2"},[e("div",{directives:[{name:"show",rawName:"v-show",value:"character"==t.page,expression:"page=='character'"}],staticClass:"m-5 relative",on:{click:function(e){return t.gotoCharsertD(t.id)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.images,expression:"images"}],staticClass:"w-full rounded-t-lg bg-red",attrs:{alt:""}}),e("div",{staticClass:"absolute bottom-[5rem] right-1 w-full flex justify-center"},[e("span",{staticClass:"font-bold border-2 border-black w-40 py-2 rounded-full",class:[t.getStatus]},[t._v(t._s(t.status))])]),e("div",{staticClass:"w-full border-t-2 border-black p-4 pt-4 rounded-b-lg flex-col flex",class:[t.getStatus]},[e("span",{staticClass:"text-xl pt-5 font-extrabold"},[t._v(t._s(t.title))]),e("span",[t._v(t._s(t.species))])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"location"==t.page,expression:"page=='location'"}]},[e("div",{staticClass:"m-5 relative bg-[#5DFF18] p-4 rounded-lg",on:{click:function(e){return t.gotoLocationD(t.id,t.title)}}},[e("div",{staticClass:"w-full bg-white border-2 border-black drop-shadow-lg rounded-lg flex-col flex"},[e("span",{staticClass:"text-2xl py-2 h-32 p-4 flex justify-center items-center border-2 w-full rounded-lg font-extrabold"},[t._v(t._s(t.title))]),e("span",{staticClass:"leading-loose text-xl bg-zinc-800 text-white font-bold"},[t._v(t._s(t.status))]),e("span",{staticClass:"leading-loose"},[e("strong",[t._v("Dimension :")]),t._v(" "+t._s(t.species))])])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"episode"==t.page,expression:"page=='episode'"}]},[e("div",{staticClass:"m-5 relative p-4 rounded-lg",class:[t.getStatus]},[e("div",{staticClass:"w-full bg-white border-2 border-black drop-shadow-lg rounded-lg flex-col flex"},[e("span",{staticClass:"text-2xl py-2 h-32 p-4 flex justify-center items-center border-2 w-full rounded-lg font-extrabold"},[t._v(t._s(t.title))]),e("span",{staticClass:"leading-loose text-xl bg-zinc-800 text-white font-bold"},[t._v(t._s(t.status))]),e("span",{staticClass:"leading-loose"},[e("strong",[t._v("Date :")]),t._v(" "+t._s(t.species))])])])])])},i=[],a=(r("14d9"),{computed:{getStatus:function(){return"Alive"==this.status?"bg-[#5DFF18] text-black":"unknown"==this.status?"bg-amber-300 text-black capitalize ":"bg-red-500 "}},methods:{gotoLocationD(t,e){this.$router.push({name:"Location Detail",params:{id:t,name:e}})},gotoCharsertD(t){this.$router.push({name:"Character Detail",params:{id:t}})}},props:["images","title","status","species","page","id"]}),o=a,s=r("2877"),c=Object(s["a"])(o,n,i,!1,null,null,null);e["a"]=c.exports},a04b:function(t,e,r){"use strict";var n=r("c04e"),i=r("d9b5");t.exports=function(t){var e=n(t,"string");return i(e)?e:e+""}},aed9:function(t,e,r){"use strict";var n=r("83ab"),i=r("d039");t.exports=n&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},b42e:function(t,e,r){"use strict";var n=Math.ceil,i=Math.floor;t.exports=Math.trunc||function(t){var e=+t;return(e>0?i:n)(e)}},b622:function(t,e,r){"use strict";var n=r("da84"),i=r("5692"),a=r("1a2d"),o=r("90e3"),s=r("04f8"),c=r("fdbf"),u=n.Symbol,l=i("wks"),f=c?u["for"]||u:u&&u.withoutSetter||o;t.exports=function(t){return a(l,t)||(l[t]=s&&a(u,t)?u[t]:f("Symbol."+t)),l[t]}},c04e:function(t,e,r){"use strict";var n=r("c65b"),i=r("861d"),a=r("d9b5"),o=r("dc4a"),s=r("485a"),c=r("b622"),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||a(t))return t;var r,c=o(t,l);if(c){if(void 0===e&&(e="default"),r=n(c,t,e),!i(r)||a(r))return r;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),s(t,e)}},c430:function(t,e,r){"use strict";t.exports=!1},c65b:function(t,e,r){"use strict";var n=r("40d5"),i=Function.prototype.call;t.exports=n?i.bind(i):function(){return i.apply(i,arguments)}},c6b6:function(t,e,r){"use strict";var n=r("e330"),i=n({}.toString),a=n("".slice);t.exports=function(t){return a(i(t),8,-1)}},c6cd:function(t,e,r){"use strict";var n=r("da84"),i=r("6374"),a="__core-js_shared__",o=n[a]||i(a,{});t.exports=o},ca84:function(t,e,r){"use strict";var n=r("e330"),i=r("1a2d"),a=r("fc6a"),o=r("4d64").indexOf,s=r("d012"),c=n([].push);t.exports=function(t,e){var r,n=a(t),u=0,l=[];for(r in n)!i(s,r)&&i(n,r)&&c(l,r);while(e.length>u)i(n,r=e[u++])&&(~o(l,r)||c(l,r));return l}},cb2d:function(t,e,r){"use strict";var n=r("1626"),i=r("9bf2"),a=r("13d2"),o=r("6374");t.exports=function(t,e,r,s){s||(s={});var c=s.enumerable,u=void 0!==s.name?s.name:e;if(n(r)&&a(r,u,s),s.global)c?t[e]=r:o(e,r);else{try{s.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=r:i.f(t,e,{value:r,enumerable:!1,configurable:!s.nonConfigurable,writable:!s.nonWritable})}return t}},cc12:function(t,e,r){"use strict";var n=r("da84"),i=r("861d"),a=n.document,o=i(a)&&i(a.createElement);t.exports=function(t){return o?a.createElement(t):{}}},cdce:function(t,e,r){"use strict";var n=r("da84"),i=r("1626"),a=n.WeakMap;t.exports=i(a)&&/native code/.test(String(a))},d012:function(t,e,r){"use strict";t.exports={}},d039:function(t,e,r){"use strict";t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,r){"use strict";var n=r("da84"),i=r("1626"),a=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?a(n[t]):n[t]&&n[t][e]}},d1e7:function(t,e,r){"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,a=i&&!n.call({1:2},1);e.f=a?function(t){var e=i(this,t);return!!e&&e.enumerable}:n},d9b5:function(t,e,r){"use strict";var n=r("d066"),i=r("1626"),a=r("3a9b"),o=r("fdbf"),s=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=n("Symbol");return i(e)&&a(e.prototype,s(t))}},da84:function(t,e,r){"use strict";(function(e){var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e&&e)||function(){return this}()||this||Function("return this")()}).call(this,r("c8ba"))},dc4a:function(t,e,r){"use strict";var n=r("59ed"),i=r("7234");t.exports=function(t,e){var r=t[e];return i(r)?void 0:n(r)}},e330:function(t,e,r){"use strict";var n=r("40d5"),i=Function.prototype,a=i.call,o=n&&i.bind.bind(a,a);t.exports=n?o:function(t){return function(){return a.apply(t,arguments)}}},e893:function(t,e,r){"use strict";var n=r("1a2d"),i=r("56ef"),a=r("06cf"),o=r("9bf2");t.exports=function(t,e,r){for(var s=i(e),c=o.f,u=a.f,l=0;l<s.length;l++){var f=s[l];n(t,f)||r&&n(r,f)||c(t,f,u(e,f))}}},e8b5:function(t,e,r){"use strict";var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"===n(t)}},ecbd:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"max-w-screen-2xl mx-auto flex flex-wrap"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"w-full rounded-lg p-4 m-4",attrs:{placeholder:"Search Character Name .. ",type:"text"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._l(t.filterSearch,(function(t){return e("Card",{key:t.id,attrs:{page:"character",id:t.id,images:t.image,title:t.name,status:t.status,species:t.species}})})),e("Pagition",{attrs:{pages:t.pagition,item:t.item,firstpage:[1,2,3,4,5]},on:{item:function(e){t.item=e}}})],2)},i=[],a=r("bc3a"),o=r.n(a),s=r("9d59"),c=r("fb31"),u={name:"character",data(){return{item:1,list:null,pagition:null,search:""}},methods:{getData:function(t){o.a.get("https://rickandmortyapi.com/api/character?page="+t).then(t=>this.list=t.data.results)},listPage:function(){o.a.get("https://rickandmortyapi.com/api/character?page="+event).then(t=>this.pagition=t.data.info.pages)}},computed:{filterSearch:function(){return this.search?this.list.filter(t=>t.name.toLowerCase().includes(this.search.toLowerCase())):this.list}},watch:{item:function(){this.getData(this.item)}},components:{Pagition:c["a"],Card:s["a"]},created(){this.getData(this.item),this.listPage()}},l=u,f=r("2877"),p=Object(f["a"])(l,n,i,!1,null,null,null);e["default"]=p.exports},f772:function(t,e,r){"use strict";var n=r("5692"),i=r("90e3"),a=n("keys");t.exports=function(t){return a[t]||(a[t]=i(t))}},fb31:function(t,e,r){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full"},[e("Button",{attrs:{color:"pagition","variant-type":"outline",name:"<<"},nativeOn:{click:function(e){return t.testFunction(1)}}}),t._l(t.page,(function(r){return e("Button",{key:r,attrs:{"variant-type":t.item==r?"":"outline",color:"pagition",name:r},nativeOn:{click:function(e){return t.testFunction(r)}}})})),e("Button",{attrs:{color:"pagition","variant-type":"outline",name:">>"},nativeOn:{click:function(e){return t.testFunction(t.pages)}}})],2)},i=[],a=(r("14d9"),function(){var t=this,e=t._self._c;return e("button",{staticClass:"border border-solid py-2 px-5 rounded",class:[t.colorVariants]},[t._v(t._s(t.name))])}),o=[],s={name:"Button",data(){return{count:this.status}},methods:{CountChange:function(){this.count<3&&(this.count+=1)}},computed:{colorVariants(){return"danger"==this.color?"outline"==this.variantType?"border-red-500 text-red-500 hover:bg-red-500 hover:text-white":"bg-red-500 text-white hover:bg-red-700":"success"==this.color?"outline"==this.variantType?"border-green-500 text-green-500 hover:bg-green-500 hover:text-white":"bg-green-500 text-white hover:bg-green-700":"warning"==this.color?"outline"==this.variantType?"border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white":"bg-yellow-500 text-black hover:bg-yellow-700":"portal"==this.color?"outline"==this.variantType?"border-[#5DFF18] text-[#5DFF18] font-black text-2xl hover:bg-[#5DFF18] hover:text-black":"bg-[#5DFF18] text-black font-black text-2xl hover:bg-[#5DFF18]":"pagition"==this.color?"outline"==this.variantType?"border-[#5DFF18] m-2 text-[#5DFF18] font-black text-xl hover:bg-[#5DFF18] hover:text-black":"bg-[#5DFF18] m-2 text-black font-black text-xl hover:bg-[#5DFF18]":"bg-zinc-800 text-white hover:bg-black"}},props:["name","test","status","color","variantType"]},c=s,u=r("2877"),l=Object(u["a"])(c,a,o,!1,null,null,null),f=l.exports,p={name:"pagition",data(){return{page:[1,2,3,4,5]}},methods:{testFunction:function(t){this.$emit("item",t)},filtersTest:function(t){this.page=[];const e=t+3,r=this.item-2;for(let n=r;n<e;n++)n>0&&n<=this.pages&&this.page.push(n)}},watch:{item:function(){this.filtersTest(this.item)}},created(){this.page=this.firstpage},components:{Button:f},props:["pages","item","status","species","firstpage"]},d=p,h=Object(u["a"])(d,n,i,!1,null,null,null);e["a"]=h.exports},fc6a:function(t,e,r){"use strict";var n=r("44ad"),i=r("1d80");t.exports=function(t){return n(i(t))}},fdbf:function(t,e,r){"use strict";var n=r("04f8");t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator}}]);
//# sourceMappingURL=about.1c0edd72.js.map