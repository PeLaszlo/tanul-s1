const div=document.createElement('div');
div.innerText="alsó szöveg";
document.body.appendChild(div);
const div2=document.createElement('div');
div2.innerText="felső szöveg";
document.body.insertBefore(div2,document.body.firstChild);