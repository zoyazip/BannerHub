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
p.nominalBounds = new cjs.Rectangle(0,0,900,775);


(lib.bite = function() {
	this.initialize(img.bite);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,293);


(lib.kreisais = function() {
	this.initialize(img.kreisais);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,293);


(lib.labais = function() {
	this.initialize(img.labais);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,293);// helper functions:

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


(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0_ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAQAbIAAgeIgLAQIgKAAIgKgQIAAAAIAAAeIgPAAIAAg0IAOAAIAQAaIAAAAIAQgaIAPAAIAAA0g");
	this.shape.setTransform(436.15,70.0332,0.5546,0.5546);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAJAbIgTgYIAAAYIgOAAIAAg0IAOAAIAAAZIASgZIAQAAIAAABIgUAZIAVAYIAAACg");
	this.shape_1.setTransform(432.6005,70.0332,0.5546,0.5546);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcAAQAAgmAcAAQAdAAAAAmQAAAngdAAQgcAAAAgngAgJgTQgDAGAAANQAAANADAGQADAHAGAAQANAAAAgaQAAgZgNAAQgGAAgDAGg");
	this.shape_2.setTransform(427.6228,69.437,0.5546,0.5546);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcAAQAAgmAcAAQAdAAAAAmQAAAngdAAQgcAAAAgngAgJgTQgDAGAAANQAAAaAMAAQANAAAAgaQAAgZgNAAQgGAAgDAGg");
	this.shape_3.setTransform(424.0456,69.437,0.5546,0.5546);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcAAQAAgmAcAAQAdAAAAAmQAAAngdAAQgcAAAAgngAgJgTQgDAGAAANQAAAaAMAAQANAAAAgaQAAgZgNAAQgGAAgDAGg");
	this.shape_4.setTransform(420.4684,69.437,0.5546,0.5546);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcAAQAAgmAcAAQAdAAAAAmQAAAngdAAQgcAAAAgngAgMAAQAAAaAMAAQANAAAAgaQAAgZgNAAQgMAAAAAZg");
	this.shape_5.setTransform(415.4769,69.437,0.5546,0.5546);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAAQAAgmAcAAQAdAAAAAmQAAAngdAAQgcAAAAgngAgMAAQAAAaAMAAQANAAAAgaQAAgZgNAAQgMAAAAAZg");
	this.shape_6.setTransform(411.8996,69.437,0.5546,0.5546);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAlIAAgNIARAAIAAgtIgBAAIgNAEIgBAAIAAgNIATgGIAKAAIAAA8IAOAAIAAANg");
	this.shape_7.setTransform(408.3778,69.437,0.5546,0.5546);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AALAbIAAggIgTAgIgQAAIAAg0IAOAAIAAAfIATgfIAQAAIAAA0g");
	this.shape_8.setTransform(403.3586,70.0332,0.5546,0.5546);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbAPQAFAAADgDQACgEABgJIABgZIArAAIAAA0IgPAAIAAgoIgOAAIgCAOQgBAPgGAGQgFAGgMAAg");
	this.shape_9.setTransform(399.6288,70.0471,0.5546,0.5546);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AALAbIAAggIgTAgIgQAAIAAg0IAOAAIAAAfIATgfIAQAAIAAA0g");
	this.shape_10.setTransform(396.1764,70.0332,0.5546,0.5546);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgkCIIAAjVIhRAAIAAg5IDrAAIAAA5IhSAAIAADVg");
	this.shape_11.setTransform(435.2765,57.4158,0.5546,0.5546);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhgBmQgignAAg/QAAg8AjgoQAlgrA+AAQA/AAAiAjQAeAfAAAzQAAAYgEAYIi0AAQACAdASAQQASAQAdAAQApAAAugRIARA3QgwAXg+AAQhCAAgmgqgAglhFQgPASgBAaIByAAIABgIQAAg3g5AAQgaAAgQATg");
	this.shape_12.setTransform(419.7474,57.4158,0.5546,0.5546);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiPBMQAZAAANgPQAPgUADgyIAHh/IDgAAIAAEOIhKAAIAAjVIhTAAIgFBMQgHBSgfAfQgaAbg9AAg");
	this.shape_13.setTransform(401.3204,57.5267,0.5546,0.5546);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AALAaIAAgRIgGAAIgOARIgPAAIAAgBIAPgRQgMgDAAgNQAAgSAVAAIAZAAIAAA0gAgGgIQAAAGAGABIALAAIAAgOIgLAAQgGAAAAAHg");
	this.shape_14.setTransform(428.3716,45.5471,0.5546,0.5546);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AALAaIAAggIAAAAIgTAgIgQAAIAAg0IAOAAIAAAhIABAAIASghIARAAIAAA0g");
	this.shape_15.setTransform(425.03,45.5471,0.5546,0.5546);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGAaIAAgpIgQAAIAAgLIAtAAIAAALIgQAAIAAApg");
	this.shape_16.setTransform(421.841,45.5471,0.5546,0.5546);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AALAaIAAgUIgUAAIAAAUIgPAAIAAg0IAPAAIAAAVIAUAAIAAgVIAOAAIAAA0g");
	this.shape_17.setTransform(418.652,45.5471,0.5546,0.5546);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgaALQAAgQAaAAIAHAAIAAgDQAAgHgIAAQgKAAgIAEIgDgMQAKgEALAAQAWAAAAAVIAAAVQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAIAEAAIAAAKIgIAAQgIABgDgHQgHAHgJAAQgSAAAAgRgAgMAKQAAAGAIABQAGAAAFgFIAAgJIgGAAQgNAAAAAHg");
	this.shape_18.setTransform(415.255,45.5471,0.5546,0.5546);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgZAmIAAhKIAKAAIACAFQAKgGAGAAQALAAAHAIQAFAIABAMQgBALgFAIQgHAIgLAAQgGAAgHgFIAAAZgAgKgWIAAAYQAEAEAGAAQALAAAAgPQAAgQgLAAQgFAAgFADg");
	this.shape_19.setTransform(411.858,46.1017,0.5546,0.5546);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgaALQAAgQAaAAIAHAAIAAgDQAAgHgIAAQgJAAgJAEIgEgMQALgEALAAQAWAAAAAVIAAAVQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAIAEAAIAAAKIgIAAQgIABgDgHQgHAHgJAAQgSAAAAgRgAgMAKQAAAGAHABQAGAAAGgFIAAgJIgGAAQgNAAAAAHg");
	this.shape_20.setTransform(408.3778,45.5471,0.5546,0.5546);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgYAlIAAhJIAxAAIAAAMIgiAAIAAA9g");
	this.shape_21.setTransform(405.785,44.9371,0.5546,0.5546);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AmaHLQAYgUAUgZIUIAAIAAqHIzVAAIAAgtIUDAAIAALhgAs3G+QhQgNhAgXIAribQA3AYBEAMQA6ALAxgBQBYABAugmQAtglAAhEQAAhCgrgfQgtgjhhAAQhEAAhxAIIgWgXIAynWIHtAAIAACaIlSAAIgSCyQAlgDAVAAQCcAABUBCQBeBHAACXQAACOhkBPQhjBOiwABQgzAAhJgNg");
	this.shape_22.setTransform(401.7255,52.9803,0.5546,0.5546);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(348.1,27.6,107.29999999999995,50.800000000000004);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgLAMQgEgEgBgIQABgGAEgFQAFgEAGgBQAHABAFAEQAFAFAAAGQAAAIgFAEQgFAFgHAAQgGAAgFgFg");
	this.shape.setTransform(255.975,38.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA1B+IAAiXIAAAAIhpCXIgTAAIAAi2IASAAIAACYIABAAIBpiYIASAAIAAC2gAgbhiQgLgHgHgMIAKgIQAFAHAJAGQAIAGAPAAQAQAAAIgGQAJgGAEgHIALAIQgHAMgKAHQgMAIgTAAQgSAAgLgIg");
	this.shape_1.setTransform(241.25,27.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABFBbIAAi1IASAAIAAC1gAhWBbIAAi1IASAAIAABLIAxAAQAdAAAQAOQAQAMABAbQgBAagQAOQgQANgdAAgAhEBLIAvAAQANAAAKgDQAKgEAHgHQAGgJAAgOQAAgOgGgIQgHgJgKgDQgKgDgNgBIgvAAg");
	this.shape_2.setTransform(218.975,30.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhBBcIAAi2IA8AAQAfgBAPAMQAPAMAAAaQAAAMgHALQgIALgLAFIAAAAQAQADAKALQAJALABARQgBAQgFALQgGAMgOAGQgOAHgXAAgAgvBLIAyAAQAUABALgJQANgIAAgSQAAgTgNgIQgLgIgUABIgyAAgAgvgJIApAAQATABALgIQANgHAAgSQAAgTgMgHQgMgHgTAAIgpAAg");
	this.shape_3.setTransform(198.35,30.749);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA1BbIAAiXIAAAAIhpCXIgTAAIAAi1IASAAIAACXIABAAIBpiXIASAAIAAC1g");
	this.shape_4.setTransform(178.25,30.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsB/QgTgLgMgXQgLgXAAgkQgBgiAFgcQAEgcANgVQANgWAbgOQAPgGARgFIAlgHIAfgGIAAASQgMADgPABQgPACgRAEQgRADgRAJQgTAKgKAOQgLAOgEATQgFATAAAZIAAAAQAKgRASgKQATgKAXgBQAZABATAKQATALALASQAKATAAAbQAAAZgKATQgLAUgUALQgTALgbAAIgBAAQgYAAgTgLgAgjgIQgPAIgIAQQgJAPAAAVQAAAUAJAQQAIAPAPAJQAPAJAUAAQAWAAAPgJQAPgJAIgPQAIgQAAgUQAAgVgIgPQgIgQgPgIQgPgIgWAAQgUAAgPAIg");
	this.shape_5.setTransform(156.9725,26.6761);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRBUQgTgNgIgUQgJgVAAgYIgsAAIAABVIgSAAIAAi1IASAAIAABQIAtAAQABgXAIgUQAJgTASgMQARgMAeAAQAgAAATAOQATANAIAXQAHAWAAAYQAAAagHAVQgIAXgTANQgTANggABQgfgBgRgMgAgJhDQgOAMgGASQgFASAAATQAAAUAFASQAGASAOAMQANAMAbAAQAbAAAOgMQAOgMAFgSQAGgSAAgUQAAgTgGgSQgFgSgOgMQgOgMgbAAQgbAAgNAMg");
	this.shape_6.setTransform(131.7,30.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhPBdIAAgRQAIAAAGgCQAGgCAEgIQAEgIADgRQACgRABgeIAEhUIB5AAIAAC2IgSAAIAAimIhWAAIgDBCQgBAhgDAUQgEAVgFAKQgHALgJAEQgIAEgMAAIgDAAg");
	this.shape_7.setTransform(105.75,30.8778);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgyBTQgTgNgHgXQgIgVAAgaQAAgYAIgWQAHgXATgNQATgOAfAAQAgAAATAOQATANAHAXQAIAWAAAYQAAAagIAVQgHAXgTANQgTANggABQgfgBgTgNgAgohDQgOAMgGASQgFASAAATQAAAUAFASQAGASAOAMQAPAMAZAAQAaAAAPgMQAOgMAGgSQAFgSAAgUQAAgTgFgSQgGgSgOgMQgPgMgaAAQgZAAgPAMg");
	this.shape_8.setTransform(86.375,30.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABCByIgCgtIiAAAIgCAtIgPAAIgDg+IAMAAQAJgIAGgKQAHgLAEgQQAEgPACgZIAFhQIBnAAIAAClIARAAIgDA+gAgXggQgCAagEAPQgEAQgFAKQgGAKgHAHIBlAAIAAiVIhEAAg");
	this.shape_9.setTransform(65.325,33.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhBCDIgMgDIAAgQIALACIANABQANgBAJgJQAJgKAGgPIALgdIhKi0IAAgCIATAAIA+CdIABAAIA7idIASAAIAAACIhODTQgIAZgNAMQgOAMgTABIgNgBg");
	this.shape_10.setTransform(47.1,34.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhNCEIAAkBIAPAAIABARIABAAQALgJAQgIQAQgGAUAAQAcAAAQANQAQANAIAWQAHAWAAAbQAAAbgHAVQgIAVgQANQgQANgcABQgUAAgQgHQgOgGgLgIIgBAAIAABbgAgghrQgRAHgKALIAABsQAKAMARAHQAQAHASAAQAVAAANgLQAMgKAGgSQAFgSAAgWQAAgXgFgRQgGgTgMgKQgNgLgVAAQgSAAgQAHg");
	this.shape_11.setTransform(28.2,34.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIBbIAAilIg7AAIAAgQICIAAIAAAQIg8AAIAAClg");
	this.shape_12.setTransform(9.6,30.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,272.6,50.3);


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
	this.shape.graphics.f("#001E50").s().p("EghIATiMAAAgnDMBCRAAAMAAAAnDg");
	this.shape.setTransform(212.1,125.0495,1,1.5024);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-62.7,424.2,375.59999999999997);


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
	this.instance = new lib.labais();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350,293);


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
	this.instance = new lib.kreisais();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350,293);


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
	this.instance = new lib.bite();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350,293);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#001E50").s().p("AgaAfQgJgMAAgTQAAgSAJgNQAKgNARAAQARAAAKALQAIAKAAAQIgBAKIg4AAQAAAMAHAJQAIAIAKAAQAMAAALgHIAFALQgMAJgSAAQgSAAgKgOgAgOgYQgFAGgBAMIApAAIAAgFQAAgJgFgFQgFgHgKAAQgJAAgGAIg");
	this.shape.setTransform(119.175,23.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#001E50").s().p("AgaAfQgJgMAAgTQAAgSAJgNQAKgNARAAQARAAAKALQAIAKAAAQIgBAKIg4AAQAAAMAHAJQAIAIAKAAQAMAAALgHIAFALQgMAJgSAAQgSAAgKgOgAgOgYQgFAGgBAMIApAAIABgFQAAgJgGgFQgFgHgKAAQgJAAgGAIg");
	this.shape_1.setTransform(110.175,23.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#001E50").s().p("AATAqIAAglIglAAIAAAlIgOAAIAAhTIAOAAIAAAjIAlAAIAAgjIAOAAIAABTg");
	this.shape_2.setTransform(100.875,23.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#001E50").s().p("AgbAzQgKgMAAgZQAAgdADgNQAIgVAUgIQALgDAdgDIAAANQgaACgKAFQgMAEgEAKQgFAJAAARIAAABQALgOAPAAQARAAAJALQAJAKAAASQABASgLALQgKAMgSAAQgRAAgKgNgAgRADQgGAIAAAMQAAAMAGAIQAIAIAJAAQALAAAGgIQAHgIAAgMQAAgMgHgIQgGgGgLgBQgKABgHAGg");
	this.shape_3.setTransform(91.3,21.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#001E50").s().p("AgdAfQgIgLgBgUQABgTAIgMQALgNASAAQAUAAAKANQAJAMAAATQAAAUgJALQgLAOgTAAQgSAAgLgOgAgXAAQAAAhAXgBQAYABgBghQABgggYAAQgXAAAAAgg");
	this.shape_4.setTransform(81.55,23.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#001E50").s().p("AgjA9IAAh2IAKAAIACAHIAAAAQAOgKAMAAQARAAAJANQAHAMAAAUQAAATgHALQgJAOgRAAQgNAAgLgIIAAAAIAAAogAgVgoIAAAxQAIAHANAAQAVABAAggQAAghgVAAQgMAAgJAIg");
	this.shape_5.setTransform(72.2,24.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#001E50").s().p("AAcA1IgBgVIg1AAIgBAVIgLAAIgCgiIAHAAQAKgLABgaIACgiIA0AAIAABHIAJAAIgDAigAgJgSQgCAdgGAIIAjAAIAAg7IgZAAg");
	this.shape_6.setTransform(62.225,24.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#001E50").s().p("AgdAfQgIgLAAgUQAAgsAlAAQATAAAKANQAJAMAAATQAAAUgJALQgKAOgTAAQgTAAgKgOgAgXAAQAAAhAXgBQAYABAAghQAAgggYAAQgXAAAAAgg");
	this.shape_7.setTransform(52.925,23.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#001E50").s().p("AAbA8IAAhqIg1AAIAABqIgPAAIAAh3IBTAAIAAB3g");
	this.shape_8.setTransform(42.275,21.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ApDDcQhbAAhAhBQhBhAAAhbQAAhaBBhAQBAhBBbAAISHAAQBbAABABBQBBBAAABaQAABbhBBAQhABBhbAAg");
	this.shape_9.setTransform(80,22);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4CC7F4").s().p("ApDDcQhbAAhAhBQhBhAAAhbQAAhaBBhAQBAhBBbAAISHAAQBbAABABBQBBBAAABaQAABbhBBAQhABBhbAAg");
	this.shape_10.setTransform(80,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,44);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(29,0,0.9066,0.9066);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(29,0,816,702.6);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ag0BTQgWgMgLgXQgLgWAAgaQAAgaALgWQALgWAWgNQAVgNAfAAQAgAAAVANQAWANALAWQALAWAAAaQAAAagLAWQgLAXgWAMQgVAOggAAQgfAAgVgOgAgfgpQgMAOAAAbQAAAbAMAOQAMAOATAAQAUAAAMgOQAMgOAAgbQAAgbgMgOQgMgNgUAAQgTAAgMANg");
	this.shape.setTransform(241.175,69.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqCBQgSgFgNgHIAOgmQAMAGAOAEQAOAEARAAQAWAAAKgKQALgJAAgXIAAgNIgBAAQgIAGgNAGQgMAGgSAAQgaAAgSgNQgSgMgJgWQgJgUAAgbQAAgbAJgVQAJgWASgNQASgNAaAAQAMAAALAEQAKADAIAFIAOAKIABAAIAHgQIAoAAIAACqQAAAugZAXQgYAYgtAAQgWgBgSgFgAgchNQgLAOAAAZQAAAZALANQAKAOAWAAQAKAAAJgDIASgHIAAhVQgIgEgKgDQgJgEgKAAQgWABgKAOg");
	this.shape_1.setTransform(218.575,73.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag4BeIAAi2IApAAIAHAWIABAAQAEgGAFgGQAGgHAJgEQAJgEAMAAIAKAAIAJACIgEArIgKgBIgJgBQgPABgKAFQgJAGgFAGIAAB+g");
	this.shape_2.setTransform(201.65,69.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag/BaQgOgIgHgNQgHgNAAgRQgBgeAWgOQAVgPAwAAIAYAAIAAgIQAAgLgGgGQgFgFgHgCQgGgCgGAAQgQAAgPADQgQAEgOAGIgMgnQAPgGATgGQAUgEAVAAQAnAAAUATQATATAAAkIAABJIABAGQABACAEgBIAOAAIAAAjIgNACIgOABQgPAAgIgFQgJgGgEgLIgBAAQgKAIgQAIQgPAGgRABQgVAAgNgHgAgfATQgLAFAAALQAAALAGAFQAHAGALAAQALAAAKgDQAMgEAIgFIAAghIgTAAQgYAAgLAHg");
	this.shape_3.setTransform(183.3994,69.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpB2QgcgRgPgeQgOgeAAgpQAAgoAOgeQAPgeAcgRQAbgQAogBQASAAATAEQASAFATAIIgPAqQgPgHgOgEQgOgDgQAAQgXABgPALQgQALgHAUQgIAUAAAaQAAAbAIAUQAHAUAQALQAPALAXABQAQAAAOgDQAOgEAPgHIAPAqQgTAIgSAFQgTAEgSAAQgogBgbgQg");
	this.shape_4.setTransform(161.65,66.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhLBcIAAgbIBXh0IAAAAIhRAAIAAgnICQAAIAAAbIhXByIAAACIBXAAIAAAng");
	this.shape_5.setTransform(132.05,69.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhKBcIAAgbIBXh0IAAAAIhSAAIAAgnICRAAIAAAbIhYByIAAACIBYAAIAAAng");
	this.shape_6.setTransform(114.1,69.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhEBKQgRgTAAgiIAAhyIAzAAIAABtQAAASAHAJQAIAJAQAAQAMAAAKgFQAKgFAGgFIAAiCIAzAAIAAC2IgpAAIgHgSIgBAAIgNAKQgIAGgLADQgJAEgPAAQghAAgQgUg");
	this.shape_7.setTransform(94.225,70.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhkCBIAAkBIBfAAQAuAAAYAQQAYARABAlQgBAVgJANQgKANgOAGIAAABQAVAGAMAPQALAPABAYQAAAkgXATQgWASgyAAgAgvBVIAwAAQAYAAAKgIQALgIAAgRQAAgSgLgIQgLgIgYAAIgvAAgAgvgXIAoAAQAVAAALgHQAKgGAAgRQAAgSgKgGQgKgHgXAAIgnAAg");
	this.shape_8.setTransform(71.675,66.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAXQgIgJAAgOQAAgOAIgIQAJgKAOABQAPgBAJAKQAIAIAAAOQAAAOgIAJQgJAKgPAAQgOAAgJgKg");
	this.shape_9.setTransform(44.625,76.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhqCBIAAkBIBRAAQAvAAAeAPQAdAPANAcQANAdAAApQAAAqgNAdQgNAcgdAPQgeAPgvAAgAg1BVIAXAAQAgAAASgJQASgJAHgTQAHgTgBgdQABgcgHgTQgHgTgSgJQgSgJggAAIgXAAg");
	this.shape_10.setTransform(26.925,66.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZCBIAAkBIAzAAIAAEBg");
	this.shape_11.setTransform(7.65,66.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,39.2,254.5,50.3);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgXB7QgIgJAAgOQAAgPAIgJQAJgJAOAAQAPAAAJAJQAIAJAAAPQAAAOgIAJQgJAJgPAAQgOAAgJgJgAgQAjIgKhtIAAg5IA2AAIAAA5IgLBtg");
	this.shape.setTransform(207.175,67.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/BaQgOgIgHgNQgHgNAAgRQgBgeAWgOQAVgPAwAAIAYAAIAAgIQAAgLgGgGQgFgFgHgCQgGgCgGAAQgQAAgPAEQgQADgOAGIgMgnQAPgGATgGQAUgEAVAAQAnAAAUATQATATAAAkIAABJIABAGQABACAEgBIAOAAIAAAjIgNACIgOABQgPAAgIgFQgJgGgEgLIgBAAQgKAIgQAIQgPAGgRABQgVAAgNgHgAgfATQgLAFAAALQAAALAGAFQAHAGALAAQALAAAKgDQAMgEAIgFIAAggIgTAAQgYgBgLAHg");
	this.shape_1.setTransform(191.6994,70.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAfBcIhChQIgBAAIAABQIgyAAIAAi3IAyAAIAABYIABAAIBAhYIA3AAIAAADIhHBZIBKBYIAAADg");
	this.shape_2.setTransform(172.125,70.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhgBdIAAgqQAKABAIgFQAIgEAFgMQAFgNACgYIAEhWICXAAIAAC2IgyAAIAAiPIg3AAIgEAzQgDAmgKAVQgKAVgSAHQgRAIgXAAIgDAAg");
	this.shape_3.setTransform(148.925,70.8765);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AguB9QgVgNgKgVQgKgXAAgbQAAgaAKgVQAKgWAVgNQAUgOAdAAQAeAAASALQAUALAIASQAJAQAAAWIgBASIgBAPIh6AAQACAUAMAKQAMALAUAAQAPABAPgEQAPgDANgFIAMAlQgOAHgTAEQgTAEgXABQgegBgVgNgAgRgMQgJAHgFAJQgEAJgBALIBNAAIAAgCIAAgDQABgQgJgJQgIgLgVgBQgMABgJAFgAAZhZQgIgIAAgNQAAgLAIgJQAIgHAOgBQAOABAHAHQAJAJAAALQAAANgJAIQgHAIgOAAQgOAAgIgIgAg5hZQgJgIAAgNQAAgLAJgJQAIgHANgBQAOABAIAHQAIAJAAALQAAANgIAIQgIAIgOAAQgNAAgIgIg");
	this.shape_4.setTransform(128.25,66.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAeBcIAAg6QgKAEgLACQgLACgQAAQgTAAgNgIQgOgHgHgMQgHgNAAgOIAAhPIAyAAIAABMQAAAIAGAEQAGAFANAAQAMAAAHgCQAJgBAFgDIAAhXIAxAAIAAC3g");
	this.shape_5.setTransform(107.65,70.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAlBcIAAiPIhJAAIAACPIgyAAIAAi3ICsAAIAAC3g");
	this.shape_6.setTransform(87.15,70.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAfBcIhChQIgBAAIAABQIgyAAIAAi3IAyAAIAABYIABAAIBAhYIA3AAIAAADIhHBZIBKBYIAAADg");
	this.shape_7.setTransform(58.175,70.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag/BaQgOgIgHgNQgHgNAAgRQgBgeAWgOQAVgPAwAAIAYAAIAAgIQAAgLgGgGQgFgFgHgCQgGgCgGAAQgQAAgPAEQgQADgOAGIgMgnQAPgGATgGQAUgEAVAAQAnAAAUATQATATAAAkIAABJIABAGQABACAEgBIAOAAIAAAjIgNACIgOABQgPAAgIgFQgJgGgEgLIgBAAQgKAIgQAIQgPAGgRABQgVAAgNgHgAgfATQgLAFAAALQAAALAGAFQAHAGALAAQALAAAKgDQAMgEAIgFIAAggIgTAAQgYgBgLAHg");
	this.shape_8.setTransform(36.8994,70.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAsCBIhfhzIgBAAIAABzIg0AAIAAkBIA0AAIAAB9IABAAIBdh9IA7AAIAAAEIhjB/IBoB6IAAAEg");
	this.shape_9.setTransform(15.55,66.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,40,223.6,50.3);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#001E50").s().p("EghIATiMAAAgnDMBCRAAAMAAAAnDg");
	this.shape.setTransform(212.1,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,424.2,250);


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

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AE8CCQgugmgMg5IAsAAQALAoAhAZQAiAaArAAQA0AAAkglQAlglAAg0QAAgzglglQgkglg0AAQgrAAgiAaQghAZgLAoIgsAAQAMg5AugmQAvgmA8AAQBFAAAxAxQAxAyAABEQAABGgxAxQgxAxhFAAQg8AAgvgmgADDChIhZh+IAzAAIBWB2IAAAIgAgDChIAAh+IArAAIAAB+gAkJChIAAh+IAsAAIAABWICjAAIAAAogAoaChIAAgjIA8hbIAyAAIg4BVIAAABICjAAIAAAogAGQAaQgJgIgCgNImIAAIAAgJIGIAAQACgNAJgIQAKgIANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgIgAh/AbIAAgHIAEAAQAEAAABgDIABgDIgLgbIAAAAIAIAAIAHASIAGgSIAJAAIAAAAIgNAfQgDAJgIAAgAlQAYIADgGQACACAHAAQAGAAAAgGIAAgCQgEADgEAAQgMAAAAgPQAAgOAMAAQAEAAAFADIABgCIAGAAIAAAaQAAAOgOAAQgGAAgGgDgAlKAAQAAAIAHAAIAFgBIAAgNQgCgBgDAAQgHAAAAAHgAgtALQgEgEAAgHQAAgOAPAAQAPAAAAAOQAAAHgEAEQgEAEgHAAQgHAAgEgEgAgpAAQAAAJAHAAQAHAAAAgJQAAgHgHAAQgHAAAAAHgAhIAHIAAgOIgFAAIAAgEIAFgCIAAgHIAIAAIAAAHIAIAAIAAAGIgIAAIAAAMQAAABAAABQABAAAAABQABAAAAABQABAAABAAIAEgBIAAAGIgHABQgJAAAAgIgAiOAMQgEADgFAAQgKAAAAgJQAAgIAPAAIADAAIAAgBQAAgEgEAAQgGAAgEACIgCgGQAGgDAGAAQAMAAAAAMIAAAKIABABIACAAIAAAGIgEAAQgEAAgCgDgAiZAGQAAABAAAAQABABAAAAQABABAAAAQABAAABAAQADAAADgCIAAgFIgDAAQgHAAAAAEgAktAAQAAgFADgFQAEgEAHAAQAHAAADAEQAEADAAAFIgBAEIgTAAQAAAHAHAAQAGAAADgCIACAGQgFACgGAAQgPAAAAgPgAklgCIAMAAIAAAAQAAgGgGAAQgGAAAAAGgAliAMQgFADgFAAQgJAAAAgJQAAgIAOAAIAEAAIAAgBQAAgEgFAAQgGAAgEACIgCgGQAGgDAGAAQAMAAAAAMIAAAKIABABIADAAIAAAGIgFAAQgDAAgCgDgAluAGQAAADAEAAQAEAAADgCIAAgFIgDAAQgIAAAAAEgAnIANIACgGQAFACAEAAQAFAAAAgDQAAgBgEgCIgEAAQgIgCAAgGQAAgJAMAAQAFAAAGACIgCAGQgEgCgFAAQgBAAgBAAQAAABgBAAQAAAAgBABQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAQABAAABABIADAAQAIACAAAGQAAAJgMAAQgGAAgFgCgAogALQgEgEAAgHQAAgOAPAAQAPAAAAAOQAAAHgEAEQgEAEgHAAQgHAAgEgEgAocAAQAAAJAHAAQAHAAAAgJQAAgHgHAAQgHAAAAAHgAn2APQgIAAAAgIIAAghIAIAAIAAAiIABABIADAAIAAAGgAi3AOIgHgTIgGATIgJAAIgJgbIAAAAIAIAAIAGATIAGgTIAIAAIAHATIAFgTIAIAAIAAAAIgJAbgAj2AOIAAgQQAAgFgFAAIgGACIAAATIgIAAIAAgbIAHAAIABADQAEgEAFAAQAKAAAAALIAAARgAmMAOIgHgTIgGATIgJAAIgIgbIAAAAIAIAAIAFATIAGgTIAJAAIAGATIAFgTIAIAAIAAAAIgIAbgAnYAOIgKgNIAAANIgIAAIAAgoIAIAAIAAAaIAKgNIAJAAIAAAAIgLANIALAOIAAAAgAo/AOIgOgmIAAgBIAIAAIALAfIAKgfIAJAAIAAABIgOAmgACngiQALgNAAgWQAAg0g/AAIhLAAIAABXIgrAAIAAh+IB4AAQAzAAAbAXQAcAYAAAsQAAAUgFAPgAkJgiIAAh+IDNAAIAAAnIihAAIAABXgAmwgiIA5hWIAAgBIibAAIAAgnIDRAAIAAAjIg8Bbg");
	this.shape.setTransform(261.6247,-21.5273,1.1847,1.1847);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(191.7,-41.4,139.90000000000003,39.8), null);


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

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA2BcIAAiYIgBAAIhpCYIgSAAIAAi2IASAAIAACYIAAAAIBpiYIATAAIAAC2g");
	this.shape_1.setTransform(196.5,22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA1B+IAAiXIAAAAIhpCXIgTAAIAAi2IASAAIAACYIABAAIBpiYIASAAIAAC2gAgbhiQgLgIgHgMIAKgHQAGAIAIAFQAHAGAQAAQARAAAHgGQAIgFAGgIIAKAHQgHAMgKAIQgMAIgTAAQgSAAgLgIg");
	this.shape_2.setTransform(165.75,19.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABFBcIAAi2IASAAIAAC2gAhWBcIAAi2IASAAIAABLIAxAAQAdAAAQAOQAQANABAaQgBAagQANQgQAOgdABgAhEBLIAvAAQANABAKgEQAKgEAHgHQAGgJAAgOQAAgOgGgIQgHgJgKgDQgKgDgNAAIgvAAg");
	this.shape_3.setTransform(143.475,22.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA2BcIAAhXIhrAAIAABXIgTAAIAAi2IATAAIAABRIBrAAIAAhRIASAAIAAC2g");
	this.shape_4.setTransform(121.1,22.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABiBcIhYhWIgBAAIAABWIgRAAIAAhWIgBAAIhYBWIgYAAIAAgCIBehaIhbhZIAAgBIAXAAIBWBXIABAAIAAhXIARAAIAABXIABAAIBWhXIAXAAIAAABIhbBZIBeBaIAAACg");
	this.shape_5.setTransform(97.625,22.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgpBUQgUgNgJgWQgJgWAAgbQABgbAKgXQAKgVASgNQATgMAYAAQAaAAARAKQARALAIARQAJARAAAUIgBANIgCALIiJAAQABAXAHARQAHARAQAKQAPAKAWAAQASAAANgGQANgEALgIIAIAOQgMAJgOAGQgQAGgVAAQgeAAgTgNgAgng9QgRARgEAgIB4AAIABgFIAAgFQgBgQgGgOQgGgNgMgGQgNgIgUAAQgaAAgQASg");
	this.shape_6.setTransform(74.65,22.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABCByIgCgtIiAAAIgCAtIgPAAIgDg+IAMAAQAJgIAGgKQAHgLAEgQQAEgPACgZIAFhQIBnAAIAAClIARAAIgDA+gAgXggQgCAagEAPQgEAQgFAKQgGAKgHAHIBlAAIAAiVIhEAAg");
	this.shape_7.setTransform(54.175,25.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag+BSQgRgOAAgaQAAgdAXgNQAVgOArAAIAfAAIAAgLQAAgegNgMQgPgMgUAAQgRAAgNAFQgNAFgJAIIgJgOQALgJAPgGQAPgGAUAAQAeAAARARQATARAAAlIAABbQAAAHADADQACADAIAAIAKAAIAAAOIgHACIgJAAQgJAAgGgFQgGgFgCgJIgBAAQgJAIgQAHQgQAGgTAAQgaAAgQgPgAgsAMQgQAKAAAUQAAASALAKQAMAKASAAQASAAAOgGQAPgGALgJIAAg6IgdAAQglAAgRALg");
	this.shape_8.setTransform(35.95,22.7993);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABKCBIAAh8IiTAAIAAB8IgTAAIAAkBIATAAIAAB0ICTAAIAAh0IATAAIAAEBg");
	this.shape_9.setTransform(13.05,19.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(-2,-7.9,211.1,50.3), null);


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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnSHTIAAulIOlAAIAAOlg");
	mask.setTransform(46.7,46.7);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlJFKQiJiIAAjCQAAjBCJiIQCIiJDBAAQDCAACICJQCJCIAADBQAADCiJCIQiICJjCAAQjBAAiIiJgAmmAAQAACvB8B8QB8B9CuAAQCuAAB9h9QB7h8AAivQAAhMgahHIj3HxQgGAMgKAAQgIAAgGgMIhyj/QgCgFgDgBQgBABgDAFIhyD/QgFAMgKAAQgJAAgGgMIj3nxQgbBIAABLgAAlANQAJgBADAJIBRC4QACAGADAAQADAAACgGIDYmwQg9hchcgzIiaFYQgDAIgJAAIhKAAQgIAAgDgIIialYQhdAzg7BcIDXGwQADAGACAAQADAAACgGIBRi4QADgJAIABgAiKmPICGErQADAFABAAQADAAACgFICGkrQhEgYhHAAQhHAAhDAYg");
	this.shape.setTransform(46.7,46.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroupcopy6, new cjs.Rectangle(0,0,93.4,93.4), null);


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

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBFIAAhrIgpAAIAAgeIB3AAIAAAeIgpAAIAABrg");
	this.shape.setTransform(314.75,-47.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhEBjIAAjBIAdAAIAFAMIABAAIALgHQAFgEAJgCQAIgDAJAAQAUAAANAKQAOAKAGAQQAHARAAAUQAAAUgHAQQgGAQgOAKQgNAKgUAAQgNAAgJgFIgQgJIAAAAIAABCgAgRhAQgHACgFAEIAABBQAFAEAHACQAIACAHAAQAQAAAIgLQAIgKAAgTQAAgTgIgLQgIgLgQAAQgHAAgIACg");
	this.shape_1.setTransform(300.05,-44.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnA/QgQgKgIgQQgJgQAAgVQAAgTAJgRQAIgQAQgKQAQgJAXgBQAYABAQAJQAQAKAIAQQAJARAAATQAAAVgJAQQgIAQgQAKQgQAKgYAAQgXAAgQgKgAgXgeQgJAKAAAUQAAAVAJAKQAJALAOAAQAPAAAJgLQAJgKAAgVQAAgUgJgKQgJgKgPAAQgOAAgJAKg");
	this.shape_2.setTransform(282.875,-47.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcBFIAAhrIg3AAIAABrIglAAIAAiJICBAAIAACJg");
	this.shape_3.setTransform(266.175,-47.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYBAQgQgJgIgQQgJgRAAgWQAAgVAJgQQAIgRAQgJQARgIAWgBQANABALACQAMADAHACIgIAeIgOgEQgHgCgKAAQgKgBgJAFQgHAEgFAJQgGAKAAANQAAAPAGAJQAEAKAIADQAJAFAKAAQAKAAAHgCIAOgFIAIAeIgTAFQgLADgNAAQgWAAgRgJg");
	this.shape_4.setTransform(250.9,-47.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcBFIAAg2Ig3AAIAAA2IglAAIAAiJIAlAAIAAA2IA3AAIAAg2IAlAAIAACJg");
	this.shape_5.setTransform(235.575,-47.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgvBEQgLgGgFgKQgFgKgBgMQABgXAPgKQAQgMAlAAIARAAIAAgFQAAgJgEgEQgEgEgGgCQgEgCgEABQgMAAgLADQgNACgKAFIgJgeQALgFAOgDQAPgDAQgBQAeABAOAOQAPAOAAAbIAAA3IAAAEIAFABIAKAAIAAAaIgJACIgMAAQgKABgHgFQgGgEgEgIIgBAAQgGAGgNAGQgLAFgNAAQgPAAgKgFgAgYAOQgHAFgBAHQABAJAFAEQAEAEAJAAQAIAAAHgCQAJgDAGgEIAAgZIgPAAQgRABgJAEg");
	this.shape_6.setTransform(219.55,-47.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhEBjIAAjBIAdAAIAFAMIAAAAIAMgHQAFgEAJgCQAIgDAJAAQAUAAAOAKQANAKAGAQQAHARAAAUQAAAUgHAQQgGAQgNAKQgOAKgUAAQgNAAgJgFIgQgJIAAAAIAABCgAgRhAQgHACgFAEIAABBQAFAEAHACQAHACAJAAQAQAAAHgLQAIgKAAgTQAAgTgIgLQgHgLgQAAQgJAAgHACg");
	this.shape_7.setTransform(203.55,-44.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSBFIAAhrIgpAAIAAgeIB3AAIAAAeIgqAAIAABrg");
	this.shape_8.setTransform(188.15,-47.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAcBlIAAhWIgBAAIgyBWIgqAAIAAiIIAmAAIAABVIAAAAIAzhVIAqAAIAACIgAgchBQgMgGgHgLIAMgSQAHAFAJADQAKACAKAAQAMAAAJgCQAKgCAHgGIAMASQgHALgNAGQgMAFgSAAQgRAAgMgFg");
	this.shape_9.setTransform(373.45,-83.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAdBFIAAhWIgBAAIgzBWIgqAAIAAiJIAlAAIAABVIABAAIAyhVIArAAIAACJg");
	this.shape_10.setTransform(356.5,-79.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXBFIgxg9IgBAAIAAA9IgmAAIAAiJIAmAAIAABCIABAAIAwhCIApAAIAAACIg2BDIA5BCIAAACg");
	this.shape_11.setTransform(341.125,-79.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYBAQgQgJgIgQQgJgRAAgWQAAgVAJgRQAIgQAQgJQAQgJAXAAQANAAALADQALADAIADIgIAdIgOgEQgHgCgKAAQgKAAgJAEQgIAEgEAJQgGAJAAAOQAAAPAGAJQAEAKAIAEQAIADALAAQAKAAAHgCIAOgDIAIAdIgTAGQgLACgNAAQgXAAgQgJg");
	this.shape_12.setTransform(325.85,-79.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgjA/QgPgJgIgRQgHgQAAgVQAAgTAHgQQAIgRAPgJQAPgLAWAAQAXAAAOAJQAOAHAHAOQAHANAAAQIgBAOIgCAKIhbAAQACAPAIAIQAJAIAPAAQAMAAALgCIAVgGIAJAcQgKAFgPADQgOADgRAAQgWAAgRgKgAgNgnQgGAEgDAIQgEAHgBAIIA6AAIABgCIAAgCQgBgMgGgHQgHgJgPAAQgJAAgHAFg");
	this.shape_13.setTransform(311.2,-79.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAWBFIAAgsQgHAEgIABQgIACgMAAQgPAAgJgGQgKgGgGgJQgGgJAAgLIAAg7IAmAAIAAA5QAAAGAFADQAEADAKAAIAOgBQAHAAADgDIAAhBIAmAAIAACJg");
	this.shape_14.setTransform(295.6,-79.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhEBjIAAjBIAcAAIAGAMIABAAIALgHQAFgEAJgCQAIgDAKAAQATAAANAKQAOAKAGAQQAHARAAAUQAAAUgHAQQgGAQgOAKQgNAKgTAAQgOAAgJgFIgQgJIgBAAIAABCgAgQhAQgIACgGAEIAABBQAGAEAIACQAHACAHAAQAQAAAIgLQAIgKAAgTQAAgTgIgLQgIgLgQAAQgHAAgHACg");
	this.shape_15.setTransform(280.35,-77.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgiA/QgQgJgIgRQgIgQAAgVQAAgTAIgQQAIgRAQgJQAPgLAVAAQAXAAAOAJQAOAHAHAOQAGANAAAQIAAAOIgBAKIhbAAQAAAPAKAIQAIAIAPAAQAMAAALgCIAVgGIAJAcQgLAFgOADQgOADgRAAQgXAAgPgKgAgNgnQgHAEgDAIQgDAHAAAIIA5AAIAAgCIAAgCQAAgMgGgHQgGgJgRAAQgIAAgHAFg");
	this.shape_16.setTransform(263.9,-79.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAqBFIAAhOIAAAAIgbAtIgdAAIgbgtIAAAAIAABOIgmAAIAAiJIAlAAIAqBHIAAAAIArhHIAlAAIAACJg");
	this.shape_17.setTransform(246.275,-79.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAqBFIAAhOIAAAAIgbAtIgdAAIgbgtIAAAAIAABOIgmAAIAAiJIAlAAIAqBHIAAAAIArhHIAlAAIAACJg");
	this.shape_18.setTransform(226.625,-79.875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgnA/QgQgJgIgRQgJgQAAgVQAAgTAJgQQAIgRAQgKQAQgJAXgBQAYABAQAJQAQAKAIARQAJAQAAATQAAAVgJAQQgIARgQAJQgQAKgYAAQgXAAgQgKgAgXgeQgJALAAATQAAAVAJAKQAJAKAOAAQAPAAAJgKQAJgKAAgVQAAgTgJgLQgJgKgPAAQgOAAgJAKg");
	this.shape_19.setTransform(208.375,-79.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAhBhIhHhXIgBAAIAABXIgnAAIAAjBIAnAAIAABeIABAAIBFheIAsAAIAAADIhJBfIBNBcIAAADg");
	this.shape_20.setTransform(191.8,-82.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroupcopy5, new cjs.Rectangle(179.1,-104,205.6,72.1), null);


(lib.ClipGroupcopy4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgEAFQgCgCAAgDQAAgDACgBQACgCACAAQADAAACACQACABAAADQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape.setTransform(153.725,28.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATAdIAAgdIAAgMIgHAMIgJAOIgFAAIgJgOIgHgMIABAMIAAAdIgKAAIAAg5IAJAAIAPAZIADAHIAEgHIAPgZIAJAAIAAA5g");
	this.shape_1.setTransform(148.45,26);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAKAdIgVgaIAAAaIgKAAIAAg5IAKAAIAAAcIAVgcIALAAIAAABIgWAbIAXAcIAAABg");
	this.shape_2.setTransform(142.125,26);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPAlQgGgFgDgJQgDgKAAgNQAAgMADgKQADgJAGgFQAGgGAJAAQAKAAAGAGQAHAFACAJQADAKAAAMQAAANgDAKQgCAJgHAFQgGAFgKABQgJgBgGgFgAgJgcQgFAEgBAHQgBAIgBAJQABAKABAIQABAHAFAEQAEAEAFAAQAHAAADgEQAEgEACgHQABgIABgKQgBgJgBgIQgCgHgEgEQgDgEgHAAQgFAAgEAEg");
	this.shape_3.setTransform(132.7,24.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAlQgGgFgDgJQgDgKAAgNQAAgMADgKQADgJAGgFQAGgGAJAAQAKAAAGAGQAGAFADAJQADAKAAAMQAAANgDAKQgDAJgGAFQgGAFgKABQgJgBgGgFgAgKgcQgEAEgBAHQgBAIAAAJQAAAKABAIQABAHAEAEQAFAEAFAAQAGAAAFgEQAEgEABgHQACgIAAgKQAAgJgCgIQgBgHgEgEQgFgEgGAAQgFAAgFAEg");
	this.shape_4.setTransform(126.1,24.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVApIAAgJIASAAIAAg9IAAAAIgPAFIgCAAIAAgJIATgHIAHAAIAABIIAQAAIAAAJg");
	this.shape_5.setTransform(119.6,24.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSApIAAgBIAchQIAJAAIAAABIgbBQg");
	this.shape_6.setTransform(113.925,24.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AALAdIAAgSIgGACIgHABQgJgBgFgEQgEgEAAgHIAAgaIAKAAIAAAZQAAADACADQACACAGAAIAGAAIAFgCIAAgfIAKAAIAAA5g");
	this.shape_7.setTransform(108.6,26);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDATIABgMIgBAAIgKAGIgFgGIAMgGIAAgBIgMgFIAEgIIALAIIAAgNIAHAAIgBANIABAAIALgIIAEAIIgMAFIAMAGIgEAHIgLgHIgBABIABAMg");
	this.shape_8.setTransform(103.225,22.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEAdIAAgxIgQAAIAAgIIApAAIAAAIIgQAAIAAAxg");
	this.shape_9.setTransform(98.15,26);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZApIAAhRIAYAAQAMAAAGAFQAGAGAAAKQAAAHgCAFQgEAFgEABIAAABQAGABAEAFQAEAFAAAIQAAAKgHAGQgGAGgMAAgAgPAgIAQAAQAHAAAEgDQAEgDAAgIQAAgHgEgEQgEgDgHAAIgQAAgAgPgDIANAAQAFAAADgCQADgBACgDQACgDAAgFQAAgIgEgDQgEgDgHAAIgNAAg");
	this.shape_10.setTransform(92.35,24.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAKAdIgVgaIAAAaIgKAAIAAg5IAKAAIAAAcIAVgcIALAAIAAABIgWAbIAXAcIAAABg");
	this.shape_11.setTransform(86.025,26);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgJA0QAFgMADgNQABgNAAgOQAAgNgBgNQgDgOgFgMIAHgDQAFALAEAOQADANAAARQAAASgDAOQgEANgFALg");
	this.shape_12.setTransform(78.15,25.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZApIAAhRIAZAAQAMAAAHAHQAGAGAAAMQAAAMgHAFQgGAHgMAAIgPAAIAAAggAgPAAIAPAAQAHAAAEgDQAEgFAAgHQAAgHgEgEQgEgFgHAAIgPAAg");
	this.shape_13.setTransform(73.5,24.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEApIAAhIIgWAAIAAgJIA1AAIAAAJIgWAAIAABIg");
	this.shape_14.setTransform(66.7,24.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVApIAAhRIAKAAIAABIIAhAAIAAAJg");
	this.shape_15.setTransform(60.925,24.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AATApIgOgzIgFgUIAAAAIgEAUIgPAzIgKAAIgVhQIAAgBIALAAIALAwIAFAVIAAAAIAEgVIAPgwIAJAAIAOAwIAFAVIAAAAIAEgVIANgwIAKAAIAAABIgWBQg");
	this.shape_16.setTransform(52.1,24.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFAgQgFgOAAgSQAAgRAFgNQAEgOAEgLIAIADQgGAMgCAOQgDANAAANQAAAOADANQACANAGAMIgIAEQgEgLgEgNg");
	this.shape_17.setTransform(45,25.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgOApQgFgCgFgDIAEgIQAFADAEABIAKABQAEAAAEgBQADgCACgEQACgDAAgFIgBgHQgBgDgEgCQgDgCgGAAIgMAAIAAgIIANAAIAHgCQADgCABgDQACgDAAgEIgCgHQgBgDgDgCQgDgCgEAAIgJABIgKADIgDgIIALgEQAFgCAGAAQALAAAGAHQAGAGAAAKQAAAFgBADIgEAHIgFADIAAABQAFABAEAFQADAFAAAIQAAAHgDAFQgEAGgGADQgGACgHABIgNgCg");
	this.shape_18.setTransform(36.875,24.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgHAQIAAgCIAFgdIAKAAIAAACIgIAdg");
	this.shape_19.setTransform(32.1,29.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgPAlQgGgFgDgJQgDgKAAgNQAAgMADgKQADgJAGgFQAGgGAJAAQAKAAAGAGQAHAFACAJQADAKAAAMQAAANgDAKQgCAJgHAFQgGAFgKABQgJgBgGgFgAgJgcQgEAEgCAHQgBAIgBAJQABAKABAIQACAHAEAEQADAEAGAAQAGAAAEgEQAFgEABgHQABgIABgKQgBgJgBgIQgBgHgFgEQgEgEgGAAQgGAAgDAEg");
	this.shape_20.setTransform(27.5,24.825);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgWAqIAAgJIAageIAGgIQADgEAAgGQAAgFgCgDQgBgEgEgCQgDgCgEAAQgGAAgEACQgEACgDADIgFgHIAFgEQADgDAFgBQAEgCAGAAQAGAAAFAEQAGADADAFQADAGABAIQAAAFgCAEQgBAEgDADIgGAHIgVAZIAhAAIAAAJg");
	this.shape_21.setTransform(20.825,24.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgWAFIAAgJIAtAAIAAAJg");
	this.shape_22.setTransform(14.375,25.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKApIgIgCIgGgCIADgJIAJADIAJABQAHAAAFgEQAEgEABgJQAAgIgFgEQgDgDgIAAIgIAAIgIAAIgBgBIAEgoIAlAAIAAAJIgdAAIgCAXIAEAAIAEAAQAGAAAGADQAHACADAFQADAFABAJQgBAJgEAGQgDAGgHADQgGADgHAAIgHgBg");
	this.shape_23.setTransform(7.8,24.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgHAQIAAgCIAFgdIAKAAIAAACIgIAdg");
	this.shape_24.setTransform(2.95,29.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWAqIAAgJIAageIAGgIQADgEAAgGQAAgFgCgDQgBgEgEgCQgDgCgEAAQgGAAgEACQgEACgDADIgFgHIAFgEQADgDAFgBQAEgCAGAAQAGAAAFAEQAGADADAFQADAGABAIQAAAFgCAEQgBAEgDADIgGAHIgVAZIAhAAIAAAJg");
	this.shape_25.setTransform(-1.725,24.725);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgWAqIAAgJIAageIAGgIQADgEAAgGQAAgFgCgDQgBgEgEgCQgDgCgEAAQgGAAgEACQgEACgDADIgFgHIAFgEQADgDAFgBQAEgCAGAAQAGAAAFAEQAGADADAFQADAGABAIQAAAFgCAEQgBAEgDADIgGAHIgVAZIAhAAIAAAJg");
	this.shape_26.setTransform(-8.325,24.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgEAcQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDABQgCgBgCgCgAgEgRQgCgCAAgDQAAgEACgCQACgCACAAQADAAACACQACACAAAEQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_27.setTransform(182.375,7.325);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgQAaQgFgFAAgIQAAgHADgEQAEgDAFgCQAFgBAFAAIALAAIAAgEQABgGgDgEQgDgDgHAAIgHABIgHADIgEgGQADgDAFgCQAFgCAFAAQAMAAAFAGQAFAGAAAKIAAAlIgHAAIgBgGIAAAAQgEADgFACQgEACgFABQgIgBgEgEgAgHAFQgEACAAAGQAAAEACADQADACAEAAIAHgBQAEgBADgDIAAgPIgKAAQgGAAgDADg");
	this.shape_28.setTransform(177.575,7.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgVAdIAAg5IAUAAQAKAAAEAEQAGAEAAAHQAAAFgDAEQgCACgCACQAEAAADAEQACAEAAAFQABAIgGAEQgEAEgKAAgAgLAVIAMAAQAFAAADgCQACgDAAgEQAAgFgCgCQgDgCgFABIgMAAgAgLgEIAKAAQAFABACgCQADgCAAgEQgBgFgCgCQgCgCgFAAIgKAAg");
	this.shape_29.setTransform(172,7.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgEAdIAAgxIgRAAIAAgIIArAAIAAAIIgRAAIAAAxg");
	this.shape_30.setTransform(166.4,7.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgJAbQgGgEgCgHQgDgHAAgJQAAgIADgHQACgHAGgEQAGgEAIAAIAJABIAHADIgCAIIgHgCIgHgBQgFAAgDADQgEADgCAFQgBAFAAAFQAAAGABAFQACAFAEADQADADAFAAIAHgBIAHgCIACAHIgHADIgJACQgIgBgGgDg");
	this.shape_31.setTransform(161.15,7.325);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgMAaQgGgEgDgHQgCgHAAgIQAAgHADgHQACgHAGgEQAFgFAIAAQAIAAAFAEQAGADACAGQADAGgBAGIAAAFIAAACIgmAAQAAAGACAEQADAFAEACQADADAFAAQAFAAAEgBIAHgEIADAHIgIAFIgMACQgIgBgGgEgAgGgTQgDACgCAEIgCAJIAcAAIAAgBIAAgCQAAgEgCgDQgBgEgEgBQgDgCgEAAQgEAAgDACg");
	this.shape_32.setTransform(155.2792,7.325);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AALAdIAAgSIgGACIgHAAQgJAAgFgEQgEgEAAgHIAAgaIAKAAIAAAYQAAAEACADQACACAGAAIAGgBIAFgBIAAgfIAKAAIAAA5g");
	this.shape_33.setTransform(149.1,7.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AANAdIAAggIABgMIgBAAIgGAMIgSAgIgLAAIAAg5IAKAAIAAAiIgBAKIAFgKIAUgiIALAAIAAA5g");
	this.shape_34.setTransform(143.05,7.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgYAqIAAhRIAHAAIACAFIAEgDIAHgDIAGgBQAIAAAFAEQAFAEACAHQADAHAAAJQAAAIgDAGQgCAHgFAEQgFAEgIABIgJgCQgEgCgCgCIgBAAIAAAcgAgHgfIgHAEIAAAhIAHAEIAHABQAFAAAEgDQADgDABgFQACgEAAgGQAAgGgCgFQgBgFgDgDQgEgDgFAAIgHABg");
	this.shape_35.setTransform(136.675,8.425);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgEAdIAAgxIgQAAIAAgIIAqAAIAAAIIgRAAIAAAxg");
	this.shape_36.setTransform(130.75,7.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAKAdIgVgaIAAAaIgKAAIAAg5IAKAAIAAAcIAVgcIALAAIAAABIgWAcIAXAbIAAABg");
	this.shape_37.setTransform(125.725,7.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgMAaQgGgEgDgHQgCgHAAgIQAAgHADgHQACgHAGgEQAFgFAIAAQAIAAAFAEQAGADACAGQADAGgBAGIAAAFIAAACIgmAAQAAAGACAEQADAFAEACQADADAFAAQAFAAAEgBIAHgEIADAHIgIAFIgMACQgIgBgGgEgAgGgTQgDACgCAEIgCAJIAcAAIAAgBIAAgCQAAgEgCgDQgBgEgEgBQgDgCgEAAQgEAAgDACg");
	this.shape_38.setTransform(119.4792,7.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgZAVQAEAAACgCQACgBABgFIACgOIABgbIAnAAIAAA4IgKAAIAAgwIgUAAIgBATIgCAQQgBAGgDADQgCAEgDAAIgJABg");
	this.shape_39.setTransform(112.875,7.35);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgNAdIgIgDIAEgHIAGACIAHABQAHAAADgFQAFgFABgIIgYAAIAAgHIAYAAQgBgJgFgEQgEgFgGAAIgHABIgGACIgEgIIAIgCIAJgBQAHAAAHADQAFAEAEAHQACAHAAAIQAAAJgCAHQgEAGgFAEQgHAEgHAAIgJgBg");
	this.shape_40.setTransform(107.2,7.325);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AATAkIgBgOIgjAAIgBAOIgHAAIgCgXIAFAAQADgEACgGIACgPIACgXIAjAAIAAAwIAGAAIgCAXgAgGgLIgCAOQgBAHgCADIAXAAIAAgoIgRAAg");
	this.shape_41.setTransform(98.175,8.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgOAaQgGgEgDgHQgCgHAAgIQAAgIACgHQADgHAGgEQAGgEAIAAQAJAAAGAEQAGAEADAHQACAHAAAIQAAAIgCAHQgDAHgGAEQgGAEgJABQgIgBgGgEgAgJgSQgDADgCAFQgBAFAAAFQAAAGABAFQACAFADADQAEADAFAAQAGAAADgDQAEgDACgFQABgFAAgGQAAgFgBgFQgCgFgEgDQgDgDgGAAQgFAAgEADg");
	this.shape_42.setTransform(91.825,7.325);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAOAdIgNgXIgBAAIgNAXIgKAAIAAgBIASgcIgSgaIAAgCIAKAAIANAXIABAAIANgXIAKAAIAAACIgSAaIASAcIAAABg");
	this.shape_43.setTransform(85.7,7.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgJAbQgGgEgDgHQgCgHAAgJQAAgIACgHQADgHAGgEQAGgEAIAAIAJABIAHADIgCAIIgHgCIgHgBQgFAAgDADQgEADgCAFQgBAFAAAFQAAAGABAFQACAFAEADQADADAFAAIAHgBIAHgCIACAHIgHADIgJACQgIgBgGgDg");
	this.shape_44.setTransform(80.15,7.325);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgQAaQgFgFAAgIQAAgHADgEQAEgDAFgCQAFgBAFAAIALAAIAAgEQABgGgDgEQgDgDgHAAIgHABIgHADIgEgGQADgDAFgCQAFgCAFAAQAMAAAFAGQAFAGAAAKIAAAlIgHAAIgBgGIAAAAQgEADgFACQgEACgFABQgIgBgEgEgAgHAFQgEACAAAGQAAAEACADQADACAEAAIAHgBQAEgBADgDIAAgPIgKAAQgGAAgDADg");
	this.shape_45.setTransform(74.175,7.325);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgZApIAAhRIAZAAQAMAAAHAHQAGAGABAMQgBAMgHAFQgGAHgMAAIgPAAIAAAggAgPAAIAPAAQAHAAAEgDQAEgFAAgHQAAgHgEgEQgEgFgHAAIgPAAg");
	this.shape_46.setTransform(68.35,6.125);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgEAFQgCgCAAgDQAAgDACgCQACgBACAAQADAAACABQACACAAADQAAADgCACQgCACgDABQgCgBgCgCg");
	this.shape_47.setTransform(60.175,9.65);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AATAdIAAgdIAAgMIgGAMIgJAOIgHAAIgJgOIgGgMIAAAMIAAAdIgKAAIAAg5IAKAAIAPAZIADAHIAEgHIAPgZIAKAAIAAA5g");
	this.shape_48.setTransform(54.9,7.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAKAdIgVgaIAAAaIgKAAIAAg5IAKAAIAAAcIAVgcIALAAIAAABIgWAcIAXAbIAAABg");
	this.shape_49.setTransform(48.575,7.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgSApIAAgBIAchQIAJAAIAAABIgbBQg");
	this.shape_50.setTransform(43.125,6.125);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgSAdIAAg5IAlAAIAAAIIgbAAIAAAxg");
	this.shape_51.setTransform(38.675,7.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgPAlQgGgFgDgJQgDgKAAgNQAAgMADgKQADgJAGgFQAGgGAJAAQAKAAAGAGQAGAFADAJQADAKAAAMQAAANgDAKQgDAJgGAFQgGAFgKABQgJgBgGgFgAgKgcQgEAEgBAHQgCAIAAAJQAAAKACAIQABAHAEAEQAFAEAFAAQAGAAAFgEQAEgEABgHQABgIAAgKQAAgJgBgIQgBgHgEgEQgFgEgGAAQgFAAgFAEg");
	this.shape_52.setTransform(29.6,6.125);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgEAcQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCACgDABQgCgBgCgCgAgEgRQgCgCAAgDQAAgEACgCQACgCACAAQADAAACACQACACAAAEQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_53.setTransform(21.725,7.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroupcopy4, new cjs.Rectangle(-13.5,-3.8,199.7,37.4), null);


(lib.ClipGroup_1copy2 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("A0SCaIAAkzMAolAAAIAAEzg");
	mask.setTransform(75.3223,15.425);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAlQgHgGgEgJQgDgKAAgMQAAgLADgKQAEgJAHgGQAHgGALAAQAMAAAHAGQAIAGADAJQADAKAAALQAAAMgDAKQgDAJgIAGQgHAFgMABQgLgBgHgFgAgNgcQgFAFgCAHQgCAIAAAIQAAAJACAIQACAHAFAFQAFAEAIAAQAJAAAFgEQAFgFACgHQACgIAAgJQAAgIgCgIQgCgHgFgFQgFgEgJAAQgIAAgFAEg");
	this.shape.setTransform(10.125,6.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLAlQgHgFgEgKQgEgJAAgNQAAgMAEgJQAEgKAHgFQAIgGAKAAIAKACIAKAEIgCAHIgJgDQgEgBgFABQgHAAgFAEQgGAEgCAHQgDAIAAAJQAAAKADAIQACAHAGAEQAFAEAHAAIAJAAIAJgDIACAHIgKAEIgKACQgKgBgIgFg");
	this.shape_1.setTransform(2.675,6.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJAbQgGgEgDgHQgCgHAAgJQAAgIACgHQADgHAGgEQAGgEAIAAIAJABIAIADIgDAIIgGgCIgIgBQgFAAgDADQgEADgCAFQgCAFAAAFQAAAGACAFQACAFAEADQADADAFAAIAIgBIAGgCIADAHIgIADIgJACQgIgBgGgDg");
	this.shape_2.setTransform(-6.5,7.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOAaQgGgEgDgHQgCgHAAgIQAAgIACgHQADgHAGgEQAGgEAIAAQAJAAAGAEQAGAEADAHQACAHAAAIQAAAIgCAHQgDAHgGAEQgGAEgJABQgIgBgGgEgAgJgSQgDADgCAFQgBAFAAAFQAAAGABAFQACAFADADQAEADAFAAQAGAAADgDQAEgDACgFQABgFAAgGQAAgFgBgFQgCgFgEgDQgDgDgGAAQgFAAgEADg");
	this.shape_3.setTransform(-12.575,7.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAqIAAhRIAHAAIACAFIAEgDIAHgDIAGgBQAIAAAFAEQAFAEACAHQADAHAAAJQAAAIgDAGQgCAHgFAEQgFAEgIABIgJgCQgEgCgCgCIgBAAIAAAcgAgHgfIgHAEIAAAhIAHAEIAHABQAFAAAEgDQADgDABgFQACgEAAgGQAAgGgCgFQgBgFgDgDQgEgDgFAAIgHABg");
	this.shape_4.setTransform(-18.975,8.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAjQgGgJAAgQIAAgPQABgHACgHQABgGAFgFQAFgFAIgDIAIgCIAKgCIAIgBIAAAJIgHABIgJABIgIADQgIADgDAGQgDAHAAAMIAEgFIAGgDQAEgCADAAQAIAAAFAEQAFADADAFQADAGAAAJQAAAIgDAGQgDAGgGAEQgGADgIABQgMgBgHgIgAgLACQgEAFAAAJQAAAFACAEQACAFADACQAEADAEAAQAFAAADgDQAEgCACgFQACgEAAgFQAAgJgEgFQgFgEgHAAQgHAAgEAEg");
	this.shape_5.setTransform(-25.675,6.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUAdIAAg5IAKAAIAAA5gAgdAdIAAg5IAKAAIAAAXIAMAAQAJAAAFAEQAFADAAAKQAAAIgFAEQgFAFgJAAgAgTAVIAMAAQAEAAADgCQACgDAAgEQAAgFgCgDQgDgCgEAAIgMAAg");
	this.shape_6.setTransform(-33,7.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaApIAAhRIAZAAQALAAAHAFQAGAGABAKQgBAHgCAFQgEAFgDABIAAABQAFABAEAFQAEAFgBAIQAAAKgGAGQgGAGgMAAgAgQAgIARAAQAHAAAEgDQAEgDAAgIQAAgHgEgEQgEgDgHAAIgRAAgAgQgDIAOAAQAEAAAEgCQAEgBABgDQACgDAAgFQAAgIgEgDQgEgDgHAAIgOAAg");
	this.shape_7.setTransform(-40.25,6.125);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1copy2, new cjs.Rectangle(-46,0,62.4,14.9), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


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
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnbHcIAAu3IO3AAIAAO3g");
	mask.setTransform(47.55,47.575);

	// Layer_3
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjfDgQhdhcAAiEQAAiCBdhdQBdhdCCAAQCEAABdBdQBcBdAACCQAACEhcBcQhdBdiEAAQiCAAhdhdgAkeAAQAAB2BUBVQBVBVB1AAQB2AABUhVQBVhVAAh2QAAg0gSgwIioFRQgEAIgGAAQgHAAgDgIIhOitIgDgDIgDADIhMCtQgEAIgHAAQgHAAgDgIIiolRQgSAwAAA0gAAZAIQAGAAACAGIA3B+IAEADQAAAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBICTkmQgqg/g+giIhpDqQgCAFgGAAIgxAAQgGAAgCgFIhpjqQg/AigpA/ICSEmQADADACAAIADgDIA3h+QACgGAGAAgAhdkOIBaDKQABABAAABQABAAAAABQABAAAAABQAAAAAAAAQAAAAABAAQAAgBABAAQAAgBABAAQAAgBAAgBIBbjKQgsgRgyAAQgwAAgtARg");
	this.shape_10.setTransform(47.55,47.575);

	var maskedShapeInstanceList = [this.shape_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(15.9,15.9,63.4,63.4), null);


(lib.Symbol19 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroupcopy4();
	this.instance.setTransform(418.85,-22.15,1.2563,1.2563,0,0,0,104,14.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAeIAAgGIASgWIAGgFQACgDAAgFIgBgGQgCgDgDgBQgCgCgCAAQgFAAgCACIgGAEIgDgFIADgEIAGgCIAHgBQAEAAAFACQADACACAEQADAFAAAFIgBAHIgDAFIgEAFIgPASIAYAAIAAAGg");
	this.shape.setTransform(308.9,-25.625);

	this.instance_1 = new lib.ClipGroup_1copy2();
	this.instance_1.setTransform(416.1,-23.65,1.2563,1.2563,0,0,0,101.8,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(219.6,-45.1,326.5,46.9);


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

	// labais
	this.instance = new lib.Symbol14("synched",0);
	this.instance.setTransform(-17.8,156.25,1,1,10.4494,0,0,194.2,136.2);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0,y:156.2},0).wait(1).to({rotation:10.4494,y:156.25},0).wait(1).to({rotation:0,y:156.2},0).wait(1));

	// kreisais
	this.instance_1 = new lib.Symbol13("synched",0);
	this.instance_1.setTransform(-65.2,166.55,1,1,-14.9992,0,0,146.8,146.6);
	this.instance_1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:146.5,rotation:0,y:166.5},0).wait(1).to({regY:146.6,rotation:-14.9992,y:166.55},0).wait(1).to({regY:146.5,rotation:0,y:166.5},0).wait(1));

	// bee
	this.instance_2 = new lib.Symbol12("synched",0);
	this.instance_2.setTransform(-36.55,166.55,1,1,0,0,0,175,146.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-244.9,-27.6,413.9,373.6);


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
	this.instance = new lib.Symbol11("synched",0);
	this.instance.setTransform(-1.95,146.35,1.657,1.657,0,0,0,-1.9,146.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(118).to({startPosition:2},0).to({_off:true},1).wait(121));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-404.6,-142,685.8,619);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol8();
	this.instance.setTransform(80.05,22,0.055,0.055,0,0,0,80,21.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol8(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:22,scaleX:1,scaleY:1,x:80},14,cjs.Ease.quadOut).wait(91).to({_off:true},1).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,44.1);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol5("synched",0);
	this.instance.setTransform(123.2,49.3,1,1,0,0,0,127.2,25.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).to({y:65.55,alpha:1},14,cjs.Ease.quadOut).wait(106).to({startPosition:0},0).to({_off:true},1).wait(89));

	// t2
	this.instance_1 = new lib.Symbol4("synched",0);
	this.instance_1.setTransform(111.4,48.85,1,1,0,0,0,114.2,25.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({y:65.1,alpha:1},14,cjs.Ease.quadOut).wait(54).to({startPosition:0},0).to({alpha:0},15,cjs.Ease.quadOut).to({_off:true},121).wait(89));

	// Layer_2
	this.instance_2 = new lib.Symbol16("synched",0);
	this.instance_2.setTransform(90.7,40.2,1,1,0,0,0,92.7,25.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({y:61.8,alpha:1},14,cjs.Ease.quadOut).wait(192).to({startPosition:0},0).to({_off:true},1).wait(1).to({_off:false},0).wait(88));

	// t1
	this.instance_3 = new lib.ClipGroup_1();
	this.instance_3.setTransform(169.7,0.95,1,1,0,0,0,169.7,17.2);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:17.2,alpha:1},14,cjs.Ease.quadOut).to({_off:true},196).wait(89));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-24.2,274.6,154.39999999999998);


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

	// Layer_1
	this.instance = new lib.Symbol19("synched",0);
	this.instance.setTransform(46.95,155.4,1,1,0,0,0,102.9,14.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14,cjs.Ease.quadOut).wait(46));

	// Layer_3
	this.instance_1 = new lib.Symbol18("synched",0);
	this.instance_1.setTransform(45.9,23,1,1,0,0,0,45.9,23);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14,cjs.Ease.quadOut).wait(46));

	// Layer_1
	this.instance_2 = new lib.ClipGroup();
	this.instance_2.setTransform(46.65,95.35,1,1,0,0,0,59,16.8);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},14,cjs.Ease.quadOut).wait(46));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(174.4,27.6,291.79999999999995,115.1);


(lib.Symbol9copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tx
	this.instance = new lib.ClipGroupcopy5();
	this.instance.setTransform(45.45,124.45,1,1,0,0,0,96.5,10.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({alpha:1},14,cjs.Ease.quadOut).wait(43));

	// vw
	this.instance_1 = new lib.ClipGroupcopy6();
	this.instance_1.setTransform(46.7,46.7,1,1,0,0,0,46.7,46.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14,cjs.Ease.quadOut).wait(46));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,333.7,93.4);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(31.75,93.65,1,1,0,0,0,47.6,47.6);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.setTransform(31.75,138.8,1,1,0,0,0,47.6,138.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.8,46.1,95.1,95.1);


// stage content:
(lib._320x100 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// FInal_VW
	this.instance = new lib.Symbol9copy("synched",0);
	this.instance.setTransform(160.7,48.6,0.525,0.525,0,0,0,163.5,46.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(249).to({_off:false},0).wait(60));

	// bite
	this.instance_1 = new lib.Symbol10("synched",0);
	this.instance_1.setTransform(157.1,125.15,0.1676,0.1676,41.2674,0,0,-31.9,171.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-31.8,regY:169.9,scaleX:0.0709,scaleY:0.0709,rotation:26.2616,x:245.9,y:-11.55,startPosition:99},119).to({_off:true},1).wait(189));

	// info
	this.instance_2 = new lib.ClipGroup_3("synched",0);
	this.instance_2.setTransform(159.95,51.5,0.57,0.57,0,0,0,314,84);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(189).to({_off:false},0).to({_off:true},60).wait(60));

	// BLUE
	this.instance_3 = new lib.Symbol15("synched",0);
	this.instance_3.setTransform(-75.2,50,0.3342,0.3342,0,0,0,212,124.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(179).to({startPosition:0},0).to({scaleX:1.1199,x:91.35},15,cjs.Ease.quadOut).wait(115));

	// cta
	this.instance_4 = new lib.Symbol7("synched",0);
	this.instance_4.setTransform(59.5,79.2,0.5444,0.5454,0,0,0,80.9,22.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(89).to({_off:false},0).to({_off:true},106).wait(114));

	// TX
	this.instance_5 = new lib.Symbol3("synched",0);
	this.instance_5.setTransform(83.95,14.1,0.4031,0.4031,0,0,0,170,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},210).wait(99));

	// Layer_3
	this.instance_6 = new lib.Symbol2("synched",0);
	this.instance_6.setTransform(294.9,48.15,0.4873,0.4873,0,0,0,32,138.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(309));

	// blue
	this.instance_7 = new lib.Symbol1("synched",0);
	this.instance_7.setTransform(82.75,49.95,0.3899,0.5032,0,0,0,212.2,124.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},210).wait(99));

	// bg
	this.instance_8 = new lib.Symbol6("synched",0);
	this.instance_8.setTransform(210.6,37.4,0.277,0.277,0,0,0,450.3,387.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:450.6,scaleX:0.2288,scaleY:0.2288,x:229.7,y:37.85},194).to({_off:true},16).wait(99));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(13.8,-19.8,315.2,205.60000000000002);
// library properties:
lib.properties = {
	id: '2FC8FCDE29FF8F4BBF292F2D27F83343',
	width: 320,
	height: 100,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/bite.png", id:"bite"},
		{src:"images/kreisais.png", id:"kreisais"},
		{src:"images/labais.png", id:"labais"}
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
an.compositions['2FC8FCDE29FF8F4BBF292F2D27F83343'] = {
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