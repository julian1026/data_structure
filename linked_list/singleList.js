

/*

0   1    2
1-->2-->3-->4-->5-->null

let list={
    head:{
        value:1,
        next:{
            value:2,
            next:{
                value:3,
                next:{
                    value:4,
                    next:null
                }
            }
        }
    }
}

function obj(value){
    return{
        value:value,
        next:null
    }
}

function  search(index){
    let aux=list.head;
    let count=0;
    while(count !== index){
        aux=aux.next;
        count++;
    }
    return aux;
}
console.log(search(2))

function insert(index,value){
    let newNode=obj(value);
    let firtPointer=search(index - 1);
    let holdingPointer=firtPointer.next;
    firtPointer.next=newNode;
    newNode.next=holdingPointer;

    return list.head;
}

*/






class Node{
    constructor(value){
        this.value=value,
        this.next=null
    }
}




class SingleList{
    constructor(value){
        this.head={
            value:value,
            next:null, 
        }
        this.tail=this.head;
        this.length=1;
    }

    append(value){
        let node= new Node(value);
        this.tail.next=node;
        this.tail=node;
        this.length++;
        return this;
    }

    prepend(value){
        let node=new Node(value);
        node.next=this.head;
        this.head=node;
        this.length++;
        return this;
    }

    insert(index,value){
        if(index >= this.length){
            return this.append(value);
        }
        let newNode= new Node(value);
        let firtPointer=this.search(index - 1);
        let holdingPointer=firtPointer.next;
        firtPointer.next=newNode;
        newNode.next=holdingPointer;

        this.length++;
        return this;
        
    }

    search(index){
        let aux=this.head;
        let count=0;
        while(count !== index){
            aux=aux.next;
            count++;
        }
        return aux;
    }

    remove(index){
        let nodeStable=this.search(index - 1);
        let indexRemove=this.search(index);
        let node=indexRemove.next;
        nodeStable.next=node;
        this.length--;
        return this;
    }
}

let mySingleList= new SingleList(1);