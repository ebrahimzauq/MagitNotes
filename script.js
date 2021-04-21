// if user add a note, add it to the localstorage
showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click',function(e){
	let addTxt = document.getElementById('addTxt');
	let notes = localStorage.getItem('notes');
	if(notes===null){
		notesObj = [];
	}
	else{
		notesObj = JSON.parse(notes);
	}
	
	notesObj.push(addTxt.value);
	localStorage.setItem("notes", JSON.stringify(notesObj));
	addTxt.value = "";
	showNotes();
});

function showNotes(){
	let notes = localStorage.getItem('notes');
	if(notes===null){
		notesObj = [];
	}
	else{
		notesObj = JSON.parse(notes);
	}
	let html = "";
	notesObj.forEach(function(element , index){
		html +=`<div class="card noteCard mx-2 my-2" style="width: 18rem;">
		  <div class="card-body">
		    <h5 class="card-title">Note ${index + 1}</h5>
		    <p class="card-text">${element}</p>
		    <button id =${index} onclick = "deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
		  </div>
		</div>`;
	});
	let noteElm = document.getElementById('notes');
	if(notesObj.length!=0){
		noteElm.innerHTML = html;
	}
	else{
		noteElm.innerHTML = `Nothing to show! Use "Add a Note" section to add a note`;
	}
}


// function for deleting notes

function deleteNotes(index){
	let notes = localStorage.getItem('notes');
	if(notes===null){
		notesObj = [];
	}
	else{
		notesObj = JSON.parse(notes);
	}
	notesObj.splice(index , 1);
	localStorage.setItem("notes", JSON.stringify(notesObj));
	showNotes();
}


// search functionality

let search = document.getElementById('searchTxt');
search.addEventListener('input', function(){
	let inputVal = search.value;
	let noteCard = document.getElementsByClassName('noteCard');
	Array.from(noteCard).forEach(function(element){
		let cardTxt = element.getElementsByTagName('p')[0].innerText;
		if (cardTxt.includes(inputVal)){
			element.style.display = 'block';
		}
		else{
			element.style.display = 'none';
		}
	})
})