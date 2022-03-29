import{_ as c}from"./chunks/content_log.7e80e559.js";import{_ as u,c as d,a as n,w as s,e as t,b as e,d as a,r,o as h}from"./404.md.25b6a67d.js";var m="/assets/images/guide/project-setup/active_pack.png",k="/assets/images/guide/project-setup/settings_1.png",g="/assets/images/guide/project-setup/settings_2.png";const H='{"title":"Project Setup","description":"","frontmatter":{"title":"Project Setup","category":"Guide","nav_order":4,"prefix":"4. "},"headers":[{"level":2,"title":"The com.mojang folder","slug":"the-com-mojang-folder"},{"level":3,"title":"Windows","slug":"windows"},{"level":3,"title":"Android","slug":"android"},{"level":3,"title":"iOS","slug":"ios"},{"level":3,"title":"Development Packs","slug":"development-packs"},{"level":2,"title":"Your Workspace","slug":"your-workspace"},{"level":2,"title":"BP Manifest","slug":"bp-manifest"},{"level":3,"title":"Manifest Explained","slug":"manifest-explained"},{"level":3,"title":"UUID Explained","slug":"uuid-explained"},{"level":2,"title":"RP Manifest","slug":"rp-manifest"},{"level":2,"title":"Pack Icon","slug":"pack-icon"},{"level":2,"title":"Language Files","slug":"language-files"},{"level":2,"title":"Checking your Work","slug":"checking-your-work"},{"level":2,"title":"Turn on Content Log","slug":"turn-on-content-log"},{"level":2,"title":"Creating your testing world","slug":"creating-your-testing-world"},{"level":2,"title":"Your progress so far","slug":"your-progress-so-far"},{"level":2,"title":"What you have learned","slug":"what-you-have-learned"},{"level":2,"title":"Your progress so far","slug":"your-progress-so-far-1"}],"relativePath":"guide/project-setup.md"}',_={},f=t("",24),b=a("BP/manifest.json"),y=t("",11),v=a("RP/manifest.json"),w=t("",3),q=e("p",null,[a("You should place a copy of your desired image into both the RP and the BP. The image needs to be named "),e("code",null,"pack_icon.png")],-1),P=e("h2",{id:"language-files",tabindex:"-1"},[a("Language Files "),e("a",{class:"header-anchor",href:"#language-files","aria-hidden":"true"},"#")],-1),T=e("p",null,[a("The last thing to do is setup language support for your addon. You will need to create a language file for both the RP and the BP. "),e("a",{href:"/concepts/text-and-translations.html"},"You can learn more about how Minecraft handles localization here.")],-1),x=a("RP/texts/en_US.lang"),j=e("div",{class:"language-json line-numbers-mode"},[e("pre",null,[e("code",null,`pack.name=Wiki Resource Pack
pack.description=A Ghostly Guide
`)]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br")])],-1),I=a("BP/texts/en_US.lang"),C=e("div",{class:"language-json line-numbers-mode"},[e("pre",null,[e("code",null,`pack.name=Wiki Behavior Pack
pack.description=A Ghostly Guide
`)]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br")])],-1),S=a("RP/texts/languages.json"),U=t("",1),R=a("BP/texts/languages.json"),A=t("",16),W=t("",3),B=e("ul",null,[e("li",null,"[x] Setup your pack"),e("li",null,"[ ] Create a custom item"),e("li",null,"[ ] Create a custom entity"),e("li",null,"[ ] Create the entity's loot, spawn rules and a custom recipe")],-1);function D(V,E,M,N,Y,F){const o=r("CodeHeader"),p=r("WikiImage"),i=r("FolderView"),l=r("Checklist");return h(),d("div",null,[f,n(o,null,{default:s(()=>[b]),_:1}),y,n(o,null,{default:s(()=>[v]),_:1}),w,n(p,{src:"/assets/images/guide/project-setup/pack_icon.png",alt:"Pack Icon",pixelated:""}),q,P,T,n(o,null,{default:s(()=>[x]),_:1}),j,n(o,null,{default:s(()=>[I]),_:1}),C,n(o,null,{default:s(()=>[S]),_:1}),U,n(o,null,{default:s(()=>[R]),_:1}),A,n(i,{paths:["com.mojang/development_resource_packs/guide_RP/manifest.json","com.mojang/development_resource_packs/guide_RP/pack_icon.png","com.mojang/development_resource_packs/guide_RP/texts/en_US.lang","com.mojang/development_resource_packs/guide_RP/texts/languages.json","com.mojang/development_behavior_packs/guide_BP/manifest.json","com.mojang/development_behavior_packs/guide_BP/pack_icon.png","com.mojang/development_behavior_packs/guide_BP/texts/en_US.lang","com.mojang/development_behavior_packs/guide_BP/texts/languages.json"]},null,8,["paths"]),W,n(l,null,{default:s(()=>[B]),_:1})])}var O=u(_,[["render",D]]);export{H as __pageData,O as default};