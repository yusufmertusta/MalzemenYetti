(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2891839a"],{"0ae9":function(t,e,i){},"7b3d":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{attrs:{view:"lHh Lpr lFf"}},[i("q-page-container",[i("transition",{on:{"after-leave":function(e){t.$root.$emit("triggerScroll")}}},[i("keep-alive",{attrs:{exclude:"recipe"}},[i("router-view")],1)],1)],1),t.show_footer()?i("q-layout-footer",[i("footer",{staticClass:"footer-block justify-around"},[i("router-link",{staticClass:"footer_icon",attrs:{to:"/ingredients",exact:!1,"active-class":"w--current2"}},[i("q-icon",{attrs:{name:"kitchen",size:"25px"}}),i("div",{staticClass:"footer_txt"},[t._v(t._s(t.$t("290.pantry.footer")))])],1),i("router-link",{staticClass:"footer_icon",attrs:{to:"/menu",exact:!1,"active-class":"w--current2"},nativeOn:{click:function(e){t.menu_click()}}},[i("q-icon",{attrs:{name:"home",size:"25px"}}),i("div",{staticClass:"footer_txt"},[t._v(t._s(t.$t("50.menu"))+" ")])],1),i("router-link",{staticClass:"footer_icon",attrs:{to:"/favorites","active-class":"w--current2"}},[i("q-icon",{attrs:{name:"/favorites"!=t.$router.currentRoute.path?"favorite_border":"favorite",size:"25px"}}),i("div",{staticClass:"footer_txt"},[t._v(" "+t._s(t.$t("188.favorites")))])],1),i("router-link",{staticClass:"footer_icon",attrs:{to:"/shopping_list","active-class":"w--current2"}},[i("q-icon",{attrs:{name:"local_grocery_store",size:"25px"}}),i("div",{staticClass:"footer_txt"},[t._v(t._s(t.$t("194.shopping.list")))])],1)],1)]):t._e()],1)},a=[];s._withStripped=!0;i("28a5"),i("6b54"),i("1c4c"),i("6762"),i("2fdb"),i("a481"),i("ac6a"),i("55dd"),i("96a1");var n=i("2ef0"),r=i.n(n),c={name:"LayoutDefault",data:function(){return{filters_changed:0,leftDrawerOpen:this.$q.platform.desktop,rightDrawerOpen:!1,api:this.$api,active_filter_tab:"",checkbox:"",expand_key_ingredients:!1,diets:[],nutrition_keys:["calories","carbs","cholesterol","fat","fiber","protein","saturated_fat","servings","sodium","sugar","trans_fat","unsaturated_fat"]}},computed:{is_filter_selected:function(){return this.api.state.focused_ingredients.length>0||(this.api.state.selected_cats.length>0||void 0)},show_top_bar:function(){return"/recipe"!=this.$router.currentRoute.path},get_ingredients_sublabel:function(){var t=this.api.get_selected_ingredients().length;return t>0?"you have "+t+" ingredients":"you have no ingredients"},get_selected_ingredients_ops:function(){var t=r.a.map(this.api.state.focused_ingredients.sort(),function(t){return r.a.zipObject(["label","value"],[t,t])});return t},get_nutrition_ops:function(){for(var t=this,e=[],i=this,s=function(s){if("servings"==t.nutrition_keys[s])return"continue";["low","high"].forEach(function(t){var a=t+" "+i.nutrition_keys[s];e.push(r.a.zipObject(["label","value"],[a.replace("_"," "),a.replace("_"," ")]))})},a=0;a<this.nutrition_keys.length;a++)s(a);return e},get_mealtype_options:function(){var t=[{label:"",value:""}];return t=t.concat(r.a.map(this.api.state.categories.meal_types,function(t){return r.a.zipObject(["label","value"],[t,t])})),t},get_cuisine_options:function(){return r.a.map(this.api.state.categories.cuisines,function(t){return r.a.zipObject(["label","value"],[t,t])})}},methods:{remove_all_filters:function(){this.api.state.focused_ingredients=[],this.api.state.selected_cats=[],this.api.state.show_filter=!1},toggle_video_search:function(){this.add_or_flip("schema_video")},key_ingredient_label:function(){return 0==this.api.state.focused_ingredients.length?"Choose one or more key ingredients":this.api.state.focused_ingredients.join(", ")},get_key_ingredients_subset:function(){return this.expand_key_ingredients?this.api.get_selected_ingredients().sort():this.api.get_selected_ingredients().sort().slice(0,0)},select_nutr_filter:function(t,e){e=e.replace("_"," ");var i=this.api.state.selected_cats.indexOf(t+" "+e);i<0?(this.api.state.selected_cats.push(t+" "+e),i="low"==t?this.api.state.selected_cats.indexOf("high "+e):this.api.state.selected_cats.indexOf("low "+e),i>-1&&this.api.state.selected_cats.splice(i,1)):this.api.state.selected_cats.splice(i,1)},select_cuisine:function(t){var e=this.api.state.selected_cats.indexOf(t);this.disable_all_these(this.api.state.categories.cuisines),e>-1?this.api.state.selected_cats.splice(e,1):this.api.state.selected_cats.push(t)},select_rating:function(t){var e=this.api.state.selected_cats.indexOf(t);this.disable_all_these(this.api.state.categories.star_rating),e>-1?this.api.state.selected_cats.splice(e,1):this.api.state.selected_cats.push(t)},select_time:function(t){var e=this.api.state.selected_cats.indexOf(t);this.disable_all_these(this.api.state.categories.time),e>-1?this.api.state.selected_cats.splice(e,1):this.api.state.selected_cats.push(t)},select_num_ingredients:function(t){var e=this.api.state.selected_cats.indexOf(t);this.disable_all_these(this.api.state.categories.max_ingredients),e>-1?this.api.state.selected_cats.splice(e,1):this.api.state.selected_cats.push(t)},select_ingredient:function(t){var e=this.api.state.focused_ingredients.indexOf(t);e>-1?this.api.state.focused_ingredients.splice(e,1):this.api.state.focused_ingredients.push(t)},is_diet_selected:function(t){return Array.from(this.api.state.selected_filters).includes(t)},get_diets:function(){return Array.from(this.api.state.selected_filters)},disable_all_these:function(t){var e=this;t.forEach(function(t){var i=e.api.state.selected_cats.indexOf(t);i>-1&&e.api.state.selected_cats.splice(i,1)})},add_or_flip:function(t){var e=this.api.state.selected_cats.indexOf(t);e>-1?this.api.state.selected_cats.splice(e,1):this.api.state.selected_cats.push(t)},select_diet:function(t){this.add_or_flip(t)},select_mealtype:function(t){var e=this.api.state.selected_cats.indexOf(t);this.disable_all_these(this.api.state.categories.meal_types),e>-1?this.api.state.selected_cats.splice(e,1):this.api.state.selected_cats.push(t)},copy_to_clipboard:function(t){var e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style={position:"absolute",left:"-9999px"},document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)},show_footer:function(){var t=["/recipes","/ingredients","/ingredients_cat","/ingredients/pantry","/search","/favorites","/shopping_list","/menu","/menu/category"];if(t.indexOf(this.$router.currentRoute.path)>-1)return!0},copy_ingredients:function(){var t=this.api.get_selected_ingredients();0!=t.length?(t.sort(),this.copy_to_clipboard(t.join("\r\n")),this.$q.dialog({title:"Success",message:"Your ingredients have been copied to your clipboard"})):this.$q.dialog({title:"Woops",message:"You have no ingredients.  Add some ingredients and try again"})},delete_all:function(){var t=this;this.$q.dialog({title:"Confirm",message:"Are you sure you want to remove all your ingredients?",ok:!0,cancel:!0}).then(function(){t.api.set_these_ingredients([]),t.api.clear_all_filters(),t.api.persist_ingredients()}).catch(function(){})},del_filter:function(t){this.api.state.saved_filters.splice(t,1)},get_selected_ingredients_options:function(){var t=r.a.map(this.api.get_selected_ingredients().sort(),function(t){return r.a.zipObject(["label","value"],[t,t])});return t},label_val:function(t){return t<this.api.state.default_max_ingredients?t.toString():"no limit"},rating_val:function(t){return t<1?"any":t.toString()},search_from_autoc:function(t){this.$refs.searchtxt.blur(),this.api.state.text_search=t.value,this.api.state.results_need_updating=!0,this.filter_changed()},favorite_cb_click:function(){this.api.state.results_need_updating=!0,this.filter_changed()},kw_cleared:function(t){this.api.state.text_search="",this.$refs.searchtxt.blur(),this.api.state.results_need_updating=!0,this.api.load_recipes()},kw_enter:function(){var t=this;this.$refs.autocompleter.hide(),this.api.load_recipes(),setTimeout(function(){t.$refs.autocompleter.hide()},500)},filter_changed:function(t){this.filters_changed=1,this.api.update_selected_cats()},nutrition_changed:function(t){if(this.filters_changed=1,this.api.update_selected_cats(),t.length>1){var e=t.slice(-1)[0].split(" "),i="";i="low"==e[0]?"high":"low";var s=i+" "+e.slice(1).join(" "),a=this.api.state.chosen_nutritional_filters.indexOf(s);a>-1&&this.api.state.chosen_nutritional_filters.splice(a,1)}},menu_click:function(){this.$router.push("/menu")},recipe_click:function(){this.leftDrawerOpen=!1,this.$router.push("/recipes")},ingredients_click:function(){this.leftDrawerOpen=!1,this.$router.push("/ingredients")},account_click:function(){this.leftDrawerOpen=!1,this.$router.push("/account")},saved_searches_click:function(){this.leftDrawerOpen=!1,this.$router.push("/saved_searches")},favorites_click:function(){this.leftDrawerOpen=!1,this.$router.push("/favorites")}},watch:{"api.state.show_filter":function(t){0==t&&(this.expand_key_ingredients=!1,this.filters_changed=1,this.api.update_selected_cats())},"api.state.results_need_updating":function(t){this.api.state.favorites_changed=!0},"api.state.loading":function(t){}},mounted:function(){this.$q.icon.input.dropdown="more_vert"}},o=c,l=(i("f70f"),i("2877")),u=Object(l["a"])(o,s,a,!1,null,null,null);u.options.__file="default.vue";e["default"]=u.exports},"96a1":function(t,e,i){"use strict";var s=i("a60d");e["a"]=function(t,e){if(s["a"].is.cordova&&navigator&&navigator.app)return navigator.app.loadUrl(t,{openExternal:!0});var i=window.open(t,"_blank");if(i)return i.focus(),i;e&&e()}},f70f:function(t,e,i){"use strict";var s=i("0ae9"),a=i.n(s);a.a}}]);