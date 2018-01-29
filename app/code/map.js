function initMap() {
    var sf = {lat: 37.791035, lng: -122.449949 };
    var image_marker = {
        url: '../img/marker-map-google.png'
    };

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: sf
    });
    

    var marker = new google.maps.Marker({
      position: sf,
      icon: image_marker,
      map: map,
      draggable: false
    }); 
  }

