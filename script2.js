    var bigImage = document.getElementById('bigImage');
    var im = bigImage.getElementsByTagName('img');

    var carousel = document.getElementById('carousel');
    var imgs = carousel.getElementsByTagName('img');

    for (var i = 0; i < imgs.length; i++) {
      var src = imgs[i].src;
    }
    
    imgs[0].onclick = function() {
      
      im[0].src=imgs[0].src;
    }
    imgs[1].onclick = function() {
          
          im[0].src=imgs[1].src;
    }
    imgs[2].onclick = function() {
          
          im[0].src=imgs[2].src;
    }
    imgs[3].onclick = function() {
          
          im[0].src=imgs[3].src;
    }
    imgs[4].onclick = function() {
          
          im[0].src=imgs[4].src;
    }
   

    


   