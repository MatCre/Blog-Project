/*eslint-disable*/
export function Gallery(gallery) {
    if (!gallery) {
      throw new Error('No Gallery Found');
    }
    this.gallery = gallery;
    // select the elements we need
    this.images = Array.from(gallery.querySelectorAll('img'));
    this.modal = document.querySelector('.modal');
    this.prevButton = this.modal.querySelector('.prev');
    this.nextButton = this.modal.querySelector('.next');
  
    //bind our methods to the instance when we need them 
  
  this.showNextImage = this.showNextImage.bind(this);
  this.showPrevImage = this.showPrevImage.bind(this);
  this.handleKeyUp = this.handleKeyUp.bind(this);
  this.handleClickOutside = this.handleClickOutside.bind(this);
  
    
    /*eslint-disable*/
    //These are our event listenres
    this.images.forEach(image => image.addEventListener('click', (e) => this.showImage(e.currentTarget)));
  
    //loop over each image
    this.images.forEach(image => {
        //attatch an event listener for each image 
        image.addEventListener('keyup', e => {
            //when that is key uped check if that key was enter if it was show that image
            if(e.key === 'Enter') {
                this.showImage(e.currentTarget);
            }
        })
    })
  
    this.modal.addEventListener('click', this.handleClickOutside);
   
    /* eslint-enable */
  }