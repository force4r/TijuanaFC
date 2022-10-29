function Apimap(){

    var coord = {lat: -27.384579766360517, lng:-55.898209970606516};
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 15,
        center: coord
    });

    const marker = new google.maps.Marker({
        position: coord,
        map: map,
      });
}
