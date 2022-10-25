const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];

// Render posts

const container = document.querySelector("#post");

function renderPosts() {
    for (let i = 0; i < posts.length; i++) {
        container.innerHTML += `
            <section class="top">
            <img src="${posts[i].avatar}" alt="User Profile Picture" class="avatar">
            <div class="user-info">
                <p class="top-text bold">${posts[i].name}</p>
                <p class="top-text">${posts[i].location}</p>
            </div>
            </section>

            <section class="main-post-img">
            <img src="${posts[i].post}" alt="${posts[i].comment}" class="main-img" id="main-img${[i]}">
            </section>

            <section class="interact-btns">
            <img class="icon fav-icon" id="fav-icon${[i]}" src="/images/icon-heart.png" alt="Favorite Icon">
            <img class="icon" src="/images/icon-comment.png" alt="Comment Icon">
            <img class="icon" src="/images/icon-dm.png" alt="DM Icon">
            </section>

            <section class="main-post-text">
            <p class="post-text bold"><span id="likes-el${[i]}">${posts[i].likes}</span> likes</p>
            <p class="post-text"><span class="bold">${posts[i].username}</span> ${posts[i].comment}</p>
            </section>
        `
    }
}

renderPosts()

// Add like/dislike function
let liked = false;
const favIcon = document.querySelector("#fav-icon0");

favIcon.addEventListener("dblclick", likeDislike);

function likeDislike() {
    const likesEl = document.querySelector(`#likes-el0`);
    if (!liked) {
        posts[0].likes ++;
        likesEl.textContent = posts[0].likes;
        favIcon.style.opacity = "100%";
        liked = true;
    } else {
        posts[0].likes --;
        likesEl.textContent = posts[0].likes;
        favIcon.style.opacity = "50%";
        liked = false;
    }
}