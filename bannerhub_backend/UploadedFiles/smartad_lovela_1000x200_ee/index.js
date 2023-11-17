(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1300,829);


(lib.p1 = function() {
	this.initialize(img.p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,375);


(lib.p2 = function() {
	this.initialize(img.p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,275);


(lib.p3 = function() {
	this.initialize(img.p3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,345);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#283482").s().p("AgaBMQgQgGgNgIIgDgEIgBgFQAAgEADgDQADgDAEAAIADABIADABQAMAIAMAEQANAEALABQAPAAAJgHQAIgHABgLIAAgBQAAgHgGgFQgFgGgJgDIgSgGQgNgEgLgFQgMgDgIgJQgHgJgBgOIAAAAQAAgOAHgKQAHgKAMgFQAMgGAOAAQANAAANADQANAEALAGQADACABACQACADAAADQAAAEgDADQgDADgEAAIgDAAIgCgCQgKgFgLgDQgKgDgKgBQgNABgIAGQgIAHAAAKIAAAAQAAAHAFAFQAGAFAJAEIATAGQAMADAMAGQALADAHAJQAIAJAAAOIAAAAQAAAPgIALQgHAKgNAFQgMAGgQAAQgOAAgQgFg");
	this.shape.setTransform(145.075,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#283482").s().p("AgiBIQgRgLgLgSQgKgSgBgZIAAAAQABgWAJgTQAKgRARgMQARgLAUABQAYAAAQALQAQAKAIASQAJATAAAVQAAADgDAEQgEADgEAAIhwAAQACAQAIAMQAHAMAMAGQAMAHANAAQAPAAAKgGQALgFAJgHIADgCIAEgCQAEABADADQADACAAAFIgBAEIgDADQgLALgOAGQgOAGgUABQgUAAgSgKgAAzgIQgCgOgFgMQgGgMgLgHQgLgIgPAAQgNAAgLAHQgLAHgHAMQgGAMgCAPIBkAAIAAAAg");
	this.shape_1.setTransform(128.875,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#283482").s().p("AgDBjQgKgEgGgKQgGgJAAgQIAAhdIgMAAQgEgBgEgDQgDgDAAgEQAAgEADgDQAEgDAEAAIAMAAIAAglQAAgFAEgEQADgDAFAAQAFAAADADQADAEABAFIAAAlIAnAAQAEAAAEADQACADABAEQgBAEgCADQgEADgEABIgnAAIAABaQAAAOAGAGQAHAGAMAAIAJgCIAFgBQAEAAADAEQADACAAAEQAAAEgCACQgCACgDABIgKAEIgNABQgMAAgJgFg");
	this.shape_2.setTransform(113.675,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#283482").s().p("AglBMQgNgGgJgLQgIgKgBgRIAAgBQABgQAIgLQAIgKAPgGQAPgGAUAAQAOAAALACIAWAFIAAgFQAAgWgMgLQgMgLgWABQgLgBgKADQgKACgJAFIgCAAIgCABQgEgBgDgCQgDgEAAgDQAAgFACgCQACgDACAAQAMgFAMgDQAMgDAOAAQARAAAMAEQANAEAIAJQAIAIAEAMQAFALAAAPIAABUQgBAFgDAEQgDADgFAAQgFAAgDgDQgDgDAAgFIAAgOQgIALgOAIQgOAIgTAAQgPAAgNgFgAggAHQgMAJAAAPIAAAAQAAAKAFAHQAGAHAJAEQAIADALAAQAOABALgGQAMgGAHgJQAHgKAAgMIAAgPIgUgEQgLgCgOAAQgWABgLAHg");
	this.shape_3.setTransform(98.475,3.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#283482").s().p("AgHBsQgEgDAAgFIAAjHQAAgFAEgDQADgEAEAAQAFAAADAEQADADABAFIAADHQgBAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_4.setTransform(86.225,-0.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#283482").s().p("AglBMQgNgGgJgLQgIgKgBgRIAAgBQABgQAIgLQAIgKAPgGQAPgGAUAAQAOAAALACIAWAFIAAgFQAAgWgMgLQgMgLgWABQgLgBgKADQgKACgJAFIgCAAIgCABQgEgBgDgCQgDgEAAgDQAAgFACgCQACgDACAAQAMgFAMgDQAMgDAOAAQARAAAMAEQANAEAIAJQAIAIAEAMQAFALAAAPIAABUQgBAFgDAEQgDADgFAAQgFAAgDgDQgDgDAAgFIAAgOQgIALgOAIQgOAIgTAAQgPAAgNgFgAggAHQgMAJAAAPIAAAAQAAAKAFAHQAGAHAJAEQAIADALAAQAOABALgGQAMgGAHgJQAHgKAAgMIAAgPIgUgEQgLgCgOAAQgWABgLAHg");
	this.shape_5.setTransform(73.025,3.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#283482").s().p("AglBMQgNgGgJgLQgIgKgBgRIAAgBQABgQAIgLQAIgKAPgGQAPgGAUAAQAOAAALACIAWAFIAAgFQAAgWgMgLQgMgLgWABQgLgBgKADQgKACgJAFIgCAAIgCABQgEgBgDgCQgDgEAAgDQAAgFACgCQACgDACAAQAMgFAMgDQAMgDAOAAQARAAAMAEQANAEAIAJQAIAIAEAMQAFALAAAPIAABUQgBAFgDAEQgDADgFAAQgFAAgDgDQgDgDAAgFIAAgOQgIALgOAIQgOAIgTAAQgPAAgNgFgAggAHQgMAJAAAPIAAAAQAAAKAFAHQAGAHAJAEQAIADALAAQAOABALgGQAMgGAHgJQAHgKAAgMIAAgPIgUgEQgLgCgOAAQgWABgLAHg");
	this.shape_6.setTransform(46.475,3.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#283482").s().p("AgUBsQgMgFgIgHQgIgIgGgJIAAAUQgBAFgDADQgDAEgFAAQgFAAgDgEQgEgDAAgFIAAjHQAAgFAEgDQADgEAFAAQAFAAADAEQADADABAFIAABVQAGgJAIgIQAJgIALgEQALgFANAAQATAAARAJQARAKALASQALARAAAaIAAAAQAAAagLASQgLASgRAKQgRAJgTABQgNgBgLgEgAgagVQgNAIgIANQgIANAAASIAAAAQAAATAIANQAIAOANAHQAMAIAOAAQAPAAANgHQAMgHAHgOQAIgNAAgTIAAgBQAAgSgIgNQgHgOgNgHQgMgHgPgBQgOABgMAHg");
	this.shape_7.setTransform(28.625,-0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#283482").s().p("AgoBIQgNgHgHgOQgHgOAAgTIAAhWQAAgFADgDQADgDAFgBQAFABAEADQADADAAAFIAABQQAAAWALAMQAMANAUABQANgBAKgGQALgGAGgLQAGgLAAgPIAAhOQAAgFADgDQAEgDAFgBQAEABAEADQADADAAAFIAACGQAAAGgDADQgDADgFABQgFgBgEgDQgDgDAAgGIAAgQQgIANgNAIQgMAJgTABQgTgBgOgIg");
	this.shape_8.setTransform(8.725,3.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#283482").s().p("AgNCFIgDAAQgFAAgDgDQgDgCAAgFQAAgEADgDQACgDAEABIADAAIADAAQAHgBAEgEQAEgFAAgKIAAibQAAgEADgEQADgDAFgBQAFABAEADQADADAAAFIAACaQAAAVgKAJQgKALgQgBIgDAAgAAFhsQgEgDAAgFIAAgEQAAgGAEgDQAEgEAFAAQAGAAAEAEQAEADAAAGIAAAEQAAAFgEADQgEAEgGABQgFgBgEgEg");
	this.shape_9.setTransform(-5.875,2.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#283482").s().p("AglBMQgNgGgJgLQgIgKgBgRIAAgBQABgQAIgLQAIgKAPgGQAPgGAUAAQAOAAALACIAWAFIAAgFQAAgWgMgLQgMgLgWABQgLgBgKADQgKACgJAFIgCAAIgCABQgEgBgDgCQgDgEAAgDQAAgFACgCIAEgDQAMgFAMgDQAMgDAOAAQARAAAMAEQANAEAIAJQAIAIAEAMQAFALAAAPIAABUQgBAFgDAEQgDADgFAAQgFAAgDgDQgDgDAAgFIAAgOQgIALgOAIQgOAIgTAAQgPAAgNgFgAggAHQgMAJAAAPIAAAAQAAAKAFAHQAGAHAJAEQAIADALAAQAOABALgGQAMgGAHgJQAHgKAAgMIAAgPIgUgEQgLgCgOAAQgWABgLAHg");
	this.shape_10.setTransform(-26.675,3.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#283482").s().p("AgnBnQgRgJgLgTQgKgSgBgZIAAgBQABgaAKgRQALgSARgKQARgJATAAQANAAALAEQAMAFAIAIQAIAHAHAJIAAhUQAAgFADgDQADgEAFAAQAFAAADAEQAEADAAAFIAADHQAAAFgEADQgDAEgFAAQgFAAgDgEQgDgDAAgFIAAgVQgHAJgIAIQgJAIgLAFQgLAEgNABQgTgBgRgJgAgbgVQgMAHgHANQgIANAAATIAAAAQAAATAIANQAHAOANAHQAMAIAOAAQAPAAANgIQAMgHAIgOQAIgOAAgSIAAAAQAAgSgIgNQgIgNgMgIQgNgHgPgBQgOAAgNAIg");
	this.shape_11.setTransform(-45.425,-0.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#283482").s().p("AglBMQgNgGgJgLQgIgKgBgRIAAgBQABgQAIgLQAIgKAPgGQAPgGAUAAQAOAAALACIAWAFIAAgFQAAgWgMgLQgMgLgWABQgLgBgKADQgKACgJAFIgCAAIgCABQgEgBgDgCQgDgEAAgDQAAgFACgCQACgDACAAQAMgFAMgDQAMgDAOAAQARAAAMAEQANAEAIAJQAIAIAEAMQAFALAAAPIAABUQgBAFgDAEQgDADgFAAQgFAAgDgDQgDgDAAgFIAAgOQgIALgOAIQgOAIgTAAQgPAAgNgFgAggAHQgMAJAAAPIAAAAQAAAKAFAHQAGAHAJAEQAIADALAAQAOABALgGQAMgGAHgJQAHgKAAgMIAAgPIgUgEQgLgCgOAAQgWABgLAHg");
	this.shape_12.setTransform(-64.225,3.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#283482").s().p("AgDBjQgKgEgGgKQgGgJAAgQIAAhdIgMAAQgEgBgEgDQgDgDAAgEQAAgEADgDQAEgDAEAAIAMAAIAAglQAAgFAEgEQADgDAFAAQAFAAADADQADAEABAFIAAAlIAnAAQAEAAAEADQACADABAEQgBAEgCADQgEADgEABIgnAAIAABaQAAAOAGAGQAHAGAMAAIAJgCIAFgBQAEAAADAEQADACAAAEQAAAEgCACQgCACgDABIgKAEIgNABQgMAAgJgFg");
	this.shape_13.setTransform(-78.725,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#283482").s().p("AgoBIQgNgHgHgOQgHgOAAgTIAAhWQAAgFADgDQADgDAFgBQAFABAEADQADADAAAFIAABQQAAAWALAMQAMANAUABQANgBAKgGQALgGAGgLQAGgLAAgPIAAhOQAAgFADgDQAEgDAFgBQAEABAEADQADADAAAFIAACGQAAAGgDADQgDADgFABQgFgBgEgDQgDgDAAgGIAAgQQgIANgNAIQgMAJgTABQgTgBgOgIg");
	this.shape_14.setTransform(-94.125,3.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#283482").s().p("AgaBMQgQgGgNgIIgDgEIgBgFQAAgEADgDQADgDAEAAIADABIADABQAMAIAMAEQANAEALABQAPAAAJgHQAIgHABgLIAAgBQAAgHgGgFQgFgGgJgDIgSgGQgNgEgLgFQgMgDgIgJQgHgJgBgOIAAAAQAAgOAHgKQAHgKAMgFQAMgGAOAAQANAAANADQANAEALAGQADACABACQACADAAADQAAAEgDADQgDADgEAAIgDAAIgCgCQgKgFgLgDQgKgDgKgBQgNABgIAGQgIAHAAAKIAAAAQAAAHAFAFQAGAFAJAEIATAGQAMADAMAGQALADAHAJQAIAJAAAOIAAAAQAAAPgIALQgHAKgNAFQgMAGgQAAQgOAAgQgFg");
	this.shape_15.setTransform(-111.025,3.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#283482").s().p("AglBMQgNgGgJgLQgIgKgBgRIAAgBQABgQAIgLQAIgKAPgGQAPgGAUAAQAOAAALACIAWAFIAAgFQAAgWgMgLQgMgLgWABQgLgBgKADQgKACgJAFIgCAAIgCABQgEgBgDgCQgDgEAAgDQAAgFACgCQACgDACAAQAMgFAMgDQAMgDAOAAQARAAAMAEQANAEAIAJQAIAIAEAMQAFALAAAPIAABUQgBAFgDAEQgDADgFAAQgFAAgDgDQgDgDAAgFIAAgOQgIALgOAIQgOAIgTAAQgPAAgNgFgAggAHQgMAJAAAPIAAAAQAAAKAFAHQAGAHAJAEQAIADALAAQAOABALgGQAMgGAHgJQAHgKAAgMIAAgPIgUgEQgLgCgOAAQgWABgLAHg");
	this.shape_16.setTransform(-127.575,3.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#283482").s().p("AAxBuIgFgEIg1hEIggAgIAAAeQgBAFgDADQgCAEgGAAQgFAAgDgEQgDgDAAgFIAAjHQAAgFADgDQADgEAFAAQAFAAADAEQADADABAFIAACOIBThVIAEgDIAGgBQAEAAADADQADADAAAFIgBAEIgDAFIgzAxIA3BGIACAEIABAEQAAAFgDADQgDADgFAAQgDAAgCgCg");
	this.shape_17.setTransform(-143.85,-0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155,-20.1,310,40.3);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#283482").s().p("AgaBMQgQgGgNgIIgDgEIgBgFQAAgEADgDQADgDAEAAIADABIADABQAMAIAMAEQANAEALABQAPAAAJgHQAIgHABgLIAAgBQAAgHgGgFQgFgGgJgDIgSgGQgNgEgLgFQgMgDgIgJQgHgJgBgOIAAAAQAAgOAHgKQAHgKAMgFQAMgGAOAAQANAAANADQANAEALAGQADACABACQACADAAADQAAAEgDADQgDADgEAAIgDAAIgCgCQgKgFgLgDQgKgDgKgBQgNABgIAGQgIAHAAAKIAAAAQAAAHAFAFQAGAFAJAEIATAGQAMADAMAGQALADAHAJQAIAJAAAOIAAAAQAAAPgIALQgHAKgNAFQgMAGgQAAQgOAAgQgFg");
	this.shape.setTransform(145.075,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#283482").s().p("AgiBIQgRgLgLgSQgKgSgBgZIAAAAQABgWAJgTQAKgRARgMQARgLAUABQAYAAAQALQAQAKAIASQAJATAAAVQAAADgDAEQgEADgEAAIhwAAQACAQAIAMQAHAMAMAGQAMAHANAAQAPAAAKgGQALgFAJgHIADgCIAEgCQAEABADADQADACAAAFIgBAEIgDADQgLALgOAGQgOAGgUABQgUAAgSgKgAAzgIQgCgOgFgMQgGgMgLgHQgLgIgPAAQgNAAgLAHQgLAHgHAMQgGAMgCAPIBkAAIAAAAg");
	this.shape_1.setTransform(128.875,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#283482").s().p("AgDBjQgKgEgGgKQgGgJAAgQIAAhdIgMAAQgEgBgEgDQgDgDAAgEQAAgEADgDQAEgDAEAAIAMAAIAAglQAAgFAEgEQADgDAFAAQAFAAADADQADAEABAFIAAAlIAnAAQAEAAAEADQACADABAEQgBAEgCADQgEADgEABIgnAAIAABaQAAAOAGAGQAHAGAMAAIAJgCIAFgBQAEAAADAEQADACAAAEQAAAEgCACQgCACgDABIgKAEIgNABQgMAAgJgFg");
	this.shape_2.setTransform(113.675,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#283482").s().p("AglBMQgNgGgJgLQgIgKgBgRIAAgBQABgQAIgLQAIgKAPgGQAPgGAUAAQAOAAALACIAWAFIAAgFQAAgWgMgLQgMgLgWABQgLgBgKADQgKACgJAFIgCAAIgCABQgEgBgDgCQgDgEAAgDQAAgFACgCQACgDACAAQAMgFAMgDQAMgDAOAAQARAAAMAEQANAEAIAJQAIAIAEAMQAFALAAAPIAABUQgBAFgDAEQgDADgFAAQgFAAgDgDQgDgDAAgFIAAgOQgIALgOAIQgOAIgTAAQgPAAgNgFgAggAHQgMAJAAAPIAAAAQAAAKAFAHQAGAHAJAEQAIADALAAQAOABALgGQAMgGAHgJQAHgKAAgMIAAgPIgUgEQgLgCgOAAQgWABgLAHg");
	this.shape_3.setTransform(98.475,3.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#283482").s().p("AgHBsQgEgDAAgFIAAjHQAAgFAEgDQADgEAEAAQAFAAADAEQADADABAFIAADHQgBAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_4.setTransform(86.225,-0.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#283482").s().p("AglBMQgNgGgJgLQgIgKgBgRIAAgBQABgQAIgLQAIgKAPgGQAPgGAUAAQAOAAALACIAWAFIAAgFQAAgWgMgLQgMgLgWABQgLgBgKADQgKACgJAFIgCAAIgCABQgEgBgDgCQgDgEAAgDQAAgFACgCQACgDACAAQAMgFAMgDQAMgDAOAAQARAAAMAEQANAEAIAJQAIAIAEAMQAFALAAAPIAABUQgBAFgDAEQgDADgFAAQgFAAgDgDQgDgDAAgFIAAgOQgIALgOAIQgOAIgTAAQgPAAgNgFgAggAHQgMAJAAAPIAAAAQAAAKAFAHQAGAHAJAEQAIADALAAQAOABALgGQAMgGAHgJQAHgKAAgMIAAgPIgUgEQgLgCgOAAQgWABgLAHg");
	this.shape_5.setTransform(73.025,3.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#283482").s().p("AglBMQgNgGgJgLQgIgKgBgRIAAgBQABgQAIgLQAIgKAPgGQAPgGAUAAQAOAAALACIAWAFIAAgFQAAgWgMgLQgMgLgWABQgLgBgKADQgKACgJAFIgCAAIgCABQgEgBgDgCQgDgEAAgDQAAgFACgCQACgDACAAQAMgFAMgDQAMgDAOAAQARAAAMAEQANAEAIAJQAIAIAEAMQAFALAAAPIAABUQgBAFgDAEQgDADgFAAQgFAAgDgDQgDgDAAgFIAAgOQgIALgOAIQgOAIgTAAQgPAAgNgFgAggAHQgMAJAAAPIAAAAQAAAKAFAHQAGAHAJAEQAIADALAAQAOABALgGQAMgGAHgJQAHgKAAgMIAAgPIgUgEQgLgCgOAAQgWABgLAHg");
	this.shape_6.setTransform(46.475,3.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#283482").s().p("AgUBsQgMgFgIgHQgIgIgGgJIAAAUQgBAFgDADQgDAEgFAAQgFAAgDgEQgEgDAAgFIAAjHQAAgFAEgDQADgEAFAAQAFAAADAEQADADABAFIAABVQAGgJAIgIQAJgIALgEQALgFANAAQATAAARAJQARAKALASQALARAAAaIAAAAQAAAagLASQgLASgRAKQgRAJgTABQgNgBgLgEgAgagVQgNAIgIANQgIANAAASIAAAAQAAATAIANQAIAOANAHQAMAIAOAAQAPAAANgHQAMgHAHgOQAIgNAAgTIAAgBQAAgSgIgNQgHgOgNgHQgMgHgPgBQgOABgMAHg");
	this.shape_7.setTransform(28.625,-0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#283482").s().p("AgoBIQgNgHgHgOQgHgOAAgTIAAhWQAAgFADgDQADgDAFgBQAFABAEADQADADAAAFIAABQQAAAWALAMQAMANAUABQANgBAKgGQALgGAGgLQAGgLAAgPIAAhOQAAgFADgDQAEgDAFgBQAEABAEADQADADAAAFIAACGQAAAGgDADQgDADgFABQgFgBgEgDQgDgDAAgGIAAgQQgIANgNAIQgMAJgTABQgTgBgOgIg");
	this.shape_8.setTransform(8.725,3.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#283482").s().p("AgNCFIgDAAQgFAAgDgDQgDgCAAgFQAAgEADgDQACgDAEABIADAAIADAAQAHgBAEgEQAEgFAAgKIAAibQAAgEADgEQADgDAFgBQAFABAEADQADADAAAFIAACaQAAAVgKAJQgKALgQgBIgDAAgAAFhsQgEgDAAgFIAAgEQAAgGAEgDQAEgEAFAAQAGAAAEAEQAEADAAAGIAAAEQAAAFgEADQgEAEgGABQgFgBgEgEg");
	this.shape_9.setTransform(-5.875,2.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#283482").s().p("AglBMQgNgGgJgLQgIgKgBgRIAAgBQABgQAIgLQAIgKAPgGQAPgGAUAAQAOAAALACIAWAFIAAgFQAAgWgMgLQgMgLgWABQgLgBgKADQgKACgJAFIgCAAIgCABQgEgBgDgCQgDgEAAgDQAAgFACgCIAEgDQAMgFAMgDQAMgDAOAAQARAAAMAEQANAEAIAJQAIAIAEAMQAFALAAAPIAABUQgBAFgDAEQgDADgFAAQgFAAgDgDQgDgDAAgFIAAgOQgIALgOAIQgOAIgTAAQgPAAgNgFgAggAHQgMAJAAAPIAAAAQAAAKAFAHQAGAHAJAEQAIADALAAQAOABALgGQAMgGAHgJQAHgKAAgMIAAgPIgUgEQgLgCgOAAQgWABgLAHg");
	this.shape_10.setTransform(-26.675,3.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#283482").s().p("AgnBnQgRgJgLgTQgKgSgBgZIAAgBQABgaAKgRQALgSARgKQARgJATAAQANAAALAEQAMAFAIAIQAIAHAHAJIAAhUQAAgFADgDQADgEAFAAQAFAAADAEQAEADAAAFIAADHQAAAFgEADQgDAEgFAAQgFAAgDgEQgDgDAAgFIAAgVQgHAJgIAIQgJAIgLAFQgLAEgNABQgTgBgRgJgAgbgVQgMAHgHANQgIANAAATIAAAAQAAATAIANQAHAOANAHQAMAIAOAAQAPAAANgIQAMgHAIgOQAIgOAAgSIAAAAQAAgSgIgNQgIgNgMgIQgNgHgPgBQgOAAgNAIg");
	this.shape_11.setTransform(-45.425,-0.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#283482").s().p("AglBMQgNgGgJgLQgIgKgBgRIAAgBQABgQAIgLQAIgKAPgGQAPgGAUAAQAOAAALACIAWAFIAAgFQAAgWgMgLQgMgLgWABQgLgBgKADQgKACgJAFIgCAAIgCABQgEgBgDgCQgDgEAAgDQAAgFACgCQACgDACAAQAMgFAMgDQAMgDAOAAQARAAAMAEQANAEAIAJQAIAIAEAMQAFALAAAPIAABUQgBAFgDAEQgDADgFAAQgFAAgDgDQgDgDAAgFIAAgOQgIALgOAIQgOAIgTAAQgPAAgNgFgAggAHQgMAJAAAPIAAAAQAAAKAFAHQAGAHAJAEQAIADALAAQAOABALgGQAMgGAHgJQAHgKAAgMIAAgPIgUgEQgLgCgOAAQgWABgLAHg");
	this.shape_12.setTransform(-64.225,3.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#283482").s().p("AgDBjQgKgEgGgKQgGgJAAgQIAAhdIgMAAQgEgBgEgDQgDgDAAgEQAAgEADgDQAEgDAEAAIAMAAIAAglQAAgFAEgEQADgDAFAAQAFAAADADQADAEABAFIAAAlIAnAAQAEAAAEADQACADABAEQgBAEgCADQgEADgEABIgnAAIAABaQAAAOAGAGQAHAGAMAAIAJgCIAFgBQAEAAADAEQADACAAAEQAAAEgCACQgCACgDABIgKAEIgNABQgMAAgJgFg");
	this.shape_13.setTransform(-78.725,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#283482").s().p("AgoBIQgNgHgHgOQgHgOAAgTIAAhWQAAgFADgDQADgDAFgBQAFABAEADQADADAAAFIAABQQAAAWALAMQAMANAUABQANgBAKgGQALgGAGgLQAGgLAAgPIAAhOQAAgFADgDQAEgDAFgBQAEABAEADQADADAAAFIAACGQAAAGgDADQgDADgFABQgFgBgEgDQgDgDAAgGIAAgQQgIANgNAIQgMAJgTABQgTgBgOgIg");
	this.shape_14.setTransform(-94.125,3.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#283482").s().p("AgaBMQgQgGgNgIIgDgEIgBgFQAAgEADgDQADgDAEAAIADABIADABQAMAIAMAEQANAEALABQAPAAAJgHQAIgHABgLIAAgBQAAgHgGgFQgFgGgJgDIgSgGQgNgEgLgFQgMgDgIgJQgHgJgBgOIAAAAQAAgOAHgKQAHgKAMgFQAMgGAOAAQANAAANADQANAEALAGQADACABACQACADAAADQAAAEgDADQgDADgEAAIgDAAIgCgCQgKgFgLgDQgKgDgKgBQgNABgIAGQgIAHAAAKIAAAAQAAAHAFAFQAGAFAJAEIATAGQAMADAMAGQALADAHAJQAIAJAAAOIAAAAQAAAPgIALQgHAKgNAFQgMAGgQAAQgOAAgQgFg");
	this.shape_15.setTransform(-111.025,3.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#283482").s().p("AglBMQgNgGgJgLQgIgKgBgRIAAgBQABgQAIgLQAIgKAPgGQAPgGAUAAQAOAAALACIAWAFIAAgFQAAgWgMgLQgMgLgWABQgLgBgKADQgKACgJAFIgCAAIgCABQgEgBgDgCQgDgEAAgDQAAgFACgCQACgDACAAQAMgFAMgDQAMgDAOAAQARAAAMAEQANAEAIAJQAIAIAEAMQAFALAAAPIAABUQgBAFgDAEQgDADgFAAQgFAAgDgDQgDgDAAgFIAAgOQgIALgOAIQgOAIgTAAQgPAAgNgFgAggAHQgMAJAAAPIAAAAQAAAKAFAHQAGAHAJAEQAIADALAAQAOABALgGQAMgGAHgJQAHgKAAgMIAAgPIgUgEQgLgCgOAAQgWABgLAHg");
	this.shape_16.setTransform(-127.575,3.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#283482").s().p("AAxBuIgFgEIg1hEIggAgIAAAeQgBAFgDADQgCAEgGAAQgFAAgDgEQgDgDAAgFIAAjHQAAgFADgDQADgEAFAAQAFAAADAEQADADABAFIAACOIBThVIAEgDIAGgBQAEAAADADQADADAAAFIgBAEIgDAFIgzAxIA3BGIACAEIABAEQAAAFgDADQgDADgFAAQgDAAgCgCg");
	this.shape_17.setTransform(-143.85,-0.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155,-20.1,310,40.3);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#85B6D6").s().p("AiyDPQhNhvAfiRQAMg9AeguQAeguAkgPQBEgdAmA1QApA8geCLQAqgYA4ABQA1ABAnAXQApAYACAmQADArgyAvQg3AwiBAQQgpAGgiAAQhGAAgkgWg");
	this.shape.setTransform(15.3767,14.9748,0.6567,0.6567);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.8,30);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#85B6D6").s().p("AhsDCQhDhfgShiQgPhTAYg7QAchGA0ASQA6AUApB6QAXgVAtgNQArgMAlAEQApAFAMAWQAOAageAtQgnA7hZBEQhVBBg0AAQgNAAgKgDg");
	this.shape.setTransform(12.8952,10.9257,0.5381,0.5381,-60.0002);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.7,21.4);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#85B6D6").s().p("AgwCsQhRgdgmgzQgug7AqgjQAugpB9AbQgFggALgsQALgsAXgdQAYghAZABQAeABAYAxQAfA/AOBuQAQCFgsAlQgaACgZAAQhWAAhHgag");
	this.shape.setTransform(10.3483,10.6656,0.5377,0.5377);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.7,21.4);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bg();
	this.instance.setTransform(200,6,0.8344,0.8344);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(200,6,1084.7,691.7);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArALBIAA2BIWBAAIAAWBg");
	mask.setTransform(70.5,70.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AB7E9").s().p("AnyHyQjOjOAAkkQAAiOA4iEQA1h9BhhjQBihhB+g1QCEg4COAAQCQAACCA4QB/A1BhBhQBiBjA1B9QA4CEAACOQAAEkjPDOQjODPkkAAQkjAAjPjPg");
	this.shape.setTransform(70.5,70.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,141,141), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EhORAPyIAA/jMCcjAAAIAAfjg");
	mask_1.setTransform(501,101);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(2).p("EBOIAPoMicPAAAIAA/PMCcPAAAg");
	this.shape_1.setTransform(501,101);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,1002,202), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AnnHhIAAvBIPPAAIAAPBg");
	mask_2.setTransform(48.8,48.125);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgtgGIAnggQAOgMAKANQAHAIgFAIIAAAAQAFgDAGACQAFABAEAFQANAPgTAPIgkAfgAAMgEIgSAPIAJAMIAVgRQAGgFgFgFQgDgDgDAAQgDAAgEADgAgFgXIgSAPIAJAKIATgPQAFgEgEgGQgDgDgDAAQgCAAgDADg");
	this.shape_2.setTransform(74.4554,80.962);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglgfIATgKIA4AtIgRAJIgMgJIgaAOIABAPIgRAJgAgSAFIASgJIgVgTg");
	this.shape_3.setTransform(69,86.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFgMIgZAHIgDgMIBAgVIADANIgXAHIAQAzIgSAGg");
	this.shape_4.setTransform(60.2,87.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOgfIARgDIALBCIgRADg");
	this.shape_5.setTransform(55.45,89.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnggIAVgBIATAzIATgzIATAAIgcBDIgSAAg");
	this.shape_6.setTransform(49.25,89.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGAjQgpgIAHgiQAHgjAoAIQAYAFAIAOQAFAKgDANQgFAcgdAAIgNgBgAgNgRQgGAFgCAJQgBAIADAHQAFAJALABQAKACAHgFQAHgGABgJQACgIgEgHQgEgIgLgCIgGgBQgHAAgFAFg");
	this.shape_7.setTransform(40.9455,89.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNAgQgmgQAOggQAPggAlARQAmARgPAfQgJAVgUAAQgJAAgNgGgAgJgUQgHADgDAJQgEAIACAHQACAJALAFQAJAFAJgFQAHgDAEgJQADgIgCgHQgCgJgLgFQgFgCgEAAQgFAAgEACg");
	this.shape_8.setTransform(32.1468,86.4364);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSAdQgfgWAOgSIARALQgHAKAOAJQALAJAFgHQADgFgIgIIgLgLQgQgQAJgNQAMgQAbATQAbAUgLARIgRgLQAFgIgNgJQgKgIgDAHQgDAEAEAFIAQAQQAQAPgJANQgHAIgJAAQgKAAgPgLg");
	this.shape_9.setTransform(24.5768,82.0801);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CB007B").s().p("AgHAIQgDgEAAgEQAAgDADgEQAEgDADAAQAEAAAEADQADAEAAADQAAAEgDAEQgEADgEAAQgDAAgEgDg");
	this.shape_10.setTransform(49.125,71.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CB007B").s().p("AgdAVIATgFQAGAJAMgDQAKgDAEgJQADgHgCgHQgDgJgGgEQgHgFgKACQgQAFABAOIAPgEIADAKIgfAJIgKgiIAJgDIAEAHQAGgLASgFQAjgKAKAhQAEAOgIALQgHAMgRAFQgKADgHAAQgSAAgHgPg");
	this.shape_11.setTransform(56.9446,69.7293);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CB007B").s().p("AgvgHIAQgKIA1ASIgXglIAOgKIAjA2IgSALIg0gTIAYAlIgOAKg");
	this.shape_12.setTransform(65.8,65.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CB007B").s().p("AgcgQIANgNIAsAuIgNANg");
	this.shape_13.setTransform(70.775,62);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CB007B").s().p("AguALIAKgNIAYAPIATgdIgWgQIAKgPIA0AlIgKANIgUgMIgTAdIATANIgKAPg");
	this.shape_14.setTransform(74.85,57.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CB007B").s().p("AgaAaQgYgHALggQAKgfAYAHIAnANIgGAQIgigLQgRgGgFAQQgFAPAQAFIAjAMIgGAQgAAUAcIAFgPIALADIgFAQgAAdAEIAFgPIAKAEIgFAOg");
	this.shape_15.setTransform(79.6771,49.3614);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CB007B").s().p("AghgbIA/gFIAEA8IgMABIgDgqIgNABIACAnIgLABIgCgnIgPABIADApIgNACg");
	this.shape_16.setTransform(80.425,37.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CB007B").s().p("AASAKIgxAQIgFgRIAxgPIgHgXIAMgDIATA9IgMAEg");
	this.shape_17.setTransform(79.375,28.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CB007B").s().p("AgJAWIAJgMIgQgYIgOADIgKgQIBFgKIAMASIgpA5gAgDgQIAKAQIAQgVg");
	this.shape_18.setTransform(75.025,23.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CB007B").s().p("AgLAhIgfgcIArgvIAeAcQAYAVgXAXQgMANgLAAQgKAAgKgKgAgUAIIAOANQAMALAOgPQANgOgOgMIgNgMg");
	this.shape_19.setTransform(69.6944,15.3846);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CB007B").s().p("AABAkIgLg3IgUAoIgPgHIAcg6IARAJIALA3IABAAIATgoIAPAHIgcA6g");
	this.shape_20.setTransform(62.525,10.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CB007B").s().p("AAUAhIgDgOIgdgFIgHAMIgTgDIAng6IAVADIARBEgAgFADIATADIgGgag");
	this.shape_21.setTransform(53.55,8.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CB007B").s().p("AgwgYIAZgEIAZAqIAMgvIAagFIAJBAIgRACIgHgyIgNA1IgOACIgbgvIgBAAIAIAzIgRABg");
	this.shape_22.setTransform(44.225,7.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CB007B").s().p("AgpgPIA2gaIAFALIglATIAFALIAkgRIAFALIgjAQIAGAOIAmgTIAGALIg2Aag");
	this.shape_23.setTransform(35.15,10.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CB007B").s().p("AgngaIAQgOIA/AfIgOALIgNgGIgVATIAEANIgOANgAgMADIANgNIgWgMg");
	this.shape_24.setTransform(29.3,16.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CB007B").s().p("AgyAWIANgWIAxAHIgdgoIAOgVIA2AiIgJAOIgrgbIAgArIgHANIg2gJIArAbIgJAOg");
	this.shape_25.setTransform(21.825,22.65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CB007B").s().p("AgnAmIAFgZIAwgKIgpgbIAFgZIA+AMIgDARIgygKIAAAAIAuAeIgCANIg2ALIAyAKIgDAQg");
	this.shape_26.setTransform(17.675,33.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CB007B").s().p("AgXASIgDgUIA8gkIACATIgMAHIADAcIAOAEIACATgAgLAGIAaAHIgDgTgAgnAPIALgCIACAQIgLABgAgqgKIALgCIABAPIgKACg");
	this.shape_27.setTransform(16.725,42.725);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CB007B").s().p("AggAGIA6gaIAHAQIg6Aag");
	this.shape_28.setTransform(19.975,52.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CB007B").s().p("AglgSIAKgHIANAUIArgeIAJAPIgqAcIANAVIgJAGg");
	this.shape_29.setTransform(21.9,57.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CB007B").s().p("AgWAbQgYgXANgOIAOAMQgFAIALAJQAEAEAEABQAEAAABgCQADgEgDgGIgOgQQgOgRAKgKQAPgRAYAXQAbAXgPARIgPgOQAIgHgNgKQgLgKgEAGQgEAFAGAIIALAMQAOARgKALQgFAGgIAAQgJAAgPgMg");
	this.shape_30.setTransform(27.7643,62.7721);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CB007B").s().p("AgpAPIAGgLIAlAUIAGgMIgjgSIAFgKIAkARIAGgMIglgUIAGgLIA1AcIgeA5g");
	this.shape_31.setTransform(34.175,67.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CB007B").s().p("AgkAZIADgMIApAJIADgNIgngJIADgKIAnAJIADgPIgpgJIADgMIA6ANIgPA+g");
	this.shape_32.setTransform(41.525,70.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CB007B").s().p("AA4DYIg4gsQgnAegOAIQghATgEABIgHAAIgDgBIAFiDIhogCIgjgEQgDgHAHgNQAMgUAYgeIAWgaQgsg3gJgPQgFgJgDgJIgBgIIAvgEIBdACIAAhjQAAgaADgGQACgEAJAEQAMAFAVASQATAPAcAdIAvgnQAQgMAdgRIADAAQACACABADIgBCBICDAAQADAJgGAKQglBDgHAKIgFAEIgDAAIATAWQAWAaALAUQAGAKAFANQgIAHgNgBIhxAAIgDgCIAAAqQAAArgBAIQgCANAAAcQgBACgEAFQgRgFgSgPgAAcCpQANAKAmAbIABgOQABgIgBhcIhZAAQgYAAgYADIgTADIgBAeIgCBJIAkgXQAPgJAegZgAi3g3QAMARAXAkIg8BLIA2AEQAXACAlAAIABihIhwgDgAhNhHQgCALAAAOQgBAYAGBkIAkgBIA2gDQAZgBAoACQABg/gCgYIgChEIgjgBIgjACIhSgBgABgBNIAgAAQAQABAsgBQARABACgCIg2hMIAOgVQAHgKAagzIhogBgAhNhjIBAAEQAUABBIgEIABgcIAAhSQgSARgLAIIgyAnIgNgNIhAg1g");
	this.shape_33.setTransform(48.9693,39.3809);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CB007B").s().p("AgbBHQgZgLgMgVIgOgbQgCgEAAgIIABgLIAGgOQAFgKAQgOIAPgNQAUgOAWgBQAZAAAVARQAjAdgGAsQgCATgSAUQgUAWgWADIgMABQgPAAgSgHgAATAIIggABIglADIgBABIAAAHQACAJATASQAKAJAKACQAJACAVgDQARgCANgRQAIgLADgNQACgFgFgBIgMgBIgFAAIgWABgAABg2QgRABgRARIgOARIABADQABAAAAABQAAAAABABQAAAAAAABQABAAAAAAQAGAEAOACQAMABAtgBQAcgBgDgFQAAgJgIgJQgSgXgeAAIgCAAg");
	this.shape_34.setTransform(48.7623,39.1214);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CB007B").s().p("AgmGOQhhgHg0giQhYg6gngrQhHhOgMhpQgMhrAUhMQAJgjAeg3QAxhXBbg2QBYg1BigFQClgIBjBKQA5AqApA6QA6BSAFBZQAGBigPBBQgOA+gmA6QguBGhSAzQhCAog1ALQgmAHguAAQgWAAgZgCgAhel3QgvAMgfAPQgkARgpAhQgoAfgmA7QghAygPArQgLAggDAwQgBAgADA2QACAuAVAxQAWA2ApAuQAmArArAdQAcATA2AaQAqAVA8ACQA5ACBAgPQA3gOAugZQAfgQAjgcQA5gtAnhHQAagyAJhEQAJhFgLhNQgKhFgwhCQgegpgygtQg4gyhzgYQgcgFggAAQgxAAg5APg");
	this.shape_35.setTransform(48.7889,40.0026);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CB007B").s().p("AALEKIgKgIIAggDIALAKIgVADIgEAAQgFAAgDgCgAgMELQgEAAgIgGIgEgGIAYACIAHALgAgrEJQgIgCgBgBIgFgMIAXAFIACAHIAEAFQgKAAgFgCgAhVD8IgGgOIAbAKIACAJIACAFgAAzECIgKgEIAFgCQAGgDAEAAIAMgCIABABIALAHQgHAAgIACQgGACgEAAIgEgBgABVD5IgJgCIANgGIANgGIAKAGIAGABIgXAJIgCAAQgEAAgEgCgAhxDwIgHgFIgHgQIAdAPIADAQgABuDoIAagPIAMACIAHABIgSALQgEACgGABgAiRDeIgGgFIgEgRIAWANIABAIIACAIIgPgHgACbDWIgKgCIALgKIAKgFIARABIgTANQgEADgEAAIgBAAgAinDOIgIgHIgCgUIAJAKIAJAHIAAAPgAjDCyIgHgIIABgQIAJAJIAJALIABARIgNgNgACtC+IAWgWIALAAQABAAAAAAQAAAAAAABQAAAAgBABQAAABgBABIgHAHIgKALgAjXCZIgHgKIADgPIANAUIAAALIgCAGIgHgMgADICiIAJgMIAGgKIAMgCQAGgBgKALIgIALQgHADgDAAgAjrB6IgFgKIAGgOIAMAZIgEAHIgBAFQgFgHgDgGgADqBsIAJgDIAEgCQgIATgCADQgBADgIADIgIACgAj4BbQgEgJACgFIAFgKIAJAaIgEAIIgDAEgAD2BIIANgGIgEARIgEAJQgBACgDABIgJAGgAkBBBIgFgNQACgFADgEIAEgIIAGAbIgJAOgAD8A3IADgSIAMgEIgDAQQgCAJgCABQgBABgKAEgAkKAXIgBgIIAMgNIAAAKIAAAQIgFAJQgCAEgCAAQgBgMgBgGgAEBADIAIgFQADgBABAEIAAAUIgFAFIgJADgAkLgTIAJgHIAGgDIgDAaIgNAKgAD/gdIAJgIQACgBABANIAAAJQAAADgDADIgGAFIgDABgAkGguIAEgMIAIgEIAEgBIgEAZIgPAJQAAgKADgHgAD7gtIgEgNIALgJQADgDACAQQABAFgBACIgEAGQgDADgCABIgCAAgADyhKIgDgOIAEgGQADgDABAAIAEAKIABAFIgBAJQgCAIgDABgAkAhRQADgLAFgDQADgCAFgCIAEgBIgCALQgDAGgCANIgGACIgIABgADohqIgEgKIAEgIIAFAGQAFAGABAEQACADgCACIgGAIQgEgGgBgFgAjwh2QADgFAFgBQAGgBAEgCIgHAQIgCAEQgBACgEABIgIACIgDACQAFgPACgDgADViJIACgMIAGAFIAFAIIgEAOgAjdiUIAHgGIANgCIgRAYIgGAAIgHABQAGgNAEgEgADDikIAAgNIACACIAFAEIAIAMIAAAFIgCAJgAjKisQAFgHAGgBIAJgBQgBACgDADQgDACgEAGIgEAHIgPABgACvi7IgBgMIAMAKQADAEABAEIgBAKgAi7i9QADgFADgCIAGgFQAEgDAFABQAHABAAABIgQANIgPAEgACijFIgKgHIgCgMIAFAAIALAIIACADIgBAEIAAAJQgDgCgCgDgAikjRIAJgIIAJgFIANAEIgTALgACAjgQgCgCgBgDIAAgDIAEABQAFAAADACIAFADQACACABAEQADAIgDACQgPgLgCgDgAiKjhIACgCIAGgEQAKgEAFAAIALABIgHAEIgSAHgABljtQgFgDAAgDIABgCIAKABIAGADQAEADACAEQADAHgCABQgNgGgGgFgAhvjvIgCgBIATgKQAEgBAGACQACAAAFAEQgEACgDAAIgTAGgABVjyQgIgCgEgDIgFgFIgDgDIAAgCIAKABQAIACAFADQAFAEgCAHQgCAAgEgCgAhRj8IARgFQAHgBAEACQAFACAAADIgGABIgRAEgAA3j7IgOgDIgHgKIAFAAIAJABIAGACIAEADIAFAJIgCAAIgGgCgAgsj/IgEgCIgCgBIADgCIAHgCIAMAAQAFABABAFIgJABIgIABIgFgBgAAZkAIgOgBIgHgHIABgCQACgCAEABIAKAAIAGABQADABADAIQAAABAAAAQAAAAgBAAQAAAAgBAAQgBABgBAAIgEgBgAgQkCQgCgBgCgCIgBgCIADgBQAEgCAEAAIAGAAIAEADQAFADAAAEIgVgCg");
	this.shape_36.setTransform(48.7875,39.2075);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CB007B").s().p("AlYFCQiPiQAAjJQAAiPBNh5QBNh1B9g8QhqA6g1BjIgFAGQgcAzgKAsQgTBNAMBsQAMBsBJBSQAqAuBYA6IAEADQBGAuCEABQA0AAAogIQA6gMBFgqQBVg1AwhKQApg+APhEQAOhBgFhkQgFhQgthMQgig2gygvQBdBFA2BlQA2BpAAB4QAADJiPCQQiPCOjKAAQjJAAiPiOg");
	this.shape_37.setTransform(48.8,49.8);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,97.6,96.3), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("An4HxIAAvhIPwAAIAAPhg");
	mask_3.setTransform(50.45,49.7);

	// Layer_3
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#381191").s().p("Ag1gnQAGgHAMgHQASgMAPADQAUADAUAfQAUAegFAWQgEARgUAOIgRAIgAgYgqIgEAEIAxBOIAEgDQAWgNgagpQgSgcgQAAQgFAAgGADg");
	this.shape_38.setTransform(72.625,87.169);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#381191").s().p("AgUAgIgchKIATgHIAcBMQAIAZAOgEQANgFgJgaIgbhMIARgHIAcBJQAQAtggAMQgHADgGAAQgVAAgNgjg");
	this.shape_39.setTransform(64.5028,90.2036);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#381191").s().p("AgHgoIgXADIgDgSIBAgJIADASIgXADIARBpIgUADg");
	this.shape_40.setTransform(56.1,92.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#381191").s().p("AgIA/IgCh8IATgBIACB9g");
	this.shape_41.setTransform(51.15,93.125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#381191").s().p("AgXA+IANhpIgWgDIACgSIA/AIIgCASIgWgDIgMBqg");
	this.shape_42.setTransform(45.875,92.725);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#381191").s().p("AgXA7QgOgFgGgHIAIgPQAGAHALADQASAGAEgRQADgMgLgPQgTgUAHgTQAEgPAMgGQALgHARAFQAKADAGAHIgIAPQgFgGgJgDQgHgCgGADQgGADgBAGQgCAHADAGQABAFAIAJQASATgHAUQgEAQgOAHQgGAEgIAAQgHAAgHgCg");
	this.shape_43.setTransform(37.9,91.375);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#381191").s().p("AgyAsIA3hvIAuAXIgIAPIgcgNIgPAeIAaANIgHAOIgagNIgSAkIAeAOIgHAQg");
	this.shape_44.setTransform(31.425,88.75);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#381191").s().p("Ag1AzIA+hVIgRgNIAKgPIA0AnIgLAOIgSgNIg+BVg");
	this.shape_45.setTransform(25.925,84.125);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#381191").s().p("AAsAKIhqACIAAgTIBqgCIAAgWIASgBIABBAIgSABg");
	this.shape_46.setTransform(94.625,49.475);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#381191").s().p("Ag/gQIB8gTIACATIhqAQIAGAiIgRACg");
	this.shape_47.setTransform(93.85,43.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#381191").s().p("AhDgEIB2goIAQAvIgQAGIgKgdIggALIAJAbIgPAFIgJgbIgmALIALAhIgRAGg");
	this.shape_48.setTransform(92.35,36.55);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#381191").s().p("AgkArQgOgFgIgPQgHgOABgIIARgEQgBAIAFAKQAKARAPgJQAKgGACgSQACgcARgJQANgIANAEQAOAEAIAPQAFAKAAAJIgRAEQABgGgFgJQgIgOgNAHQgGADgDAGQgBAFgBALQgCAagSAKQgKAFgJAAQgFAAgFgBg");
	this.shape_49.setTransform(89.2441,29.4364);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#381191").s().p("Ag3AdIBkhJIALAQIhkBJg");
	this.shape_50.setTransform(86.075,24.25);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#381191").s().p("AgzAYIBZhWIAOAPIhNBKIAXAYIgMALg");
	this.shape_51.setTransform(81.4,20.05);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#381191").s().p("AguArIBNhhIAQAMIhNBhg");
	this.shape_52.setTransform(77.925,15.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#381191").s().p("AgcA1QgRgJgFgRQgFgWARgcQAQgdAWgHQATgGASAKQALAHAEAGIgMANQgDgEgIgGQgbgPgWApQgMATABAPQABAMAKAFQAEADACAAIAQgfIgKgGIAIgNIAaAOIgfA5QgNgCgKgHg");
	this.shape_53.setTransform(72.9078,12.6625);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#381191").s().p("AgUA9QgRgGgEgUQgEgTAJgbQAJgcAPgNQAPgOARAGQASAGAEAUQADATgJAZQgQA1gcAAQgGAAgGgCgAgCgiQgIAKgGATQgPAsARAFIABAAQAPAGAOguQAPgrgRgFIgDAAQgHAAgGAKg");
	this.shape_54.setTransform(63.9526,8.3244);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#381191").s().p("AgGA/QgSgCgIgSQgIgSADgcQADgdAMgQQAMgRARACQATACAHATQAHARgCAbQgHA+ggAAIgFgBgAgKghQgFAMgCAUQgFAuASABQAQACAFgvQAFgtgRgCIgBAAQgIAAgGANg");
	this.shape_55.setTransform(54.8516,6.4038);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#381191").s().p("Ageg9IAUgBIAIBrIAggCIABAQIg0AEg");
	this.shape_56.setTransform(47.65,6.375);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#381191").s().p("AgPA0QgNgOgIgcQgHgbAFgTQAGgUASgFQARgFAOAQQAMANAHAbQAJAfgHAUQgFARgRAEIgBAAIgIABQgMAAgKgLgAgLgsQgRAEAMAsQAMAuAQgFQARgEgNgtQgKgpgOAAIgDABg");
	this.shape_57.setTransform(39.1245,7.6277);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#381191").s().p("AgRgeIgUAJIgIgQIA6gcIAHARIgUAJIAuBgIgSAJg");
	this.shape_58.setTransform(30.575,9.875);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#381191").s().p("Ag2g0IATgNIBaBYIgQALIgXgYIgUAPIAMAeIgPALgAgLAKIAQgKIgUgVIgTgUIgBAAg");
	this.shape_59.setTransform(26.5,14.65);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#381191").s().p("AhMgMIAOgQIBTAuIAAgBIgZgiIgegqIAOgQIBhBNIgMANIglgdQgWgRgMgMIAAAAQALAQANASIAdAqIgJAKIgsgXQgTgJgTgMIAAAAIBCBBIgMAMg");
	this.shape_60.setTransform(17.725,21.15);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#381191").s().p("AhGgFIAJgWQAMgTAMgEQAMgEAPAIQASAKgBAWQAJgIAWAGQAXAIAKABIgKARQgKgBgUgHQgVgHgGALIgDAEIAuAZIgJARgAgtgWIgDAGIAmATIACgDQAEgIgDgIQgDgHgIgFQgIgEgFAAQgJAAgFAKg");
	this.shape_61.setTransform(11.65,29.9083);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#381191").s().p("AhDAFIAQgvIAQAEIgJAfIAhAJIAJgbIAOAFIgJAbIAmAMIALgfIAQAFIgQAyg");
	this.shape_62.setTransform(8.275,36.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#381191").s().p("Ag+AZQgBgJABgNQACgUAMgKQARgPAiAEQAmAEANASQAMAPgDAWIgEASgAguACIAAAFIBcALIABgFQADgZgxgFIgOgBQgeAAgDAUg");
	this.shape_63.setTransform(6.331,45.3068);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#381191").s().p("AgRASQgHgIAAgKQAAgJAHgIQAIgHAJAAQAKAAAIAHQAHAIAAAJQAAAKgHAIQgIAHgKAAQgJAAgIgHg");
	this.shape_64.setTransform(89.725,68.275);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#381191").s().p("AgRASQgHgIAAgKQAAgJAHgIQAIgHAJAAQALAAAHAHQAHAIAAAJQAAAKgHAIQgHAHgLAAQgJAAgIgHg");
	this.shape_65.setTransform(11.375,68.275);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#381191").s().p("AhPEJQglgNgTAAQgcAAgWAVQAYggAzAFQAeAEBIARQBCAMAvgSQBAgaAxhUQA6hbgIgVQgYgEgYAjQgKARgPAjQgbAUgPANQgWAVgMAWQAOgmA0guQATg+AdgWQABgLgCgHQgZADgTAkQgLAUgMAiQgVAOgUARQAJgSAUgVQAJgmAMgXIABgVQAAgLgEgHQgQADgPAoIgQAxQgEgoAKggQAOgoAfACQAGADAEAJQAEAKAAANQAUgVAcACQANAHgCATQAPgFAOAEQAZAOgYA5QgKAZgbAsQgpBCggAaQglAfg4AHQgMACgNAAQg0AAhNgbgAgNC+QhAgbgbATQAWgbBgAeQArANAPAAQAXAAgDgYQgIgXgzgRIg9gQQgSgEgZgNQgigRgJgEQhBgTg0AwQgcAageAsQAxhhA3gVQA4gVBaAxIBcAbQA3AVAGAjQACAPgHANQgIAOgOADIgJABQgdAAg+gcgAglAxQgtgSgVgrQgXgwAVg4QAOgdAng6QAlg2AOgiQgOAxggA4QgjA9gFAPQgOAnANAkQAMAhAdASQAdATAfgEQAkgEAageQAtg6gthWIgphIQgXgrgFgdQAQAkAaApIApA9QApBAgOA4QgUA8gvAVQgVAKgWAAQgUAAgXgJgAhFhKQgDgRAEgQQAEgPALgNQALgNAPgEIgHAJIgKAPQgHALgEAOQgEAOAAANIABAPIAAADIABAEIABAEIAAAEQgKgLgDgRg");
	this.shape_66.setTransform(50.7068,46.661);

	var maskedShapeInstanceList = [this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0.1,100.9,99.30000000000001), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AqbHyIAAvjIU3AAIAAPjg");
	mask_4.setTransform(66.775,49.775);

	// Layer_3
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#28348A").s().p("AAbCvQAIgzAAgOIgBgPQgCgFAAgFIAAgKQACgeAagXQASgQAjgPQAIgFADgEIAYgYQAVgXAJACQAKACACANQABAHgGAMQgGAOgLAOIgdAcQgYAZABACIAJgHQAXgXARgOQATgUAJgUQAEgMAAgFQgBgNgLgKIgBgEQAAgGACgEIAOgzIACgHQADgJADgDQAGgGAHAGIADAEQADAIAAAKIgBAoQgBAegKAaIAAAAIgRApQgGAPgIANIgJAMIgoAtQgIAKgCANIgBAKQgCAbABAbgAh7B7IgBgKQgCgNgIgKIgogtIgJgMQgIgNgGgPIgRgpIAAAAQgKgagBgeIgBgoQAAgKADgIIADgEQAHgGAGAGQAFAFADAOIAOAzQADAHgCAHQgLAKgBANQAAAFAEAMQAJAUATAUIAOANIAaAYIAJAHQABgCgYgZIgdgcQgLgOgGgOQgGgMABgHQACgNAKgCQAJgCAVAXIAYAYQADAEAIAFQAjAPASAQQAaAXACAeIAAAKIgCAKIgBAPQAAAOAIAzIhgACQABgbgCgbgAAygxQgOgPAAgUQAAgUAOgPQAPgOAUAAQAUAAAOAOQAPAPAAAUQAAAUgPAPQgOAOgUAAQgVAAgOgOgAgwgjQgzgCgWgQQgUgOAFgTQAEgPALgQIAKgOQghAAgGgBQgGgBgDgFQgFgGABgJQABgIAGgGIAGgEQBHgGAIAGQAJAHAAAkIA8AAIAGgSQAHgTAFgEQAIgGAEgBQAGgCAGAEQATAKgJASQgFAJgJAiQgIAhAAAHQAAALgMAHQgQAKgmAAIgKAAg");
	this.shape_67.setTransform(67.325,33.8019);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#254394").ss(2,0,0,4).p("AAAEqQB8AABXhXQBXhXAAh8QAAh6hXhYQhXhXh8AAQh6AAhYBXQhXBYAAB6QAAB8BXBXQBYBXB6AAg");
	this.shape_68.setTransform(66.875,30.875);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#28348A").s().p("AgVAyIAAhjIApAAIAAAOIgYAAIAAAbIAWAAIAAAMIgWAAIAAAgIAaAAIAAAOg");
	this.shape_69.setTransform(125.1,94.45);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#28348A").s().p("AgUAyIAAhjIAPAAIAABVIAaAAIAAAOg");
	this.shape_70.setTransform(119.675,94.45);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#28348A").s().p("AAPAyIgFgaIgTAAIgFAaIgQAAIAXhjIARAAIAVBjgAgHALIAPAAIgHgsIgBAAg");
	this.shape_71.setTransform(113.275,94.45);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#28348A").s().p("AAMAyIAAgsIgXAAIAAAsIgQAAIAAhjIAQAAIAAApIAXAAIAAgpIAQAAIAABjg");
	this.shape_72.setTransform(106.325,94.45);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#28348A").s().p("AAPAyIgFgaIgTAAIgFAaIgQAAIAWhjIASAAIAVBjgAgHALIAPAAIgIgsIAAAAg");
	this.shape_73.setTransform(99.325,94.45);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#28348A").s().p("AANAyIgQgqQgHgSgDgOIgBAAQABAMAAAiIAAAcIgOAAIAAhjIAPAAIAPAqQAJAUADAMIABAAQgCgaAAgTIAAgdIAOAAIAABjg");
	this.shape_74.setTransform(92.35,94.45);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#28348A").s().p("AgVAyIAAhjIApAAIAAAOIgZAAIAAAbIAXAAIAAAMIgXAAIAAAgIAaAAIAAAOg");
	this.shape_75.setTransform(83.8,94.45);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#28348A").s().p("AgHAyIAAhUIgSAAIAAgPIAzAAIAAAPIgSAAIAABUg");
	this.shape_76.setTransform(77.95,94.45);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#28348A").s().p("AgaANIAAg+IAQAAIAABAQAAAWAKAAQAMAAAAgWIAAhAIAPAAIAAA+QAAAmgbgBQgaABAAgmg");
	this.shape_77.setTransform(71.575,94.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#28348A").s().p("AANAyIgQgqQgHgSgDgOIgBAAIABBKIgOAAIAAhjIAPAAIAQAqQAIAUADAMIgBgtIAAgdIAOAAIAABjg");
	this.shape_78.setTransform(64.35,94.45);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#28348A").s().p("AgHAyIAAhjIAPAAIAABjg");
	this.shape_79.setTransform(59,94.45);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#28348A").s().p("AgbAyIAAhiQAGgCALAAQAQAAAJAJQANALAAAdQAAAegMALQgLALgSAAgAgMglIAABKIAEAAQAUAAAAgmQAAgkgTAAg");
	this.shape_80.setTransform(54.075,94.475);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#28348A").s().p("AANAyIgQgqIgLggIABBKIgOAAIAAhjIAPAAIAQAqIALAgIABAAQgCgaAAgTIAAgdIAOAAIAABjg");
	this.shape_81.setTransform(46.675,94.45);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#28348A").s().p("AgaAZIAAg/IAQAAIAABBQAAAWAKAAQAMAAAAgWIAAhBIAPAAIAAA+QAAAmgbAAQgaAAAAglgAANgtQgDAAgCgCQgDgCAAgEQAAgIAIAAQAIAAAAAIQAAAIgIAAgAgUg1QAAgDADgDQACgCADAAQAIAAAAAIQAAAIgIAAQgIAAAAgIg");
	this.shape_82.setTransform(39.425,93.325);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#28348A").s().p("AgXAvIACgOQAGAEAKAAQAOAAAAgOQAAgJgMgJQgTgMAAgPQAAgMAIgIQAIgIAMAAQAJAAAGAEIgCANQgHgDgGAAQgGAAgDAEQgDADAAAFQAAAFADAEQADAEAHAFQARAKAAARQABAOgJAIQgJAIgMAAQgLAAgHgEg");
	this.shape_83.setTransform(33.05,94.45);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#28348A").s().p("AgHAyIAAhUIgSAAIAAgPIAzAAIAAAPIgSAAIAABUg");
	this.shape_84.setTransform(27.45,94.45);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#28348A").s().p("AgXAvIACgOQAHAEAJAAQAOAAAAgOQAAgJgMgJQgTgMAAgPQAAgMAIgIQAHgIANAAQAJAAAGAEIgDANQgFgDgHAAQgGAAgDAEQgEADAAAFQAAAFAEAEQADAEAGAFQASAKAAARQAAAOgIAIQgJAIgMAAQgMAAgGgEg");
	this.shape_85.setTransform(21.85,94.45);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#28348A").s().p("AAPAyIgFgaIgTAAIgFAaIgQAAIAXhjIARAAIAVBjgAgHALIAPAAIgHgsIgBAAg");
	this.shape_86.setTransform(15.625,94.45);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#28348A").s().p("AgIAyIgXhjIASAAIAJAtIAFAjIANhQIARAAIgWBjg");
	this.shape_87.setTransform(9.1,94.45);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#28348A").s().p("AgaANIAAg/IAPAAIAABBQAAAWALAAQALAAAAgWIAAhBIAQAAIAAA/QAAAmgbAAQgaAAAAgmg");
	this.shape_88.setTransform(130.825,76.675);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#28348A").s().p("AgHAyIAAhUIgSAAIAAgPIAzAAIAAAPIgSAAIAABUg");
	this.shape_89.setTransform(124.45,76.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#28348A").s().p("AgaANIAAg/IAQAAIAABBQAAAWAKAAQALAAAAgWIAAhBIAQAAIAAA/QAAAmgbAAQgaAAAAgmg");
	this.shape_90.setTransform(118.075,76.675);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#28348A").s().p("AAMAyIAAgsIgXAAIAAAsIgQAAIAAhjIAQAAIAAAqIAXAAIAAgqIAQAAIAABjg");
	this.shape_91.setTransform(110.875,76.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#28348A").s().p("AgWAlQgHgOAAgXQAAgWAIgOQAJgOANAAQAPAAAIAOQAGAOABAWQAAAzgfAAQgOAAgIgOgAgNAAQAAAlANAAIAAAAQAOAAAAglQAAglgOAAQgNAAAAAlg");
	this.shape_92.setTransform(103.75,76.625);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#28348A").s().p("AgCgRIAPgCQgHAVgHAQIgLACQAGgUAEgRg");
	this.shape_93.setTransform(96.25,81.55);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#28348A").s().p("AgVAyIAAhjIApAAIAAAOIgYAAIAAAcIAWAAIAAALIgWAAIAAAhIAaAAIAAANg");
	this.shape_94.setTransform(92.15,76.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#28348A").s().p("AANAyIgQgrQgHgSgEgMIAAAAQABARAAAcIAAAcIgOAAIAAhjIAPAAIAbBJIABAAQgCgYAAgVIAAgcIAOAAIAABjg");
	this.shape_95.setTransform(85.475,76.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#28348A").s().p("AANAyIgQgrQgIgSgDgMIABBJIgOAAIAAhjIAOAAIAQArIANAeIgCgtIAAgcIAOAAIAABjg");
	this.shape_96.setTransform(78.15,76.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#28348A").s().p("AgVAyIAAhjIApAAIAAAOIgYAAIAAAcIAWAAIAAALIgWAAIAAAhIAaAAIAAANg");
	this.shape_97.setTransform(71.9,76.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#28348A").s().p("AgVAyIAAhjIApAAIAAAOIgZAAIAAAcIAXAAIAAALIgXAAIAAAhIAaAAIAAANg");
	this.shape_98.setTransform(66.35,76.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#28348A").s().p("AgPApQgNgNAAgbQABgZAMgOQALgMAQAAQAIAAAHADIgDAOQgEgCgHAAQgYgBAAAlQAAAlAUAAIAFgBIAAgcIgLAAIAAgNIAaAAIAAA0QgIADgMAAQgPAAgJgKg");
	this.shape_99.setTransform(59.825,76.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#28348A").s().p("AALAyQgCgDgEgVQgBgRgLAAIgEAAIAAApIgQAAIAAhhQAIgCAMAAQAQAAAHAHQAIAHAAANQAAATgQAGIAAAAQAKAEADARQAFAYACACgAgLgkIAAAiIAFAAQAGAAAEgFQAEgFAAgIQAAgRgNAAg");
	this.shape_100.setTransform(53.55,76.575);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#28348A").s().p("AgUAyIAAhjIAnAAIAAAOIgYAAIAAAcIAXAAIAAALIgXAAIAAAhIAbAAIAAANg");
	this.shape_101.setTransform(47.4,76.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#28348A").s().p("AgVAyIAAhjIAQAAIAABWIAaAAIAAANg");
	this.shape_102.setTransform(41.95,76.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#28348A").s().p("AgVAyIAAhjIARAAIAABWIAaAAIAAANg");
	this.shape_103.setTransform(36.55,76.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#28348A").s().p("AAPAyIgFgaIgTAAIgFAaIgQAAIAWhjIASAAIAVBjgAgHAMIAPAAIgIgtIAAAAg");
	this.shape_104.setTransform(30.175,76.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#28348A").s().p("AAAAzQgOAAgIgOQgHgOAAgXQAAgWAIgOQAIgOAOAAQAdAAAAAyQAAAzgeAAgAgKgZQgDAKAAAPQAAAQADAKQAEALAGAAQAOAAAAglQAAglgOAAQgGAAgEAMg");
	this.shape_105.setTransform(23.425,76.625);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#28348A").s().p("AgZAyIAAhhQAKgCAJAAQAQAAAIAHQAIAIAAAOQAAAOgIAHQgJALgOAAIgEgBIAAAngAgJgkIAAAjIAEABQAPAAAAgTQAAgRgOAAg");
	this.shape_106.setTransform(17.025,76.575);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#28348A").s().p("AgaAZIAAg/IAQAAIAABBQAAAVAKABQALgBAAgVIAAhBIAQAAIAAA+QAAAmgbAAQgaAAAAglgAAFg1QAAgJAIAAQAIAAAAAJQAAAJgIgBQgIABAAgJgAgMgtQgIABAAgJQAAgJAIAAQAIAAAAAJQAAAJgIgBg");
	this.shape_107.setTransform(9.975,75.5);

	var maskedShapeInstanceList = [this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(6,0.1,127.6,99.5), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("Am+HxIAAvhIN8AAIAAPhg");
	mask_5.setTransform(44.65,49.7);

	// Layer_3
	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#28348A").s().p("AgHAyIAAhVIgSAAIAAgOIAzAAIAAAOIgSAAIAABVg");
	this.shape_108.setTransform(72.425,94.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#28348A").s().p("AgXAvIACgOQAHAEAJAAQAOAAgBgOQABgJgMgJQgUgMABgPQAAgMAIgIQAHgIANAAQAIAAAHADIgDAOQgGgDgGAAQgNAAAAAMQAAAFAEAFQADADAHAFQARAKAAASQAAANgIAIQgJAIgMAAQgMAAgGgEg");
	this.shape_109.setTransform(66.85,94.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#28348A").s().p("AAPAyIgFgaIgTAAIgFAaIgQAAIAXhjIARAAIAVBjgAgHAMIAPAAIgIgtg");
	this.shape_110.setTransform(60.625,94.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#28348A").s().p("AgIAyIgXhjIASAAIAIAtIAFAjIABAAQACgVADgOIAIgtIARAAIgWBjg");
	this.shape_111.setTransform(54.1,94.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#28348A").s().p("AgVAyIAAhjIApAAIAAANIgYAAIAAAcIAXAAIAAANIgXAAIAAAfIAZAAIAAAOg");
	this.shape_112.setTransform(48.25,94.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#28348A").s().p("AAPA9IgFgaIgTAAIgFAaIgQAAIAWhjIASAAIAVBjgAgHAXIAPAAIgIgsIAAAAgAAOgrQgDAAgCgDQgDgCAAgEQAAgJAIABQAIgBAAAJQAAAJgIAAgAgQguQgDgCAAgEQAAgDADgDQACgCADAAQAIgBAAAJQAAAEgCACQgDADgDAAQgDAAgCgDg");
	this.shape_113.setTransform(41.875,93.15);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#28348A").s().p("AgZAyIAAhhQAHgCAMAAQAQAAAIAHQAIAIAAAOQAAANgHAIQgKAKgOAAIgEAAIAAAngAgJgkIAAAjIAEAAQAPAAAAgSQAAgRgOAAg");
	this.shape_114.setTransform(35.65,94.275);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#28348A").s().p("AgbANIAAg/IAQAAIAABCQAAAVALAAQAMAAAAgVIAAhCIAPAAIAAA+QAAAmgbAAQgaAAgBglg");
	this.shape_115.setTransform(28.6,94.35);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#28348A").s().p("AgUAyIAAhjIAQAAIAABVIAZAAIAAAOg");
	this.shape_116.setTransform(22.625,94.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#28348A").s().p("AgUAyIAAhjIAnAAIAAANIgYAAIAAAcIAXAAIAAANIgXAAIAAAfIAaAAIAAAOg");
	this.shape_117.setTransform(17.05,94.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#28348A").s().p("AgHAyIAAhUIgSAAIAAgPIAzAAIAAAPIgSAAIAABUg");
	this.shape_118.setTransform(86.7,76.45);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#28348A").s().p("AgXAvIACgOQAHAEAJAAQAOABAAgOQAAgKgNgJQgSgLAAgQQAAgMAIgIQAHgIANAAQAJAAAGAEIgDANQgFgDgHAAQgGAAgDAEQgEADABAFQgBAFAEAEQADAEAGAFQATALgBAQQABAOgJAIQgJAIgMAAQgNAAgFgEg");
	this.shape_119.setTransform(81.1,76.45);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#28348A").s().p("AgVAyIAAhjIApAAIAAAOIgYAAIAAAbIAWAAIAAAMIgWAAIAAAgIAZAAIAAAOg");
	this.shape_120.setTransform(75.7,76.45);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#28348A").s().p("AgXAvIACgOQAHAEAJAAQAOABAAgOQAAgKgMgJQgTgLAAgQQAAgMAHgIQAIgIANAAQAIAAAHAEIgDANQgFgDgHAAQgGAAgDAEQgEADAAAFQAAAFAEAEQACAEAIAFQARALAAAQQAAAOgIAIQgJAIgMAAQgMAAgGgEg");
	this.shape_121.setTransform(69.875,76.45);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#28348A").s().p("AgUAyIAAhjIAnAAIAAAOIgYAAIAAAbIAXAAIAAAMIgXAAIAAAgIAbAAIAAAOg");
	this.shape_122.setTransform(64.5,76.45);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#28348A").s().p("AAaAyIgDhKIgBAAIgRBJIgKAAIgKgnQgFgXgCgLIAAAAIgDBKIgOAAIAGhjIARAAIAKApQAFATABAPIABAAIAQhLIARAAIAGBjg");
	this.shape_123.setTransform(56.825,76.45);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#28348A").s().p("AgHAyIAAhjIAPAAIAABjg");
	this.shape_124.setTransform(50.55,76.45);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#28348A").s().p("AgXAvIACgOQAHAEAJAAQAGAAAEgDQAEgFAAgFQAAgKgMgJQgTgLAAgQQAAgMAHgIQAIgIANAAQAIAAAHAEIgDANQgFgDgHAAQgMAAAAAMQAAAFADAEQADAEAHAFQARALAAAQQAAAOgIAIQgJAIgMAAQgMAAgGgEg");
	this.shape_125.setTransform(46.075,76.45);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#28348A").s().p("AgVAyIAAhjIApAAIAAAOIgZAAIAAAbIAXAAIAAAMIgXAAIAAAgIAaAAIAAAOg");
	this.shape_126.setTransform(40.7,76.45);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#28348A").s().p("AgXAvIACgOQAHAEAJAAQAOABAAgOQAAgKgMgJQgTgLAAgQQAAgMAIgIQAHgIANAAQAJAAAGAEIgDANQgFgDgHAAQgGAAgDAEQgEADABAFQgBAFAEAEQACAEAIAFQARALAAAQQABAOgJAIQgJAIgMAAQgNAAgFgEg");
	this.shape_127.setTransform(32.5,76.45);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#28348A").s().p("AgVAyIAAhjIApAAIAAAOIgZAAIAAAbIAYAAIAAAMIgYAAIAAAgIAaAAIAAAOg");
	this.shape_128.setTransform(27.1,76.45);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#28348A").s().p("AgHAyIAAhUIgSAAIAAgPIAzAAIAAAPIgSAAIAABUg");
	this.shape_129.setTransform(21.3,76.45);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#28348A").s().p("AAPAyIgFgaIgTAAIgFAaIgQAAIAWhjIASAAIAVBjgAgHALIAPAAIgIgsIAAAAg");
	this.shape_130.setTransform(15.125,76.45);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#28348A").s().p("AgUAyIAAhjIAQAAIAABWIAZAAIAAANg");
	this.shape_131.setTransform(9.425,76.45);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#28348A").s().p("AAPAyIgFgaIgTAAIgGAaIgPAAIAWhjIASAAIAVBjgAgHALIAPAAIgIgsIAAAAg");
	this.shape_132.setTransform(3.075,76.45);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AhXCwQgWgLgLgUQgMgTgDggQgBgUAAhKQAAhPACgZQADgYAMgSQARgdAlgIQARgFAwAAQAkAAASADQAUACAOAIQAWALAMATQALAUACAgQACAUAABJQAABRgCAXQgDAZgLARQgTAegkAIQgSAFgwAAQg9AAgagNgAgqh9QgLADgHAIQgHAIgCAKQgCALgCAWIAAA/IABBQQADAhASAJQAPAGAjAAQAeAAANgDQAOgEAGgJQAGgKACgKQADgMAAgYIABg7QAAg7gCgUQgCgTgHgLQgGgJgOgDQgPgEggAAQgaAAgMADg");
	this.shape_133.setTransform(33,30.975);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgYBzIAAhbIhWAAIAAgvIBWAAIAAhbIAyAAIAABbIBVAAIAAAvIhVAAIAABbg");
	this.shape_134.setTransform(60.525,30.725);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#8AB7E9").s().p("AinEzQg6AAgpgpQgogoAAg6IAAlPQAAg6AogpQApgoA6AAIFPAAQA6AAAoAoQApApAAA6IAAFPQAAA6gpAoQgoApg6AAg");
	this.shape_135.setTransform(44.075,30.7);

	var maskedShapeInstanceList = [this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0,89.3,99.4), null);


(lib.Symbol22copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgGBZQgfgGgTgbQgHgKgIgWQgIgWgBgKQgBgTAHgRQAIgSAOgLQAOgMAUgDQASgDARAGQALADANAKQAJAGAHAKQAHAKAIAVQAKAegBARQgDAigaATQgTAPgYAAQgIAAgHgBg");
	var mask_graphics_1 = new cjs.Graphics().p("AAFCBQgegGgTgbQgHgKgIgWQgIgWgBgLIAAgKQgJgNgHgSQgNgmAJgcQAHgYATgPQAVgOAYAAQARAAAPAIQAQAIAKAOQAIAMALAfQAGAVABAJIABAIIABACQAHAKAIAUQAKAfgBARQgDAigaATQgTAPgYAAQgIAAgIgBg");
	var mask_graphics_2 = new cjs.Graphics().p("AAXC3QgegFgTgcQgHgKgIgWQgIgWgBgLIAAgJQgJgOgHgTQgJgZABgVQgHgFgGgHQgJgKgFgMQgCgHgCgPQgFgkABgSQABgNADgJQAEgMAKgMQAMgOATgGQASgHASADQATADAOAMQAQAMAGARQAGANACAVQADAagBASQAKAHAIAKQAIALALAfQAGAUABAJIABAIIABACQAHAKAIAVQAKAfgBASQgDAhgaAUQgUAPgXAAQgIAAgIgCg");
	var mask_graphics_3 = new cjs.Graphics().p("AAfDtQgfgGgSgbQgHgKgIgWQgIgWgBgLIAAgKQgJgNgHgTQgJgaABgVQgHgFgGgIQgJgJgFgNQgCgHgCgOQgFgkABgRIAAgFQgHgIgDgJQgDgHgCgPQgCgOAAgdQAAgTACgJQAEgTAMgPQAMgQASgIQARgHAUACQAUABAPALQAQALAIASQAJASgBATIgDAUIgBAcIgBAIQAHAIADAJQAGANACAWQAEAZgCASQALAHAHAJQAIAMALAfQAGAVABAJIABAIIABACQAHAKAIAVQAKAfgBARQgDAigaATQgTAQgYAAQgIAAgIgCg");
	var mask_graphics_4 = new cjs.Graphics().p("AAnEiQgggFgRgcQgHgKgIgWQgIgWgBgLIAAgJQgKgNgGgUQgJgZABgWQgHgFgHgHQgJgKgEgMQgDgHgCgPQgFgkABgRIABgFQgHgIgEgIQgDgHgCgPQgBgOAAgdQAAgTACgJIACgKIgBgBQgNgQgEgTQgCgJAAgbIABgbQADgRALgPQALgPAQgIQAQgIASABQATAAAPAJQAQAIAJAQQAKAPACASIABAaIABAWQAAAJgBAHQAHAJAFAKQAJASgCATIgCAUIgCAcIAAAIQAGAIAEAJQAFANADAUQADAagBASQAKAHAHAKQAJALAKAfQAHAVABAJIAAAIIACACQAHAKAHAVQAKAfgBASQgCAhgaAUQgUAPgXAAQgIAAgIgCg");
	var mask_graphics_5 = new cjs.Graphics().p("AAnFWQgggFgRgcQgHgKgIgWQgIgWgBgLIAAgJQgKgOgGgTQgJgZABgWQgHgFgHgHQgJgKgEgMQgDgHgCgPQgFgkABgSIABgFQgHgIgEgIQgDgHgCgPQgBgNAAgdQAAgTACgJIACgKIgBgBQgNgQgEgTQgCgJAAgbIABgbQACgMAGgKQgKgVACgWIADgRIACgWQADgeAbgTQAOgJASgDQARgDAQAGQAQAFAMAMQANAMAFAQQAFAPAAAbQAAAYgFAOQgCAHgFAIQAGANABANIABAaIABAWQAAAIgBAIQAHAIAFALQAJASgCATIgCAUIgCAcIAAAGQAGAIAEAKQAFANADAVQADAagBASQAKAHAHAKQAJALAKAfQAHAVABAJIAAAIIACACQAHAKAHAVQAKAfgBASQgCAhgaAUQgUAPgXAAQgIAAgIgCg");
	var mask_graphics_6 = new cjs.Graphics().p("AAnGeQgfgGgSgbQgHgKgIgWQgIgWgBgLIAAgKQgJgNgHgTQgJgaABgVQgHgGgGgHQgJgJgFgNQgCgHgCgPQgFgkABgRIAAgFQgHgJgDgIQgDgHgCgPQgCgOAAgdQAAgTACgJIADgJIgBgBQgOgPgDgTQgCgKAAgaIABgbQABgMAGgLQgKgVADgVIADgSIABgVQABgJADgIQgEgGgCgHQgEgOAAgSQAAgfAJguQADgPAEgJQAGgOAMgKQAMgLASgFQARgEARADQAXAFARATQARAUABAYQABAMgDASIgFAdIgBAUIgCAUIgDAMIAFAMQAFAOAAAcQAAAYgFANQgDAIgFAIQAGAMACANIAAAbIACAVQAAAJgCAIQAHAIAFAKQAJASgBASIgDAUIgBAcIgBAIQAHAIADAJQAGANACAWQAEAZgCASQALAHAHAKQAIAMALAfQAGAVABAJIABAIIABACQAHAKAIAVQAKAfgBARQgDAigaATQgTAPgYAAQgIAAgIgBg");
	var mask_graphics_7 = new cjs.Graphics().p("AAnHWQgfgGgSgbQgHgKgIgWQgIgWgBgLIAAgKQgJgNgHgTQgJgaABgVQgHgGgGgHQgJgJgFgNQgCgHgCgPQgFgkABgRIAAgFQgHgJgDgIQgDgHgCgPQgCgOAAgdQAAgTACgJIADgKIgBgBQgOgPgDgTQgCgKAAgZIABgbQABgMAGgLQgKgVADgVIADgSIABgVQABgJADgIQgEgGgCgHQgEgOAAgSQAAgfAJguQADgPAEgJQAGgOAMgKIAHgGIgDgMQgCgLAAgLQAAgWAEgMQACgHAFgJQATgfAjgHQAkgHAcAWQANALAHAQQAHARgBAQQAAAMgHAWIgIAVQgJASgPAKQAEAKAAALQABAMgDASIgFAdIgBAUIgCAUIgDAMIAFAMQAFAOAAAcQAAAYgFANQgDAIgFAIQAGAMACANIAAAbIACAUQAAAJgCAIQAHAIAFAKQAJASgBATIgDAUIgBAcIgBAIQAHAIADAJQAGANACAWQAEAZgCASQALAHAHAKQAIAMALAfQAGAVABAJIABAIIABACQAHAKAIAVQAKAfgBARQgDAigaATQgTAPgYAAQgIAAgIgBg");
	var mask_graphics_8 = new cjs.Graphics().p("AAnILQgfgFgSgcQgHgKgIgWQgIgWgBgLIAAgJQgJgOgHgTQgJgZABgWQgHgFgGgHQgJgKgFgMQgCgHgCgPQgFgkABgSIAAgFQgHgIgDgIQgDgHgCgPQgCgOAAgdQAAgTACgJIADgKIgBgBQgOgQgDgTQgCgJAAgbIABgbQABgLAGgKQgKgVADgWIADgRIABgWQABgIADgIQgEgHgCgHQgEgOAAgSQAAgfAJguQADgOAEgKQAGgNAMgLIAHgFIgDgNQgCgLAAgLQAAgVAEgNIAFgLQgFgJgCgKQgEgWAIgUIAKgVIAJgYQAIgTASgMQARgNAUgBQAUgCATAJQATAKAKARQAPAXgEAcQgDAMgHARIgMAdIAEAIQAHAQgBARQAAALgHAWIgIAVQgJASgPAKQAEALAAALQABALgDASIgFAeIgBAUIgCATIgDANIAFALQAFAPAAAbQAAAYgFAOQgDAHgFAIQAGAMACANIAAAaIACAWQAAAIgCAIQAHAIAFALQAJASgBATIgDAUIgBAcIgBAHQAHAIADAKQAGANACAVQAEAZgCATQALAHAHAKQAIALALAfQAGAVABAJIABAIIABACQAHAKAIAVQAKAfgBASQgDAhgaAUQgTAPgYAAQgIAAgIgCg");
	var mask_graphics_9 = new cjs.Graphics().p("AAgIxQgfgGgSgbQgHgKgIgWQgIgWgBgLIAAgKQgJgNgHgTQgJgaABgVQgHgFgGgIQgJgJgFgNQgCgHgCgPQgFgkABgRIAAgFQgHgIgDgIQgDgIgCgPQgCgOAAgdQAAgTACgJIADgJIgBgCQgOgPgDgTQgCgKAAgaIABgbQABgMAGgLQgKgTADgWIADgSIABgVQABgJADgHQgEgHgCgHQgEgOAAgSQAAgfAJguQADgOAEgKQAGgOAMgKIAHgGIgDgMQgCgLAAgLQAAgWAEgMIAFgLQgFgJgCgLQgEgVAIgUIAKgVIAJgYQAHgPAMgLQADgNAHgNQAGgJAPgQQAUgUAOgKQAWgNAWgCQAVgBATALQATALAKASQAKASgBAWQgCAWgMARQgGAJgNAMIgVATIgLAIQgDALgGAOIgMAdIAEAHQAHARgBAQQAAAMgHAWIgIAVQgJASgPAKQAEAKAAAMQABALgDASIgFAdIgBAUIgCAUIgDAMIAFAMQAFAOAAAcQAAAYgFAMQgDAIgFAIQAGAMACAOIAAAaIACAVQAAAJgCAIQAHAIAFAKQAJASgBATIgDAUIgBAcIgBAIQAHAIADAJQAGANACAWQAEAZgCASQALAHAHALQAIALALAfQAGAVABAJIABAIIABACQAHAKAIAVQAKAfgBASQgDAhgaATQgTAQgYAAQgIAAgIgCg");
	var mask_graphics_10 = new cjs.Graphics().p("AgeJZQgfgGgTgbQgHgKgIgWQgIgWgBgLIAAgKQgJgNgHgTQgJgaACgVQgIgGgGgHQgJgJgFgNQgCgHgCgPQgFgkABgRIAAgFQgHgJgDgIQgDgHgCgPQgCgOAAgdQAAgTACgJIADgKIgBgBQgOgPgDgTQgCgKAAgaIABgbQACgMAFgLQgKgVADgVIADgRIABgVQABgJADgIQgEgGgCgHQgEgOAAgSQAAgfAJguQADgPAEgJQAGgOAMgKIAHgGIgDgMQgCgLAAgLQAAgWAEgMIAFgLQgFgJgCgLQgEgWAIgTIAKgVIAJgZQAHgPAMgLQADgNAHgMQAGgJAPgQQAUgUAPgKQAQgJAPgEQACgNAHgLQAHgNAPgOQATgSAPgHQALgEAVgBQATgBAXADQAZAEANAHQAQAJAKAPQALAQABASQACASgIASQgHARgPALQgVAQgfABQgKAAgFABIgNAHQgIAFgKACQgDAQgKAOQgGAJgNAMIgVASIgLAIQgDAMgFAOIgLAdIADAHQAHARgBAQQAAAMgHAWIgIAVQgJASgPAKQAEAKAAALQABAMgDASIgFAdIgBAUIgCAUIgDAMIAFAMQAFAOAAAbQAAAYgFANQgDAIgFAIQAGAMACANIAAAbIACAVQAAAJgCAIQAHAIAFAKQAJASgBATIgDAUIgBAcIgBAIQAHAIADAJQAGANACAWQAEAZgCASQALAHAGAKQAIAMALAfQAGAVABAJIABAIIABACQAHAKAIAVQAKAfgBARQgDAigaATQgTAPgXAAQgIAAgIgBg");
	var mask_graphics_11 = new cjs.Graphics().p("AhNJrQgfgGgTgbQgHgKgIgWQgIgWgBgLIAAgKQgJgNgHgTQgIgaABgVQgIgGgGgHQgJgJgFgNQgCgHgCgPQgFgkABgRIAAgFQgHgJgDgIQgDgHgCgPQgCgOAAgdQAAgTACgJIADgKIgBgBQgOgPgDgTQgCgKAAgaIABgbQACgMAFgLQgKgVADgVIADgSIABgUQABgJADgIQgDgGgDgHQgEgOAAgSQAAgfAJguQADgPAEgJQAGgOAMgKIAHgGIgDgMQgCgLAAgLQAAgWAEgMIAFgLQgFgJgCgLQgEgWAIgTIAKgVIAJgZQAHgPAMgLQADgNAHgMQAGgJAPgQQAUgUAPgKQAQgJAPgEQACgNAHgLQAHgNAQgOQATgSAPgHQAKgEAVgBIAZAAIACgDQAMgSAWgJQAWgJAWAFQAOADAVAMQARAKAHAHQANAMAQAeQASAfABAUQABASgHARQgIAQgOALQgXARggAAQgZgBgTgLQgJgFgHgHQgOAFgRABQgKAAgFABIgNAHQgIAEgKADQgDAQgKAOQgGAJgMAMIgVASIgLAIQgDALgGAPIgLAdIADAHQAHARgBAQQAAAMgHAWIgIAVQgJASgPAKQAEAKAAALQABAMgDASIgFAdIgBAUIgCAUIgDAMIAFAMQAFAOAAAbQAAAYgFANQgDAIgFAIQAGAMACANIAAAbIACAVQAAAJgCAIQAIAIAEAKQAJASgBATIgDAUIgBAcIgBAIQAHAIADAJQAGANACAWQAEAZgCASQALAHAHAKQAIAMALAfQAGAVABAJIABAIIABACQAHAKAHAVQAKAfgBARQgDAigZATQgTAPgYAAQgHAAgJgBg");
	var mask_graphics_12 = new cjs.Graphics().p("Ah0JrQgfgGgTgbQgHgKgIgWQgIgWgBgLIAAgKQgJgNgHgTQgJgaACgVQgIgGgGgHQgJgJgFgNQgCgHgCgPQgFgkABgRIAAgFQgHgJgDgIQgDgHgCgPQgCgOAAgdQAAgTACgJIADgKIgBgBQgOgPgDgTQgCgKAAgaIABgbQACgMAFgLQgKgVADgVIADgSIABgUQABgJADgIQgEgGgCgHQgEgOAAgSQAAgfAJguQADgPAEgJQAGgOAMgKIAHgGIgDgMQgCgLAAgLQAAgWAEgMIAFgLQgFgJgCgLQgEgWAIgTIAKgVIAJgZQAHgPAMgLQADgNAHgMQAGgJAPgQQAUgUAPgKQAQgJAPgEQACgNAHgLQAHgNAQgOQATgSAPgHQALgEAVgBIAYAAIACgDQAMgSAWgJQAWgJAWAFQAOADAVAMQARAKAHAHQALAJANAWQAUgCATAKQATAJAMAQQAMAQAMAhQAGARACANQAFAkgaAaQgZAbgkgCQgkgBgYgbQgLgNgHgRIgBAAQgZgBgTgLQgJgFgHgHQgOAFgRABQgKAAgFABIgNAHQgIAEgJADQgDAQgKAOQgGAJgNAMIgVASIgLAIQgDALgGAPIgLAdIADAHQAHARgBAQQAAAMgHAWIgIAVQgJASgPAKQAEAKAAALQABAMgDASIgFAdIgBAUIgCAUIgDAMIAFAMQAFAOAAAbQAAAYgFANQgDAIgFAIQAGAMACANIAAAbIACAVQAAAJgCAIQAHAIAFAKQAJASgBATIgDAUIgBAcIgBAIQAHAIADAJQAGANACAWQAEAZgCASQALAHAHAKQAIAMALAfQAGAVABAJIABAIIABACQAHAKAIAVQAKAfgBARQgDAigaATQgTAPgYAAQgIAAgIgBg");
	var mask_graphics_13 = new cjs.Graphics().p("AiYJrQgfgGgTgbQgHgKgIgWQgIgWgBgLIAAgKQgJgNgHgTQgIgaABgVQgIgGgGgHQgJgJgFgNQgCgHgCgPQgFgkABgRIAAgFQgHgJgDgIQgDgHgCgPQgCgOAAgdQAAgTACgJIADgKIgBgBQgOgPgDgTQgCgKAAgaIABgbQACgMAFgLQgKgVADgVIADgSIABgUQABgJADgIQgDgGgDgHQgEgOAAgSQAAgfAJguQADgPAEgJQAGgOAMgKIAHgGIgDgMQgCgLAAgLQAAgWAEgMIAFgLQgFgJgCgLQgEgWAIgTIAKgVIAJgZQAHgPAMgLQADgNAHgMQAGgJAPgQQAUgUAPgKQAQgJAPgEQACgNAHgLQAHgNAQgOQATgSAPgHQALgEAVgBIAZAAIACgDQAMgSAVgJQAWgJAWAFQAOADAVAMQARAKAHAHQALAJANAWQAUgCATAKQATAJAMAQQAMAQAMAhQAGARACANQAFAkgaAaQgZAbgkgCQgkgBgYgbQgLgNgHgRIgBAAQgZgBgTgLQgJgFgHgHQgOAFgQABQgKAAgFABIgNAHQgIAEgKADQgDAQgKAOQgGAJgNAMIgVASIgLAIQgDALgGAPIgLAdIADAHQAHARgBAQQAAAMgHAWIgIAVQgJASgPAKQAEAKAAALQABAMgDASIgFAdIgBAUIgCAUIgDAMIAFAMQAFAOAAAbQAAAYgFANQgDAIgFAIQAGAMACANIAAAbIACAVQAAAJgCAIQAIAIAEAKQAJASgBATIgDAUIgBAcIgBAIQAHAIADAJQAGANACAWQAEAZgCASQALAHAHAKQAIAMALAfQAGAVABAJIABAIIABACQAHAKAIAVQAKAfgBARQgDAigaATQgTAPgYAAQgHAAgJgBgACmhBQgSgHgMgPQgNgQgEgTQgDgTAGgTQAGgTANgNQAGgGAHgFIgBgBQgEgYALgUQAGgNAPgPQAUgTAUgHQAggKAeASQAdARAFAiQADAOgDANQgFAUgSAVQgJAKgJAHQAFAXgJATQgHATgUARQgTAPgTAEIgOABQgOAAgNgFg");
	var mask_graphics_14 = new cjs.Graphics().p("AiYJrQgfgGgTgbQgHgKgIgWQgIgWgBgLIAAgKQgJgNgHgTQgIgaABgVQgIgGgGgHQgJgJgFgNQgCgHgCgPQgFgkABgRIAAgFQgHgJgDgIQgDgHgCgPQgCgOAAgdQAAgTACgJIADgKIgBgBQgOgPgDgTQgCgKAAgaIABgbQACgMAFgLQgKgVADgVIADgSIABgUQABgJADgIQgDgGgDgHQgEgOAAgSQAAgfAJguQADgPAEgJQAGgOAMgKIAHgGIgDgMQgCgLAAgLQAAgWAEgMIAFgLQgFgJgCgLQgEgWAIgTIAKgVIAJgZQAHgPAMgLQADgNAHgMQAGgJAPgQQAUgUAPgKQAQgJAPgEQACgNAHgLQAHgNAQgOQATgSAPgHQALgEAVgBIAZAAIACgDQAMgSAVgJQAWgJAWAFQAOADAVAMQARAKAHAHQALAJANAWQAUgCATAKQATAJAMAQQAMAQAMAhQAGARACANQAFAkgaAaQgZAbgkgCQgkgBgYgbQgLgNgHgRIgBAAQgZgBgTgLQgJgFgHgHQgOAFgQABQgKAAgFABIgNAHQgIAEgKADQgDAQgKAOQgGAJgNAMIgVASIgLAIQgDALgGAPIgLAdIADAHQAHARgBAQQAAAMgHAWIgIAVQgJASgPAKQAEAKAAALQABAMgDASIgFAdIgBAUIgCAUIgDAMIAFAMQAFAOAAAbQAAAYgFANQgDAIgFAIQAGAMACANIAAAbIACAVQAAAJgCAIQAIAIAEAKQAJASgBATIgDAUIgBAcIgBAIQAHAIADAJQAGANACAWQAEAZgCASQALAHAHAKQAIAMALAfQAGAVABAJIABAIIABACQAHAKAIAVQAKAfgBARQgDAigaATQgTAPgYAAQgHAAgJgBgACBARQgSgGgNgMQgOgOgEgTQgDgMAAgMQADgkAagWQAGgFAHgEQgDgRAGgSQAGgTANgNQAGgGAHgFIgBgBQgEgYALgUQAGgNAPgPQAUgTAUgHQAggKAeASQAdARAFAiQADAOgDANQgFAUgSAVQgJAKgJAHQAFAXgJATQgHATgUARQgJAHgJAEIABAGQABATgIASQgHASgPAKQgOAMgTAEQgIACgIAAQgKAAgLgDg");
	var mask_graphics_15 = new cjs.Graphics().p("AiYJrQgfgGgTgbQgHgKgIgWQgIgWgBgLIAAgKQgJgNgHgTQgIgaABgVQgIgGgGgHQgJgJgFgNQgCgHgCgPQgFgkABgRIAAgFQgHgJgDgIQgDgHgCgPQgCgOAAgdQAAgTACgJIADgKIgBgBQgOgPgDgTQgCgKAAgaIABgbQACgMAFgLQgKgVADgVIADgSIABgUQABgJADgIQgDgGgDgHQgEgOAAgSQAAgfAJguQADgPAEgJQAGgOAMgKIAHgGIgDgMQgCgLAAgLQAAgWAEgMIAFgLQgFgJgCgLQgEgWAIgTIAKgVIAJgZQAHgPAMgLQADgNAHgMQAGgJAPgQQAUgUAPgKQAQgJAPgEQACgNAHgLQAHgNAQgOQATgSAPgHQALgEAVgBIAZAAIACgDQAMgSAVgJQAWgJAWAFQAOADAVAMQARAKAHAHQALAJANAWQAUgCATAKQATAJAMAQQAMAQAMAhQAGARACANQAFAkgaAaQgZAbgkgCQgkgBgYgbQgLgNgHgRIgBAAQgZgBgTgLQgJgFgHgHQgOAFgQABQgKAAgFABIgNAHQgIAEgKADQgDAQgKAOQgGAJgNAMIgVASIgLAIQgDALgGAPIgLAdIADAHQAHARgBAQQAAAMgHAWIgIAVQgJASgPAKQAEAKAAALQABAMgDASIgFAdIgBAUIgCAUIgDAMIAFAMQAFAOAAAbQAAAYgFANQgDAIgFAIQAGAMACANIAAAbIACAVQAAAJgCAIQAIAIAEAKQAJASgBATIgDAUIgBAcIgBAIQAHAIADAJQAGANACAWQAEAZgCASQALAHAHAKQAIAMALAfQAGAVABAJIABAIIABACQAHAKAIAVQAKAfgBARQgDAigaATQgTAPgYAAQgHAAgJgBgAAbBVQgZgXABgjQADgiAagVIASgNIATgQIAJgGQAEghAYgUQAGgFAHgEQgDgRAGgSQAGgTANgNQAGgGAHgFIgBgBQgEgYALgUQAGgNAPgPQAUgTAUgHQAggKAeASQAdARAFAiQADAOgDANQgFAUgSAVQgJAKgJAHQAFAXgJATQgHATgUARQgJAHgJAEIABAGQABATgIASQgHASgPAKIgMAIIgCAJQgCALgLATQgKAPgJAIQgNANgUAJQgTAJgPACIgJABQgdAAgVgVg");
	var mask_graphics_16 = new cjs.Graphics().p("AiYJrQgfgGgTgbQgHgKgIgWQgIgWgBgLIAAgKQgJgNgHgTQgIgaABgVQgIgGgGgHQgJgJgFgNQgCgHgCgPQgFgkABgRIAAgFQgHgJgDgIQgDgHgCgPQgCgOAAgdQAAgTACgJIADgKIgBgBQgOgPgDgTQgCgKAAgaIABgbQACgMAFgLQgKgVADgVIADgSIABgUQABgJADgIQgDgGgDgHQgEgOAAgSQAAgfAJguQADgPAEgJQAGgOAMgKIAHgGIgDgMQgCgLAAgLQAAgWAEgMIAFgLQgFgJgCgLQgEgWAIgTIAKgVIAJgZQAHgPAMgLQADgNAHgMQAGgJAPgQQAUgUAPgKQAQgJAPgEQACgNAHgLQAHgNAQgOQATgSAPgHQALgEAVgBIAZAAIACgDQAMgSAVgJQAWgJAWAFQAOADAVAMQARAKAHAHQALAJANAWQAUgCATAKQATAJAMAQQAMAQAMAhQAGARACANQAFAkgaAaQgZAbgkgCQgkgBgYgbQgLgNgHgRIgBAAQgZgBgTgLQgJgFgHgHQgOAFgQABQgKAAgFABIgNAHQgIAEgKADQgDAQgKAOQgGAJgNAMIgVASIgLAIQgDALgGAPIgLAdIADAHQAHARgBAQQAAAMgHAWIgIAVQgJASgPAKQAEAKAAALQABAMgDASIgFAdIgBAUIgCAUIgDAMIAFAMQAFAOAAAbQAAAYgFANQgDAIgFAIQAGAMACANIAAAbIACAVQAAAJgCAIQAIAIAEAKQAJASgBATIgDAUIgBAcIgBAIQAHAIADAJQAGANACAWQAEAZgCASQALAHAHAKQAIAMALAfQAGAVABAJIABAIIABACQAHAKAIAVQAKAfgBARQgDAigaATQgTAPgYAAQgHAAgJgBgAgOCbQgXgEgUgLQgegRgSggQgSgggBgjIAAgBQgIgPgBgPQAAgeAXgiIAVgbIAWgbIATgYQAMgOAKgIQARgLAUgBQAVgBARAJQASAKAKASQALASAAATQAAAJgCAJQAHgOANgKQAGgFAHgEQgDgRAGgSQAGgTANgNQAGgGAHgFIgBgBQgEgYALgUQAGgNAPgPQAUgTAUgHQAggKAeASQAdARAFAiQADAOgDANQgFAUgSAVQgJAKgJAHQAFAXgJATQgHATgUARQgJAHgJAEIABAGQABATgIASQgHASgPAKIgMAIIgCAJQgCALgLATQgKAPgJAIQgNANgUAJIgLAFIgBACQgGATgPANQgWAUgpADIgQABQgLAAgLgCgABJg8IAFgDIABgJIgGAMg");
	var mask_graphics_17 = new cjs.Graphics().p("AiYJrQgfgGgTgbQgHgKgIgWQgIgWgBgLIAAgKQgJgNgHgTQgIgaABgVQgIgGgGgHQgJgJgFgNQgCgHgCgPQgFgkABgRIAAgFQgHgJgDgIQgDgHgCgPQgCgOAAgdQAAgTACgJIADgKIgBgBQgOgPgDgTQgCgKAAgaIABgbQACgMAFgLQgKgVADgVIADgSIABgUQABgJADgIQgDgGgDgHQgEgOAAgSQAAgfAJguQADgPAEgJQAGgOAMgKIAHgGIgDgMQgCgLAAgLQAAgWAEgMIAFgLQgFgJgCgLQgEgWAIgTIAKgVIAJgZQAHgPAMgLQADgNAHgMQAGgJAPgQQAUgUAPgKQAQgJAPgEQACgNAHgLQAHgNAQgOQATgSAPgHQALgEAVgBIAZAAIACgDQAMgSAVgJQAWgJAWAFQAOADAVAMQARAKAHAHQALAJANAWQAUgCATAKQATAJAMAQQAMAQAMAhQAGARACANQAFAkgaAaQgZAbgkgCQgkgBgYgbQgLgNgHgRIgBAAQgZgBgTgLQgJgFgHgHQgOAFgQABQgKAAgFABIgNAHQgIAEgKADQgDAQgKAOQgGAJgNAMIgVASIgLAIQgDALgGAPIgLAdIADAHQAHARgBAQQAAAMgHAWIgIAVQgJASgPAKQAEAKAAALQABAMgDASIgFAdIgBAUIgCAUIgDAMIAFAMQAFAOAAAbQAAAYgFANQgDAIgFAIQAGAMACANIAAAbIACAVQAAAJgCAIQAIAIAEAKQAJASgBATIgDAUIgBAcIgBAIQAHAIADAJQAGANACAWQAEAZgCASQALAHAHAKQAIAMALAfQAGAVABAJIABAIIABACQAHAKAIAVQAKAfgBARQgDAigaATQgTAPgYAAQgHAAgJgBgAgOCbQgXgEgUgLQgegRgSggQgSgggBgjIAAgBQgIgPgBgPQAAgeAXgiIAVgbIAWgbIAIgKQgCgXAKgTQAHgMAVgVQAfgjARgMQAigYAfADQAUACAQANQARAMAHATIADAJQABgOAGgLQAGgNAPgPQAUgTAUgHQAggKAeASQAdARAFAiQADAOgDANQgFAUgSAVQgJAKgJAHQAFAXgJATQgHATgUARQgJAHgJAEIABAGQABATgIASQgHASgPAKIgMAIIgCAJQgCALgLATQgKAPgJAIQgNANgUAJIgLAFIgBACQgGATgPANQgWAUgpADIgQABQgLAAgLgCgABJg8IAFgDIABgJIgGAMgABlh8IgNANIAAABQAAAJgCAJQAHgOANgKQAGgFAHgEIgBgNIgRAOg");
	var mask_graphics_18 = new cjs.Graphics().p("AiYJrQgfgGgTgbQgHgKgIgWQgIgWgBgLIAAgKQgJgNgHgTQgIgaABgVQgIgGgGgHQgJgJgFgNQgCgHgCgPQgFgkABgRIAAgFQgHgJgDgIQgDgHgCgPQgCgOAAgdQAAgTACgJIADgKIgBgBQgOgPgDgTQgCgKAAgaIABgbQACgMAFgLQgKgVADgVIADgSIABgUQABgJADgIQgDgGgDgHQgEgOAAgSQAAgfAJguQADgPAEgJQAGgOAMgKIAHgGIgDgMQgCgLAAgLQAAgWAEgMIAFgLQgFgJgCgLQgEgWAIgTIAKgVIAJgZQAHgPAMgLQADgNAHgMQAGgJAPgQQAUgUAPgKQAQgJAPgEQACgNAHgLQAHgNAQgOQATgSAPgHQALgEAVgBIAZAAIACgDQAMgSAVgJQAWgJAWAFQAOADAVAMQARAKAHAHQALAJANAWQAUgCATAKQATAJAMAQQAMAQAMAhQAGARACANQAFAkgaAaQgTAUgZAEQAHADAGAEQAUAMAJAVIAFAMQAcgHAbARQAdARAFAiQADAOgDANQgFAUgSAVQgJAKgJAHQAFAXgJATQgHATgUARQgJAHgJAEIABAGQABATgIASQgHASgPAKIgMAIIgCAJQgCALgLATQgKAPgJAIQgNANgUAJIgLAFIgBACQgGATgPANQgWAUgpADQgWACgQgDQgXgEgUgLQgegRgSggQgSgggBgjIAAgBQgIgPgBgPQAAgeAXgiIAVgbIAWgbIAIgKQgCgXAKgTQAHgMAVgVQAZgcAQgOQACgSAKgPQAIgLATgPQAPgMAYgPQAagRAUgEQgVgGgRgSQgLgNgHgRIgBAAQgZgBgTgLQgJgFgHgHQgOAFgQABQgKAAgFABIgNAHQgIAEgKADQgDAQgKAOQgGAJgNAMIgVASIgLAIQgDALgGAPIgLAdIADAHQAHARgBAQQAAAMgHAWIgIAVQgJASgPAKQAEAKAAALQABAMgDASIgFAdIgBAUIgCAUIgDAMIAFAMQAFAOAAAbQAAAYgFANQgDAIgFAIQAGAMACANIAAAbIACAVQAAAJgCAIQAIAIAEAKQAJASgBATIgDAUIgBAcIgBAIQAHAIADAJQAGANACAWQAEAZgCASQALAHAHAKQAIAMALAfQAGAVABAJIABAIIABACQAHAKAIAVQAKAfgBARQgDAigaATQgTAPgYAAQgHAAgJgBgABJg8IAFgDIABgJIgGAMgABlh8IgNANIAAABQAAAJgCAJQAHgOANgKQAGgFAHgEIgBgNIgRAOg");
	var mask_graphics_19 = new cjs.Graphics().p("Ai5JrQgggGgSgbQgHgKgIgWQgIgWgBgLIgBgKQgJgNgGgTQgJgaABgVQgIgGgGgHQgJgJgEgNQgDgHgCgPQgFgkABgRIABgFQgIgJgDgIQgDgHgCgPQgBgOAAgdQAAgTACgJIACgKIgBgBQgNgPgEgTQgCgKAAgaIABgbQACgMAFgLQgKgVADgVIADgSIACgUQAAgJADgIQgDgGgCgHQgEgOAAgSQAAgfAJguQADgPADgJQAGgOAMgKIAHgGIgDgMQgBgLAAgLQAAgWAEgMIAEgLQgEgJgCgLQgEgWAIgTIAKgVIAJgZQAGgPANgLQACgNAIgMQAFgJAPgQQAUgUAQgKQAPgJAPgEQACgNAHgLQAIgNAPgOQATgSAPgHQAMgEAUgBIAaAAIACgDQAMgSAWgJQAVgJAVAFQAPADAUAMQARAKAIAHQAKAJANAWQAUgCATAKQATAJANAQQALAQAMAhQAGARACANQACALgCALIAZAAIAlAAQAUABAPAGQAVAJAMAVQANAUgDAXQgCAXgPASQgQATgWAFQgJADgPAAQAIANADAQQACAOgDANQgEAUgTAVQgJAKgJAHQAFAXgIATQgHATgVARQgJAHgJAEIABAGQABATgHASQgIASgOAKIgNAIIgBAJQgDALgLATQgKAPgIAIQgNANgUAJIgMAFIAAACQgGATgQANQgWAUgoADQgVACgSgDQgXgEgUgLQgegRgSggQgSggAAgjIAAgBQgJgPAAgPQgBgeAXgiIAWgbIAWgbIAHgKQgCgXALgTQAHgMAUgVQAagcAQgOQACgSALgPQAGgLATgPQAQgMAYgPQANgJALgFIACgDIAEgKQgMgHgKgLQgMgNgGgRIgBAAQgagBgTgLQgIgFgGgHQgPAFgRABQgJAAgFABIgNAHQgJAEgKADQgDAQgJAOQgHAJgNAMIgVASIgLAIQgDALgFAPIgMAdIAEAHQAHARgBAQQgBAMgHAWIgIAVQgJASgPAKQAEAKABALQAAAMgDASIgEAdIgBAUIgCAUIgEAMIAFAMQAFAOAAAbQAAAYgFANQgDAIgEAIQAGAMABANIABAbIABAVQAAAJgCAIQAIAIAFAKQAJASgCATIgCAUIgCAcIAAAIQAGAIAEAJQAFANADAWQADAZgBASQAKAHAHAKQAJAMAKAfQAHAVABAJIAAAIIACACQAHAKAHAVQAKAfgBARQgCAigaATQgUAPgYAAQgHAAgIgBgAAng8IAFgDIACgJIgHAMgABEh8IgNANIAAABQAAAJgCAJQAHgOAMgKQAGgFAHgEIgBgNIgQAOg");
	var mask_graphics_20 = new cjs.Graphics().p("AkJJrQgfgGgTgbQgHgKgIgWQgIgWgBgLIAAgKQgJgNgHgTQgJgaABgVQgHgGgGgHQgJgJgFgNQgCgHgCgPQgFgkABgRIAAgFQgHgJgDgIQgDgHgCgPQgCgOAAgdQAAgTACgJIADgKIgBgBQgOgPgDgTQgCgKAAgaIABgbQABgMAGgLQgKgVADgVIADgSIABgUQABgJADgIQgEgGgCgHQgEgOAAgSQAAgfAJguQADgPAEgJQAGgOAMgKIAHgGIgDgMQgCgLAAgLQAAgWAEgMIAFgLQgFgJgCgLQgEgWAIgTIAKgVIAJgZQAGgPANgLQADgNAHgMQAGgJAPgQQAUgUAPgKQAPgJAQgEQACgNAHgLQAHgNAQgOQATgSAPgHQALgEAVgBIAZAAIACgDQAMgSAWgJQAWgJAWAFQAOADAVAMQAQAKAHAHQALAJAMAWQAUgCAUAKQATAJAMAQQAMAQAMAhQAGARACANQABALgBALIAZAAIAkAAQAQAAAMAEQAOgHAQAAQAPAAAiALQAyASAZAOQAaANAMAPQAXAcgGAjQgDARgKAOQgLAOgOAIQghARgggPIgRgKIgRgLQgMgGgcgIQgPgFgLgFIgLAEQgJADgOAAQAHANADAQQADAOgDANQgFAUgSAVQgJAKgJAHQAFAXgJATQgHATgUARQgJAHgJAEIABAGQABATgIASQgHASgPAKIgMAIIgCAJQgCALgLATQgKAPgJAIQgNANgUAJIgKAFIgBACQgGATgPANQgWAUgpADQgWACgRgDQgXgEgUgLQgegRgSggQgSgggBgjIAAgBQgIgPgBgPQAAgeAXgiIAVgbIAWgbIAIgKQgDgXALgTQAHgMAVgVQAZgcARgOQABgSALgPQAIgLATgPQAPgMAYgPQANgJALgFIABgDIAFgKQgNgHgJgLQgLgNgHgRIgBAAQgZgBgTgLQgJgFgHgHQgOAFgRABQgKAAgFABIgNAHQgJAEgJADQgDAQgKAOQgGAJgNAMIgVASIgLAIQgDALgGAPIgMAdIAEAHQAHARgBAQQAAAMgHAWIgIAVQgJASgPAKQADAKABALQABAMgDASIgFAdIgBAUIgCAUIgDAMIAFAMQAFAOAAAbQAAAYgFANQgDAIgFAIQAGAMACANIAAAbIACAVQAAAJgCAIQAHAIAFAKQAJASgBATIgDAUIgBAcIgBAIQAGAIAEAJQAGANACAWQADAZgBASQAKAHAIAKQAIAMALAfQAGAVABAJIABAIIABACQAHAKAIAVQAKAfgBARQgDAigaATQgUAPgXAAQgIAAgIgBgAgng8IAFgDIABgJIgGAMgAgLh8IgNANIAAABQAAAJgCAJQAHgOANgKQAGgFAGgEIgBgNIgQAOg");
	var mask_graphics_21 = new cjs.Graphics().p("AkwJrQgfgGgTgbQgHgKgIgWQgIgWgBgLIAAgKQgJgNgHgTQgJgaABgVQgHgGgGgHQgJgJgFgNQgCgHgCgPQgFgkABgRIAAgFQgHgJgDgIQgDgHgCgPQgCgOAAgdQAAgTACgJIADgKIgBgBQgOgPgDgTQgCgKAAgaIABgbQABgMAGgLQgKgVADgVIADgSIABgUQABgJADgIQgEgGgCgHQgEgOAAgSQAAgfAJguQADgPAEgJQAGgOAMgKIAHgGIgDgMQgCgLAAgLQAAgWAEgMIAFgLQgFgJgCgLQgEgWAIgTIAKgVIAJgZQAHgPAMgLQADgNAHgMQAGgJAPgQQAUgUAPgKQAPgJAQgEQACgNAHgLQAHgNAQgOQATgSAPgHQALgEAVgBIAZAAIACgDQAMgSAWgJQAWgJAWAFQAOADAVAMQARAKAHAHQALAJAMAWQATgCAUAKQATAJAMAQQAMAQAMAhQAGARACANQABALgBALIAZAAIAkAAQAQAAAMAEQAOgHAQAAQAPAAAiALQAyASAZAOQAaANAMAPQAJALAFAMIACACIAZAVIATAPQALAJAGAJQAKAOAFAWQACAMABAdQACAhgDAOQgGAYgVAQQgVARgZgBQgYgBgVgQQgUgRgGgYQgDgMAAgSQAAgHgCgDQgBgDgIgGQgYgQgKgRIgGgMIgQgKQgMgGgcgIQgPgFgLgFIgLAEQgJADgOAAQAHANADAQQADAOgDANQgFAUgSAVQgJAKgJAHQAFAXgJATQgHATgUARQgJAHgJAEIABAGQABATgIASQgHASgPAKIgMAIIgCAJQgCALgLATQgKAPgJAIQgMANgUAJIgLAFIgBACQgGATgPANQgWAUgpADQgWACgRgDQgXgEgUgLQgegRgSggQgSgggBgjIAAgBQgIgPgBgPQAAgeAXgiIAVgbIAWgbIAIgKQgDgXALgTQAHgMAVgVQAZgcARgOQACgSAKgPQAIgLATgPQAPgMAYgPQANgJAMgFIABgDIAFgKQgNgHgKgLQgLgNgHgRIgBAAQgZgBgTgLQgJgFgHgHQgOAFgRABQgKAAgFABIgNAHQgJAEgJADQgDAQgKAOQgGAJgNAMIgVASIgLAIQgDALgGAPIgMAdIAEAHQAHARgBAQQAAAMgHAWIgIAVQgJASgPAKQADAKABALQABAMgDASIgFAdIgBAUIgCAUIgDAMIAFAMQAFAOAAAbQAAAYgFANQgDAIgFAIQAGAMACANIAAAbIACAVQAAAJgCAIQAHAIAFAKQAJASgBATIgDAUIgBAcIgBAIQAGAIAEAJQAGANACAWQADAZgBASQAKAHAIAKQAIAMALAfQAGAVABAJIABAIIABACQAHAKAIAVQAKAfgBARQgDAigaATQgUAPgXAAQgIAAgIgBgAhOg8IAFgDIABgJIgGAMgAgyh8IgNANIAAABQAAAJgCAJQAHgOANgKQAGgFAHgEIgBgNIgRAOg");
	var mask_graphics_22 = new cjs.Graphics().p("Ak3JrQgfgGgTgbQgHgKgIgWQgIgWgBgLIAAgKQgJgNgHgTQgJgaABgVQgHgGgGgHQgJgJgFgNQgCgHgCgPQgFgkABgRIAAgFQgHgJgDgIQgDgHgCgPQgCgOAAgdQAAgTACgJIADgKIgBgBQgOgPgDgTQgCgKAAgaIABgbQABgMAGgLQgKgVADgVIADgSIABgUQABgJADgIQgEgGgCgHQgEgOAAgSQAAgfAJguQADgPAEgJQAGgOAMgKIAHgGIgDgMQgCgLAAgLQAAgWAEgMIAFgLQgFgJgCgLQgEgWAIgTIAKgVIAJgZQAGgPANgLQADgNAHgMQAGgJAPgQQAUgUAPgKQAPgJAQgEQACgNAHgLQAHgNAQgOQATgSAPgHQALgEAVgBIAZAAIACgDQAMgSAWgJQAWgJAWAFQAOADAVAMQARAKAHAHQALAJAMAWQATgCAUAKQATAJAMAQQAMAQAMAhQAGARACANQABALgBALIAZAAIAkAAQAQAAAMAEQAOgHAQAAQAPAAAiALQAyASAZAOQAaANAMAPQAJALAFAMIACACIAZAVIATAPQALAJAGAJQAKAOAFAWQACAMABAdIABAQQAJAVADAeQAGA2gLAiIgDAKQAAARgEAUQgHAggOAdQgFAMgKARQgLARgIAIQgQAQgYAFQgZAEgVgKQgVgKgLgWQgMgWAEgXQACgPAMgXQAOgaADgLQACgFADgRIAEgSIABgGQAGgcAAgOQgBgHgDgMIgFgRIgDgLQgDgMAAgSQAAgHgCgDQgBgDgIgGQgYgQgKgRIgGgMIgQgKQgMgGgcgIQgPgFgLgFIgLAEQgJADgOAAQAHANADAQQADAOgDANQgFAUgSAVQgJAKgJAHQAFAXgJATQgHATgUARQgJAHgJAEIABAGQABATgIASQgHASgPAKIgMAIIgCAJQgCALgLATQgKAPgIAIQgNANgUAJIgLAFIgBACQgGATgPANQgWAUgpADQgWACgRgDQgXgEgUgLQgegRgSggQgSgggBgjIAAgBQgIgPgBgPQAAgeAXgiIAVgbIAWgbIAIgKQgDgXALgTQAHgMAVgVQAZgcARgOQACgSAKgPQAIgLATgPQAPgMAYgPQANgJAMgFIABgDIAFgKQgNgHgKgLQgLgNgHgRIgBAAQgZgBgTgLQgJgFgHgHQgOAFgRABQgKAAgFABIgNAHQgJAEgJADQgDAQgKAOQgGAJgNAMIgVASIgLAIQgDALgGAPIgMAdIAEAHQAHARgBAQQAAAMgHAWIgIAVQgJASgPAKQADAKABALQABAMgDASIgFAdIgBAUIgCAUIgDAMIAFAMQAFAOAAAbQAAAYgFANQgDAIgFAIQAGAMACANIAAAbIACAVQAAAJgCAIQAHAIAFAKQAJASgBATIgDAUIgBAcIgBAIQAGAIAEAJQAGANACAWQADAZgBASQAKAHAIAKQAIAMALAfQAGAVABAJIABAIIABACQAHAKAIAVQAKAfgBARQgDAigaATQgUAPgXAAQgIAAgIgBgAhVg8IAFgDIABgJIgGAMgAg5h8IgNANIAAABQAAAJgCAJQAHgOANgKQAGgFAHgEIgBgNIgRAOg");
	var mask_graphics_23 = new cjs.Graphics().p("Ak3JrQgfgGgTgbQgHgKgIgWQgIgWgBgLIAAgKQgJgNgHgTQgJgaABgVQgHgGgGgHQgJgJgFgNQgCgHgCgPQgFgkABgRIAAgFQgHgJgDgIQgDgHgCgPQgCgOAAgdQAAgTACgJIADgKIgBgBQgOgPgDgTQgCgKAAgaIABgbQABgMAGgLQgKgVADgVIADgSIABgUQABgJADgIQgEgGgCgHQgEgOAAgSQAAgfAJguQADgPAEgJQAGgOAMgKIAHgGIgDgMQgCgLAAgLQAAgWAEgMIAFgLQgFgJgCgLQgEgWAIgTIAKgVIAJgZQAGgPANgLQADgNAHgMQAGgJAPgQQAUgUAPgKQAPgJAQgEQACgNAHgLQAHgNAQgOQATgSAPgHQALgEAVgBIAZAAIACgDQAMgSAWgJQAWgJAWAFQAOADAVAMQARAKAHAHQALAJAMAWQATgCAUAKQATAJAMAQQAMAQAMAhQAGARACANQABALgBALIAZAAIAkAAQAQAAAMAEQAOgHAQAAQAPAAAiALQAyASAZAOQAaANAMAPQAJALAFAMIACACIAZAVIATAPQALAJAGAJQAKAOAFAWQACAMABAdIABAQQAJAVADAeQAGA2gLAiIgDAKQAAARgEAUQgHAggOAdIgEAHQADAKAAAKQgBAOgLAbIgSAnQgNAXgLAMQgKALgYARQgaAQgQADQgQAEgRgFQgRgEgNgLQgNgLgHgRQgGgQABgRQABgRAIgPQAJgPAOgKIANgJQAIgFAEgGIAFgKQgGgQADgRQACgPAMgXQAOgaADgLQACgFADgRIAEgSIABgGQAGgcAAgOQgBgHgDgMIgFgRIgDgLQgDgMAAgSQAAgHgCgDQgBgDgIgGQgYgQgKgRIgGgMIgQgKQgMgGgcgIQgPgFgLgFIgLAEQgJADgOAAQAHANADAQQADAOgDANQgFAUgSAVQgJAKgJAHQAFAXgJATQgHATgUARQgJAHgJAEIABAGQABATgIASQgHASgPAKIgMAIIgCAJQgCALgLATQgKAPgIAIQgNANgUAJIgLAFIgBACQgGATgPANQgWAUgpADQgWACgRgDQgXgEgUgLQgegRgSggQgSgggBgjIAAgBQgIgPgBgPQAAgeAXgiIAVgbIAWgbIAIgKQgDgXALgTQAHgMAVgVQAZgcARgOQACgSAKgPQAIgLATgPQAPgMAYgPQANgJAMgFIABgDIAFgKQgNgHgKgLQgLgNgHgRIgBAAQgZgBgTgLQgJgFgHgHQgOAFgRABQgKAAgFABIgNAHQgJAEgJADQgDAQgKAOQgGAJgNAMIgVASIgLAIQgDALgGAPIgMAdIAEAHQAHARgBAQQAAAMgHAWIgIAVQgJASgPAKQADAKABALQABAMgDASIgFAdIgBAUIgCAUIgDAMIAFAMQAFAOAAAbQAAAYgFANQgDAIgFAIQAGAMACANIAAAbIACAVQAAAJgCAIQAHAIAFAKQAJASgBATIgDAUIgBAcIgBAIQAGAIAEAJQAGANACAWQADAZgBASQAKAHAIAKQAIAMALAfQAGAVABAJIABAIIABACQAHAKAIAVQAKAfgBARQgDAigaATQgUAPgXAAQgIAAgIgBgAhVg8IAFgDIABgJIgGAMgAg5h8IgNANIAAABQAAAJgCAJQAHgOANgKQAGgFAHgEIgBgNIgRAOg");
	var mask_graphics_24 = new cjs.Graphics().p("Ak3JrQgfgGgTgbQgHgKgIgWQgIgWgBgLIAAgKQgJgNgHgTQgJgaABgVQgHgGgGgHQgJgJgFgNQgCgHgCgPQgFgkABgRIAAgFQgHgJgDgIQgDgHgCgPQgCgOAAgdQAAgTACgJIADgKIgBgBQgOgPgDgTQgCgKAAgaIABgbQABgMAGgLQgKgVADgVIADgSIABgUQABgJADgIQgEgGgCgHQgEgOAAgSQAAgfAJguQADgPAEgJQAGgOAMgKIAHgGIgDgMQgCgLAAgLQAAgWAEgMIAFgLQgFgJgCgLQgEgWAIgTIAKgVIAJgZQAGgPANgLQADgNAHgMQAGgJAPgQQAUgUAPgKQAPgJAQgEQACgNAHgLQAHgNAQgOQATgSAPgHQALgEAVgBIAZAAIACgDQAMgSAWgJQAWgJAWAFQAOADAVAMQARAKAHAHQALAJAMAWQATgCAUAKQATAJAMAQQAMAQAMAhQAGARACANQABALgBALIAZAAIAkAAQAQAAAMAEQAOgHAQAAQAPAAAiALQAyASAZAOQAaANAMAPQAJALAFAMIACACIAZAVIATAPQALAJAGAJQAKAOAFAWQACAMABAdIABAQQAJAVADAeQAGA2gLAiIgDAKQAAARgEAUQgHAggOAdIgEAHQADAKAAAKQgBAOgLAbIgSAnQgNAXgLAMQgIAIgPALQABASgHAQIgNAWIgJAQQgGAJgFAGQgKAMgSAJIggAOIgHACQgHAUgYAZQgYAZgUAKQgbAPgcgDQgVgCgRgPQgSgOgGgVQgGgUAGgWQAGgWARgOIAbgTQAPgPAIgHIAGgFQAFgRAMgNQANgOAUgHQAOgFAEgDQADgDAGgKIABgDIAAgOQABgRAIgPQAJgPAOgKIANgJQAIgFAEgGIAFgKQgGgQADgRQACgPAMgXQAOgaADgLQACgFADgRIAEgSIABgGQAGgcAAgOQgBgHgDgMIgFgRIgDgLQgDgMAAgSQAAgHgCgDQgBgDgIgGQgYgQgKgRIgGgMIgQgKQgMgGgcgIQgPgFgLgFIgLAEQgJADgOAAQAHANADAQQADAOgDANQgFAUgSAVQgJAKgJAHQAFAXgJATQgHATgUARQgJAHgJAEIABAGQABATgIASQgHASgPAKIgMAIIgCAJQgCALgLATQgKAPgIAIQgNANgUAJIgLAFIgBACQgGATgPANQgWAUgpADQgWACgRgDQgXgEgUgLQgegRgSggQgSgggBgjIAAgBQgIgPgBgPQAAgeAXgiIAVgbIAWgbIAIgKQgDgXALgTQAHgMAVgVQAZgcARgOQACgSAKgPQAIgLATgPQAPgMAYgPQANgJAMgFIABgDIAFgKQgNgHgKgLQgLgNgHgRIgBAAQgZgBgTgLQgJgFgHgHQgOAFgRABQgKAAgFABIgNAHQgJAEgJADQgDAQgKAOQgGAJgNAMIgVASIgLAIQgDALgGAPIgMAdIAEAHQAHARgBAQQAAAMgHAWIgIAVQgJASgPAKQADAKABALQABAMgDASIgFAdIgBAUIgCAUIgDAMIAFAMQAFAOAAAbQAAAYgFANQgDAIgFAIQAGAMACANIAAAbIACAVQAAAJgCAIQAHAIAFAKQAJASgBATIgDAUIgBAcIgBAIQAGAIAEAJQAGANACAWQADAZgBASQAKAHAIAKQAIAMALAfQAGAVABAJIABAIIABACQAHAKAIAVQAKAfgBARQgDAigaATQgUAPgXAAQgIAAgIgBgAhVg8IAFgDIABgJIgGAMgAg5h8IgNANIAAABQAAAJgCAJQAHgOANgKQAGgFAHgEIgBgNIgRAOg");
	var mask_graphics_25 = new cjs.Graphics().p("Ak3JrQgfgGgTgbQgHgKgIgWQgIgWgBgLIAAgKQgJgNgHgTQgJgaABgVQgHgGgGgHQgJgJgFgNQgCgHgCgPQgFgkABgRIAAgFQgHgJgDgIQgDgHgCgPQgCgOAAgdQAAgTACgJIADgKIgBgBQgOgPgDgTQgCgKAAgaIABgbQABgMAGgLQgKgVADgVIADgSIABgUQABgJADgIQgEgGgCgHQgEgOAAgSQAAgfAJguQADgPAEgJQAGgOAMgKIAHgGIgDgMQgCgLAAgLQAAgWAEgMIAFgLQgFgJgCgLQgEgWAIgTIAKgVIAJgZQAGgPANgLQADgNAHgMQAGgJAPgQQAUgUAPgKQAPgJAQgEQACgNAHgLQAHgNAQgOQATgSAPgHQALgEAVgBIAZAAIACgDQAMgSAWgJQAWgJAWAFQAOADAVAMQARAKAHAHQALAJAMAWQATgCAUAKQATAJAMAQQAMAQAMAhQAGARACANQABALgBALIAZAAIAkAAQAQAAAMAEQAOgHAQAAQAPAAAiALQAyASAZAOQAaANAMAPQAJALAFAMIACACIAZAVIATAPQALAJAGAJQAKAOAFAWQACAMABAdIABAQQAJAVADAeQAGA2gLAiIgDAKQAAARgEAUQgHAggOAdIgEAHQADAKAAAKQgBAOgLAbIgSAnQgNAXgLAMQgIAIgPALQABASgHAQIgNAWIgJAQQgGAJgFAGQgKAMgSAJIggAOIgHACQgHAUgYAZQgYAZgUAKQgUALgTABIgDACQhNAvhKASQgWAFgMAAQgZgBgUgSQgUgRgFgZQgEgYAMgYQAMgXAWgLQAJgEAggIQApgKArgbQAigWAPgEIANgDIABAAQAPgPAIgHIAGgFQAFgRAMgNQANgOAUgHQAOgFAEgDQADgDAGgKIABgDIAAgOQABgRAIgPQAJgPAOgKIANgJQAIgFAEgGIAFgKQgGgQADgRQACgPAMgXQAOgaADgLQACgFADgRIAEgSIABgGQAGgcAAgOQgBgHgDgMIgFgRIgDgLQgDgMAAgSQAAgHgCgDQgBgDgIgGQgYgQgKgRIgGgMIgQgKQgMgGgcgIQgPgFgLgFIgLAEQgJADgOAAQAHANADAQQADAOgDANQgFAUgSAVQgJAKgJAHQAFAXgJATQgHATgUARQgJAHgJAEIABAGQABATgIASQgHASgPAKIgMAIIgCAJQgCALgLATQgKAPgIAIQgNANgUAJIgLAFIgBACQgGATgPANQgWAUgpADQgWACgRgDQgXgEgUgLQgegRgSggQgSgggBgjIAAgBQgIgPgBgPQAAgeAXgiIAVgbIAWgbIAIgKQgDgXALgTQAHgMAVgVQAZgcARgOQACgSAKgPQAIgLATgPQAPgMAYgPQANgJAMgFIABgDIAFgKQgNgHgKgLQgLgNgHgRIgBAAQgZgBgTgLQgJgFgHgHQgOAFgRABQgKAAgFABIgNAHQgJAEgJADQgDAQgKAOQgGAJgNAMIgVASIgLAIQgDALgGAPIgMAdIAEAHQAHARgBAQQAAAMgHAWIgIAVQgJASgPAKQADAKABALQABAMgDASIgFAdIgBAUIgCAUIgDAMIAFAMQAFAOAAAbQAAAYgFANQgDAIgFAIQAGAMACANIAAAbIACAVQAAAJgCAIQAHAIAFAKQAJASgBATIgDAUIgBAcIgBAIQAGAIAEAJQAGANACAWQADAZgBASQAKAHAIAKQAIAMALAfQAGAVABAJIABAIIABACQAHAKAIAVQAKAfgBARQgDAigaATQgUAPgXAAQgIAAgIgBgAhVg8IAFgDIABgJIgGAMgAg5h8IgNANIAAABQAAAJgCAJQAHgOANgKQAGgFAHgEIgBgNIgRAOg");
	var mask_graphics_134 = new cjs.Graphics().p("Ak3JrQgfgGgTgbQgHgKgIgWQgIgWgBgLIAAgKQgJgNgHgTQgJgaABgVQgHgGgGgHQgJgJgFgNQgCgHgCgPQgFgkABgRIAAgFQgHgJgDgIQgDgHgCgPQgCgOAAgdQAAgTACgJIADgKIgBgBQgOgPgDgTQgCgKAAgaIABgbQABgMAGgLQgKgVADgVIADgSIABgUQABgJADgIQgEgGgCgHQgEgOAAgSQAAgfAJguQADgPAEgJQAGgOAMgKIAHgGIgDgMQgCgLAAgLQAAgWAEgMIAFgLQgFgJgCgLQgEgWAIgTIAKgVIAJgZQAGgPANgLQADgNAHgMQAGgJAPgQQAUgUAPgKQAPgJAQgEQACgNAHgLQAHgNAQgOQATgSAPgHQALgEAVgBIAZAAIACgDQAMgSAWgJQAWgJAWAFQAOADAVAMQARAKAHAHQALAJAMAWQATgCAUAKQATAJAMAQQAMAQAMAhQAGARACANQABALgBALIAZAAIAkAAQAQAAAMAEQAOgHAQAAQAPAAAiALQAyASAZAOQAaANAMAPQAJALAFAMIACACIAZAVIATAPQALAJAGAJQAKAOAFAWQACAMABAdIABAQQAJAVADAeQAGA2gLAiIgDAKQAAARgEAUQgHAggOAdIgEAHQADAKAAAKQgBAOgLAbIgSAnQgNAXgLAMQgIAIgPALQABASgHAQIgNAWIgJAQQgGAJgFAGQgKAMgSAJIggAOIgHACQgHAUgYAZQgYAZgUAKQgUALgTABIgDACQhNAvhKASQgWAFgMAAQgZgBgUgSQgUgRgFgZQgEgYAMgYQAMgXAWgLQAJgEAggIQApgKArgbQAigWAPgEIANgDIABAAQAPgPAIgHIAGgFQAFgRAMgNQANgOAUgHQAOgFAEgDQADgDAGgKIABgDIAAgOQABgRAIgPQAJgPAOgKIANgJQAIgFAEgGIAFgKQgGgQADgRQACgPAMgXQAOgaADgLQACgFADgRIAEgSIABgGQAGgcAAgOQgBgHgDgMIgFgRIgDgLQgDgMAAgSQAAgHgCgDQgBgDgIgGQgYgQgKgRIgGgMIgQgKQgMgGgcgIQgPgFgLgFIgLAEQgJADgOAAQAHANADAQQADAOgDANQgFAUgSAVQgJAKgJAHQAFAXgJATQgHATgUARQgJAHgJAEIABAGQABATgIASQgHASgPAKIgMAIIgCAJQgCALgLATQgKAPgIAIQgNANgUAJIgLAFIgBACQgGATgPANQgWAUgpADQgWACgRgDQgXgEgUgLQgegRgSggQgSgggBgjIAAgBQgIgPgBgPQAAgeAXgiIAVgbIAWgbIAIgKQgDgXALgTQAHgMAVgVQAZgcARgOQACgSAKgPQAIgLATgPQAPgMAYgPQANgJAMgFIABgDIAFgKQgNgHgKgLQgLgNgHgRIgBAAQgZgBgTgLQgJgFgHgHQgOAFgRABQgKAAgFABIgNAHQgJAEgJADQgDAQgKAOQgGAJgNAMIgVASIgLAIQgDALgGAPIgMAdIAEAHQAHARgBAQQAAAMgHAWIgIAVQgJASgPAKQADAKABALQABAMgDASIgFAdIgBAUIgCAUIgDAMIAFAMQAFAOAAAbQAAAYgFANQgDAIgFAIQAGAMACANIAAAbIACAVQAAAJgCAIQAHAIAFAKQAJASgBATIgDAUIgBAcIgBAIQAGAIAEAJQAGANACAWQADAZgBASQAKAHAIAKQAIAMALAfQAGAVABAJIABAIIABACQAHAKAIAVQAKAfgBARQgDAigaATQgUAPgXAAQgIAAgIgBgAhVg8IAFgDIABgJIgGAMgAg5h8IgNANIAAABQAAAJgCAJQAHgOANgKQAGgFAHgEIgBgNIgRAOg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:15.267,y:116.5797}).wait(1).to({graphics:mask_graphics_1,x:10.1865,y:103.6297}).wait(1).to({graphics:mask_graphics_2,x:8.3962,y:98.17}).wait(1).to({graphics:mask_graphics_3,x:7.5795,y:92.8087}).wait(1).to({graphics:mask_graphics_4,x:6.8045,y:87.4532}).wait(1).to({graphics:mask_graphics_5,x:6.8045,y:82.2768}).wait(1).to({graphics:mask_graphics_6,x:6.7795,y:75.1282}).wait(1).to({graphics:mask_graphics_7,x:6.7795,y:69.5467}).wait(1).to({graphics:mask_graphics_8,x:6.7795,y:64.1873}).wait(1).to({graphics:mask_graphics_9,x:7.4795,y:60.4004}).wait(1).to({graphics:mask_graphics_10,x:13.7625,y:56.4261}).wait(1).to({graphics:mask_graphics_11,x:18.4559,y:54.6404}).wait(1).to({graphics:mask_graphics_12,x:22.366,y:54.6404}).wait(1).to({graphics:mask_graphics_13,x:25.9568,y:54.6404}).wait(1).to({graphics:mask_graphics_14,x:25.9568,y:54.6404}).wait(1).to({graphics:mask_graphics_15,x:25.9568,y:54.6404}).wait(1).to({graphics:mask_graphics_16,x:25.9568,y:54.6404}).wait(1).to({graphics:mask_graphics_17,x:25.9568,y:54.6404}).wait(1).to({graphics:mask_graphics_18,x:25.9568,y:54.6404}).wait(1).to({graphics:mask_graphics_19,x:29.3458,y:54.6404}).wait(1).to({graphics:mask_graphics_20,x:37.2966,y:54.6404}).wait(1).to({graphics:mask_graphics_21,x:41.19,y:54.6404}).wait(1).to({graphics:mask_graphics_22,x:41.8945,y:54.6404}).wait(1).to({graphics:mask_graphics_23,x:41.8945,y:54.6404}).wait(1).to({graphics:mask_graphics_24,x:41.8945,y:54.6404}).wait(1).to({graphics:mask_graphics_25,x:41.8945,y:54.6404}).wait(109).to({graphics:mask_graphics_134,x:41.8945,y:54.6404}).wait(1).to({graphics:null,x:0,y:0}).wait(75));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#85B6D6").s().p("AlOIGQhNjtgJjpQgFiEANhuQAIhGAPgyQATg/AhguQA2hLBSgXQBYgZBLAzQBJAyAdBYQA9gUA+AFQAxADAqATQAtATAfAiQA7A/AJBpQAHBcgiBkQggBcg7BSQg+BWhTA+QhUBAhiAjQgdALgMgjQgNgiAdgLQBZghBMg4QBMg6A3hNQA6hPAchRQAihfgMhUQgMhQg9gtQg7grhSAHQghADghALQAGA4gNA3QgYBehGBaQgpA2gTASQgnAngnAHQgyAJgdgpQgcgmAKgwQAEgWAOgbQAHgOAUghQAegzAggqQBPhmBdgvQgVhLg6grQhAgvhIAWQhSAZgvBbQgjBFgNBnQgWC0ARCwQARC2A5CnQAEAOgPADIgFABQgLAAgDgMgAiHhpQgWAhgZAsQgNAZgEANQgHAZAMAQQATAYArgoQAUgSAggnQBsiFABh2QhWAyhOB2g");
	this.shape.setTransform(42.2903,53.0126);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(134).to({_off:true},1).wait(75));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84.6,106);


(lib.Symbol19copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.p2();
	this.instance.setTransform(0,0,1.055,1.055);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212.1,290.1);


(lib.Symbol18copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.p3();
	this.instance.setTransform(0,0,1.0558,1.0558);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180.6,364.3);


(lib.Symbol17copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.p1();
	this.instance.setTransform(0,0,1.0475,1.0475);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177,392.8);


(lib.ClipGroupcopy9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxZClIAAlJMAiyAAAIAAFJg");
	mask.setTransform(111.35,16.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#283482").s().p("AgnBnQgRgJgLgTQgKgSgBgZIAAgBQABgaAKgRQALgSARgKQARgJATAAQANAAALAEQAMAFAIAIQAIAHAHAJIAAhUQAAgFADgDQADgEAFAAQAFAAADAEQAEADAAAFIAADHQAAAFgEADQgDAEgFAAQgFAAgDgEQgDgDAAgFIAAgVQgHAJgIAIQgJAIgLAFQgLAEgNABQgTgBgRgJgAgbgVQgMAHgHANQgIANAAATIAAAAQAAATAIANQAHAOANAHQAMAIAOAAQAPAAANgIQAMgHAIgOQAIgOAAgSIAAAAQAAgSgIgNQgIgNgMgIQgNgHgPgBQgOAAgNAIg");
	this.shape.setTransform(183.075,14.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#283482").s().p("AgiBHQgRgKgLgSQgKgSgBgZIAAAAQABgWAJgSQAKgTARgKQARgMAUAAQAYAAAQAMQAQAKAIATQAJASAAAUQAAAEgDADQgEADgEAAIhwAAQACASAIAMQAHALAMAHQAMAFANAAQAPAAAKgEQALgGAJgIIADgCIAEAAQAEAAADACQADADAAAEIgBAEIgDAEQgLALgOAGQgOAHgUgBQgUAAgSgKgAAzgIQgCgOgFgMQgGgMgLgIQgLgHgPAAQgNAAgLAHQgLAHgHAMQgGAMgCAPIBkAAIAAAAg");
	this.shape_1.setTransform(164.625,17.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#283482").s().p("AglBLQgNgFgJgLQgIgLgBgQIAAgBQABgQAIgLQAIgLAPgFQAPgGAUAAQAOAAALACIAWAFIAAgGQAAgVgMgLQgMgKgWgBQgLABgKACQgKACgJAEIgCABIgCAAQgEAAgDgDQgDgCAAgFQAAgEACgCIAEgEQAMgEAMgDQAMgDAOAAQARAAAMAEQANAFAIAIQAIAIAEAMQAFALAAAPIAABUQgBAGgDACQgDAEgFAAQgFAAgDgDQgDgDAAgFIAAgOQgIALgOAIQgOAHgTABQgPAAgNgGgAggAIQgMAIAAAPIAAAAQAAAKAFAHQAGAHAJAEQAIADALABQAOgBALgFQAMgGAHgJQAHgKAAgMIAAgPIgUgEQgLgBgOAAQgWgBgLAJg");
	this.shape_2.setTransform(146.425,17.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#283482").s().p("AglBLQgNgFgJgLQgIgLgBgQIAAgBQABgQAIgLQAIgLAPgFQAPgGAUAAQAOAAALACIAWAFIAAgGQAAgVgMgLQgMgKgWgBQgLABgKACQgKACgJAEIgCABIgCAAQgEAAgDgDQgDgCAAgFQAAgEACgCIAEgEQAMgEAMgDQAMgDAOAAQARAAAMAEQANAFAIAIQAIAIAEAMQAFALAAAPIAABUQgBAGgDACQgDAEgFAAQgFAAgDgDQgDgDAAgFIAAgOQgIALgOAIQgOAHgTABQgPAAgNgGgAggAIQgMAIAAAPIAAAAQAAAKAFAHQAGAHAJAEQAIADALABQAOgBALgFQAMgGAHgJQAHgKAAgMIAAgPIgUgEQgLgBgOAAQgWgBgLAJg");
	this.shape_3.setTransform(128.925,17.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#283482").s().p("AgHBqQgEgDAAgFIAAiHQAAgEAEgEQADgDAEAAQAFAAADADQADADABAFIAACHQgBAFgDADQgDAEgFgBQgEABgDgEgAgJhTQgEgEAAgFIAAgEQAAgGAEgDQAEgDAFAAQAGAAAEADQADADABAGIAAAEQgBAFgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_4.setTransform(116.675,14.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#283482").s().p("AgaBMQgQgFgNgKIgDgDIgBgFQAAgEADgDQADgDAEAAIADAAIADACQAMAIAMAEQANAFALgBQAPABAJgIQAIgGABgMIAAAAQAAgIgGgEQgFgGgJgDIgSgHQgNgCgLgGQgMgDgIgJQgHgJgBgOIAAgBQAAgNAHgJQAHgLAMgGQAMgFAOAAQANAAANAEQANADALAHQADABABACQACACAAAEQAAAEgDADQgDADgEAAIgDAAIgCgBQgKgGgLgDQgKgDgKAAQgNAAgIAGQgIAGAAAKIAAABQAAAHAFAFQAGAFAJADIATAHQAMAEAMAEQALAEAHAJQAIAJAAANIAAABQAAAPgIALQgHAKgNAGQgMAFgQAAQgOAAgQgFg");
	this.shape_5.setTransform(104.975,17.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#283482").s().p("AgDBkQgKgFgGgKQgGgJAAgRIAAhdIgMAAQgEAAgEgDQgDgCAAgFQAAgEADgDQAEgDAEAAIAMAAIAAglQAAgFAEgDQADgEAFAAQAFAAADAEQADADABAFIAAAlIAnAAQAEAAAEADQACADABAEQgBAEgCAEQgEACgEAAIgnAAIAABbQAAAOAGAGQAHAGAMAAIAJgBIAFgBQAEAAADACQADAEAAAEQAAADgCACQgCACgDACIgKADIgNABQgMAAgJgEg");
	this.shape_6.setTransform(91.425,15.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#283482").s().p("AgiBHQgRgKgLgSQgKgSgBgZIAAAAQABgWAJgSQAKgTARgKQARgMAUAAQAYAAAQAMQAQAKAIATQAJASAAAUQAAAEgDADQgEADgEAAIhwAAQACASAIAMQAHALAMAHQAMAFANAAQAPAAAKgEQALgGAJgIIADgCIAEAAQAEAAADACQADADAAAEIgBAEIgDAEQgLALgOAGQgOAHgUgBQgUAAgSgKgAAzgIQgCgOgFgMQgGgMgLgIQgLgHgPAAQgNAAgLAHQgLAHgHAMQgGAMgCAPIBkAAIAAAAg");
	this.shape_7.setTransform(76.575,17.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#283482").s().p("AhKBlQgEgDAAgFIAAi3QAAgFAEgDQADgEAFAAQAFAAADAEQADADABAFIAAAVQAGgKAIgHQAJgIALgFQALgFANAAQATAAARAKQARAJALASQALASAAAaIAAABQAAAZgLASQgLASgRAJQgRAKgTAAQgNAAgLgFQgMgEgIgIQgIgHgGgJIAABEQgBAFgDADQgDADgFABQgFgBgDgDgAgahLQgNAHgIAOQgIANAAASIAAABQAAASAIANQAIANANAIQAMAHAOAAQAPAAANgHQAMgHAHgNQAIgNAAgTIAAgBQAAgSgIgOQgHgNgNgHQgMgIgPAAQgOAAgMAIg");
	this.shape_8.setTransform(58.025,20.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#283482").s().p("AgkBmQgTgHgSgOIgDgEIgBgGQAAgFADgDQADgDAFAAIAEAAIADACQAPANAQAGQAQAGATAAQAWAAAMgKQANgKAAgQIAAAAQAAgKgEgHQgFgIgMgFQgMgGgVgEQgYgGgQgGQgQgIgHgMQgIgLAAgSIAAAAQAAgRAJgNQAJgNAQgHQAPgIAVAAQATAAARAFQAQAGAOAKIADAEQACACAAAEQAAAFgDADQgDADgFAAIgEAAIgDgCQgNgKgOgEQgNgFgOABQgVAAgMAJQgMAKAAAPIAAAAQAAAKAFAIQAEAHANAGQAMAGAWAFQAkAHARANQAQAOAAAYIAAABQAAASgJAOQgJANgQAHQgRAIgVAAQgWAAgUgHg");
	this.shape_9.setTransform(37.825,15.125);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroupcopy9, new cjs.Rectangle(26.2,0,169.60000000000002,33), null);


(lib.ClipGroupcopy8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7PClIAAlJMA2fAAAIAAFJg");
	mask.setTransform(135.4708,16.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#283482").s().p("AgRAhQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIABgDIADgCQAJgEAEgGQAEgGgBgIQgEgBgDgDQgEgEAAgGIAAgFQAAgGAEgEQADgEAGAAQAHAAADAFQAEAEABAIIAAAFQAAANgDAJQgDAIgFAGQgFAEgFADIgKAEIgFgCg");
	this.shape.setTransform(300.95,25.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#283482").s().p("AgnBnQgRgJgLgTQgKgSgBgZIAAgBQABgaAKgRQALgSARgKQARgJATAAQANAAALAEQAMAFAIAIQAIAHAHAJIAAhUQAAgFADgDQADgEAFAAQAFAAADAEQAEADAAAFIAADHQAAAFgEADQgDAEgFAAQgFAAgDgEQgDgDAAgFIAAgVQgHAJgIAIQgJAIgLAFQgLAEgNABQgTgBgRgJgAgbgVQgMAHgHANQgIANAAATIAAAAQAAATAIANQAHAOANAHQAMAIAOAAQAPAAANgIQAMgHAIgOQAIgOAAgSIAAAAQAAgSgIgNQgIgNgMgIQgNgHgPgBQgOAAgNAIg");
	this.shape_1.setTransform(287.225,14.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#283482").s().p("AgHBqQgEgDAAgFIAAiHQAAgEAEgEQADgDAEAAQAFAAADADQADADABAFIAACHQgBAFgDADQgDAEgFgBQgEABgDgEgAgJhTQgEgEAAgFIAAgEQAAgGAEgDQAEgDAFAAQAGAAAEADQADADABAGIAAAEQgBAFgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_2.setTransform(273.675,14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#283482").s().p("AgnBnQgRgJgLgTQgKgSgBgZIAAgBQABgaAKgRQALgSARgKQARgJATAAQANAAALAEQAMAFAIAIQAIAHAHAJIAAhUQAAgFADgDQADgEAFAAQAFAAADAEQAEADAAAFIAADHQAAAFgEADQgDAEgFAAQgFAAgDgEQgDgDAAgFIAAgVQgHAJgIAIQgJAIgLAFQgLAEgNABQgTgBgRgJgAgbgVQgMAHgHANQgIANAAATIAAAAQAAATAIANQAHAOANAHQAMAIAOAAQAPAAANgIQAMgHAIgOQAIgOAAgSIAAAAQAAgSgIgNQgIgNgMgIQgNgHgPgBQgOAAgNAIg");
	this.shape_3.setTransform(259.225,14.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#283482").s().p("AAwBNQgDgDAAgFIAAhQQAAgWgLgNQgLgMgVAAQgNAAgKAFQgLAHgGALQgGALAAAOIAABPQAAAFgDADQgDAEgFgBQgGABgDgEQgDgDAAgFIAAiHQAAgEADgEQADgDAFAAQAFAAAEADQADADAAAFIAAARQAIgNAMgJQANgIATgBQATABAOAHQANAIAHAOQAHAOAAATIAABWQAAAFgDADQgDAEgFgBQgFABgEgEg");
	this.shape_4.setTransform(240.475,17.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#283482").s().p("AgiBHQgRgKgLgSQgKgSgBgZIAAAAQABgWAJgSQAKgTARgKQARgMAUAAQAYAAAQAMQAQAKAIATQAJASAAAUQAAAEgDADQgEADgEAAIhwAAQACASAIAMQAHALAMAHQAMAFANAAQAPAAAKgEQALgGAJgIIADgCIAEAAQAEAAADACQADADAAAEIgBAEIgDAEQgLALgOAGQgOAHgUgBQgUAAgSgKgAAzgIQgCgOgFgMQgGgMgLgIQgLgHgPAAQgNAAgLAHQgLAHgHAMQgGAMgCAPIBkAAIAAAAg");
	this.shape_5.setTransform(222.175,17.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#283482").s().p("AAwBsQgDgDAAgFIAAhRQAAgVgLgNQgLgMgVAAQgNAAgKAGQgLAGgGALQgGAKAAAPIAABPQAAAFgDADQgDAEgFAAQgGAAgDgEQgDgDAAgFIAAjHQAAgFADgDQADgEAFAAQAFAAAEAEQADADAAAFIAABRQAIgNAMgIQANgJATAAQATAAAOAIQANAHAHAOQAHAOAAASIAABXQAAAFgDADQgDAEgFAAQgFAAgEgEg");
	this.shape_6.setTransform(204.025,14.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#283482").s().p("AglBLQgNgFgJgLQgIgLgBgQIAAgBQABgQAIgLQAIgLAPgFQAPgGAUAAQAOAAALACIAWAFIAAgGQAAgVgMgLQgMgKgWgBQgLABgKACQgKACgJAEIgCABIgCAAQgEAAgDgDQgDgCAAgFQAAgEACgCQACgCACgCQAMgEAMgDQAMgDAOAAQARAAAMAEQANAFAIAIQAIAIAEAMQAFALAAAPIAABUQgBAGgDACQgDAEgFAAQgFAAgDgDQgDgDAAgFIAAgOQgIALgOAIQgOAHgTABQgPAAgNgGgAggAIQgMAIAAAPIAAAAQAAAKAFAHQAGAHAJAEQAIADALABQAOgBALgFQAMgGAHgJQAHgKAAgMIAAgPIgUgEQgLgBgOAAQgWgBgLAJg");
	this.shape_7.setTransform(185.375,17.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#283482").s().p("AAABQQgEAAgEgDQgDgCgCgFIg6iEIgBgCIgBgEQAAgEADgEQAEgDAFAAQAFAAADACQADADABAEIAxB5IA0h5QAAgEADgDQADgCAFAAQAEAAAEADQADAEAAAEIgBAEIAAACIg8CEQgCAFgCACQgDADgFAAg");
	this.shape_8.setTransform(168.25,17.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#283482").s().p("AgaBMQgQgFgNgKIgDgDIgBgFQAAgEADgDQADgDAEAAIADAAIADACQAMAIAMAEQANAFALgBQAPABAJgIQAIgGABgMIAAAAQAAgIgGgEQgFgGgJgDIgSgHQgNgCgLgGQgMgDgIgJQgHgJgBgOIAAgBQAAgNAHgJQAHgLAMgGQAMgFAOAAQANAAANAEQANADALAHQADABABACQACACAAAEQAAAEgDADQgDADgEAAIgDAAIgCgBQgKgGgLgDQgKgDgKAAQgNAAgIAGQgIAGAAAKIAAABQAAAHAFAFQAGAFAJADIATAHQAMAEAMAEQALAEAHAJQAIAJAAANIAAABQAAAPgIALQgHAKgNAGQgMAFgQAAQgOAAgQgFg");
	this.shape_9.setTransform(151.725,17.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#283482").s().p("AgHBqQgEgDAAgFIAAiHQAAgEAEgEQADgDAEAAQAFAAADADQADADABAFIAACHQgBAFgDADQgDAEgFgBQgEABgDgEgAgJhTQgEgEAAgFIAAgEQAAgGAEgDQAEgDAFAAQAGAAAEADQADADABAGIAAAEQgBAFgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_10.setTransform(140.425,14.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#283482").s().p("ABiBNQgDgDAAgFIAAhQQAAgXgLgMQgKgMgUAAQgMgBgJAGQgJAGgHAKQgFALAAAQIAABPQgBAFgDADQgDAEgFgBQgEABgDgEQgDgDgBgFIAAhRQAAgWgKgMQgLgMgSAAQgOgBgJAHQgKAGgGALQgFAMAAAOIAABOQAAAFgEADQgCAEgGgBQgFABgDgEQgDgDgBgFIAAiHQABgEADgEQADgDAFAAQAFAAADADQAEADAAAFIAAAQQAFgIAGgHQAIgGAJgEQAJgFANAAQATABANAIQAMAJAGAOQAHgNAOgKQANgIAUgBQAcAAAPARQAPARAAAdIAABWQAAAFgDADQgEAEgEgBQgGABgDgEg");
	this.shape_11.setTransform(122.2,17.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#283482").s().p("AgiBHQgRgKgLgSQgKgSgBgZIAAAAQABgWAJgSQAKgTARgKQARgMAUAAQAYAAAQAMQAQAKAIATQAJASAAAUQAAAEgDADQgEADgEAAIhwAAQACASAIAMQAHALAMAHQAMAFANAAQAPAAAKgEQALgGAJgIIADgCIAEAAQAEAAADACQADADAAAEIgBAEIgDAEQgLALgOAGQgOAHgUgBQgUAAgSgKgAAzgIQgCgOgFgMQgGgMgLgIQgLgHgPAAQgNAAgLAHQgLAHgHAMQgGAMgCAPIBkAAIAAAAg");
	this.shape_12.setTransform(98.875,17.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#283482").s().p("AgaBMQgQgFgNgKIgDgDIgBgFQAAgEADgDQADgDAEAAIADAAIADACQAMAIAMAEQANAFALgBQAPABAJgIQAIgGABgMIAAAAQAAgIgGgEQgFgGgJgDIgSgHQgNgCgLgGQgMgDgIgJQgHgJgBgOIAAgBQAAgNAHgJQAHgLAMgGQAMgFAOAAQANAAANAEQANADALAHQADABABACQACACAAAEQAAAEgDADQgDADgEAAIgDAAIgCgBQgKgGgLgDQgKgDgKAAQgNAAgIAGQgIAGAAAKIAAABQAAAHAFAFQAGAFAJADIATAHQAMAEAMAEQALAEAHAJQAIAJAAANIAAABQAAAPgIALQgHAKgNAGQgMAFgQAAQgOAAgQgFg");
	this.shape_13.setTransform(82.175,17.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#283482").s().p("AgiBHQgRgKgLgSQgKgSgBgZIAAAAQABgWAJgSQAKgTARgKQARgMAUAAQAYAAAQAMQAQAKAIATQAJASAAAUQAAAEgDADQgEADgEAAIhwAAQACASAIAMQAHALAMAHQAMAFANAAQAPAAAKgEQALgGAJgIIADgCIAEAAQAEAAADACQADADAAAEIgBAEIgDAEQgLALgOAGQgOAHgUgBQgUAAgSgKgAAzgIQgCgOgFgMQgGgMgLgIQgLgHgPAAQgNAAgLAHQgLAHgHAMQgGAMgCAPIBkAAIAAAAg");
	this.shape_14.setTransform(65.975,17.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#283482").s().p("AhKBlQgEgDAAgFIAAi3QAAgFAEgDQADgEAFAAQAFAAADAEQADADABAFIAAAVQAGgKAIgHQAJgIALgFQALgFANAAQATAAARAKQARAJALASQALASAAAaIAAABQAAAZgLASQgLASgRAJQgRAKgTAAQgNAAgLgFQgMgEgIgIQgIgHgGgJIAABEQgBAFgDADQgDADgFABQgFgBgDgDgAgahLQgNAHgIAOQgIANAAASIAAABQAAASAIANQAIANANAIQAMAHAOAAQAPAAANgHQAMgHAHgNQAIgNAAgTIAAgBQAAgSgIgOQgHgNgNgHQgMgIgPAAQgOAAgMAIg");
	this.shape_15.setTransform(47.425,20.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#283482").s().p("AgoBJQgNgJgHgOQgHgOAAgSIAAhWQAAgFADgDQADgDAFAAQAFAAAEADQADADAAAFIAABQQAAAWALANQAMAMAUAAQANAAAKgGQALgGAGgLQAGgLAAgOIAAhPQAAgFADgDQAEgDAFAAQAEAAAEADQADADAAAFIAACHQAAAEgDAEQgDAEgFgBQgFABgEgEQgDgDAAgFIAAgRQgIANgNAIQgMAJgTAAQgTAAgOgHg");
	this.shape_16.setTransform(27.525,18);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#283482").s().p("AgaBMQgQgFgNgKIgDgDIgBgFQAAgEADgDQADgDAEAAIADAAIADACQAMAIAMAEQANAFALgBQAPABAJgIQAIgGABgMIAAAAQAAgIgGgEQgFgGgJgDIgSgHQgNgCgLgGQgMgDgIgJQgHgJgBgOIAAgBQAAgNAHgJQAHgLAMgGQAMgFAOAAQANAAANAEQANADALAHQADABABACQACACAAAEQAAAEgDADQgDADgEAAIgDAAIgCgBQgKgGgLgDQgKgDgKAAQgNAAgIAGQgIAGAAAKIAAABQAAAHAFAFQAGAFAJADIATAHQAMAEAMAEQALAEAHAJQAIAJAAANIAAABQAAAPgIALQgHAKgNAGQgMAFgQAAQgOAAgQgFg");
	this.shape_17.setTransform(10.625,17.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#283482").s().p("AgiBHQgRgKgLgSQgKgSgBgZIAAAAQABgWAJgSQAKgTARgKQARgMAUAAQAYAAAQAMQAQAKAIATQAJASAAAUQAAAEgDADQgEADgEAAIhwAAQACASAIAMQAHALAMAHQAMAFANAAQAPAAAKgEQALgGAJgIIADgCIAEAAQAEAAADACQADADAAAEIgBAEIgDAEQgLALgOAGQgOAHgUgBQgUAAgSgKgAAzgIQgCgOgFgMQgGgMgLgIQgLgHgPAAQgNAAgLAHQgLAHgHAMQgGAMgCAPIBkAAIAAAAg");
	this.shape_18.setTransform(-5.575,17.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#283482").s().p("AhKBlQgEgDAAgFIAAi3QAAgFAEgDQADgEAFAAQAFAAADAEQADADABAFIAAAVQAGgKAIgHQAJgIALgFQALgFANAAQATAAARAKQARAJALASQALASAAAaIAAABQAAAZgLASQgLASgRAJQgRAKgTAAQgNAAgLgFQgMgEgIgIQgIgHgGgJIAABEQgBAFgDADQgDADgFABQgFgBgDgDgAgahLQgNAHgIAOQgIANAAASIAAABQAAASAIANQAIANANAIQAMAHAOAAQAPAAANgHQAMgHAHgNQAIgNAAgTIAAgBQAAgSgIgOQgHgNgNgHQgMgIgPAAQgOAAgMAIg");
	this.shape_19.setTransform(-24.125,20.225);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroupcopy8, new cjs.Rectangle(-36.6,0,343.90000000000003,33), null);


(lib.ClipGroupcopy7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4JClIAAlJMAwTAAAIAAFJg");
	mask.setTransform(87.8458,16.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#283482").s().p("AgDBkQgKgFgGgKQgGgJAAgRIAAhdIgMAAQgEAAgEgDQgDgCAAgFQAAgEADgDQAEgDAEAAIAMAAIAAglQAAgFAEgDQADgEAFAAQAFAAADAEQADADABAFIAAAlIAnAAQAEAAAEADQACADABAEQgBAEgCAEQgEACgEAAIgnAAIAABbQAAAOAGAGQAHAGAMAAIAJgBIAFgBQAEAAADACQADAEAAAEQAAADgCACQgCACgDACIgKADIgNABQgMAAgJgEg");
	this.shape.setTransform(232.225,15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#283482").s().p("AgHBsQgEgDAAgFIAAjHQAAgFAEgDQADgEAEAAQAFAAADAEQADADABAFIAADHQgBAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_1.setTransform(222.275,14.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#283482").s().p("AgiBHQgRgKgLgSQgKgSgBgZIAAAAQABgWAJgSQAKgTARgKQARgMAUAAQAYAAAQAMQAQAKAIATQAJASAAAUQAAAEgDADQgEADgEAAIhwAAQACASAIAMQAHALAMAHQAMAFANAAQAPAAAKgEQALgGAJgIIADgCIAEAAQAEAAADACQADADAAAEIgBAEIgDAEQgLALgOAGQgOAHgUgBQgUAAgSgKgAAzgIQgCgOgFgMQgGgMgLgIQgLgHgPAAQgNAAgLAHQgLAHgHAMQgGAMgCAPIBkAAIAAAAg");
	this.shape_2.setTransform(209.425,17.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#283482").s().p("AgaBMQgQgFgNgKIgDgDIgBgFQAAgEADgDQADgDAEAAIADAAIADACQAMAIAMAEQANAFALgBQAPABAJgIQAIgGABgMIAAAAQAAgIgGgEQgFgGgJgDIgSgHQgNgCgLgGQgMgDgIgJQgHgJgBgOIAAgBQAAgNAHgJQAHgLAMgGQAMgFAOAAQANAAANAEQANADALAHQADABABACQACACAAAEQAAAEgDADQgDADgEAAIgDAAIgCgBQgKgGgLgDQgKgDgKAAQgNAAgIAGQgIAGAAAKIAAABQAAAHAFAFQAGAFAJADIATAHQAMAEAMAEQALAEAHAJQAIAJAAANIAAABQAAAPgIALQgHAKgNAGQgMAFgQAAQgOAAgQgFg");
	this.shape_3.setTransform(192.725,17.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#283482").s().p("AgHBqQgEgDAAgFIAAiHQAAgEAEgEQADgDAEAAQAFAAADADQADADABAFIAACHQgBAFgDADQgDAEgFgBQgEABgDgEgAgJhTQgEgEAAgFIAAgEQAAgGAEgDQAEgDAFAAQAGAAAEADQADADABAGIAAAEQgBAFgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_4.setTransform(181.425,14.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#283482").s().p("AgHBsQgEgDAAgFIAAjHQAAgFAEgDQADgEAEAAQAFAAADAEQADADABAFIAADHQgBAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_5.setTransform(173.475,14.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#283482").s().p("AglBLQgNgFgJgLQgIgLgBgQIAAgBQABgQAIgLQAIgLAPgFQAPgGAUAAQAOAAALACIAWAFIAAgGQAAgVgMgLQgMgKgWgBQgLABgKACQgKACgJAEIgCABIgCAAQgEAAgDgDQgDgCAAgFQAAgEACgCQACgCACgCQAMgEAMgDQAMgDAOAAQARAAAMAEQANAFAIAIQAIAIAEAMQAFALAAAPIAABUQgBAGgDACQgDAEgFAAQgFAAgDgDQgDgDAAgFIAAgOQgIALgOAIQgOAHgTABQgPAAgNgGgAggAIQgMAIAAAPIAAAAQAAAKAFAHQAGAHAJAEQAIADALABQAOgBALgFQAMgGAHgJQAHgKAAgMIAAgPIgUgEQgLgBgOAAQgWgBgLAJg");
	this.shape_6.setTransform(160.275,17.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#283482").s().p("AAABQQgEAAgEgDQgDgCgCgFIg7iEIAAgCIgBgEQAAgEADgEQAEgDAFAAQAFAAACACQADADACAEIAxB5IA0h5QAAgEADgDQADgCAEAAQAFAAAEADQADAEAAAEIgBAEIgBACIg6CEQgDAFgDACQgCADgFAAg");
	this.shape_7.setTransform(143.15,17.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#283482").s().p("AgoBMQgDgDAAgFIAAiHQAAgEADgEQADgDAFAAQAFAAAEADQADAEAAAEIAAAeQAGgNAJgKQAHgJALgFQAKgFAKAAQAFAAADADQADAEAAAFQAAAFgDADQgCADgFABQgPABgNAJQgLAIgHAPQgIAPAAAWIAAA1QAAAFgDADQgDAEgFAAQgGAAgDgEg");
	this.shape_8.setTransform(129.125,17.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#283482").s().p("AgoBJQgNgJgHgOQgHgOAAgSIAAhWQAAgFADgDQADgDAFAAQAFAAAEADQADADAAAFIAABQQAAAWALANQAMAMAUAAQANAAAKgGQALgGAGgLQAGgLAAgOIAAhPQAAgFADgDQAEgDAFAAQAEAAAEADQADADAAAFIAACHQAAAEgDAEQgDAEgFgBQgFABgEgEQgDgDAAgFIAAgRQgIANgNAIQgMAJgTAAQgTAAgOgHg");
	this.shape_9.setTransform(112.675,18);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#283482").s().p("AgDBkQgKgFgGgKQgGgJAAgRIAAhdIgMAAQgEAAgEgDQgDgCAAgFQAAgEADgDQAEgDAEAAIAMAAIAAglQAAgFAEgDQADgEAFAAQAFAAADAEQADADABAFIAAAlIAnAAQAEAAAEADQACADABAEQgBAEgCAEQgEACgEAAIgnAAIAABbQAAAOAGAGQAHAGAMAAIAJgBIAFgBQAEAAADACQADAEAAAEQAAADgCACQgCACgDACIgKADIgNABQgMAAgJgEg");
	this.shape_10.setTransform(97.275,15.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#283482").s().p("AgUBsQgMgFgIgHQgIgIgGgJIAAAUQgBAFgDADQgDAEgFAAQgFAAgDgEQgEgDAAgFIAAjHQAAgFAEgDQADgEAFAAQAFAAADAEQADADABAFIAABVQAGgJAIgIQAJgIALgEQALgFANAAQATAAARAJQARAKALASQALARAAAaIAAAAQAAAagLASQgLASgRAKQgRAJgTABQgNgBgLgEgAgagVQgNAIgIANQgIANAAASIAAAAQAAATAIANQAIAOANAHQAMAIAOAAQAPAAANgHQAMgHAHgOQAIgNAAgTIAAgBQAAgSgIgNQgHgOgNgHQgMgHgPgBQgOABgMAHg");
	this.shape_11.setTransform(72.675,14.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#283482").s().p("AgHBqQgEgDAAgFIAAiHQAAgEAEgEQADgDAEAAQAFAAADADQADADABAFIAACHQgBAFgDADQgDAEgFgBQgEABgDgEgAgJhTQgEgEAAgFIAAgEQAAgGAEgDQAEgDAFAAQAGAAAEADQADADABAGIAAAEQgBAFgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_12.setTransform(58.225,14.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#283482").s().p("AgpBjQgTgLgKgSQgKgSAAgXIAAAAQAAgXAKgRQALgSASgMQASgLAXAAQAYAAATALQASALAKASQAKASAAAWIAAABQAAAWgKASQgKATgTALQgSALgYAAQgXAAgSgLgAgdgXQgNAIgHANQgHANAAARIAAABQAAAQAHAOQAIAOANAIQANAIAPABQARgBANgIQANgIAIgOQAGgNABgRIAAAAQAAgRgIgNQgIgOgNgIQgNgJgQAAQgQAAgNAJgAgshHQgCgCAAgDIAAgCIABgCQAEgNAHgGQAGgHAJABQAHAAAHADIAOAGIALADQAGAAACgCQAEgDADgGIACgDIAFgCQACABADACQACABAAADIAAADIgBADQgEAMgHAGQgFAGgKAAQgHgBgHgDIgOgFQgGgDgFAAQgGAAgDACQgDACgDAGIgCAEQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgEAAgCgCg");
	this.shape_13.setTransform(44.5,15.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#283482").s().p("AAABQQgEAAgEgDQgDgCgCgFIg7iEIgBgCIAAgEQABgEACgEQAEgDAFAAQAFAAACACQADADACAEIAxB5IAzh5QACgEACgDQADgCAEAAQAFAAADADQADAEABAEIgBAEIgBACIg6CEQgDAFgDACQgDADgEAAg");
	this.shape_14.setTransform(25.9,17.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#283482").s().p("AglBLQgNgFgJgLQgIgLgBgQIAAgBQABgQAIgLQAIgLAPgFQAPgGAUAAQAOAAALACIAWAFIAAgGQAAgVgMgLQgMgKgWgBQgLABgKACQgKACgJAEIgCABIgCAAQgEAAgDgDQgDgCAAgFQAAgEACgCIAEgEQAMgEAMgDQAMgDAOAAQARAAAMAEQANAFAIAIQAIAIAEAMQAFALAAAPIAABUQgBAGgDACQgDAEgFAAQgFAAgDgDQgDgDAAgFIAAgOQgIALgOAIQgOAHgTABQgPAAgNgGgAggAIQgMAIAAAPIAAAAQAAAKAFAHQAGAHAJAEQAIADALABQAOgBALgFQAMgGAHgJQAHgKAAgMIAAgPIgUgEQgLgBgOAAQgWgBgLAJg");
	this.shape_15.setTransform(-1.175,17.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#283482").s().p("AgnBnQgRgJgLgTQgKgSgBgZIAAgBQABgaAKgRQALgSARgKQARgJATAAQANAAALAEQAMAFAIAIQAIAHAHAJIAAhUQAAgFADgDQADgEAFAAQAFAAADAEQAEADAAAFIAADHQAAAFgEADQgDAEgFAAQgFAAgDgEQgDgDAAgFIAAgVQgHAJgIAIQgJAIgLAFQgLAEgNABQgTgBgRgJgAgbgVQgMAHgHANQgIANAAATIAAAAQAAATAIANQAHAOANAHQAMAIAOAAQAPAAANgIQAMgHAIgOQAIgOAAgSIAAAAQAAgSgIgNQgIgNgMgIQgNgHgPgBQgOAAgNAIg");
	this.shape_16.setTransform(-19.925,14.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#283482").s().p("AgHBqQgEgDAAgFIAAiHQAAgEAEgEQADgDAEAAQAFAAADADQADADABAFIAACHQgBAFgDADQgDAEgFgBQgEABgDgEgAgJhTQgEgEAAgFIAAgEQAAgGAEgDQAEgDAFAAQAGAAAEADQADADABAGIAAAEQgBAFgDAEQgEADgGAAQgFAAgEgDg");
	this.shape_17.setTransform(-33.475,14.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#283482").s().p("ABiBNQgDgDAAgFIAAhQQAAgXgLgMQgKgMgUAAQgMgBgJAGQgJAGgHAKQgFALgBAQIAABPQAAAFgDADQgDAEgFgBQgEABgDgEQgEgDABgFIAAhRQgBgWgKgMQgLgMgTAAQgNgBgJAHQgKAGgGALQgFAMAAAOIAABOQgBAFgDADQgCAEgGgBQgFABgDgEQgDgDAAgFIAAiHQAAgEADgEQADgDAFAAQAFAAADADQADADABAFIAAAQQAFgIAHgHQAGgGAKgEQAJgFANAAQATABANAIQAMAJAGAOQAHgNAOgKQANgIAVgBQAbAAAPARQAPARAAAdIAABWQAAAFgDADQgDAEgFgBQgGABgDgEg");
	this.shape_18.setTransform(-51.7,17.8);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroupcopy7, new cjs.Rectangle(-66.8,0,307.5,33), null);


(lib.ClipGroupcopy6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8AB7E9").s().p("A52DHQgaAAgTgSQgSgTAAgaIAAkPQAAgaASgTQATgTAaAAMAzsAAAQAbAAATATQASATAAAaIAAEPQAAAagSATQgTASgbAAg");
	this.shape.setTransform(171.825,19.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroupcopy6, new cjs.Rectangle(0,0,343.7,39.9), null);


(lib.ClipGroupcopy5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A5bCtIAAlZMAy3AAAIAAFZg");
	mask.setTransform(162.75,17.3);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJBjQgLgEgFgKQgGgLgBgTIAAhLIgBAAQgIgBgFgGQgHgFABgIQgBgJAHgFQAFgGAIAAIABAAIAAgUQABgKAHgHQAGgGAKAAQAJAAAGAGQAGAHAAAKIAAAUIAVAAQAIAAAFAGQAGAFABAJQgBAIgGAFQgFAGgIABIgVAAIAABEQAAAIAEAEQADADAJAAIACAAIADAAQAHABAGAFQAFAFABAIQgBAGgDAFQgDAEgFACIgMAEIgPABQgOAAgJgFg");
	this.shape.setTransform(318.9,15.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaBPQgPgEgPgKQgEgCgCgEQgDgEAAgFQAAgIAFgFQAFgFAIgBIAFABIAEACQAMAHALAEQALADAJAAQAKAAAFgDQAFgDAAgGIAAAAQgBgFgEgDQgFgDgHgDIgQgFQgMgDgLgGQgLgFgHgJQgHgJAAgQIAAAAQAAgRAIgLQAIgMANgGQANgGAQAAQANAAAMAEQANADAMAGQAFACADAFQADAEAAAGQAAAIgFAFQgGAFgIAAIgEAAIgEgCQgKgFgJgCQgJgDgHAAQgHAAgFADQgEADAAAFIAAABQAAAEAFADIALAGIAQAGQAMAEALAFQALAGAHAIQAIAJAAAPIAAAAQAAASgIAMQgIAMgOAFQgOAGgSAAQgOAAgQgFg");
	this.shape_1.setTransform(305.325,17.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguBOQgMgGgIgLQgHgLAAgQIAAgBQAAgSAIgLQAIgKAPgGQAPgGATAAQALAAAJACIASAFIAAgDQAAgOgIgIQgJgHgQAAIgSABIgOADIgEABIgDABQgIgBgFgFQgGgFAAgIQAAgGAEgFQADgFAGgCQAKgEANgCQAMgCAPAAQATAAAOAEQANAFAJAJQAJAJAEANQAEANAAAQIAABJQAAAJgGAHQgGAGgKAAQgKAAgGgGQgGgFAAgIIAAAAQgIAJgMAGQgLAFgRAAQgPAAgNgFgAgVAPQgIAFAAALIAAABQAAAJAHAFQAHAGALAAQAPgBAKgHQAKgIAAgNIAAgIQgGgDgHgBQgIgCgIAAQgOAAgJAGg");
	this.shape_2.setTransform(288.675,17.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAABUQgJgBgHgFQgGgGgEgIIgyhyIgBgGIgBgFQAAgIAGgHQAHgHAJAAQAKAAAFAFQAFAFADAGIAhBeIAkheQACgGAFgFQAFgFAJAAQAKABAGAFQAGAHAAAJIgBAGIgBAFIgyByQgEAIgGAGQgGAFgKABg");
	this.shape_3.setTransform(271.525,17.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglBKQgTgLgLgTQgLgSAAgZIAAgBQABgWAJgTQAKgTATgMQARgLAXAAQAUAAAPAHQAPAHAKAMQAJAMAEANQAFAOAAANQAAAJgGAGQgGAGgKAAIhaAAQAFAPAKAIQAKAJAPAAQAJAAAIgDQAIgDAHgFIAFgDIAGgBQAIAAAFAFQAFAFAAAIQAAAFgCADIgEAGQgLAJgOAFQgOAFgRAAQgYAAgTgKgAAjgMQgCgQgIgJQgKgJgOAAQgNAAgJAJQgJAJgDAQIBEAAIAAAAg");
	this.shape_4.setTransform(253.85,17.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AguBrQgMgGgIgLQgHgLAAgQIAAAAQAAgSAIgLQAIgMAPgFQAPgGATAAQALAAAJACIASAFIAAgDQAAgPgIgGQgJgIgQAAIgSABIgOAEIgEABIgDAAQgIAAgFgFQgGgGAAgIQAAgGAEgFQADgEAGgDQAKgEANgCQAMgCAPAAQATAAAOAFQANAFAJAIQAJAJAEANQAEANAAAQIAABJQAAAKgGAGQgGAGgKABQgKgBgGgFQgGgGAAgHIAAgBQgIAKgMAFQgLAGgRAAQgPAAgNgGgAgVAsQgIAGAAALIAAAAQAAAKAHAFQAHAFALAAQAPAAAKgIQAKgIAAgMIAAgJQgGgCgHgCQgIgCgIAAQgOAAgJAGgAAUhJQgHgGAAgKIAAgBQAAgKAHgGQAHgGAKAAQAKAAAHAGQAHAGAAAKIAAABQAAAKgHAGQgHAGgKAAQgKAAgHgGgAgrhJQgHgGAAgKIAAgBQAAgKAHgGQAGgGAKAAQAKAAAHAGQAHAGAAAKIAAABQAAAKgHAGQgHAGgKAAQgKAAgGgGg");
	this.shape_5.setTransform(235.375,14.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhNBlQgGgHgBgJIAAinQABgKAGgGQAGgHAKAAQAKAAAGAHQAGAGABAJIAAADQAIgMANgHQALgHASAAQATAAARAJQAQAKALATQAKASAAAbIAAABQAAAagKASQgLAUgQAJQgRAJgTAAQgSAAgMgGQgMgIgIgJIAAAwQgBAJgGAHQgGAHgKAAQgKAAgGgHgAgTg+QgJAGgFAJQgGALAAANIAAABQAAAOAGAJQAFAJAJAGQAJAFAKAAQAKAAAKgFQAIgGAFgJQAGgJAAgOIAAgBQAAgOgGgKQgFgJgIgGQgKgFgKAAQgKAAgJAFg");
	this.shape_6.setTransform(217,19.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag6BDQgPgQAAgcIAAhSQAAgKAHgHQAGgGAKAAQAJAAAHAGQAGAHAAAKIAABEQABAQAHAIQAHAJANAAQANAAAIgJQAHgIAAgQIAAhEQAAgKAHgHQAGgGAKAAQAKAAAGAGQAHAHAAAKIAAB2QAAAKgHAGQgGAHgKAAQgKAAgGgHQgHgGAAgKIAAgCQgIALgLAHQgKAIgSAAQgaAAgNgQg");
	this.shape_7.setTransform(197,17.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPBpQgHgGAAgKIAAixQAAgKAHgGQAHgHAIAAQAKAAAHAHQAGAGAAAKIAACxQAAAKgGAGQgHAHgKAAQgIAAgHgHg");
	this.shape_8.setTransform(183.1,14.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AglBKQgTgLgLgTQgKgSgBgZIAAgBQAAgWALgTQAKgTARgMQASgLAYAAQATAAAPAHQAPAHAJAMQAKAMAFANQAEAOAAANQAAAJgGAGQgGAGgJAAIhaAAQAEAPAJAIQALAJAOAAQAKAAAIgDQAIgDAHgFIAFgDIAGgBQAIAAAFAFQAFAFAAAIQAAAFgCADIgEAGQgLAJgNAFQgPAFgSAAQgXAAgTgKgAAjgMQgBgQgKgJQgIgJgOAAQgOAAgJAJQgJAJgDAQIBEAAIAAAAg");
	this.shape_9.setTransform(169.2,17.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJBjQgKgEgHgKQgFgLgBgTIAAhLIgBAAQgIgBgFgGQgHgFAAgIQAAgJAHgFQAFgGAIAAIABAAIAAgUQABgKAGgHQAHgGAKAAQAIAAAHAGQAGAHABAKIAAAUIAUAAQAIAAAFAGQAGAFAAAJQAAAIgGAFQgFAGgIABIgUAAIAABEQAAAIADAEQAEADAHAAIADAAIADAAQAHABAGAFQAFAFABAIQgBAGgDAFQgDAEgFACIgNAEIgNABQgOAAgKgFg");
	this.shape_10.setTransform(144.5,15.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaBPQgPgEgPgKQgEgCgCgEQgDgEAAgFQAAgIAFgFQAFgFAIgBIAFABIAEACQAMAHALAEQALADAJAAQAKAAAFgDQAFgDAAgGIAAAAQgBgFgEgDQgFgDgHgDIgQgFQgMgDgLgGQgLgFgHgJQgHgJAAgQIAAAAQAAgRAIgLQAIgMANgGQANgGAQAAQANAAAMAEQANADAMAGQAFACADAFQADAEAAAGQAAAIgFAFQgGAFgIAAIgEAAIgEgCQgKgFgJgCQgJgDgHAAQgHAAgFADQgEADAAAFIAAABQAAAEAFADIALAGIAQAGQAMAEALAFQALAGAHAIQAIAJAAAPIAAAAQAAASgIAMQgIAMgOAFQgOAGgSAAQgOAAgQgFg");
	this.shape_11.setTransform(130.925,17.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglBKQgTgLgLgTQgKgSgBgZIAAgBQABgWAJgTQALgTARgMQATgLAWAAQAVAAAOAHQAPAHAKAMQAJAMAEANQAFAOAAANQAAAJgGAGQgGAGgKAAIhaAAQAFAPAKAIQAKAJAPAAQAJAAAIgDQAIgDAHgFIAFgDIAGgBQAIAAAFAFQAFAFAAAIQAAAFgCADIgEAGQgLAJgOAFQgOAFgRAAQgYAAgTgKgAAkgMQgDgQgIgJQgKgJgOAAQgNAAgJAJQgJAJgDAQIBFAAIAAAAg");
	this.shape_12.setTransform(114.25,17.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaBPQgPgEgPgKQgEgCgCgEQgDgEAAgFQAAgIAFgFQAFgFAIgBIAFABIAEACQAMAHALAEQALADAJAAQAKAAAFgDQAFgDAAgGIAAAAQgBgFgEgDQgFgDgHgDIgQgFQgMgDgLgGQgLgFgHgJQgHgJAAgQIAAAAQAAgRAIgLQAIgMANgGQANgGAQAAQANAAAMAEQANADAMAGQAFACADAFQADAEAAAGQAAAIgFAFQgGAFgIAAIgEAAIgEgCQgKgFgJgCQgJgDgHAAQgHAAgFADQgEADAAAFIAAABQAAAEAFADIALAGIAQAGQAMAEALAFQALAGAHAIQAIAJAAAPIAAAAQAAASgIAMQgIAMgOAFQgOAGgSAAQgOAAgQgFg");
	this.shape_13.setTransform(97.275,17.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AglBKQgTgLgLgTQgLgSAAgZIAAgBQABgWAJgTQAKgTATgMQARgLAXAAQAUAAAPAHQAPAHAKAMQAJAMAEANQAFAOAAANQAAAJgGAGQgGAGgKAAIhaAAQAFAPAKAIQAKAJAPAAQAJAAAIgDQAIgDAHgFIAFgDIAGgBQAIAAAFAFQAFAFAAAIQAAAFgCADIgEAGQgLAJgOAFQgOAFgRAAQgYAAgTgKgAAkgMQgDgQgIgJQgKgJgOAAQgNAAgJAJQgJAJgDAQIBFAAIAAAAg");
	this.shape_14.setTransform(80.6,17.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABVBMQgHgGgBgJIAAhFQABgQgIgJQgGgIgNAAQgOAAgGAIQgIAJAAAQIAABFQgBAJgGAGQgGAHgKAAQgJAAgGgHQgHgGAAgJIAAhFQAAgQgHgJQgHgIgNAAQgNAAgHAIQgIAJABAQIAABFQgBAJgHAGQgGAHgKAAQgJAAgGgHQgHgGAAgJIAAh3QAAgKAHgGQAGgHAJAAQAKAAAGAHQAHAGABAJIAAADQAHgLALgHQAMgIARAAQAQAAALAGQALAHAGAMQAMgNANgGQAMgHARABQAaAAAOAOQAOAPAAAeIAABUQAAAJgHAGQgGAHgJAAQgKAAgGgHg");
	this.shape_15.setTransform(57.15,17.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgPBpQgHgHAAgJIAAh2QAAgLAHgGQAHgHAIAAQAKAAAHAHQAGAGAAALIAAB2QAAAJgGAHQgHAHgKAAQgIAAgHgHgAgRhJQgHgGgBgKIAAgBQABgKAHgFQAHgGAKAAQALAAAHAGQAIAFAAAKIAAABQAAAKgIAGQgHAFgLABQgKgBgHgFg");
	this.shape_16.setTransform(38.2,14.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgaBPQgPgEgPgKQgEgCgCgEQgDgEAAgFQAAgIAFgFQAFgFAIgBIAFABIAEACQAMAHALAEQALADAJAAQAKAAAFgDQAFgDAAgGIAAAAQgBgFgEgDQgFgDgHgDIgQgFQgMgDgLgGQgLgFgHgJQgHgJAAgQIAAAAQAAgRAIgLQAIgMANgGQANgGAQAAQANAAAMAEQANADAMAGQAFACADAFQADAEAAAGQAAAIgFAFQgGAFgIAAIgEAAIgEgCQgKgFgJgCQgJgDgHAAQgHAAgFADQgEADAAAFIAAABQAAAEAFADIALAGIAQAGQAMAEALAFQALAGAHAIQAIAJAAAPIAAAAQAAASgIAMQgIAMgOAFQgOAGgSAAQgOAAgQgFg");
	this.shape_17.setTransform(25.825,17.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AglBKQgTgLgLgTQgLgSAAgZIAAgBQABgWAKgTQAJgTATgMQASgLAWAAQAVAAAOAHQAPAHAKAMQAJAMAEANQAFAOAAANQAAAJgGAGQgGAGgJAAIhbAAQAFAPAJAIQALAJAPAAQAJAAAIgDQAIgDAHgFIAFgDIAGgBQAIAAAFAFQAFAFAAAIQAAAFgCADIgEAGQgLAJgOAFQgOAFgRAAQgYAAgTgKgAAjgMQgBgQgJgJQgKgJgOAAQgNAAgJAJQgJAJgDAQIBEAAIAAAAg");
	this.shape_18.setTransform(9.15,17.575);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroupcopy5, new cjs.Rectangle(0,0,325.5,34.6), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("Au8EOIAAobId5AAIAAIbg");
	mask_6.setTransform(95.675,27);

	// Layer_3
	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("ABiCUQgIgGgEgKIgUgwIiEAAIgVAyQgFAJgHAGQgIAFgLAAQgNAAgIgJQgJgIAAgOIABgHIADgHIBpjsQAFgMAKgHQAKgHANAAIAEAAQANAAAJAHQAKAHAGAMIBpDsIACAHIABAHQgBANgIAJQgJAJgOAAQgLAAgIgGgAApAaIgphjIgpBjIBSAAg");
	this.shape_136.setTransform(159.65,26.075);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("ABfCPQgKgJAAgOIAAiVIg6BYQgGAIgGAEQgHAFgIAAQgJAAgGgFQgHgEgGgIIg4hXIAACUQgBAOgJAJQgJAJgPABQgNgBgJgJQgJgJAAgOIAAjuQAAgPAKgJQAIgJAPgBIAHAAQAKABAIAEQAIAFAEAIIBPCCIBQiDQAGgIAHgEQAHgFAKAAIAHAAQAOABAKAJQAJAJAAAPIAADuQAAAOgJAJQgKAJgOABQgNgBgJgJg");
	this.shape_137.setTransform(124.55,26.225);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgWCOQgKgJAAgOIAAjRIhAAAQgNAAgIgJQgJgIAAgNQAAgNAJgJQAIgIANgBIDBAAQANABAIAIQAJAJAAANQAAANgJAIQgIAJgNAAIhAAAIAADRQAAAOgKAJQgJAJgOABQgNgBgJgJg");
	this.shape_138.setTransform(91.975,26.325);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgyCSQgdgJgZgSQgGgEgDgGQgEgIAAgHQAAgNAJgJQAJgJANAAIALACIAIAEQARANATAHQATAIAVgBQAVABALgIQALgIAAgNIAAgBQABgIgFgHQgFgFgNgHQgOgFgYgGQgdgHgXgKQgXgLgLgQQgNgSAAgdIAAgBQAAgbAOgVQANgUAYgLQAYgLAegBQAaAAAZAHQAYAHAUANQAFADAFAHQAEAGAAAKQAAAOgJAIQgIAJgNAAQgFAAgEgBQgEgCgEgCQgQgKgRgFQgPgFgPAAQgSAAgKAIQgKAGAAAMIAAABQgBAKAGAGQAFAHAOAEQAPAGAZAGQAfAIAVALQAVAKALASQALAQAAAaIAAABQAAAfgOAUQgOAVgZALQgYALgiAAQgdAAgcgJg");
	this.shape_139.setTransform(64.7,26.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AhSCHQgjgVgVgjQgUgjgBgrIAAgBQABgqAUgjQAUgjAkgVQAlgVAtgBQAwABAjAVQAkAUAVAjQATAjABArIAAAAQAAArgVAkQgUAjglAVQgjAVgvAAQguAAgkgVgAguhRQgVANgLAVQgMAVAAAaIAAAAQAAAaAMAWQAMAVAVANQATANAaAAQAcAAATgNQAVgNAMgVQALgVAAgaIAAgBQAAgZgMgVQgLgWgVgMQgVgNgaAAQgaAAgUAMg");
	this.shape_140.setTransform(33,26.175);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#E83029").s().p("AtwEJQggAAgWgXQgWgWAAgfIAAl5QAAgfAWgXQAWgVAggBIbhAAQAfABAXAVQAWAXAAAfIAAF5QAAAfgWAWQgXAXgfAAg");
	this.shape_141.setTransform(95.675,26.45);

	var maskedShapeInstanceList = [this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0,0,191.4,53.6), null);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol14("synched",0);
	this.instance.setTransform(10.4,10.7,0.0918,0.0918,0,0,0,10.3,10.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:10.7,scaleX:1.0253,scaleY:1.0253,rotation:5.3825,x:10.3,y:10.75},15,cjs.Ease.quadOut).to({regY:10.6,scaleX:1.3526,scaleY:1.3526,rotation:75.0003,x:10.15},194).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-2,28.900000000000002,29.5);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol15("synched",0);
	this.instance.setTransform(15.4,15.05,0.1688,0.1688,0,0,0,15.4,15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:15.3,regY:15,scaleX:0.9712,scaleY:0.9712,rotation:-2.0088,x:15.3},14,cjs.Ease.quadOut).to({regY:15.1,scaleX:0.5696,scaleY:0.5696,rotation:-29.9987,x:15.4,y:15.1},195).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0.6,30,29.099999999999998);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol13("synched",0);
	this.instance.setTransform(10.35,10.65,0.0892,0.0892,0,0,0,10.1,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:10.3,scaleX:1,scaleY:1,rotation:-4.5361,x:10.3,y:10.75},14,cjs.Ease.quadOut).to({regY:10.6,rotation:-67.7206,y:10.6},195).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.3,-1.2,23.9,22.4);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sirsninas
	this.instance = new lib.Symbol12("synched",0);
	this.instance.setTransform(19.95,-64.65,1,1,0,0,0,10.3,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({startPosition:89},0).to({_off:true},1).wait(120));

	// sirsninas
	this.instance_1 = new lib.Symbol11("synched",0);
	this.instance_1.setTransform(273.45,-54.6,1,1,0,0,0,15.3,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({startPosition:89},0).to({_off:true},1).wait(120));

	// Layer_1
	this.instance_2 = new lib.Symbol10("synched",0);
	this.instance_2.setTransform(-7.6,78.95,1,1,44.9994,0,0,10.3,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89).to({startPosition:89},0).to({_off:true},1).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.1,-77.4,306.8,170.2);


(lib.Symbol29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.ClipGroup_6();
	this.instance.setTransform(60.65,16.4,0.6339,0.6339,0,0,0,95.7,25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.3,121.3,35.599999999999994);


(lib.Symbol28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol29("synched",0);
	this.instance.setTransform(60.65,16.75,0.0247,0.0247,0,0,0,60.6,16.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:16.7,scaleX:1.1195,scaleY:1.1195,y:16.7},14,cjs.Ease.quadOut).to({regY:16.8,scaleX:1,scaleY:1,x:60.6,y:16.8},14,cjs.Ease.quadOut).wait(53).to({startPosition:0},0).to({scaleX:1.056,scaleY:1.056,y:16.85},14,cjs.Ease.quadOut).to({scaleX:1,scaleY:1,y:16.8},14,cjs.Ease.quadOut).wait(55).to({startPosition:0},0).to({scaleX:1.056,scaleY:1.056,y:16.85},14,cjs.Ease.quadOut).to({scaleX:1,scaleY:1,y:16.8},14,cjs.Ease.quadOut).wait(57).to({startPosition:0},0).to({scaleX:1.056,scaleY:1.056,y:16.85},14,cjs.Ease.quadOut).to({scaleX:1,scaleY:1,y:16.8},14,cjs.Ease.quadOut).wait(27).to({startPosition:0},0).wait(1).to({scaleX:0.9882,scaleY:0.9882,y:16.75,alpha:0.9879},0).wait(1).to({scaleX:0.9719,scaleY:0.9719,y:16.8,alpha:0.9711},0).wait(1).to({scaleX:0.9503,scaleY:0.9503,y:16.75,alpha:0.9488},0).wait(1).to({scaleX:0.9224,scaleY:0.9224,y:16.8,alpha:0.9202},0).wait(1).to({scaleX:0.8872,scaleY:0.8872,x:60.55,y:16.75,alpha:0.884},0).wait(1).to({scaleX:0.8434,scaleY:0.8434,x:60.6,alpha:0.8389},0).wait(1).to({scaleX:0.7898,scaleY:0.7898,alpha:0.7837},0).wait(1).to({scaleX:0.7249,scaleY:0.7249,x:60.65,y:16.8,alpha:0.717},0).wait(1).to({scaleX:0.6481,scaleY:0.6481,x:60.6,y:16.75,alpha:0.6379},0).wait(1).to({scaleX:0.5598,scaleY:0.5598,alpha:0.5471},0).wait(1).to({scaleX:0.462,scaleY:0.462,x:60.65,alpha:0.4465},0).wait(1).to({scaleX:0.3588,scaleY:0.3588,alpha:0.3403},0).wait(1).to({scaleX:0.2545,scaleY:0.2545,alpha:0.233},0).wait(1).to({regY:16.6,scaleX:0.1533,scaleY:0.1533,x:60.7,alpha:0.1289},0).to({_off:true},1).wait(56));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-2,135.79999999999998,38.6);


(lib.Symbol27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(338.75,-80.6,1.0131,1.0131,0,0,0,48.8,48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(289.3,-129.3,98.89999999999998,97.60000000000001);


(lib.Symbol26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(303.45,-80,0.9687,0.9687,0,0,0,50.5,49.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(254.6,-128,97.70000000000002,96.3);


(lib.Symbol25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_4();
	this.instance.setTransform(60.65,52.7,0.9594,0.9594,0,0,0,66.5,50);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#28348A").s().p("AAMAyIAAgsIgXAAIAAAsIgQAAIAAhjIAQAAIAAAqIAXAAIAAgqIAQAAIAABjg");
	this.shape.setTransform(-0.4876,78.2421,0.9594,0.9594);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,4.8,128.1,95.5);


(lib.Symbol24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_5();
	this.instance.setTransform(28.55,53.5,0.9605,0.9605,0,0,0,44.6,49.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,5.7,85.8,95.39999999999999);


(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// t3
	this.instance = new lib.Symbol27("synched",0);
	this.instance.setTransform(150.55,218.2,1,1,0,0,0,50.9,55.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({y:188.2,alpha:1},14,cjs.Ease.quadOut).wait(43).to({startPosition:0},0).to({alpha:0},15,cjs.Ease.quadIn).wait(4));

	// t3
	this.instance_1 = new lib.Symbol26("synched",0);
	this.instance_1.setTransform(36.75,216.9,1,1,0,0,0,36.1,54);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({y:186.9,alpha:1},14,cjs.Ease.quadOut).wait(54).to({startPosition:0},0).to({alpha:0},15,cjs.Ease.quadIn).wait(3));

	// t2
	this.instance_2 = new lib.Symbol25("synched",0);
	this.instance_2.setTransform(150.45,83.55,1,1,0,0,0,47,52.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({y:53.55,alpha:1},14,cjs.Ease.quadOut).wait(65).to({startPosition:0},0).to({alpha:0},15,cjs.Ease.quadIn).wait(2));

	// t1
	this.instance_3 = new lib.Symbol24("synched",0);
	this.instance_3.setTransform(36.5,83.8,1,1,0,0,0,36.5,53.8);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:53.8,alpha:1},14,cjs.Ease.quadOut).wait(75).to({startPosition:0},0).to({alpha:0},15,cjs.Ease.quadIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,3.7,502.2,127.49999999999999);


(lib.Symbol21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAuQgMgGgHgMQgHgMAAgQQAAgOAHgMQAGgMAMgIQALgGAOgBQAMAAAKAFQAJAFAGAHQAGAIAEAIQACAJAAAIQAAAGgDADQgEAEgGAAIg5AAQACAKAHAFQAGAFAJAAQAGAAAFgCQAFgBAFgEIADgBIAEgBQAFAAADADQADADAAAGIgBAEIgDAEQgGAGgJADQgJADgMAAQgOAAgMgHgAAWgIQgBgJgGgGQgFgGgJAAQgIAAgGAGQgGAGgCAJIArAAIAAAAg");
	this.shape.setTransform(136.55,78.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAWAxQgEgFAAgGIAAgrQAAgKgFgFQgEgFgIAAQgIAAgFAFQgFAFAAAKIAAArQAAAGgEAFQgEAEgHAAQgFAAgFgEQgEgFAAgGIAAhLQAAgGAEgEQAFgEAFAAQAHAAAEAEQAEAEAAAGIAAACQAFgHAHgFQAGgFALAAQARAAAJAKQAJAKAAASIAAA0QAAAGgEAFQgEAEgHAAQgFAAgFgEg");
	this.shape_1.setTransform(124.85,78.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJBDQgEgEAAgHIAAhLQAAgFAEgEQAEgEAFgBQAGABAEAEQAFAEAAAFIAABLQAAAHgFAEQgEAEgGAAQgFAAgEgEgAgKguQgFgDAAgHQAAgHAFgDQAEgDAGgBQAHABAFADQAEADAAAHQAAAHgEADQgFAEgHAAQgGAAgEgEg");
	this.shape_2.setTransform(115.925,76.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA2AxQgEgFgBgGIAAgrQAAgKgEgFQgEgFgJAAQgIAAgFAFQgEAFAAAKIAAArQgBAGgEAFQgEAEgGAAQgFAAgEgEQgEgFAAgGIAAgrQAAgKgFgFQgEgFgIAAQgJAAgEAFQgFAFAAAKIAAArQAAAGgEAFQgEAEgHAAQgGAAgEgEQgEgFAAgGIAAhLQAAgGAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAGIAAACQAFgHAHgFQAHgFALAAQAKAAAIAEQAGAFAEAHQAHgIAIgEQAIgEALAAQAQAAAJAKQAJAJAAATIAAA0QAAAGgEAFQgEAEgGAAQgGAAgEgEg");
	this.shape_3.setTransform(103.975,78.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglArQgJgKAAgSIAAg1QAAgFAEgEQAEgEAGgBQAHABADAEQAFAEAAAFIAAAsQAAAKAEAFQAFAGAIgBQAIABAEgGQAFgFABgKIAAgsQAAgFAEgEQAEgEAGgBQAHABADAEQAFAEAAAFIAABLQAAAHgFAEQgDAEgHAAQgGAAgEgEQgEgEAAgHIAAgBQgFAHgIAFQgFAEgMABQgQAAgJgKg");
	this.shape_4.setTransform(88.85,78.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAaBGQgDgCgDgEIgYgjIgMALIAAAQQAAAHgEAEQgEAEgHAAQgGAAgEgEQgEgEAAgHIAAhvQAAgGAEgFQAEgEAGAAQAHAAAEAEQAEAFAAAGIAAA+IAjgiIAGgEQADgCAEAAQAGABADADQAEAEAAAFQAAAEgCADIgFAGIgXASIAcAmIACAEIABAFQAAAGgEAEQgEADgFAAQgFAAgCgBg");
	this.shape_5.setTransform(77.575,76.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaBGQgDgCgDgEIgYgjIgMALIAAAQQAAAHgEAEQgEAEgHAAQgGAAgEgEQgEgEAAgHIAAhvQAAgGAEgFQAEgEAGAAQAHAAAEAEQAEAFAAAGIAAA+IAjgiIAGgEQADgCAEAAQAGABADADQAEAEAAAFQAAAEgCADIgFAGIgXASIAcAmIACAEIABAFQAAAGgEAEQgEADgFAAQgFAAgCgBg");
	this.shape_6.setTransform(66.275,76.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAyQgIgFgEgGQgFgIAAgJIAAgBQAAgLAFgHQAFgHAKgDQAJgDAMAAIANAAIALADIAAgBQAAgJgFgFQgGgFgKAAIgLABIgJACIgCABIgCAAQgFAAgEgEQgDgDAAgFQAAgEACgDQACgDAEgCIAOgDQAIgCAJAAQAMAAAJADQAJADAFAGQAGAGACAHQADAJAAAKIAAAuQAAAGgEAEQgEAEgGAAQgHAAgDgDQgEgEAAgFQgFAGgIAEQgGADgLAAQgKAAgIgDgAgNAJQgFAEAAAHIAAABQAAAFAEAEQAFADAHAAQAJAAAGgFQAGgFAAgIIAAgGIgIgDIgKAAQgIAAgGADg");
	this.shape_7.setTransform(54.425,78.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgwBAQgFgEAAgGIAAhqQAAgGAFgEQADgEAHgBQAGABAEAEQAEAEAAAGIAAABQAGgHAHgFQAIgEAKAAQAMAAALAGQAKAGAHAMQAGALABASIAAAAQgBAQgGAMQgHAMgKAGQgLAGgMAAQgLAAgHgEQgIgFgFgGIAAAfQAAAGgEAEQgEAEgGAAQgHAAgDgEgAgMgnQgGADgDAHQgDAGgBAJIAAAAQABAJADAFQADAGAGAEQAGAEAGAAQAGAAAGgEQAGgEADgGQAEgFAAgJIAAAAQAAgJgEgGQgDgHgGgDQgGgEgGAAQgGAAgGAEg");
	this.shape_8.setTransform(42.8,80.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJBDQgEgEAAgHIAAhLQAAgFAEgEQAEgEAFgBQAGABAEAEQAFAEAAAFIAABLQAAAHgFAEQgEAEgGAAQgFAAgEgEgAgKguQgFgDAAgHQAAgHAFgDQAEgDAGgBQAHABAFADQAEADAAAHQAAAHgEADQgFAEgHAAQgGAAgEgEg");
	this.shape_9.setTransform(33.175,76.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaAwQgEgEgBgGIAAhLQABgGAEgEQAEgEAGAAQAHAAAEAEQADAEAAAGIAAAFIAFgKQACgEAFgDQADgCAFAAQAGAAAEADQAEAFgBAGQAAAFgCAEQgEADgFABQgKADgHAIQgEAKgBAOIAAAbQAAAGgDAEQgEAEgHABQgGgBgEgEg");
	this.shape_10.setTransform(26.75,78.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgkBDQgGAAgEgFQgEgEgBgGIAAhnQABgHAEgEQAEgEAGAAIBJAAQAGAAAEAEQAEAEAAAFQAAAFgEAFQgEADgGAAIg6AAIAAAbIAyAAQAFABAEADQAEAEAAAFQAAAFgEAEQgEADgFABIgyAAIAAAbIA7AAQAGABAEADQADAFABAFQgBAFgDAEQgEAEgGAAg");
	this.shape_11.setTransform(16.275,76.95);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(76,76,1.078,1.078,0,0,0,70.5,70.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152,152);


(lib.Symbol20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol21("synched",0);
	this.instance.setTransform(76.05,76.05,0.0237,0.0237,0,0,0,76,76);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({scaleX:1.1412,scaleY:1.1412,rotation:-14.999,y:76},14,cjs.Ease.quadOut).to({scaleX:1,scaleY:1,rotation:0,x:76},14,cjs.Ease.quadOut).wait(17).to({startPosition:0},0).to({scaleX:1.1822,scaleY:1.1822,rotation:-14.9985,x:76.1,y:76.05},15,cjs.Ease.quadOut).to({scaleX:1,scaleY:1,rotation:0,x:76,y:76},14,cjs.Ease.quadOut).wait(31).to({startPosition:0},0).to({regX:75.1,scaleX:0.0237,scaleY:0.0237,rotation:26.2017,y:76.05,alpha:0},15,cjs.Ease.quadIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,-13.8,180,179.9);


(lib.Symbol16copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sirsninas
	this.instance = new lib.Symbol22copy("synched",0);
	this.instance.setTransform(-59.3,114.65,1.3473,1.3473,0,0,0,42.2,53.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({startPosition:119},0).to({alpha:0,startPosition:134},15,cjs.Ease.quadIn).wait(1));

	// p3
	this.instance_1 = new lib.Symbol18copy("synched",0);
	this.instance_1.setTransform(44.95,236.1,1,1,0,0,0,90.2,182.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({x:222.2,alpha:1},14,cjs.Ease.quadOut).wait(101).to({startPosition:0},0).to({alpha:0},15,cjs.Ease.quadIn).wait(2));

	// p2
	this.instance_2 = new lib.Symbol19copy("synched",0);
	this.instance_2.setTransform(197.75,248.1,1,1,0,0,0,106,145.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:375,alpha:1},14,cjs.Ease.quadOut).wait(103).to({startPosition:0},0).to({alpha:0},15,cjs.Ease.quadIn).wait(3));

	// p1
	this.instance_3 = new lib.Symbol17copy("synched",0);
	this.instance_3.setTransform(-88.75,196.4,1,1,0,0,0,88.5,196.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({x:88.5,alpha:1},14,cjs.Ease.quadOut).wait(99).to({startPosition:0},0).to({alpha:0},15,cjs.Ease.quadIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177.2,0,658.3,418.3);


(lib.Symbol8copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroupcopy7();
	this.instance.setTransform(120.2,43.6,1,1,0,0,0,86.2,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.1,23.5,310.6,40.3);


(lib.Symbol7copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroupcopy8();
	this.instance.setTransform(146,-22.35,1,1,0,0,0,133.2,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.1,-42.4,348.8,40.199999999999996);


(lib.Symbol6copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroupcopy9();
	this.instance.setTransform(125.8,9.5,1,1,0,0,0,111.4,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.4,-10.6,222.7,40.3);


(lib.Symbol5copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroupcopy5();
	this.instance.setTransform(192.8,51.65,1,1,0,0,0,162.7,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.ClipGroupcopy6();
	this.instance_1.setTransform(192.7,52.25,1,1,0,0,0,171.8,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.9,31.5,343.70000000000005,40.8);


(lib.Symbol2copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// t4
	this.instance = new lib.Symbol5copy2("synched",0);
	this.instance.setTransform(150.3,156.75,1,1,0,0,0,193,18.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({y:116.15,alpha:1},14,cjs.Ease.quadOut).wait(274).to({startPosition:0},0).to({alpha:0},14,cjs.Ease.quadIn).wait(5));

	// Layer_2
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.setTransform(149.35,149.35);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween4("synched",0);
	this.instance_2.setTransform(149.35,103.95);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({_off:true,y:103.95},14,cjs.Ease.quadOut).wait(296));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},14,cjs.Ease.quadOut).wait(278).to({startPosition:0},0).to({alpha:0},14,cjs.Ease.quadIn).wait(4));

	// t3
	this.instance_3 = new lib.Symbol8copy2("synched",0);
	this.instance_3.setTransform(150.25,77,1.074,1.074,0,0,0,120.6,12.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({y:36.4,alpha:1},14,cjs.Ease.quadOut).wait(282).to({startPosition:0},0).to({alpha:0},14,cjs.Ease.quadIn).wait(3));

	// t2
	this.instance_4 = new lib.Symbol7copy2("synched",0);
	this.instance_4.setTransform(150.3,112.75,1.074,1.074,0,0,0,146.5,13.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).to({y:72.15,alpha:1},14,cjs.Ease.quadOut).wait(286).to({startPosition:0},0).to({alpha:0},14,cjs.Ease.quadIn).wait(2));

	// t1
	this.instance_5 = new lib.Symbol6copy2("synched",0);
	this.instance_5.setTransform(150.3,40.3,1.074,1.074,0,0,0,126,13.8);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-0.3,alpha:1},14,cjs.Ease.quadOut).wait(290).to({startPosition:0},0).to({alpha:0},14,cjs.Ease.quadIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.6,-20.7,369.40000000000003,230.89999999999998);


// stage content:
(lib._1000x200 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(500,100,1,1,0,0,0,501,101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(319));

	// atlaide
	this.instance_1 = new lib.Symbol20("synched",0);
	this.instance_1.setTransform(672.45,77.3,0.7005,0.7005,0,0,0,76.3,76.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(184).to({_off:false},0).wait(135));

	// PRECES
	this.instance_2 = new lib.Symbol16copy("synched",0);
	this.instance_2.setTransform(541.75,112.85,0.4478,0.4478,0,0,0,236.6,233.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(184).to({_off:false},0).wait(135));

	// T1
	this.instance_3 = new lib.Symbol2copy2("synched",0);
	this.instance_3.setTransform(160.15,78.3,0.8187,0.8187,0,0,0,150.2,64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(319));

	// logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E83029").s().p("AiPBJQABg9AggvQAng6A+gLQBRgOA0A6QAFAFAFAIIAIAPIACAGIgBABIgIgHQgUgUgUgJQgdgPgcAEQgdAEgXAWQghAegNAtQgEAPgNAHQgfAQgdAlIgFAEg");
	this.shape.setTransform(940.5299,33.6667,0.6981,0.6981);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#223F94").s().p("Ag0DuQgOgEgJgLQgIgLgBgPQgBgTAGgkIA8k8QAEgagKgXIgBgCQAVgJAXgEQAagDARADQAYAGAAAZQAAAXgKAlQgIAbgIAmIgNBBIgWBxQgGAfgCAlQgCAdAQAYIACADQgYAPgVAEQgIABgJAAQgKAAgMgCg");
	this.shape_1.setTransform(921.1874,48.2753,0.6981,0.6981);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E83029").s().p("AjyFYIALgGIAygYQCXhPBZiBQA2hNAUhTQANg4gGgzQgJg1gngoQgogog0gIQhKgLgvA/IgJAMIgBgBIABgEQAihWBYgOQBSgNBMAzQA7AnAVA9QAQAqgEAxQgEBTg4BUQgzBNhXBDQhtBWiUA3IgYAHIgEABg");
	this.shape_2.setTransform(959.8499,46.8753,0.6981,0.6981);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#223F94").s().p("Ah2DJIAAgEQACg1gGg2IgQh/QgJhDgNgpIgLgaIABgBQAkgaAmgCQAfgBANAbQAIARACAdIAIDVIABAAIABgBIBLh+QAYgrAOgtQALgigJgdIAAgDIAVACIAnAIIAGACQAdANgIAfQgFAWgRAhQhAB0hPBjQgbAlgjAQQgbANggAFg");
	this.shape_3.setTransform(881.74,51.4915,0.6981,0.6981);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#223F94").s().p("AhVC+QgfgJgTgWQgTgXgCggQgIhaAuhQQAig8AygjQA0gmBDADQAVABAQAGQAhAOADAlQAGBUhIAwQgtAdg5AIIghACQgEACAAABQgEAsAFAUQAMAqArgCQAmgCAogZIAkgYIAEgDQANAZgLAWQgHAOgQALQgeAUgrALQghAIgdAAQgdAAgbgHgAARiKQgNAIgIAOQgNAUgHAXIgSA7IAGAAQAagBATgHQAlgMANggQAEgLACgPQADgWgFgOQgGgRgSAAQgLAAgLAHg");
	this.shape_4.setTransform(902.7724,51.2402,0.6981,0.6981);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#223F94").s().p("AhTDAQhEgVgPhKIgEgfQADiFBihXQAogkA0gGQA7gHAoAeQArAhAFA0QAKBeg4BYQghAzgoAaQgsAbgtAAQgWAAgXgGgAgLh6QgMANgKAXQgeBIgBBPIAAAEQAAAdAHASQAIATASAFQAZAFARgTQAOgNAJgXQAlhagGhZQAAgRgJgPQgLgTgUAAIgBAAQgVAAgOASg");
	this.shape_5.setTransform(856.8671,51.2464,0.6981,0.6981);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#223F94").s().p("AiXETQgSgGAAgUQAAgXALgmQAkiIAQhRQAIgmAMhMQACgSACgmQADgdgOgWQAUgMAUgHQAggLAfABQAFAAAEACQAdAGgFAdIgQBOIhBFWIAAAGQAAABAFABQA3AIAogDQA3gEAwgTIAEgCIgCAdQgFAggUASQgLALgdAJQgeAIgrADQgiACg7gEQgdgBgXAFQgGACgHAAQgKAAgMgFg");
	this.shape_6.setTransform(831.2241,45.6129,0.6981,0.6981);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#223F94").s().p("AiMDBQgegKgKgkQgGgWAAgRQgFiCBWhwQAfgnAogPQA7gVA3AfQADACACgCQAQgPAaABQAdAAAcANIADABIgQAvQgPAxgLBDQgHAmgDAeQgGA0AFAcQACALAJAZQABADgCACQgjAbgqgLQgcgIgHgiQgCgOACgiIAFgtIAAgFIgMAUQggA4gfAfQgUAVgYALQgQAIgRAAQgMAAgNgEgAgYh8QgNAOgJAUQgiBOgEBMQAAAbAEAKQAEAKAGABQAHACAHgGQAHgGALgNQARgWAeg0QAjg8AUgtQACgDgBgDQgWgdgWgIQgJgEgIAAQgPAAgNANg");
	this.shape_7.setTransform(939.8571,51.3203,0.6981,0.6981);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(319));

	// datums
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2D2F35").s().p("AgQAqQgGgBgFgDIAAgMQAFADAGABIAMACQAJAAAEgEQAFgEAAgHQAAgEgDgDQgCgDgEgBQgFgCgHAAIgIAAIAAgJIAIAAQAHAAAEgCQAEgCACgDQACgDAAgEQAAgFgEgDQgDgDgGAAIgIABIgGACIgFADIgHgJQAFgEAGgCQAHgDAIAAQANAAAGAGQAIAFgBAKQAAAFgCAEQgCAFgEACQgEADgFABIAAAAQAKABAFAFQAFAFAAAIQAAAHgDAGQgEAFgHAEQgIADgJAAIgNgBg");
	this.shape_8.setTransform(123.9,182.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2D2F35").s().p("AgbAqIAAgKIAWgWIAJgKIAGgIQACgFAAgEQAAgGgEgEQgDgDgFAAQgFAAgFACIgJAHIgIgJIAIgGIAJgEQAFgBAFAAQAIAAAFADQAGADADAFQADAFAAAGQAAAHgCAGQgDAFgFAFIgMAMIgNAOIAAABIAmAAIAAALg");
	this.shape_9.setTransform(117.275,182.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2D2F35").s().p("AgPAmQgGgFgDgKQgDgJAAgOQAAgMADgKQACgJAHgGQAGgFAJAAQAKAAAGAFQAGAGADAJQADAKAAAMQAAAKgBAIQgCAIgDAGQgEAFgFADQgFADgIAAQgJAAgGgFgAgIgbQgDAEgBAHQgCAHAAAJQAAALACAHQABAHADADQAEAEAEAAQAFAAAEgEQADgDABgHQACgHAAgLQAAgJgCgHQgBgHgDgEQgEgEgFAAQgFAAgDAEg");
	this.shape_10.setTransform(110.675,182.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2D2F35").s().p("AgbAqIAAgKIAWgWIAJgKIAGgIQACgFAAgEQAAgGgEgEQgDgDgFAAQgFAAgFACIgJAHIgIgJIAIgGIAJgEQAFgBAFAAQAIAAAFADQAGADADAFQADAFAAAGQAAAHgCAGQgDAFgFAFIgMAMIgNAOIAAABIAmAAIAAALg");
	this.shape_11.setTransform(104.025,182.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2D2F35").s().p("AgFAGQgCgCAAgEQAAgDACgCQADgCACgBQAEABACACQADACAAADQAAAEgDACQgCACgEAAQgCAAgDgCg");
	this.shape_12.setTransform(99.1,186.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2D2F35").s().p("AgPAmQgGgFgDgKQgDgJAAgOQAAgMADgKQACgJAHgGQAGgFAJAAQAKAAAGAFQAGAGADAJQADAKAAAMQAAAKgBAIQgCAIgDAGQgEAFgFADQgFADgIAAQgJAAgGgFgAgIgbQgDAEgBAHQgCAHAAAJQAAALACAHQABAHADADQAEAEAEAAQAFAAAEgEQADgDABgHQACgHAAgLQAAgJgCgHQgBgHgDgEQgEgEgFAAQgFAAgDAEg");
	this.shape_13.setTransform(94.225,182.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2D2F35").s().p("AAFAqIAAg1IAAgGIAAgEIAAgGIgDADIgCAEIgKAHIgHgIIAYgUIALAAIAABTg");
	this.shape_14.setTransform(86.9,182.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2D2F35").s().p("AgFAGQgDgCAAgEQAAgDADgCQACgCADgBQADABADACQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_15.setTransform(82.7,186.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2D2F35").s().p("AgKApQgFgDgEgEQgEgFgCgHQgCgGAAgKIABgOQABgGACgGQADgHAEgFQAFgFAHgCQAGgDAJAAIAGAAIAFABIAAAMIgFgBIgFgBQgLAAgEAEQgGAEgDAHQgCAGgBAKIABAAIAEgGQADgCAEgBQADgCAEABQAHAAAGACQAFAEADAEQADAGAAAJQAAAIgDAGQgEAHgGADQgGADgIABQgFAAgGgCgAgGABQgEACgCADQgCADAAADIABAHIADAHIAFAEQADACADAAQAGgBAEgEQAEgEAAgIQAAgIgEgEQgDgDgHAAQgEAAgDABg");
	this.shape_16.setTransform(77.825,182.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2D2F35").s().p("AAFAqIAAg1IAAgGIAAgEIAAgGIgDADIgDAEIgJAHIgHgIIAYgUIALAAIAABTg");
	this.shape_17.setTransform(70.45,182.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2D2F35").s().p("AgOAGIAAgLIAdAAIAAALg");
	this.shape_18.setTransform(62.925,183.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2D2F35").s().p("AgFAGQgDgCABgEQgBgDADgCQADgCACgBQADABADACQADACAAADQAAAEgDACQgDACgDAAQgCAAgDgCg");
	this.shape_19.setTransform(56.45,186.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2D2F35").s().p("AgPAmQgGgFgDgKQgDgJAAgOQAAgMADgKQACgJAHgGQAGgFAJAAQAKAAAGAFQAGAGADAJQADAKAAAMQAAAKgBAIQgCAIgDAGQgEAFgFADQgFADgIAAQgJAAgGgFgAgIgbQgDAEgBAHQgCAHAAAJQAAALACAHQABAHADADQAEAEAEAAQAFAAAEgEQADgDABgHQACgHAAgLQAAgJgCgHQgBgHgDgEQgEgEgFAAQgFAAgDAEg");
	this.shape_20.setTransform(51.575,182.725);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2D2F35").s().p("AAFAqIAAg1IAAgGIAAgEIAAgGIgDADIgDAEIgJAHIgHgIIAYgUIALAAIAABTg");
	this.shape_21.setTransform(44.25,182.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2D2F35").s().p("AgFAGQgCgCgBgEQABgDACgCQACgCADgBQAEABACACQACACABADQgBAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape_22.setTransform(40,186.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2D2F35").s().p("AgPAmQgGgFgDgKQgDgJAAgOQAAgMADgKQACgJAHgGQAGgFAJAAQAKAAAGAFQAGAGADAJQADAKAAAMQAAAKgBAIQgCAIgDAGQgEAFgFADQgFADgIAAQgJAAgGgFgAgIgbQgDAEgBAHQgCAHAAAJQAAALACAHQABAHADADQAEAEAEAAQAFAAAEgEQADgDABgHQACgHAAgLQAAgJgCgHQgBgHgDgEQgEgEgFAAQgFAAgDAEg");
	this.shape_23.setTransform(35.125,182.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2D2F35").s().p("AAFAqIAAg1IAAgGIAAgEIAAgGIgDADIgDAEIgJAHIgHgIIAYgUIALAAIAABTg");
	this.shape_24.setTransform(27.8,182.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(319));

	// cta
	this.instance_4 = new lib.Symbol28("synched",0);
	this.instance_4.setTransform(906.5,152.35,1.1645,1.1645,0,0,0,60.8,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(319));

	// Layer_2
	this.instance_5 = new lib.Symbol23("synched",0);
	this.instance_5.setTransform(448.05,166.85,0.9003,0.9003,0,0,0,101.3,125.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(84).to({_off:false},0).to({_off:true},105).wait(130));

	// sirsninas
	this.instance_6 = new lib.Symbol9("synched",0);
	this.instance_6.setTransform(450.5,106.05,0.8752,0.8752,0,0,0,10.4,10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(74).to({startPosition:74},0).to({alpha:0,startPosition:89},15,cjs.Ease.quadOut).to({_off:true},1).wait(229));

	// bg
	this.instance_7 = new lib.Symbol1("synched",0);
	this.instance_7.setTransform(560.6,149.7,0.6039,0.6039,0,0,0,650,414.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:650.1,regY:414.4,scaleX:0.7377,scaleY:0.7377,x:570.2,y:149.8},74).to({regX:650,regY:414.5,scaleX:0.7528,scaleY:0.7528,x:572.1,y:149.75,alpha:0},15).to({_off:true},1).wait(229));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(499,-57.7,550.8,420.7);
// library properties:
lib.properties = {
	id: 'C53958A58FAA64469D64821D3F4222FD',
	width: 1000,
	height: 200,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/p1.png", id:"p1"},
		{src:"images/p2.png", id:"p2"},
		{src:"images/p3.png", id:"p3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C53958A58FAA64469D64821D3F4222FD'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;