import BoxPosition from "./BoxPosition.js"
import Loading from "./Loading.js"
export default class IndexPage {
    constructor(gsap){
        this.boxPosition = new BoxPosition()
        this.loading = new Loading(gsap)
        this.gsap = gsap
        this.tl = this.gsap.timeline()

        this.scene
        this.mesh
        this.camera
        this.total

        this.meshs = []
        this.navAs = document.querySelectorAll('.navWrapper a')
        this.navWrapper = document.querySelector('.navWrapper')
        this.trigger = document.querySelector('.animationtrigger')

        this.cubeXSize
        this.cubeYSize
        this.cubeZSize
        this.creatType

        this.isAnimaiting = true;
        this.isHold = false
    }
    /**
     * intro
     */
    createMesh(mesh,scene,camera,group){
        this.mesh = mesh
        this.scene = scene
        this.camera = camera
        this.group = group
        this.total = this.mesh.xNum * this.mesh.yNum * this.mesh.zNum
        this.cubeXSize = (this.mesh.xNum * this.mesh.xSize) + ((this.mesh.xNum-1) * this.mesh.space)/2
        this.cubeYSize = (this.mesh.yNum * this.mesh.ySize) + ((this.mesh.yNum-1) * this.mesh.space)/2
        this.cubeZSize = (this.mesh.zNum * this.mesh.zSize) + ((this.mesh.zNum-1) * this.mesh.space)/2

        for(let i = 0; i < this.mesh.xNum ; i++) {
            //y축
            for(let j = 0; j < this.mesh.yNum ; j++) {
              //z축
              for(let k = 0; k < this.mesh.zNum ; k++) {
                var cloneLine = this.mesh.mesh.clone()
                cloneLine.layers.set(0)
                cloneLine.updateMatrix()
                cloneLine.matrixWorldAutoUpdate = true
                cloneLine.matrixWorldNeedsUpdate = true

                this.scene.add(cloneLine)
                this.group.add(cloneLine)
                this.meshs.push(cloneLine);

                cloneLine.scale.set(0,0,0)
                this.gsap.to(cloneLine.scale,{
                    x:1,
                    y:1,
                    z:1,
                    duration: 0.5,
                    delay:5.15 + (0.004*i*j*k),
                })
              }
            }
          }//boxs creating end
          this.tl.to(this.trigger,{
            opacity:0,
            duration:5.9,
          }).to(this.trigger,{
            duration:.5,
            onComplte:()=> {
                this.moveToSquare()
                this.setMouseAera()
            }
          }).to(this.trigger,{
            opacity:1,
            duration:1.1,
            onComplte:()=> {
            }
          }).to(this.trigger,{
            opacity:0,
            onComplte:()=> {
                this.isAnimaiting = false;
            }
          })
          scene.add(this.group)
          return this.meshs

    }//intro end

    moveToSquare(type){
        let duration
        if(type != 0){
            type = "back.inOut(4)",
            duration = 1.1
        }else{
            type = "power3.in"
            duration = 0.77
        }
        let xCount = 0
        let yCount = 0
        let zCount = 0
        for(let i = 0; i < this.total; i++){
            let xPos = (xCount * this.mesh.xSize + xCount * this.mesh.space) - this.mesh.xNum * this.mesh.xSize/2 + this.mesh.space/2
            let yPos = (yCount * this.mesh.ySize + yCount * this.mesh.space) - this.mesh.yNum * this.mesh.ySize/2 + this.mesh.space/2
            let zPos = (zCount * this.mesh.zSize + zCount * this.mesh.space) - this.mesh.zNum * this.mesh.zSize/2 + this.mesh.space/2
            this.gsap.to(this.meshs[i].position,{
                x:xPos,
                y:yPos,
                z:zPos,
                duration: duration,
                ease: type,
            })//gsap end
            zCount++
            if(zCount >= this.mesh.zNum){
                zCount = 0
                yCount++
                if(yCount >= this.mesh.yNum){
                yCount = 0
                xCount++
                }
            }
        } //for end
        
    }//moveToSquare
    
    hoverAnimation(number){
        if(this.isAnimaiting) return
        if(number === 0){
            this.moveToSquare(number);
            this.isHold = false;
        }
        else if(number === 1){
            for(let i = 0; i < this.meshs.length; i++){
                let x = (Math.random() * this.cubeXSize - this.cubeXSize/2)  * (Math.random()*6.4) 
                let y = (Math.random() * this.cubeYSize - this.cubeYSize/2) * (Math.random()*6.4)
                let z = Math.random() * 8  - 4
                this.gsap.to(this.meshs[i].position,{
                    x:x,
                    y:y,
                    z:z,
                    duration: 0.64,
                    ease: "elastic.out(0.2,0.1)",
                })
            }
            this.isHold = false;
        }
        else if(number === 2 || number === 3 || number === 4 || number === 5){
            let texts = []
            let textsLength = 0
            let moveCount = 0
            let textsSpace = 1
            texts = this.boxPosition.moveText(number)
            textsLength = texts.length
            let textsHeight = (7 * this.mesh.ySize) + (6 * this.mesh.space)
            // let textsWidth = textsLength * ((5 * this.mesh.xSize) + (4 * this.mesh.space)) + ((textsLength - 1) * textsSpace)
            let textWidth = (5 * this.mesh.xSize) + (4 * this.mesh.space)

            texts.forEach((text,index)=>{
                for(let i = 0; i < text.length; i++){
                    let x = (text[i][0] * this.mesh.xSize) + (text[i][0] * this.mesh.space) + (index *textWidth) + (index * textsSpace) - ((textsLength*textWidth + ((textsLength - 1) * textsSpace))/2)
                    let y = (text[i][1] * this.mesh.ySize) + (text[i][1] * this.mesh.space) - (textsHeight/2)
                    this.gsap.to(this.meshs[moveCount].position,{
                        x: x,
                        y: -y,
                        z: -7,
                        duration: 0.77,
                        ease: "power4.out"
                    })
                    moveCount++
                }
            })//forEach end
            
            for(let i =moveCount; i < this.total; i++){
                let y = Math.random()
                y < 0.5 ? y= -4 : y = 4
                this.gsap.to(this.meshs[i].position,{
                    x :  ((i - moveCount) - ((this.total-moveCount)/2)) + 0.5,
                    y: y,
                    z : Math.random() * 13 - 12,
                    duration: 0.78,
                    ease: "power4.out",
                })
            }//for end
            this.isHold = true
            this.boxRotation()
        }
    }//hoverAnimation

    pageMove(toggle){
        toggle();
        this.isHold = true;
        this.isAnimaiting = true;
        this.boxRotation();

        for(let i = 0; i < this.meshs.length; i++){
            this.gsap.to(this.meshs[i].position,{
                x:0,
                y:0,
                z:0,
                duration: 1.2,
                ease: "back.in(3)",
            })
        }
        this.tl.to(this.trigger,{
            opacity: 1,
            duration:1.2,
        }).to(this.trigger,{
            opacity:0,
            onComplte:()=>{
                for(let i = 0; i < this.meshs.length; i++){
                   this.scene.remove(this.group)
                }
                console.log(this.scene)
            }
        })
    }//pageMove

    boxRotation(x,y){
        if(this.isHold){
            this.gsap.to(this.group.rotation,{
                x:0,
                y:0,
                duration:0.2                
            })
            return 
        }else {
            this.group.rotation.x = -y/7
            this.group.rotation.y = x/7
        }
    }//boxRotation

    setMouseAera(){
        let navWrapperWidth = 0;
        for(let i = 0; i < this.navAs.length; i++){
            let currentWidth =  this.navAs[i].offsetWidth
            if(navWrapperWidth < currentWidth) navWrapperWidth = currentWidth
        }
        this.navWrapper.style.width = navWrapperWidth + 20 +'px'
    }//setMouseAera
}