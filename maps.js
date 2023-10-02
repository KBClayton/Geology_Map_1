
$(document).ready(function() {


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
      async function wait() {
        await sleep(1500);
    }
      
    wait().then(function(){
        var water_points = {
            draw: function(){
                var location_001={lat: -24.744561, lng:  15.501483} 
                var point_001 = new google.maps.Marker({
                    position: location_001,
                    title: "Point 1"
                });
                point_001.setMap(map);             
                
                 var location_002={lat: 23.450856, lng: -75.637689} 
                 var point_002 = new google.maps.Marker({
                     position: location_002,
                     title: "Point 2"
                 });
                 point_002.setMap(map); 

                 var location_003={lat: 67.060642, lng: -65.5508}  
                 var point_003 = new google.maps.Marker({
                     position: location_003,
                     title: "Point 3 "
                 });
                 point_003.setMap(map); 
                
                 var location_004={lat: 25.130261, lng: -80.984217}  
                 var point_004 = new google.maps.Marker({
                     position: location_004,
                     title: "Point 4 "
                });
                 point_004.setMap(map); 
                
                var location_005={lat: 30.167425, lng: -94.816178}

                var point_005 = new google.maps.Marker({
                    position: location_005,
                    title: "Point 5"
                });
                point_005.setMap(map); 
                
                var location_006={lat: 5.415133, lng:6.523958}

                var point_006 = new google.maps.Marker({
                    position: location_006,
                    title: "Point 6"
                });
                point_006.setMap(map); 
				
				
            } 
        }
        water_points.draw();


    });
    


});