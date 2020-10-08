//cdn

import * as THREE from "./three_js/three.module.js";
import { GLTFLoader } from "./three_js/GLTFLoader.js";
import { DRACOLoader } from "./three_js/DRACOLoader.js";
import { ARButton } from "./three_js/ARButton.js";
import { OrbitControls } from "./three_js/OrbitControls.js";

let scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  10000
);

var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
// renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.xr.enabled = true;
document.body.appendChild(renderer.domElement);
document.body.appendChild(ARButton.createButton(renderer));

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.minDistance = 1;
controls.maxDistance = 5000;

let hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
hemiLight.position.set(0, 0, 0);
scene.add(hemiLight);

// let dirLight = new THREE.DirectionalLight(0xffffff);
// dirLight.position.set(0, 0, 0);
// scene.add(dirLight);

// let ambientLight = new THREE.AmbientLight(0xfffff0);
// ambientLight.position.set(0, 0, 0);
// scene.add(ambientLight);

let onSelect = () => {
  let loader = new GLTFLoader();
  let dracoLoader = new DRACOLoader();
  loader.setDRACOLoader(dracoLoader);
  let mesh;
  loader.load(
    "./model/gisday_rysy.gltf",
    function (gltf) {
      mesh = gltf.scene;
      mesh.material = new THREE.MeshLambertMaterial();
      mesh.material.flatShading = true;
      mesh.material.metalness = 0;
      mesh.position.set(0, -8, -25).applyMatrix4(controller.matrixWorld);
      mesh.quaternion.setFromRotationMatrix(controller.matrixWorld);
      mesh.scale.set(0.01, 0.01, 0.01);
      scene.add(mesh);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.log("An error happened - WHYYYY????");
    }
  );
};

let controller = renderer.xr.getController(0);
controller.addEventListener("select", onSelect);
scene.add(controller);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", onWindowResize, false);

function animate() {
  renderer.setAnimationLoop(render);
}

function render() {
  renderer.render(scene, camera);
}

animate();
