"use strict";(self["webpackChunkweb_works"]=self["webpackChunkweb_works"]||[]).push([[220],{220:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search"},[e("van-nav-bar",{attrs:{title:"商品搜索","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),e("van-search",{attrs:{"show-action":"",autofocus:"",placeholder:"请输入搜索关键词",clearable:""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.goSearch(t.search)}},scopedSlots:t._u([{key:"action",fn:function(){return[e("div",{on:{click:function(e){return t.goSearch(t.search)}}},[t._v("搜索")])]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t.history.length>0?e("div",{staticClass:"search-history"},[e("div",{staticClass:"title"},[e("span",[t._v("最近搜索")]),e("van-icon",{attrs:{name:"delete-o",size:"16"},on:{click:t.clear}})],1),e("div",{staticClass:"list"},t._l(t.history,(function(s){return e("div",{key:s,staticClass:"list-item",on:{click:function(e){return t.goSearch(s)}}},[t._v(t._s(s))])})),0)]):t._e()],1)},n=[],i=(s(4114),s(2272)),a={name:"SearchIndex",data(){return{search:"",history:(0,i.vF)()}},methods:{goSearch(t){const e=this.history.indexOf(t);""!==t.trim()?(-1!==e?this.history.splice(e,1):(this.history.unshift(t),(0,i.Vk)(this.history)),this.$router.push(`/searchlist?search=${t}`)):alert("请输入搜索关键词")},clear(){this.history=[],(0,i.Vk)([])}}},c=a,o=s(1656),l=(0,o.A)(c,r,n,!1,null,"41c5dd16",null),h=l.exports}}]);
//# sourceMappingURL=220.3d023758.js.map
