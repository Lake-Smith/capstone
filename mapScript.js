function initMap(){
    const unca = {lat: 35.6144, lng: 82.5666};
    const map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 4, 
            center: unca
    });
    let market = new google.maps.Marker({
        position: unca, 
        map:map 
    })
}

window.initMap = initMap;