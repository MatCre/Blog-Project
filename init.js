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
        id: Date.now(),
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
    //any displayed posts now need a delete button 
    addDeleteButtons();
}
//Handle the press of a delete button 
function handleDeleteButtonPress(e) {
  console.log(e);
  const id = parseInt(e.target.value);
  console.log(id);
  deletePost(id);
}

function deletePost(id) {
  console.log('DELETING ITEM ', id);
  // updates our items array without this one
  posts = posts.filter((post) => post.id !== id);
  postsDiv.dispatchEvent(new CustomEvent('postUpdated'));
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
      posts.push(...IsPosts)
    } else {
        console.error('no posts');
      }
      postsDiv.dispatchEvent(new CustomEvent('postUpdated'));
    }
//this needs to be a function so i can call it when a new post is added
/*! this is not efficient i dont think because everytime that displayPosts is ran a new event listener
again and if this were on a larger scale which it might become this will need to be changed
*/
function addDeleteButtons() {
      const deleteBtn = document.querySelectorAll('.delete-post');
      deleteBtn.forEach(btn => btn.addEventListener('click', handleDeleteButtonPress));
    }

//Event Listeneres 

postForm.addEventListener('submit', handleSubmit);
postsDiv.addEventListener('postUpdated', mirrorToLocalStorage);
postsDiv.addEventListener('postUpdated', displayPosts);

//get the posts saved in local storage 
restoreFromLocalStorage();
//this needs to run on page load to add listeneres to any buttons on posts retrived from local storage
addDeleteButtons();