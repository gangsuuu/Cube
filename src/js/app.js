import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { gsap } from 'gsap';
import GUI from 'lil-gui';

export default function () {
  /**
   * 변수
   */

  let mouse = new THREE.Vector2();
  let enterMenu = false
  let currentIntersects = []

  let enteredMenu = null
  let newMenu = null


  /** 연습용 */
  const BLOOM_SCENE = 1;
  const bloomLayer = new THREE.Layers()
  bloomLayer.set(BLOOM_SCENE)

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
  });
  // renderer.outputEncoding = new THREE.sRGBEncoding;
  // renderer.toneMapping = THREE.ReinhardToneMapping;
  renderer.setClearColor(0x282828, 1);
  renderer.autoClear = false;

  const container = document.querySelector('#container');
  container.appendChild(renderer.domElement);

  const canvasSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };


  /**
   * threejs requiers
   */
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    canvasSize.width / canvasSize.height,
    0.1,
    100
  );



  /**
   *  selectBloom 
   */
  const selectBloom = () =>{

  }


  /**
   * post processing
   */
  const effectComposer = new EffectComposer(renderer);
  const addPostEffects = () =>{
    // effectComposer.renderToScreen = false
    const renderpass = new RenderPass(scene, camera);
    const unrealBloomPass = new UnrealBloomPass(
      new THREE.Vector2(canvasSize.width / canvasSize.height)
    )
    unrealBloomPass.strength  = 0.2 // unrealBloomPass 파워
    effectComposer.addPass(renderpass);
    effectComposer.addPass(unrealBloomPass);

  }



  /**
   *  lights
   */
  const directionalLight =  new THREE.DirectionalLight('0#000000',1,100)
  // const directionalLight =  new THREE.AmbientLight('0#000000',0.2,100)
  directionalLight.position.set(10,10,10)
  scene.add(directionalLight);
  
  /**
   * fontLoader
   */
  const textloader = () => {
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
    })// textloader end
  }//textloader end

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
  
  /**
   * createBox
   */
  const createBox = () => {



    // const geometry = new THREE.BoxGeometry(3,3,3);
    // const material = new THREE.MeshBasicMaterial({
    //   color: 'red',
    //   transparent: true,
    //   opacity:.3,
    // })
    // const mesh = new THREE.Mesh(geometry,material)
    // const cloen = mesh.clone()

    // cloen.layers.enable(BLOOM_SCENE)
    // cloen.position.set(0,4,0)
    // scene.add(mesh,cloen)
    // // return mesh 
    const geometry = new THREE.IcosahedronGeometry( 1, 15 );

    for ( let i = 0; i < 50; i ++ ) {

      const color = new THREE.Color();
      color.setHSL( Math.random(), 0.7, Math.random() * 0.2 + 0.05 );

      const material = new THREE.MeshBasicMaterial( { color: color } );
      const sphere = new THREE.Mesh( geometry, material );
      sphere.position.x = Math.random() * 10 - 5;
      sphere.position.y = Math.random() * 10 - 5;
      sphere.position.z = Math.random() * 10 - 5;
      sphere.position.normalize().multiplyScalar( Math.random() * 4.0 + 2.0 );
      sphere.scale.setScalar( Math.random() * Math.random() + 0.5 );
      scene.add( sphere );

      if ( Math.random() < 0.25 ) sphere.layers.enable( BLOOM_SCENE );
      console.log(sphere.layers)
    }

  }





  /** create */
  const create = () => {
    createBox()
    // const menuList = createMenu();
    // scene.add(menuList);
      
  };// create end

  const resize = () => {
    canvasSize.width = window.innerWidth;
    canvasSize.height = window.innerHeight;

    camera.aspect = canvasSize.width / canvasSize.height;
    camera.updateProjectionMatrix();

    renderer.setSize(canvasSize.width, canvasSize.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    effectComposer.setSize(canvasSize.width, canvasSize.height);
    
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
    enterMenu = false

    for(const inetersect of intersects){
      if(inetersect.object.name === 'menuList'){
        enterMenu = true;
      }
      // menuCheck
      if(inetersect.object.name === 'menu'){
        newMenu = inetersect.object
      }//menuCheck end
  }

  // meunCheck()
 }//getRaycaster end

 /**
  * 
  * @param {boolean} position check on menulist
  * @param {object} intersects check for menu
  */
 const meunCheck = () => {
   
   if(enterMenu == true && newMenu){
    if(newMenu && enteredMenu == null){
      gsap.to(newMenu.material,{
        opacity :1,
        duration : .2,
      })  
      enteredMenu = newMenu
    }else if(newMenu && enteredMenu  && newMenu != enteredMenu){
      gsap.to(newMenu.material,{
        opacity : 1,
        duration: .2,
      })
      gsap.to(enteredMenu.material,{
        opacity : .1,
        duration: .2,
      })
      enteredMenu = newMenu
    }
  }else if(enterMenu == false){
    gsap.to(enteredMenu.material,{
      opacity : .1,
      duration: .2,
    })
  }
 }//menu check end

  const draw = ( orbitControl) => {
    renderer.clear();


    orbitControl.update();
    // renderer.render(scene, camera);
    effectComposer.render()
    requestAnimationFrame(() => {
      draw(orbitControl);
    });
  };//draw end




  const initialize = () => {
    addPostEffects()
    create();
    const orbitControl = orbitControls()
    addEvent();
    resize();
    draw(orbitControl);
  }; //intialize end

  initialize();
}