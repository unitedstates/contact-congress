/**
 * Contact Congress Helper
 * A bookmarklet for creating YAML files for https://github.com/unitedstates/contact-congress
 * See the documentation at http://theunitedstates.io/contact-congress
 *
 * Notes:
 *
 * These senators use captcha:
 * http://www.coburn.senate.gov/public/index.cfm/contactsenatorcoburn?p=ContactForm
 * http://www.crapo.senate.gov/contact/email.cfm
 * http://moran.senate.gov/public/index.cfm/e-mail-jerry
 * http://www.paul.senate.gov/?p=contact
 * http://www.risch.senate.gov/public/index.cfm?p=Email
 * http://www.roberts.senate.gov/public/index.cfm?p=EmailPat
 * http://www.shelby.senate.gov/public/index.cfm/emailsenatorshelby
 * http://www.toomey.senate.gov/?p=contact
 *
 * List is short enough to fill in manually
 */

// This closure undefines requirejs nonsense that makes a bunch of vendor
// libs think they're in node-mode. Each one is punched through to the window
// after definition.
;(function(undefined){
var require = undefined,
    define = undefined,
    module = undefined;


/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});

window.$cc = jQuery.noConflict(true);


/* js-yaml 3.0.2 https://github.com/nodeca/js-yaml */
!function(e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):"undefined"!=typeof window?window.jsyaml=e():"undefined"!=typeof global?global.jsyaml=e():"undefined"!=typeof self&&(self.jsyaml=e())}(function(){return function e(t,r,n){function a(c,o){if(!r[c]){if(!t[c]){var s="function"==typeof require&&require;if(!o&&s)return s(c,!0);if(i)return i(c,!0);throw new Error("Cannot find module '"+c+"'")}var l=r[c]={exports:{}};t[c][0].call(l.exports,function(e){var r=t[c][1][e];return a(r?r:e)},l,l.exports,e,t,r,n)}return r[c].exports}for(var i="function"==typeof require&&require,c=0;c<n.length;c++)a(n[c]);return a}({1:[function(e,t){"use strict";var r=e("./lib/js-yaml.js");t.exports=r},{"./lib/js-yaml.js":2}],2:[function(e,t){"use strict";function r(e){return function(){throw new Error("Function "+e+" is deprecated and cannot be used.")}}var n=e("./js-yaml/loader"),a=e("./js-yaml/dumper");t.exports.Type=e("./js-yaml/type"),t.exports.Schema=e("./js-yaml/schema"),t.exports.FAILSAFE_SCHEMA=e("./js-yaml/schema/failsafe"),t.exports.JSON_SCHEMA=e("./js-yaml/schema/json"),t.exports.CORE_SCHEMA=e("./js-yaml/schema/core"),t.exports.DEFAULT_SAFE_SCHEMA=e("./js-yaml/schema/default_safe"),t.exports.DEFAULT_FULL_SCHEMA=e("./js-yaml/schema/default_full"),t.exports.load=n.load,t.exports.loadAll=n.loadAll,t.exports.safeLoad=n.safeLoad,t.exports.safeLoadAll=n.safeLoadAll,t.exports.dump=a.dump,t.exports.safeDump=a.safeDump,t.exports.YAMLException=e("./js-yaml/exception"),t.exports.MINIMAL_SCHEMA=e("./js-yaml/schema/failsafe"),t.exports.SAFE_SCHEMA=e("./js-yaml/schema/default_safe"),t.exports.DEFAULT_SCHEMA=e("./js-yaml/schema/default_full"),t.exports.scan=r("scan"),t.exports.parse=r("parse"),t.exports.compose=r("compose"),t.exports.addConstructor=r("addConstructor")},{"./js-yaml/dumper":4,"./js-yaml/exception":5,"./js-yaml/loader":6,"./js-yaml/schema":8,"./js-yaml/schema/core":9,"./js-yaml/schema/default_full":10,"./js-yaml/schema/default_safe":11,"./js-yaml/schema/failsafe":12,"./js-yaml/schema/json":13,"./js-yaml/type":14}],3:[function(e,t){"use strict";function r(e){return void 0===e||null===e}function n(e){return"object"==typeof e&&null!==e}function a(e){return Array.isArray(e)?e:r(e)?[]:[e]}function i(e,t){var r,n,a,i;if(t)for(i=Object.keys(t),r=0,n=i.length;n>r;r+=1)a=i[r],e[a]=t[a];return e}function c(e,t){var r,n="";for(r=0;t>r;r+=1)n+=e;return n}t.exports.isNothing=r,t.exports.isObject=n,t.exports.toArray=a,t.exports.repeat=c,t.exports.extend=i},{}],4:[function(e,t){"use strict";function r(e,t){var r,n,a,i,c,o,s;if(null===t)return{};for(r={},n=Object.keys(t),a=0,i=n.length;i>a;a+=1)c=n[a],o=String(t[c]),"!!"===c.slice(0,2)&&(c="tag:yaml.org,2002:"+c.slice(2)),s=e.compiledTypeMap[c],s&&b.call(s.dumpStyleAliases,o)&&(o=s.dumpStyleAliases[o]),r[c]=o;return r}function n(e){var t,r,n;if(t=e.toString(16).toUpperCase(),255>=e)r="x",n=2;else if(65535>=e)r="u",n=4;else{if(!(4294967295>=e))throw new y("code point within a string may not be greater than 0xFFFFFFFF");r="U",n=8}return"\\"+r+g.repeat("0",n-t.length)+t}function a(e){this.schema=e.schema||x,this.indent=Math.max(1,e.indent||2),this.skipInvalid=e.skipInvalid||!1,this.flowLevel=g.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=r(this.schema,e.styles||null),this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result=""}function i(e,t){return"\n"+g.repeat(" ",e.indent*t)}function c(e,t){var r,n,a;for(r=0,n=e.implicitTypes.length;n>r;r+=1)if(a=e.implicitTypes[r],a.loadResolver&&a.loadResolver({result:t}))return!0;return!1}function o(e,t){var r,a,i,o,s,l;for(e.dump="",r=!1,a=0,l=t.charCodeAt(0)||0,-1!==G.indexOf(t)?r=!0:0===t.length?r=!0:S===l||S===t.charCodeAt(t.length-1)?r=!0:(N===l||K===l)&&(r=!0),i=0,o=t.length;o>i;i+=1)s=t.charCodeAt(i),r||(w===s||C===s||j===s||M===s||D===s||Y===s||U===s||B===s||O===s||F===s||L===s||I===s||H===s||_===s||R===s||k===s||E===s||P===s||T===s||q===s)&&(r=!0),($[s]||!(s>=32&&126>=s||133===s||s>=160&&55295>=s||s>=57344&&65533>=s||s>=65536&&1114111>=s))&&(e.dump+=t.slice(a,i),e.dump+=$[s]||n(s),a=i+1,r=!0);i>a&&(e.dump+=t.slice(a,i)),!r&&c(e,e.dump)&&(r=!0),r&&(e.dump='"'+e.dump+'"')}function s(e,t,r){var n,a,i="",c=e.tag;for(n=0,a=r.length;a>n;n+=1)f(e,t,r[n],!1,!1)&&(0!==n&&(i+=", "),i+=e.dump);e.tag=c,e.dump="["+i+"]"}function l(e,t,r,n){var a,c,o="",s=e.tag;for(a=0,c=r.length;c>a;a+=1)f(e,t+1,r[a],!0,!0)&&(n&&0===a||(o+=i(e,t)),o+="- "+e.dump);e.tag=s,e.dump=o||"[]"}function u(e,t,r){var n,a,i,c,o,s="",l=e.tag,u=Object.keys(r);for(n=0,a=u.length;a>n;n+=1)o="",0!==n&&(o+=", "),i=u[n],c=r[i],f(e,t,i,!1,!1)&&(e.dump.length>1024&&(o+="? "),o+=e.dump+": ",f(e,t,c,!1,!1)&&(o+=e.dump,s+=o));e.tag=l,e.dump="{"+s+"}"}function p(e,t,r,n){var a,c,o,s,l,u,p="",h=e.tag,d=Object.keys(r);for(a=0,c=d.length;c>a;a+=1)u="",n&&0===a||(u+=i(e,t)),o=d[a],s=r[o],f(e,t+1,o,!0,!0)&&(l=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024,l&&(u+=e.dump&&C===e.dump.charCodeAt(0)?"?":"? "),u+=e.dump,l&&(u+=i(e,t)),f(e,t+1,s,!0,l)&&(u+=e.dump&&C===e.dump.charCodeAt(0)?":":": ",u+=e.dump,p+=u));e.tag=h,e.dump=p||"{}"}function h(e,t,r){var n,a,i,c,o,s;for(a=r?e.explicitTypes:e.implicitTypes,i=0,c=a.length;c>i;i+=1)if(o=a[i],(o.dumpInstanceOf||o.dumpPredicate)&&(!o.dumpInstanceOf||"object"==typeof t&&t instanceof o.dumpInstanceOf)&&(!o.dumpPredicate||o.dumpPredicate(t))){if(e.tag=r?o.tag:"?",o.dumpRepresenter){if(s=e.styleMap[o.tag]||o.dumpDefaultStyle,"[object Function]"===A.call(o.dumpRepresenter))n=o.dumpRepresenter(t,s);else{if(!b.call(o.dumpRepresenter,s))throw new y("!<"+o.tag+'> tag resolver accepts not "'+s+'" style');n=o.dumpRepresenter[s](t,s)}e.dump=n}return!0}return!1}function f(e,t,r,n,a){e.tag=null,e.dump=r,h(e,r,!1)||h(e,r,!0);var i=A.call(e.dump);if(n&&(n=0>e.flowLevel||e.flowLevel>t),(null!==e.tag&&"?"!==e.tag||2!==e.indent&&t>0)&&(a=!1),"[object Object]"===i)n&&0!==Object.keys(e.dump).length?p(e,t,e.dump,a):u(e,t,e.dump);else if("[object Array]"===i)n&&0!==e.dump.length?l(e,t,e.dump,a):s(e,t,e.dump);else{if("[object String]"!==i){if(e.skipInvalid)return!1;throw new y("unacceptabe kind of an object to dump "+i)}"?"!==e.tag&&o(e,e.dump)}return null!==e.tag&&"?"!==e.tag&&(e.dump="!<"+e.tag+"> "+e.dump),!0}function d(e,t){t=t||{};var r=new a(t);return f(r,0,e,!0,!0)?r.dump+"\n":""}function m(e,t){return d(e,g.extend({schema:v},t))}var g=e("./common"),y=e("./exception"),x=e("./schema/default_full"),v=e("./schema/default_safe"),A=Object.prototype.toString,b=Object.prototype.hasOwnProperty,w=9,C=10,j=13,S=32,I=33,k=34,O=35,E=37,F=38,R=39,L=42,M=44,N=45,T=58,_=62,K=63,P=64,D=91,Y=93,q=96,U=123,H=124,B=125,$={};$[0]="\\0",$[7]="\\a",$[8]="\\b",$[9]="\\t",$[10]="\\n",$[11]="\\v",$[12]="\\f",$[13]="\\r",$[27]="\\e",$[34]='\\"',$[92]="\\\\",$[133]="\\N",$[160]="\\_",$[8232]="\\L",$[8233]="\\P";var G=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"];t.exports.dump=d,t.exports.safeDump=m},{"./common":3,"./exception":5,"./schema/default_full":10,"./schema/default_safe":11}],5:[function(e,t){"use strict";function r(e,t){this.name="YAMLException",this.reason=e,this.mark=t,this.message=this.toString(!1)}r.prototype.toString=function(e){var t;return t="JS-YAML: "+(this.reason||"(unknown reason)"),!e&&this.mark&&(t+=" "+this.mark.toString()),t},t.exports=r},{}],6:[function(e,t){"use strict";function r(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||M,this.strict=t.strict||!1,this.legacy=t.legacy||!1,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.character=e.charCodeAt(0)}function n(e,t){return new F(t,new R(e.filename,e.input,e.position,e.line,e.position-e.lineStart))}function a(e,t){throw n(e,t)}function i(e,t){var r=n(e,t);if(e.strict)throw r;console.warn(r.toString())}function c(e,t,r,n){var i,c,o,s;if(r>t){if(s=e.input.slice(t,r),n)for(i=0,c=s.length;c>i;i+=1)o=s.charCodeAt(i),9===o||o>=32&&1114111>=o||a(e,"expected valid JSON character");e.result+=s}}function o(e,t,r){var n,i,c,o;for(E.isObject(r)||a(e,"cannot merge mappings; the provided source object is unacceptable"),n=Object.keys(r),c=0,o=n.length;o>c;c+=1)i=n[c],N.call(t,i)||(t[i]=r[i])}function s(e,t,r,n,a){var i,c;if(n=String(n),null===t&&(t={}),"tag:yaml.org,2002:merge"===r)if(Array.isArray(a))for(i=0,c=a.length;c>i;i+=1)o(e,t,a[i]);else o(e,t,a);else t[n]=a;return t}function l(e){H===e.character?e.position+=1:B===e.character?e.position+=H===e.input.charCodeAt(e.position+1)?2:1:a(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.character=e.input.charCodeAt(e.position)}function u(e,t,r){for(var n=0;e.position<e.length;){for(;$===e.character||U===e.character;)e.character=e.input.charCodeAt(++e.position);if(t&&J===e.character)do e.character=e.input.charCodeAt(++e.position);while(e.position<e.length&&H!==e.character&&B!==e.character);if(H!==e.character&&B!==e.character)break;for(l(e),n+=1,e.lineIndent=0;$===e.character;)e.lineIndent+=1,e.character=e.input.charCodeAt(++e.position);e.lineIndent<r&&i(e,"deficient indentation")}return n}function p(e){var t,r;return e.position===e.lineStart&&(tt===e.character||rt===e.character)&&e.input.charCodeAt(e.position+1)===e.character&&e.input.charCodeAt(e.position+2)===e.character&&(t=e.position+3,r=e.input.charCodeAt(t),t>=e.length||$===r||U===r||H===r||B===r)?!0:!1}function h(e,t){1===t?e.result+=" ":t>1&&(e.result+=E.repeat("\n",t-1))}function f(e,t,r){var n,a,i,o,s,l,f,d,m=e.kind,g=e.result;if($===e.character||U===e.character||H===e.character||B===e.character||et===e.character||xt===e.character||At===e.character||Mt===e.character||Tt===e.character||J===e.character||Z===e.character||Q===e.character||G===e.character||Nt===e.character||lt===e.character||W===e.character||V===e.character||z===e.character||pt===e.character||wt===e.character)return!1;if((ut===e.character||tt===e.character)&&(a=e.input.charCodeAt(e.position+1),$===a||U===a||H===a||B===a||r&&(et===a||xt===a||At===a||Mt===a||Tt===a)))return!1;for(e.kind="scalar",e.result="",i=o=e.position,s=!1;e.position<e.length;){if(ot===e.character){if(a=e.input.charCodeAt(e.position+1),$===a||U===a||H===a||B===a||r&&(et===a||xt===a||At===a||Mt===a||Tt===a))break}else if(J===e.character){if(n=e.input.charCodeAt(e.position-1),$===n||U===n||H===n||B===n)break}else{if(e.position===e.lineStart&&p(e)||r&&(et===e.character||xt===e.character||At===e.character||Mt===e.character||Tt===e.character))break;if(H===e.character||B===e.character){if(l=e.line,f=e.lineStart,d=e.lineIndent,u(e,!1,-1),e.lineIndent>=t){s=!0;continue}e.position=o,e.line=l,e.lineStart=f,e.lineIndent=d,e.character=e.input.charCodeAt(e.position);break}}s&&(c(e,i,o,!1),h(e,e.line-l),i=o=e.position,s=!1),$!==e.character&&U!==e.character&&(o=e.position+1),e.character=e.input.charCodeAt(++e.position)}return c(e,i,o,!1),e.result?!0:(e.kind=m,e.result=g,!1)}function d(e,t){var r,n;if(W!==e.character)return!1;for(e.kind="scalar",e.result="",e.character=e.input.charCodeAt(++e.position),r=n=e.position;e.position<e.length;)if(W===e.character){if(c(e,r,e.position,!0),e.character=e.input.charCodeAt(++e.position),W!==e.character)return!0;r=n=e.position,e.character=e.input.charCodeAt(++e.position)}else H===e.character||B===e.character?(c(e,r,n,!0),h(e,u(e,!1,t)),r=n=e.position,e.character=e.input.charCodeAt(e.position)):e.position===e.lineStart&&p(e)?a(e,"unexpected end of the document within a single quoted scalar"):(e.character=e.input.charCodeAt(++e.position),n=e.position);a(e,"unexpected end of the stream within a single quoted scalar")}function m(e,t){var r,n,i,o,s,l;if(V!==e.character)return!1;for(e.kind="scalar",e.result="",e.character=e.input.charCodeAt(++e.position),r=n=e.position;e.position<e.length;){if(V===e.character)return c(e,r,e.position,!0),e.character=e.input.charCodeAt(++e.position),!0;if(vt===e.character){if(c(e,r,e.position,!0),e.character=e.input.charCodeAt(++e.position),H===e.character||B===e.character)u(e,!1,t);else if(_t[e.character])e.result+=_t[e.character],e.character=e.input.charCodeAt(++e.position);else if(Kt[e.character]){for(i=Kt[e.character],l=0,o=1;i>=o;o+=1)s=4*(i-o),e.character=e.input.charCodeAt(++e.position),at<=e.character&&e.character<=ct?l|=e.character-at<<s:ht<=e.character&&e.character<=ft?l|=e.character-ht+10<<s:Ct<=e.character&&e.character<=It?l|=e.character-Ct+10<<s:a(e,"expected hexadecimal character");e.result+=String.fromCharCode(l),e.character=e.input.charCodeAt(++e.position)}else a(e,"unknown escape sequence");r=n=e.position}else H===e.character||B===e.character?(c(e,r,n,!0),h(e,u(e,!1,t)),r=n=e.position,e.character=e.input.charCodeAt(e.position)):e.position===e.lineStart&&p(e)?a(e,"unexpected end of the document within a double quoted scalar"):(e.character=e.input.charCodeAt(++e.position),n=e.position)}a(e,"unexpected end of the stream within a double quoted scalar")}function g(e,t){var r,n,i,c,o,l,p,h,f,d,m=!0,g=e.tag;switch(e.character){case xt:c=At,p=!1,n=[];break;case Mt:c=Tt,p=!0,n={};break;default:return!1}for(null!==e.anchor&&(e.anchorMap[e.anchor]=n),e.character=e.input.charCodeAt(++e.position);e.position<e.length;){if(u(e,!0,t),e.character===c)return e.character=e.input.charCodeAt(++e.position),e.tag=g,e.kind=p?"mapping":"sequence",e.result=n,!0;m||a(e,"missed comma between flow collection entries"),f=h=d=null,o=l=!1,ut===e.character&&(i=e.input.charCodeAt(e.position+1),($===i||U===i||H===i||B===i)&&(o=l=!0,e.position+=1,e.character=i,u(e,!0,t))),r=e.line,C(e,t,T,!1,!0),f=e.tag,h=e.result,u(e,!0,t),!l&&e.line!==r||ot!==e.character||(o=!0,e.character=e.input.charCodeAt(++e.position),u(e,!0,t),C(e,t,T,!1,!0),d=e.result),p?s(e,n,f,h,d):o?n.push(s(e,null,f,h,d)):n.push(h),u(e,!0,t),et===e.character?(m=!0,e.character=e.input.charCodeAt(++e.position)):m=!1}a(e,"unexpected end of the stream within a flow collection")}function y(e,t){var r,n,i=D,o=!1,s=t,u=0,p=!1;switch(e.character){case Nt:n=!1;break;case lt:n=!0;break;default:return!1}for(e.kind="scalar",e.result="";e.position<e.length;)if(e.character=e.input.charCodeAt(++e.position),X===e.character||tt===e.character)D===i?i=X===e.character?q:Y:a(e,"repeat of a chomping mode identifier");else{if(!(at<=e.character&&e.character<=ct))break;at===e.character?a(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):o?a(e,"repeat of an indentation width identifier"):(s=t+(e.character-it),o=!0)}if($===e.character||U===e.character){do e.character=e.input.charCodeAt(++e.position);while($===e.character||U===e.character);if(J===e.character)do e.character=e.input.charCodeAt(++e.position);while(e.position<e.length&&H!==e.character&&B!==e.character)}for(;e.position<e.length;){for(l(e),e.lineIndent=0;(!o||e.lineIndent<s)&&$===e.character;)e.lineIndent+=1,e.character=e.input.charCodeAt(++e.position);if(!o&&e.lineIndent>s&&(s=e.lineIndent),H!==e.character&&B!==e.character){if(e.lineIndent<s){switch(i){case q:e.result+=E.repeat("\n",u);break;case D:o&&(e.result+="\n")}break}n?$===e.character||U===e.character?(p=!0,e.result+=E.repeat("\n",u+1)):p?(p=!1,e.result+=E.repeat("\n",u+1)):0===u?o&&(e.result+=" "):e.result+=E.repeat("\n",u):e.result+=o?E.repeat("\n",u+1):E.repeat("\n",u),o=!0,u=0,r=e.position;do e.character=e.input.charCodeAt(++e.position);while(e.position<e.length&&H!==e.character&&B!==e.character);c(e,r,e.position,!1)}else u+=1}return!0}function x(e,t){var r,n,i=e.tag,c=[],o=!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=c);e.position<e.length&&tt===e.character&&(n=e.input.charCodeAt(e.position+1),$===n||U===n||H===n||B===n);)if(o=!0,e.position+=1,e.character=n,u(e,!0,-1)&&e.lineIndent<=t)c.push(null);else if(r=e.line,C(e,t,K,!1,!0),c.push(e.result),u(e,!0,-1),(e.line===r||e.lineIndent>t)&&e.position<e.length)a(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break;return o?(e.tag=i,e.kind="sequence",e.result=c,!0):!1}function v(e,t){var r,n,i,c=e.tag,o={},l=null,p=null,h=null,f=!1,d=!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=o);e.position<e.length;){if(r=e.input.charCodeAt(e.position+1),i=e.line,ut!==e.character&&ot!==e.character||$!==r&&U!==r&&H!==r&&B!==r){if(!C(e,t,_,!1,!0))break;if(e.line===i){for(;$===e.character||U===e.character;)e.character=e.input.charCodeAt(++e.position);if(ot===e.character)e.character=e.input.charCodeAt(++e.position),$!==e.character&&U!==e.character&&H!==e.character&&B!==e.character&&a(e,"a whitespace character is expected after the key-value separator within a block mapping"),f&&(s(e,o,l,p,null),l=p=h=null),d=!0,f=!1,n=!1,l=e.tag,p=e.result;else{if(!d)return e.tag=c,!0;a(e,"can not read an implicit mapping pair; a colon is missed")}}else{if(!d)return e.tag=c,!0;a(e,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else ut===e.character?(f&&(s(e,o,l,p,null),l=p=h=null),d=!0,f=!0,n=!0):f?(f=!1,n=!0):a(e,"incomplete explicit mapping pair; a key node is missed"),e.position+=1,e.character=r;if((e.line===i||e.lineIndent>t)&&(C(e,t,P,!0,n)&&(f?p=e.result:h=e.result),f||(s(e,o,l,p,h),l=p=h=null),u(e,!0,-1)),e.lineIndent>t&&e.position<e.length)a(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return f&&s(e,o,l,p,null),d&&(e.tag=c,e.kind="mapping",e.result=o),d}function A(e){var t,r,n,i=!1,c=!1;if(G!==e.character)return!1;if(null!==e.tag&&a(e,"duplication of a tag property"),e.character=e.input.charCodeAt(++e.position),st===e.character?(i=!0,e.character=e.input.charCodeAt(++e.position)):G===e.character?(c=!0,r="!!",e.character=e.input.charCodeAt(++e.position)):r="!",t=e.position,i){do e.character=e.input.charCodeAt(++e.position);while(e.position<e.length&&lt!==e.character);e.position<e.length?(n=e.input.slice(t,e.position),e.character=e.input.charCodeAt(++e.position)):a(e,"unexpected end of the stream within a verbatim tag")}else{for(;e.position<e.length&&$!==e.character&&U!==e.character&&H!==e.character&&B!==e.character;)G===e.character&&(c?a(e,"tag suffix cannot contain exclamation marks"):(r=e.input.slice(t-1,e.position+1),qt.test(r)||a(e,"named tag handle cannot contain such characters"),c=!0,t=e.position+1)),e.character=e.input.charCodeAt(++e.position);n=e.input.slice(t,e.position),Yt.test(n)&&a(e,"tag suffix cannot contain flow indicator characters")}return n&&!Ut.test(n)&&a(e,"tag name cannot contain such characters: "+n),i?e.tag=n:N.call(e.tagMap,r)?e.tag=e.tagMap[r]+n:"!"===r?e.tag="!"+n:"!!"===r?e.tag="tag:yaml.org,2002:"+n:a(e,'undeclared tag handle "'+r+'"'),!0}function b(e){var t;if(Z!==e.character)return!1;for(null!==e.anchor&&a(e,"duplication of an anchor property"),e.character=e.input.charCodeAt(++e.position),t=e.position;e.position<e.length&&$!==e.character&&U!==e.character&&H!==e.character&&B!==e.character&&et!==e.character&&xt!==e.character&&At!==e.character&&Mt!==e.character&&Tt!==e.character;)e.character=e.input.charCodeAt(++e.position);return e.position===t&&a(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function w(e){var t,r;if(Q!==e.character)return!1;for(e.character=e.input.charCodeAt(++e.position),t=e.position;e.position<e.length&&$!==e.character&&U!==e.character&&H!==e.character&&B!==e.character&&et!==e.character&&xt!==e.character&&At!==e.character&&Mt!==e.character&&Tt!==e.character;)e.character=e.input.charCodeAt(++e.position);return e.position===t&&a(e,"name of an alias node must contain at least one character"),r=e.input.slice(t,e.position),e.anchorMap.hasOwnProperty(r)||a(e,'unidentified alias "'+r+'"'),e.result=e.anchorMap[r],u(e,!0,-1),!0}function C(e,t,r,n,c){var o,s,l,p,h,C,j,S,I=!1,k=!0,O=!1;if(e.tag=null,e.anchor=null,e.kind=null,e.result=null,o=s=l=P===r||K===r,n&&u(e,!0,-1))if(I=!0,e.lineIndent===t)k=!1;else{if(!(e.lineIndent>t))return!1;k=!0}if(k)for(;A(e)||b(e);)if(u(e,!0,-1))if(I=!0,e.lineIndent>t)k=!0,l=o;else{if(e.lineIndent!==t)return!0;k=!1,l=o}else l=!1;if(l&&(l=I||c),(k||P===r)&&(j=T===r||_===r?t:t+1,S=e.position-e.lineStart,k?l&&(x(e,S)||v(e,S))||g(e,j)?O=!0:(s&&y(e,j)||d(e,j)||m(e,j)?O=!0:w(e)?(O=!0,(null!==e.tag||null!==e.anchor)&&a(e,"alias node should not have any properties")):f(e,j,T===r)&&(O=!0,null===e.tag&&(e.tag="?")),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):O=l&&x(e,S)),null!==e.tag&&"!"!==e.tag)if("?"===e.tag){for(p=0,h=e.implicitTypes.length;h>p;p+=1)if(C=e.implicitTypes[p],C.loadResolver&&C.loadResolver(e)){e.tag=C.tag;break}}else N.call(e.typeMap,e.tag)?(C=e.typeMap[e.tag],null!==e.result&&C.loadKind!==e.kind&&a(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+C.loadKind+'", not "'+e.kind+'"'),C.loadResolver&&!C.loadResolver(e)&&a(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")):i(e,"unknown tag !<"+e.tag+">");return null!==e.tag||null!==e.anchor||O}function j(e,t){var r,n,c,o=e.position,s=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap={},e.anchorMap={};e.position<e.length&&(u(e,!0,-1),!(e.lineIndent>0||z!==e.character));){for(s=!0,e.character=e.input.charCodeAt(++e.position),r=e.position;e.position<e.length&&$!==e.character&&U!==e.character&&H!==e.character&&B!==e.character;)e.character=e.input.charCodeAt(++e.position);for(n=e.input.slice(r,e.position),c=[],n.length<1&&a(e,"directive name must not be less than one character in length");e.position<e.length;){for(;$===e.character||U===e.character;)e.character=e.input.charCodeAt(++e.position);if(J===e.character){do e.character=e.input.charCodeAt(++e.position);while(e.position<e.length&&H!==e.character&&B!==e.character);break}if(H===e.character||B===e.character)break;for(r=e.position;e.position<e.length&&$!==e.character&&U!==e.character&&H!==e.character&&B!==e.character;)e.character=e.input.charCodeAt(++e.position);c.push(e.input.slice(r,e.position))}e.position<e.length&&l(e),N.call(Ht,n)?Ht[n](e,n,c):i(e,'unknown document directive "'+n+'"')}return u(e,!0,-1),0===e.lineIndent&&tt===e.character&&tt===e.input.charCodeAt(e.position+1)&&tt===e.input.charCodeAt(e.position+2)?(e.position+=3,e.character=e.input.charCodeAt(e.position),u(e,!0,-1)):s&&a(e,"directives end mark is expected"),C(e,e.lineIndent-1,P,!1,!0),u(e,!0,-1),e.checkLineBreaks&&Dt.test(e.input.slice(o,e.position))&&i(e,"non-ASCII line breaks are interpreted as content"),t(e.result),e.position===e.lineStart&&p(e)?(rt===e.character&&(e.position+=3,e.character=e.input.charCodeAt(e.position),u(e,!0,-1)),void 0):(e.position<e.length&&a(e,"end of the stream or a document separator is expected"),void 0)}function S(e,t,n){n=n||{};var i=new r(e,n);for(Pt.test(i.input)&&a(i,"the stream contains non-printable characters");$===i.character;)i.lineIndent+=1,i.character=i.input.charCodeAt(++i.position);for(;i.position<i.length;)j(i,t)}function I(e,t){function r(e){if(a)throw new F("expected a single document in the stream, but found more");n=e,a=!0}var n=null,a=!1;return S(e,r,t),n}function k(e,t,r){S(e,t,E.extend({schema:L},r))}function O(e,t){return I(e,E.extend({schema:L},t))}var E=e("./common"),F=e("./exception"),R=e("./mark"),L=e("./schema/default_safe"),M=e("./schema/default_full"),N=Object.prototype.hasOwnProperty,T=1,_=2,K=3,P=4,D=1,Y=2,q=3,U=9,H=10,B=13,$=32,G=33,V=34,J=35,z=37,Z=38,W=39,Q=42,X=43,et=44,tt=45,rt=46,nt=47,at=48,it=49,ct=57,ot=58,st=60,lt=62,ut=63,pt=64,ht=65,ft=70,dt=76,mt=78,gt=80,yt=85,xt=91,vt=92,At=93,bt=95,wt=96,Ct=97,jt=98,St=101,It=102,kt=110,Ot=114,Et=116,Ft=117,Rt=118,Lt=120,Mt=123,Nt=124,Tt=125,_t={};_t[at]="\x00",_t[Ct]="",_t[jt]="\b",_t[Et]=" ",_t[U]=" ",_t[kt]="\n",_t[Rt]="",_t[It]="\f",_t[Ot]="\r",_t[St]="",_t[$]=" ",_t[V]='"',_t[nt]="/",_t[vt]="\\",_t[mt]="",_t[bt]=" ",_t[dt]="\u2028",_t[gt]="\u2029";var Kt={};Kt[Lt]=2,Kt[Ft]=4,Kt[yt]=8;var Pt=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uD800-\uDFFF\uFFFE\uFFFF]/,Dt=/[\x85\u2028\u2029]/,Yt=/[,\[\]\{\}]/,qt=/^(?:!|!!|![a-z\-]+!)$/i,Ut=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i,Ht={YAML:function(e,t,r){var n,c,o;null!==e.version&&a(e,"duplication of %YAML directive"),1!==r.length&&a(e,"YAML directive accepts exactly one argument"),n=/^([0-9]+)\.([0-9]+)$/.exec(r[0]),null===n&&a(e,"ill-formed argument of the YAML directive"),c=parseInt(n[1],10),o=parseInt(n[2],10),1!==c&&a(e,"unacceptable YAML version of the document"),e.version=r[0],e.checkLineBreaks=2>o,1!==o&&2!==o&&i(e,"unsupported YAML version of the document")},TAG:function(e,t,r){var n,i;2!==r.length&&a(e,"TAG directive accepts exactly two arguments"),n=r[0],i=r[1],qt.test(n)||a(e,"ill-formed tag handle (first argument) of the TAG directive"),N.call(e.tagMap,n)&&a(e,'there is a previously declared suffix for "'+n+'" tag handle'),Ut.test(i)||a(e,"ill-formed tag prefix (second argument) of the TAG directive"),e.tagMap[n]=i}};t.exports.loadAll=S,t.exports.load=I,t.exports.safeLoadAll=k,t.exports.safeLoad=O},{"./common":3,"./exception":5,"./mark":7,"./schema/default_full":10,"./schema/default_safe":11}],7:[function(e,t){"use strict";function r(e,t,r,n,a){this.name=e,this.buffer=t,this.position=r,this.line=n,this.column=a}var n=e("./common");r.prototype.getSnippet=function(e,t){var r,a,i,c,o;if(!this.buffer)return null;for(e=e||4,t=t||75,r="",a=this.position;a>0&&-1==="\x00\r\n\u2028\u2029".indexOf(this.buffer.charAt(a-1));)if(a-=1,this.position-a>t/2-1){r=" ... ",a+=5;break}for(i="",c=this.position;c<this.buffer.length&&-1==="\x00\r\n\u2028\u2029".indexOf(this.buffer.charAt(c));)if(c+=1,c-this.position>t/2-1){i=" ... ",c-=5;break}return o=this.buffer.slice(a,c),n.repeat(" ",e)+r+o+i+"\n"+n.repeat(" ",e+this.position-a+r.length)+"^"},r.prototype.toString=function(e){var t,r="";return this.name&&(r+='in "'+this.name+'" '),r+="at line "+(this.line+1)+", column "+(this.column+1),e||(t=this.getSnippet(),t&&(r+=":\n"+t)),r},t.exports=r},{"./common":3}],8:[function(e,t){"use strict";function r(e,t,n){var a=[];return e.include.forEach(function(e){n=r(e,t,n)}),e[t].forEach(function(e){n.forEach(function(t,r){t.tag===e.tag&&a.push(r)}),n.push(e)}),n.filter(function(e,t){return-1===a.indexOf(t)})}function n(){function e(e){n[e.tag]=e}var t,r,n={};for(t=0,r=arguments.length;r>t;t+=1)arguments[t].forEach(e);return n}function a(e){this.include=e.include||[],this.implicit=e.implicit||[],this.explicit=e.explicit||[],this.implicit.forEach(function(e){if(e.loadKind&&"scalar"!==e.loadKind)throw new c("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")}),this.compiledImplicit=r(this,"implicit",[]),this.compiledExplicit=r(this,"explicit",[]),this.compiledTypeMap=n(this.compiledImplicit,this.compiledExplicit)}var i=e("./common"),c=e("./exception"),o=e("./type");a.DEFAULT=null,a.create=function(){var e,t;switch(arguments.length){case 1:e=a.DEFAULT,t=arguments[0];break;case 2:e=arguments[0],t=arguments[1];break;default:throw new c("Wrong number of arguments for Schema.create function")}if(e=i.toArray(e),t=i.toArray(t),!e.every(function(e){return e instanceof a}))throw new c("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");if(!t.every(function(e){return e instanceof o}))throw new c("Specified list of YAML types (or a single Type object) contains a non-Type object.");return new a({include:e,explicit:t})},t.exports=a},{"./common":3,"./exception":5,"./type":14}],9:[function(e,t){"use strict";var r=e("../schema");t.exports=new r({include:[e("./json")]})},{"../schema":8,"./json":13}],10:[function(e,t){"use strict";var r=e("../schema");t.exports=r.DEFAULT=new r({include:[e("./default_safe")],explicit:[e("../type/js/undefined"),e("../type/js/regexp"),e("../type/js/function")]})},{"../schema":8,"../type/js/function":19,"../type/js/regexp":20,"../type/js/undefined":21,"./default_safe":11}],11:[function(e,t){"use strict";var r=e("../schema");t.exports=new r({include:[e("./core")],implicit:[e("../type/timestamp"),e("../type/merge")],explicit:[e("../type/binary"),e("../type/omap"),e("../type/pairs"),e("../type/set")]})},{"../schema":8,"../type/binary":15,"../type/merge":23,"../type/omap":25,"../type/pairs":26,"../type/set":28,"../type/timestamp":30,"./core":9}],12:[function(e,t){"use strict";var r=e("../schema");t.exports=new r({explicit:[e("../type/str"),e("../type/seq"),e("../type/map")]})},{"../schema":8,"../type/map":22,"../type/seq":27,"../type/str":29}],13:[function(e,t){"use strict";var r=e("../schema");t.exports=new r({include:[e("./failsafe")],implicit:[e("../type/null"),e("../type/bool"),e("../type/int"),e("../type/float")]})},{"../schema":8,"../type/bool":16,"../type/float":17,"../type/int":18,"../type/null":24,"./failsafe":12}],14:[function(e,t){"use strict";function r(e){var t={};return null!==e&&Object.keys(e).forEach(function(r){e[r].forEach(function(e){t[String(e)]=r})}),t}function n(e,t){if(t=t||{},Object.keys(t).forEach(function(t){if(-1===i.indexOf(t))throw new a('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.tag=e,this.loadKind=t.loadKind||null,this.loadResolver=t.loadResolver||null,this.dumpInstanceOf=t.dumpInstanceOf||null,this.dumpPredicate=t.dumpPredicate||null,this.dumpRepresenter=t.dumpRepresenter||null,this.dumpDefaultStyle=t.dumpDefaultStyle||null,this.dumpStyleAliases=r(t.dumpStyleAliases||null),-1===c.indexOf(this.loadKind))throw new a('Unknown loadKind "'+this.loadKind+'" is specified for "'+e+'" YAML type.')}var a=e("./exception"),i=["loadKind","loadResolver","dumpInstanceOf","dumpPredicate","dumpRepresenter","dumpDefaultStyle","dumpStyleAliases"],c=["scalar","sequence","mapping"];t.exports=n},{"./exception":5}],15:[function(e,t){"use strict";function r(e){var t,r,n,a,c=0,l=[],u=e.result;for(n=0,a=0,c=0;c<u.length;c+=1)if(r=u.charCodeAt(c),t=s[127&r],10!==r&&13!==r){if(-1===t)return!1;a=a<<6|t,n+=6,n>=8&&(n-=8,o!==u.charAt(c)&&l.push(a>>n&255),a&=(1<<n)-1)}return n?!1:(e.result=i?new i(l):l,!0)}function n(e){var t,r,n,a="";for(t=0,r=e.length-2;r>t;t+=3)a+=l[e[t+0]>>2],a+=l[((3&e[t+0])<<4)+(e[t+1]>>4)],a+=l[((15&e[t+1])<<2)+(e[t+2]>>6)],a+=l[63&e[t+2]];return n=e.length%3,0!==n&&(t=e.length-n,a+=l[e[t+0]>>2],2===n?(a+=l[((3&e[t+0])<<4)+(e[t+1]>>4)],a+=l[(15&e[t+1])<<2],a+=o):(a+=l[(3&e[t+0])<<4],a+=o+o)),a}function a(e){return i&&i.isBuffer(e)}var i=e("buffer").Buffer,c=e("../type"),o="=",s=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,0,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1],l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");t.exports=new c("tag:yaml.org,2002:binary",{loadKind:"scalar",loadResolver:r,dumpPredicate:a,dumpRepresenter:n})},{"../type":14,buffer:31}],16:[function(e,t){"use strict";function r(e){return i.hasOwnProperty(e.result)?(e.result=i[e.result],!0):!1}function n(e){return"[object Boolean]"===Object.prototype.toString.call(e)}var a=e("../type"),i={"true":!0,True:!0,TRUE:!0,"false":!1,False:!1,FALSE:!1};t.exports=new a("tag:yaml.org,2002:bool",{loadKind:"scalar",loadResolver:r,dumpPredicate:n,dumpRepresenter:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},dumpDefaultStyle:"lowercase"})},{"../type":14}],17:[function(e,t){"use strict";function r(e){var t,r,n,a,i=e.result;return c.test(i)?(t=i.replace(/_/g,"").toLowerCase(),r="-"===t[0]?-1:1,a=[],0<="+-".indexOf(t[0])&&(t=t.slice(1)),".inf"===t?(e.result=1===r?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY,!0):".nan"===t?(e.result=0/0,!0):0<=t.indexOf(":")?(t.split(":").forEach(function(e){a.unshift(parseFloat(e,10))}),t=0,n=1,a.forEach(function(e){t+=e*n,n*=60}),e.result=r*t,!0):(e.result=r*parseFloat(t,10),!0)):!1}function n(e,t){if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";
case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else{if(Number.NEGATIVE_INFINITY!==e)return e.toString(10);switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}}}function a(e){return"[object Number]"===Object.prototype.toString.call(e)&&0!==e%1}var i=e("../type"),c=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)\\.[0-9_]*(?:[eE][-+][0-9]+)?|\\.[0-9_]+(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");t.exports=new i("tag:yaml.org,2002:float",{loadKind:"scalar",loadResolver:r,dumpPredicate:a,dumpRepresenter:n,dumpDefaultStyle:"lowercase"})},{"../type":14}],18:[function(e,t){"use strict";function r(e){var t,r,n,a,c=e.result;return i.test(c)?(t=c.replace(/_/g,""),r="-"===t[0]?-1:1,a=[],0<="+-".indexOf(t[0])&&(t=t.slice(1)),"0"===t?(e.result=0,!0):/^0b/.test(t)?(e.result=r*parseInt(t.slice(2),2),!0):/^0x/.test(t)?(e.result=r*parseInt(t,16),!0):"0"===t[0]?(e.result=r*parseInt(t,8),!0):0<=t.indexOf(":")?(t.split(":").forEach(function(e){a.unshift(parseInt(e,10))}),t=0,n=1,a.forEach(function(e){t+=e*n,n*=60}),e.result=r*t,!0):(e.result=r*parseInt(t,10),!0)):!1}function n(e){return"[object Number]"===Object.prototype.toString.call(e)&&0===e%1}var a=e("../type"),i=new RegExp("^(?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?(?:0|[1-9][0-9_]*)|[-+]?0x[0-9a-fA-F_]+|[-+]?[1-9][0-9_]*(?::[0-5]?[0-9])+)$");t.exports=new a("tag:yaml.org,2002:int",{loadKind:"scalar",loadResolver:r,dumpPredicate:n,dumpRepresenter:{binary:function(e){return"0b"+e.toString(2)},octal:function(e){return"0"+e.toString(8)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return"0x"+e.toString(16).toUpperCase()}},dumpDefaultStyle:"decimal",dumpStyleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}})},{"../type":14}],19:[function(e,t){"use strict";function r(e){try{var t,r="("+e.result+")",n=i.parse(r,{range:!0}),a=[];return"Program"!==n.type||1!==n.body.length||"ExpressionStatement"!==n.body[0].type||"FunctionExpression"!==n.body[0].expression.type?!1:(n.body[0].expression.params.forEach(function(e){a.push(e.name)}),t=n.body[0].expression.body.range,e.result=new Function(a,r.slice(t[0]+1,t[1]-1)),!0)}catch(c){return!1}}function n(e){return e.toString()}function a(e){return"[object Function]"===Object.prototype.toString.call(e)}var i;try{i=e("esprima")}catch(c){window&&(i=window.esprima)}var o=e("../../type");t.exports=new o("tag:yaml.org,2002:js/function",{loadKind:"scalar",loadResolver:r,dumpPredicate:a,dumpRepresenter:n})},{"../../type":14,esprima:"S2ZkVY"}],20:[function(e,t){"use strict";function r(e){var t,r=e.result,n=/\/([gim]*)$/.exec(e.result);"/"===r[0]&&n&&4>=n[0].length&&(r=r.slice(1,r.length-n[0].length),t=n[1]);try{return e.result=new RegExp(r,t),!0}catch(a){return!1}}function n(e){var t="/"+e.source+"/";return e.global&&(t+="g"),e.multiline&&(t+="m"),e.ignoreCase&&(t+="i"),t}function a(e){return"[object RegExp]"===Object.prototype.toString.call(e)}var i=e("../../type");t.exports=new i("tag:yaml.org,2002:js/regexp",{loadKind:"scalar",loadResolver:r,dumpPredicate:a,dumpRepresenter:n})},{"../../type":14}],21:[function(e,t){"use strict";function r(e){return e.result=void 0,!0}function n(){return""}function a(e){return"undefined"==typeof e}var i=e("../../type");t.exports=new i("tag:yaml.org,2002:js/undefined",{loadKind:"scalar",loadResolver:r,dumpPredicate:a,dumpRepresenter:n})},{"../../type":14}],22:[function(e,t){"use strict";var r=e("../type");t.exports=new r("tag:yaml.org,2002:map",{loadKind:"mapping"})},{"../type":14}],23:[function(e,t){"use strict";function r(e){return"<<"===e.result}var n=e("../type");t.exports=new n("tag:yaml.org,2002:merge",{loadKind:"scalar",loadResolver:r})},{"../type":14}],24:[function(e,t){"use strict";function r(e){return i.hasOwnProperty(e.result)?(e.result=null,!0):!1}function n(e){return null===e}var a=e("../type"),i={"~":!0,"null":!0,Null:!0,NULL:!0};t.exports=new a("tag:yaml.org,2002:null",{loadKind:"scalar",loadResolver:r,dumpPredicate:n,dumpRepresenter:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},dumpDefaultStyle:"lowercase"})},{"../type":14}],25:[function(e,t){"use strict";function r(e){var t,r,n,c,o,s=[],l=e.result;for(t=0,r=l.length;r>t;t+=1){if(n=l[t],o=!1,"[object Object]"!==i.call(n))return!1;for(c in n)if(a.call(n,c)){if(o)return!1;o=!0}if(!o)return!1;if(-1!==s.indexOf(c))return!1;s.push(c)}return!0}var n=e("../type"),a=Object.prototype.hasOwnProperty,i=Object.prototype.toString;t.exports=new n("tag:yaml.org,2002:omap",{loadKind:"sequence",loadResolver:r})},{"../type":14}],26:[function(e,t){"use strict";function r(e){var t,r,n,i,c,o=e.result;for(c=new Array(o.length),t=0,r=o.length;r>t;t+=1){if(n=o[t],"[object Object]"!==a.call(n))return!1;if(i=Object.keys(n),1!==i.length)return!1;c[t]=[i[0],n[i[0]]]}return e.result=c,!0}var n=e("../type"),a=Object.prototype.toString;t.exports=new n("tag:yaml.org,2002:pairs",{loadKind:"sequence",loadResolver:r})},{"../type":14}],27:[function(e,t){"use strict";var r=e("../type");t.exports=new r("tag:yaml.org,2002:seq",{loadKind:"sequence"})},{"../type":14}],28:[function(e,t){"use strict";function r(e){var t,r=e.result;for(t in r)if(a.call(r,t)&&null!==r[t])return!1;return!0}var n=e("../type"),a=Object.prototype.hasOwnProperty;t.exports=new n("tag:yaml.org,2002:set",{loadKind:"mapping",loadResolver:r})},{"../type":14}],29:[function(e,t){"use strict";var r=e("../type");t.exports=new r("tag:yaml.org,2002:str",{loadKind:"scalar"})},{"../type":14}],30:[function(e,t){"use strict";function r(e){var t,r,n,a,c,o,s,l,u,p,h=0,f=null;if(t=i.exec(e.result),null===t)return!1;if(r=+t[1],n=+t[2]-1,a=+t[3],!t[4])return e.result=new Date(Date.UTC(r,n,a)),!0;if(c=+t[4],o=+t[5],s=+t[6],t[7]){for(h=t[7].slice(0,3);h.length<3;)h+="0";h=+h}return t[9]&&(l=+t[10],u=+(t[11]||0),f=6e4*(60*l+u),"-"===t[9]&&(f=-f)),p=new Date(Date.UTC(r,n,a,c,o,s,h)),f&&p.setTime(p.getTime()-f),e.result=p,!0}function n(e){return e.toISOString()}var a=e("../type"),i=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?)?$");t.exports=new a("tag:yaml.org,2002:timestamp",{loadKind:"scalar",loadResolver:r,dumpInstanceOf:Date,dumpRepresenter:n})},{"../type":14}],31:[function(){},{}]},{},[1])(1)});

window.jsyaml = jsyaml;

/*
 CSV-JS - A Comma-Separated Values parser for JS

 Built to rfc4180 standard, with options for adjusting strictness:
    - optional carriage returns for non-microsoft sources
    - automatically type-cast numeric an boolean values
    - relaxed mode which: ignores blank lines, ignores gargabe following quoted tokens, does not enforce a consistent record length

 Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 Author Greg Kindel (twitter @gkindel), 2013
 */
(function(){var a={RELAXED:!1,IGNORE_RECORD_LENGTH:!1,IGNORE_QUOTES:!1,LINE_FEED_OK:!0,CARRIAGE_RETURN_OK:!0,DETECT_TYPES:!0,IGNORE_QUOTE_WHITESPACE:!0,DEBUG:!1,ERROR_EOF:"UNEXPECTED_END_OF_FILE",ERROR_CHAR:"UNEXPECTED_CHARACTER",ERROR_EOL:"UNEXPECTED_END_OF_RECORD",WARN_SPACE:"UNEXPECTED_WHITESPACE",parse:function(c){var d=a.result=[];a.offset=0;a.str=c;a.record_begin();a.debug("parse()",c);for(var b;;){b=c[a.offset++];a.debug("c",b);if(null==b){a.escaped&&a.error(a.ERROR_EOF);a.record&&(a.token_end(),
a.record_end());a.debug("...bail",b,a.state,a.record);a.reset();break}if(null==a.record){if(a.RELAXED&&("\n"==b||"\r"==b&&"\n"==c[a.offset+1]))continue;a.record_begin()}if(0==a.state){if((" "===b||"\t"===b)&&'"'==a.next_nonspace())if(a.RELAXED||a.IGNORE_QUOTE_WHITESPACE)continue;else a.warn(a.WARN_SPACE);if('"'==b&&!a.IGNORE_QUOTES){a.debug("...escaped start",b);a.escaped=!0;a.state=1;continue}a.state=1}1==a.state&&a.escaped?'"'==b?'"'==c[a.offset]?(a.debug("...escaped quote",b),a.token+='"',a.offset++):
(a.debug("...escaped end",b),a.escaped=!1,a.state=2):(a.token+=b,a.debug("...escaped add",b,a.token)):"\r"==b?("\n"==c[a.offset]?a.offset++:a.CARRIAGE_RETURN_OK||a.error(a.ERROR_CHAR),a.token_end(),a.record_end()):"\n"==b?(a.LINE_FEED_OK||a.RELAXED||a.error(a.ERROR_CHAR),a.token_end(),a.record_end()):","==b?a.token_end():1==a.state?(a.token+=b,a.debug("...add",b,a.token)):" "===b||"\t"===b?a.IGNORE_QUOTE_WHITESPACE||a.error(a.WARN_SPACE):a.RELAXED||a.error(a.ERROR_CHAR)}return d},reset:function(){a.state=
null;a.token=null;a.escaped=null;a.record=null;a.offset=null;a.result=null;a.str=null},next_nonspace:function(){for(var c=a.offset,d;c<a.str.length;)if(d=a.str[c++]," "!=d&&"\t"!==d)return d;return null},record_begin:function(){a.escaped=!1;a.record=[];a.token_begin();a.debug("record_begin")},record_end:function(){a.state=4;!a.IGNORE_RECORD_LENGTH&&!a.RELAXED&&0<a.result.length&&a.record.length!=a.result[0].length&&a.error(a.ERROR_EOL);a.result.push(a.record);a.debug("record end",a.record);a.record=
null},resolve_type:function(a){a.match(/^\d+(\.\d+)?$/)?a=parseFloat(a):a.match(/^true|false$/i)?a=Boolean(a.match(/true/i)):"undefined"===a?a=void 0:"null"===a&&(a=null);return a},token_begin:function(){a.state=0;a.token=""},token_end:function(){a.DETECT_TYPES&&(a.token=a.resolve_type(a.token));a.record.push(a.token);a.debug("token end",a.token);a.token_begin()},debug:function(){a.DEBUG&&console.log(arguments)},dump:function(c){return[c,"at char",a.offset,":",a.str.substr(a.offset-50,50).replace(/\r/mg,
"\\r").replace(/\n/mg,"\\n").replace(/\t/mg,"\\t")].join(" ")},error:function(c){c=a.dump(c);a.reset();throw c;},warn:function(c){c=a.dump(c);try{console.warn(c);return}catch(d){}try{console.log(c)}catch(b){}}};(function(a,d,b){"undefined"!=typeof module&&module.exports?module.exports=b():"function"==typeof define&&"object"==typeof define.amd?define(b):this[a]=b()})("CSV",this,function(){return a})})();

window.CSV = CSV;

/* json2 */
"object"!=typeof JSON&&(JSON={}),function(){"use strict"
function f(t){return 10>t?"0"+t:t}function quote(t){return escapable.lastIndex=0,escapable.test(t)?'"'+t.replace(escapable,function(t){var e=meta[t]
return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var r,n,o,f,u,p=gap,i=e[t]
switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(t)),"function"==typeof rep&&(i=rep.call(e,t,i)),typeof i){case"string":return quote(i)
case"number":return isFinite(i)?i+"":"null"
case"boolean":case"null":return i+""
case"object":if(!i)return"null"
if(gap+=indent,u=[],"[object Array]"===Object.prototype.toString.apply(i)){for(f=i.length,r=0;f>r;r+=1)u[r]=str(r,i)||"null"
return o=0===u.length?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+p+"]":"["+u.join(",")+"]",gap=p,o}if(rep&&"object"==typeof rep)for(f=rep.length,r=0;f>r;r+=1)"string"==typeof rep[r]&&(n=rep[r],o=str(n,i),o&&u.push(quote(n)+(gap?": ":":")+o))
else for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(o=str(n,i),o&&u.push(quote(n)+(gap?": ":":")+o))
return o=0===u.length?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+p+"}":"{"+u.join(",")+"}",gap=p,o}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()})
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","  ":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep
"function"!=typeof JSON.stringify&&(JSON.stringify=function(t,e,r){var n
if(gap="",indent="","number"==typeof r)for(n=0;r>n;n+=1)indent+=" "
else"string"==typeof r&&(indent=r)
if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw Error("JSON.stringify")
return str("",{"":t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(t,e){var r,n,o=t[e]
if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n=walk(o,r),void 0!==n?o[r]=n:delete o[r])
return reviver.call(t,e,o)}var j
if(text+="",cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j
throw new SyntaxError("JSON.parse")})}();

window.JSON = JSON;

//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?void(this._wrapped=n):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.6.0";var A=j.each=j.forEach=function(n,t,e){if(null==n)return n;if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return;return n};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var O="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},j.find=j.detect=function(n,t,r){var e;return k(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var k=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:k(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,j.property(t))},j.where=function(n,t){return j.filter(n,j.matches(t))},j.findWhere=function(n,t){return j.find(n,j.matches(t))},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);var e=-1/0,u=-1/0;return A(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;o>u&&(e=n,u=o)}),e},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);var e=1/0,u=1/0;return A(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;u>o&&(e=n,u=o)}),e},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=j.values(n)),n[j.random(n.length-1)]):j.shuffle(n).slice(0,Math.max(0,t))};var E=function(n){return null==n?j.identity:j.isFunction(n)?n:j.property(n)};j.sortBy=function(n,t,r){return t=E(t),j.pluck(j.map(n,function(n,e,u){return{value:n,index:e,criteria:t.call(r,n,e,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=E(r),A(t,function(i,a){var o=r.call(e,i,a,t);n(u,o,i)}),u}};j.groupBy=F(function(n,t,r){j.has(n,t)?n[t].push(r):n[t]=[r]}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=E(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.partition=function(n,t){var r=[],e=[];return A(n,function(n){(t(n)?r:e).push(n)}),[r,e]},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.contains(t,n)})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===j&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:j.now(),a=null,i=n.apply(e,u),e=u=null};return function(){var l=j.now();o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u),e=u=null):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o,c=function(){var l=j.now()-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u),i=u=null))};return function(){i=this,u=arguments,a=j.now();var l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u),i=u=null),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return j.partial(t,n)},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=function(n){if(!j.isObject(n))return[];if(w)return w(n);var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o)&&"constructor"in n&&"constructor"in t)return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.constant=function(n){return function(){return n}},j.property=function(n){return function(t){return t[n]}},j.matches=function(n){return function(t){if(t===n)return!0;for(var r in n)if(n[r]!==t[r])return!1;return!0}},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},j.now=Date.now||function(){return(new Date).getTime()};var T={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};T.unescape=j.invert(T.escape);var I={escape:new RegExp("["+j.keys(T.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(T.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(I[n],function(t){return T[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n"," ":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),"function"==typeof define&&define.amd&&define("underscore",[],function(){return j})}).call(this);
//     Underscore.string
!function(e,t){"use strict";var n=t.prototype.trim,r=t.prototype.trimRight,i=t.prototype.trimLeft,s=function(e){return e*1||0},o=function(e,t){if(t<1)return"";var n="";while(t>0)t&1&&(n+=e),t>>=1,e+=e;return n},u=[].slice,a=function(e){return e==null?"\\s":e.source?e.source:"["+p.escapeRegExp(e)+"]"},f={lt:"<",gt:">",quot:'"',apos:"'",amp:"&"},l={};for(var c in f)l[f[c]]=c;var h=function(){function e(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}var n=o,r=function(){return r.cache.hasOwnProperty(arguments[0])||(r.cache[arguments[0]]=r.parse(arguments[0])),r.format.call(null,r.cache[arguments[0]],arguments)};return r.format=function(r,i){var s=1,o=r.length,u="",a,f=[],l,c,p,d,v,m;for(l=0;l<o;l++){u=e(r[l]);if(u==="string")f.push(r[l]);else if(u==="array"){p=r[l];if(p[2]){a=i[s];for(c=0;c<p[2].length;c++){if(!a.hasOwnProperty(p[2][c]))throw new Error(h('[_.sprintf] property "%s" does not exist',p[2][c]));a=a[p[2][c]]}}else p[1]?a=i[p[1]]:a=i[s++];if(/[^s]/.test(p[8])&&e(a)!="number")throw new Error(h("[_.sprintf] expecting number but found %s",e(a)));switch(p[8]){case"b":a=a.toString(2);break;case"c":a=t.fromCharCode(a);break;case"d":a=parseInt(a,10);break;case"e":a=p[7]?a.toExponential(p[7]):a.toExponential();break;case"f":a=p[7]?parseFloat(a).toFixed(p[7]):parseFloat(a);break;case"o":a=a.toString(8);break;case"s":a=(a=t(a))&&p[7]?a.substring(0,p[7]):a;break;case"u":a=Math.abs(a);break;case"x":a=a.toString(16);break;case"X":a=a.toString(16).toUpperCase()}a=/[def]/.test(p[8])&&p[3]&&a>=0?"+"+a:a,v=p[4]?p[4]=="0"?"0":p[4].charAt(1):" ",m=p[6]-t(a).length,d=p[6]?n(v,m):"",f.push(p[5]?a+d:d+a)}}return f.join("")},r.cache={},r.parse=function(e){var t=e,n=[],r=[],i=0;while(t){if((n=/^[^\x25]+/.exec(t))!==null)r.push(n[0]);else if((n=/^\x25{2}/.exec(t))!==null)r.push("%");else{if((n=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t))===null)throw new Error("[_.sprintf] huh?");if(n[2]){i|=1;var s=[],o=n[2],u=[];if((u=/^([a-z_][a-z_\d]*)/i.exec(o))===null)throw new Error("[_.sprintf] huh?");s.push(u[1]);while((o=o.substring(u[0].length))!=="")if((u=/^\.([a-z_][a-z_\d]*)/i.exec(o))!==null)s.push(u[1]);else{if((u=/^\[(\d+)\]/.exec(o))===null)throw new Error("[_.sprintf] huh?");s.push(u[1])}n[2]=s}else i|=2;if(i===3)throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");r.push(n)}t=t.substring(n[0].length)}return r},r}(),p={VERSION:"2.3.0",isBlank:function(e){return e==null&&(e=""),/^\s*$/.test(e)},stripTags:function(e){return e==null?"":t(e).replace(/<\/?[^>]+>/g,"")},capitalize:function(e){return e=e==null?"":t(e),e.charAt(0).toUpperCase()+e.slice(1)},chop:function(e,n){return e==null?[]:(e=t(e),n=~~n,n>0?e.match(new RegExp(".{1,"+n+"}","g")):[e])},clean:function(e){return p.strip(e).replace(/\s+/g," ")},count:function(e,n){return e==null||n==null?0:t(e).split(n).length-1},chars:function(e){return e==null?[]:t(e).split("")},swapCase:function(e){return e==null?"":t(e).replace(/\S/g,function(e){return e===e.toUpperCase()?e.toLowerCase():e.toUpperCase()})},escapeHTML:function(e){return e==null?"":t(e).replace(/[&<>"']/g,function(e){return"&"+l[e]+";"})},unescapeHTML:function(e){return e==null?"":t(e).replace(/\&([^;]+);/g,function(e,n){var r;return n in f?f[n]:(r=n.match(/^#x([\da-fA-F]+)$/))?t.fromCharCode(parseInt(r[1],16)):(r=n.match(/^#(\d+)$/))?t.fromCharCode(~~r[1]):e})},escapeRegExp:function(e){return e==null?"":t(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")},splice:function(e,t,n,r){var i=p.chars(e);return i.splice(~~t,~~n,r),i.join("")},insert:function(e,t,n){return p.splice(e,t,0,n)},include:function(e,n){return n===""?!0:e==null?!1:t(e).indexOf(n)!==-1},join:function(){var e=u.call(arguments),t=e.shift();return t==null&&(t=""),e.join(t)},lines:function(e){return e==null?[]:t(e).split("\n")},reverse:function(e){return p.chars(e).reverse().join("")},startsWith:function(e,n){return n===""?!0:e==null||n==null?!1:(e=t(e),n=t(n),e.length>=n.length&&e.slice(0,n.length)===n)},endsWith:function(e,n){return n===""?!0:e==null||n==null?!1:(e=t(e),n=t(n),e.length>=n.length&&e.slice(e.length-n.length)===n)},succ:function(e){return e==null?"":(e=t(e),e.slice(0,-1)+t.fromCharCode(e.charCodeAt(e.length-1)+1))},titleize:function(e){return e==null?"":t(e).replace(/(?:^|\s)\S/g,function(e){return e.toUpperCase()})},camelize:function(e){return p.trim(e).replace(/[-_\s]+(.)?/g,function(e,t){return t.toUpperCase()})},underscored:function(e){return p.trim(e).replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/[-\s]+/g,"_").toLowerCase()},dasherize:function(e){return p.trim(e).replace(/([A-Z])/g,"-$1").replace(/[-_\s]+/g,"-").toLowerCase()},classify:function(e){return p.titleize(t(e).replace(/_/g," ")).replace(/\s/g,"")},humanize:function(e){return p.capitalize(p.underscored(e).replace(/_id$/,"").replace(/_/g," "))},trim:function(e,r){return e==null?"":!r&&n?n.call(e):(r=a(r),t(e).replace(new RegExp("^"+r+"+|"+r+"+$","g"),""))},ltrim:function(e,n){return e==null?"":!n&&i?i.call(e):(n=a(n),t(e).replace(new RegExp("^"+n+"+"),""))},rtrim:function(e,n){return e==null?"":!n&&r?r.call(e):(n=a(n),t(e).replace(new RegExp(n+"+$"),""))},truncate:function(e,n,r){return e==null?"":(e=t(e),r=r||"...",n=~~n,e.length>n?e.slice(0,n)+r:e)},prune:function(e,n,r){if(e==null)return"";e=t(e),n=~~n,r=r!=null?t(r):"...";if(e.length<=n)return e;var i=function(e){return e.toUpperCase()!==e.toLowerCase()?"A":" "},s=e.slice(0,n+1).replace(/.(?=\W*\w*$)/g,i);return s.slice(s.length-2).match(/\w\w/)?s=s.replace(/\s*\S+$/,""):s=p.rtrim(s.slice(0,s.length-1)),(s+r).length>e.length?e:e.slice(0,s.length)+r},words:function(e,t){return p.isBlank(e)?[]:p.trim(e,t).split(t||/\s+/)},pad:function(e,n,r,i){e=e==null?"":t(e),n=~~n;var s=0;r?r.length>1&&(r=r.charAt(0)):r=" ";switch(i){case"right":return s=n-e.length,e+o(r,s);case"both":return s=n-e.length,o(r,Math.ceil(s/2))+e+o(r,Math.floor(s/2));default:return s=n-e.length,o(r,s)+e}},lpad:function(e,t,n){return p.pad(e,t,n)},rpad:function(e,t,n){return p.pad(e,t,n,"right")},lrpad:function(e,t,n){return p.pad(e,t,n,"both")},sprintf:h,vsprintf:function(e,t){return t.unshift(e),h.apply(null,t)},toNumber:function(e,n){if(e==null||e=="")return 0;e=t(e);var r=s(s(e).toFixed(~~n));return r===0&&!e.match(/^0+$/)?Number.NaN:r},numberFormat:function(e,t,n,r){if(isNaN(e)||e==null)return"";e=e.toFixed(~~t),r=r||",";var i=e.split("."),s=i[0],o=i[1]?(n||".")+i[1]:"";return s.replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+r)+o},strRight:function(e,n){if(e==null)return"";e=t(e),n=n!=null?t(n):n;var r=n?e.indexOf(n):-1;return~r?e.slice(r+n.length,e.length):e},strRightBack:function(e,n){if(e==null)return"";e=t(e),n=n!=null?t(n):n;var r=n?e.lastIndexOf(n):-1;return~r?e.slice(r+n.length,e.length):e},strLeft:function(e,n){if(e==null)return"";e=t(e),n=n!=null?t(n):n;var r=n?e.indexOf(n):-1;return~r?e.slice(0,r):e},strLeftBack:function(e,t){if(e==null)return"";e+="",t=t!=null?""+t:t;var n=e.lastIndexOf(t);return~n?e.slice(0,n):e},toSentence:function(e,t,n,r){t=t||", ",n=n||" and ";var i=e.slice(),s=i.pop();return e.length>2&&r&&(n=p.rtrim(t)+n),i.length?i.join(t)+n+s:s},toSentenceSerial:function(){var e=u.call(arguments);return e[3]=!0,p.toSentence.apply(p,e)},slugify:function(e){if(e==null)return"";var n="Ä…Ã Ã¡Ã¤Ã¢Ã£Ã¥Ã¦Ä‡Ä™Ã¨Ã©Ã«ÃªÃ¬Ã­Ã¯Ã®Å‚Å„Ã²Ã³Ã¶Ã´ÃµÃ¸Ã¹ÃºÃ¼Ã»Ã±Ã§Å¼Åº",r="aaaaaaaaceeeeeiiiilnoooooouuuunczz",i=new RegExp(a(n),"g");return e=t(e).toLowerCase().replace(i,function(e){var t=n.indexOf(e);return r.charAt(t)||"-"}),p.dasherize(e.replace(/[^\w\s-]/g,""))},surround:function(e,t){return[t,e,t].join("")},quote:function(e){return p.surround(e,'"')},exports:function(){var e={};for(var t in this){if(!this.hasOwnProperty(t)||t.match(/^(?:include|contains|reverse)$/))continue;e[t]=this[t]}return e},repeat:function(e,n,r){if(e==null)return"";n=~~n;if(r==null)return o(t(e),n);for(var i=[];n>0;i[--n]=e);return i.join(r)},levenshtein:function(e,n){if(e==null&&n==null)return 0;if(e==null)return t(n).length;if(n==null)return t(e).length;e=t(e),n=t(n);var r=[],i,s;for(var o=0;o<=n.length;o++)for(var u=0;u<=e.length;u++)o&&u?e.charAt(u-1)===n.charAt(o-1)?s=i:s=Math.min(r[u],r[u-1],i)+1:s=o+u,i=r[u],r[u]=s;return r.pop()}};p.strip=p.trim,p.lstrip=p.ltrim,p.rstrip=p.rtrim,p.center=p.lrpad,p.rjust=p.lpad,p.ljust=p.rpad,p.contains=p.include,p.q=p.quote,typeof exports!="undefined"?(typeof module!="undefined"&&module.exports&&(module.exports=p),exports._s=p):typeof define=="function"&&define.amd?define("underscore.string",[],function(){return p}):(e._=e._||{},e._.string=e._.str=p)}(this,String);

window._cc = _.noConflict();

})();


/*======================================================================
  utils
  ====================================================================*/

window.Utils || (Utils = {});
(function($, _, u){

  var SELECTOR_MAX_DEPTH = 3,
      _s = _.string

  // Gets unique CSS selectors for form elements, or fails with an empty string ('').
  // Will not return :nth-child selectors at all.
  u.getSelector = function(el, depth){
    var selector = ''; // falsy value that is concat-safe
    depth || (depth = 0);
    if (depth >= SELECTOR_MAX_DEPTH) {
      return selector;
    }
    if(!u.isNodelike(el)) {
      return selector;
    }

    var $el = $(el).eq(0),
        $root = $el.parents().eq($el.parents().length - 1),
        id = $el.attr('id'),
        classList = $el.attr('class') ? $el.attr('class').split(' ').filter(function(el){ return el !== '';}) : [],
        joinedClassList = classList.join('.'),
        action = $el.attr('action'),
        name = $el.attr('name'),
        value = $el.attr('value'),
        type = $el.attr('type'),
        height = $el.attr('height'),
        width = $el.attr('width'),
        tagName = $el[0].tagName.toLowerCase(),
        form = $el.parents('form'),
        formId = form.attr('id'),
        formSelector = u.getSelector(form, depth+1),
        classedParent = $el.parents('[class]').eq(0),
        classedParentSelector = u.getSelector(classedParent, depth+1),
        iddParent = $el.parents('[id]').eq(0),
        iddParentSelector = u.getSelector(iddParent, depth+1);

    var possibleSelectors = [];
    id && possibleSelectors.push(u.render('#{{ id }}', {
      id: id
    }));

    formSelector && tagName && name && possibleSelectors.push(
      u.render("{{ formSelector }} {{ tagName }}[name='{{ name }}']", {
        formSelector: formSelector,
        tagName: tagName,
        name: name
    }));

    tagName && classList.length && name && possibleSelectors.push(
      u.render("{{ tagName}}.{{ joinedClassList }}[name='{{ name }}']", {
        tagName: tagName,
        joinedClassList: joinedClassList,
        name: name
    }));

    tagName && name && possibleSelectors.push(
      u.render("{{ tagName }}[name='{{ name }}']", {
        tagName: tagName,
        name: name
    }));

    tagName && classList.length && possibleSelectors.push(
      u.render("{{ tagName }}.{{ joinedClassList }}", {
        tagName: tagName,
        joinedClassList: joinedClassList
    }));

    iddParentSelector && tagName && classList.length && possibleSelectors.push(
      u.render("{{ iddParentSelector }} {{tagName}}.{{ joinedClassList }}",{
        iddParentSelector: iddParentSelector,
        tagName: tagName,
        joinedClassList: joinedClassList
    }));

    classedParentSelector && tagName && classList.length && possibleSelectors.push(
      u.render("{{ classedParentSelector }} {{tagName}}.{{ joinedClassList }}",{
        classedParentSelector: classedParentSelector,
        tagName: tagName,
        joinedClassList: joinedClassList
    }));

      iddParentSelector && tagName && possibleSelectors.push(
      u.render("{{ iddParentSelector }} {{tagName}}",{
        iddParentSelector: iddParentSelector,
        tagName: tagName
    }));

    classedParentSelector && tagName && possibleSelectors.push(
      u.render("{{ classedParentSelector }} {{tagName}}",{
        classedParentSelector: classedParentSelector,
        tagName: tagName
    }));

    formSelector && tagName && (type == "submit" || type == "image" || type == "button") && value && possibleSelectors.push(
      u.render("{{ formSelector }} {{ tagName }}[type='{{ type }}'][value='{{ value }}']", {
        formSelector: formSelector,
        tagName: tagName,
        type: type,
        value: value
    }));

    tagName && (type == "submit" || type == "image" || type == "button" || type == "radio" || type == "checkbox") && value && name && possibleSelectors.push(
      u.render("{{ tagName }}[type='{{ type }}'][name='{{ name }}'][value='{{ value }}']", {
        tagName: tagName,
        type: type,
        name: name,
        value: value
    }));

    tagName && (type == "submit" || type == "image" || type == "button") && value && possibleSelectors.push(
      u.render("{{ tagName }}[type='{{ type }}'][value='{{ value }}']", {
        tagName: tagName,
        type: type,
        value: value
    }));

    tagName && classList.length && height && possibleSelectors.push(
      u.render("{{ tagName }}.{{ joinedClassList }}[width='{{ width }}']", {
        tagName: tagName,
        joinedClassList: joinedClassList,
        width: width
    }));

    tagName && height && possibleSelectors.push(
      u.render("{{ tagName }}[width='{{ width }}']", {
        tagName: tagName,
        width: width
    }));

    tagName && action && possibleSelectors.push(
      u.render("{{ tagName }}[action='{{ action }}']", {
        tagName: tagName,
        action: action
      }));

    // Take the first match, we created them in order of preference.
    $.each(possibleSelectors, function(i, s){
      if (u.isUnique(s, $root)) {
        selector = s;
        return false;
      }
    });
    return selector;
  };

  // Returns true if the passed-in selector is unique on a page, false if not.
  u.isUnique = function(selector, ctx) {
    ctx || (ctx = $(document));
    // IDs need to be tested as attr selectors because of getElementById's behavior
    if (selector.match(/^#[^\s'"]+$/)) {
        selector = u.render("[id='{{ selector }}']", {
          selector: selector.replace('#', '')
        })
    }
    return $(ctx).find(selector).length === 1
  };

  // Returns true if the passed-in object is a vanilla array, false if not.
  u.isArray = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  // Returns true if the passed-in object is an enumerable object (jQuery or DOM nodelist), false if not.
  u.isNodeList = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]' && obj.hasOwnProperty('length');
  };

  // Returns true if the passed-in object is a DOM node, false if not.
  u.isNode = function(obj) {
    return obj.hasOwnProperty('nodeType') && obj.nodeType === 1;
  };

  // Returns true if the passed-in object is a DOM node or non-empty nodelist
  u.isNodelike = function(obj) {
    return u.isNode(obj) || (u.isNodeList(obj) && obj.length > 0);
  };

  // Renders basic mustache-like template strings, no nested obj support
  u.render = function(tmpl, ctx) {
    return tmpl.replace(/\{\{ ?([a-zA-Z0-9]+) ?\}\}/g, function(match, capture){
      return ctx[capture];
    });
  };

  // Github Async YAML Downloader
  u.getAsync = function(opts) {
    if (typeof opts.klass === 'undefined') {
      opts.klass = Object;
    }
    var url = _s.sprintf('%s/%s/contents/%s',
                         opts.baseAPIUrl, opts.repo, opts.filename),
        dfd = $.Deferred(),
        jsondata = null,
        hydrated = [];
    $.getJSON(url).done(function(data){
      if (_(data).isArray()) { // directory endpoint
        jsondata = data;
      } else { // individual file endpoint
        jsondata = jsyaml.safeLoad(atob(data.content));
      }
      if(_(jsondata).isArray()){
        hydrated = _(jsondata).map(function(obj, i, arr){
          return new opts.klass(obj);
        });
      } else {
        hydrated = new opts.klass(jsondata);
      }
      dfd.resolve(hydrated);
    });
    return dfd.promise();
  };

  u.getAsyncCSV = function(opts) {
    var url = _s.sprintf('%s/%s/contents/%s',
                         opts.baseAPIUrl, opts.repo, opts.filename),
        dfd = $.Deferred(),
        csvdata = null,
        headers = null,
        jsondata = [];
    $.getJSON(url).done(function(data){
      csvdata = CSV.parse(atob(data.content));
      headers = csvdata.shift();
      _.each(csvdata, function(row){
        var entry = {};
        _.each(row, function(val, i){
          entry[headers[i]] = val;
        });
        jsondata.push(entry);
      });
      dfd.resolve(jsondata);
    });
    return dfd.promise();
  };

})($cc, _cc, Utils);


/**
 =======================================================================
 * UnitedStates JS Module for CC Helper
 * Implements Legislator and ContactStep downloads from Github.
 * Requires jQuery, underscore.js, underscore.string, js-yaml.
 * TODO: Status checking, needs jsonp api at OpenCongress
 =======================================================================
 */

window.UnitedStates || (UnitedStates = function() {
  this.legislators = [];
});

(function($, _, us){
  var _s = _.string,
      baseAPIUrl = 'https://api.github.com/repos/unitedstates',
      COVERAGE_STATUSES = {
        MISSING: 0,
        COVERED: 1,
        UNKNOWN: 2,
        BROKEN: 3
      };


  // Base Class ========================================================

  us.prototype.getLegislatorFromFormUrl = function(url) {
    var legislators = [],
        uri = document.createElement('a');
    uri.href = url;
    // first try an exact match
    legislators = _.filter(this.legislators, function(legislator) {
      return legislator.contactFormUrl().match(new RegExp('\\b' + uri.host + '\\b')) !== null;
    });
    // if the legislator uses the generic form, find their actual id and match
    // against their regular url
    if (uri.host === 'forms.house.gov') {
      var name = uri.pathname.split('/')[1];
      if (name === 'write')
        name = uri.pathname.split('/')[2];
      legislators = _.filter(this.legislators, function(legislator) {
        return legislator.url().match(new RegExp('\\b' + name + '\\b')) !== null;
      });
    }
    // then try to match the last name
    if (legislators.length === 0 ) {
      legislators = _.filter(this.legislators, function(legislator) {
        return url.match(new RegExp(legislator.data.name.last.toLowerCase() + '(?:\\b|forms)')) !== null;
      });
    }
    // if last name yielded multiple results, filter on first name
    if (legislators.length > 1) {
      fullnameLegislators = _.filter(legislators, function(legislator){
        return url.match(new RegExp('\\b' + legislator.data.name.first.toLowerCase())) !== null;
      });
      // if that didn't work look for exact match on last name
      if (fullnameLegislators.length === 0) {
        legislators = _.filter(legislators, function(legislator){
          return url.match(new RegExp('\\b' + legislator.data.name.last.toLowerCase() + '\\b')) !== null;
        });
      } else {
        legislators = fullnameLegislators;
      }
    }
    return legislators[0];
  };

  us.prototype.getLegislatorsAsync = function(){
    var dfd = $.Deferred(),
        self = this;
    Utils.getAsync({
      baseAPIUrl: baseAPIUrl,
      repo: 'congress-legislators',
      filename: 'legislators-current.yaml',
      klass: UnitedStates.Legislator
    }).done(function(legislators){
      self.legislators = legislators;
      dfd.resolve(self.legislators);
    });
    return dfd.promise();
  };

  us.prototype.getLegislatorStatusesAsync = function() {
    var dfd = $.Deferred(),
        self = this;
    Utils.getAsync({
      baseAPIUrl: baseAPIUrl,
      repo: 'contact-congress',
      filename: 'members',
      klass: Object
    }).done(function(files){
      var bioguides = _(files).map(function(file, i){
        return file.name.replace('.yaml', '');
      });
      _.each(self.legislators, function(leg, i){
        if (_.indexOf(bioguides, leg.bioguide()) != -1) {
          self.legislators[i].coverageStatus = COVERAGE_STATUSES.COVERED;
        };
      });
      dfd.resolve(self.legislators);
    });
    return dfd.promise();
  }


  // Legislator Class ==================================================
  us.Legislator = function(legislator) {
    this.data = legislator;
    this.contactSteps = null;
    this.coverageStatus = COVERAGE_STATUSES.MISSING;
  };
  us.Legislator.prototype.repr = function() {
    return _s.sprintf("%s %s: %s (%s)",
                      this.statusIndicator(),
                      this.data.id.bioguide,
                      this.data.name.official_full,
                      this.stateDistrict());
  };

  us.Legislator.prototype.name = function(){
    return this.data.name.official_full;
  };

  us.Legislator.prototype.bioguide = function(){
    return this.data.id.bioguide;
  };

  us.Legislator.prototype.url = function(){
    return this.currentTerm().url;
  };

  us.Legislator.prototype.contactFormUrl = function(){
    return this.currentTerm().contact_form || this.currentTerm().url + '/contact/email-me';
  };

  us.Legislator.prototype.currentTerm = function() {
    return _(this.data.terms).last();
  };

  us.Legislator.prototype.stateDistrict = function() {
    var term = this.currentTerm();
    return term.type == "rep" ?
      _s.sprintf("%s-%d", term.state, term.district) :
      term.state;
  };

  us.Legislator.prototype.statusIndicator = function() {
    switch(this.coverageStatus) {
      case COVERAGE_STATUSES.MISSING:
        return "&times;";
        break;
      case COVERAGE_STATUSES.COVERED:
        return "&#10003;";
        break;
      case COVERAGE_STATUSES.BROKEN:
        return "!";
        break;
      default:
        return "?";
        break;
    };
  }

  us.Legislator.prototype.getContactStepsAsync = function() {
    var dfd = $.Deferred(),
        self = this;
    Utils.getAsync({
      baseAPIUrl: baseAPIUrl,
      repo: 'contact-congress',
      filename: _s.sprintf('members/%s.yaml', this.bioguide()),
      klass: UnitedStates.ContactStepSet
    }).done(function(stepSet){
      self.contactSteps = stepSet;
      dfd.resolve(self.contactSteps);
    });
    return dfd.promise();
  };


  // ContactStepSet Class ==============================================
  us.ContactStepSet = function(contactStepSet) {
    this.data = contactStepSet;
    this.buildStatus = 'unknown';
    this.buildError = null;
  };

  us.ContactStepSet.prototype.action = function() {
    return this.data.contact_form.action;
  };

  us.ContactStepSet.prototype.method = function() {
    return this.data.contact_form.method;
  };

  us.ContactStepSet.prototype.count = function() {
    return this.steps().length;
  };

  us.ContactStepSet.prototype.steps = function() {
    return this.data.contact_form.steps;
  };

  us.ContactStepSet.prototype.stepNumberOf = function(step) {
    return this.steps().indexOf(step);
  };

  us.ContactStepSet.prototype.updateStep = function(stepNumber, data) {
    this.data.contact_form.steps[stepNumber] = data;
  };

  us.ContactStepSet.prototype.addStep = function(data){
    this.updateStep(this.count(), data);
  };

  us.ContactStepSet.prototype.toYAML = function() {
    return jsyaml.safeDump(this.data);
  }

  // TODO: Implement Me.
  us.ContactStepSet.prototype.getBuildStatusAsync = function() {
    var dfd = $.Deferred(),
        status = 'unknown',
        self = this;

    self.buildStatus = status;
    return dfd.resolve(self.buildStatus);
  };

})($cc, _cc, UnitedStates);


/**
 =======================================================================
 * Stuff for filling out and finding relevant forms in the target page.
 * Requires underscore, jQuery
 =======================================================================
 */
window.Forms || (Forms = {});
(function($, _, f){

  var _s = _.string,
    baseAPIUrl = 'https://api.github.com/repos/unitedstates';

  f.sampleLetter = {};
  f.zips = {};
  f.constants = {};
  f.variables = [];
  f.fieldMappings = {
    '$NAME_PREFIX': '[name*="prefix"], select[name*="title"]:not([name*="message"]), [name*="salutation"]',
    '$NAME_FIRST': '[name*="first"], [name*="full"]:not([name*="address"])',
    '$NAME_LAST': '[name*="last"], [name*="full"]:not([name*="address"])',
    '$NAME_FULL': '[name*="full"]:not([name*="address"])',
    '$ADDRESS_STREET': '[name*="street"]:not([name*="2"], [name*="second"])',
    '$ADDRESS_STREET_2': '[name*="street"]:not([name*="1"], [name*="first"])',
    '$ADDRESS_CITY': '[name*="city"]',
    '$ADDRESS_STATE_POSTAL_ABBREV': '[name*="state"]',
    '$ADDRESS_STATE_FULL': '',
    '$ADDRESS_COUNTY': '[name*="county"]',
    '$ADDRESS_ZIP5': '[name*="zip"]:not([name*="4"], [name*="four"], [name*="extended"]), [name*="code"]:not([name*="4"], [name*="four"], [name*="extended"])',
    '$ADDRESS_ZIP4': '[name*="zip"][name*="4"], [name*="zip"][name*="four"], [name*="zip"][name*="extended"], [name*="code"][name*="4"], [name*="code"][name*="four"], [name*="code"][name*="extended"]',
    '$ADDRESS_ZIP_PLUS_4': '[name*="code"][name*="zip"], [name*="code"][name*="postal"]',
    '$PHONE': '[name*="phone"]',
    '$PHONE_PARENTHESES': '',
    '$EMAIL': '[name*="email"]',
    '$TOPIC': 'select[name*="subject"], select[name*="topic"], [type="radio"][name*="subject"], [type="radio"][name*="topic"]',
    '$SUBJECT': '[type="text"][name*="subject"], textarea[name*="subject"], [type="text"][name*="title"], textarea[name*="title"]',
    '$MESSAGE': 'textarea[name*="message"], textarea[name*="body"], textarea[name*="letter"]',
    '$CAPTCHA_SOLUTION': '[name="recaptcha_response_field"], [type="text"][name*="captcha"]',
    '$CAMPAIGN_UUID': '[type="hidden"][name*="ampaign"]',
    '$PERMALINK': '[type="hidden"][name="form_url"]',
    '$ORG_URL': '[type="hidden"][name*="org"][name*="url"]',
    '$ORG_NAME': '[type="hidden"][name*="org"][name*="name"]',
    '[submit button]': 'input[type="submit"], input[type="button"], button',
    '[check this]': '',
    '[uncheck this]': ''
  };

  f.requiredFields = [
    '$NAME_PREFIX',
    '$NAME_FIRST',
    '$NAME_LAST',
    '$NAME_FULL',
    '$ADDRESS_STREET',
    '$ADDRESS_CITY',
    '$ADDRESS_STATE_POSTAL_ABBREV',
    '$ADDRESS_ZIP5',
    '$ADDRESS_ZIP_PLUS_4',
    '$EMAIL',
    '$TOPIC',
    '$SUBJECT',
    '$MESSAGE',
    '$CAPTCHA_SOLUTION'
  ];

  f.textInputSelector = 'input:not([type="button"], [type="submit"], [type="radio"], [type="checkbox"], [type="image"], [type="reset"])';

  f.getSampleLetterAsync = function() {
    var dfd = $.Deferred(),
        self = f;
    Utils.getAsync({
      baseAPIUrl: baseAPIUrl,
      repo: 'contact-congress',
      filename: 'support/variables.yaml'
    }).done(function(letter){
      self.sampleLetter = letter;
      $.each(self.sampleLetter, function(key, element){
        self.sampleLetter[key] = element.example;
      });
      self.variables = _.keys(self.sampleLetter);
      dfd.resolve(letter);
    });
    return dfd.promise();
  };

  f.getConstantsAsync = function() {
    var dfd = $.Deferred(),
        self = f;
    Utils.getAsync({
      baseAPIUrl: baseAPIUrl,
      repo: 'contact-congress',
      filename: 'support/constants.yaml'
    }).done(function(constants){
      self.constants = constants;
      dfd.resolve(constants);
    });
    return dfd.promise();
  };

  f.getZipsAsync = function() {
    var dfd = $.Deferred(),
        self = f;
    Utils.getAsyncCSV({
      baseAPIUrl: "https://api.github.com/repos/sinak",
      repo: 'congress-zip-plus-four',
      filename: '8- output-final-with-senate.csv'
    }).done(function(rows){
      _.map(rows, function(row, i){
        self.zips[row.Bio_ID] = row;
      });
      dfd.resolve(self.zips);
    });
    return dfd.promise();
  }

  f.repr = function(el){
    el = $(el)[0];
    var label = $(el).prevAll('label').eq(0);
    label.length || (label = $(el).parents('div,tr,li,p').find('label'));
    return el.tagName + ': ' + Utils.getSelector(el);
  };

  f.mapElementsIn = function(ctx){
    var elementMap = {};
    $(f.fieldMappings).each(function(key, value){
      elementMap[key] = $(ctx.find(value).eq(0));
    });
    return elementMap;
  };

  f.getFormFields = function(ctx, opts) {
    var els =  ctx.find('input, select, button, textarea'),
        uniqueByNameThreshold = parseInt(opts.uniqueByName, 10);

    if (!isNaN(uniqueByNameThreshold)) {
      var uniqueEls = $([]);
      els.each(function(i, el){
        el = $(el);
        if ((els.filter('[name="' + el.attr(name) + '"]').length < uniqueByNameThreshold) ||
            (!uniqueEls.filter('[name="' + el.attr(name) + '"]').length)) {
          uniqueEls = uniqueEls.add(el);
        }
      });
      return uniqueEls;
    };
    return els;
  };

  f.selectDefaults = function(ctx, parentForm) {
    ctx.each(function(i, mapping){
      var original = parentForm.find($(mapping).parents('label').data('selector'));
      $.each(Forms.fieldMappings, function(field, selector){
        if (original.filter(selector).length > 0) {
          // set the value
          $(mapping).val(field);
          // then check the required box if the field is a required field
          if (_.indexOf(f.requiredFields, field) !== -1){
            $(mapping).parents('label').next('label').find('input').prop('checked', true);
          }
          return false;
        };
      });
    });
  };

  f.getOptionsAsArrayOrHash = function(options) {
    options = $(options).map(_.bind(function(i, opt){
      if ($(opt).attr('value')) {
        return opt;
      }
    }, this));
    options = $(options);
    // if values equal text...
    if ((options.eq(0).text() == options.eq(0).attr('value') &&
        options.eq(1).text() == options.eq(1).attr('value') &&
        options.eq(2).text() == options.eq(2).attr('value')) ||
        // or values are blank...
        (!options.eq(0).attr('value') &&
         !options.eq(1).attr('value') &&
         !options.eq(2).attr('value'))) {
      return options.map(function(i, option){
        // it's an array
        return $(option).text();
      }).get();
    } else {
      // otherwise a hash
      var opts = {};
      options.each(function(i, option){
        opts[$(option).text()] = $(option).attr('value');
      });
      return opts;
    };
  }

})($cc, _cc, Forms);



/**
 =======================================================================
 Helper Class
 This is what runs on load
 =======================================================================
 */

(function($, _){

var SERIALIZATION_KEY = 'contact-congress-steps';

window.CCH || (CCH = function(){

  var _s = _.string

  this.us = new UnitedStates();
  this.ghAuthKey = window.ghAuthKey;
  this.scriptUrl = "https://contact-congress.s3.amazonaws.com/bookmarklet.js";
  this.chooseVsCheckThreshold = 4;
  this.legislator = null;
  this.startPage = null;
  this.startForm = null;
  this.popup = null;
  this.popupTarget = null;
  this.legislator = null;
  this.form = null;
  this.fields = null;
  this.steps = null;

  // templates
  this.templates = {}
  this.templates.layout = _.template('<style>#stepform label span { display: inline-block; width: 250px; } textarea { width: 95%; min-height: 250px;}</style><div class="cch-container"><div class="cch-target"></div></div>');
  this.templates.selectLegislator = _.template('<label>Select a legislator:</label> <select class="cch-select-legislator" id=""> <option value="#">--</option> <% _.each(legislators, function(legislator){ %> <option value="<%= legislator.contactFormUrl() %>"><%= legislator.repr() %></option> <% }) %> </select>  <style>.cch-container{position:fixed; top:0; width:100%; padding:1em; border-bottom:1px solid lightgray; background:white; z-index: 99999;} .target{width:500px; margin:0 auto;}</style>');
  this.templates.popup = _.template('<h2>Working on: <%= legislator.repr() %></h2><form action="" id="stepform"><label><span>Select a form:</span> </label><select name="" id="formselector_select"><option>--</option><% _.each(forms,function(form, i){ %><option value="<%= i %>"><%= Utils.getSelector(form) %></option><% }) %></select><br/></form><div id="controls"><button class="reset">Reset & Start Over</button> <button class="next" type="button">Next &raquo;</button></div>');
  this.templates.popupFields = _.template('<% if (steps.length) { %><%= templates.findField() %><% } %><div id="fieldmappingform"><% _.each(fields, function(field, i){ %><%= templates.fieldMapping({field: field, index: i}) %><% }) %></div>');
  this.templates.fieldMapping = _.template('<label style="display: inline-block;" data-selector="<%= Utils.getSelector(field) %>"><span><%= Forms.repr(field) %>:</span> <select class="fieldmapping" data-selector="<%= Utils.getSelector(field) %>"> <option value="">-- Leave Default --</option><% _.each(_.keys(Forms.fieldMappings), function(prop){ %> <option value="<%= prop %>"><%= prop %></option> <% }) %> <option class="hardcode" value="">Hardcoded Value...</option> </select></label> <label><input type="checkbox" class="required-field" data-selector="<%= Utils.getSelector(field) %>" />*</label><br/>');
  this.templates.nextStep = _.template('<h2>Step saved!</h2><p>If there are any adjustments that need to be made to the form before submitting, go ahead and make them and submit the form.</p> <p>Once the next page has loaded, if you\'ve got another form to fill out, click \'Next Form.\' If that was it, click \'Finished.\' If things are going horribly wrong, click \'Reset & Start Over.\'</p><button class="done">Next Form &raquo;</button> <button class="finished">Finished</button> <button class="reset">Reset & Start Over</button>');
  this.templates.findField = _.template('<div class="findfield"><label style="display: inline-block;"><span>Selector to find before proceeding:</span> <input class="find" type="text" /></label></div>');
  this.templates.successField = _.template('<h2>You\'re almost done!</h2><p>Add some text from the resulting page that would signify success in filling out the form. Take care not to copy across html elements, like including a link or heading. It\'s best to find a short, unique snippet from a paragraph that can be reliably detected later.<br/><textarea class="success-message" placeholder="Add your success message here"></textarea><br/><button class="commit">Done! Let\'s send it to GitHub!</button>');
  this.templates.commit = _.template('<h2>All done!</h2><p>Copy the yaml from the textarea below and submit a pull request via a <a href="https://github.com/unitedstates/contact-congress/new/master/members?filename=<%= bioguide %>.yaml" target="_blank">new file on github</a>. Then head on over to <a href="http://efforg.github.io/congress-forms-test/?bioguide_id=<%= bioguide %>">the integration tool</a> and test to make sure it\'s working!</p><textarea class="result"><%= yaml %></textarea>');
});

CCH.prototype.initialize = function() {
  var self = this;
  // Github oauth key
  $.ajaxSetup({
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", "Basic " + self.ghAuthKey);
    }
  });

  var legislatorsDownloaded = this.us.getLegislatorsAsync(),
      sampleLetterDownloaded = Forms.getSampleLetterAsync(),
      zipsDownloaded = Forms.getZipsAsync(),
      constantsDownloaded = Forms.getConstantsAsync();

  $.when(legislatorsDownloaded, sampleLetterDownloaded, zipsDownloaded, constantsDownloaded).done(function(){
    self.us.legislators.sort(function(a,b){
      return a.bioguide() > b.bioguide() ? 1 : -1;
    });

    $.when(self.us.getLegislatorStatusesAsync()).done(function(){
      if (window === self.topWindow()) {
        // we're in the main browser window.
        self.parentMain();
      } else {
        // we're on the popup.
        self.popup = window;
        self.popupMain();
      };
    });
  });

};

CCH.prototype.popupMain = function() {
  this.resetForm();
  this.popupTargetDiv()
    .off('.cch')
    .empty()
    .append(this.templates.popup({
      legislator: this.currentLegislator(),
      forms: this.topWindowBody().find('form')
    }));
  this.popupTargetDiv()
    .on('change.cch', '#formselector_select', _.bind(this.onSelectFormChange, this))
    .on('change.cch', '.fieldmapping', _.bind(this.onSelectMappingChange, this))
    .on('mouseenter.cch mouseleave.cch', 'label[data-selector]', _.bind(this.onHoverSelectLabel, this))
    .on('click.cch', 'button.next', _.bind(this.finalizeStep, this))
    .on('click.cch', 'button.reset', _.bind(this.resetSteps, this))
    .on('click.cch', 'button.done', _.bind(this.popupMain, this))
    .on('click.cch', 'button.finished', _.bind(this.getSuccessMessage, this))
    .on('click.cch', 'button.commit', _.bind(this.commit, this))
    ;
};

CCH.prototype.parentMain = function() {
  if (location.href.match(/\.(house|senate)(forms)?\.gov/)) {
    // we're on a form page, open the popup and inject the script
    this.popupWindow().ghAuthKey = this.ghAuthKey;
    var scr = this.popupWindow().document.createElement('script');
    var mainScr = $('#cchbookmarklet');
    if (mainScr !== null)
      scr.src = mainScr.attr('src');
    if (!scr.src)
      scr.src = this.scriptUrl;
    this.popupWindow().document.head.appendChild(scr);
  } else {
    // we're on a random page, add the select box
    var target = this.topWindowBody().append(this.templates.layout()).find('.cch-target');
    target.append(this.templates.selectLegislator(this.us));
    target.find('.cch-select-legislator').on('change', function(){
      location.href = $(this).val();
    });
  };
};

CCH.prototype.topWindow = function() {
  // if the window's opener is github or throws an error we are in
  // the parent window.
  var top = window.opener;
  try {
    window.opener.location.href == 'http://theunitedstates.io/contact-congress/' && (top = window);
  } catch(e) {
    top = window;
  }
  return top || window;
};

CCH.prototype.topWindowBody = function() {
  return $(this.topWindow().document).find('body');
}

CCH.prototype.popupWindow = function() {
  return this.popup || (this.popup = (window !== this.topWindow()) ? window : open('about:blank', "cch", "width=700,height=650"));
}

CCH.prototype.popupTargetDiv = function() {
  var tgt;
  return this.popupTarget || (this.popupTarget = (
                              $(this.popupWindow().document.body).find('.cch-target').length) ?
                                $(this.popupWindow().document.body).find('.cch-target') :
                                $(this.popupWindow().document).find('body').append(this.templates.layout()).find('.cch-target')
                              );
};

CCH.prototype.currentLegislator = function() {
  // this won't work in random page context but that's ok
  return this.legislator || (this.legislator = this.us.getLegislatorFromFormUrl(this.topWindow().location.href));
};

CCH.prototype.currentForm = function() {
  return this.form || (this.form = this.topWindowBody().find('form').eq(this.popupTargetDiv().find('#formselector_select').val()));
};

CCH.prototype.currentFields = function() {
  return this.fields || (this.fields = Forms.getFormFields(this.currentForm(), {uniqueByName: this.chooseVsCheckThreshold}));
};

CCH.prototype.resetForm = function() {
  this.form = this.fields = null;
}

CCH.prototype.currentSteps = function() {
  // TODO: Implement me to load from localstorage and have some clairvoyance
  // about the way that the current form interacts with what's already there.
  return this.steps || (this.steps = []);
};

CCH.prototype.resetSteps = function(e) {
  if (confirm('Are you sure you want to start over?')) {
    var dest = this.steps[0].visit || location.href;
    this.steps = null;
    this.topWindow().location.href = dest;
    this.popupMain();
  };
};

CCH.prototype.getSuccessMessage = function() {
  this.popupTargetDiv().empty().append(this.templates.successField())
};

CCH.prototype.commit = function(e) {
  var yaml = jsyaml.safeDump({
    bioguide: this.currentLegislator().bioguide(),
    contact_form: {
      method: this.startForm.method || '',
      action: this.startForm.action || '',
      steps: this.currentSteps(),
      success: {
        headers: {
          status: 200
        },
        body: {
          contains: this.popupTargetDiv().find('.success-message').val()
        }
      }
    }
  });
  this.popupTargetDiv().empty().append(this.templates.commit({
    bioguide: this.currentLegislator().bioguide(),
    yaml: yaml
  }));
}

CCH.prototype.onSelectFormChange = function(e) {
  this.resetForm();
  if (this.currentSteps().length === 0) {
    this.startPage = this.topWindow().location.href;
    this.startForm = {
      action: this.currentForm().attr('action'),
      method: this.currentForm().attr('method')
    };
  };
  $(e.target).parents('form')
    .find('.findfield').remove().end()
    .find('#fieldmappingform').remove().end()
    .append(this.templates.popupFields({
      fields: this.currentFields(),
      steps: this.currentSteps(),
      templates: this.templates
    }));
    Forms.selectDefaults($(e.target).parents('form').find('.fieldmapping'), this.currentForm());
};

CCH.prototype.onSelectMappingChange = function(e) {
  var el = $(e.target).children('option:selected');
  if(!el.hasClass('hardcode')) {
    return;
  }
  var val = prompt('Enter the value', $(el).attr('value'));
  el.attr('value', val);
  el.text('Hardcoded Value: ' + val);
};

CCH.prototype.onHoverSelectLabel = function(e) {
  if ( e.type === 'mouseenter') {
    this.topWindowBody().find($(e.target).data('selector')).css({
      outline: 'solid 2px pink',
      boxShadow: '0 0 20px pink'
    });
  } else {
    this.topWindowBody().find($(e.target).data('selector')).css({
      outline: 'none',
      boxShadow: 0
    });
  };
};

CCH.prototype.currentStepIsCommitted = function() {
  var buttonSelector = this.submitButtonStep(this.currentFields().map(_.bind(this.filterShouldSubmit, this)))[0].selector,
      matches = $.map(this.currentSteps, _.bind(function(i, step){
        return step.click_on && step.click_on[0].selector === buttonSelector;
      }, this));
  return !!matches.length;
};

CCH.prototype.finalizeStep = function(e) {
  var find = null,
      steps = [];

  if (this.currentSteps().length === 0) {
    steps.push({visit: this.topWindow().location.href});
  };
  if (find = this.popupTargetDiv().find('input.find').val()) {
    steps.push({find: [{selector: find}]});
  };

  var toFillIn = this.currentFields().filter(Forms.textInputSelector + ', textarea'),
      toSelect = this.currentFields().filter('select'),
      radios = this.currentFields().filter('[type="radio"]'),
      toChoose = radios.map(_.bind(function(i, el){
        if (this.currentFields().filter('[name="' + $(el).attr(name) + '"]').length === 1) {
          // unique elements are many-choice radios, as they
          // were filtered out previously
          return el;
        }
      }, this)),
      toCheck = this.currentFields().map(_.bind(this.filterShouldBeChecked, this)),
      toUncheck = this.currentFields().map(_.bind(this.filterShouldBeUnchecked, this)),
      submitButton = this.currentFields().map(_.bind(this.filterShouldSubmit, this));

  if (toFillIn.length) {
    steps.push({fill_in: this.fillInStep(toFillIn)});
  };
  if (toSelect.length) {
    steps.push({select: this.selectStep(toSelect)});
  };
  if (toChoose.length) {
    steps.push({choose: this.chooseStep(toChoose)});
  };
  if (toCheck.length) {
    steps.push({check: this.checkStep(toCheck)});
  };
  if (toUncheck.length) {
    steps.push({uncheck: this.uncheckStep(toUncheck)});
  };
  if (submitButton.length) {
    steps.push({click_on: this.submitButtonStep(submitButton)});
  };

  if (!this.currentStepIsCommitted()) {
    this.steps = this.currentSteps().concat(steps);
    // this.topWindow().localStorage.setItem('contact-congress-steps', JSON.stringify(this.steps));
  };

  this.popupTargetDiv().empty().append(this.templates.nextStep());
};

CCH.prototype.filterShouldBeChecked = function(i, el){
  if (this.popupTargetDiv().find('select[data-selector="' + Utils.getSelector(el) + '"]').val() === "[check this]") {
    return el;
  }
};

CCH.prototype.filterShouldBeUnchecked = function(i, el){
  if (this.popupTargetDiv().find('select[data-selector="' + Utils.getSelector(el) + '"]').val() === "[uncheck this]") {
    return el;
  }
};

CCH.prototype.filterShouldSubmit = function(i, el){
  if (this.popupTargetDiv().find('select[data-selector="' + Utils.getSelector(el) + '"]').val() === "[submit button]") {
    return el;
  }
};

CCH.prototype.fillInStep = function(els){
  return $(els).map(_.bind(function(i, element){
    var selector = Utils.getSelector(element),
        mappedValue = this.popupTargetDiv().find('select[data-selector="' + selector + '"]').val(),
        required = !!this.popupTargetDiv().find('input[data-selector="' + selector + '"]:checked').length;

    if (mappedValue) {
      console.log(mappedValue);
      // if it's a zip use the ones we downloaded, else the sample letter
      if (_(['$ADDRESS_ZIP5', '$ADDRESS_ZIP4', '$ADDRESS_ZIP_PLUS_4']).indexOf(mappedValue) !== -1){
        if (mappedValue === '$ADDRESS_ZIP5') {
          $(element).val(Forms.zips[this.currentLegislator().bioguide()].Zip);
        } else if (mappedValue === '$ADDRESS_ZIP4') {
          $(element).val(Forms.zips[this.currentLegislator().bioguide()].Plus_Four);
        } else {
          $(element).val(Forms.zips[this.currentLegislator().bioguide()].Zip + '-' + Forms.zips[this.currentLegislator().bioguide()].Plus_Four);
        }
      } else {
        $(element).val(Forms.sampleLetter[mappedValue]);
      }

      return {
        name: $(element).attr('name'),
        selector: selector,
        value: mappedValue,
        required: required
      };
    };
  }, this)).get()
};

CCH.prototype.selectStep = function(els) {
  return $(els).map(_.bind(function(i, element){
    var selector = Utils.getSelector(element),
        mappedValue = this.popupTargetDiv().find('select[data-selector="' + selector + '"]').val(),
        required = !!this.popupTargetDiv().find('input[data-selector="' + selector + '"]:checked').length,
        options = $(element).children('option');

    if (mappedValue) {
      $(element).val($(element).children().eq(1).attr('value'));
      return {
        name: $(element).attr('name'),
        selector: selector,
        value: mappedValue,
        required: required,
        options: Forms.getOptionsAsArrayOrHash(options)
      };
    };
  }, this)).get();
};

CCH.prototype.chooseStep = function(els) {
  return $(els).map(_.bind(function(i, element){
    var selector = Utils.getSelector($(element).parents('form').eq(0)) + ' input[name="' + $(element).attr('name') + '"]',
        mappedValue = this.popupTargetDiv().find('select[data-selector="' + selector + '"]').val(),
        required = !!this.popupTargetDiv().find('input[data-selector="' + selector + '"]:checked').length,
        options = $(element).parents('form').eq(0).parent().find(selector);

    if (mappedValue) {
      options.eq(1).prop('checked', true);
      return {
        name: $(element).attr('name'),
        selector: selector,
        value: mappedValue,
        required: required,
        options: Forms.getOptionsAsArrayOrHash(options)
      };
    };
  }, this)).get();
};

CCH.prototype.checkStep = function(els) {
  return $(els).map(_.bind(function(i, element){
    $(element).prop('checked', true);

    return {
      name: $(element).attr('name'),
      selector: Utils.getSelector(element),
      value: $(element).attr('value')
    };
  }, this)).get();
};

CCH.prototype.uncheckStep = function(els) {
  return $(els).map(_.bind(function(i, element){
    $(element).prop('checked', false);

    return {
      name: $(element).attr('name'),
      selector: Utils.getSelector(element),
      value: $(element).attr('value')
    };
  }, this)).get();
};

CCH.prototype.submitButtonStep = function(els) {
  return $(els).map(_.bind(function(i, element){
    return {
      value: $(element).attr('value'),
      selector: Utils.getSelector(element)
    }
  }, this)).get();
}

})($cc, _cc);

var cch = new CCH();
cch.initialize();
