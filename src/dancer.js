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

Dancer.prototype.constructor = Dancer;

Dancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    var styleSettings = {
        top,
        left
    };
    this.$node.css(styleSettings);
};

    // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
    // this one sets the position to some random default point within the body
