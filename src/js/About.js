export default class About {
    constructor(gsap,gui){
        this.gsap = gsap
        this.tl = this.gsap.timeline();
        this.gui = gui
        this.group01 = [] //첫번째라인 그룹
        this.group02 = [] //두번째 그룹
        this.group03 = [] //두번째 그룹
        
        this.aboutGroup01
        this.aboutGroup03
        this.scene
        this.camera
        this.currentGroup
        
        
        this.trigger = document.querySelector('.animationtrigger')
        this.about = document.querySelector('.about');
        this.aboutSecondWrapper = document.querySelector('.aboutSecondWrapper');
        this.secondSubjects = document.querySelectorAll(".aboutSecondSubject")
        this.aboutThirdContentTittle = document.querySelector('.aboutThirdContentTittle');
    }
   
    createMesh(aboutGroup01,aboutGroup03,scene,camera,currentGrop){
        this.aboutGroup01 = aboutGroup01
        this.aboutGroup03 = aboutGroup03
        this.scene = scene
        this.camera = camera
        this.currentGroup = currentGrop
        this.tl.to(this.trigger,{
            opacity: 0,
            // duration : 5.3,
        }).to(this.trigger,{
            opacity: 1,
            onComplte:()=>{
                this.createBox1()
                this.createBox3()
                this.scrollTrigger()
            }
        })
    }//createMesh
    createBox1(){
        for(let i = 0; i < this.aboutGroup01.box1Count; i++){
            let clone = this.aboutGroup01.box1.clone()
            
            this.group01.push(clone)
            this.currentGroup.add(clone)
        }
        this.scene.add(this.currentGroup)            
        this.guiCheck()
    }//createBox1

    createBox3(){
        let count = 0
        for(let i = 0; i < this.aboutGroup03.box2xGrid; i++){
            for(let j = 0; j < this.aboutGroup03.box2yGrid; j++){
                let mesh = this.aboutGroup03.box2[count]
                let x = (i * this.aboutGroup03.xSize) - ((this.aboutGroup03.box2xGrid * this.aboutGroup03.xSize)/2) + 2.3
                let y =  -((j*this.aboutGroup03.ySize) - ((this.aboutGroup03.box2yGrid * this.aboutGroup03.ySize)/2)) - 0.3

                mesh.position.set(x,y,0)
                // mesh.updateMatrix()
                // mesh.matrixWorldAutoUpdate = true
                // mesh.matrixWorldNeedsUpdate = true
                // mesh.material.needsUpdate = true;
                this.group03.push(mesh)
                this.currentGroup.add(mesh)
                count++
            }
        }


        this.gsap.to(this.group03[14].material,{
                // opacity:0,
                duration: 0.5
        })

        
        this.guiCheck()
    }//createBox1


    scrollTrigger(){
        this.group01Trigger()
        this.group02Trigger()
    }//trigger insert
    
    group01Trigger(){

    }//01trigger

    group02Trigger(){
        this.secondSubjects.forEach((subject,index) => {
            let start = (index * 8) + "%"
            this.gsap.to(subject,{
              scrollTrigger: {
                trigger: this.aboutSecondWrapper,//객체기준범위
                start: `${start} 40%`,
                end: "+=0%",
                markers: true,//개발가이드선
              },
              opacity:1,
              duration:1,
            })
          })
          this.group03.forEach((mesh,index) => {
            this.gsap(this.group03[num].material,{
                scrollTrigger : {
                    trigger : this.aboutSecondWrapper,
                    start: '0 80%',
                    end: '+=0%',
                },
                opacity:1,
                duration:1
            })
          })

    }//02trigger

    guiCheck() {

    }
}