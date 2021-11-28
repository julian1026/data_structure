// const names=["julian","andres","diego"];
class MyArray{
    constructor(){
        this.length=0;
        this.data={};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length]=item;
        this.length++;
        return this.data;
    }
    pop(){
        const lastItem=this.data[this.length - 1];
        delete this.data[this.length - 1]
        this.length--;
        return lastItem;
    }
    delete(index){
        const item=this.data[index];
        this.shiftIndex(index)
        return item;
    }
    unShift(item){
        for(let i=this.length; i>0; i--){
            this.data[i]=this.data[i - 1];
        }
        this.data[0]=item;
        this.length++;
        return item;
    }
    shift(){
        let item=this.data[0];
        for(let i=0; i<this.length - 1; i++){
            this.data[i]=this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return item;
    }

    shiftIndex(index){
        for(let i=index; i < this.length - 1; i++){
            this.data[i]=this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const MyValores= new MyArray();

// let length=3;
// let datos=['daniel','julian','sonia','niche'];

// function eliminar(index){
//     for(let i=index; length - 1; i++){
//         datos[i]=[i + 1];
//     }
//     delete datos[length - 1];
//     length--;
// }
// eliminar(1);
// console.log(datos);

