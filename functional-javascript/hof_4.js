let things = ['car', 'bicicle' , 'house' , 'Tree', 'Building']
console.log(things.sort(function(a,b){
    let x = a.toLowerCase(),
        y = b.toLowerCase()

        console.log(x,y);


        if (x < y) return -1
        if (x > y) return 1

       return 0
}));
