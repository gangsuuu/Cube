export default class BoxPosition{
    constructor(){
    this.Text = {
        A : [[1,0],[2,0],[3,0],[4,0],[0,1],[4,1],[0,2],[4,2],[0,3],[4,3],[0,4],[1,4],[2,4],[3,4],[4,4],[0,5],[4,5],[0,6],[4,6]],
        B : [[0,0],[1,0],[2,0],[3,0],[0,1],[4,1],[0,2],[4,2],[0,3],[1,3],[2,3],[3,3],[0,4],[4,4],[0,5],[4,5],[0,6],[1,6],[2,6],[3,6]],
        C : [[1,0],[2,0],[3,0],[0,1],[4,1],[0,2],[0,3],[0,4],[0,5],[4,5],[1,6],[2,6],[3,6]],
        E : [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[0,1],[0,2],[0,3],[1,3],[2,3],[3,3],[0,4],[0,5],[0,6],[1,6],[2,6],[3,6],[4,6]],
        L : [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,6],[2,6],[3,6],[4,6]],
        N : [[0,0],[4,0],[0,1],[4,1],[0,2],[1,2],[4,2],[0,3],[2,3],[4,3],[0,4],[3,4],[4,4],[0,5],[4,5],[0,6],[4,6]],
        O : [[1,0],[2,0],[3,0],[0,1],[4,1],[0,2],[4,2],[0,3],[4,3],[0,4],[4,4],[0,5],[4,5],[1,6],[2,6],[3,6]],
        R : [[0,0],[1,0],[2,0],[3,0],[0,1],[4,1],[0,2],[4,2],[0,3],[1,3],[2,3],[3,3],[0,4],[4,4],[0,5],[4,5],[0,6],[4,6]],
        T : [[0,0],[1,0],[2,0],[3,0],[4,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6]],
        U : [[0,0],[4,0],[0,1],[4,1],[0,2],[4,2],[0,3],[4,3],[0,4],[4,4],[0,5],[4,5],[1,6],[2,6],[3,6]]
    }

    }
    moveText(boxState){
        this.text = []
        switch(boxState){
            case 2:
                this.a = this.moveA();
                this.b = this.moveB();
                this.o = this.moveO();
                this.u = this.moveU();
                this.t = this.moveT();

                this.text.push(this.a,this.b,this.o,this.u,this.t)
            break;
            case 3:
                this.c = this.moveC()
                this.o = this.moveO()
                this.n = this.moveN()
                this.t = this.moveT()
                this.e = this.moveE()
                this.n = this.moveN()
                this.t = this.moveT()
                this.text.push(this.c,this.o,this.n,this.t,this.e,this.n,this.t)
            break;
            case 4:
                this.c = this.moveC()
                this.o = this.moveO()
                this.n = this.moveN()
                this.t = this.moveT()
                this.r = this.moveR()
                this.o = this.moveO()
                this.l = this.moveL()
                this.l = this.moveL()
                this.text.push(this.c,this.o,this.n,this.t,this.r,this.o,this.l,this.l)
            break;
            case 5:
               this.c = this.moveC()
               this.o = this.moveO()
               this.n = this.moveN()
               this.t = this.moveT()
               this.a = this.moveA()
               this.c = this.moveC()
               this.t = this.moveT()
               this.text.push(this.c,this.o,this.n,this.t,this.a,this.c,this.t)
            break;

        }//switch end
        return this.text
    }
    moveA(){

        return this.Text.A
    }
    moveB(){
        return this.Text.B
    }
    moveC(){
        return this.Text.C
    }
    moveE(){
        return this.Text.E
    }
    moveL(){
        return this.Text.L
    }
    moveN(){
        return this.Text.N
    }
    moveO(){
        return this.Text.O
    }
    moveR(){
        return this.Text.R
    }
    moveT(){
        return this.Text.T
    }
    moveU(){
        return this.Text.U
    }
}
