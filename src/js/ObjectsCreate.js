
import Loading from "./Loading.js";
export default class ObjectsCreate {
    /**
     * 
     * @param {*} gsap 
     * @param {Object} scenc
     * @param {object,number,number,number,number,number,number,number,number} meshs meshsBox State
     */
    constructor(gsap,scene) {
        this.gsap = gsap;
        this.scene = scene;
        this.meshs
        this.about
        this.content
        this.controll
        this.contact
        this.currentMesh = []

        this.loading = new Loading(this.gsap);
        this.camera 
    }
    objectCreate(currentPage,meshs,loadingMesh,camera){
        this.currentPage = currentPage;
        switch(this.currentPage){
            case 'index':
                this.loading.loading(this.currentPage,meshs,loadingMesh,camera);
            break;
            case 'content':
            break;
            case 'contact':
            break;
            case 'controll':
            break;
            case 'about':
            break;
        }
        this.meshs = meshs;
        this.loadingMesh = loadingMesh;
        this.camera = camera;
    }
    createIndex(){
        let total = this.meshs.xNum + this.meshs.yNum + this.meshs.zNum
        for(let i = 0; i < this.meshs.xNum ; i++) {
            //y축
            for(let j = 0; j < this.meshs.yNum ; j++) {
              //z축
              for(let k = 0; k < this.meshs.zNum ; k++) {
                var cloneLine = this.meshs.mesh.clone()
                cloneLine.layers.set(0)
                this.scene.add(cloneLine)
                this.currentMesh.push(cloneLine);
              }
            }
          }//boxs creating end

        return this.currentMesh;
    }
}