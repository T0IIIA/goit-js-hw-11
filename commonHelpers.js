import{S as m,i as f}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function d({webformatURL:r,largeImageURL:o,tags:n,likes:i,views:e,comments:t,downloads:s}){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <img class="gallery-image" src="${r}" alt="${n}"/>
      </a>
      <ul class="info">
        <li class="info-item"> <b>Likes</b> ${i} </li>
        <li class="info-item"> <b>Views</b> ${e} </li>
        <li class="info-item"> <b>Comments</b> ${t} </li>
        <li class="info-item"> <b>Downloads</b> ${s} </li>
      </ul>
    </li>
  `}function p(r){return r.map(d).join("")}const l=document.querySelector(".gallery");function h(r){const o="https://pixabay.com/api/",n=new URLSearchParams({key:"44085737-801aedd726c9c1496368a8656",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${o}?${n}`;return fetch(i).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).then(e=>{if(e.hits.length===0)return l.innerHTML="",f.error({...y});const t=p(e.hits);l.innerHTML=t,g.refresh()}).catch(e=>console.log(e))}const y={position:"topRight",timeout:1800,maxWidth:300,icon:"none",message:"Sorry, there are no images matching your search query. Please try again!"};let g=new m(".gallery a",{captionDelay:250,captionsData:"alt"});const c=document.querySelector(".search-form"),u=document.querySelector(".loader");let a="";c.addEventListener("input",r=>{a=r.target.value.trim()});c.addEventListener("submit",b);function b(r){if(r.preventDefault(),L(),a!=="")return h(a).finally(()=>{S()}),r.target.reset()}function L(){u.style.display="inline-block"}function S(){u.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
