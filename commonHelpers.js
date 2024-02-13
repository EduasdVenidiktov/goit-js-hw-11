import{i as a,S as l}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=document.querySelector(".form"),m=document.querySelector(".gallery"),c=document.querySelector(".loader");u.addEventListener("submit",g);function g(o){o.preventDefault();const r=o.target.elements.query.value;if(r.trim()==="")return a.error({message:"Please enter a search query.",position:"topRight"});c.style.display="inline-block",p(r),o.target.reset()}function p(o){const r="https://pixabay.com/api/",s=new URLSearchParams({key:"42263617-81d7156b9f7b88cd7b1016c2a",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}),n=`${r}?${s}`;return fetch(n).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{e.hits.length===0?a.error({backgroundColor:"#EF4040",position:"topRight",maxWidth:500,message:"Sorry, there are no images matching your search query. Please try again!"}):d(e)}).catch(e=>{console.error("Error:",e)}).finally(()=>{c.style.display="none"})}const f={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250,widthRatio:.8,scaleImageToRatio:!0};function d(o){const r=o.hits.map(y).join("");m.innerHTML=r,document.querySelectorAll(".gallery-link").forEach(e=>{e.setAttribute("href",e.querySelector("img").getAttribute("src"))}),new l(".gallery a",f).refresh()}function y({largeImageURL:o,webformatURL:r,tags:s,likes:n,views:e,comments:t,downloads:i}){return`<li class="gallery-item" >
    <a class="gallery-link" href="${o}">
      <img
        class="gallery-image"
        src="${r}"
        alt="${s}"
      />
    </a>
    <div class="item-text">
    <p><strong>Likes:</strong> ${n}</p>
    <p><strong>Views:</strong> ${e}</p>
    <p><strong>Comments:</strong> ${t}</p>
    <p><strong>Downloads:</strong> ${i}</p>
    </div>
  </li>`}
//# sourceMappingURL=commonHelpers.js.map
