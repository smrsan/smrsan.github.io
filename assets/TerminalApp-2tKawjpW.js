import{e as h_,f as d_,g as A_,j as F,S as C_,a as N_,P as U}from"./index-D5iBF_fk.js";import{r as k}from"./react-vendor-Cf2IDCUb.js";import{g as K,n as I_,s as u_,r as T_}from"./fsStore-MKV6d-u8.js";const S_={FULL_WIDTH:0,FITTING:1,SMUSHING:2,CONTROLLED_SMUSHING:3};class m_{constructor(){this.comment="",this.numChars=0,this.options={}}}const E_=["1Row","3-D","3D Diagonal","3D-ASCII","3x5","4Max","5 Line Oblique","AMC 3 Line","AMC 3 Liv1","AMC AAA01","AMC Neko","AMC Razor","AMC Razor2","AMC Slash","AMC Slider","AMC Thin","AMC Tubes","AMC Untitled","ANSI Compact","ANSI Regular","ANSI Shadow","ASCII 12","ASCII 9","ASCII New Roman","Acrobatic","Alligator","Alligator2","Alpha","Alphabet","Arrows","Avatar","B1FF","Babyface Lame","Babyface Leet","Banner","Banner3-D","Banner3","Banner4","Barbwire","Basic","Bear","Bell","Benjamin","Big ASCII 12","Big ASCII 9","Big Chief","Big Money-ne","Big Money-nw","Big Money-se","Big Money-sw","Big Mono 12","Big Mono 9","Big","Bigfig","Binary","Block","Blocks","Bloody","BlurVision ASCII","Bolger","Braced","Bright","Broadway KB","Broadway","Bubble","Bulbhead","Caligraphy","Caligraphy2","Calvin S","Cards","Catwalk","Chiseled","Chunky","Circle","Classy","Coder Mini","Coinstak","Cola","Colossal","Computer","Contessa","Contrast","Cosmike","Cosmike2","Crawford","Crawford2","Crazy","Cricket","Cursive","Cyberlarge","Cybermedium","Cybersmall","Cygnet","DANC4","DOS Rebel","DWhistled","Dancing Font","Decimal","Def Leppard","Delta Corps Priest 1","DiamFont","Diamond","Diet Cola","Digital","Doh","Doom","Dot Matrix","Double Shorts","Double","Dr Pepper","Efti Chess","Efti Font","Efti Italic","Efti Piti","Efti Robot","Efti Wall","Efti Water","Electronic","Elite","Emboss 2","Emboss","Epic","Fender","Filter","Fire Font-k","Fire Font-s","Flipped","Flower Power","Font Font","Four Tops","Fraktur","Fun Face","Fun Faces","Future Smooth","Future Thin","Future","Fuzzy","Georgi16","Georgia11","Ghost","Ghoulish","Glenyn","Goofy","Gothic","Graceful","Gradient","Graffiti","Greek","Heart Left","Heart Right","Henry 3D","Hex","Hieroglyphs","Hollywood","Horizontal Left","Horizontal Right","ICL-1900","Impossible","Invita","Isometric1","Isometric2","Isometric3","Isometric4","Italic","Ivrit","JS Block Letters","JS Bracket Letters","JS Capital Curves","JS Cursive","JS Stick Letters","Jacky","Jazmine","Jerusalem","Katakana","Kban","Keyboard","Knob","Konto Slant","Konto","LCD","Larry 3D 2","Larry 3D","Lean","Letter","Letters","Lil Devil","Line Blocks","Linux","Lockergnome","Madrid","Marquee","Maxfour","Merlin1","Merlin2","Mike","Mini","Mirror","Mnemonic","Modular","Mono 12","Mono 9","Morse","Morse2","Moscow","Mshebrew210","Muzzle","NScript","NT Greek","NV Script","Nancyj-Fancy","Nancyj-Improved","Nancyj-Underlined","Nancyj","Nipples","O8","OS2","Octal","Ogre","Old Banner","Pagga","Patorjk's Cheese","Patorjk-HeX","Pawp","Peaks Slant","Peaks","Pebbles","Pepper","Poison","Puffy","Puzzle","Pyramid","Rammstein","Rebel","Rectangles","Red Phoenix","Relief","Relief2","Reverse","Roman","Rot13","Rotated","Rounded","Rowan Cap","Rozzo","RubiFont","Runic","Runyc","S Blood","SL Script","Santa Clara","Script","Serifcap","Shaded Blocky","Shadow","Shimrod","Short","Slant Relief","Slant","Slide","Small ASCII 12","Small ASCII 9","Small Block","Small Braille","Small Caps","Small Isometric1","Small Keyboard","Small Mono 12","Small Mono 9","Small Poison","Small Script","Small Shadow","Small Slant","Small Tengwar","Small","Soft","Speed","Spliff","Stacey","Stampate","Stampatello","Standard","Star Strips","Star Wars","Stellar","Stforek","Stick Letters","Stop","Straight","Stronger Than All","Sub-Zero","Swamp Land","Swan","Sweet","THIS","Tanja","Tengwar","Term","Terrace","Test1","The Edge","Thick","Thin","Thorned","Three Point","Ticks Slant","Ticks","Tiles","Tinker-Toy","Tmplr","Tombstone","Train","Trek","Tsalagi","Tubular","Twisted","Two Point","USA Flag","Univers","Upside Down Text","Varsity","Wavescape","Wavy","Weird","Wet Letter","Whimsy","WideTerm","Wow","miniwi"],R_={"ANSI-Compact":"ANSI Compact"},t_=u=>R_[u]?R_[u]:u;function g_(u){return/[.*+?^${}()|[\]\\]/.test(u)?"\\"+u:u}const c_=(()=>{const{FULL_WIDTH:u=0,FITTING:p,SMUSHING:N,CONTROLLED_SMUSHING:O}=S_,m={},S={font:"Standard",fontPath:"./fonts",fetchFontIfMissing:!0};function H(t,n,_){const e=g_(t.trim().slice(-1))||"@",r=n===_-1?new RegExp(e+e+"?\\s*$"):new RegExp(e+"\\s*$");return t.replace(r,"")}function D(t=-1,n=null){let _={},e,r=[[16384,"vLayout",N],[8192,"vLayout",p],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",N],[64,"hLayout",p],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];e=n!==null?n:t;for(const[i,T,a]of r)e>=i?(e-=i,_[T]===void 0&&(_[T]=a)):T!=="vLayout"&&T!=="hLayout"&&(_[T]=!1);return typeof _.hLayout>"u"?t===0?_.hLayout=p:t===-1?_.hLayout=u:_.hRule1||_.hRule2||_.hRule3||_.hRule4||_.hRule5||_.hRule6?_.hLayout=O:_.hLayout=N:_.hLayout===N&&(_.hRule1||_.hRule2||_.hRule3||_.hRule4||_.hRule5||_.hRule6)&&(_.hLayout=O),typeof _.vLayout>"u"?_.vRule1||_.vRule2||_.vRule3||_.vRule4||_.vRule5?_.vLayout=O:_.vLayout=u:_.vLayout===N&&(_.vRule1||_.vRule2||_.vRule3||_.vRule4||_.vRule5)&&(_.vLayout=O),_}function J(t,n,_=""){return t===n&&t!==_?t:!1}function B(t,n){let _="|/\\[]{}()<>";if(t==="_"){if(_.indexOf(n)!==-1)return n}else if(n==="_"&&_.indexOf(t)!==-1)return t;return!1}function Y(t,n){let _="| /\\ [] {} () <>",e=_.indexOf(t),r=_.indexOf(n);if(e!==-1&&r!==-1&&e!==r&&Math.abs(e-r)!==1){const i=Math.max(e,r),T=i+1;return _.substring(i,T)}return!1}function G(t,n){let _="[] {} ()",e=_.indexOf(t),r=_.indexOf(n);return e!==-1&&r!==-1&&Math.abs(e-r)<=1?"|":!1}function V(t,n){return{"/\\":"|","\\/":"Y","><":"X"}[t+n]||!1}function X(t,n,_=""){return t===_&&n===_?_:!1}function n_(t,n){return t===n?t:!1}function Z(t,n){return B(t,n)}function r_(t,n){return Y(t,n)}function Q(t,n){return t==="-"&&n==="_"||t==="_"&&n==="-"?"=":!1}function q(t,n){return t==="|"&&n==="|"?"|":!1}function o(t,n,_){return n===" "||n===""||n===_&&t!==" "?t:n}function s_(t,n,_){if(_.fittingRules&&_.fittingRules.vLayout===u)return"invalid";let e,r=Math.min(t.length,n.length),i,T,a=!1,s;if(r===0)return"invalid";for(e=0;e<r;e++)if(i=t.substring(e,e+1),T=n.substring(e,e+1),i!==" "&&T!==" "){if(_.fittingRules&&_.fittingRules.vLayout===p)return"invalid";if(_.fittingRules&&_.fittingRules.vLayout===N)return"end";if(q(i,T)){a=a||!1;continue}if(s=!1,s=_.fittingRules&&_.fittingRules.vRule1?n_(i,T):s,s=!s&&_.fittingRules&&_.fittingRules.vRule2?Z(i,T):s,s=!s&&_.fittingRules&&_.fittingRules.vRule3?r_(i,T):s,s=!s&&_.fittingRules&&_.fittingRules.vRule4?Q(i,T):s,a=!0,!s)return"invalid"}return a?"end":"valid"}function L_(t,n,_){let e=t.length,r=t.length,i,T,a,s=1,L,E,A;for(;s<=e;){for(i=t.slice(Math.max(0,r-s),r),T=n.slice(0,Math.min(e,s)),a=T.length,A="",L=0;L<a;L++)if(E=s_(i[L],T[L],_),E==="end")A=E;else if(E==="invalid"){A=E;break}else A===""&&(A="valid");if(A==="invalid"){s--;break}if(A==="end")break;A==="valid"&&s++}return Math.min(e,s)}function l_(t,n,_){let e,r=Math.min(t.length,n.length),i,T,a="",s;const L=_.fittingRules||{};for(e=0;e<r;e++)i=t.substring(e,e+1),T=n.substring(e,e+1),i!==" "&&T!==" "?L.vLayout===p||L.vLayout===N?a+=o(i,T):(s=!1,s=L.vRule5?q(i,T):s,s=!s&&L.vRule1?n_(i,T):s,s=!s&&L.vRule2?Z(i,T):s,s=!s&&L.vRule3?r_(i,T):s,s=!s&&L.vRule4?Q(i,T):s,a+=s):a+=o(i,T);return a}function o_(t,n,_,e){let r=t.length,i=n.length,T=t.slice(0,Math.max(0,r-_)),a=t.slice(Math.max(0,r-_),r),s=n.slice(0,Math.min(_,i)),L,E,A,I=[],R;for(E=a.length,L=0;L<E;L++)L>=i?A=a[L]:A=l_(a[L],s[L],e),I.push(A);return R=n.slice(Math.min(_,i),i),[...T,...I,...R]}function __(t,n){const _=" ".repeat(n);return t.map(e=>e+_)}function i_(t,n,_){let e=t[0].length,r=n[0].length,i;return e>r?n=__(n,e-r):r>e&&(t=__(t,r-e)),i=L_(t,n,_),o_(t,n,i,_)}function l(t,n,_){const e=_.fittingRules||{};if(e.hLayout===u)return 0;let r,i=t.length,T=n.length,a=i,s=1,L=!1,E,A,I,R;if(i===0)return 0;_:for(;s<=a;){const v=i-s;for(E=t.substring(v,v+s),A=n.substring(0,Math.min(s,T)),r=0;r<Math.min(s,T);r++)if(I=E.substring(r,r+1),R=A.substring(r,r+1),I!==" "&&R!==" "){if(e.hLayout===p){s=s-1;break _}else if(e.hLayout===N){(I===_.hardBlank||R===_.hardBlank)&&(s=s-1);break _}else if(L=!0,!(e.hRule1&&J(I,R,_.hardBlank)||e.hRule2&&B(I,R)||e.hRule3&&Y(I,R)||e.hRule4&&G(I,R)||e.hRule5&&V(I,R)||e.hRule6&&X(I,R,_.hardBlank))){s=s-1;break _}}if(L)break;s++}return Math.min(a,s)}function c(t,n,_,e){let r,i,T=[],a,s,L,E,A,I,R,v;const W=e.fittingRules||{};if(typeof e.height!="number")throw new Error("height is not defined.");for(r=0;r<e.height;r++){R=t[r],v=n[r],A=R.length,I=v.length,a=A-_,s=R.slice(0,Math.max(0,a)),L="";const e_=Math.max(0,A-_);let b=R.substring(e_,e_+_),z=v.substring(0,Math.min(_,I));for(i=0;i<_;i++){let P=i<A?b.substring(i,i+1):" ",y=i<I?z.substring(i,i+1):" ";if(P!==" "&&y!==" ")if(W.hLayout===p||W.hLayout===N)L+=o(P,y,e.hardBlank);else{const f_=W.hRule1&&J(P,y,e.hardBlank)||W.hRule2&&B(P,y)||W.hRule3&&Y(P,y)||W.hRule4&&G(P,y)||W.hRule5&&V(P,y)||W.hRule6&&X(P,y,e.hardBlank)||o(P,y,e.hardBlank);L+=f_}else L+=o(P,y,e.hardBlank)}_>=I?E="":E=v.substring(_,_+Math.max(0,I-_)),T[r]=s+L+E}return T}function C(t){return new Array(t).fill("")}const w=function(t){return Math.max(...t.map(n=>n.length))};function x(t,n,_){return t.reduce(function(e,r){return c(e,r.fig,r.overlap||0,_)},C(n))}function d(t,n,_){for(let e=t.length-1;e>0;e--){const r=x(t.slice(0,e),n,_);if(w(r)<=_.width)return{outputFigText:r,chars:t.slice(e)}}return{outputFigText:C(n),chars:t}}function j(t,n,_){let e,r,i=0,T,a,s,L=_.height,E=[],A,I={chars:[],overlap:i},R=[],v,W,e_,b,z;if(typeof L!="number")throw new Error("height is not defined.");a=C(L);const P=_.fittingRules||{};for(_.printDirection===1&&(t=t.split("").reverse().join("")),s=t.length,e=0;e<s;e++)if(v=t.substring(e,e+1),W=v.match(/\s/),r=n[v.charCodeAt(0)],b=null,r){if(P.hLayout!==u){for(i=1e4,T=0;T<L;T++)i=Math.min(i,l(a[T],r[T],_));i=i===1e4?0:i}if(_.width>0&&(_.whitespaceBreak?(e_=x(I.chars.concat([{fig:r,overlap:i}]),L,_),b=x(R.concat([{fig:e_,overlap:I.overlap}]),L,_),A=w(b)):(b=c(a,r,i,_),A=w(b)),A>=_.width&&e>0&&(_.whitespaceBreak?(a=x(R.slice(0,-1),L,_),R.length>1&&(E.push(a),a=C(L)),R=[]):(E.push(a),a=C(L)))),_.width>0&&_.whitespaceBreak&&((!W||e===s-1)&&I.chars.push({fig:r,overlap:i}),W||e===s-1)){for(z=null;b=x(I.chars,L,_),A=w(b),A>=_.width;)z=d(I.chars,L,_),I={chars:z.chars},E.push(z.outputFigText);A>0&&(z?R.push({fig:b,overlap:1}):R.push({fig:b,overlap:I.overlap})),W&&(R.push({fig:r,overlap:i}),a=C(L)),e===s-1&&(a=x(R,L,_)),I={chars:[],overlap:i};continue}a=c(a,r,i,_)}return w(a)>0&&E.push(a),_.showHardBlanks||E.forEach(function(y){for(s=y.length,T=0;T<s;T++)y[T]=y[T].replace(new RegExp("\\"+_.hardBlank,"g")," ")}),t===""&&E.length===0&&E.push(new Array(L).fill("")),E}const f=function(t,n){let _;const e=n.fittingRules||{};if(t==="default")_={hLayout:e.hLayout,hRule1:e.hRule1,hRule2:e.hRule2,hRule3:e.hRule3,hRule4:e.hRule4,hRule5:e.hRule5,hRule6:e.hRule6};else if(t==="full")_={hLayout:u,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(t==="fitted")_={hLayout:p,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(t==="controlled smushing")_={hLayout:O,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(t==="universal smushing")_={hLayout:N,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return _},M=function(t,n){let _={};const e=n.fittingRules||{};if(t==="default")_={vLayout:e.vLayout,vRule1:e.vRule1,vRule2:e.vRule2,vRule3:e.vRule3,vRule4:e.vRule4,vRule5:e.vRule5};else if(t==="full")_={vLayout:u,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(t==="fitted")_={vLayout:p,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(t==="controlled smushing")_={vLayout:O,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(t==="universal smushing")_={vLayout:N,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return _},g=function(t,n,_){_=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`);const e=t_(t);let r=_.split(`
`),i=[],T,a,s;for(a=r.length,T=0;T<a;T++)i=i.concat(j(r[T],m[e],n));for(a=i.length,s=i[0],T=1;T<a;T++)s=i_(s,i[T],n);return s?s.join(`
`):""};function $(t,n){let _;if(typeof structuredClone<"u"?_=structuredClone(t):_=JSON.parse(JSON.stringify(t)),_.showHardBlanks=n.showHardBlanks||!1,_.width=n.width||-1,_.whitespaceBreak=n.whitespaceBreak||!1,n.horizontalLayout){const e=f(n.horizontalLayout,t);e&&Object.assign(_.fittingRules,e)}if(n.verticalLayout){const e=M(n.verticalLayout,t);e&&Object.assign(_.fittingRules,e)}return _.printDirection=n.printDirection!==null&&n.printDirection!==void 0?n.printDirection:t.printDirection,_}const h=async function(t,n,_){return h.text(t,n,_)};return h.text=async function(t,n,_){t=t+"";let e,r;typeof n=="function"?(r=n,e={font:S.font}):typeof n=="string"?(e={font:n},r=_):n?(e=n,r=_):(e={font:S.font},r=_);const i=e.font||S.font;try{const T=await h.loadFont(i),a=T?g(i,$(T,e),t):"";return r&&r(null,a),a}catch(T){const a=T instanceof Error?T:new Error(String(T));if(r)return r(a),"";throw a}},h.textSync=function(t,n){t=t+"",typeof n=="string"?n={font:n}:n=n||{};const _=n.font||S.font;let e=$(h.loadFontSync(_),n);return g(_,e,t)},h.metadata=async function(t,n){t=t+"";try{const _=await h.loadFont(t);if(!_)throw new Error("Error loading font.");const e=t_(t),r=m[e]||{},i=[_,r.comment||""];return n&&n(null,_,r.comment),i}catch(_){const e=_ instanceof Error?_:new Error(String(_));if(n)return n(e),null;throw e}},h.defaults=function(t){return t&&typeof t=="object"&&Object.assign(S,t),typeof structuredClone<"u"?structuredClone(S):JSON.parse(JSON.stringify(S))},h.parseFont=function(t,n,_=!0){if(m[t]&&!_)return m[t].options;n=n.replace(/\r\n/g,`
`).replace(/\r/g,`
`);const e=new m_,r=n.split(`
`),i=r.shift();if(!i)throw new Error("Invalid font file: missing header");const T=i.split(" "),a={hardBlank:T[0].substring(5,6),height:parseInt(T[1],10),baseline:parseInt(T[2],10),maxLength:parseInt(T[3],10),oldLayout:parseInt(T[4],10),numCommentLines:parseInt(T[5],10),printDirection:T[6]?parseInt(T[6],10):0,fullLayout:T[7]?parseInt(T[7],10):null,codeTagCount:T[8]?parseInt(T[8],10):null};if((a.hardBlank||"").length!==1||[a.height,a.baseline,a.maxLength,a.oldLayout,a.numCommentLines].some(E=>E==null||isNaN(E)))throw new Error("FIGlet header contains invalid values.");if(a.height==null||a.numCommentLines==null)throw new Error("FIGlet header contains invalid values.");a.fittingRules=D(a.oldLayout,a.fullLayout),e.options=a;const L=[];for(let E=32;E<=126;E++)L.push(E);if(L.push(196,214,220,228,246,252,223),r.length<a.numCommentLines+a.height*L.length)throw new Error(`FIGlet file is missing data. Line length: ${r.length}. Comment lines: ${a.numCommentLines}. Height: ${a.height}. Num chars: ${L.length}.`);for(e.comment=r.splice(0,a.numCommentLines).join(`
`),e.numChars=0;r.length>0&&e.numChars<L.length;){const E=L[e.numChars];e[E]=r.splice(0,a.height);for(let A=0;A<a.height;A++)typeof e[E][A]>"u"?e[E][A]="":e[E][A]=H(e[E][A],A,a.height);e.numChars++}for(;r.length>0;){const E=r.shift();if(!E||E.trim()==="")break;let A=E.split(" ")[0],I;if(/^-?0[xX][0-9a-fA-F]+$/.test(A))I=parseInt(A,16);else if(/^-?0[0-7]+$/.test(A))I=parseInt(A,8);else if(/^-?[0-9]+$/.test(A))I=parseInt(A,10);else throw new Error(`Error parsing data. Invalid data: ${A}`);if(I===-1||I<-2147483648||I>2147483647){const R=I===-1?"The char code -1 is not permitted.":`The char code cannot be ${I<-2147483648?"less than -2147483648":"greater than 2147483647"}.`;throw new Error(`Error parsing data. ${R}`)}e[I]=r.splice(0,a.height);for(let R=0;R<a.height;R++)typeof e[I][R]>"u"?e[I][R]="":e[I][R]=H(e[I][R],R,a.height);e.numChars++}return m[t]=e,a},h.loadedFonts=()=>Object.keys(m),h.clearLoadedFonts=()=>{Object.keys(m).forEach(t=>{delete m[t]})},h.loadFont=async function(t,n){const _=t_(t);if(m[_]){const e=m[_].options;return n&&n(null,e),Promise.resolve(e)}try{if(!S.fetchFontIfMissing)throw new Error(`Font is not loaded: ${_}`);const e=await fetch(`${S.fontPath}/${_}.flf`);if(!e.ok)throw new Error(`Network response was not ok: ${e.status}`);const r=await e.text(),i=h.parseFont(_,r);return n&&n(null,i),i}catch(e){const r=e instanceof Error?e:new Error(String(e));if(n)return n(r),null;throw r}},h.loadFontSync=function(t){const n=t_(t);if(m[n])return m[n].options;throw new Error("Synchronous font loading is not implemented for the browser, it will only work for fonts already loaded.")},h.preloadFonts=async function(t,n){try{for(const _ of t){const e=t_(_),r=await fetch(`${S.fontPath}/${e}.flf`);if(!r.ok)throw new Error(`Failed to preload fonts. Error fetching font: ${e}, status code: ${r.statusText}`);const i=await r.text();h.parseFont(e,i)}n&&n()}catch(_){const e=_ instanceof Error?_:new Error(String(_));if(n){n(e);return}throw _}},h.fonts=function(t){return new Promise(function(n,_){n(E_),t&&t(null,E_)})},h.fontsSync=function(){return E_},h.figFonts=m,h})(),p_=`flf2a$ 6 5 16 15 13 0 24463 229
Standard by Glenn Chappell & Ian Chai 3/93 -- based on Frank's .sig
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Modified for figlet 2.2 by John Cowan <cowan@ccil.org>
  to add Latin-{2,3,4,5} support (Unicode U+0100-017F).
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

Font modified May 20, 2012 by patorjk to add the 0xCA0 character
 $@
 $@
 $@
 $@
 $@
 $@@
  _ @
 | |@
 | |@
 |_|@
 (_)@
    @@
  _ _ @
 ( | )@
  V V @
   $  @
   $  @
      @@
    _  _   @
  _| || |_ @
 |_  ..  _|@
 |_      _|@
   |_||_|  @
           @@
   _  @
  | | @
 / __)@
 \\__ \\@
 (   /@
  |_| @@
  _  __@
 (_)/ /@
   / / @
  / /_ @
 /_/(_)@
       @@
   ___   @
  ( _ )  @
  / _ \\/\\@
 | (_>  <@
  \\___/\\/@
         @@
  _ @
 ( )@
 |/ @
  $ @
  $ @
    @@
   __@
  / /@
 | | @
 | | @
 | | @
  \\_\\@@
 __  @
 \\ \\ @
  | |@
  | |@
  | |@
 /_/ @@
       @
 __/\\__@
 \\    /@
 /_  _\\@
   \\/  @
       @@
        @
    _   @
  _| |_ @
 |_   _|@
   |_|  @
        @@
    @
    @
    @
  _ @
 ( )@
 |/ @@
        @
        @
  _____ @
 |_____|@
    $   @
        @@
    @
    @
    @
  _ @
 (_)@
    @@
     __@
    / /@
   / / @
  / /  @
 /_/   @
       @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
  _ @
 / |@
 | |@
 | |@
 |_|@
    @@
  ____  @
 |___ \\ @
   __) |@
  / __/ @
 |_____|@
        @@
  _____ @
 |___ / @
   |_ \\ @
  ___) |@
 |____/ @
        @@
  _  _   @
 | || |  @
 | || |_ @
 |__   _|@
    |_|  @
         @@
  ____  @
 | ___| @
 |___ \\ @
  ___) |@
 |____/ @
        @@
   __   @
  / /_  @
 | '_ \\ @
 | (_) |@
  \\___/ @
        @@
  _____ @
 |___  |@
    / / @
   / /  @
  /_/   @
        @@
   ___  @
  ( _ ) @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
   ___  @
  / _ \\ @
 | (_) |@
  \\__, |@
    /_/ @
        @@
    @
  _ @
 (_)@
  _ @
 (_)@
    @@
    @
  _ @
 (_)@
  _ @
 ( )@
 |/ @@
   __@
  / /@
 / / @
 \\ \\ @
  \\_\\@
     @@
        @
  _____ @
 |_____|@
 |_____|@
    $   @
        @@
 __  @
 \\ \\ @
  \\ \\@
  / /@
 /_/ @
     @@
  ___ @
 |__ \\@
   / /@
  |_| @
  (_) @
      @@
    ____  @
   / __ \\ @
  / / _\` |@
 | | (_| |@
  \\ \\__,_|@
   \\____/ @@
     _    @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @@
  ____  @
 | __ ) @
 |  _ \\ @
 | |_) |@
 |____/ @
        @@
   ____ @
  / ___|@
 | |    @
 | |___ @
  \\____|@
        @@
  ____  @
 |  _ \\ @
 | | | |@
 | |_| |@
 |____/ @
        @@
  _____ @
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @@
  _____ @
 |  ___|@
 | |_   @
 |  _|  @
 |_|    @
        @@
   ____ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
  _   _ @
 | | | |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
  ___ @
 |_ _|@
  | | @
  | | @
 |___|@
      @@
      _ @
     | |@
  _  | |@
 | |_| |@
  \\___/ @
        @@
  _  __@
 | |/ /@
 | ' / @
 | . \\ @
 |_|\\_\\@
       @@
  _     @
 | |    @
 | |    @
 | |___ @
 |_____|@
        @@
  __  __ @
 |  \\/  |@
 | |\\/| |@
 | |  | |@
 |_|  |_|@
         @@
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  __/ @
 |_|    @
        @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\__\\_\\@
        @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
  ____  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
        @@
  _   _ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @@
 __     __@
 \\ \\   / /@
  \\ \\ / / @
   \\ V /  @
    \\_/   @
          @@
 __        __@
 \\ \\      / /@
  \\ \\ /\\ / / @
   \\ V  V /  @
    \\_/\\_/   @
             @@
 __  __@
 \\ \\/ /@
  \\  / @
  /  \\ @
 /_/\\_\\@
       @@
 __   __@
 \\ \\ / /@
  \\ V / @
   | |  @
   |_|  @
        @@
  _____@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
  __ @
 | _|@
 | | @
 | | @
 | | @
 |__|@@
 __    @
 \\ \\   @
  \\ \\  @
   \\ \\ @
    \\_\\@
       @@
  __ @
 |_ |@
  | |@
  | |@
  | |@
 |__|@@
  /\\ @
 |/\\|@
   $ @
   $ @
   $ @
     @@
        @
        @
        @
        @
  _____ @
 |_____|@@
  _ @
 ( )@
  \\|@
  $ @
  $ @
    @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
  _     @
 | |__  @
 | '_ \\ @
 | |_) |@
 |_.__/ @
        @@
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @@
      _ @
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @@
   __ @
  / _|@
 | |_ @
 |  _|@
 |_|  @
      @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
  _     @
 | |__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
  _ @
 (_)@
 | |@
 | |@
 |_|@
    @@
    _ @
   (_)@
   | |@
   | |@
  _/ |@
 |__/ @@
  _    @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
       @@
  _ @
 | |@
 | |@
 | |@
 |_|@
    @@
            @
  _ __ ___  @
 | '_ \` _ \\ @
 | | | | | |@
 |_| |_| |_|@
            @@
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
        @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
        @
  _ __  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 |_|    @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
     |_|@@
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
       @@
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
      @@
  _   @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @@
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
        @
 __   __@
 \\ \\ / /@
  \\ V / @
   \\_/  @
        @@
           @
 __      __@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @@
       @
 __  __@
 \\ \\/ /@
  >  < @
 /_/\\_\\@
       @@
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
      @
  ____@
 |_  /@
  / / @
 /___|@
      @@
    __@
   / /@
  | | @
 < <  @
  | | @
   \\_\\@@
  _ @
 | |@
 | |@
 | |@
 | |@
 |_|@@
 __   @
 \\ \\  @
  | | @
   > >@
  | | @
 /_/  @@
  /\\/|@
 |/\\/ @
   $  @
   $  @
   $  @
      @@
  _   _ @
 (_)_(_)@
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\___/ @
        @@
  _   _ @
 (_)_(_)@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
   ___ @
  / _ \\@
 | |/ /@
 | |\\ \\@
 | ||_/@
 |_|   @@
160  NO-BREAK SPACE
 $@
 $@
 $@
 $@
 $@
 $@@
161  INVERTED EXCLAMATION MARK
  _ @
 (_)@
 | |@
 | |@
 |_|@
    @@
162  CENT SIGN
    _  @
   | | @
  / __)@
 | (__ @
  \\   )@
   |_| @@
163  POUND SIGN
    ___  @
   / ,_\\ @
 _| |_   @
  | |___ @
 (_,____|@
         @@
164  CURRENCY SIGN
 /\\___/\\@
 \\  _  /@
 | (_) |@
 / ___ \\@
 \\/   \\/@
        @@
165  YEN SIGN
  __ __ @
  \\ V / @
 |__ __|@
 |__ __|@
   |_|  @
        @@
166  BROKEN BAR
  _ @
 | |@
 |_|@
  _ @
 | |@
 |_|@@
167  SECTION SIGN
    __ @
  _/ _)@
 / \\ \\ @
 \\ \\\\ \\@
  \\ \\_/@
 (__/  @@
168  DIAERESIS
  _   _ @
 (_) (_)@
  $   $ @
  $   $ @
  $   $ @
        @@
169  COPYRIGHT SIGN
    _____   @
   / ___ \\  @
  / / __| \\ @
 | | (__   |@
  \\ \\___| / @
   \\_____/  @@
170  FEMININE ORDINAL INDICATOR
  __ _ @
 / _\` |@
 \\__,_|@
 |____|@
    $  @
       @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
   ____@
  / / /@
 / / / @
 \\ \\ \\ @
  \\_\\_\\@
       @@
172  NOT SIGN
        @
  _____ @
 |___  |@
     |_|@
    $   @
        @@
173  SOFT HYPHEN
       @
       @
  ____ @
 |____|@
    $  @
       @@
174  REGISTERED SIGN
    _____   @
   / ___ \\  @
  / | _ \\ \\ @
 |  |   /  |@
  \\ |_|_\\ / @
   \\_____/  @@
175  MACRON
  _____ @
 |_____|@
    $   @
    $   @
    $   @
        @@
176  DEGREE SIGN
   __  @
  /  \\ @
 | () |@
  \\__/ @
    $  @
       @@
177  PLUS-MINUS SIGN
    _   @
  _| |_ @
 |_   _|@
  _|_|_ @
 |_____|@
        @@
178  SUPERSCRIPT TWO
  ___ @
 |_  )@
  / / @
 /___|@
   $  @
      @@
179  SUPERSCRIPT THREE
  ____@
 |__ /@
  |_ \\@
 |___/@
   $  @
      @@
180  ACUTE ACCENT
  __@
 /_/@
  $ @
  $ @
  $ @
    @@
181  MICRO SIGN
        @
  _   _ @
 | | | |@
 | |_| |@
 | ._,_|@
 |_|    @@
182  PILCROW SIGN
   _____ @
  /     |@
 | (| | |@
  \\__ | |@
    |_|_|@
         @@
183  MIDDLE DOT
    @
  _ @
 (_)@
  $ @
  $ @
    @@
184  CEDILLA
    @
    @
    @
    @
  _ @
 )_)@@
185  SUPERSCRIPT ONE
  _ @
 / |@
 | |@
 |_|@
  $ @
    @@
186  MASCULINE ORDINAL INDICATOR
  ___ @
 / _ \\@
 \\___/@
 |___|@
   $  @
      @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
 ____  @
 \\ \\ \\ @
  \\ \\ \\@
  / / /@
 /_/_/ @
       @@
188  VULGAR FRACTION ONE QUARTER
  _   __    @
 / | / / _  @
 | |/ / | | @
 |_/ /|_  _|@
  /_/   |_| @
            @@
189  VULGAR FRACTION ONE HALF
  _   __   @
 / | / /__ @
 | |/ /_  )@
 |_/ / / / @
  /_/ /___|@
           @@
190  VULGAR FRACTION THREE QUARTERS
  ____  __    @
 |__ / / / _  @
  |_ \\/ / | | @
 |___/ /|_  _|@
    /_/   |_| @
              @@
191  INVERTED QUESTION MARK
   _  @
  (_) @
  | | @
 / /_ @
 \\___|@
      @@
192  LATIN CAPITAL LETTER A WITH GRAVE
   __   @
   \\_\\  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
193  LATIN CAPITAL LETTER A WITH ACUTE
    __  @
   /_/  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
195  LATIN CAPITAL LETTER A WITH TILDE
   /\\/| @
  |/\\/  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
  _   _ @
 (_)_(_)@
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
    _   @
   (o)  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
198  LATIN CAPITAL LETTER AE
     ______ @
    /  ____|@
   / _  _|  @
  / __ |___ @
 /_/ |_____|@
            @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   ____ @
  / ___|@
 | |    @
 | |___ @
  \\____|@
    )_) @@
200  LATIN CAPITAL LETTER E WITH GRAVE
   __   @
  _\\_\\_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
201  LATIN CAPITAL LETTER E WITH ACUTE
    __  @
  _/_/_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
 | ____|@
 |  _|_ @
 |_____|@
        @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
  _   _ @
 (_)_(_)@
 | ____|@
 |  _|_ @
 |_____|@
        @@
204  LATIN CAPITAL LETTER I WITH GRAVE
  __  @
  \\_\\ @
 |_ _|@
  | | @
 |___|@
      @@
205  LATIN CAPITAL LETTER I WITH ACUTE
   __ @
  /_/ @
 |_ _|@
  | | @
 |___|@
      @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
 |_ _|@
  | | @
 |___|@
      @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
  |_ _| @
   | |  @
  |___| @
        @@
208  LATIN CAPITAL LETTER ETH
    ____  @
   |  _ \\ @
  _| |_| |@
 |__ __| |@
   |____/ @
          @@
209  LATIN CAPITAL LETTER N WITH TILDE
   /\\/|@
  |/\\/ @
 | \\| |@
 | .\` |@
 |_|\\_|@
       @@
210  LATIN CAPITAL LETTER O WITH GRAVE
   __   @
   \\_\\  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
211  LATIN CAPITAL LETTER O WITH ACUTE
    __  @
   /_/  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
213  LATIN CAPITAL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
215  MULTIPLICATION SIGN
     @
     @
 /\\/\\@
 >  <@
 \\/\\/@
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   ____ @
  / _// @
 | |// |@
 | //| |@
  //__/ @
        @@
217  LATIN CAPITAL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | | | |@
 | |_| |@
  \\___/ @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\___/ @
        @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
    __  @
 __/_/__@
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
222  LATIN CAPITAL LETTER THORN
  _     @
 | |___ @
 |  __ \\@
 |  ___/@
 |_|    @
        @@
223  LATIN SMALL LETTER SHARP S
   ___ @
  / _ \\@
 | |/ /@
 | |\\ \\@
 | ||_/@
 |_|   @@
224  LATIN SMALL LETTER A WITH GRAVE
   __   @
   \\_\\_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
225  LATIN SMALL LETTER A WITH ACUTE
    __  @
   /_/_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
227  LATIN SMALL LETTER A WITH TILDE
   /\\/| @
  |/\\/_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
228  LATIN SMALL LETTER A WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
229  LATIN SMALL LETTER A WITH RING ABOVE
    __  @
   (()) @
  / _ '|@
 | (_| |@
  \\__,_|@
        @@
230  LATIN SMALL LETTER AE
           @
   __ ____ @
  / _\`  _ \\@
 | (_|  __/@
  \\__,____|@
           @@
231  LATIN SMALL LETTER C WITH CEDILLA
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
   )_) @@
232  LATIN SMALL LETTER E WITH GRAVE
   __  @
   \\_\\ @
  / _ \\@
 |  __/@
  \\___|@
       @@
233  LATIN SMALL LETTER E WITH ACUTE
    __ @
   /_/ @
  / _ \\@
 |  __/@
  \\___|@
       @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
   //\\ @
  |/_\\|@
  / _ \\@
 |  __/@
  \\___|@
       @@
235  LATIN SMALL LETTER E WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 |  __/ @
  \\___| @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
 __ @
 \\_\\@
 | |@
 | |@
 |_|@
    @@
237  LATIN SMALL LETTER I WITH ACUTE
  __@
 /_/@
 | |@
 | |@
 |_|@
    @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
  | | @
  | | @
  |_| @
      @@
239  LATIN SMALL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
   | |  @
   | |  @
   |_|  @
        @@
240  LATIN SMALL LETTER ETH
   /\\/\\ @
   >  < @
  _\\/\\ |@
 / __\` |@
 \\____/ @
        @@
241  LATIN SMALL LETTER N WITH TILDE
   /\\/| @
  |/\\/  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
242  LATIN SMALL LETTER O WITH GRAVE
   __   @
   \\_\\  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
243  LATIN SMALL LETTER O WITH ACUTE
    __  @
   /_/  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
245  LATIN SMALL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
247  DIVISION SIGN
        @
    _   @
  _(_)_ @
 |_____|@
   (_)  @
        @@
248  LATIN SMALL LETTER O WITH STROKE
         @
   ____  @
  / _//\\ @
 | (//) |@
  \\//__/ @
         @@
249  LATIN SMALL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
250  LATIN SMALL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
253  LATIN SMALL LETTER Y WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
254  LATIN SMALL LETTER THORN
  _     @
 | |__  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 |_|    @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
0x0100  LATIN CAPITAL LETTER A WITH MACRON
   ____ @
  /___/ @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
0x0101  LATIN SMALL LETTER A WITH MACRON
    ___ @
   /_ _/@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0102  LATIN CAPITAL LETTER A WITH BREVE
  _   _ @
  \\\\_// @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
0x0103  LATIN SMALL LETTER A WITH BREVE
   \\_/  @
   ___  @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0104  LATIN CAPITAL LETTER A WITH OGONEK
        @
    _   @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
     (_(@@
0x0105  LATIN SMALL LETTER A WITH OGONEK
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
     (_(@@
0x0106  LATIN CAPITAL LETTER C WITH ACUTE
     __ @
   _/_/ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x0107  LATIN SMALL LETTER C WITH ACUTE
    __ @
   /__/@
  / __|@
 | (__ @
  \\___|@
       @@
0x0108  LATIN CAPITAL LETTER C WITH CIRCUMFLEX
     /\\ @
   _//\\\\@
  / ___|@
 | |___ @
  \\____|@
        @@
0x0109  LATIN SMALL LETTER C WITH CIRCUMFLEX
    /\\ @
   /_\\ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010A  LATIN CAPITAL LETTER C WITH DOT ABOVE
    []  @
   ____ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x010B  LATIN SMALL LETTER C WITH DOT ABOVE
   []  @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010C  LATIN CAPITAL LETTER C WITH CARON
   \\\\// @
   _\\/_ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x010D  LATIN SMALL LETTER C WITH CARON
   \\\\//@
   _\\/ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010E  LATIN CAPITAL LETTER D WITH CARON
   \\\\// @
  __\\/  @
 |  _ \\ @
 | |_| |@
 |____/ @
        @@
0x010F  LATIN SMALL LETTER D WITH CARON
  \\/  _ @
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0110  LATIN CAPITAL LETTER D WITH STROKE
   ____   @
  |_ __ \\ @
 /| |/ | |@
 /|_|/_| |@
  |_____/ @
          @@
0x0111  LATIN SMALL LETTER D WITH STROKE
    ---|@
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0112  LATIN CAPITAL LETTER E WITH MACRON
   ____ @
  /___/ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0113  LATIN SMALL LETTER E WITH MACRON
    ____@
   /_ _/@
  / _ \\ @
 |  __/ @
  \\___| @
        @@
0x0114  LATIN CAPITAL LETTER E WITH BREVE
  _   _ @
  \\\\_// @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0115  LATIN SMALL LETTER E WITH BREVE
  \\\\  //@
    --  @
  / _ \\ @
 |  __/ @
  \\___| @
        @@
0x0116  LATIN CAPITAL LETTER E WITH DOT ABOVE
    []  @
  _____ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0117  LATIN SMALL LETTER E WITH DOT ABOVE
    [] @
    __ @
  / _ \\@
 |  __/@
  \\___|@
       @@
0x0118  LATIN CAPITAL LETTER E WITH OGONEK
        @
  _____ @
 | ____|@
 |  _|_ @
 |_____|@
    (__(@@
0x0119  LATIN SMALL LETTER E WITH OGONEK
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
    (_(@@
0x011A  LATIN CAPITAL LETTER E WITH CARON
   \\\\// @
  __\\/_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x011B  LATIN SMALL LETTER E WITH CARON
   \\\\//@
    \\/ @
  / _ \\@
 |  __/@
  \\___|@
       @@
0x011C  LATIN CAPITAL LETTER G WITH CIRCUMFLEX
   _/\\_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x011D  LATIN SMALL LETTER G WITH CIRCUMFLEX
     /\\ @
   _/_ \\@
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x011E  LATIN CAPITAL LETTER G WITH BREVE
   _\\/_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x011F  LATIN SMALL LETTER G WITH BREVE
  \\___/ @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x0120  LATIN CAPITAL LETTER G WITH DOT ABOVE
   _[]_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x0121  LATIN SMALL LETTER G WITH DOT ABOVE
   []   @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x0122  LATIN CAPITAL LETTER G WITH CEDILLA
   ____ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
   )__) @@
0x0123  LATIN SMALL LETTER G WITH CEDILLA
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |_))))@@
0x0124  LATIN CAPITAL LETTER H WITH CIRCUMFLEX
  _/ \\_ @
 | / \\ |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
0x0125  LATIN SMALL LETTER H WITH CIRCUMFLEX
  _  /\\ @
 | |//\\ @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0126  LATIN CAPITAL LETTER H WITH STROKE
  _   _ @
 | |=| |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
0x0127  LATIN SMALL LETTER H WITH STROKE
  _     @
 |=|__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0128  LATIN CAPITAL LETTER I WITH TILDE
  /\\//@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x0129  LATIN SMALL LETTER I WITH TILDE
    @
 /\\/@
 | |@
 | |@
 |_|@
    @@
0x012A  LATIN CAPITAL LETTER I WITH MACRON
 /___/@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x012B  LATIN SMALL LETTER I WITH MACRON
  ____@
 /___/@
  | | @
  | | @
  |_| @
      @@
0x012C  LATIN CAPITAL LETTER I WITH BREVE
  \\__/@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x012D  LATIN SMALL LETTER I WITH BREVE
    @
 \\_/@
 | |@
 | |@
 |_|@
    @@
0x012E  LATIN CAPITAL LETTER I WITH OGONEK
  ___ @
 |_ _|@
  | | @
  | | @
 |___|@
  (__(@@
0x012F  LATIN SMALL LETTER I WITH OGONEK
  _  @
 (_) @
 | | @
 | | @
 |_|_@
  (_(@@
0x0130  LATIN CAPITAL LETTER I WITH DOT ABOVE
  _[] @
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x0131  LATIN SMALL LETTER DOTLESS I
    @
  _ @
 | |@
 | |@
 |_|@
    @@
0x0132  LATIN CAPITAL LIGATURE IJ
  ___  _ @
 |_ _|| |@
  | | | |@
  | |_| |@
 |__|__/ @
         @@
0x0133  LATIN SMALL LIGATURE IJ
  _   _ @
 (_) (_)@
 | | | |@
 | | | |@
 |_|_/ |@
   |__/ @@
0x0134  LATIN CAPITAL LETTER J WITH CIRCUMFLEX
      /\\ @
     /_\\|@
  _  | | @
 | |_| | @
  \\___/  @
         @@
0x0135  LATIN SMALL LETTER J WITH CIRCUMFLEX
    /\\@
   /_\\@
   | |@
   | |@
  _/ |@
 |__/ @@
0x0136  LATIN CAPITAL LETTER K WITH CEDILLA
  _  _  @
 | |/ / @
 | ' /  @
 | . \\  @
 |_|\\_\\ @
    )__)@@
0x0137  LATIN SMALL LETTER K WITH CEDILLA
  _    @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
    )_)@@
0x0138  LATIN SMALL LETTER KRA
       @
  _ __ @
 | |/ \\@
 |   < @
 |_|\\_\\@
       @@
0x0139  LATIN CAPITAL LETTER L WITH ACUTE
  _   //@
 | | // @
 | |    @
 | |___ @
 |_____|@
        @@
0x013A  LATIN SMALL LETTER L WITH ACUTE
  //@
 | |@
 | |@
 | |@
 |_|@
    @@
0x013B  LATIN CAPITAL LETTER L WITH CEDILLA
  _     @
 | |    @
 | |    @
 | |___ @
 |_____|@
    )__)@@
0x013C  LATIN SMALL LETTER L WITH CEDILLA
  _   @
 | |  @
 | |  @
 | |  @
 |_|  @
   )_)@@
0x013D  LATIN CAPITAL LETTER L WITH CARON
  _ \\\\//@
 | | \\/ @
 | |    @
 | |___ @
 |_____|@
        @@
0x013E  LATIN SMALL LETTER L WITH CARON
  _ \\\\//@
 | | \\/ @
 | |    @
 | |    @
 |_|    @
        @@
0x013F  LATIN CAPITAL LETTER L WITH MIDDLE DOT
  _     @
 | |    @
 | | [] @
 | |___ @
 |_____|@
        @@
0x0140  LATIN SMALL LETTER L WITH MIDDLE DOT
  _    @
 | |   @
 | | []@
 | |   @
 |_|   @
       @@
0x0141  LATIN CAPITAL LETTER L WITH STROKE
  __    @
 | //   @
 |//|   @
 // |__ @
 |_____|@
        @@
0x0142  LATIN SMALL LETTER L WITH STROKE
  _ @
 | |@
 |//@
 //|@
 |_|@
    @@
0x0143  LATIN CAPITAL LETTER N WITH ACUTE
  _/ /_ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
0x0144  LATIN SMALL LETTER N WITH ACUTE
     _  @
  _ /_/ @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0145  LATIN CAPITAL LETTER N WITH CEDILLA
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
 )_)    @@
0x0146  LATIN SMALL LETTER N WITH CEDILLA
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
 )_)    @@
0x0147  LATIN CAPITAL LETTER N WITH CARON
  _\\/ _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
0x0148  LATIN SMALL LETTER N WITH CARON
  \\\\//  @
  _\\/_  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0149  LATIN SMALL LETTER N PRECEDED BY APOSTROPHE
          @
  _  __   @
 ( )| '_\\ @
 |/| | | |@
   |_| |_|@
          @@
0x014A  LATIN CAPITAL LETTER ENG
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\ |@
     )_)@@
0x014B  LATIN SMALL LETTER ENG
  _ __  @
 | '_ \\ @
 | | | |@
 |_| | |@
     | |@
    |__ @@
0x014C  LATIN CAPITAL LETTER O WITH MACRON
   ____ @
  /_ _/ @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
0x014D  LATIN SMALL LETTER O WITH MACRON
   ____ @
  /_ _/ @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
0x014E  LATIN CAPITAL LETTER O WITH BREVE
  \\   / @
   _-_  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x014F  LATIN SMALL LETTER O WITH BREVE
  \\   / @
   _-_  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0150  LATIN CAPITAL LETTER O WITH DOUBLE ACUTE
    ___ @
   /_/_/@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0151  LATIN SMALL LETTER O WITH DOUBLE ACUTE
    ___ @
   /_/_/@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0152  LATIN CAPITAL LIGATURE OE
   ___  ___ @
  / _ \\| __|@
 | | | |  | @
 | |_| | |__@
  \\___/|____@
            @@
0x0153  LATIN SMALL LIGATURE OE
             @
   ___   ___ @
  / _ \\ / _ \\@
 | (_) |  __/@
  \\___/ \\___|@
             @@
0x0154  LATIN CAPITAL LETTER R WITH ACUTE
  _/_/  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
0x0155  LATIN SMALL LETTER R WITH ACUTE
     __@
  _ /_/@
 | '__|@
 | |   @
 |_|   @
       @@
0x0156  LATIN CAPITAL LETTER R WITH CEDILLA
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
 )_)    @@
0x0157  LATIN SMALL LETTER R WITH CEDILLA
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
   )_) @@
0x0158  LATIN CAPITAL LETTER R WITH CARON
  _\\_/  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
0x0159  LATIN SMALL LETTER R WITH CARON
  \\\\// @
  _\\/_ @
 | '__|@
 | |   @
 |_|   @
       @@
0x015A  LATIN CAPITAL LETTER S WITH ACUTE
  _/_/  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x015B  LATIN SMALL LETTER S WITH ACUTE
    __@
  _/_/@
 / __|@
 \\__ \\@
 |___/@
      @@
0x015C  LATIN CAPITAL LETTER S WITH CIRCUMFLEX
  _/\\_  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x015D  LATIN SMALL LETTER S WITH CIRCUMFLEX
      @
  /_\\_@
 / __|@
 \\__ \\@
 |___/@
      @@
0x015E  LATIN CAPITAL LETTER S WITH CEDILLA
  ____  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
    )__)@@
0x015F  LATIN SMALL LETTER S WITH CEDILLA
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
   )_)@@
0x0160  LATIN CAPITAL LETTER S WITH CARON
  _\\_/  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x0161  LATIN SMALL LETTER S WITH CARON
  \\\\//@
  _\\/ @
 / __|@
 \\__ \\@
 |___/@
      @@
0x0162  LATIN CAPITAL LETTER T WITH CEDILLA
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
    )__)@@
0x0163  LATIN SMALL LETTER T WITH CEDILLA
  _   @
 | |_ @
 | __|@
 | |_ @
  \\__|@
   )_)@@
0x0164  LATIN CAPITAL LETTER T WITH CARON
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
        @@
0x0165  LATIN SMALL LETTER T WITH CARON
  \\/  @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @@
0x0166  LATIN CAPITAL LETTER T WITH STROKE
  _____ @
 |_   _|@
   | |  @
  -|-|- @
   |_|  @
        @@
0x0167  LATIN SMALL LETTER T WITH STROKE
  _   @
 | |_ @
 | __|@
 |-|_ @
  \\__|@
      @@
0x0168  LATIN CAPITAL LETTER U WITH TILDE
        @
  _/\\/_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x0169  LATIN SMALL LETTER U WITH TILDE
        @
  _/\\/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016A  LATIN CAPITAL LETTER U WITH MACRON
   ____ @
  /__ _/@
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x016B  LATIN SMALL LETTER U WITH MACRON
   ____ @
  / _  /@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016C  LATIN CAPITAL LETTER U WITH BREVE
        @
   \\_/_ @
 | | | |@
 | |_| |@
  \\____|@
        @@
0x016D  LATIN SMALL LETTER U WITH BREVE
        @
   \\_/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016E  LATIN CAPITAL LETTER U WITH RING ABOVE
    O   @
  __  _ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x016F  LATIN SMALL LETTER U WITH RING ABOVE
    O   @
  __ __ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x0170  LATIN CAPITAL LETTER U WITH DOUBLE ACUTE
   -- --@
  /_//_/@
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x0171  LATIN SMALL LETTER U WITH DOUBLE ACUTE
    ____@
  _/_/_/@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x0172  LATIN CAPITAL LETTER U WITH OGONEK
  _   _ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
    (__(@@
0x0173  LATIN SMALL LETTER U WITH OGONEK
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
     (_(@@
0x0174  LATIN CAPITAL LETTER W WITH CIRCUMFLEX
 __    /\\  __@
 \\ \\  //\\\\/ /@
  \\ \\ /\\ / / @
   \\ V  V /  @
    \\_/\\_/   @
             @@
0x0175  LATIN SMALL LETTER W WITH CIRCUMFLEX
      /\\   @
 __  //\\\\__@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @@
0x0176  LATIN CAPITAL LETTER Y WITH CIRCUMFLEX
    /\\  @
 __//\\\\ @
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
0x0177  LATIN SMALL LETTER Y WITH CIRCUMFLEX
    /\\  @
   //\\\\ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
0x0178  LATIN CAPITAL LETTER Y WITH DIAERESIS
  []  []@
 __    _@
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
0x0179  LATIN CAPITAL LETTER Z WITH ACUTE
  __/_/@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017A  LATIN SMALL LETTER Z WITH ACUTE
    _ @
  _/_/@
 |_  /@
  / / @
 /___|@
      @@
0x017B  LATIN CAPITAL LETTER Z WITH DOT ABOVE
  __[]_@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017C  LATIN SMALL LETTER Z WITH DOT ABOVE
   [] @
  ____@
 |_  /@
  / / @
 /___|@
      @@
0x017D  LATIN CAPITAL LETTER Z WITH CARON
  _\\_/_@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017E  LATIN SMALL LETTER Z WITH CARON
  \\\\//@
  _\\/_@
 |_  /@
  / / @
 /___|@
      @@
0x017F  LATIN SMALL LETTER LONG S
     __ @
    / _|@
 |-| |  @
 |-| |  @
   |_|  @
        @@
0x02C7  CARON
 \\\\//@
  \\/ @
    $@
    $@
    $@
    $@@
0x02D8  BREVE
 \\\\_//@
  \\_/ @
     $@
     $@
     $@
     $@@
0x02D9  DOT ABOVE
 []@
  $@
  $@
  $@
  $@
  $@@
0x02DB  OGONEK
    $@
    $@
    $@
    $@
    $@
 )_) @@
0x02DD  DOUBLE ACUTE ACCENT
  _ _ @
 /_/_/@
     $@
     $@
     $@
     $@@
0xCA0  KANNADA LETTER TTHA
   _____)@
  /_ ___/@
  / _ \\  @
 | (_) | @
 $\\___/$ @
         @@
         `;c_.parseFont("Standard",p_);function x_(u){return c_.textSync(u,{font:"Standard"})}const M_=x_("REZA"),H_=`Available commands:
  help              show this message
  about             about Reza
  projects          list projects
  skills            list skills
  contact           contact info
  neofetch          system info art
  whoami            print user
  pwd / cd / ls     navigate filesystem
  cat <file>        print file contents
  tree              show fs tree
  echo <text>       print text
  clear             clear screen
  history           command history
  alias             list aliases
  apt <cmd>         fake package manager
  docker ps         fake docker
  ssh <host>        fake ssh
  matrix            toggle matrix rain
  sudo              ⚠ requires permission
  exit              close terminal window

Tip: press TAB to autocomplete commands, paths and aliases.`,a_={ll:"ls -la",la:"ls -a",l:"ls",gs:"git status",gl:"git log",cls:"clear","..":"cd ..","...":"cd ../.."},W_=["help","about","projects","skills","contact","neofetch","whoami","pwd","cd","ls","cat","tree","echo","clear","history","alias","apt","docker","ssh","matrix","sudo","exit","reza","hack"];function y_(){const u=["reza@rezaos","-----------","OS: RezaOS 1.0 Aurora x86_64","Host: WebBrowser","Kernel: 6.9.0-aurora","Shell: rzsh 5.2.1",`Resolution: ${typeof window<"u"?window.innerWidth+"x"+window.innerHeight:"—"}`,"Theme: Cyber-Glass [Dark]","CPU: Neon Cortex (8) @ 4.2GHz","Memory: 8042MiB / 16384MiB",`Uptime: ${Math.floor(performance.now()/1e3)}s`],p=M_.split(`
`),N=Math.max(...p.map(S=>S.length)),O=Math.max(p.length,u.length);return`${Array.from({length:O},(S,H)=>`${(p[H]??"").padEnd(N+2)}${u[H]??""}`).join(`
`)}

${"█".repeat(3)} ${"█".repeat(3)} ${"█".repeat(3)} ${"█".repeat(3)}`}function O_(){return`On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
        modified:   src/os/store.ts
        modified:   src/os/apps/TerminalApp.tsx

Untracked files:
        notes/.todo

no changes added to commit (use "git add" and/or "git commit -a")`}function w_(u,p){var S;const N=u.type==="dir",O=N?"drwxr-xr-x":"-rw-r--r--",m=N?4096:((S=u.content)==null?void 0:S.length)??0;return`${O}  1 reza reza ${String(m).padStart(6)} May 26 09:14 ${p}${N?"/":""}`}function v_(){var __,i_;const u=h_(),p=d_(l=>l.close),N=(__=u==null?void 0:u.payload)==null?void 0:__.cwd,[O,m]=k.useState([{kind:"out",text:`RezaOS rzsh 5.2.1 — type 'help' to begin.
Last login: ${new Date().toLocaleString()}`}]),[S,H]=k.useState(""),[D,J]=k.useState(N&&K(N)?N:"/home/reza"),[B,Y]=k.useState([]),[G,V]=k.useState(-1),X=k.useRef(null),n_=k.useRef(null),Z=k.useRef(null),r_=A_(l=>l.setMatrix),Q=A_(l=>l.matrix),q=A_(l=>l.unlock);k.useEffect(()=>{var l;(l=X.current)==null||l.focus()},[]),k.useEffect(()=>{var c,C;const l=(c=u==null?void 0:u.payload)==null?void 0:c.cwd;l&&((C=K(l))==null?void 0:C.type)==="dir"&&J(I_(l))},[(i_=u==null?void 0:u.payload)==null?void 0:i_.cwd]),k.useEffect(()=>{var l;(l=Z.current)==null||l.scrollIntoView({block:"end"})},[O,S]);const o=(l,c="out")=>m(C=>[...C,{kind:c,text:l}]);function s_(l){const[c,...C]=l.trim().split(/\s+/);return a_[c]?[a_[c],...C].join(" "):l}function L_(l){o(`reza@rezaos:${u_(D)}$ ${l}`,"in");const c=l.trim();if(!c)return;const C=[...B,c];Y(C);const w=s_(c),[x,...d]=w.split(/\s+/),j=d.join(" ");switch(x){case"help":o(H_);break;case"clear":m([]);break;case"whoami":o("reza");break;case"pwd":o(D);break;case"echo":o(j);break;case"history":o(C.map((f,M)=>`${M+1}  ${f}`).join(`
`));break;case"alias":o(Object.entries(a_).map(([f,M])=>`alias ${f}='${M}'`).join(`
`));break;case"about":o(`${U.name} — ${U.title}
${U.bio}
Location: ${U.location}
Email: ${U.email}
Web: ${U.website}`);break;case"contact":o(`email:    ${U.email}
github:   ${U.github}
linkedin: ${U.linkedin}
web:      ${U.website}`);break;case"projects":o(N_.map(f=>`• ${f.name.padEnd(24)} ${f.company?`[${f.company}] `:""}${f.description}`).join(`
`));break;case"skills":o(C_.map(f=>`${f.group.padEnd(10)} ${f.items.join(", ")}`).join(`
`));break;case"neofetch":o(y_()),q("neofetch");break;case"ls":{const f=d.includes("-l")||d.includes("-la")||d.includes("-al"),M=d.includes("-a")||d.includes("-la")||d.includes("-al"),g=d.find(n=>!n.startsWith("-")),$=g?T_(g,D):D,h=K($);if(!h||h.type!=="dir"){o(`ls: ${$}: No such directory`,"err");break}let t=h.children??[];M||(t=t.filter(n=>!n.name.startsWith("."))),o(f?t.map(n=>w_(n,n.name)).join(`
`):t.map(n=>n.type==="dir"?`${n.name}/`:n.name).join("  "));break}case"cd":{const f=d[0]?T_(d[0],D):"/home/reza",M=K(f);if(!M||M.type!=="dir"){o(`cd: ${f}: No such directory`,"err");break}J(I_(f));break}case"cat":{if(!d[0]){o("cat: missing file","err");break}const f=K(T_(d[0],D));if(!f){o(`cat: ${d[0]}: No such file`,"err");break}if(f.type==="dir"){o(`cat: ${d[0]}: Is a directory`,"err");break}o(f.content??"");break}case"tree":{const f=K(D);if(!f){o("tree: error");break}const M=(g,$=0)=>{var h;return g.type==="dir"?`${"  ".repeat($)}${g.name}/
`+(((h=g.children)==null?void 0:h.map(t=>M(t,$+1)).join(""))??""):`${"  ".repeat($)}${g.name}
`};o(M(f));break}case"git":d[0]==="status"?o(O_()):o(`git: '${d[0]??""}' is not a git command. See 'git --help'.`,"err");break;case"apt":o(`Reading package lists... Done
Building dependency tree... Done
E: Unable to locate package '${j}'.
Note: this is a simulated environment ;)`);break;case"docker":d[0]==="ps"?o(`CONTAINER ID   IMAGE              STATUS         PORTS                    NAMES
c1a2b3d4e5f6   rezaos/aurora      Up 12 hours    0.0.0.0:3000->3000/tcp   web
9f8e7d6c5b4a   postgres:16        Up 12 hours    5432/tcp                 db
1234abcd5678   redis:7-alpine     Up 12 hours    6379/tcp                 cache`):o(`docker: unknown command '${d[0]??""}'`,"err");break;case"ssh":o(`ssh: connecting to ${d[0]??"host"}...
Permission denied (publickey).
Hint: nobody has the keys to RezaOS.`);break;case"matrix":r_(!Q),o(`Matrix rain ${Q?"disabled.":"enabled. Wake up, Neo."}`),q("matrix");break;case"sudo":j==="make me a sandwich"?o("Okay. 🥪"):o("reza is not in the sudoers file. This incident will be reported.","err");break;case"exit":o("logout"),setTimeout(()=>{u&&p(u.id)},80);break;case"reza":o("That's me!");break;case"hack":o("initiating... just kidding. Stay ethical.");break;default:o(`rzsh: command not found: ${x}`,"err")}}function l_(){const c=S.split(/\s+/);if(c.length<=1){const C=c[0]??"",x=Array.from(new Set([...W_,...Object.keys(a_)])).filter(d=>d.startsWith(C));x.length===1?H(x[0]+" "):x.length>1&&o(x.join("  "))}else{const C=c[c.length-1]??"",w=C.lastIndexOf("/"),x=w>=0?C.slice(0,w+1):"",d=w>=0?C.slice(w+1):C,j=x?T_(x,D):D,f=K(j);if(!f||f.type!=="dir"||!f.children)return;const M=f.children.filter(g=>g.name.startsWith(d));if(M.length===1){const g=M[0],$=x+g.name+(g.type==="dir"?"/":" ");c[c.length-1]=$,H(c.join(" "))}else M.length>1&&o(M.map(g=>g.type==="dir"?g.name+"/":g.name).join("  "))}}function o_(l){if(l.key==="Enter")L_(S),H(""),V(-1);else if(l.key==="Tab")l.preventDefault(),l_();else if(l.key==="ArrowUp"){l.preventDefault();const c=G<0?B.length-1:Math.max(0,G-1);V(c),H(B[c]??"")}else if(l.key==="ArrowDown"){if(l.preventDefault(),G<0)return;const c=G+1;c>=B.length?(V(-1),H("")):(V(c),H(B[c]))}else l.ctrlKey&&l.key.toLowerCase()==="l"?(l.preventDefault(),m([])):l.ctrlKey&&l.key.toLowerCase()==="c"&&(o(""),H(""))}return F.jsx("div",{dir:"ltr",className:"h-full w-full bg-[hsl(230_40%_4%)] text-primary font-mono text-[13px] relative scan-lines text-left",children:F.jsxs("div",{ref:n_,onClick:()=>{var l;return(l=X.current)==null?void 0:l.focus()},className:"absolute inset-0 overflow-y-auto p-4 pb-12 scroll-stable",children:[O.map((l,c)=>F.jsx("pre",{dir:"ltr",className:`whitespace-pre overflow-x-auto ${l.kind==="err"?"text-destructive":l.kind==="in"?"text-foreground/90":"text-primary/90"}`,children:l.text},c)),F.jsxs("div",{ref:Z,className:"flex items-center gap-2",children:[F.jsx("span",{className:"text-secondary",children:"reza@rezaos"}),F.jsx("span",{className:"text-foreground/50",children:":"}),F.jsx("span",{className:"text-accent",children:u_(D)}),F.jsx("span",{className:"text-foreground/50",children:"$"}),F.jsx("input",{ref:X,dir:"ltr",value:S,onChange:l=>H(l.target.value),onKeyDown:o_,className:"flex-1 bg-transparent outline-none text-foreground caret-primary select-text",spellCheck:!1,autoCapitalize:"off",autoComplete:"off","aria-label":"Terminal input"})]})]})})}export{v_ as TerminalApp};
