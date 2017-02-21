require('http');

setInterval(()=> {
    console.log(1);
}, 1000);

var exiting = false;

process.on("SIGINT", ()=>{
    if(exiting) {
        console.log("exiting...");
        process.exit();
    } else {
        console.log("To exit, please press ^c again");

        exiting = true;

        setTimeout(()=>{exiting = false;}, 10000);
    }
});
