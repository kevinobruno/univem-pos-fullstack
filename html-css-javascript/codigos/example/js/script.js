function domTree() {
    var element = document.documentElement.lastChild;
    alert('Eu sou o nó: ' + element.nodeName);

    var anotherElement = document.getElementsByTagName('h1')[0];
    alert('Eu sou o nó: ' + anotherElement.nodeName);

    var child = anotherElement.firstChild;
    alert('Eu sou o nó: ' + child.nodeName);
}
