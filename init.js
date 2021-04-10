// What I need to get from the page

//The Form 
// Post Title
// Post Content 
// Post Button

// The Posts Div

const postForm = document.querySelector('.post-form');
const postsDiv = document.querySelector('.posts');
//What function do I need


//I need to create a state of the posts.

let posts = [];

function handleSubmit(e) {
    //get the values of the title and the content 
    const postTitle = e.target.querySelector('.blog_input_title').value;
    const postContent = e.target.querySelector('.blog_text_area').value;
    e.preventDefault();
    //create an object with those values and ad an ID
    const post = createPostObj(postTitle, postContent);
    //update our posts state
    posts.push(post);
    //dispatch even to let the page know that a post has been submitted and to display posts
    postsDiv.dispatchEvent(new CustomEvent('postUpdated'));
}

//Create an object called post that has the properties of postTitle, postContent and give it an ID
function createPostObj(title, content) {
    console.log('Gathering Post Info Into Object');
    //Get the post title and post content and set it to that object 
    const post = {
        title,
        content,
        id: Date.now()
    }
    return post;
    
}
//generate some html to display the post title and content
function displayPosts() {
    
    const html = posts.map((post) => `<div class="post">
    <h1 class="post-title">${post.title}</h1>
    <p class="post-content">${post.content}</p>
    <button value ="${post.id}" class="delete-post">X</button>
    </div>`).join('');
    postsDiv.innerHTML = html;
    
    
}
//function to hook up delete fucntion to dynamically created button
function addListenerToDeleteButtons() {
    const buttons = document.querySelectorAll('button')
    buttons.forEach(btn => {
        btn.addEventListener('click', deletePost);
    })
}
//save the posts to local storage
function mirrorToLocalStorage() {
    // console.info('Saving posts to localstorage')
    localStorage.setItem('posts', JSON.stringify(posts));
}
//display all current posts in local storage
function restoreFromLocalStorage() {
    // console.info('Restoring from LS');
    const IsPosts = JSON.parse(localStorage.getItem('posts'));
    if (IsPosts.length) {
      posts.push(...IsPosts);
    }
    postsDiv.dispatchEvent(new CustomEvent('postUpdated'));
    addListenerToDeleteButtons();
  }

//   ! STUCK HERE, THE POSTS ARRAY IS NOT UPDATING WITH THE FILTER BUT IM SURE THE FILTER IS CORRECT, MAY BE ANOTHER EVENT ISSUE
  //delete post
  function deletePost(e) {
      const id = e.currentTarget.value;
    console.log(posts)
    posts = posts.filter((post) => post.id !== id);
    console.log(posts)
  }

//Event Listeneres 

postForm.addEventListener('submit', handleSubmit);
postsDiv.addEventListener('postUpdated', displayPosts);
postsDiv.addEventListener('postUpdated', mirrorToLocalStorage);

addListenerToDeleteButtons();
restoreFromLocalStorage();


let array = [{id: 15},{id: 19}];

array = array.filter(i => i.id !== 15);

console.log(array);