!function(){const e=document.querySelector(".header");window.onscroll=(()=>{window.pageYOffset>50?e.classList.add("header_active"):e.classList.remove("header_active")})}(),function(){const e=document.querySelector(".header_burger"),t=document.querySelector(".header_navigation"),n=document.querySelector(".header_nav_close"),c=document.querySelectorAll(".header_list_link");if(e.addEventListener("click",()=>{t.classList.add("header_navigation_active")}),n.addEventListener("click",()=>{t.classList.remove("header_navigation_active")}),window.innerWidth<=767)for(let e=0;e<c.length;e+=1)c[e].addEventListener("click",()=>{t.classList.remove("header_navigation_active")})}(),document.querySelectorAll(".js-scroll").forEach(e=>{e.addEventListener("click",function(){!function(e,t){const n=document.querySelector(".header").clientHeight;let c=document.querySelector(e).getBoundingClientRect().top-n,i=window.pageYOffset,o=null;const r=function(e){null===o&&(o=e);const n=e-o,a=(l=n,d=i,s=c,(l/=t/2)<1?s/2*l*l+d:-s/2*(--l*(l-2)-1)+d);var l,d,s;window.scrollTo(0,a),n<t&&requestAnimationFrame(r)};requestAnimationFrame(r)}(this.getAttribute("href"),1e3)})});