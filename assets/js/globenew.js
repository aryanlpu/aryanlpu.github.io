$(function () {
  var blackTextureMap = ("../../assets/images/world.jpg");
  var $container = $('#globe');
  var globe = new ORBITAL.Globe($container, {
      worldImage: blackTextureMap
  });

  globe.animate();

});