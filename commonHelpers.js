import{i as m,S as f}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function d(o){const r="https://pixabay.com/api/",i=new URLSearchParams({key:"44085737-801aedd726c9c1496368a8656",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${r}?${i}`;return fetch(n).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function p({webformatURL:o,largeImageURL:r,tags:i,likes:n,views:e,comments:t,downloads:s}){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${o}" alt="${i}"/>
      </a>
      <ul class="info">
        <li class="info-item"> <b>Likes</b> ${n} </li>
        <li class="info-item"> <b>Views</b> ${e} </li>
        <li class="info-item"> <b>Comments</b> ${t} </li>
        <li class="info-item"> <b>Downloads</b> ${s} </li>
      </ul>
    </li>
  `}function h(o){return o.map(p).join("")}const c=document.querySelector(".search-form"),l=document.querySelector(".gallery"),u=document.querySelector(".loader");let a="";c.addEventListener("input",o=>{a=o.target.value.trim()});c.addEventListener("submit",y);function y(o){if(o.preventDefault(),g(),a!=="")return d(a).then(r=>{if(r.hits.length===0)return l.innerHTML="",m.error({...L});const i=h(r.hits);l.innerHTML=i,S.refresh()}).catch(r=>console.log(r)).finally(()=>{b()}),o.target.reset()}function g(){u.style.display="inline-block"}function b(){u.style.display="none"}const L={position:"topRight",timeout:1800,maxWidth:300,icon:"none",message:"Sorry, there are no images matching your search query. Please try again!"};let S=new f(".gallery a",{captionDelay:250,captionsData:"alt"});
//# sourceMappingURL=commonHelpers.js.map
