import{i as u,S as m}from"./assets/vendor-0fc460d7.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function f(r){return r.map(({webformatURL:i,largeImageURL:s,tags:o,likes:e,views:t,comments:n,downloads:c})=>`<li class="gallery-item">

        <a class="gallery-link" href="${s}">
        <img class="gallery-image" src="${i}" alt="${o}"/>
        </a>

        <ul class="info">
          <li class="info-item"> <b>Likes</b> ${e} </li>
          <li class="info-item"> <b>Views</b> ${t} </li>
          <li class="info-item"> <b>Comments</b> ${n} </li>
          <li class="info-item"> <b>Downloads</b> ${c} </li>
        </ul>

      </li>`).join("")}const p=document.querySelector(".gallery");function d(r){const i="https://pixabay.com/api/",s=new URLSearchParams({key:"44085737-801aedd726c9c1496368a8656",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),o=`${i}?${s}`;return fetch(o).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).then(e=>{if(e.hits.length===0)return u.error({...g});const t=f(e.hits);p.innerHTML=t}).catch(e=>console.log(e))}const g={position:"topRight",timeout:1800,maxWidth:300,icon:"none",message:"Sorry, there are no images matching your search query. Please try again!"},l=document.querySelector(".search-form");let a="";l.addEventListener("input",r=>{a=r.target.value.trim()});l.addEventListener("submit",h);function h(r){if(r.preventDefault(),a!=="")return d(a),r.target.reset()}new m(".gallery gallery-link",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
