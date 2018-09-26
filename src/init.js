$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

     //grabs data-dancer-maker-function-name = "BlinkyDancer"
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name'); //
    // var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // grabs value of data-dancer-maker-function-name="BlinkyDancer"
    // dancerMakerFunctionName = "BlinkyDancer"

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName]; //so window looks for dancerMakerFunctionName and finds the BlinkyDancer function which makes a dancer obj

    var height = $("body").height();
    var width = $("body").width();

    function randomRange(min, max) {
      return Math.random() * (max - min) + min;
    }
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      height * randomRange(0.6, 0.8),
      width * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.addLineUpButton').on('click', function(event) {
    var height = $("body").height();
    var width = $("body").width();
    var spaceBetween = width / window.dancers.length;


    for (var d = 0; d < window.dancers.length; d++) {
        // window.dancers[d].moveTo(d * spaceBetween, height * 0.9);
        dancers[d].$node.stop();
        dancers[d].$node.css({
            "left" : d * spaceBetween,
            "top" : height * 0.9
        });
    }

  });

});
