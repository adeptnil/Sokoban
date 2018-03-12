const gameBoard = document.getElementById("gameBoard");
const playerDiv = document.createElement("div");
playerDiv.id = "player"

const map = [
    "  WWWWW ",
    "WWW   W ",
    "WOSB  W ",
    "WWW BOW ",
    "WOWWB W ",
    "W W O WW",
    "WB XBBOW",
    "W   O  W",
    "WWWWWWWW"
  ];


rowLoop:
for (let iRow = 0; iRow < map.length; iRow++) {
    const mapRow = map[iRow];
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    rowDiv.dataset.indexRow = iRow;
    gameBoard.appendChild(rowDiv);

    cellLoop:
    for (let iCell = 0; iCell < mapRow.length; iCell++) {
        const mapCell = mapRow[iCell];
        const cellDiv = document.createElement("div");
        cellDiv.classList.add("cell");
        cellDiv.dataset.indexCell = iCell;
        rowDiv.appendChild(cellDiv);

        cellCheck:
        switch (mapCell) {
            case "W":
                cellDiv.classList.add("wall");
                break cellCheck;
            case " ":
                cellDiv.classList.add("open");
                break cellCheck;
            case "O":
                cellDiv.classList.add("storage");
                break cellCheck;
            case "B":
                cellDiv.classList.add("box");
                break cellCheck;
            case "X":
                cellDiv.classList.add("storageBegin");
                break cellCheck;
            case "S":
                cellDiv.classList.add("start")
                cellDiv.appendChild(playerDiv);
                break cellCheck;
        }
    }
}
            
document.addEventListener("keydown", (event) => {
  const keyName = event.key;

    if (keyName=="ArrowDown"){
        boxtop+=10;
        }
    if (keyName=="ArrowUp"){
        boxtop-=10;
        }
        document.getElementById("box").style.top = boxtop + "px";


    if (keyName=="ArrowLeft"){
        boxleft-=10;
        }
    if (keyName=="ArrowRight"){
        boxleft+=10;
        }
        document.getElementById("box").style.left = boxleft + "px";
});






// for (var r = 0; r < board.length; r++) {
//     var row = document.createElement("div");
//     row.classList.add("row");

//     for (var c = 0; c < board[r].length; c++) {
//         switch (board[r][c]) {
//             case "F":
//                 var finish = document.createElement("div");
//                 finish.classList.add("finish", "cell", "column");
//                 row.appendChild(finish);
//                 break;
//             case "W":
//                 var wall = document.createElement("div");
//                 wall.classList.add("wall", "cell", "column");
//                 row.appendChild(wall);
//                 break;
//             case "S":
//                 var start = document.createElement("div");
//                 start.classList.add("start", "cell", "column");
//                 row.appendChild(start);
//                 break;
//             case " ":
//                 var empty = document.createElement("div");
//                 empty.classList.add("cell", "column");
//                 row.appendChild(empty);

//         }
//     }
//     gameBoard.appendChild(row)
// }





// 'use strict';

// document.addEventListener('keydown', (event) => {
//     const keyName = event.key;
//     console.log('keydown event\n\n' + 'key: ' + keyName);
//     if (keyName === "ArrowDown") {
//         if (posY < 14 && posY > 0) {
//             if (board[posY + 1][posX] === " ") {
//                 boxtop += 50;
//                 posY += 1;
//                 document.getElementById("player").style.top = boxtop + "px";
//             }
//         } if (board[posY + 1][posX] === "F") {
//             winningPos = true;
//         }
//     }
//     //

//     if (keyName === "ArrowUp") {
//         if (posY < 14 && posY > 0) {
//             if (board[posY - 1][posX] === " ") {
//                 boxtop -= 50;
//                 posY -= 1;
//                 document.getElementById("player").style.top = boxtop + "px";
//             }
//         }
//         if (board[posY - 1][posX] === "F") {
//             winningPos = true;
//         }

//     }
//     //

//     if (keyName === "ArrowRight") {
//         if (posX < 21 && posX >= 0) {
//             if (board[posY][posX + 1] === " ") {
//                 posX += 1;
//                 boxleft += 50;
//                 document.getElementById("player").style.left = boxleft + "px";
//             }
//         } 
//         if (board[posY][posX + 1] === "F") { 
//             winningPos = true;
//         }

//     }
//     //

//     if (keyName === "ArrowLeft") {
//         if (posX < 21 && posX >= 0) {
//             if (board[posY][posX - 1] === " ") {
//                 posX -= 1;
//                 boxleft -= 50;
//                 document.getElementById("player").style.left = boxleft + "px";
//             }
//         }
//         if (board[posY][posX - 1] === "F") {
//             winningPos = true;
//         }
//     }
  
//          if (winningPos) {
//             alert("You win!");

            
//         }
//     }  
// );
