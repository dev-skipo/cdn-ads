var color = new Array();
color[0] = "#CC99FF";
color[1] = "#FF99CC";
color[2] = "#FF9999";
color[3] = "#FFCC99";
color[4] = "#FFFF99";
color[5] = "#CCFF99";
color[6] = "#99FF99";
color[7] = "#99FFCC";
color[8] = "#66FFFF";
color[9] = "#66CCFF";

function changeColor()
{
  var randomColor = Math.floor(Math.random() * color.length);
  document.body.style.backgroundColor = color[randomColor];

}