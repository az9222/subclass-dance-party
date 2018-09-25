var BlinkyDancer = function(top, left, timeBetweenSteps) {
<<<<<<< HEAD
    Dancer.call(this, top, left, timeBetweenSteps);
}
    // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
    // so we must keep a copy of the old version of this function
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this); ////???????
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
};
=======
  Dancer.call(this, top, left, timeBetweenSteps);
  

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  //console.log(this, this.step);
  // var toggle = function() {
  //   this.$node.toggle();
  // }
  
  Dancer.prototype.step.call(this, toggle); //TODO
  // oldStep();
  this.$node.toggle();
  
}

/*
- Create at least two new dancers
- Add a link in the top bar of dancefloor.html to create a dancer of each new type you create
- Write tests for new types. Use spec/blinkyDancerSpec.js as a template for new test files, and make sure to include them in SpecRunner.html
*/
>>>>>>> faeefc37083374c58e80ef260c6b5ac96111d84b

