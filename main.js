//cdn

import * as THREE from "./three_js/three.module.js";
import { GLTFLoader } from "./three_js/GLTFLoader.js";
import { DRACOLoader } from "./three_js/DRACOLoader.js";
// import { VRButton } from 'https://cdn.jsdelivr.net/npm/three@0.119.0/examples/jsm/webxr/VRButton.js';
import { OrbitControls } from "./three_js/OrbitControls.js";

let scene = new THREE.Scene();
scene.background = new THREE.Color("#ffffff");
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  10000
);
camera.position.set(-1000, 900, -2500);

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.physicallyCorrectLights = true;
document.body.appendChild(renderer.domElement);

let hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
hemiLight.position.set(0, 800, -750);
scene.add(hemiLight);

let dirLight = new THREE.DirectionalLight(0xffffff);
dirLight.position.set(75, 800, -750);
scene.add(dirLight);

let ambientLight = new THREE.AmbientLight(0xfffff0);
ambientLight.position.set(0, 700, 0);
scene.add(ambientLight);

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
    mesh.position.y = -100;
    scene.add(mesh);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    console.log("An error happened - WHYYYY????");
  }
);

//MORSKIE OKO ZNACZNIK
let momaterial = new THREE.LineBasicMaterial({
  color: 0x0000ff,
  linewidth: 10,
  linecap: "round",
  linejoin: "roud",
});

let mopoints = [];
mopoints.push(new THREE.Vector3(0, 0, 0));
mopoints.push(new THREE.Vector3(0, 850, 0));

let mogeometry = new THREE.BufferGeometry().setFromPoints(mopoints);

let moline = new THREE.Line(mogeometry, momaterial);
moline.position.set(-100, 0, 0);
scene.add(moline);

var fontLoader = new THREE.FontLoader();

fontLoader.load("./fonts/gentilis_regular.typeface.json", function (font) {
  let Textgeometry = new THREE.TextGeometry("Morskie Oko", {
    font: font,
    size: 60,
    height: 5,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 10,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 5,
  });
  let textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
  let text = new THREE.Mesh(Textgeometry, textMaterial);
  text.position.set(0, 900, 0);
  text.rotateY(600);
  scene.add(text);
});

//Rysy znacznik
let rmaterial = new THREE.LineBasicMaterial({
  color: 0xff0000,
  linewidth: 10,
  linecap: "round",
  linejoin: "roud",
});

let rpoints = [];
rpoints.push(new THREE.Vector3(0, 0, 0));
rpoints.push(new THREE.Vector3(0, 1200, 0));

let rgeometry = new THREE.BufferGeometry().setFromPoints(rpoints);

let rline = new THREE.Line(rgeometry, rmaterial);
rline.position.set(410, 0, 680);
scene.add(rline);

fontLoader.load("./fonts/gentilis_regular.typeface.json", function (font) {
  let Textgeometry = new THREE.TextGeometry("Rysy", {
    font: font,
    size: 60,
    height: 5,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 10,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 5,
  });
  let textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
  let text = new THREE.Mesh(Textgeometry, textMaterial);
  text.position.set(500, 1250, 700);
  text.rotateY(600);
  scene.add(text);
});

//Kozi Wierch znacznik
let kwmaterial = new THREE.LineBasicMaterial({
  color: 0xff0000,
  linewidth: 10,
  linecap: "round",
  linejoin: "roud",
});

let kwpoints = [];
kwpoints.push(new THREE.Vector3(0, 0, 0));
kwpoints.push(new THREE.Vector3(0, 700, 0));

let kwgeometry = new THREE.BufferGeometry().setFromPoints(kwpoints);

let kwline = new THREE.Line(kwgeometry, kwmaterial);
kwline.position.set(-1200, 0, -950);
scene.add(kwline);

fontLoader.load("./fonts/gentilis_regular.typeface.json", function (font) {
  let Textgeometry = new THREE.TextGeometry("Kozi Wierch", {
    font: font,
    size: 60,
    height: 5,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 10,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 5,
  });
  let textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
  let text = new THREE.Mesh(Textgeometry, textMaterial);
  text.position.set(-1200, 750, -950);
  text.rotateY(600);
  scene.add(text);
});

//Wielki staw znacznik
let wsmaterial = new THREE.LineBasicMaterial({
  color: 0x0000ff,
  linewidth: 10,
  linecap: "round",
  linejoin: "roud",
});

let wspoints = [];
wspoints.push(new THREE.Vector3(0, 0, 0));
wspoints.push(new THREE.Vector3(0, 950, 0));

let wsgeometry = new THREE.BufferGeometry().setFromPoints(wspoints);

let wsline = new THREE.Line(wsgeometry, wsmaterial);
wsline.position.set(-950, 0, -500);
scene.add(wsline);

fontLoader.load("./fonts/gentilis_regular.typeface.json", function (font) {
  let Textgeometry = new THREE.TextGeometry("Wielki Staw", {
    font: font,
    size: 60,
    height: 5,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 10,
    bevelSize: 0,
    bevelOffset: 0,
    bevelSegments: 5,
  });
  let textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
  let text = new THREE.Mesh(Textgeometry, textMaterial);
  text.position.set(-850, 1000, -500);
  text.rotateY(600);
  scene.add(text);
});

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.minDistance = 1;
controls.maxDistance = 5000;

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize, false);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}
animate();
