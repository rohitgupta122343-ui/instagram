const reels = [
  {
    username: "alex_01",
    isFollow: true,
    likeCount: 245,
    isLike: false,
    commentCount: 32,
    caption: "Enjoying the sunset vibes 🌅",
    video: "./reels/r1.mp4",
    profilePic: "https://picsum.photos/200?random=1",
    isMute: false
  },
  {
    username: "mia_dev",
    isFollow: false,
    likeCount: 1024,
    isLike: false,
    commentCount: 88,
    caption: "Coding late night ☕💻",
    video: "./reels/r2.mp4",
    profilePic: "https://picsum.photos/200?random=2",
    isMute: false
  },
  {
    username: "travel_with_me",
    isFollow: true,
    likeCount: 560,
    isLike: false,
    commentCount: 41,
    caption: "Lost in the mountains 🏔️",
    video: "./reels/r3.mp4",
    profilePic: "https://picsum.photos/200?random=3",
    isMute: false
  },
  {
    username: "foodielife",
    isFollow: false,
    likeCount: 310,
    isLike: false,
    commentCount: 19,
    caption: "Street food hits different 😋",
    video: "./reels/r4.mp4",
    profilePic: "https://picsum.photos/200?random=4",
    isMute: false
  },
  {
    username: "dance_vibes",
    isFollow: true,
    likeCount: 2250,
    isLike: false,
    commentCount: 132,
    caption: "New choreography 🔥",
    video: "./reels/r5.mp4",
    profilePic: "https://picsum.photos/200?random=5",
    isMute: false
  },
  {
    username: "gamerzone",
    isFollow: false,
    likeCount: 780,
    isLike: false,
    commentCount: 54,
    caption: "Clutch moments 🎮",
    video: "./reels/r6.mp4",
    profilePic: "https://picsum.photos/200?random=6",
    isMute: false
  },
  {
    username: "artby_rose",
    isFollow: true,
    likeCount: 950,
    isLike: false,
    commentCount: 67,
    caption: "Watercolor magic 🎨",
    video: "./reels/r7.mp4",
    profilePic: "https://picsum.photos/200?random=7",
    isMute: false
  },
  {
    username: "fit_life",
    isFollow: false,
    likeCount: 430,
    isLike: false,
    commentCount: 23,
    caption: "Morning workout done 💪",
    video: "./reels/r8.mp4",
    profilePic: "https://picsum.photos/200?random=8",
    isMute: false
  },
  {
    username: "pet_world",
    isFollow: true,
    likeCount: 1890,
    isLike: false,
    commentCount: 145,
    caption: "Puppy love 🐶❤️",
    video: "./reels/r9.mp4",
    profilePic: "https://picsum.photos/200?random=9",
    isMute: false
  },
  {
    username: "daily_quotes",
    isFollow: false,
    likeCount: 620,
    isLike: false,
    commentCount: 28,
    caption: "Stay positive ✨",
    video: "./reels/r10.mp4",
    profilePic: "https://picsum.photos/200?random=10",
    isMute: false
  }
];



const reel = document.querySelector('.reels');

function addData(){
  var sum = '';

reels.forEach((ele,idx)=>{
    
   sum  = sum + `
        <div class="reel">
                
                <video autoplay loop ${ele.isMute?'':'muted'} src="${ele.video}"></video>
            <div class="mute" id=${idx}>
      ${ele.isMute?'<i class="ri-volume-down-line"></i>':'<i class="ri-volume-mute-fill"></i>'}   
</div>
                <div class="bottom">
                   <div class="user">
                    <img src="${ele.profilePic}" alt="">
                    <h4>${ele.username}</h4>
                    <button id=${idx} class=follow>${ele.isFollow?'Unfollow':'Follow'}</button>
                </div>
                    <h3>${ele.caption}</h3>
                </div>

                <div class="right">
                    <div id=${idx} class="like">
                        <h4 class="like-icon  icon">${ele.isLike?'<i  id="love" class="ri-heart-fill"></i>':'<i class="ri-heart-line"></i>'}</h4>
                        <h6>${ele.likeCount}</h6> 
                    </div> 
                    <div class="comment"> 
                    <h4 class="comment-icon icon" ><i class="ri-chat-3-line"></i></h4>
                        <h6>${ele.commentCount}</h6> 
                    </div> 
                    <div class="share"> 
                        <h4 class="share-icon icon "><i class="ri-send-plane-line"></i></h4>
                        <h6>90</h6> 
                    </div> 
                     <div class="menu"> 
                        <h4 class="menu-icon  icon"><i class="ri-more-2-line"></i></h4>
                    </div>
                </div>

            </div> `


    
})

 reel.innerHTML = sum;

}


addData()

reel.addEventListener('click',(e)=>{

if(e.target.className == 'like'){
  if(!reels[e.target.id].isLike){
    reels[e.target.id].likeCount++;
  reels[e.target.id].isLike = true;
  }
  else{
    reels[e.target.id].likeCount--;
  reels[e.target.id].isLike = false;
  }
  addData()
}


if(e.target.className == 'follow'){

 if(!reels[e.target.id].isFollow){
   reels[e.target.id].isFollow = true;
 }else{
  reels[e.target.id].isFollow = false;
  }
  addData()
  
}

 if(e.target.className == 'mute'){

 if(!reels[e.target.id].isMute){
   reels[e.target.id].isMute = true;
 }else{
  reels[e.target.id].isMute = false;
  }
  addData()
  
}

 
})

reel.addEventListener("scroll", (e) => {

 
  const reelHeight = document.querySelector('.reel').offsetHeight;
 
  
  const index = Math.floor(reel.scrollTop/reelHeight);

  reels.forEach((r)=>{
    r.isMute = false;
  })

  reels[index].isMute = true;

  addData()

});

