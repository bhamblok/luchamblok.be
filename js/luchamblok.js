// polyfill
if (window.Element && !Element.prototype.closest) {
  Element.prototype.closest = 
  function(s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i,
        el = this;
    do {
      i = matches.length;
      while (--i >= 0 && matches.item(i) !== el) {};
    } while ((i < 0) && (el = el.parentElement)); 
    return el;
  };
}

var gridItems;

document.addEventListener("DOMContentLoaded", function(e) {
  gridItems = document.querySelectorAll('.grid-item img');
  var scrollToY = 0;
  if (gridItems.length) {
    var loaded = 0;
    var msnry = null;
    for (var i=0; i<gridItems.length; i++) {
      const gridItem = gridItems[i];
      gridItem.addEventListener('load', function(e) {
        loaded++;
        if (loaded === gridItems.length - 1) {
          if (msnry !== null) msnry.layout();
          document.querySelector('article.loading').classList.remove('loading');
        }
      });
      gridItem.parentNode.addEventListener('click', function(e) {
        scrollToY = document.body.scrollTop;
        // var bounds = e.target.getBoundingClientRect();
        // var zoom = document.querySelector('#zoom');
        // zoom.style.width = bounds.width+'px';
        // zoom.style.height = bounds.height+'px';
        // zoom.style.left = bounds.left+'px';
        document.querySelector('#zoom .title').innerHTML = e.target.closest('.grid-item').querySelector('.title').innerHTML
        const zoom = document.querySelector('#zoom');
        const img = document.querySelector('#zoom img');
        zoom.replaceChild(gridItem.cloneNode(true), img);
        // console.log(gridItem);
        // document.querySelector('#zoom img').src = e.target.closest('.grid-item').querySelector('img').src;
        setTimeout(function() {
          function closeZoom(e) {
            // if (document.body.classList.contains('zoom')) {
            //   document.querySelector('#zoom').removeAttribute('style');
            // }
            zoom.removeEventListener('click', closeZoom);
            document.body.classList.toggle('zoom');
            window.scrollTo(0,scrollToY);
          }
          document.body.classList.toggle('zoom');
          zoom.addEventListener('click', closeZoom);
        }, 0);
      });
    }
    msnry = new Masonry( '.grid', { itemSelector: '.grid-item' });
  }
});
