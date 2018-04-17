if (navigator.serviceWorker != null) {
    navigator.serviceWorker
        .register("sw.js?v=17")
        .then(function(registration) {
            console.log("Registered events at scope: ", registration.scope);
        })
        .catch(err => {
            console.log("Registered events at scope: ", err);
        });
    // var isreloadserviceWorker;
    // navigator.serviceWorker.addEventListener("message", function(e) {
    //     if (e.data === "sw.update") {
    //         if (isreloadserviceWorker) {
    //             return;
    //         }
    //         isreloadserviceWorker = true;
    //         window.location.reload();
    //     }
    // });
}
