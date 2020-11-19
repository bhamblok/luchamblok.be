function init() {
  var gridItems = document.querySelectorAll('.grid-item img');
  if (gridItems.length) {
    var loaded = 0;
    var msnry = null;
    for (var i=0; i<gridItems.length; i++) {
      var gridItem = gridItems[i];
      gridItem.addEventListener('load', function() {
        loaded++;
        if (loaded === gridItems.length - 1) {
          if (msnry !== null) msnry.layout();
          document.querySelector('article.loading').classList.remove('loading');
        }
      });
      gridItem.parentNode.addEventListener('click', function(e) {
        var scrollToY = window.scrollY;
        document.querySelector('#zoom .title').innerHTML = e.target.closest('.grid-item').querySelector('.title').innerHTML
        var zoom = document.querySelector('#zoom');
        var img = document.querySelector('#zoom img');
        zoom.replaceChild(gridItem.cloneNode(true), img);
        setTimeout(function() {
          function closeZoom() {
            zoom.removeEventListener('click', closeZoom);
            document.body.classList.toggle('zoom');
            window.scrollTo(0, scrollToY);
          }
          document.body.classList.toggle('zoom');
          zoom.addEventListener('click', closeZoom);
        }, 0);
      });
    }
    msnry = new Masonry( '.grid', { itemSelector: '.grid-item' });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}