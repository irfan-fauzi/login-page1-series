//class input yang dimaksud adalah text-box (kotak text tempat memasukan data)
const inputs = document.getElementsByClassName('.input');

function focusOnclick() {
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus')
}