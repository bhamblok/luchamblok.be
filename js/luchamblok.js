var gridItems;

document.addEventListener("DOMContentLoaded", function(e) {
  gridItems = document.querySelectorAll('.grid-item img');
  if (gridItems.length) {
    var loaded = 0;
    var msnry = null;
    for (var i=0; i<gridItems.length; i++) {
      gridItems[i].addEventListener('load', function(gridItem) {
        loaded++;
        if (msnry !== null) msnry.layout();
        if (loaded === gridItems.length - 1) {
          document.querySelector('article.loading').classList.remove('loading');
        }
      });
    }
    msnry = new Masonry( '.grid', { itemSelector: '.grid-item' });
  }
});
