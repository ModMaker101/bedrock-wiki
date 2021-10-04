import{o as e,c as n,b as l,d as t}from"./404.md.739cab70.js";const a='{"title":"TypeScript","description":"","frontmatter":{"layout":"page","title":"TypeScript","parent":"Scripting"},"headers":[{"level":2,"title":"How it Works","slug":"how-it-works"},{"level":2,"title":"Prerequisites","slug":"prerequisites"},{"level":2,"title":"TypeScript-Supported Libraries","slug":"typescript-supported-libraries"},{"level":2,"title":"Setup Guide","slug":"setup-guide"},{"level":3,"title":"Getting Started","slug":"getting-started"},{"level":3,"title":"Project Structure","slug":"project-structure"},{"level":3,"title":"Commands","slug":"commands"}],"relativePath":"scripting/typescript.md","lastUpdated":1633383009487}',r={},i=l("p",null,[l("a",{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"},"TypeScript"),t(" is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.")],-1),s=l("p",null,"Typescript is very beneficial to use when developing scripts for Minecraft addons. There exist libraries to aid in the development of Minecraft addons to provide intellisense and type-safety for broadcasting and listening to events.",-1),o=l("h2",{id:"how-it-works"},[l("a",{class:"header-anchor",href:"#how-it-works","aria-hidden":"true"},"#"),t(" How it Works")],-1),c=l("p",null,[t("TypeScript is a language which requires compilation into JavaScript. Minecraft has no idea what to do with a "),l("code",null,".ts"),t(" file. Therefore some tooling needs to be set up in order to utilize TypeScript to build addons.")],-1),d=l("p",null,[t("First, the TypeScript files need to be compiled into JavaScript, which is all accomplished by utilizing the "),l("a",{href:"https://www.npmjs.com/package/typescript",target:"_blank",rel:"noopener noreferrer"},"TypeScript Compiler"),t(". Then the files can be utilized by Minecraft's scripting system.")],-1),p=l("p",null,[t("Since there is already a build step, we might as well incorporate some other systems to allow for file separation and code sharing between the "),l("code",null,"client"),t(" and "),l("code",null,"server"),t(". Minecraft's scripting system will only act on the "),l("code",null,"server.js"),t(" and "),l("code",null,"client.js"),t(" scripts within their respective folders utilizing what is assumed to be, Mojang's own JavaScript interpreter. Therefore, any logic split across multiple files must be merged into a single large file. This is where tooling such as "),l("a",{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"},"webpack"),t(" and "),l("a",{href:"https://browserify.org/",target:"_blank",rel:"noopener noreferrer"},"browserify"),t(" come in handy.")],-1),u=l("p",null,[t("You do not need to know how to utilize these tools since there are already "),l("a",{href:"#typescript-supported-libraries"},"libraries"),t(" that utilize them for you without any effort on your behalf. It is just important to understand the tooling making these sorts of libraries possible.")],-1),h=l("h2",{id:"prerequisites"},[l("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),t(" Prerequisites")],-1),g=l("ol",null,[l("li",null,[l("a",{href:"/scripting/scripting-intro.html"},"Beginners Guide Prerequisites")]),l("li",null,[l("a",{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},"Node.js"),t(" is required for installing tooling and compiling TypeScript into JavaScript.")]),l("li",null,[t("Knowledge of TypeScript and read through the "),l("a",{href:"/scripting/scripting-intro.html"},"Beginners Guide")])],-1),f=l("h2",{id:"typescript-supported-libraries"},[l("a",{class:"header-anchor",href:"#typescript-supported-libraries","aria-hidden":"true"},"#"),t(" TypeScript-Supported Libraries")],-1),m=l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"Author"),l("th",null,"Package")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("a",{href:"https://github.com/minecraft-addon-tools",target:"_blank",rel:"noopener noreferrer"},"minecraft-addon-tools")]),l("td",null,[l("a",{href:"https://github.com/minecraft-addon-tools/minecraft-addon-toolchain",target:"_blank",rel:"noopener noreferrer"},"minecraft-addon-toolchain")])]),l("tr",null,[l("td",null,[l("a",{href:"https://github.com/karikera",target:"_blank",rel:"noopener noreferrer"},"karikera")]),l("td",null,[l("a",{href:"https://github.com/karikera/mcaddon-start",target:"_blank",rel:"noopener noreferrer"},"minecraft-addon")])])])],-1),b=l("h2",{id:"setup-guide"},[l("a",{class:"header-anchor",href:"#setup-guide","aria-hidden":"true"},"#"),t(" Setup Guide")],-1),y=l("p",null,[t("This guide is for setting up and using the "),l("a",{href:"https://github.com/minecraft-addon-tools/minecraft-addon-toolchain",target:"_blank",rel:"noopener noreferrer"},"minecraft-addon-toolchain"),t(" as it currently provides the most tooling with the easiest setup.")],-1),w=l("h3",{id:"getting-started"},[l("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#"),t(" Getting Started")],-1),k=l("p",null,[t("Open a terminal (Command Prompt for Windows) and navigate to where the project should be located. It can be anywhere. For Windows 10 you can also "),l("code",null,"Shift + RClick"),t(" in file explorer and select "),l("code",null,"Open in PowerShell"),t(".")],-1),v=l("p",null,"Next we need to install the template generator for creating the addon. To do this, enter the following commands.",-1),S=l("div",{class:"language-bash line-numbers-mode"},[l("pre",null,[l("code",null,[l("span",{class:"token function"},"npm"),t(),l("span",{class:"token function"},"install"),t(" -g yeoman\n")])]),l("div",{class:"line-numbers-wrapper"},[l("span",{class:"line-number"},"1"),l("br")])],-1),j=l("div",{class:"language-bash line-numbers-mode"},[l("pre",null,[l("code",null,[l("span",{class:"token function"},"npm"),t(),l("span",{class:"token function"},"install"),t(" -g generator-minecraft-addon\n")])]),l("div",{class:"line-numbers-wrapper"},[l("span",{class:"line-number"},"1"),l("br")])],-1),T=l("div",{class:"tip custom-block"},[l("p",{class:"custom-block-title"},"TIP"),l("p",null,[t("If you receive an error such as "),l("code",null,"command npm not found"),t(", ensure you have Node.js installed and added to the PATH.")])],-1),_=l("p",null,"Now the project can be initialized. The next step is to generate the project with all the information you define.",-1),z=l("div",{class:"language-bash line-numbers-mode"},[l("pre",null,[l("code",null,"yo minecraft-addon\n")]),l("div",{class:"line-numbers-wrapper"},[l("span",{class:"line-number"},"1"),l("br")])],-1),P=l("p",null,[l("img",{src:"/assets/images/scripting/typescript/project-create.gif",alt:"Creating a project"})],-1),q=l("p",null,[t("Now that you created the project, it can be opened in your IDE of choice. If you are utilizing VS Code, you can "),l("code",null,"cd"),t(" into your project directory and run "),l("code",null,"code ."),t(" to open your project.")],-1),J=l("h3",{id:"project-structure"},[l("a",{class:"header-anchor",href:"#project-structure","aria-hidden":"true"},"#"),t(" Project Structure")],-1),x=l("div",{markdown:"0",class:"folder-structure"},[l("ul",null,[l("li",null,[l("span",{class:"folder"},"node_modules")]),l("li",null,[l("span",{class:"folder"},"packs"),l("ul",null,[l("li",null,[l("span",{class:"folder"},[l("a",{href:"/schemas/behavior-folder",target:"__blank"},"behaviors")]),l("ul",null,[l("li",null,[l("span",{class:"file"},"manifest.json")]),l("li",null,[l("span",{class:"image"},"pack_icon.png")]),l("li",null,[l("span",{class:"folder"},"scripts"),l("ul",null,[l("li",null,[l("span",{class:"folder"},"client"),l("ul",null,[l("li",null,[l("span",{class:"file"},"client.ts")])])]),l("li",null,[l("span",{class:"folder"},"server"),l("ul",null,[l("li",null,[l("span",{class:"file"},"server.ts")])])])])])])]),l("li",null,[l("span",{class:"folder"},[l("a",{href:"/schemas/resource-folder",target:"__blank"},"resources")]),l("ul",null,[l("li",null,[l("span",{class:"file"},"manifest.json")]),l("li",null,[l("span",{class:"image"},"pack_icon.png")])])])])]),l("li",null,[l("span",{class:"file"},"gulpfile.js")]),l("li",null,[l("span",{class:"file"},"package-lock.json")]),l("li",null,[l("span",{class:"file"},"package.json")]),l("li",null,[l("span",{class:"file"},"tsconfig.json")])])],-1),C=l("p",null,[t("Unless you know what you are doing, the only part of the project to be concerned with is everything within the "),l("code",null,"packs"),t(" folder. That is where all the development should take place.")],-1),I=l("h3",{id:"commands"},[l("a",{class:"header-anchor",href:"#commands","aria-hidden":"true"},"#"),t(" Commands")],-1),M=l("p",null,[t("The following commands are most utilized when developing a project using "),l("code",null,"minecraft-addon-toolchain"),t(".")],-1),G=l("div",{class:"language-bash line-numbers-mode"},[l("pre",null,[l("code",null,[l("span",{class:"token function"},"npm"),t(" run installaddon\n")])]),l("div",{class:"line-numbers-wrapper"},[l("span",{class:"line-number"},"1"),l("br")])],-1),N=l("p",null,[l("code",null,"installaddon"),t(" will, as it says, install the addon into the "),l("code",null,"development"),t(" resource/behaviors folders. The pack can then be utilized like any other addon.")],-1),W=l("div",{class:"language-bash line-numbers-mode"},[l("pre",null,[l("code",null,[l("span",{class:"token function"},"npm"),t(" run "),l("span",{class:"token function"},"watch"),t("\n")])]),l("div",{class:"line-numbers-wrapper"},[l("span",{class:"line-number"},"1"),l("br")])],-1),A=l("p",null,[l("code",null,"watch"),t(" will watch for any changes you make within the "),l("code",null,"packs"),t(" directory and automatically reinstall the addon.")],-1),B=l("div",{class:"language-bash line-numbers-mode"},[l("pre",null,[l("code",null,[l("span",{class:"token function"},"npm"),t(" run packageaddon\n")])]),l("div",{class:"line-numbers-wrapper"},[l("span",{class:"line-number"},"1"),l("br")])],-1),H=l("p",null,[l("code",null,"packageaddon"),t(" will build, package, and zip the addon in a connivent manner. By default, outputs to "),l("code",null,"out/packaged"),t(" directory.")],-1);r.render=function(l,t,a,r,F,L){return e(),n("div",null,[i,s,o,c,d,p,u,h,g,f,m,b,y,w,k,v,S,j,T,_,z,P,q,J,x,C,I,M,G,N,W,A,B,H])};export default r;export{a as __pageData};