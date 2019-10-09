function addingEventListener() {
    console.log('before get element')
    const input = document.getElementById('input');
    input.addEventListener('click', function(event) {
        alert('I was clicked!');
});
}
