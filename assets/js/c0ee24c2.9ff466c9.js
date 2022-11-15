"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7809],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,v=c["".concat(p,".").concat(m)]||c[m]||s[m]||i;return t?r.createElement(v,o(o({ref:n},d),{},{components:t})):r.createElement(v,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5148:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={title:"07 - Environment Variables",sidebar_position:7},o=void 0,l={unversionedId:"rad-lab-ui/ui_installation/env-variables",id:"rad-lab-ui/ui_installation/env-variables",title:"07 - Environment Variables",description:"Environment variables are kept in .env files.",source:"@site/docs/rad-lab-ui/ui_installation/env-variables.md",sourceDirName:"rad-lab-ui/ui_installation",slug:"/rad-lab-ui/ui_installation/env-variables",permalink:"/rad-lab/docs/rad-lab-ui/ui_installation/env-variables",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"07 - Environment Variables",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"06 - Cleanup Environment",permalink:"/rad-lab/docs/rad-lab-ui/ui_installation/cleanup"},next:{title:"Module Deployment",permalink:"/rad-lab/docs/ui_deployment"}},p={},u=[{value:"Firebase envs",id:"firebase-envs",level:2},{value:"Google Cloud Platform envs",id:"google-cloud-platform-envs",level:2},{value:"Git Hub repo envs",id:"git-hub-repo-envs",level:2}],d={toc:u};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Environment variables are kept in .env files."),(0,a.kt)("p",null,"There are three environments: development, test, and production. Each has its own environment file ",(0,a.kt)("inlineCode",{parentName:"p"},".env.development"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".env.test"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},".env.production"),", respectively. The ",(0,a.kt)("inlineCode",{parentName:"p"},".env.development")," file is used for local development, the ",(0,a.kt)("inlineCode",{parentName:"p"},".env.test")," for unit tests (in a CI environment), and the ",(0,a.kt)("inlineCode",{parentName:"p"},".env.production")," file is used for deploying RAD Lab UI."),(0,a.kt)("p",null,"If you have sensitive environment variables that you want to keep out of source control, place them in the ",(0,a.kt)("inlineCode",{parentName:"p"},".env.development.local"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".env.test.local"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},".env.production.local")," files. All ",(0,a.kt)("inlineCode",{parentName:"p"},".env*.local")," files are kept out of source control, but are merged in with their non-local variants when developing, testing, or deploying."),(0,a.kt)("h2",{id:"firebase-envs"},"Firebase envs"),(0,a.kt)("p",null,"Firebase environment variables can be found in project settings section of your Firebase project console: ",(0,a.kt)("a",{parentName:"p",href:"https://console.firebase.google.com/%5Byour-project-id%5D"},"https://console.firebase.google.com/[your-project-id]")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_FIREBASE_PROJECT_ID")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_FIREBASE_APP_ID")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_FIREBASE_DATABASE_URL"))),(0,a.kt)("h2",{id:"google-cloud-platform-envs"},"Google Cloud Platform envs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_GCP_SERVICE_ACCOUNT_EMAIL")," - Service account id of your project"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_GCP_PROJECT_ID")," - Google Cloud project id"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_GCP_ORGANIZATION")," - Domain name of your organization"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_PUBSUB_DEPLOYMENTS_TOPIC")," - Topic created via terraform to create and update deployment"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_PUBSUB_DEPLOYMENTS_DELETE_TOPIC")," - Topic created via terraform to delete deployment"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_RAD_LAB_ADMIN_GROUP")," - Users needs to be added to admin group created on google admin and mention the group name here"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_RAD_LAB_USER_GROUP")," - Users needs to be added to user group created on google admin and mention the group name here"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MODULE_DEPLOYMENT_BUCKET_NAME")," - Google Cloud bucket name created via terraform"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_NOTIFICATION_TOPIC")," - Topic created for notifications"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_NOTIFICATION_SUB")," - Subscription created for notifications"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NEXT_PUBLIC_GIT_API_URL")," - Url of the public repo to pull the deployment modules")),(0,a.kt)("h2",{id:"git-hub-repo-envs"},"Git Hub repo envs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GIT_TOKEN_SECRET_KEY_NAME")," - Secret key name of Github Personal Access Token used when setting up RAD Lab UI")))}s.isMDXComponent=!0}}]);