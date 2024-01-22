export default class Loading {
    constructor(gsap,){
        this.gsap = gsap
        this.loadingMesh
        this.currentPage
        this.isLoaded = false
        this.y = 0
        this.delay = 1.5
    }
    boxRotation() {
        if(!this.isLoaded) {
            console.log(this.delay)
            this.gsap.to(this.loadingMesh.rotation,{ 
                y: this.y,
                duration: 1.5,
                delay: this.delay,
                // repeat: 1,
                onComplte: () => {
                    this.y += Math.PI
                    this.delay = 2.5
                    this.boxRotation()
                }
            })
        }
    }
    setURL() {
        history.pushState(null,null,this.currentPage);
    }
    //loading animation
    loading(currentPage,loadingMesh){
        this.currentPage = currentPage
        this.loadingMesh = loadingMesh
        this.boxRotation()
        
        this.setURL()
    }
    //intro 애니메이션
    intro(){
        //박스 
    }

    //outro 애니메이션
    outro(){

    }

}