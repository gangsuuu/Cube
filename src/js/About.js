export default class About {
    constructor(gsap,boxsArray){
        this.about = document.querySelector('.about');
        this.gsap = gsap
        this.boxsArray = boxsArray;
        this.tl = this.gsap.timeline();
    }
    /**
     * intro
     */
    intro(){
        this.boxsArray.forEach((box,index) => {
            this.gsap.to(box.position,{
                x: 0,
                y: 0,
                z: 0,
                duration:1.63,
                onComplte :() =>{
                    if(index == this.boxsArray.length -1){
                        this.gsap.to(this.about,{
                            display: 'block',
                            deley : 5,
                            onComplte : ()=>{
                            }
                        });//about gsap
                    }//if end
                }//onComplte
            })//box gsap


        });//foreach end
    }//intro end
}