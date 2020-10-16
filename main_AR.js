
import * as THREE from "./three_js/three.module.js"; // Three js import
import { GLTFLoader } from "./three_js/GLTFLoader.js"; // model loader import
import { DRACOLoader } from "./three_js/DRACOLoader.js"; // decoder import
import { ARButton } from "./three_js/ARButton.js"; // AR button import

//Create scene
let scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  10000
);

//create renderer
var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.xr.enabled = true; // Virtual reality content enabled
document.body.appendChild(renderer.domElement);
document.body.appendChild(ARButton.createButton(renderer)); // Add AR button to the main page

// Hemisphere Light 
let hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
hemiLight.position.set(0, 0, 0);
scene.add(hemiLight);

// Directional Light
let dirLight = new THREE.DirectionalLight(0xffffff);
dirLight.position.set(0, 0, 0);
scene.add(dirLight);

// Ambient Light
let ambientLight = new THREE.AmbientLight(0xfffff0);
ambientLight.position.set(0, 0, 0);
scene.add(ambientLight);

// On Select 
let onSelect = () => {
  let loader = new GLTFLoader(); // Model Loader
  let dracoLoader = new DRACOLoader(); // decoder
  loader.setDRACOLoader(dracoLoader);
  let mesh;
  loader.load(
    "./model/gisday_rysy.gltf", // model path
    function (gltf) {
      mesh = gltf.scene;
      mesh.material = new THREE.MeshLambertMaterial();
      mesh.material.flatShading = true; 
      mesh.material.metalness = 0; 
      mesh.position.set(0, -10, -20).applyMatrix4(controller.matrixWorld);
      mesh.quaternion.setFromRotationMatrix(controller.matrixWorld);
      mesh.scale.set(0.01, 0.01, 0.01);
      mesh.rotateY(90);
      scene.add(mesh);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("An error happened");
    }
  );
};

// VR AR controller
let controller = renderer.xr.getController(0);
controller.addEventListener("select", onSelect);
scene.add(controller);

// window scaling
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", onWindowResize, false);

//rendering in the scene
function animate() {
  renderer.setAnimationLoop(render);
}

function render() {
  renderer.render(scene, camera);
}

animate();
