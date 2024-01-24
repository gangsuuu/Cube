import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import GUI from 'lil-gui';

import About  from './About.js';
import Contact from './Contact.js';
import Content from './Content.js';
import Controll from './Controll.js';
import Loading from './Loading.js';
import BoxPosition from './BoxPosition.js';
import IndexPage from './IndexPage.js';


export default function () {
  const body = document.querySelector('body') 
  const navAs = document.querySelectorAll('.navWrapper a')
  const navWrapper = document.querySelector('.navWrapper')
  const navTitle = document.querySelector('.navTitle span')
  const navTitleP = document.querySelector('.navTitle')

  const aboutSeondWrapper = document.querySelector('.aboutSeondWrapper');
  const texts = aboutSeondWrapper.querySelectorAll(".aboutSecondSubject")

  gsap.registerPlugin(ScrollTrigger) 

  const boxsArray = []
  const boxPosition = new BoxPosition();


  let loading,about, contact,content, controll, indexpage




  /**
   * 변수
  */
  let currentGrop = new THREE.Group()
  let mouse = new THREE.Vector2();
  let boxStates = ['normal','entered','about','content','controll','contact']
  let currentPages = ['about','content','controll','contact']
  let currentPage = 'about';
  
  let indexNavPoint = 0;

  let isEntered = false;
  let isCameraWork = true;
  let isShowList = true;

  
  let entered = false;

  let boxState = 0
  let loadingMesh
  let currentMeshs = []
  

  /* boxState */
  let indexXnum = 6 //한 줄의 박스 갯수
  let indexYnum = 6 //한 줄의 박스 갯수
  let indexZnum = 6 //한 줄의 박스 갯수
  let boxTotals = indexXnum * indexYnum * indexZnum // 박스 전체 갯수
  let indexXsize = 0.5 //박스 x 길이
  let indexYsize = 0.5 //박스 y 길이
  let indexZsize = 0.5 //박스 z 길이
  let indexSpace = 0.05 // 박스 사이 간격
  let xSize = indexXnum * indexXsize + (indexXnum - 1) * indexSpace // 박스 간격 포함한 전체 X사이즈 
  let ySize = indexZnum * indexYsize + (indexZnum - 1) * indexSpace // 박스 간격 포함한 전체 Z사이즈 
  let zSize = indexYnum * indexZsize + (indexYnum - 1) * indexSpace // 박스 간격 포함한 전체 Y사이즈 

  let aboutBoxXSize = 0.5
  let aboutBoxYSize = 0.5
  let aboutBoxZSize = 0.5

    /** param */
    const bloomParam = {
      // threshold : 0.23,
      threshold : 0.55,
      // strength : 0.4,
      strength : 0.1,
      // radius : 1,
      radius : 0,
      exposure: 1
    }
    const indexBoxState = {
      mesh : new THREE.LineSegments(
        new THREE.EdgesGeometry(
          new THREE.BoxGeometry( indexXsize, indexYsize, indexZsize )
        ),
        new THREE.LineBasicMaterial({color: '0xffffff',transparent: true, opacity: 1,})
      ),
      xNum : indexXnum,
      yNum : indexYnum,
      zNum : indexZnum,
      xSize : indexXsize,
      ySize : indexYsize,
      zSize : indexZsize,
      space : indexSpace
    } // indexBoxObject state

    const aboutMouseState = {
    }

    const aboutGroup01 = {
      box1 : new THREE.LineSegments(
        new THREE.EdgesGeometry(
          new THREE.BoxGeometry( aboutBoxXSize, aboutBoxYSize, aboutBoxZSize )
        ),
        new THREE.LineBasicMaterial({color: '0xffffff',transparent: true, opacity: 1,})
      ),
      box2 : new THREE.Mesh(
        new THREE.BoxGeometry( aboutBoxXSize, aboutBoxYSize, aboutBoxZSize ),
        new THREE.LineBasicMaterial({color: '0xffffff',transparent:true})
      ),
      xSize : aboutBoxXSize,
      ySize : aboutBoxYSize,
      zSize : aboutBoxZSize,
      box1Count : 5,
      box2Count : 5,
    }

    const aboutGroup03 = {
      box1 : new THREE.LineSegments(
        new THREE.EdgesGeometry(
          new THREE.BoxGeometry( aboutBoxXSize, aboutBoxYSize, aboutBoxZSize )
        ),
        new THREE.LineBasicMaterial({color: '0xffffff',transparent: true, opacity: 1,})
      ),
      box2 : [],
      xSize : aboutBoxXSize,
      ySize : aboutBoxYSize,
      zSize : aboutBoxZSize,
      box2xGrid : 17,
      box2yGrid : 10,
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

  const gui = new GUI()
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
   *  lights
   */
  const directionalLight =  new THREE.DirectionalLight('0#000000',10,100)
  directionalLight.position.set(1,1,1)
  scene.add(directionalLight);
  
  const clone = directionalLight.clone()
  clone.layers.set(1)
  clone.intensity = 2
  scene.add(clone);
  

  /** Camera */
  // camera.position.set(0, 0, 8);
  camera.position.set(0, 0, 5);

  /** texture */
  const loader = new THREE.TextureLoader();
  const testTexture = loader.load();

  
  /**
   * raycaster
   */
  const raycaster = new THREE.Raycaster();


  /** test----------------------------------------------------- */

  texts.forEach((text,index) => {
    let start = (index * 5 +32) + "%"
    gsap.to(text,{
      scrollTrigger: {
        trigger: aboutSeondWrapper,//객체기준범위
        start: `${start} 0%`,
        end: "+=0%",
        markers: true,//개발가이드선
        scrub: 1,
      },
      opacity:1,
      duration:1,
      top: (index * 20 +10) +"%",
    })
  })
 /** test----------------------------------------------------- */
 
  /** create */
  const createMesh = () => {
    switch(currentPage) {
      case 'index':
        currentMeshs =  indexpage.createMesh(indexBoxState,scene,camera,currentGrop)
        for(let i = 0; i < currentMeshs.length; i++) {
          currentGrop.add(currentMeshs[i])
        }
        break;//index end
      case 'about':
        let gorup3Count = aboutGroup03.box2xGrid * aboutGroup03.box2yGrid;
        for(let i = 0; i < gorup3Count; i++) {
          let mesh = new THREE.Mesh(
            new THREE.BoxGeometry( aboutBoxXSize, aboutBoxYSize, aboutBoxZSize ),
            new THREE.MeshBasicMaterial({color: 'white', transparent :true, opacity: 1 })

            )
            aboutGroup03.box2.push(mesh)
        }
        about.createMesh(aboutGroup01,aboutGroup03,scene,camera,currentGrop)
        break;//about end
      case 'contact':

        break;//contact end
      case 'content':
        break;//content end
      case 'controll':
        break;//controll end
    }
    
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
    indexpage.setMouseAera()

    //fontsize
    const fontPer =  window.innerWidth / 1980
    body.style.fontSize = `${fontPer}rem`
  };// resize end

  /**
   * event add 
   */
  const addEvent = () => {
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove',(e) => {
      getMousePoint(e)
      getRaycaster() 

      switch(currentPage){
        case 'index':
          indexpage.boxRotation(mouse.x,mouse.y)
        break;

      }    //switch end
    })

    //nav animation range point
    getNavEvent()
  };// addEvent end
  

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
    } else if(!isShowList) {
      navAs.forEach((nav)=> {
        gsap.to(nav,{
          y:0,
          duration : 0.25,
          opacity : 1,
        })
      })
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
      indexNavPoint = 1
      indexpage.hoverAnimation(indexNavPoint);
    })
    navWrapper.addEventListener('mouseleave', (e) => {
      navAs.forEach((navA) =>{
        navA.style.color = 'var(--textColor01Out)'
      })
      indexNavPoint = 0
      indexpage.hoverAnimation(indexNavPoint);
    })
    navWrapper.addEventListener('mouseenter', (e) => {
      if(e.target == navWrapper){
        indexNavPoint = 1
        indexpage.hoverAnimation(indexNavPoint);
      }
    })
    navAs.forEach((a,index)=> {
      a.addEventListener('mouseenter',(e)=>{
        if(e.target === a){
          e.target.style.color = 'var(--textColor01hover)'
        }
        indexNavPoint = index + 2
        indexpage.hoverAnimation(indexNavPoint);
      })
      a.addEventListener('mouseleave',(e)=>{
        if(e.target === a){
          e.target.style.color = 'var(--textColor01in)'
        }
        indexNavPoint = 1
        indexpage.hoverAnimation(indexNavPoint);
        isEntered = false
      })
    })//hoverEvent end

    navAs.forEach((navA)=> {
      navA.addEventListener('click',(e) => {
        indexpage.pageMove(toggleList);
        currentPage = loading.outro(e, currentPage);
      })
    })//clickEvent end
    navTitleP.addEventListener('mouseenter',() => {
      indexNavPoint = 1
      indexpage.hoverAnimation(indexNavPoint);
    })
    navTitleP.addEventListener('mouseleave',() => {
      indexNavPoint = 0
      indexpage.hoverAnimation(indexNavPoint);
    })
    navTitle.addEventListener('click',toggleList)
    navTitle.addEventListener('mouseenter',(e)=>{
        e.target.style.color = 'var(--textColor01hover)'
       
    })
    navTitle.addEventListener('mouseleave',(e)=>{
        e.target.style.color = 'var(--textColorTitle)'
    })

  }//getNavEvent end


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
 }//getRaycaster end

 /**
  * Draw 
  */
  const draw = ( ) => {
    renderer.clear();
    
    //0 layer set
    camera.layers.set(0); // effectComposer
    effectComposer.render()
    
    //1 layer set
    renderer.clearDepth()
    camera.layers.set(1); // normal
    renderer.render(scene, camera);

    //Rerander
    requestAnimationFrame(() => {
      draw();
    });
  };//draw end

  const getJS = ()=> {
    indexpage = new IndexPage(gsap);
    about = new About(gsap,gui);
    contact = new Contact(gsap)
    content = new Content(gsap)
    controll = new Controll(gsap);
  }

  const checklink = () =>   {
    if(localStorage.getItem('prevlink')){
      currentPage = localStorage.getItem('prevlink')
      localStorage.removeItem('prevlink');
    }
  }



  const createLoadingMesh = () => {
    const box = new THREE.BoxGeometry(indexXsize,indexYsize,indexZsize);
    const edgesGeometry =  new THREE.EdgesGeometry(box);
    const loadingMesh = new THREE.LineSegments(edgesGeometry , new THREE.LineBasicMaterial({color: 'white', transparent : true,}))
    return loadingMesh
  }

  const initialize = () => {
    getJS()
    checklink();
    loadingMesh = createLoadingMesh()
    currentMeshs = createMesh();
    // loading = new Loading(gsap,currentPage,loadingMesh,camera,scene);
    // loading.loading()
    addPostEffects()
    // const orbitControl = orbitControls()
    addEvent();
    resize();
    draw();

  }; //intialize end
  initialize()
}