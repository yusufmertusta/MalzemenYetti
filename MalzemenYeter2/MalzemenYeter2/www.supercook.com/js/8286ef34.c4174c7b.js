(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["8286ef34"],{"0ac1":function(t,e,i){},"61c0":function(t,e,i){"use strict";var a=i("0ac1"),s=i.n(a);s.a},"829c":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{attrs:{padding:""}})},s=[];a._withStripped=!0;i("28a5");var n={data:function(){return{leftDrawer:!0,show_ingredients:!1,api:this.$api,left_page:"",right_page:""}},methods:{reload_app:function(){var t=this,e=this.api.get_persisted("lang");e?(this.api.state.lang=e,this.api.get_lang_strings(this.api.state.lang).then(function(e){t.$i18n.setLocaleMessage(t.api.state.lang,e.strings),t.$i18n.locale=t.api.state.lang,t.api.state.categories["meal_types"]=e.meal_types,t.api.state.categories["cuisines"]=e.cuisines,t.api.get_lang_ingredients(t.api.state.lang).then(function(e){if(t.api.state.login_hash)t.api.refresh_ingredients(t.api.state.login_hash).then(function(e){if("0"==e)return t.$q.dialog({title:"Error",message:t.$t("294.signed.out")}),t.api.state.login_hash="",void t.api.persist("login_hash","");t.$api.get_selected_ingredients(),e.ingredients,t.api.set_these_ingredients(e.ingredients),t.api.state.login_email=e.email,e.hasOwnProperty("saved")?t.api.state.saved=e.saved:t.api.state.saved=[]});else{var i=t.api.get_persisted_ingredients();i&&(i=i.split(","),t.api.set_these_ingredients(i))}setTimeout(function(){t.api.state.strings_loaded=1,t.api.state.desktop_route="category",t.$root.$emit("filter_update")},250)})})):this.api.state.desktop_route="onboarding"}},mounted:function(){this.$q.platform.is.desktop?this.reload_app():this.$router.push("/")}},p=n,r=(i("61c0"),i("2877")),o=Object(r["a"])(p,a,s,!1,null,null,null);o.options.__file="desktop.vue";e["default"]=o.exports}}]);