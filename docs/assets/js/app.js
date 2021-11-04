const btnNewGame=document.querySelector("#btnNewGame"),btnAsk=document.querySelector("#btnAsk"),btnDetain=document.querySelector("#btnDetain"),divCards=document.querySelectorAll(".divCards"),pointSmalls=document.querySelectorAll(".pointSmalls");let deckCards=[],point=[0,0],shift=[];const fillDeckCards=()=>{const t=["C","D","H","S"],e=["J","K","Q","A"];for(const n of t){for(let t=2;t<=10;t++)deckCards.push(t+n);for(const t of e)deckCards.push(t+n)}},askCard=()=>{const t=deckCards.length,e=Math.floor(Math.random()*t),n=deckCards[e],a=n.charAt(n.length-2);deckCards.splice(e,1);return{card:n,point:"A"==a?"11":"0"==a||"J"==a||"Q"==a||"K"==a?"10":a}},pointCounter=(t,e)=>{point[e]=t+point[e],pointSmalls[e].innerHTML=point[e],1!=e&&point[e]>21&&(btnNewGame.disabled=!1,btnAsk.disabled=!0,btnDetain.disabled=!0,computerShift(),setTimeout((()=>{validatePoint()}),150))},validatePoint=()=>{point[0]<21&&point[0]<point[1]?point[1]<=21?alert("Perdiste!!!"):alert("Ganaste!!!"):alert("Perdiste!!!")},paintCard=(t,e)=>{const n=document.createElement("img");n.src=`assets/img/cartas/${t}.png`,n.classList.add("carta"),n.innerHTML=n,divCards[e].append(n)},computerShift=()=>{const t=point[0]>21?1:point[0];for(console.log(t);point[1]<=t;){const t=askCard();paintCard(t.card,1),pointCounter(parseInt(t.point),1)}},events=()=>{btnNewGame.addEventListener("click",(t=>{deckCards=[],point=[0,0],divCards[0].innerHTML="",divCards[1].innerHTML="",pointSmalls[0].innerHTML=0,pointSmalls[1].innerHTML=0,btnNewGame.disabled=!0,btnAsk.disabled=!1,btnDetain.disabled=!1,fillDeckCards()})),btnAsk.addEventListener("click",(t=>{const e=askCard();paintCard(e.card,0),pointCounter(parseInt(e.point),0)})),btnDetain.addEventListener("click",(t=>{computerShift(),btnNewGame.disabled=!1,btnAsk.disabled=!0,btnDetain.disabled=!0,setTimeout((()=>{validatePoint()}),150)}))};export const init=()=>{btnNewGame.addEventListener("click",(t=>{deckCards=[],point=[0,0],divCards[0].innerHTML="",divCards[1].innerHTML="",pointSmalls[0].innerHTML=0,pointSmalls[1].innerHTML=0,btnNewGame.disabled=!0,btnAsk.disabled=!1,btnDetain.disabled=!1,fillDeckCards()})),btnAsk.addEventListener("click",(t=>{const e=askCard();paintCard(e.card,0),pointCounter(parseInt(e.point),0)})),btnDetain.addEventListener("click",(t=>{computerShift(),btnNewGame.disabled=!1,btnAsk.disabled=!0,btnDetain.disabled=!0,setTimeout((()=>{validatePoint()}),150)}))};