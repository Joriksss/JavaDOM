document.querySelectorAll('.cross-button').forEach(button => 
    { button.addEventListener('click', function() 
    { let block = this.parentElement; block.style.display = 'none'; }); });