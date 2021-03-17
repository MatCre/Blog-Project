const imageButton = document.querySelector('.addImage')

function addImage() {
    
    const newImg = document.createElement('img');
    console.log(newImg);
    newImg.src = 'https://picsum.photos/200';
    newImg.alt = 'Cool Pic'
    const sideMenuInsert = document.querySelector('.sideMenu');
    sideMenuInsert.appendChild(newImg);
    
}

imageButton.addEventListener('click',addImage ,{once: true});

