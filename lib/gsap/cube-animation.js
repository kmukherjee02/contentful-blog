import { gsap } from 'gsap';

export function initializeCubeAnimation(){
    const cube1tl = gsap.timeline();
    let cubes = [];
    let cube;
    let i;
    let bg = document.querySelector(".scene");

    for (i = 0; i < 12; i++) {
        cube = getCube(i, cube);
        bg.appendChild(cube);
        cubes.push(cube);
    }

    cube1tl.set(".cube", { x: 0, y: 0, position: "absolute" });
    cube1tl.set(".scene", { perspective: "none", x: -130, y: -80, rotateZ: 35 });
    cube1tl.set(".triangle", { rotateZ: -143, x: -250, y: 332 });

    gsap.fromTo(
        "#cube--1",
        { x: "random(-1000, -500)", y: "random(-1500, 1000)", rotateX: 1440 },
        {
            x: 210,
            y: 400,
            rotateY: -45,
            rotateX: -45,
            display: "block",
            zIndex: 2,
            ease: "elastic.out(1, 0.2)",
            duration: 4.0
        }
    );
    gsap.fromTo(
        "#cube--2",
        { x: "random(-1000, -500)", y: "random(-1500, 1000)", rotateY: 360 },
        {
            x: 260,
            y: 330,
            rotateY: -45,
            rotateX: -45,
            display: "block",
            zIndex: -1,
            ease: "bounce.in",
            duration: "random(1,3)"
        }
    );
    gsap.fromTo(
        "#cube--3",
        { x: "random(-1000, -500)", y: "random(-1500, 1000)", rotateZ: 720 },
        {
            x: 330,
            y: 330,
            rotateY: -45,
            rotateX: -45,
            display: "block",
            zIndex: -1,
            ease: "power2.in",
            duration: "random(1,3)"
        }
    );
    gsap.fromTo(
        "#cube--4",
        { x: "random(-1000, -500)", y: "random(-1500, 1000)", rotateX: 360 },
        {
            x: 140,
            y: 260,
            rotateY: -45,
            rotateX: -45,
            display: "block",
            zIndex: -1,
            ease: "power2.in",
            duration: "random(1,3)"
        }
    );
    gsap.fromTo(
        "#cube--5",
        { x: "random(-1000, -500)", y: "random(-1500, 1000)", rotateY: 720 },
        {
            x: 190,
            y: 190,
            rotateY: -45,
            rotateX: -45,
            display: "block",
            zIndex: -2,
            ease: "power2.in",
            duration: "random(1,3)"
        }
    );
    gsap.fromTo(
        "#cube--6",
        { x: "random(-1000, -500)", y: "random(-1500, 1000)", rotateZ: 360 },
        {
            x: 240,
            y: 120,
            rotateY: -45,
            rotateX: -45,
            display: "block",
            zIndex: -3,
            ease: "power2.in",
            duration: "random(1,3)"
        }
    );
    gsap.fromTo(
        "#cube--7",
        { x: "random(-1000, -500)", y: "random(-1500, 1000)", rotateX: 720 },
        {
            x: 170,
            y: 120,
            rotateY: -45,
            rotateX: -45,
            display: "block",
            zIndex: -4,
            ease: "power2.in",
            duration: "random(1,3)"
        }
    );
    gsap.fromTo(
        "#cube--8",
        { x: "random(-1000, -500)", y: "random(-1500, 1000)", rotateY: 360 },
        {
            x: 220,
            y: 50,
            rotateY: -45,
            rotateX: -45,
            display: "block",
            zIndex: -5,
            ease: "power2.in",
            duration: "random(1,3)"
        }
    );
    gsap.fromTo(
        "#cube--9",
        { x: "random(-1000, -500)", y: "random(-1500, 1000)", rotateZ: 720 },
        {
            x: 380,
            y: 260,
            rotateY: -45,
            rotateX: -45,
            display: "block",
            zIndex: -2,
            ease: "power2.in",
            duration: "random(1,3)"
        }
    );
    gsap.fromTo(
        "#cube--10",
        { x: "random(-1000, -500)", y: "random(-1500, 1000)", rotateX: 360 },
        {
            x: 430,
            y: 330,
            rotateY: -45,
            rotateX: -45,
            display: "block",
            zIndex: -3,
            ease: "power2.in",
            duration: "random(1,3)"
        }
    );
    gsap.fromTo(
        "#cube--11",
        { x: "random(-1000, -500)", y: "random(-1500, 1000)", rotateY: 720 },
        {
            x: 140,
            y: 400,
            rotateY: -45,
            rotateX: -45,
            display: "block",
            zIndex: -3,
            ease: "power2.in",
            duration: "random(1,3)"
        }
    );
    gsap.fromTo(
        "#cube--0",
        { x: "random(-1000, -500)", y: "random(-1500, 1000)", rotateZ: 360 },
        {
            x: 500,
            y: 330,
            rotateY: -45,
            rotateX: -45,
            display: "block",
            zIndex: -2,
            ease: "power2.in",
            duration: "random(1,3)"
        }
    );
}



function getCube(i, cube) {
    cube = document.createElement("div");
    cube.setAttribute("class", "cube cube--rotate cube--" + i);
    cube.setAttribute("id", "cube--" + i);
    cube.appendChild(getSide("front"));
    cube.appendChild(getSide("back"));
    cube.appendChild(getSide("left"));
    cube.appendChild(getSide("right"));
    cube.appendChild(getSide("top"));
    cube.appendChild(getSide("bottom"));
    return cube;
}

function getSide(name) {
    let side = document.createElement("div");
    side.setAttribute("class", "cube__face cube__face--" + name);
    //side.innerHTML = name;
    return side;
}


export function initializeTextAnimation(){
    
}



