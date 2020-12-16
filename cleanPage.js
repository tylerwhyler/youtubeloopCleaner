document.addEventListener("DOMContentLoaded", () => {
    let cleanPageButton = document.getElementById('cleanPage');
    cleanPageButton.addEventListener('click', () => {
        chrome.tabs.executeScript({
            code: `document.getElementsByClassName('white')[0].remove();
                   document.getElementsByClassName('btn-group-wrap')[1].remove();
                   document.getElementsByClassName('container')[0].remove();
                   document.getElementsByClassName('container')[1].remove();
                   document.getElementsByClassName('cc_banner')[0].remove();
                   document.getElementsByClassName('center-block')[0].remove();
                   document.getElementsByClassName('center-block')[1].remove();
                   document.getElementsByClassName('top-left')[0].remove();
                   document.getElementsByClassName('slider-selection')[0].remove();
                   document.querySelectorAll('.slider')[0].remove();
                   document.getElementById('footer').remove();
                   document.querySelector("body").style.backgroundColor = "black";
                   document.querySelector("li").style.color = "black";`
        })
    })
})