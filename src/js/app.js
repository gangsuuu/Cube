import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { gsap } from 'gsap';
import GUI from 'lil-gui';
import { degToRad } from 'three/src/math/MathUtils';
import {  Reflector  } from 'three/examples/jsm/objects/Reflector.js'
import About  from './About.js';
import Contact from './Contact.js';
import Content from './Content.js';
import Controll from './Controll.js';

import BoxPosition from './BoxPosition.js';
import CssControlls from './CssControll.js';

export default function () {
  
  const boxsArray = []
  const boxPosition = new BoxPosition();
  const about = new About(gsap,boxsArray);
  const contact = new Contact(gsap)
  const content = new Content(gsap)
  const controll = new Controll(gsap);
  /**
   * 변수
  */
  let boxGroup = new THREE.Group()
  let mouse = new THREE.Vector2();
  // let boxGroup = new THREE.Group()
  let textureBoxGroup = new THREE.Group()
  let boxStates = ['normal','entered','about','content','controll','contact']
  let boxState = 0
  let currentPages = ['about','content','controll','contact']
  let currentPage = 'index';
  let isGlow
  let isEntered = false;
  let isCameraWork = true;
  let isShowList = true;
  let entered = false;
  const cssControlls = new CssControlls();
  const navAs = document.querySelectorAll('.navWrapper a')
  const navWrapper = document.querySelector('.navWrapper')
  const navTitle = document.querySelector('.navTitle span')
  const navTitleP = document.querySelector('.navTitle')
  

  /* boxState */
  let boxXCount = 5 //한 줄의 박스 갯수
  let boxYCount = 5 //한 줄의 박스 갯수
  let boxZCount = 6 //한 줄의 박스 갯수
  let boxTotals = boxXCount * boxYCount * boxZCount // 박스 전체 갯수
  let boxSizeX = 0.5 //박스 x 길이
  let boxSizeY = 0.5 //박스 y 길이
  let boxSizeZ = 0.5 //박스 z 길이
  let boxSpace = 0.05 // 박스 사이 간격
  let xSize = boxXCount * boxSizeX + (boxXCount - 1) * boxSpace // 박스 간격 포함한 전체 X사이즈 
  let ySize = boxZCount * boxSizeY + (boxZCount - 1) * boxSpace // 박스 간격 포함한 전체 Z사이즈 
  let zSize = boxYCount * boxSizeZ + (boxYCount - 1) * boxSpace // 박스 간격 포함한 전체 Y사이즈 

  let isBoxAnimating = false;


    /** param */
    let bloomParam = {
      threshold : 0.23,
      strength : 0.4,
      radius : 1,
      exposure: 1
    }
    let textureBoxParam = {
      xCount : boxXCount,
      yCount : boxYCount,
      boxSizeX : boxSizeX,
      boxSizeY : boxSizeY,
      boxSizeZ : boxSizeZ,
      unitx : 1/ boxXCount,
      unity : 1/ boxYCount,
    }
  


  /** layerModel */
  const BLOOM_SCENE = 0; // layout number
  const bloomLayer = new THREE.Layers() // createlayer
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
  let unrealBloomPass
  const addPostEffects = () =>{
    // effectComposer.renderToScreen = false
    const renderpass = new RenderPass(scene, camera);
    unrealBloomPass = new UnrealBloomPass(
      new THREE.Vector2(canvasSize.width / canvasSize.height)
    )
    unrealBloomPass.strength  = bloomParam.strength // unrealBloomPass 파워
    unrealBloomPass.threshold = bloomParam.threshold // 범위 0 default full screen
    unrealBloomPass.radius = bloomParam.radius
    unrealBloomPass.filter = false;
    effectComposer.addPass(renderpass);
    effectComposer.addPass(unrealBloomPass);
  }

  /**
   * for gui
   */
  // const controllBloomPass = (type,vlaue) =>{
  //   if(type ==='threshold'){
  //     unrealBloomPass.threshold = bloomParam.threshold
  //   }else if(type ==='strength'){
  //     unrealBloomPass.strength  = bloomParam.strength
  //   }else if(type === 'radius'){
  //     unrealBloomPass.radius = bloomParam.radius
  //   }
  // }//controlBloomPass end


  //for check
  // scene.add(new THREE.Mesh(
  //   new THREE.BoxGeometry(0.5,0.5,0.5),
  //   new THREE.MeshBasicMaterial({
  //     color: 'red'
  //   })
  // ))

  /**
   *  lights
   */
  // const directionalLight =  new THREE.AmbientLight('0#235112',10,100)
  const directionalLight =  new THREE.DirectionalLight('0#000000',1,100)
  directionalLight.position.set(1,1,1)
  scene.add(directionalLight);
  
  const clone = directionalLight.clone()
  clone.layers.set(1)
  clone.intensity = 2
  scene.add(clone);
  
  
  /** library */
  // const gui = new GUI()
  // gui.add(bloomParam, 'threshold', 0.0, 1.0).onChange(function(value) {
  //   bloomParam.threshold = value
  //   controllBloomPass('threshold',value)
  // })
  // gui.add(bloomParam, 'strength', 0.0, 3.0).onChange(function(value) {
  //   bloomParam.strength = value
  //   controllBloomPass('strength',value)
  // })
  // gui.add(bloomParam, 'radius', 0.0, 1.0).onChange(function(value) {
  //   bloomParam.radius = value
  //   controllBloomPass('radius',value)
  // })

  /** Camera */
  // camera.position.set(0, 0, 8);
  camera.position.set(0, 0, 5);

  /** texture */
  const loader = new THREE.TextureLoader();
  const testTexture = loader.load();

  /** Controls */
  const orbitControls = () => {
    const controls = new OrbitControls(camera, renderer.domElement);
    // controls.enabled = false;
    return controls;
  }// orbitControls end
  
  /**
   * raycaster
   */
  const raycaster = new THREE.Raycaster();

  /**
   * createBox
   */
  const createBox = () => {
    //** line */
    const BoxGeometry = new THREE.BoxGeometry( boxSizeX, boxSizeY, boxSizeZ );
    const edgesGeometry  = new THREE.EdgesGeometry(BoxGeometry)
    const line = new THREE.LineSegments(edgesGeometry , new THREE.LineBasicMaterial({
      color: '0xffffff'
    }));
    
    line.layers.set(0)
    //x축

    for(let i = 0; i <boxXCount ; i++) {
      //y축
      for(let j = 0; j <boxYCount ; j++) {
        //z축
        for(let k = 0; k <boxZCount ; k++) {
          const cloneLine = line.clone();
          // let x = (i * boxSizeX + i * boxSpace) - xSize/2
          // let y = (j * boxSizeY + j * boxSpace) - ySize/2
          // let z = (k * boxSizeZ + k * boxSpace) - zSize/2

          // let x = (i * boxSizeX + i *boxSpace) - boxXCount*boxSizeX/2 + boxSpace/2
          // let y = (j * boxSizeY + j *boxSpace) - boxYCount*boxSizeY/2 + boxSpace/2
          // let z = (k * boxSizeY + k *boxSpace) - boxZCount*boxSizeZ/2 + boxSpace/2

          // cloneLine.position.set(x,y,z)
          cloneLine.layers.set(0)
          boxGroup.add(cloneLine)
          boxsArray.push(cloneLine);
        }
      }
    }//boxs creating end


     scene.add(boxGroup)
  }//create end

  /**
   * create texture matrial
   */
  const createTextureBox = ()=>{
    let geomatery, material
    let parma = {color : 'white', map : testTexture}
    for(let i = 0; i < textureBoxParam.xCount; i++){
      for(let j = 0; j < textureBoxParam.yCount; j++){
         geomatery = new THREE.BoxGeometry(boxSizeX,boxSizeY,boxSizeZ);
         let uvs = geomatery.attributes.uv.array;
         for(let k = 0; k < uvs.length; k +=2 ){
            uvs[k] = (uvs[k] + i) * textureBoxParam.unitx
            uvs[k + 1] = (uvs[k + 1] + j) * textureBoxParam.unity
         }//uvsmaaping end
         material = new THREE.MeshPhongMaterial(parma)
         const mesh = new THREE.Mesh(geomatery,material);
         let x = (i * textureBoxParam.boxSizeX + i * boxSpace) - textureBoxParam.xCount*textureBoxParam.boxSizeX/2 + boxSpace/2
         let y = (j * textureBoxParam.boxSizeY + j * boxSpace) - textureBoxParam.yCount*textureBoxParam.boxSizeY/2 + boxSpace/2
         let z = (4 * textureBoxParam.boxSizeZ + 4 * boxSpace) - textureBoxParam.yCount*textureBoxParam.boxSizeZ/2 + boxSpace/2

         mesh.position.set(x,y,z)
        //  mesh.rotation.x = (Math.PI / 180) * 80

         mesh.layers.set(0)
         textureBoxGroup.add(mesh)
        }//inner for
      }//end for
      
      scene.add(textureBoxGroup)
  }//createTexurBox end

  /** create */
  const create = () => {
    createBox()
    // createTextureBox()
  };// create end

  /*
   * resize 
   */
  const resize = () => {
    canvasSize.width = window.innerWidth;
    canvasSize.height = window.innerHeight;

    camera.aspect = canvasSize.width / canvasSize.height;
    camera.updateProjectionMatrix();

    renderer.setSize(canvasSize.width, canvasSize.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    effectComposer.setSize(canvasSize.width, canvasSize.height);
    
    //change range
    chageRanges()
  };// resize end

  /**
   * event add 
   */
  const addEvent = () => {
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove',(e) => {
      getMousePoint(e)
      getRaycaster()
      caemraControll()
    })
    //nav animation range point
    getNavEvent()
  };// addEvent end
  
  /*
   * click Nav
   */
  const clickNavAnimation = (e) => { 
    if(isBoxAnimating) return 
    isBoxAnimating = true;
    isCameraWork = false;
    entered = true;

    // toggleList()

    gsap.to(camera.rotation, {
      x:0,
      y:0,
      duration:0.1,
    })
    // moveToCube()
    


    gsap.to(boxGroup.rotation, {
      x:0,
      y:0,
      duration:0.2
    })
    gsap.to(camera.position,{
      // z:8,
      duration: 2,
      delay: 0.5,
      ease: "power4.in",
      onComplete : () => { 
        isBoxAnimating = false;
        const link = e.target.dataset.link

        if(link === 'about') {
          about.intro()
        }//about end
        else if(link === 'contact'){
          // contact.test()
        }//contact end
        else if(link === 'content'){
          // content.test()
        }//content end
        else if(link === 'controll'){
          // controll.test()
        }//controll end
        history.pushState(null,null,link)
        currentPage = String(link)
      }//onComplete end
    })//camera animte end
  }//clickNavAnimation end

  /**
   * move to cube
   */
  const moveToCube = () => {
    let xCount = 0 
    let yCount = 0
    let zCount = 0
    for(let i = 0; i < boxGroup.children.length; i++){
      let xPos = (xCount * boxSizeX + xCount * boxSpace) - boxXCount*boxSizeX/2 + boxSpace/2
      let yPos = (yCount * boxSizeY + yCount * boxSpace) - boxYCount*boxSizeY/2 + boxSpace/2
      let zPos = (zCount * boxSizeZ + zCount * boxSpace) - boxZCount*boxSizeZ/2 + boxSpace/2

      gsap.to(boxGroup.children[i].position,{
        x:xPos,
        y:yPos,
        z:zPos,
        duration: 0.77,
        ease: "power3.in",
      })//gsap end
      zCount++
      if(zCount >= boxZCount){
        zCount = 0
        yCount++
        if(yCount >= boxYCount){
          yCount = 0
          xCount++
        }
      }
    } //for end
  }//moveToCube end

  /**
   * toggleList
   */
  const toggleList = () =>{
    if(isShowList){
      navAs.forEach((nav,index)=> {
        gsap.to(nav,{
          y:35,
          duration : 0.25,
          opacity : 0,
        })
      })

      isShowList = false
      boxState = 0;
      entered = false;
      boxsAnimation();
      entered = true
    } else if(!isShowList) {
      navAs.forEach((nav)=> {
        gsap.to(nav,{
          y:0,
          duration : 0.25,
          opacity : 1,
        })
      })

      isShowList = true;
      entered = false;
      boxState = 1;
      boxsAnimation();
    }
    
  }//toggleList end


  /**
   *  Nav A event
   */
  const getNavEvent = () => {
    //hoverEvnet
    navWrapper.addEventListener('mouseenter',(e) => {
      navAs.forEach((navA) =>{
        navA.style.color = 'var(--textColor01in)'
      })
      boxState = 1
      boxsAnimation();
    })
    navWrapper.addEventListener('mouseleave', (e) => {
      navAs.forEach((navA) =>{
        navA.style.color = 'var(--textColor01Out)'
      })
      boxState = 0
      boxsAnimation();
    })
    navWrapper.addEventListener('mousemove', (e) => {
      if(e.target == navWrapper){
        boxState = 1
        boxsAnimation();
      }
    })
    navAs.forEach((a,index)=> {
      a.addEventListener('mouseenter',(e)=>{
        if(e.target === a){
          e.target.style.color = 'var(--textColor01hover)'
        }
        boxState = index + 2
        boxsAnimation();
      })
      a.addEventListener('mouseleave',(e)=>{
        if(e.target === a){
          e.target.style.color = 'var(--textColor01in)'
        }
        boxState = 1
        isEntered = false
      })
    })//hoverEvent end

    navAs.forEach((navA)=> {
      navA.addEventListener('click',(e) => {clickNavAnimation(e)})
    })//clickEvent end
    navTitleP.addEventListener('mouseenter',() => {
      boxState = 1
      boxsAnimation();
    })
    navTitleP.addEventListener('mouseleave',() => {
      boxState = 0
      boxsAnimation();
    })
    navTitle.addEventListener('click',toggleList)
    navTitle.addEventListener('mouseenter',(e)=>{
        e.target.style.color = 'var(--textColor01hover)'
       
    })
    navTitle.addEventListener('mouseleave',(e)=>{
        e.target.style.color = 'var(--textColorTitle)'
    })

  }//getNavEvent end

  /*
   * Change range
   */
  const chageRanges = () => {
    //navWrapper range Change
    let navWrapperWidth = 0

    for(let i = 0; i < navAs.length; i++){
      let currentWidth =  navAs[i].offsetWidth
      if(navWrapperWidth < currentWidth) navWrapperWidth = currentWidth
    }
    navWrapper.style.width = navWrapperWidth + 20 +'px'
  }

  /**
   *  getMousePoint - get mouse x,y points
  */
  const getMousePoint = (e) => {
    mouse.x = e.clientX / canvasSize.width * 2 - 1
    mouse.y = - (e.clientY / canvasSize.height) * 2 + 1
  }// getMousePoint end

  /**
   * boxsAnimation for hover Animations
   */
  const boxsAnimation = () => {
    if(entered) return
    if(boxState === 0){
      if(isEntered == true){
        moveToCube()
        isEntered =false
      }//isEntered end
      isCameraWork = true
    }//boxState 0 end
    else if (boxState === 1){
      if(isEntered == false){
        isBoxAnimating = true;
        boxGroup.rotation.x = 0
        boxGroup.rotation.y = 0 
        for(let i = 0; i < boxGroup.children.length; i++){

        let x = (Math.random() * xSize - xSize/2)  * (Math.random()*6.4) 
        let y = (Math.random() * xSize - ySize/2) * (Math.random()*6.4)
        let z = Math.random() * 8  - 4
        gsap.to(boxGroup.children[i].position,{
          x:x,
          y:y,
          z:z,
          duration: 0.64,
          ease: "elastic.out(0.2,0.1)",
          onComplete : ()=>{
          isBoxAnimating = false;  
          }
        })
        isEntered = true
        }
      }
      isCameraWork = true
    }//boxState 1 end 
    else if (boxState === 2 || boxState === 3 || boxState === 4 || boxState === 5){
      let texts = []
      let textsLength = 0
      let moveCount = 0
      let textsSpace = 1
      texts = boxPosition.moveText(boxState)
      textsLength = texts.length
      let textsHeight =  (7 * boxSizeY) + (6 * textsSpace)
      let textsWidth = textsLength * ((5 * boxSizeX) + (4 * boxSpace)) + ((textsLength-1) * textsSpace)

      texts.forEach((text,index) => {
        for(let i = 0; i < text.length; i++){
          let x = (text[i][0]*boxSizeX) + (text[i][0]*boxSpace) + (index * xSize) +(index*textsSpace) - (textsWidth/2)
          let y = -((text[i][1]*boxSizeY) + (text[i][1] * boxSpace) - (textsHeight / 4))
          gsap.to(boxGroup.children[moveCount].position,{
            x : x,
            y: y,
            z: -7,
            duration: 0.77,
            ease: "power3.in",
            })
          moveCount++;
        }//for end 
      })//foreach end

      // left boxs
      for(let i = moveCount ; i < boxTotals; i++){
        let y = Math.random()
        y < 0.5 ? y= -4 : y = 4
        gsap.to(boxGroup.children[i].position,{
          x :  ((i - moveCount) - ((boxTotals-moveCount)/2)) + 0.5,
          y: y,
          z : Math.random() * 13 - 12,
          duration: 0.78,
          ease: "power3.in",
          })
          // moveCount++;
      }//for end
      gsap.to(boxGroup.rotation, {
        x: 0,
        y: 0,
        duration: 0.22
      })//gsap end
      boxGroup.rotation.x = 0
      boxGroup.rotation.y = 0
      isCameraWork = false
    }//boxState 2,3,4,5 end
  } //boxsAnimation end

  /**
   *  caemraControll 
   */
  const caemraControll = () => {
    if(!isCameraWork) return
    if(entered){
      gsap.to(boxGroup.rotation, {
        x:0,
        y:0,
        duration:0.3
      })
      return
    } 
    boxGroup.rotation.x = -mouse.y/7
    boxGroup.rotation.y = mouse.x/7   
  }


  /**
   *  getRaycaster  
  */
 const getRaycaster = () =>{
    const intersects = raycaster.intersectObjects(scene.children)
    raycaster.setFromCamera(mouse, camera)
 }//getRaycaster end

 /**
  * Draw 
  */
  const draw = ( orbitControl) => {
    renderer.clear();
    
    //0 layer set
    camera.layers.set(0); // effectComposer
    effectComposer.render()
    
    //1 layer set
    renderer.clearDepth()
    camera.layers.set(1); // normal
    renderer.render(scene, camera);

    orbitControl.update(1);
    
    
    //Rerander
    requestAnimationFrame(() => {
      draw(orbitControl);
    });
  };//draw end

  const checklink = () =>   {
    if(localStorage.getItem('prevlink')){
      currentPage = localStorage.getItem('prevlink')
      
    }
  }

  const initialize = () => {
    checklink();
    addPostEffects()
    create();
    const orbitControl = orbitControls()
    addEvent();
    resize();
    draw(orbitControl);
  }; //intialize end

  initialize()
}