(()=>{"use strict";function n(n,e){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=function(n,e){if(!n)return;if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(n,e)}(n))||e&&n&&"number"==typeof n.length){r&&(n=r);var a=0,o=function(){};return{s:o,n:function(){return a>=n.length?{done:!0}:{done:!1,value:n[a++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){r=r.call(n)},n:function(){var n=r.next();return c=n.done,n},e:function(n){l=!0,i=n},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw i}}}}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var e=document.querySelector("#btnNewGame"),r=document.querySelector("#btnAsk"),a=document.querySelector("#btnDetain"),o=document.querySelectorAll(".divCards"),i=document.querySelectorAll(".pointSmalls"),c=[],l=[0,0],u=function(){var n=c.length,t=Math.floor(Math.random()*n),e=c[t],r=e.charAt(e.length-2);return c.splice(t,1),{card:e,point:"A"==r?"11":"0"==r||"J"==r||"Q"==r||"K"==r?"10":r}},d=function(n,t){l[t]=n+l[t],i[t].innerHTML=l[t],1!=t&&l[t]>21&&(e.disabled=!1,r.disabled=!0,a.disabled=!0,m(),setTimeout((function(){s()}),150))},s=function(){l[0]<21&&l[0]<l[1]?l[1]<=21?alert("Perdiste!!!"):alert("Ganaste!!!"):alert("Perdiste!!!")},f=function(n,t){var e=document.createElement("img");e.src="assets/img/cartas/".concat(n,".png"),e.classList.add("carta"),e.innerHTML=e,o[t].append(e)},m=function(){var n=l[0]>21?1:l[0];for(console.log(n);l[1]<=n;){var t=u();f(t.card,1),d(parseInt(t.point),1)}};(function(){e.addEventListener("click",(function(t){c=[],l=[0,0],o[0].innerHTML="",o[1].innerHTML="",i[0].innerHTML=0,i[1].innerHTML=0,e.disabled=!0,r.disabled=!1,a.disabled=!1,function(){for(var t=["J","K","Q","A"],e=0,r=["C","D","H","S"];e<r.length;e++){for(var a=r[e],o=2;o<=10;o++)c.push(o+a);var i,l=n(t);try{for(l.s();!(i=l.n()).done;){var u=i.value;c.push(u+a)}}catch(n){l.e(n)}finally{l.f()}}}()})),r.addEventListener("click",(function(n){var t=u();f(t.card,0),d(parseInt(t.point),0)})),a.addEventListener("click",(function(n){m(),e.disabled=!1,r.disabled=!0,a.disabled=!0,setTimeout((function(){s()}),150)}))})()})();