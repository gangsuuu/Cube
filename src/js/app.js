import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GUI from 'lil-gui';
import { gsap } from 'gsap';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';


export default function () {
  /**
   * 변수
   */

  let mouse = new THREE.Vector2();
  let enterMenu = false
  let currentIntersects = []
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
  });
  renderer.setClearColor(0x0a1245, 1);

  const container = document.querySelector('#container');
  container.appendChild(renderer.domElement);

  const canvasSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };



  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    canvasSize.width / canvasSize.height,
    0.1,
    100
  );


  /**
   *  lights
   */
  const directionalLight =  new THREE.DirectionalLight('0#000000',0.2,100)
  directionalLight.position.set(10,10,10)
  scene.add(directionalLight);

  /**
   * fontLoader
   */
  const fontLoader = new FontLoader();
  fontLoader.load('public/assets/fonts/Mukta_font.json', function (font){
    const messages =['ABOUT','WORK','CONTACT']
    const material = new THREE.MeshBasicMaterial({
      color:'blue',
      // transparent: true,
      opacity: 1,
    })
    const fillmaterial = new THREE.MeshBasicMaterial({
      color:'blue',
      transparent: true,
      opacity: 0.11,
    })

    for(let i = 0; i < messages.length; i++){
      const shapes = font.generateShapes( messages[i], 1.7 );
      const cloneFill = fillmaterial.clone();
      const geometry = new THREE.ShapeGeometry(shapes)
      //get center
      geometry.computeBoundingBox();
      // const xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x ) ;
      const xMid = - 5 ;
      geometry.translate( xMid, 0, 0 );
    
      
      const mesh = new THREE.Mesh(geometry,cloneFill);
      mesh.position.y = i *2.3
      mesh.position.z = 0.51
      mesh.name = 'menu'
      
      scene.add(mesh)

      /**
       * LineTextGeometry
       */
      const holeShapes = [];
      



      for(let j = 0; j < shapes.length; j++){
        const shape = shapes[j];
        if ( shape.holes && shape.holes.length > 0 ) {

          for ( let k = 0; k < shape.holes.length; k++ ) {

            const hole = shape.holes[ k ];
            holeShapes.push( hole );
          }
        }
      }

      shapes.push.apply( shapes, holeShapes );
      const lineText = new THREE.Object3D();
      for ( let j = 0; j < shapes.length; j ++ ) {

        const shape = shapes[ j ];

        const points = shape.getPoints();
        const geometry = new THREE.BufferGeometry().setFromPoints( points );
        geometry.translate( xMid, 0, 0 );
        const lineMesh = new THREE.Line( geometry, material );

        geometry.computeBoundingBox();

        lineMesh.position.y = i * 2.3
        lineText.add( lineMesh );
      }
      scene.add( lineText );
    }// fontLoading end

    

    // scene.add(mesh)
  })


  /** library */


  /** Camera */
  camera.position.set(0, 0,10);


  /** Controls */
  const orbitControls = () => {
    const controls = new OrbitControls(camera, renderer.domElement);
    return controls;
  }// orbitControls end
  
  /**
   * raycaster
   */
  const raycaster = new THREE.Raycaster();


  /** 
   * createMeus
   */
  const createMenu = () => {  
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(11,14,1),
      new THREE.MeshPhysicalMaterial({
        // color: 'red',
        roughness: 0,
        metalness: 0,
        transmission: 1,
        thickness: 0.5,
      })
      )
      mesh.name = 'menuList'
    return mesh
  }// createMenu end
  
  /** create */
  const create = () => {
    const menuList = createMenu();
    scene.add(menuList);
  };// create end

  const resize = () => {
    canvasSize.width = window.innerWidth;
    canvasSize.height = window.innerHeight;

    camera.aspect = canvasSize.width / canvasSize.height;
    camera.updateProjectionMatrix();

    renderer.setSize(canvasSize.width, canvasSize.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  };// resize end

  const addEvent = () => {
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove',(e) => {
      getMousePoint(e)
      getRaycaster()
    })
  };// addEvent end
  
  /**
   *  getMousePoint - get mouse x,y points
  */
  const getMousePoint = (e) => {
    mouse.x = e.clientX / canvasSize.width * 2 - 1
    mouse.y = - (e.clientY / canvasSize.height) * 2 + 1
  }// getMousePoint end

  /**
   *  getRaycaster  
  */
 const getRaycaster = () =>{
    const intersects = raycaster.intersectObjects(scene.children)
    raycaster.setFromCamera(mouse, camera)

    for(const inetersect of intersects){
      // menuCheck
      if(inetersect.object.name === 'menu'){
        if(currentIntersects.length == 0){
          meunCheck(inetersect)
          gsap.to(inetersect.object.material,{
            opacity : 1,
            duration: .2,
          })
          currentIntersects.push(inetersect.object)
        }else if(currentIntersects.length >= 1){
          for(let i = 0; i < currentIntersects.length; i++){
            if(currentIntersects[i] !== inetersect.object){
              gsap.to(inetersect.object.material,{
                opacity : 1,
                duration: .2,
              })
              gsap.to(currentIntersects[i].material,{
                opacity : 0,
                duration: .2,
              })
              currentIntersects.splice(0),
              currentIntersects.push(inetersect.object)
            }
          }
      }
    }//menuCheck end
    if(inetersect.object.name === 'menuList'){
      enterMenu = true;
    }
  }
  meunCheck(enterMenu,intersects)
 }//getRaycaster end

 /**
  * 
  * @param {boolean} position check on menulist
  * @param {object} intersects check for menu
  */
 const meunCheck = (enterMenu,intersects) => {
  if(enterMenu == true && currentIntersects.length >= 1){
      for(let i = 0; i < currentIntersects.length; i++){
        gsap.to(currentIntersects[i].material,{
          opacity : 0,
          duration: .2,
        })
      }
    currentIntersects = []
    enterMenu = false
  }
 }

  const draw = ( orbitControl) => {

    orbitControl.update();
    renderer.render(scene, camera);

    requestAnimationFrame(() => {
      draw(orbitControl);
    });
  };//draw end




  const initialize = () => {
    create();
    const orbitControl = orbitControls()
    addEvent();
    resize();
    draw(orbitControl);
  }; //intialize end

  initialize();
}