

class HashTable{
    constructor(size){
        this.data=new Array(size);
    }

    hashMethod(key){
        let hash=0;
        for(let i=0; i<key.length; i++){
            hash=(hash + key.charCodeAt(i) + i) % this.data.length;
        }
        return hash;
    }
    set(key,value){
        let address=this.hashMethod(key);
        if(!this.data[address]){
            this.data[address]=[];
        }
        this.data[address].push([key,value]);
        return this.data;
    }

    get(key){
        const addres=this.hashMethod(key);
        const currentBuckets=this.data[addres];
        if(currentBuckets){
            for(let i=0; currentBuckets.length; i++){
                if(currentBuckets[i][0]===key){
                    return currentBuckets[i][1];
                }
            }
        }
        return undefined;
    }

    del(key){
        const addres=this.hashMethod(key);
        const currentBuckets=this.data[addres];

        if(currentBuckets){
            for(let i=0; currentBuckets.length; i++){
                if(currentBuckets[i][0]===key){
                    let value=currentBuckets[i];
                   for(let j=i; j<currentBuckets.length; j++){
                       this.data[addres][j]=this.data[addres][j + 1];
                   }
                   delete this.data[addres][this.data[addres].length - 1];
                   return value;
                }
            }
        }
        return undefined;
    }

    getAll(){
        let keys=[];
        let count=0;
        for(let i=0; i < this.data.length; i++){
            if(this.data[i]){
                for(let j=0; j<this.data[i].length ; j++){
                    keys[count]=this.data[i][j][0];
                    count++;
                }
            }
        }
        return keys;
    }

}


const myHashTable=new HashTable(50);



//[ [],[],[[],[],[]] ]


/*
const data=[1,2,3,4,5,6,7,8]
const max=10;
const table=[];

for(let i=0; i<data.length; i++){
    table[i]=[];
    for(let aux=0; aux<=max; aux++ ){
        table[i][aux]=data[i]*aux;
    }
}
console.log(table)

*/