//serviceWorker register
navigator.serviceWorker.register("./sw.js").then(function(registration){
    console.log("Service worker has been registered with scope!", registration.scope);
});