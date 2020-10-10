document.getElementById("submitButton").addEventListener('click', function(e) {
    e.preventDefault()
    
    let imgURL = document.getElementById("image-url").value;
    let topText = document.getElementById("top-text").value;
    let bottomText = document.getElementById("bottom-text").value;
    let checkboxTop = document.getElementById("top-text-color");
    let checkboxBottom = document.getElementById("bottom-text-color");
    
    addImage(imgURL, topText, bottomText, checkboxTop, checkboxBottom);

})


function addImage(imgURL, topText, bottomText, checkboxTop, checkboxBottom) {
    
    const picDiv = document.querySelector('#pics-here');
    const newDiv = document.createElement('div');
    newDiv.style.position = 'relative'
    newDiv.classList.add("image")

    const newPic = document.createElement('img');
    newPic.src = imgURL
    newPic.classList.add("overlay");
    // newPic.style.width = '600px'
    newDiv.appendChild(newPic)
  
    picDiv.append(newDiv)
  

    addText(checkboxTop, checkboxBottom, newDiv, topText, bottomText)
 
}

function addText(checkboxTop, checkboxBottom, newDiv, topText, bottomText) {
    const topTextColor = getColor(checkboxTop);
    const bottomTextColor = getColor(checkboxBottom);

    const topTextText = document.createElement('p')
    topTextText.style.color = topTextColor
    topTextText.innerText = topText
    
    const bottomTextText = document.createElement('p')
    bottomTextText.style.color = bottomTextColor
    bottomTextText.innerText = bottomText

    bottomTextText.style.bottom = '0px'


    const closeButton = document.createElement('img')
    closeButton.src = 'closeButton.png'
    closeButton.classList.add("close-button")
    
    newDiv.appendChild(topTextText)
    newDiv.appendChild(bottomTextText)
    newDiv.appendChild(closeButton)
    
    closeButton.addEventListener('mouseover', function(e) {
        e.target.style.opacity = '100%'

        closeButton.addEventListener('click', function(e) {
            e.target.parentElement.remove()
        })
    })

    closeButton.addEventListener('mouseout', function(e) {
        e.target.style.opacity = '50%'
    })
}


function getColor(location) {
    if (location.checked === false) {
        return '#000000'
    } else {
        return '#ffffff'
    }
}
