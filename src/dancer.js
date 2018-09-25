<<<<<<< HEAD
// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
    this.timeBetweenSteps = timeBetweenSteps;
    // use jQuery to create an HTML <span> tag
    this.$node = $('<span class="dancer"></span>');
    this.step();
    this.setPosition(top, left);
}

Dancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
}; //this.step.bind(this) used to be dancer.step and we want to ensure that when we call it, it is with the Dancer so we want to make sure that the context of this is clear
    
  
=======
// Creates and returns a new dancer object th.   at can step
var Dancer = function(top, left, timeBetweenSteps) {
  
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  this.step();

  // now that we have defined the dancer object, we can start setting up important parts 
  // of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

};

Dancer.prototype.constructor = Dancer;

Dancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    // setTimeout((fn) => {this.step; fn();}, this.timeBetweenSteps); // TODO:
    setTimeout(this.step, this.timeBetweenSteps); 
  };

>>>>>>> faeefc37083374c58e80ef260c6b5ac96111d84b
Dancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    var styleSettings = {
        top,
        left
    };
    this.$node.css(styleSettings);
<<<<<<< HEAD
};
  
    // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
    // this one sets the position to some random default point within the body
=======
  };

>>>>>>> faeefc37083374c58e80ef260c6b5ac96111d84b
