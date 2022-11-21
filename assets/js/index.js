toggleTheme = () => {
    document.body.classList.toggle("light")
}

showAddress = () => {
    if(window.innerWidth>=600){
        return;
    }
    if(document.getElementById('wallet').style.display=='block'){
        document.getElementById('wallet').style.display='none'
    }
    else {
        document.getElementById('wallet').style.display='block'

    }
}