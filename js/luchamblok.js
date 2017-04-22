window.onload = function() {
  // PROJECT PAGES
  // Masonry, init with selector
  if (window.Masonry) {
    if (document.querySelector('.grid')) {
      msnry = new Masonry( '.grid', { itemSelector: '.grid-item' });
      // window.msnry = msnry;
      // window.msnry.layout();
    }
  }
}
// /*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
// if("document" in self){if(!("classList" in document.createElement("_"))){(function(j){"use strict";if(!("Element" in j)){return}var a="classList",f="prototype",m=j.Element[f],b=Object,k=String[f].trim||function(){return this.replace(/^\s+|\s+$/g,"")},c=Array[f].indexOf||function(q){var p=0,o=this.length;for(;p<o;p++){if(p in this&&this[p]===q){return p}}return -1},n=function(o,p){this.name=o;this.code=DOMException[o];this.message=p},g=function(p,o){if(o===""){throw new n("SYNTAX_ERR","An invalid or illegal string was specified")}if(/\s/.test(o)){throw new n("INVALID_CHARACTER_ERR","String contains an invalid character")}return c.call(p,o)},d=function(s){var r=k.call(s.getAttribute("class")||""),q=r?r.split(/\s+/):[],p=0,o=q.length;for(;p<o;p++){this.push(q[p])}this._updateClassName=function(){s.setAttribute("class",this.toString())}},e=d[f]=[],i=function(){return new d(this)};n[f]=Error[f];e.item=function(o){return this[o]||null};e.contains=function(o){o+="";return g(this,o)!==-1};e.add=function(){var s=arguments,r=0,p=s.length,q,o=false;do{q=s[r]+"";if(g(this,q)===-1){this.push(q);o=true}}while(++r<p);if(o){this._updateClassName()}};e.remove=function(){var t=arguments,s=0,p=t.length,r,o=false,q;do{r=t[s]+"";q=g(this,r);while(q!==-1){this.splice(q,1);o=true;q=g(this,r)}}while(++s<p);if(o){this._updateClassName()}};e.toggle=function(p,q){p+="";var o=this.contains(p),r=o?q!==true&&"remove":q!==false&&"add";if(r){this[r](p)}if(q===true||q===false){return q}else{return !o}};e.toString=function(){return this.join(" ")};if(b.defineProperty){var l={get:i,enumerable:true,configurable:true};try{b.defineProperty(m,a,l)}catch(h){if(h.number===-2146823252){l.enumerable=false;b.defineProperty(m,a,l)}}}else{if(b[f].__defineGetter__){m.__defineGetter__(a,i)}}}(self))}else{(function(){var b=document.createElement("_");b.classList.add("c1","c2");if(!b.classList.contains("c2")){var c=function(e){var d=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(h){var g,f=arguments.length;for(g=0;g<f;g++){h=arguments[g];d.call(this,h)}}};c("add");c("remove")}b.classList.toggle("c3",false);if(b.classList.contains("c3")){var a=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(d,e){if(1 in arguments&&!this.contains(d)===!e){return e}else{return a.call(this,d)}}}b=null}())}};

// var msnry = null;
// var projects = null;
// var currentProject = null;

// function updateMasonry() {
//   var tag = document.querySelector('input[type="radio"]:checked').id;
//   tag = tag.replace('+','&');
//   var msnryElements = msnry.getItemElements();
//   for (var i=0; i<projects.length; i++) {
//     if (!projects[i].id) {
//       projects[i].id = 'project'+i;
//     }
//     if (projects[i].className.indexOf(tag)!==-1 && msnryElements.indexOf(projects[i])===-1) {
//       document.querySelector('.grid').appendChild(projects[i]);
//       msnry.appended(projects[i]);
//     }
//     if (projects[i].className.indexOf(tag)===-1 && msnryElements.indexOf(projects[i])!==-1) {
//       msnry.remove(projects[i]);
//     }
//   }
//   // sort masonry first
//   msnry.items.sort(function(a, b) {
//     if(a.element.id < b.element.id) return 1;
//     if(a.element.id > b.element.id) return -1;
//     return 0;
//   });
//   setTimeout(function() {
//     msnry.layout();
//   },10);
// }

// function adjustTitlePosition(el) {
//   var img = el.querySelector('img');
//   var title = document.querySelector('.project h2.title');
//   var rights = el.querySelector('.copyrights');
//   title.style.left = (img.offsetLeft - (img.offsetWidth / 2)) + 'px';
//   if (rights) {
//     rights.style.right = (img.offsetLeft - (img.offsetWidth / 2)) + 'px';
//   }
// }

// function slideShow(e) {
//   e.preventDefault();
//   var container = document.querySelector('.project-container .project .slideshow-content');
//   var current = container.querySelector('[selected]');
//   var next = null;
//   current.removeAttribute('selected');
//   if(e.pageX < (document.body.clientWidth / 2)) {
//     next = current.previousElementSibling;
//     if (!next) next = container.querySelector('.img:last-child');
//   } else {
//     next = current.nextElementSibling;
//     if (!next) next = container.querySelector('.img:first-child');
//   }
//   next.setAttribute('selected', true);
//   adjustTitlePosition(next);
//   var hash = window.location.hash.split('/');
//   hash.pop();
//   window.location.hash = hash.join('/') + '/' + Array.prototype.slice.call(container.children,0).indexOf(next);
//   currentProject = window.location.hash;
// }

// function selectSlideShowImage(item) {
//   var container = document.querySelector('.project-container .project .slideshow-content');
//   if (container) {
//     var current = container.querySelector('[selected]');
//     if (current) current.removeAttribute('selected');
//     if (container.children[item]) {
//       container.children[item].setAttribute('selected',true);
//       adjustTitlePosition(container.children[item]);
//     }
//   }
// }

// function showProject(target) {
//   fetch(target.href).then(function(res) {
//     return res.text();
//   }).then(function(content) {
//     var frag = document.createDocumentFragment();
//     var div = document.createElement('div');
//     var container = document.querySelector('.project-container');
//     var bounds = target.getBoundingClientRect();
//     container.style.left = Math.round(bounds.left)+'px';
//     container.style.top = Math.round(bounds.top)+'px';
//     container.style.width = Math.round(bounds.width)+'px';
//     container.style.height = Math.round(bounds.height)+'px';
//     div.innerHTML = content;
//     frag.appendChild(div.querySelector('.project'));
//     container.appendChild(frag);
//     window.location.hash = target.href.replace(window.location.origin, '') + '/0';
//     currentProject = window.location.hash;
//     setTimeout(function() {
//       container.classList.add('transition');
//       container.classList.add('show');
//       container.addEventListener('click', slideShow);
//       setTimeout(function() {
//         adjustTitlePosition(container.querySelector('[selected]'));
//       },400);
//     },10);
//   });
// }

// function closeProject() {
//   var container = document.querySelector('.project-container');
//   if (container) {
//     container.removeEventListener('click', slideShow);
//     container.classList.remove('show');
//     window.location.hash = '';
//     currentProject = window.location.hash;
//     setTimeout(function() {
//       if (container.querySelector('.project')) container.removeChild(container.querySelector('.project'));
//       container.classList.remove('transition');
//       container.style.width = '0px';
//       container.style.height = '0px';
//     }, 500);
//   }
// }

// window.onload = function() {
//   // PROJECT PAGES
//   // Masonry, init with selector
//   if (window.Masonry) {
//     if (document.querySelector('.project-nav')) {
//       msnry = new Masonry( '.grid', { itemSelector: '.grid-item' });
//       window.msnry = msnry;
//       document.querySelector('.grid').classList.add('loaded');
//       projects = msnry.getItemElements();
//       // get the latest chosen element and set it to active
//       if (window.localStorage.getItem('project') && document.querySelector('#'+window.localStorage.getItem('project'))) {
//         document.querySelector('#'+window.localStorage.getItem('project')).checked = true;
//       }
//       var radioButtons = document.querySelectorAll('input[type="radio"][name="projects"]');
//       for(var i=0; i<radioButtons.length; i++) {
//         radioButtons[i].addEventListener('click', function(e) {
//           window.localStorage.setItem('project', e.target.id);
//           updateMasonry();
//         }, false);
//       }
//       updateMasonry();
//       // set eventListener on item-link
//       var links = document.querySelectorAll('.grid-item a');
//       for(var l=0; l<links.length; l++) {
//         links[l].addEventListener('click', function(e) {
//           e.preventDefault();
//           showProject(e.target);
//         });
//       }
//       document.querySelector('.project-container .close').addEventListener('click', function(e) {
//         e.preventDefault();
//         closeProject();
//       });
//       window.addEventListener('keydown', function(e) {
//         if(e.code === 'Escape' || e.key === 'Escape' || e.keyCode === 27) {
//           closeProject();
//         }
//       });
//       window.addEventListener('hashchange', function(e) {
//         // if no project in url, remove project
//         var projectspage = (window.location.pathname === '/' || window.location.pathname.indexOf('/projects') !== -1);
//         if (projectspage) {
//           if(!(/\/[0-9]{4}-/).test(window.location.hash)) {
//             closeProject();
//           } else if(window.location.hash !== currentProject) {
//             var openProjectFirst = false;
//             var hashPath = window.location.hash.split('/');
//             var projectPath = currentProject.split('/');
//             var item = hashPath.pop();
//             projectPath.pop();
//             // if hashPath and currentProjectPath are NOT the same, open the project first
//             if(hashPath.join('/') !== projectPath.join('/')) {
//               hashPath.shift();
//               var el = document.querySelector('[href="/'+hashPath.join('/')+'"]');
//               showProject(el);
//             }
//             selectSlideShowImage(item);
//           }
//         }
//       });
//       window.msnry.layout();
//     }
//   }

//   var splash = document.querySelector('.splash');
//   if (window.sessionStorage && window.sessionStorage.hideSplash) {
//     splash.classList.add('hidden');
//     document.body.classList.remove('show-splash');
//     if (window.msnry) window.msnry.layout();
//   } else {
//     splash.addEventListener('click', function(e) {
//       window.sessionStorage.hideSplash = true;
//       splash.classList.add('hidden');
//       document.body.classList.remove('show-splash');
//       if (window.msnry) window.msnry.layout();
//     }, false);
//   }
//   var spinner = splash.querySelector('.spinner');
//   spinner.classList.remove('spinner');
//   spinner.nextElementSibling.innerHTML = 'Click to enter';
//   if (spinner.nextElementSibling.nextElementSibling) {
//     spinner.nextElementSibling.nextElementSibling.classList.add('show');
//   }
// };
