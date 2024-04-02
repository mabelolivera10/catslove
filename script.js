var bigHeart = Snap.select('#heart');
var smallHeart = Snap.select('.smallHeart');
var smallHeart2 = Snap.select('.smallHeart2');
var smallHeart3 = Snap.select('.smallHeart3');
var smallHeart4 = Snap.select('.smallHeart4');
var smallHeart5 = Snap.select('.smallHeart5');
smallHeart2.path("M396.9,200.5c0,0-9-9.2-8.4-13.9c0.3-2,1.8-3.7,4.1-3.7c2.2,0,4.1,2.1,4.1,4.2c0-2.1,1.8-4.2,4.1-4.2 s3.8,1.7,4.1,3.7C405.3,191.1,396.9,200.5,396.9,200.5z");
smallHeart.path("M338.6,155.2c0,0-9-9.2-8.4-13.9c0.3-2,1.8-3.7,4.1-3.7c2.2,0,4.1,2.1,4.1,4.2c0-2.1,1.8-4.2,4.1-4.2 c2.2,0,3.8,1.7,4.1,3.7C346.9,145.8,338.6,155.2,338.6,155.2z")
smallHeart3.path("M381,119.7c0,0-9-9.2-8.4-13.9c0.3-2,1.8-3.7,4.1-3.7c2.2,0,4.1,2.1,4.1,4.2c0-2.1,1.8-4.2,4.1-4.2 s3.8,1.7,4.1,3.7C389.4,110.2,381,119.7,381,119.7z")
smallHeart4.path("M352.6,71.5c0,0-9-9.2-8.4-13.9c0.3-2,1.8-3.7,4.1-3.7c2.2,0,4.1,2.1,4.1,4.2c0-2.1,1.8-4.2,4.1-4.2 s3.8,1.7,4.1,3.7C361,62.1,352.6,71.5,352.6,71.5z")
smallHeart5.path("M338.6,235.2c0,0-9-9.2-8.4-13.9c0.3-2,1.8-3.7,4.1-3.7c2.2,0,4.1,2.1,4.1,4.2c0-2.1,1.8-4.2,4.1-4.2 c2.2,0,3.8,1.7,4.1,3.7C346.9,225.8,338.6,235.2,338.6,235.2z")

smallHeart.attr({fill: "#9B0D0D", opacity: 0 })
smallHeart2.attr({fill: "#9B0D0D", opacity: 0})
smallHeart3.attr({fill: "#9B0D0D", opacity: 0})
smallHeart4.attr({fill: "#9B0D0D",opacity: 0})
smallHeart5.attr({fill: "#9B0D0D", opacity: 0})
   
$(document).ready(function(){
   var hearts = ['.smallHeart', '.smallHeart2', '.smallHeart3', '.smallHeart4', '.smallHeart5']
    $.each(hearts, function(time, hearts){
        setInterval(function(){  
            $(hearts).animate({'opacity' : 1}, 1500)
            $(hearts).animate({'opacity' : 0}, 1700)
      }, time * 1000);
   });
});