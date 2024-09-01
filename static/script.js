let chaticon = document.querySelector(".chaticon");
let menu = document.querySelector(".menu");
let callicon = document.querySelector(".callicon");
let statusicon = document.querySelector(".statusicon");
let chat = document.querySelectorAll(".chats");
let addchat = document.querySelector(".addchat");
let addnewchat = document.querySelector(".addnewchat");
let profilepage = document.querySelector(".profilepage");
let settingspage = document.querySelector(".settingspage");
let user = document.querySelector(".user")
let settings = document.querySelector(".settings")
let leftbox = document.querySelector('.left')
let rightbox = document.querySelector('.right')
let icons = document.querySelectorAll('i')
let callbox = document.querySelector(".callbox")
let voicecall = document.querySelector(".voicecall")
let videocall = document.querySelector(".videocall")
let videocallbox = document.querySelector(".videocallbox")
const videoElement = document.getElementById('videoElement');
let endcall = document.querySelector(".endcall")
let endvdcall = document.querySelector(".endvdcall")
let stopButton = document.querySelector(".stopButton")
let stp = document.querySelector(".stp")
var audio = new Audio('static/images/ring.mp3');
let stream;


// Add a click event listener  to the menu button
function setRightBoxWidth() {
    if (window.innerWidth <= 1000) {
        rightbox.style.width = "85vw";
    } else {
        rightbox.style.width = "96vw";
    }
}

menu.addEventListener('click', () => {
    setRightBoxWidth();
    window.addEventListener('resize', setRightBoxWidth);
    if (leftbox.style.display === "none" && (window.innerWidth >= 600)) {
        leftbox.style.display = "block";
        rightbox.style.width = "71vw";
        rightbox.style.borderRadius = "0";
    }
    else if (leftbox.style.display === "none" && (window.innerWidth <= 600)) {
        leftbox.style.display = "block";
        rightbox.style.width = "85vw";
        rightbox.style.borderRadius = "0";
    }
    else {
        leftbox.style.display = "none";
        setRightBoxWidth(); // Adjust width based on viewport width
        rightbox.style.borderRadius = "8px 0 0 5px";
    }
});
//add icon active action
// Add click event listener to each icon
icons.forEach(icon => {
    chaticon.style.backgroundColor = '#252525';
    chaticon.style.borderRadius = '3px';
    chaticon.style.borderLeft = '3px solid rgb(6, 167, 6)';
    icon.addEventListener('click', () => {
        // Remove the active class from all icons
        icons.forEach(i => {
            i.style.backgroundColor = '';
            i.style.borderRadius = '';
            i.style.borderLeft = '';
        });
        if (!icon.classList.contains('callicons')) {
            // Add the active class to the clicked icon
            icon.style.backgroundColor = '#252525';
            icon.style.borderRadius = '3px';
            icon.style.borderLeft = '3px solid rgb(6, 167, 6)';

        }
    });
});

//add call button function
callicon.addEventListener('click', () => {
    leftbox.innerHTML = `
    <div class="chat">
                <p>Calls</p>
                <div class="chatsymbols">
                    <i class="ri-phone-line"></i>
                    <i class="ri-menu-5-line"></i>
                </div>
            </div>

            <!-- search bar of whatsapp -->
            <div class="search">
                <input type="text" placeholder="Search or start a new call">
                <i class="ri-search-line"></i>
            </div>

            <div class="chatbox">
                <div class="chats">
                    <div class="profilepic">
                        <img src="{% static 'images/blank-profile-picture-973460_1280.png' %}" alt="">
                    </div>
                    <div class="info">
                        <p id="name">Harsh Pandey</p>
                        <p id="msg"><i class="ri-phone-line"></i> Outgoing</p>
                    </div>
                    <div class="time">Yesteday</div>
                </div>

                 <div class="chats">
                    <div class="profilepic">
                        <img src="{% static 'images/glow.png' %}" alt="">
                    </div>
                    <div class="info">
                        <p id="name">Mohit Pandey</p>
                        <p id="msg" style="color:#eb8080;"> <i class="fas fa-phone-slash"></i> Missed (2)</p>
                    </div>
                    <div class="time">05/07/2024</div>
                </div>

                 <div class="chats">
                    <div class="profilepic">
                        <img src="{% static 'images/do.png' %}" alt="">
                    </div>
                    <div class="info">
                        <p id="name">Uddeshya Awasthi</p>
                        <p id="msg" style="color:#eb8080;"> <i class="ri-video-off-line"></i> Missed (5)</p>
                    </div>
                    <div class="time">03/02/2024</div>
                </div>
                `
});

chaticon.addEventListener('click', () => {
    leftbox.innerHTML = `
    <div class="chat">
                <p>Chats</p>
                <div class="chatsymbols">
                    <i class="ri-chat-new-line"></i>
                    <i class="ri-menu-5-line"></i>
                </div>
            </div>

            <!-- search bar of whatsapp -->
            <div class="search">
                <input type="text" placeholder="Search or start a new chat">
                <i class="ri-search-line"></i>
            </div>

            <div class="chatbox">
                <div class="chats">
                    <div class="profilepic">
                        <img src="{% static 'images/blank-profile-picture-973460_1280.png' %}" alt="">
                    </div>
                    <div class="info">
                        <p id="name">Harsh Pandey</p>
                        <p id="msg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, quae?</p>
                    </div>
                    <div class="time">4:41 Pm</div>
                </div>

                <div class="chats">
                    <div class="profilepic">
                        <img src="{% static 'images/photo.jpg' %}" alt="">
                    </div>
                    <div class="info">
                        <p id="name">Mohit Pandey</p>
                        <p id="msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sint!</p>
                    </div>
                    <div class="time">2:45 Pm</div>
                </div>
            </div>`
});


//add status icon functionality.
statusicon.addEventListener('click', () => {
    leftbox.innerHTML = `
    <div class="chat">
                <p>Status</p>
                <div class="chatsymbols">
                    <i class="ri-menu-5-line"></i>
                </div>
            </div>

            <div class="chatbox">
                <div style="justify-content: start; gap: 20px;" class="chats">
                    <div style="border: 3px solid green; padding:2px;" class="profilepic">
                        <img src="{% static 'images/photo.jpg' %}" alt="">
                    </div>
                    <div class="info">
                        <p id="name">Mohit Pandey</p>
                        <p id="msg">Today, 2:45 Pm</p>
                    </div>
                </div>
                <h4>Viewd Updates</h4>
                 <div class="chatbox">
                <div style="justify-content: start; gap: 20px;" class="chats">
                    <div style="border: 3px solid #434343; padding:2px;" class="profilepic">
                        <img src="{% static 'images/glow.png' %}" alt="">
                    </div>
                    <div class="info">
                        <p id="name">Harsh Pandey</p>
                        <p id="msg">Today, 5:45 Pm</p>
                    </div>
                </div>`
});


//add user logo profile page function
profilepage.addEventListener('click', (event) => {
    event.stopPropagation();
})
user.addEventListener('click', (event) => {
    event.stopPropagation();
    profilepage.style.left = "10px"
})

document.addEventListener('click', (event) => {
    profilepage.style.left = "-500px"
})

//add settings logo setiings page function
settingspage.addEventListener('click', (event) => {
    event.stopPropagation();
})
settings.addEventListener('click', (event) => {
    event.stopPropagation();
    settingspage.style.left = "10px"
})

document.addEventListener('click', (event) => {
    settingspage.style.left = "-500px"
})


document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Disable selection start
document.addEventListener('selectstart', function (e) {
    e.preventDefault();
});

// call box whn click on call btn


// Function to play audio repeatedly
function playRepeatedly() {
    audio.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false);
    audio.play();
}

// Function to stop playing audio
function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
}

// Event listener for voicecall click
voicecall.addEventListener('click', () => {
    if(callbox.style.display != "flex" && videocallbox.style.display != "flex"){
        playRepeatedly(); // Start playing audio repeatedly
        callbox.style.display = "flex";
    }else{
        alert("call not sent!! You are already in a call")
    }
});
endcall.addEventListener('click', () => {
    callbox.style.display = "none"
    audio.pause();
    audio.currentTime = 0;
})

// videocall box making 

// Function to open the camera stream
async function openCamera() {
    try {
        // Request access to the camera
        stream = await navigator.mediaDevices.getUserMedia({ video: true });

        // Set the video stream as the source of the video element
        videoElement.srcObject = stream;
    } catch (error) {
        console.error('Error accessing the camera:', error);
    }
}

// Function to stop the camera stream
function stopCamera() {
    if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        videoElement.srcObject = null;
    }
}

videocall.addEventListener('click', () => {
    if(videocallbox.style.display != "flex" && callbox.style.display != "flex" ){
        openCamera();
        videocallbox.style.display = "flex"
        playRepeatedly();
    }else{
        alert("Call not sent!! You are already in a call")
    }
})

stp.addEventListener('click', () => {
    if(videoElement.srcObject == stream){
        stopCamera();
        stp.innerHTML='<i class="ri-video-off-line callicons stopButton"></i>'
    }else{
        stp.innerHTML='<i class="ri-video-on-line callicons stopButton"></i>'
        openCamera()
    }
});

endvdcall.addEventListener('click', () => {
    videocallbox.style.display = "none";
    audio.pause();
    audio.currentTime = 0;
    stopCamera();
});


// new chat icon working

addnewchat.addEventListener('click',()=>{
    if(addchat.style.height!="170px"){
        addchat.style.height="170px"
    }else{
        addchat.style.height="0px"
    }
})


