export default class Loading {
    constructor(gsap,currentPage,loadingMesh,camera,scene){
        this.gsap = gsap
        this.tl = this.gsap.timeline()

        this.currentPage = currentPage
        
        this.camera = camera
        this.loadingMesh = loadingMesh
        this.clone
        this.loadingMesh
        this.prevPage
        this.scene = scene

        this.isLoaded = false
        this.PI = Math.PI
        this.count = 1

        this.index = document.querySelector(".index")
        this.about = document.querySelector(".about")
        // this.content = document.querySelector(".content")
        // this.contact = document.querySelector(".contact")
        // this.controll = document.querySelector(".controll")
        this.trigger = document.querySelector('.animationtrigger')
    }
    boxRotation() {
        if(!this.isLoaded) {
            this.tl.to(this.clone.rotation,{ 
                y: this.PI,
                duration: 1.2,
                delay: 0.8,
                repeat:1,
            })
            this.tl.to(this.clone.rotation,{
                x: this.PI,
                duration:1.2,
                delay:0.8,
                onComplte: ()=> {
                   this.intro()
                   this.count++
                }
            })//tl end
        }
    }//boxRotataion end
    setURL() {
        history.pushState(null,null,this.currentPage);
    }
    //loading animation
    loading(){
        this.clone = this.loadingMesh.clone()
        this.clone.material.opacity = 1

        this.scene.add(this.clone);
        this.boxRotation()
        this.setURL()
    }
    //intro 애니메이션
    intro(){
        this.tl.to(this.camera.position,{
            // z:-0.09,
            duration:1.2,
            ease: "power1.inOut",
        },"<=")
        .to(this.camera.position,{
            z:5,
            duration:0,
            onComplte : ()=> {
               this.showContent();
               this.scene.remove(this.clone);
            }
        })
        this.gsap.to(this.clone.material,{
            opacity : 0,
            duration: 0.6,
            delay: 0.6,
        })//intro animation end
        //박스 
    }//intro end

    showContent(){
        switch(this.currentPage){
            case 'index':
                this.index.style.display = 'block'
                this.index.style.opacity = 0;
                this.gsap.to(this.index,{
                    opacity: 1,
                    duration:0.7,
                    delay: 1.7,
                    ease: "power2.in",
                })
                break;//index end
            case 'about':
                this.about.style.display = 'block'
                this.about.style.opacity = 0;
                this.gsap.to(this.about,{
                    opacity: 1,
                    duration:0.5,
                })
                break;//about end
            case 'contact':

                break;//contact end
            case 'content':

                break;//content end
            case 'controll':

                break;//controll end
        }
        // this.prevPage = this.currentPage
    }//showContent

    //outro 애니메이션
    outro(e,currentPage){
        let link = e.target.dataset.link
        this.currentPage = String(link)
        currentPage
        switch(currentPage){
            case 'index':
                this.prevPage = this.index
                break;//index end
            case 'about':
                this.prevPage = this.about
                break;//about end
            case 'contact':

                break;//contact end
            case 'content':

                break;//content end
            case 'controll':
                break;//controll end
        }
        this.tl.to(this.prevPage,{
            opacity: 0,
            duration:1.2,
        })
        .to(this.trigger,{
            opacity:1,
            duration:1.2,
            onComplte: () =>{
                this.loading()
            }
        })
        return this.currentPage
    }//outro
}