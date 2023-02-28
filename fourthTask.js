const body = document.querySelector("body")

let table = document.createElement('table');
table.border = 1;
table.width = 900;
table.style.borderCollapse = "collapse";


function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

for (let i = 0; i < 3; i++) {
    let n;
    const row = table.insertRow(i);
    switch (i){
        case 0:
            n = 3
            break
        case 1:
            n = 1;
            break;
        case 2:
            n = 2;
    }
    for (let j = 0; j < n; j++) {
        const cell = row.insertCell(j);
        cell.height = 50;
        switch (j){
            case 0:
                if (i === 0){
                    cell.rowSpan = 3
                }
            case 1:
                if (i === 1){
                    cell.colSpan = 3
                    cell.height = 150
                }

        }
        cell.textContent = "0";
        cell.style.textAlign = "center"
        cell.addEventListener("click", function() {
            cell.textContent = parseInt(cell.textContent) + 1;
            const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
                '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
                '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
                '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
                '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
                '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
                '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
                '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
                '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
                '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

            cell.style.backgroundColor = getRandomItem(colors);
        });
    }
}

body.appendChild(table);
