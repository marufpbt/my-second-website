//preloader-start
$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(200).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(200).css({'overflow':'visible'});
})
//preloader-end

//smooth-scroll


$('html').smoothScroll(1000);


//smooth-scroll




$('#jq').LineProgressbar({
percentage:90,
radius: '3px',
height: '20px',
});
$('#html').LineProgressbar({
percentage:80,
radius: '3px',
height: '20px',
fillBackgroundColor: '#DA4453'
});
$('#css').LineProgressbar({
percentage:70,
radius: '3px',
height: '20px',
fillBackgroundColor: '#E0C341'
});

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
  
//end-progress

		
//start-map		
	 function basicmap() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,
            scrollwheel: false,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(22.471021, 91.793459), // New York
            // This is where you would paste any style found on Snazzy Maps.
            styles: [
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e0efef"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#1900ff"
            },
            {
                "color": "#c0e8e8"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 700
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#7dcdcd"
            }
        ]
    }
]
        };
        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('contact-map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(22.471021, 91.793459),
            map: map,
            title: 'Cryptox'
        });
    }
    if ($('#contact-map').length != 0) {
        google.maps.event.addDomListener(window, 'load', basicmap);
    }	

	//wow
	new WOW().init();
	
	//counter-up
	
	jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });
//slick
	$('.single-item').slick();
	
	$('.responsive').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


 //scroll navbar
 	$(window).scroll(function() {    
				var scroll = $(window).scrollTop();

				if (scroll >= 200) {
					$(".clearHeader").addClass("navbarNav");
				} else {
					$(".clearHeader").removeClass("navbarNav");
				}
			});

// WOW active
new WOW().init();
