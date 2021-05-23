let addtaskinput = document.getElementById("addtaskinput");
let addtaskbtn = document.getElementById("addtaskbtn");

addtaskbtn.addEventListener("click", function(){
    alert("kjdsfgjdsv")
    addtaskinputval = addtaskinput.value;
    let webtask = localStorage.getItem("localtask");
    if (webtask == null) {
        taskobj = [];
    }
    else {
        taskobj = JSON.parse(webtask);
    }
    taskobj.push(addtaskinputval);
    localStorage.setItem("localtask", JSON.stringify(taskobj));
    showtask();
})

function showtask() {
    let webtask = localStorage.getItem("localtask");
    if (webtask == null) {
        taskobj = [];
    }
    else {
        taskobj = JSON.parse(webtask);
    }
    let html = '';
    let addtasklist = document.getElementById("addtasklist")
    taskobj.forEach((item, index) => {
        html += `   
                    <tr>
                    <td>{item}</td>
                    <td >6666</td>
                    <td >000000000</td>
                    </tr>`;
    });
    addtasklist.innerHTML = html;
}