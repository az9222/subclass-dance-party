var FadeDancer = function(top, left, timeBetweenSteps) {
        Dancer.call(this, top, left, timeBetweenSteps);
        this.$node.addClass("fade");
        this.$node.prepend('<img class="fade" src="src/imgs/banana.gif" />')
        
        // this.$node = $('<span class="dancer fade"><img class="fade" src="src/imgs/banana.gif"></span>');
    }
        // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
        // so we must keep a copy of the old version of this function
    FadeDancer.prototype = Object.create(Dancer.prototype);
    FadeDancer.prototype.constructor = FadeDancer;
    
    FadeDancer.prototype.step = function() {
        // call the old version of step at the beginning of any call to this new version of step
        Dancer.prototype.step.call(this); ////???????
        // toggle() is a jQuery method to show/hide the <span> tag.
        // See http://api.jquery.com/category/effects/ for this and
        // other effects you can use on a jQuery-wrapped html tag.
        // this.$node.fadeToggle();
        var x = Math.random()*40;
        var y = Math.random()*10;
        this.transform(x, y);
        // this.$node.fadeToggle();
    };

