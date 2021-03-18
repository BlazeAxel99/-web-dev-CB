function fakeDownload(done){
    setTimeout(function(){
        let downloadedData= "some data we ripped of interwebs"
        done(downloadedData)

    }, 1000)
}

fakeDownload(function(data){
    console.log('we downloaded a file which have this data ->')
    console.log(data)
})
