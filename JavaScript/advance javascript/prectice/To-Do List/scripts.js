
    function addItem() {
        let addData = document.getElementById('new-task').value
    let hfive = document.createElement('h5')
    let uppr = addData.toUpperCase()
    hfive.innerHTML = uppr

    document.getElementById("in2").append(hfive)
    document.getElementById("new-task").value = ''
        }

    function addItem() {
        let addData = document.getElementById('new-task').value;

    if (addData.trim() !== '') {
        let div = document.createElement('div');
    let hfive = document.createElement('h5');
    let deleteBtn = document.createElement('button');
    let editBtn = document.createElement('button');



    let uppr = addData.toUpperCase();
    hfive.innerHTML = uppr;

    editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    editBtn.onclick = function () {
        let newText = prompt("Edit task:", uppr);
    if (newText !== null) {
        hfive.innerHTML = newText.toUpperCase();
                    }
                };


    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.onclick = function () {
        div.remove();
                };



    // Set inline styles for button and text

    editBtn.style.display = "inline-block";
    hfive.style.display = "inline-block";
    hfive.style.minWidth = "79%";
    editBtn.style.marginLeft="10px";
    deleteBtn.style.display = "inline-block";



    div.appendChild(hfive);
    div.appendChild(deleteBtn);
    div.appendChild(editBtn);
    document.getElementById("in2").appendChild(div);

    document.getElementById("new-task").value = '';
            }

        }