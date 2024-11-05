class TreeNode{
    constructor(value){
        this.value = value;
        this.left = undefined;
        this.right = undefined;
    }

    add(value){
        if(this.value === value) return;
        if(value < this.value){
            this.addLeft(value);
        }else{
            this.addRight(value);
        }
    }

    addLeft(value){
         if(this.left){
            return this.left.add(value);
        }
        this.left = new TreeNode(value);
    }

    addRight(value){
        if(this.right){
            return this.right.add(value);
        } 
        this.right = new TreeNode(value);
    }
}

class BinaryTree{
    constructor(){
        this.root = undefined;
    }

    add(value){
        if(this.root){
            return this.root.add(value);
        }     
        this.root = new TreeNode(value);
    }

    find(value) { 
        if(!this.root) return undefined;
        let current = this.root;
        while(true){
            if (current === undefined) 
                return console.log("not found");
            if(current.value == value ) {
                console.log("found");
                return current;
            }
            if (value < current.value){
                current = current.left
            }else{
                current = current.right;
            }
        }
    }

    delete(value){
        this.root = this.deleteRecursively(this.root, value);
    }

    deleteRecursively(node, value){
        if (node === undefined){
            console.log("not found");
            return undefined;
        }
        if (value < node.value){
            node.left = this.deleteRecursively(node.left, value);
        }else if(value > node.value){
            node.right = this.deleteRecursively(node.right, value);
        }else{
            if (!node.left && !node.right) {
                return undefined;
            }
            if (!node.left) {
                return node.right;
            }
            if (!node.right) {
                return node.left;
            }
            let minRight = this._findMin(node.right);
            node.value = minRight.value;
            node.right = this._deleteRecursively(node.right, minRight.value);
        }
        return node;
    }
    
    _findMin(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }
        }


const tree = new BinaryTree();
tree.add(29);
tree.add(13);
tree.add(17);
tree.add(23);
tree.add(5);
tree.add(15);
tree.add(37);
tree.add(31);
tree.add(41);

// const res = tree.find(23);
// console.log(res)
console.log(JSON.stringify(tree, null, "  "));
delete(5);
console.log(JSON.stringify(tree, null, "  "));
