const addListBtn = document.getElementById('addListBtn');

addListBtn.addEventListener('click', () => {
    const
        inputText.type = 'text';

    addListBtn.parentNode.replaceChild(inputText, addListBtn);
    inputText.focus();

    const saveListBtn = document.createElement('button');
    saveListBtn.type = 'button';
    saveListBtn.textContent = 'Save';
    saveListBtn.classList.add('btn', 'btn-primary', 'btn-sm', 'ms-3');
    inputText.parentNode.replaceChild(saveListBtn, inputText);

});


