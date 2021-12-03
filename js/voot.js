function getStream(videoID){
    fetch(`https://wapi.voot.com/ws/ott/getMediaInfo.json?platform=Web&pId=2&mediaId=${videoID}`,
    {method:"GET",
    headers:{"Content-Type":"application/json"}
    }
    
    )
    .then(function(response){
        let data = response.json()
        return data
    })
    .then(function(data){
        var streamingLink = data.assets.Files[3].URL
        document.title = "Your Watching - "+data.assets.MediaName
        document.getElementById("Title").innerHTML = data.assets.MediaName
        jwplayer("myElement").setup({
            "file": streamingLink
            });
    });
}

function run(){
    var videoID = document.getElementById("streamLink").value
    videoID = videoID.split("/").pop()
    getStream(videoID)
}