
function setup() 
{
  createCanvas(400,400);
}
var marks = [75,90,99,52,83]
console.log(marks[3])
function avg()
{
  average = (marks[0]+marks[1]+marks[2]+marks[3]+marks[4])/marks.length
  console.log(average)
}
function draw() 
{
background(51);

}
avg()