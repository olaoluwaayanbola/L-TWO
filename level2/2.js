/* window.onscroll = function(){
    myFunction()
};
var navbar = document.getElementById("navbar");
function myFunction(){
    if(window.pageYOffset >= sticky){
        document.navbar.style.backgroundColor = "black"
    }else(){
        alert("hello");
    }
}
function ban(){
    alert("hello");
}
alert("hello") */

/*    counterUp(document.querySelector('.counter') ,{
        duration: 1000,
        delay: 16
    }) 
    const el = document.querySelector('.counter')
    new Waypoint( {
        element: el,
        handler:function(){
            counterUp( el )
            this.destroy()
        },
        offset:'bottom-in-view'
    })

var b = function(params) {
    alert("home")
}
alert("hello"); */

// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
}