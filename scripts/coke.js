import * as THREE from 'https://cdn.skypack.dev/three@0.136.0';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js';


const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: document.querySelector("#cokeCanvas"), alpha : true});
renderer.setSize(800, 800);
// document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 1, 2, 100);

renderer.setClearColor('0x000000',0);

const loader = new GLTFLoader();
const fileName = 'Assets/3dmodel/Coke Can.glb';
let model, moveTop, moveBottom, moveRight,reset;

loader.load(fileName, function (gltf) {
    model = gltf.scene;
    scene.add(model);
    addLight();
    adjustModelAndCamera();
    top();
    scene.add(camera);
    //const axesHelper = new THREE.AxesHelper( 5 );
    //scene.add( axesHelper );
    renderer.render(scene, camera);
    animate();
    onWindowResize();
}, undefined, function (e) {
    console.error(e);
})

function addLight() {
    const light = new THREE.DirectionalLight(0xffffff, 4);
    light.position.set(0.5, 0, 0.866);
    camera.add(light);
}

function adjustModelAndCamera() {
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3()).length();
    const center = box.getCenter(new THREE.Vector3());

    model.position.x += (model.position.x - center.x);
    model.position.y += (model.position.y - center.y);
    model.position.z += (model.position.z - center.z);

    camera.near = size / 50;
    camera.far = size * 50;
    camera.updateProjectionMatrix();

    camera.position.copy(center);
    camera.position.x += size / 1;
    camera.position.y += size / 1;
    camera.position.z += size / 150;
    camera.lookAt(center);
}

const controls = new OrbitControls(camera, renderer.domElement);
window.model = model;
controls.screenSpacePanning = true;

function animate() {
    requestAnimationFrame(animate);
    // controls.update();
    // camera.position.x = 5;

    if (moveTop) {
        model.rotateZ(-90 * Math.PI / 180);
        //model.rotateX(-360 * Math.PI / 180);
        moveTop = false;
    }

    if (moveBottom){
        model.rotateZ(+90 * Math.PI / 180);
        //model.rotateY(+360 * Math.PI / 180);
        moveBottom = false;
    }

    if(moveRight){
        model.position.x += 3;
        model.position.z += 3;
        moveRight = false;
    }

    if(reset){
        moveRight= false;
        moveBottom = false;
        moveTop = false;
    }


    renderer.render(scene, camera);
}
window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(400,400)

}
// window.addEventListener('btn', onButtonClick, false)
function top()
{
    console.log('hello world');
}


function anim() {
    var btnn = document.getElementById("btn");
    btnn.onclick = console.log('hello world');
}



function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}

document.querySelector("#topBtn").addEventListener("click", () => {
    moveTop = true;

})

document.querySelector("#botBtn").addEventListener("click", () => {
    moveBottom = true;
})

document.querySelector("#moveRight").addEventListener("click", () => {
    moveRight = true;
})

document.querySelector("#reset").addEventListener("click", ()=>{
    reset = true;
})

