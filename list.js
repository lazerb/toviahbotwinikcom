const container = document.getElementById('grid-container');
function createBox(image, label, message, url) {
    const iconElem = document.createElement('img');
    iconElem.className = 'gridIcon';
    iconElem.src = image;
    iconElem.style = "clip:inherit;max-height:100%"

    const nameElem = document.createElement('h2');
    nameElem.className = 'gridTitle';
    nameElem.textContent = label;

    const bodyElem = document.createElement('div');
    bodyElem.className = 'gridAbout';
    bodyElem.textContent = message;

    const gridElem = document.createElement('div');
    gridElem.className = 'gridElement';
    gridElem.appendChild(iconElem);

    const hoverElem = document.createElement('div');
    hoverElem.className = 'hoverElement';
    hoverElem.onclick = function link() { location.href = url; };

    hoverElem.appendChild(nameElem);
    hoverElem.appendChild(bodyElem);

    gridElem.appendChild(hoverElem);

    container.appendChild(gridElem);
}
for (var i = 0; i < 7; i++) {
    createBox('https://mir-s3-cdn-cf.behance.net/project_modules/fs/32bd9771519215.5bc7e88e4d909.jpg', 'UA Mobile', 'A simple project', 'http://google.com');
}