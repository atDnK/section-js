let div = document.createElement("div");

div.innerHTML = "<p>Create element</p>";

//append child
document.body.appendChild(div);

// clone child
let p = div.cloneNode(true)

document.body.appendChild(p);

// remove child
document.body.removeChild(p);