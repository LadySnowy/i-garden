function cale()
{
var width = d3.select("#siteList").style("width").slice(0,-2);
var height = 30;
var padding = 20;

//d3.select("#siteList").style("width")

//log(width);

var data = [
  {phase:1, early:new Date(2012, 1, 24), late:new Date(2012, 3, 9)},
  {phase:2, early:new Date(2012, 2, 21), late:new Date(2012, 4, 1)},
  {phase:3, early:new Date(2012, 3, 5), late:new Date(2012, 8, 17)},
  {phase:4, early:new Date(2012, 8, 7), late:new Date(2012, 9, 17)},
];

//add svg to sitelist
var dayLength = d3.select("#siteList").
  append("svg:svg").
  attr("width", width).
  attr("height", height + padding * 2);
  
var x = d3.time.scale().domain([new Date(2012, 0, 1), new Date(2012, 11, 31)]).range([0, width]);

var monthNames = ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function midMonthDates() {
  return d3.range(0, 12).map(function(i) { return new Date(2012, i, 15) });
}

function beginMonthDates() {
  return d3.range(0, 12).map(function(i) { return new Date(2012, i, 1) });
}

// create a group for the sunrise and sunset paths
var lineGroup = dayLength.append("svg:g").
  attr("transform", "translate(0, " + padding + ")");

// draw the background. The part of this that remains uncovered will
// represent the daylight hours.

lineGroup.append("svg:rect").
  attr("x", 0).
  attr("y", 0).
  attr("height", height).
  attr("width", width).
  attr("fill", "white");
  
//log(x(data[0].early));
 
//this is where I draw the data
{
//draw the starting 
lineGroup.append("svg:rect").
  attr("x", x(data[0].early)).
  attr("y", 0).
  attr("height", height).
  attr("width", x(data[0].late)-x(data[0].early)).
  attr("fill", "rgba(171, 96, 107, 0.33)");
//draw the harding
lineGroup.append("svg:rect").
  attr("x", x(data[1].early)).
  attr("y", 0).
  attr("height", height).
  attr("width", x(data[1].late)-x(data[1].early)).
  attr("fill", "rgba(143, 126, 233, 0.33)");
}
//draw the transplanting
lineGroup.append("svg:rect").
  attr("x", x(data[2].early)).
  attr("y", 0).
  attr("height", height).
  attr("width", x(data[2].late)-x(data[2].early)).
  attr("fill", "rgba(133, 189, 83, 0.33)");
//draw the Harvest
lineGroup.append("svg:rect").
  attr("x", x(data[3].early)).
  attr("y", 0).
  attr("height", height).
  attr("width", x(data[3].late)-x(data[3].early)).
  attr("fill", "rgba(171, 176, 107, 0.55)");
 
 

// create a group to hold the axis-related elements
var axisGroup = dayLength.append("svg:g").
  attr("transform", "translate(0,"+padding+")");

// draw the x tick marks. 

axisGroup.selectAll(".xTicks").
  data(beginMonthDates).
  enter().append("svg:line").
  attr("x1", x).
  attr("y1", 0).
  attr("x2", x).
  attr("y2", height+5).
  attr("stroke", "gray").
  attr("class", "yTicks");

// draw the text for the labels. Since it is the same on top and
// bottom, there is probably a cleaner way to do this by copying the
// result and translating it to the opposite side

axisGroup.selectAll("text.xAxisBottom").
  data(midMonthDates).
  enter().
  append("svg:text").
  text(function(d, i) { return monthNames[i]; }).
  attr("x", x).
  attr("y", height+15).
  attr("text-anchor", "middle").
  attr("class", "xAxisBottom");

}