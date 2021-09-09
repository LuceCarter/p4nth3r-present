import { useEffect } from "react";

var videoIDs = [
    '2zkJe3XKm1s', // ToeFrog
    '4Z6yFebIKT8', // Luce
    'ND9oiby1Jeo', // FiniteSingularity
    'qz5u7GMWoSQ', // Dr. Dinomight
    'lo2TntviNoI', // BrattDamon
    'UO_yPrM4rZE', // Moody
];

var player, currentVideoId = 0;

function onYouTubeIframeAPIReady() {
    console.log('YouTube IFrame Ready!');
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        playerVars: {
            controls: 1,
            showinfo: 0,
            rel: 0,
            showsearch: 0,
            iv_load_policy: 3
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.loadVideoById(videoIDs[currentVideoId]);

    // bind events
    var next = document.getElementById("next");
    next.addEventListener("click", function () {
        player.nextVideo();
    });

    var pre = document.getElementById("previous");
    pre.addEventListener("click", function () {
        player.previousVideo();
    });

    player.loadPlaylist({
        playlist: videoIDs
    });
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        currentVideoId++;
        if (currentVideoId < videoIDs.length) {
            player.loadVideoById(videoIDs[currentVideoId]);
        }
    }
}

export default function VideoPlayer(props) {

    useEffect(() => {
        if(!window.YT){
            var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        } else {
            onYouTubeIframeAPIReady();
        }
    });

    return (
        <div className="video-player">
            <div id="player"></div>
            <div className="buttons">
                <button className="button" id="previous">previous</button>
                <button className="button" id="next">Next</button>
            </div>
        </div>
    )
};