let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint
    Bodies = Matter.Bodies;

let engine = Engine.create();

let render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 1200,
        height: 600,
        wireframes: false    
    }
});

let mouse = Mouse.create(render.canvas)
let mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
    render: {visible: false
    
    }
    }
})
render.mouse = mouse

//Alla objekt till världen
let pyramid = Matter.Composites.pyramid(100, 200, 22, 20, 1, 1, function(x, y) {
    return Bodies.rectangle(x, y, 20, 20, {friction: 0.2, restitution: 1})
});

let circle = Bodies.circle(340, 0, 50)

let ground = Bodies.rectangle(400, 610, 1600, 60, {isStatic:true});

World.add(engine.world, [ground, mouseConstraint, pyramid, circle]);

Engine.run(engine);

Render.run(render);

