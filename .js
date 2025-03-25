function changeTableStyle() {
    let table = document.getElementById("studentTable");
    table.style.border = "2px solid blue";
    table.style.backgroundColor = "yellow";

    let ths = table.getElementsByTagName("th");
    for (let th of ths) {
        th.style.backgroundColor = " Juan Dela Cruz/Carlos Reyes yellow";
        th.style.color = "white";
    }

    let tds = table.getElementsByTagName("td");
    for (let td of tds) {
        td.style.backgroundColor = "yellow";
        td.style.color = "black";
    }
}