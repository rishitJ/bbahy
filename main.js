random_number = 0
quick_draw_data_set = ""
timer_counter = 0
drawn_sketch = ""
answer_holder = ""
score = 0

array_1=['0','1', '2', '3', '4',]
random_number = Math.floor((Math.random()*array_1.length)+1)
console.log(random_number)


function setup() 
{
    canvas = createCanvas(280,280)
    canvas.position(center)
    background("white")
}
function draw() 
{
    if (drawn_sketch == sketch) 
    {
        answer_holder = "set"
    }
}
function check_sketch() 
{
    
}
function clr_canvas() 
{
    
}