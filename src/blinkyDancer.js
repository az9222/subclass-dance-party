var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  console.log(this);
  var oldStep = this.step; //TODO
  oldStep();
  this.$node.toggle();
}

/*
- Create at least two new dancers
- Add a link in the top bar of dancefloor.html to create a dancer of each new type you create
- Write tests for new types. Use spec/blinkyDancerSpec.js as a template for new test files, and make sure to include them in SpecRunner.html
*/

