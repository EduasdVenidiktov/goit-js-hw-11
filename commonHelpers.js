import{i as m,S as h}from"./assets/vendor-5b791d57.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&s(t)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const y=document.querySelector(".form"),d=document.querySelector(".gallery"),b=()=>{const o=document.createElement("span");o.classList.add("loader"),document.body.append(o)},i=()=>{const o=document.querySelector(".loader");o&&o.remove()};y.addEventListener("submit",o=>{b(),o.preventDefault();const n=o.target.elements.query.value;n.trim()===""?(m.error({message:"Please enter a search query.",position:"topRight"}),i()):(d.innerHTML="",L(n),o.target.reset())});function L(o){const n="https://pixabay.com/api/",c=new URLSearchParams({key:"42263617-81d7156b9f7b88cd7b1016c2a",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}),s=`${n}?${c}`;return i(),fetch(s).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()}).then(t=>{i(),t.hits.length===0?m.error({backgroundColor:"#EF4040",position:"topRight",maxWidth:500,message:"Sorry, there are no images matching your search query. Please try again!"}):r(t)}).catch(t=>{console.error("Error:",t),m.error({backgroundColor:"#EF4040",position:"topRight",maxWidth:500,message:"Oops! Something went wrong. Please try again later."}).finally(()=>{i()})});function e({largeImageURL:t,webformatURL:l,tags:u,likes:g,views:a,comments:p,downloads:f}){return`<li class="gallery-item" >
    <a class="gallery-link" href="${t}">
      <img
        class="gallery-image"
        src="${l}"
        alt="${u}"
      />
    </a>
    <div class="item-text">
    <p><strong>Likes:</strong> ${g}</p>
    <p><strong>Views:</strong> ${a}</p>
    <p><strong>Comments:</strong> ${p}</p>
    <p><strong>Downloads:</strong> ${f}</p>
    </div>
  </li>`}function r(t){const l=t.hits.map(e).join("");d.innerHTML=l,document.querySelectorAll(".gallery-link").forEach(a=>{a.setAttribute("href",a.querySelector("img").getAttribute("src"))}),new h(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250,widthRatio:.8,scaleImageToRatio:!0}).refresh()}}
//# sourceMappingURL=commonHelpers.js.map
