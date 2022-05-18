// Canvas und Grid
var canvas = document.getElementById("canvas");
var grid = document.getElementById("grid");
canvas.style.display = "none";
grid.style.display = "none";
var c = canvas.getContext("2d");
var g = grid.getContext("2d");

// HTML-Elemente
var overlay = document.getElementById("overlay");
var upgradeButton = document.getElementById("upgradeButton");
var sellButton = document.getElementById("sellButton");
var moneySign = document.getElementById("moneySign");
var levelSign = document.getElementById("levelSign");
var towerSelector = document.getElementById("towerSelector");

// Variablen
var paused = true;
var money = 50;
var level;
var map;
var invalidSpots = [];
var towers = [];
var nextEnemyCounter = 0;
var gameOver = false;

function startGame() {
    // Spiel starten, falls bereits eine Map ausgewählt wurde
    if(document.getElementById("mapSelector").value != "") {

        // Map erstellen
        map = new Map(document.getElementById("mapSelector").value);
        
        // Map zeichnen
        map.draw();

        // Overlay verstecken
        document.getElementById("mapSelector").style.display = "none";
        document.getElementById("startButton").style.display = "none";
        overlay.style.display = "none";
        canvas.style.display = "unset";
        grid.style.display = "unset";

        // Pausefunktion (mit Escape)
        document.onkeydown = function(e) {
            if(e.keyCode == "27" && !gameOver) {
                if(paused) {
                    // Overlay verstecken
                    overlay.style.display = "none";
                    upgradeButton.style.display = "none";
                    sellButton.style.display = "none";
                    requestAnimationFrame(tick);
                } else {
                    // Overlay zeigen
                    overlay.style.display = "flex";
                }

                paused = !paused;
            }
        }

        // Spiel fortsetzen
        paused = false;

        // Ungültige Punkte für die Platzierung von Türmen setzen basierend auf der Map
        for(var i = 0; i < map.mapPoints.length - 1; i++) {
            for(var x = 0; x < canvas.width / 50; x++) {
                for(var y = 0; y < canvas.height / 50; y++) {
                    if(map.mapPoints[i][0] == x && map.mapPoints[i][1] >= y && map.mapPoints[i + 1][1] <= y) {
                        invalidSpots.push([x * 50, y * 50]);
                    } else if (map.mapPoints[i][0] == x && map.mapPoints[i][1] <= y && map.mapPoints[i + 1][1] >= y) {
                        invalidSpots.push([x * 50, y * 50]);
                    } else if (map.mapPoints[i][1] == y && map.mapPoints[i][0] <= x && map.mapPoints[i + 1][0] >= x) {
                        invalidSpots.push([x * 50, y * 50]);
                    } else if (map.mapPoints[i][1] == y && map.mapPoints[i][0] >= x && map.mapPoints[i + 1][0] <= x) {
                        invalidSpots.push([x * 50, y * 50]);
                    }
                }
            }
        }

        // Level erstellen und starten
        level = new Level(map.mapPoints);
        level.start();

        // Game loop starten
        requestAnimationFrame(tick);
    }
}

// Game loop
function tick() {
    // Wenn der nächste Gegner erschaffen werden kann: Counter zurücksetzen und Gegner erschaffen
    if(nextEnemyCounter < 1) {
        nextEnemyCounter = level.delayBetweenEnemies;
        level.nextEnemy();
    }

    // Counter für das Erschaffen des nächsten Gegners
    nextEnemyCounter--;

    // Gegner bewegen
    if(!level.moveEnemies()) {
        // Wenn die Gegner nicht mehr bewegt werden können, sind sie am Ende der Map angekommen --> Game Over
        paused = true;
        gameOver = true;
        levelSign.innerHTML = "Game Over! (Level "+level.round+")";
    } else {
        // Falls die Gegner noch bewegt werden können
        // Game loop für die Türme
        towers.forEach(tower => {
            tower.tick(level.getAllEnemies()); // Alle Gegner werden den Türmen übergeben
        });

        // Wenn alle Gegner gestorben sind, soll eine neue Runde gestartet werden
        if(level.allEnemiesDead()) {
            level.start();
            nextEnemyCounter = 0;
        }
    }

    // Zeichnen
    c.clearRect(0, 0, canvas.clientWidth, canvas.height);
    map.draw();
    map.drawGrid();

    // Alle lebendigen Gegner zeichnen
    var aliveEnemies = level.getAllEnemies();
    aliveEnemies.forEach(enemy => {
        enemy.draw();
    });

    // Türme zeichnen
    towers.forEach(tower => {
        tower.draw();
    });

    // Projektile zeichnen
    towers.forEach(tower => {
        tower.drawProjectiles();
    });

    // Game loop fortsetzen, falls das Spiel nicht pausiert ist
    if(!paused) requestAnimationFrame(tick);
}

// Turm setzen
canvas.addEventListener("click", function(event) {
    // Position der Maus ermitteln
    var positionX = event.clientX - this.offsetLeft;
    var positionY = event.clientY - this.offsetTop;

    // Position der Maus auf 50 runden
    positionX = Math.floor(positionX / 50) * 50;
    positionY = Math.floor(positionY / 50) * 50;

    // Überprüfen, ob die ausgewählte Position bereits besetzt ist
    var invalid = false;
    invalidSpots.forEach(spot => {
        if(spot[0] == positionX && spot[1] == positionY) invalid = true;
    });

    // Falls alles ok ist, den Turm setzen
    if(!invalid && !gameOver && !paused) {
        // Kosten für den Turm
        var cost = nameToCost(towerSelector.value, 1);

        // Falls genug Geld vorhanden ist, den Turm kaufen
        if(money >= cost) {
            // Geld abziehen
            money -= cost;
            moneySign.innerHTML = money + "$";

            // Neue ungültige Position erstellen
            invalidSpots.push([positionX, positionY]);

            // Turm hinzufügen
            towers.push(new Tower(towerSelector.value, [positionX, positionY]));
        }
    }
});

// Turm verbessern
var towerIndex;
var towerUpgradeCost;
canvas.addEventListener("contextmenu", function(event) {
    // Position der Maus ermitteln
    var positionX = event.clientX - this.offsetLeft;
    var positionY = event.clientY - this.offsetTop;

    // Position der Maus auf 50 runden
    positionX = Math.floor(positionX / 50) * 50;
    positionY = Math.floor(positionY / 50) * 50;

    for(var i = 0; i < towers.length; i++) {
        // Überprüfen, ob sich ein Turm an dieser Position befindet
        if(towers[i].position[0] == positionX && towers[i].position[1] == positionY) {
            // Falls ja, das Spiel pausieren
            paused = true;

            // Kosten für das Upgrade
            towerUpgradeCost = nameToCost(towers[i].type, towers[i].level + 1);
            if(towers[i].level <= 4) {
                // Wenn der Turm noch verbessert werden kann, soll der Knopf für die Verbesserung angezeigt werden
                upgradeButton.style.display = "block";
                upgradeButton.innerHTML = "Verbessern (" + towerUpgradeCost + "$)";
                towerIndex = i + 0; // i + 0 stellt sicher, dass towerIndex eine Kopie von i ist

                // Klick-Funktion für den Knopf
                upgradeButton.onclick = function() {
                    // Falls genug Geld vorhanden ist, den Turm verbessern
                    if(money >= towerUpgradeCost) {
                        // Turm verbessern
                        towers[towerIndex].upgrade();

                        // Geld abziehen
                        money -= towerUpgradeCost;
                        moneySign.innerHTML = money + "$";
                    }
                    
                    // Overlay schliessen und Spiel fortsetzen
                    upgradeButton.style.display = "none";
                    sellButton.style.display = "none";
                    overlay.style.display = "none";
                    paused = false;
                    requestAnimationFrame(tick);
                }
            }
            
            // Overlay anzeigen und Verkaufsknopf hinzufügen
            overlay.style.display = "flex";
            sellButton.style.display = "block";
            towerIndex = i + 0; // i + 0 stellt sicher, dass towerIndex eine Kopie von i ist

            // Klick-Funktion für den Knopf
            sellButton.onclick = function() {
                // Die Position des Turms freigeben
                for(var j = 0; j < invalidSpots.length; j++) {
                    if (towers[towerIndex].position[0] == invalidSpots[j][0] && towers[towerIndex].position[1] == invalidSpots[j][1]) {
                        invalidSpots.splice(j, 1); 
                        j--;
                    }
                }

                // Turm entfernen
                towers.splice(towerIndex, 1);
            
                // Overlay schliessen und Spiel fortsetzen
                upgradeButton.style.display = "none";
                sellButton.style.display = "none";
                overlay.style.display = "none";
                paused = false;
                requestAnimationFrame(tick);
            }
        }
    }

    // Verhindert das Menü beim Rechtsklick
    event.preventDefault();
});

// Hier werden die Preise für Türme und Upgrades abgespeichert
function nameToCost(name, level) {
    var cost;
    switch(name) {
        case "shooter":
            if(level == 1) cost = 25;
            if(level == 2) cost = 150;
            if(level == 3) cost = 750;
            if(level == 4) cost = 1800;
            if(level == 5) cost = 4000;
            break;
        case "bomb":
            if(level == 1) cost = 50;
            if(level == 2) cost = 80;
            if(level == 3) cost = 100;
            if(level == 4) cost = 1000;
            if(level == 5) cost = 5000;
            break;
        case "sniper":
            if(level == 1) cost = 150;
            if(level == 2) cost = 300;
            if(level == 3) cost = 800;
            if(level == 4) cost = 3000;
            if(level == 5) cost = 7500;
            break;
        case "minigun":
            if(level == 1) cost = 500;
            if(level == 2) cost = 350;
            if(level == 3) cost = 1250;
            if(level == 4) cost = 4000;
            if(level == 5) cost = 8000;
            break;
        case "plasma canon":
            if(level == 1) cost = 750;
            if(level == 2) cost = 1000;
            if(level == 3) cost = 2000;
            if(level == 4) cost = 5000;
            if(level == 5) cost = 15000;
            break;
        case "laser":
            if(level == 1) cost = 3500;
            if(level == 2) cost = 5000;
            if(level == 3) cost = 12000;
            if(level == 4) cost = 40000;
            if(level == 5) cost = 100000;
            break;
    }
    return cost;
}