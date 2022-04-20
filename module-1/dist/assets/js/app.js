let dropdown=document.querySelector(".dropdown");async function getData(e=""){return fetch(e).then(e=>e.json()).then(e=>e)}async function postData(e="",t={}){const o=await fetch(e,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(t)});return o.json()}dropdown.addEventListener("mouseenter",e=>{dropdown.classList.contains("closed")&&dropdown.classList.remove("closed")}),dropdown.addEventListener("mouseleave",e=>{dropdown.classList.contains("closed")||dropdown.classList.add("closed")});const container=document.getElementsByClassName("page-container"),allTags=container[0].querySelectorAll("*"),menu=document.querySelector(".menu");menu.addEventListener("click",e=>{e.preventDefault();var t=e.target;if(menu.contains(t)){e=e.target.hash.substring(1);const o=document.getElementsByClassName("icon");o[0].innerText=t.innerText,translatePageText(e)}});const allTagsWithText=Object.values(allTags).filter(e=>!menu.contains(e)&&(!!(e.text||e.innerText&&0==e.children.length)||void 0)),targetElementsArray=allTagsWithText.map(e=>e.innerText||e.text||void 0);function closeModal(){modal.style.display="none",body.style.overflow=""}const about=document.querySelector(".about"),collection=document.querySelector(".collection"),headerContact=document.getElementById("contact"),footerContact=document.getElementById("footer_contact"),modal=document.getElementById("modal"),body=document.querySelector("body"),headerNewCollection=document.getElementById("new_col"),footerNewCollection=document.getElementById("footer_new_col"),headerAbout=document.getElementById("about"),footerAbout=document.getElementById("footer_about"),buttonCloseModal=document.querySelector(".button-close-modal");function toNewCollection(){event.preventDefault(),collection.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}function toAbout(){event.preventDefault(),about.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}function showModal(){event.preventDefault(),modal.style.display="block"}headerNewCollection.addEventListener("click",toNewCollection),footerNewCollection.addEventListener("click",toNewCollection),headerAbout.addEventListener("click",toAbout),footerAbout.addEventListener("click",toAbout),headerContact.addEventListener("click",showModal),footerContact.addEventListener("click",showModal),buttonCloseModal.addEventListener("click",closeModal),modal.addEventListener("click",e=>{e.target===modal&&closeModal()}),window.addEventListener("load",function(){const l=document.getElementById("contact__form");l.addEventListener("submit",function(e){e.preventDefault(),function(){const e=new XMLHttpRequest,t=new FormData(l);e.addEventListener("load",function(e){}),e.addEventListener("error",function(e){alert("Oops! Something went wrong.")}),e.open("POST","http://localhost:3001/writeContactFormData"),e.setRequestHeader("Content-type","application/json;charset=UTF-8");let o={};for(var[n,a]of t.entries())o[n]=a;e.send(JSON.stringify(o))}(),l.reset(),closeModal()})});const translatePageText=e=>{postData("http://localhost:3001/translate",{text:targetElementsArray,lang:e}).then(o=>{allTagsWithText.forEach((e,t)=>{e.text=o[t],e.innerText=o[t]})})};