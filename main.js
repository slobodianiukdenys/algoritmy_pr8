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
        this.root = this.deleteNode(this.root, value);
    }

   deleteNode(current, value){
        if (current == undefined) return undefined;
        if (value === current.value) {
            if (current.left == undefined && current.right == undefined){
                return undefined;
            }else if (current.left == undefined){
                return current.right;
            }else if (current.right == undefined){
                return current.left;
            }else{
                let tempNode = this.findMin(current.right);
                current.value = tempNode.value;

                current.right = this.deleteNode(current.right, tempNode.value)
                return current;
            }
        }else if(value < current.value){
            current.left = this.deleteNode(current.left, value);
            return current; 
        }else{
            current.right = this.deleteNode(current.right, value);
            return current; 
        }
   }
    
    findMin(node) {
        while(!node.left == undefined)
            node = node.left

        return node
    }

    Min(root){
        if (!root.left){
            return root.value;
        }else{
            return this.Min(root.left)
        }
    }

    Max(root){
        if (!root.right){
            return root.value;
        }else{
            return this.Max(root.right)
        }
    }

    CountNodes(root){
        if (root == undefined){
            return 0; 
        }
        return 1 + this.CountNodes(root.left) + this.CountNodes(root. right);    
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
//tree.delete(5);
console.log(JSON.stringify(tree, null, "  "));
console.log(`Максимальний елемент: ${tree.Max(tree.root)}`);
console.log(`Мінімальний елемент: ${tree.Min(tree.root)}`);
console.log(`Кількість вузлів в дереві: ${tree.CountNodes(tree.root)}`);
