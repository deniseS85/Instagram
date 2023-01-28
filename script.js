let instagram = [
    {
        'profil_images': 'img/profil.png',
        'headlines': 'Denise24',
        'location': 'Ibiza',
        'images': 'img/postsun.jpeg',
        'descriptions': 'Wunderschöner Sonnenuntergang. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.',
        'status': true,
        'likes': 5,
        'timePost': 'VOR 1 TAG',
        'postings': [
            {
                'username': 'Christian_liveisbeautiful',
                'profileImage': 'img/profil4.jpeg',
                'timeComment': 'GESTERN',
                'postingMessage': 'Super, wunderschön! &#128512'
            },
            {
                'username': 'Kati255',
                'profileImage': 'img/profil2.jpeg',
                'timeComment': '10 STUNDEN',
                'postingMessage':'Ein sehr schöner Sonnenuntergang'
            }   
        ]   
    },
    {
        'profil_images': 'img/profil1.jpeg',
        'headlines': 'Henri_Voss',
        'location': '',
        'images': 'img/postfood.jpeg',
        'descriptions': 'Urlaub einfach spitze. Leckeres Essen und Entspannung pur!',
        'status': false,
        'likes': 1,
        'timePost': 'VOR 5 TAGEN',
        'postings': [
            {
                'username': 'leben_pur',
                'profileImage': 'img/profil3.jpeg',
                'timeComment': '1 STUNDE',
                'postingMessage': 'Du lässt es dir gutgehen'
            },
            {
                'username': 'Kati255',
                'profileImage': 'img/profil2.jpeg',
                'timeComment': '2 TAGE',
                'postingMessage':'Hm, lecker...'
            },
            {
                'username': 'Christian_liveisbeautiful',
                'profileImage': 'img/profil4.jpeg',
                'timeComment': '2 TAGE',
                'postingMessage':'Genieße deinen Urlaub'
            }
        ]   
    },
    {
        'profil_images': 'img/profil2.jpeg',
        'headlines': 'Kati255',
        'location': 'München',
        'images': 'img/postcat.jpg',
        'descriptions': 'LOL, ich kann mir bald einen Pullover stricken. Lorem ipsum dolor sit amet, consecteturadipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.',
        'status': true,
        'likes': 10,
        'timePost': 'VOR 10 STUNDEN',
        'postings': []
    },
    {
        'profil_images': 'img/profil3.jpeg',
        'headlines': 'leben_pur',
        'location': '',
        'images': 'img/postkirmes.jpg',
        'descriptions': 'Herrlich war es mit euch! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.',
        'status': true,
        'likes': 0,
        'timePost': 'VOR 1 WOCHE',
        'postings': [
            {
                'username': 'Henri_Voss',
                'profileImage': 'img/profil1.jpeg',
                'timeComment': '1 STUNDE',
                'postingMessage': 'Es war ein super Abend!'
            }
        ]
    },
    {
        'profil_images': 'img/profil4.jpeg',
        'headlines': 'Christian_liveisbeautiful',
        'location': '',
        'images': 'img/postsekt.jpg',
        'descriptions': 'Das Leben einfach genießen.<br>#live #beautiful #enjoy',
        'status': false,
        'likes': 2,
        'timePost': 'VOR 2 STUNDEN',
        'postings': [
            {
                'username': 'Henri_Voss',
                'profileImage': 'img/profil1.jpeg',
                'timeComment': '1 MINUTE',
                'postingMessage': 'Auf jeden Fall!'
            },
            {
                'username': 'leben_pur',
                'profileImage': 'img/profil3.jpeg',
                'timeComment': '1 STUNDE',
                'postingMessage': 'Prost!'
            },
            {
                'username': 'Kati255',
                'profileImage': 'img/profil2.jpeg',
                'timeComment': '1 STUNDE',
                'postingMessage': 'Übertreibe es nicht &#128512'
            }   
        ]
    },
]

function render() {
    let profilContent = document.getElementById('profilContent');
    let postContent = document.getElementById('postContent');

    profilContent.innerHTML = '';
    postContent.innerHTML = '';
    load();

    for (let i = 0; i < instagram.length; i++) {
        const instaArray = instagram[i];
        const profil = instagram[i]['profil_images'];
        const name = instagram[i]['headlines'];
        const location = instagram[i]['location'];
        const image = instagram[i]['images'];
        const post = instagram[i]['descriptions'];
        const status = instagram[i]['status'];
        const likes = instagram[i]['likes'];
        const timePost = instagram[i]['timePost'];
       
        postContent.innerHTML += getPostContentHTML(profil, name, location, image, post, likes, timePost, i);
        profilContent.innerHTML += getAllProfilesHTML(profil, i);
        requestStatus(status, i);

        let postingMessage = document.getElementById(`newPost${i}`);
        let comments = document.getElementById(`comments${i}`);

        for (let j = 0; j < instaArray['postings'].length; j++) {
            const postings = instaArray['postings'][j];
            postingMessage.innerHTML +=  /*html*/ `  
            <div class="flex">
                <img id="profilImg${i}" src="${postings['profileImage']}" class="headerProfil">
                <div class="postMessage">
                    <b>${postings['username']}&ensp;</b>
                    ${postings['postingMessage']}
                    <div class="timeComment">${postings['timeComment']}</div>
                </div>
                <div onclick="deletePost(${i},${j})" class="close">&times;</div>
               
            </div>`;
 
                if (instaArray['postings'].length == 1) {
                    comments.innerHTML = /*html*/ `<div onclick="showMessageBox(${i})" class="showComments">1 Kommentar ansehen</div>`;
                } else {
                    comments.innerHTML = /*html*/`<div onclick="showMessageBox(${i})" class="showComments">Alle&ensp;${instaArray['postings'].length}&ensp;Kommentare ansehen</div>`;     
                } 
            }   
        } 
}

function requestStatus(status,i) {
    if (status == true) {
        document.getElementById(`profilImg${i}`).classList.add('gradient');
        document.getElementById(`postImg${i}`).classList.add('gradient');
    }
}

function getAllProfilesHTML(profil, i) {
    return /*html*/ `
            <img id="profilImg${i}" src="${profil}" class="profilImg">`;  
}

function getPostContentHTML(profil, name, location, image, post, likes, timePost, i) {
    
    if (post.length < 70) {
        post;
    }   else {
            post = post.substr(0,69) + /*html*/ `
                <span class="dots">...</span>
                <span class="more">${post.substr(69,post.length)}</span>
                <button class="moreReadButton" onclick="showMoreText(this)">mehr</button>`;
        } 
       
    return /*html*/ `
   
        <div class="postContent postBox" id="postContent${i}">

            ${getProfileHTML(profil, name, location, i)}

            <div class="posting">
                <img class="postingImg" src="${image}">
            </div>

            <div class="iconsPost">
                <div class="iconLeft">
                    <img class="heart" src="img/heart.png" onclick="like(${likes}, ${i})">
                    <img class="commentIcon" src="img/comment.png" onclick="showMessageBox(${i})">
                    <img src="img/send.png">
                </div>
                <div class="iconRight">
                    <img class="save" src="img/save.png"  onclick="saveComment(${i})">
                </div>
            </div>

            <div id="likeNum${i}" class="likePost likeNum"><b>Gefällt&ensp;${likes}&ensp;Mal</b></div>

            <div class="postText">
                <div>
                    <b>${name}&ensp;</b>
                    ${post}                
                </div>
            </div>
            <div class="comments" id="comments${i}"></div>
            <div class="timePost">${timePost}</div>
            ${generateSmiley()}
            <div class="commentContent commentBox">
                <div class="inputLeft">
                    <img class="smiley margin" src="img/smile.png" onclick="showHideSmiley(this)">
                    <input onkeyup="checkInputValue(this)" id="comment${i}" class="commentInput" type="text" placeholder="Kommentieren..." required autocomplete="off">
                </div>
                <button id="button${i}" class="posting-btn margin" disabled style="opacity:0.4;" onclick="addPost(${i})">Posten</button>
            </div>

            ${getMessageBoxHTML(image, profil, name, location, timePost, likes, i)}
        </div>`;  
}

function getMessageBoxHTML(image, profil, name, location, timePost, likes, i) {
       
        return /*html*/ `
   
        <div id="messageBox${i}" class="messageBox" style="display:none;">
            <div id="messageContent" class="messageContent postBox">
                <div class="messageBoxLeft">
                    <img class="messageBoxImg" src="${image}">
                </div>

                <div class="messageBoxRight">
                    <div class="headerMessage">
                        <div class="headerMessageLeft">

                            ${getProfileHTML(profil, name, location, i)}

                        </div>
                        <div onclick="closeMessageBox(${i})" class="closeMessageBox">&#x2715</div>
                    </div>

                    <div class="messageBoxPost">
                        <div>
                            <div class="flex">
                                <img id="postImg${i}" src="${profil}" class="headerProfil">
                                <div class="postMessage">
                                    <b>${name}&ensp;</b>
                                    ${instagram[i]['descriptions']}
                                </div>
                            </div>
                        </div>
                        <div id="newPost${i}"></div>
                    </div>
                    
                    <div class="messageFooter">
                        <div class="iconsMessage">
                            <div class="iconLeft">
                                <img class="heart" src="img/heart.png" onclick="like(${likes}, ${i})">
                                <img class="commentIcon" src="img/comment.png" onclick="showMessageBox(${i})">
                                <img src="img/send.png">
                            </div>
                            <div class="iconRight">
                                <img class="save" src="img/save.png" onclick="saveComment(${i})">
                            </div>
                        </div>
                        
                        <div id="likeNum${i}" class="likeMessage likeNum"><b>Gefällt&ensp;${likes}&ensp;Mal</b></div>

                        <div class="timePost timepostMessage">${timePost}</div>

                        ${generateSmiley()}
                        
                        <div class="commentMessage commentBox">
                            <div class="inputLeftMessage">
                                <img class="smiley margin" src="img/smile.png" onclick="showHideSmiley(this)">
                                <input onkeyup="checkInputValue(this)" id="comment${i}" class="commentInput" type="text" placeholder="Kommentieren..." required autocomplete="off">
                            </div>
                            <button id="button${i}" class="posting-btn margin" disabled style="opacity:0.4;" onclick="addPost(${i})">Posten</button>
                        </div>
                    </div>
                </div>  
            </div>
        </div>`;
       
}

function showMessageBox(i) {
    let messageBox = document.getElementsByClassName('messageBox')[i];
    let postContent = document.getElementById(`postContent${i}`);
    let inputPost = postContent.querySelector('.inputLeft .commentInput');
    let inputMessage = postContent.querySelector('.commentMessage .inputLeftMessage .commentInput');

    messageBox.style.display = "flex";
    document.body.style.overflow = 'hidden';
    inputPost.value = '';
    inputMessage.value = '';
}

function closeMessageBox(i) {
    let messageBox = document.getElementsByClassName('messageBox')[i];
    let postContent = document.getElementById(`postContent${i}`);
    let inputPost = postContent.querySelector('.inputLeft .commentInput');
    let inputMessage = postContent.querySelector('.commentMessage .inputLeftMessage .commentInput');

    messageBox.style.display = 'none';
    document.body.style.overflow = '';
    inputPost.value = '';
    inputMessage.value = '';
    closeAllSmileyBox();
}

function getProfileHTML(profil, name, location, i){
    return /*html*/ `
    <div class="headerPost">
        <img id="postImg${i}" src="${profil}" class="headerProfil">
        <div class="headerName">
            <div><b>${name}</b></div>
            <div>${location}</div>
        </div>
    </div>`;
}

function generateSmiley() {
    return /*html*/ `
        <div class="smileyBoxPost smileyBoxMessage" style="display:none;">
            <div>
                <div class="smileyBoxText">Smileys</div>
            </div>
            <div onclick="selectSmiley(event)" class="smileys">
                <span>&#128512</span><span>&#128513</span><span>&#128514</span><span>&#128517</span>
                <span>&#128518</span><span>&#128519</span><span>&#128520</span><span>&#128521</span>
                <span>&#128522</span><span>&#128523</span><span>&#128524</span><span>&#128525</span>
                <span>&#128526</span><span>&#128527</span><span>&#128528</span><span>&#128529</span>
                <span>&#128530</span><span>&#128531</span><span>&#128532</span><span>&#128533</span>
                <span>&#128534</span><span>&#128535</span><span>&#128536</span><span>&#128537</span>
                <span>&#128538</span><span>&#128539</span><span>&#128540</span><span>&#128541</span>
                <span>&#128542</span><span>&#128543</span><span>&#128544</span><span>&#128545</span>
                <span>&#128546</span><span>&#128547</span><span>&#128548</span><span>&#128549</span>
                <span>&#128550</span><span>&#128551</span><span>&#128552</span><span>&#128553</span>
                <span>&#128554</span><span>&#128555</span><span>&#128556</span><span>&#128557</span>
                <span>&#128558</span><span>&#128559</span><span>&#128560</span><span>&#128561</span>
                <span>&#128562</span><span>&#128563</span><span>&#128564</span><span>&#128565</span>
                <span>&#128566</span><span>&#128567</span><span>&#128577</span><span>&#128578</span>
                <span>&#128579</span><span>&#128580</span><span>&#129296</span><span>&#129297</span>
                <span>&#129298</span><span>&#129299</span><span>&#129300</span><span>&#129301</span>
                <span>&#129312</span><span>&#129313</span><span>&#129314</span><span>&#129315</span>
                <span>&#129316</span><span>&#129317</span><span>&#129319</span><span>&#129320</span>
                <span>&#129321</span><span>&#129322</span><span>&#129323</span><span>&#129324</span>
                <span>&#129325</span><span>&#129326</span><span>&#129327</span><span>&#129488</span> 
            </div>  
        </div>`;
}

function showHideSmiley(el) {

    let smileysPost = el.closest('.postBox').querySelector('.smileyBoxPost');
    
    if (smileysPost.style.display === "none") {
        closeAllSmileyBox();
        smileysPost.style.display = "inline";
    }   else {
        smileysPost.style.display = "none"; 
    }
}

function closeAllSmileyBox() {
    let smileyBoxPosts = document.querySelectorAll('.smileyBoxPost');

    for (let i = 0; i < smileyBoxPosts.length; i++) {
        smileyBoxPosts[i].style.display = 'none'; 
    }  
}

function showMoreText(el) {
    let dots = el.parentNode.getElementsByClassName('dots')[0];
    let moreText = el.parentNode.getElementsByClassName('more')[0];
    let btnText = el.parentNode.getElementsByClassName('moreReadButton')[0];
  
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "mehr";
        moreText.style.display = "none";
    }   else {
            dots.style.display = "none";
            btnText.innerHTML = "weniger";
            moreText.style.display = "inline";
        }
}

function like(likes, i) {

    let postContent = document.getElementById(`postContent${i}`);
    let heartPost = postContent.querySelector('.heart');
    let heartMessage = postContent.querySelector('.messageBox .heart');
    let likeNumPost = postContent.querySelector('.likeNum');
    let likeNumMessage = postContent.querySelector('.messageBox .likeNum');

    if (heartPost.src.match("img/heart.png")) {
        heartPost.src = "img/heart_active.png";
        heartMessage.src = "img/heart_active.png";
        likeNumPost.innerHTML = `<b>Gefällt&ensp;${likes + 1}&ensp;Mal</b>`;
        likeNumMessage.innerHTML = `<b>Gefällt&ensp;${likes + 1}&ensp;Mal</b>`;
    } else {
        heartPost.src = "img/heart.png";
        heartMessage.src = "img/heart.png";
        likeNumPost.innerHTML = `<b>Gefällt&ensp;${likes}&ensp;Mal</b>`;
        likeNumMessage.innerHTML = `<b>Gefällt&ensp;${likes}&ensp;Mal</b>`;
    }
}

function saveComment(i) {
    let postContent = document.getElementById(`postContent${i}`);
    let savePost = postContent.querySelector('.save');
    let saveMessage = postContent.querySelector('.messageBox .save');

    if (savePost.src.match("img/save.png")) {
        savePost.src = "img/save_active.png";
        saveMessage.src = "img/save_active.png";
    } else {
        savePost.src = "img/save.png";
        saveMessage.src = "img/save.png";
    }
}

function addPost(i) {
    let postContent = document.getElementById(`postContent${i}`);
    let inputPost = postContent.querySelector('.commentInput');
    let inputMessage = postContent.querySelector('.messageBox .commentInput');
    let  messageBox = document.getElementsByClassName('messageBox')[i];

    let postingMessage = '';

    if (inputPost.value != '') {
        postingMessage = inputPost.value; 
    }
    if (inputMessage.value != '') {
        postingMessage = inputMessage.value; 
    }

    let myProfile =  {
        username: 'Denise24', 
        profileImage: 'img/profil.png', 
        timeComment: 'GERADE EBEN',
        postingMessage: postingMessage,
        deleteX: '&times;'
    };

        instagram[i]['postings'].push(myProfile);

        inputPost.value = '';
        inputMessage.value = ''; 
        document.body.style.overflow = ''; 
        save();  
        render();

        if(messageBox.style.display === "flex") {
            showMessageBox(i);   
        }  
    
       
}

function selectSmiley(event) {
    
    if (event.target.tagName === "SPAN") {
        let smiley = event.target;
        let commentInput = smiley.closest('.postBox').querySelector('.commentInput');
        let buttonPost = smiley.closest('.postBox').querySelector('.posting-btn');
        
        commentInput.value += smiley.textContent;
        commentInput.focus();
        buttonPost.disabled = false;
        buttonPost.style.opacity = '1';
    }

}
   
function save() {
    localStorage.setItem('instagram', JSON.stringify(instagram));
}

function load() {
    let instagram_temp = localStorage.getItem('instagram');

    if (instagram_temp) {
        instagram = JSON.parse(instagram_temp);
    }
} 

function deletePost(i, j) {
    instagram[i]['postings'].splice(j, 1);
    document.body.style.overflow = '';

    save();
    render();
    showMessageBox(i);
}

function checkInputValue(el) { 
    let buttonPost = el.closest('.commentBox').querySelector('.posting-btn');
   
    if (el.value.length === 0) {
        buttonPost.style.opacity = '0.4';
        buttonPost.disabled = true;
    } else {
        buttonPost.style.opacity = '1';
        buttonPost.disabled = false;
    } 
}

function openInput() {
    let newInput = document.getElementById('newInput');
    let button = document.getElementById('searchButton');
    let lupe = document.getElementById('lupe');
   
        button.style.display = 'none';
        lupe.style.display = 'none'
        newInput.style.display = 'flex';  
        document.getElementById('newInput').focus();    
}