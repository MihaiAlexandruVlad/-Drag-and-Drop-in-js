function onDragStartHandler(event){
	var id = this.id;
	event.dataTransfer.setData('Text', id);
}
function onDragOverHandler(event){
	event.preventDefault();
}
function onDropHandler(event){
	var id = event.dataTransfer.getData('Text');
	var kid = document.getElementById(id);
	this.appendChild(kid);
}
function allowDrop(item){
	
	item.addEventListener('dragover', onDragOverHandler, false);
	item.addEventListener('drop' , onDropHandler, false);
}
function makeItDraggable(item){	
	item.draggable = true;
    item.addEventListener('dragstart',onDragStartHandler, false);	
}

function init(){
	var source,dest,dragList,i;
	source = document.getElementById('source');
	dest = document.getElementById('dest');
	dragList  = document.getElementsByClassName('drag');
	allowDrop(source);
	allowDrop(dest);
	
	for(i=0;i < dragList.length; i++){
		makeItDraggable(dragList[i]);
	}
		
	
}

window.addEventListener('load', init ,false);
