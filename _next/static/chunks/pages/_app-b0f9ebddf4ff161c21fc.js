_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"+tsZ":function(e,t,n){e.exports={Footer:"Footer_Footer__2NYGT"}},0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t);var r=n("nKUr"),c=(n("zPlV"),n("q1tI")),a=n("20a2"),i=n("A8lN"),s=n("YFqc"),l=n.n(s),d=n("fVDl"),u=n.n(d),p=n("Aiso"),f=n.n(p),h=function(e){var t;return Object(r.jsxs)("div",{className:u.a.Search,children:[Object(r.jsx)("form",{onSubmit:e.getSearch,children:Object(r.jsx)("input",{id:"autocomplete",type:"text",placeholder:"Search",onChange:e.updateSearch,value:e.search,autoComplete:"off"})}),Object(r.jsx)("button",(t={onClick:e.clicked},o(t,"onClick",e.getLocation),o(t,"children",Object(r.jsx)(f.a,{src:"/location.svg",width:50,height:50})),t)),Object(r.jsxs)("span",{className:u.a.Switcher,children:[Object(r.jsx)("input",{type:"checkbox",id:"switcher-1",onChange:e.updateCheckbox}),Object(r.jsx)("label",{htmlFor:"switcher-1"})]})]})},b=n("JxBt"),g=n.n(b),j=n("jxnz"),O=n.n(j),y=function(e){return Object(r.jsx)("div",{className:O.a.DropdownItem,lat:e.lat,lng:e.lng,children:Object(r.jsxs)("button",{onClick:function(){return e.clicked(e.lat,e.lng)},children:[Object(r.jsx)("div",{children:e.flag}),Object(r.jsx)("div",{children:Object(r.jsx)("strong",{children:e.city})}),Object(r.jsxs)("div",{children:[e.country,", ",e.continent]})]})})},w=n("3q9o"),x=function(e){Object(c.useContext)(i.a).setDropdownLoading;var t=0!=e.dropdownItems?e.dropdownItems.map((function(t){var n=t.components._type;if("city"==n||"village"==n||"town"==n)return void 0==t.components.city&&void 0==t.components.village?n="town":void 0==t.components.village&&void 0==t.components.town?n="city":void 0==t.components.city&&void 0==t.components.town&&(n="village"),Object(r.jsx)(y,{flag:t.annotations.flag,city:t.components[n],country:t.components.country,continent:t.components.continent,lat:t.geometry.lat,lng:t.geometry.lng,clicked:e.clicked},t.annotations.Maidenhead)})):Object(r.jsx)("div",{children:"Not Found"}),n=e.dropdownLoading?Object(r.jsx)(w.a,{}):t;return Object(r.jsx)("div",{className:g.a.Dropdown,children:n})},v=n("fzO5"),m=n.n(v),_=function(e){var t=""!=e.query?Object(r.jsx)(x,{dropdownItems:e.dropdownItems,clicked:e.clicked,dropdownLoading:e.dropdownLoading}):"";return Object(r.jsxs)("header",{className:m.a.Header,children:[Object(r.jsx)(l.a,{href:"/",children:Object(r.jsx)("a",{className:m.a.Logo,children:"Logo"})}),Object(r.jsx)(h,{getLocation:e.getLocation,updateSearch:e.updateSearch,search:e.search,getSearch:e.getSearch,updateCheckbox:e.updateCheckbox}),t]})},k=n("+tsZ"),S=n.n(k),E=function(){return Object(r.jsx)("footer",{className:S.a.Footer,children:Object(r.jsx)("a",{target:"_blank",href:"https://www.darksky.net",children:"Powered by DarkSky"})})},L=n("pjjk"),C=n.n(L),D=function(){return Object(r.jsx)("div",{className:C.a.Splash,children:Object(r.jsx)(f.a,{src:"/logo.png",width:200,height:200})})},F=n("WnY7"),P=n.n(F);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=function(e){var t=e.children,n=Object(c.useContext)(i.a),o=n.setLong,s=n.setLat,l=n.search,d=n.setSearch,u=(n.location,n.query),p=n.setQuery,f=n.getUserLocation,h=n.updateSearch,b=n.getSearch,g=n.dropdownItems,j=n.dropdownLoading,O=n.setDropdownLoading,y=n.updateCheckbox,w=(n.weather,n.classBackground),x=(n.setClassBackground,n.setBackgroundStyle),v=n.backgroundStyle,m=n.loading,k=Object(a.useRouter)(),S=m?Object(r.jsx)(D,{}):"";Object(c.useEffect)((function(){L(w)}),[w]);var L=function(e){switch(e){case"clear-day":x((function(e){return A(A({},e),{},{color:"#B2FEFA",gradient:"linear-gradient(to top, #0ED2F7, #B2FEFA)"})}));break;case"clear-night":x((function(e){return A(A({},e),{},{color:"#232526",gradient:"linear-gradient(to top, #414345, #232526)"})}));break;case"rain":x((function(e){return A(A({},e),{},{color:"#314755",gradient:"linear-gradient(to top, #26a0da, #314755)"})}));break;case"snow":x((function(e){return A(A({},e),{},{color:"#ADA996",gradient:"linear-gradient(to top, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)"})}));break;case"sleet":x((function(e){return A(A({},e),{},{color:"#0575E6",gradient:"linear-gradient(to top, #021B79, #0575E6)"})}));break;case"wind":x((function(e){return A(A({},e),{},{color:"#acb6e5",gradient:"linear-gradient(to top, #86fde8, #acb6e5)"})}));break;case"fog":x((function(e){return A(A({},e),{},{color:"#ECE9E6",gradient:"linear-gradient(to top, #FFFFFF, #ECE9E6)"})}));break;case"cloudy":case"partly-cloudy-day":x((function(e){return A(A({},e),{},{color:"#4CA1AF",gradient:"linear-gradient(to top, #C4E0E5, #4CA1AF)"})}));break;case"partly-cloudy-night":x((function(e){return A(A({},e),{},{color:"#B2FEFA",gradient:"linear-gradient(to top, #243B55, #141E30)"})}));break;case"hail":x((function(e){return A(A({},e),{},{color:"#F0F2F0",gradient:"linear-gradient(to top, #000C40, #F0F2F0)"})}));break;case"thunderstorm":x((function(e){return A(A({},e),{},{color:"#C33764",gradient:"linear-gradient(to top, #1D2671, #C33764)"})}));break;case"tornado":x((function(e){return A(A({},e),{},{color:"#bdc3c7",gradient:"linear-gradient(to top, #2c3e50, #bdc3c7)"})}));break;default:return}};return Object(r.jsxs)("div",{className:P.a.Layout,style:{backgroundColor:v.color,background:v.gradient,transition:"all .5s"},children:[S,Object(r.jsxs)("div",{style:{maxWidth:"1024px",margin:"0 auto"},children:[Object(r.jsx)(_,{getLocation:f,updateSearch:h,search:l,getSearch:b,dropdownItems:g,clicked:function(e,t){o(t),s(e),p(""),d(""),k.push("/")},dropdownLoading:j,setDropdownLoading:O,query:u,updateCheckbox:y}),t,Object(r.jsx)(E,{})]})]})};function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps;return Object(r.jsx)(i.b,{children:Object(r.jsx)(B,{children:Object(r.jsx)(t,H({},n))})})}},"20a2":function(e,t,n){e.exports=n("nOHt")},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},JxBt:function(e,t,n){e.exports={Dropdown:"Dropdown_Dropdown__wCfqJ"}},WnY7:function(e,t,n){e.exports={Layout:"Layout_Layout__30owZ"}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var o=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var c=r(n("q1tI")),a=n("elyg"),i=n("nOHt"),s=n("vNVm"),l={};function d(e,t,n,o){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;l[t+"%"+n+(r?"%"+r:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),r=n&&n.pathname||"/",u=c.default.useMemo((function(){var t=(0,a.resolveHref)(r,e.href,!0),n=o(t,2),c=n[0],i=n[1];return{href:c,as:e.as?(0,a.resolveHref)(r,e.as):i||c}}),[r,e.href,e.as]),p=u.href,f=u.as,h=e.children,b=e.replace,g=e.shallow,j=e.scroll,O=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var y=c.Children.only(h),w=y&&"object"===typeof y&&y.ref,x=(0,s.useIntersection)({rootMargin:"200px"}),v=o(x,2),m=v[0],_=v[1],k=c.default.useCallback((function(e){m(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,m]);(0,c.useEffect)((function(){var e=_&&t&&(0,a.isLocalURL)(p),o="undefined"!==typeof O?O:n&&n.locale,r=l[p+"%"+f+(o?"%"+o:"")];e&&!r&&d(n,p,f,{locale:o})}),[f,p,_,O,t,n]);var S={ref:k,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,c,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=o.indexOf("#")<0),t[r?"replace":"push"](n,o,{shallow:c,locale:s,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,p,f,b,g,j,O)},onMouseEnter:function(e){(0,a.isLocalURL)(p)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),d(n,p,f,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var E="undefined"!==typeof O?O:n&&n.locale,L=(0,a.getDomainLocale)(f,E,n&&n.locales,n&&n.domainLocales);S.href=L||(0,a.addBasePath)((0,a.addLocale)(f,E,n&&n.defaultLocale))}return c.default.cloneElement(y,S)};t.default=u},fVDl:function(e,t,n){e.exports={Search:"Search_Search__16I7A",Switcher:"Search_Switcher__3NxoX","Switcher-2":"Search_Switcher-2__3q6Jt","turn-off":"Search_turn-off__2HqPM","turn-on":"Search_turn-on__1rl1z"}},fzO5:function(e,t,n){e.exports={Header:"Header_Header__37Gwn",Logo:"Header_Logo__1vYL0"}},jxnz:function(e,t,n){e.exports={DropdownItem:"DropdownItem_DropdownItem__3e4DV"}},pjjk:function(e,t,n){e.exports={Splash:"Splash_Splash__1YwOR"}},zPlV:function(e,t,n){}},[[0,0,1,2,3]]]);