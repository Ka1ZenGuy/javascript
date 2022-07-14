for ( let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Foobar")
    }
    else if (i % 3 === 0){
        console.log("foo");

    }
    else if (i % 5 === 0 ){
        console.log("Bar");
    }
    else {
        console.log(i);
    }
}