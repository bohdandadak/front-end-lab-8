var rootNode = document.getElementById("root");

structure.forEach(node => rootNode.appendChild(createBranch(node)));

function createBranch(node) {
  let element = document.createElement('div');
  element.className = node.folder ? 'folder' : 'file';

  // add title, clickable
  let title = document.createElement('div');
  title.className = 'title';
  element.appendChild(title);

  // add icon
  let icon = document.createElement('i');
  icon.className = 'material-icons ' + (node.folder ? 'folder' : 'insert_drive_file');
  icon.textContent = node.folder ? 'folder' : 'insert_drive_file';
  title.appendChild(icon);

  // add name
  let name = document.createElement('span');
  name.className = 'name';
  name.textContent = node.title;
  title.appendChild(name);

  // create children, if any
  if (node.folder && node.children) {
    node.expanded = false;
    let children = document.createElement('div');
    children.className = 'children';
    children.style.display = 'none';
    element.appendChild(children);
    title.addEventListener('click', function(event) {
      node.expanded = !node.expanded;
      children.style.display = node.expanded ? 'block' : 'none';
    });
    node.children.forEach(child => children.appendChild(createBranch(child, element)));
  }
  return element;
}