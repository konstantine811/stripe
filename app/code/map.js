function initMap() {
    var sf = {lat: 37.778198, lng: -122.411978 };

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: sf
    });
    

    var marker = new google.maps.Marker({
      position: sf,
      icon: true,
      map: map,
      draggable: false
    }); 
  }

