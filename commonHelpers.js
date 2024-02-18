import{S as f,i as u}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function g(r){const o="https://pixabay.com/api/",s=new URLSearchParams({key:"42263617-81d7156b9f7b88cd7b1016c2a",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),n=`${o}?${s}`;return fetch(n).then(e=>e.json())}function p(r){const{largeImageURL:o,webformatURL:s,tags:n,likes:e,views:t,comments:a,downloads:d}=r;return`<li class="gallery-item" >
    <a class="gallery-link" href="${o}">
      <img
        class="gallery-image"
        src="${s}"
        alt="${n}"
      />
    </a>
    <div class="item-text">
    <p><strong>Likes:</strong> ${e}</p>
    <p><strong>Views:</strong> ${t}</p>
    <p><strong>Comments:</strong> ${a}</p>
    <p><strong>Downloads:</strong> ${d}</p>
    </div>
  </li>`}function h(r){return r.map(p).join("")}const i={formEl:document.querySelector(".form"),loadEl:document.querySelector(".loader"),GalleryEl:document.querySelector(".gallery")};i.formEl.addEventListener("submit",y);function y(r){r.preventDefault(),c();const o=r.target.elements.query.value.trim();if(!o){m(),l();return}g(o).then(s=>{c(),l(),s.hits.length===0?(b(),l()):(i.GalleryEl.innerHTML="",L(s.hits))}).catch(s=>{c(),m(),l(),i.GalleryEl.innerHTML=""}).finally(()=>{r.target.reset()})}function L(r){const o=h(r);i.GalleryEl.insertAdjacentHTML("beforeend",o),new f(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250,widthRatio:.8,scaleImageToRatio:!0}).refresh()}function m(){u.error({message:"Please enter a search query.",position:"topRight"})}function b(){u.error({backgroundColor:"#EF4040",position:"topRight",maxWidth:500,message:"Sorry, there are no images matching your search query. Please try again!"})}const c=()=>{i.loadEl.classList.remove("hidden")},l=()=>{i.loadEl.classList.add("hidden")};
//# sourceMappingURL=commonHelpers.js.map
