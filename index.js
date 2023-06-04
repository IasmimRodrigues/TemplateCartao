document.querySelector('#card-number-input').oninput = () => {
    document.querySelector('#card-number-box').innerText = document.querySelector('#card-number-input').value;
    let teste = document.querySelector('#card-number-input').value;
    
    
    if (teste == '') {
        let num ='***';
        document.querySelector('#card-number-box').innerText
    }
}