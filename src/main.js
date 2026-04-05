import { alpha, mix } from 'framer-motion';
import '../index.css'
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { gsap } from "gsap";
  

const camera = new THREE.PerspectiveCamera(
  15, //viewing angle
  window.innerWidth/window.innerHeight, //aspect
  13,//near
  1000 //farthest distance that the camera can see

);
camera.position.z=300;

const scene= new THREE.Scene();
let lotus;

let mixer;


const loader= new GLTFLoader();
loader.load('/lotus.glb',
  function (gltf){
    lotus=gltf.scene;
    lotus.position.set(23, 7, 40);
    lotus.rotation.set(1.5, -1, 1);
    
    
    
    mixer = new THREE.AnimationMixer(lotus);
    mixer.clipAction(gltf.animations[0]).play();
   
    
    scene.add(lotus)
  }, //will run when model loading process is complete
  function (xhr){}, //will continuosly run during the loading process to check the user file loading progress
  function (error){} //for error reporting
);



const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container3d').appendChild(renderer.domElement);

//light
const ambientLight = new THREE.AmbientLight(0xe100ff, 2);
scene.add(ambientLight);

const toplight = new THREE.DirectionalLight(0xe100ff, 15);
toplight.position.set(10, 50, 20);
scene.add(toplight);

const backlight = new THREE.DirectionalLight(0xffffff, 1);
backlight.position.set(-200, 290, 100);
scene.add(backlight);

const frontlight = new THREE.DirectionalLight(0xffffff, 50);
frontlight.position.set(100, 590, -300);
scene.add(frontlight);

const fillLight = new THREE.DirectionalLight(0xffffff, 1);
fillLight.position.set(-40, 50, 30);
scene.add(fillLight);

const rimLight = new THREE.DirectionalLight(0x87ceeb, 40);
rimLight.position.set(40, 3, -3);
scene.add(rimLight);



const reRender3d = () => {
  requestAnimationFrame(reRender3d);

  if(mixer){
    mixer.update(0.01);
  }

  

  renderer.render(scene, camera);
};
reRender3d();


let arrPositionModel = [
  {
    id: 'first',
    position: {x: 23, y: 7, z: 40},
    rotation: {x: 1.5, y: -1, z: 1}
  },
  {
    id: 'second',
    position: {x: -40, y: 3, z: 0},
    rotation: {x: 1.45, y: 0, z: 0}
  },
  {
    id: 'third',
    position: {x: 30, y: 0, z: 0},
    rotation: {x: 0, y: 0, z: 0}
  },
  {
    id: 'fourth',
    position: {x: -40, y: 0, z: -80},
    rotation: {x: 1, y: 0, z: 0}
  },
  {
    id: 'fifth',
    position: {x: 70, y: -2, z: -100},
    rotation: {x: 1.5, y: 0, z: 0}
  }

];

const modelMove = () => {

  const sections = document.querySelectorAll('.section');
  let currentSection;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if(rect.top <= window.innerHeight / 2){
      currentSection = section.id;
    }
  });

  console.log(currentSection);


    if(currentSection === "six"  ){

    if(lotus) lotus.visible = false;
    if(arts) arts.visible = false;
    if(nataraj) nataraj.visible = false;
    return; // stop further execution
  }

  // FIRST & SECOND SECTION → SHOW LOTUS
  if(lotus) lotus.visible = true;

  console.log(currentSection)
  let position_active = arrPositionModel.findIndex(
    (val) => val.id === currentSection
  );

  if(position_active >= 0){

    let new_cordinate = arrPositionModel[position_active];

    gsap.to(lotus.position,{
      x:new_cordinate.position.x,
      y:new_cordinate.position.y,
      z:new_cordinate.position.z,
      duration:1.5,
      ease:"power2.inOut"
    });

    gsap.to(lotus.rotation,{
      x:new_cordinate.rotation.x,
      y:new_cordinate.rotation.y,
      z:new_cordinate.rotation.z,
      duration:1.5,
      
    });

  }

}
window.addEventListener('scroll', () => {
if (lotus){
  modelMove();

  }
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
