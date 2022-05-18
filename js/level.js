class Level {
    constructor(mapPoints) {
        this.mapPoints = mapPoints;
        this.enemies = [];
        this.startPosition = mapPoints[0]; // Startposition der Gegner

        // Startrichtung festlegen
        if (mapPoints[0][0] < mapPoints[1][0]) this.startDirection = "right";
        if (mapPoints[0][0] > mapPoints[1][0]) this.startDirection = "left";
        if (mapPoints[0][1] < mapPoints[1][1]) this.startDirection = "down";
        if (mapPoints[0][1] > mapPoints[1][1]) this.startDirection = "up";

        // Runde auf 0 setzen
        this.round = 0;
    }

    start() {
        // Neue Runde starten
        this.round++;
        this.currentEnemy = -1;

        // Alle vorherigen Gegner löschen
        this.enemies = [];

        // Zufällige Anzahl Gegner generieren
        var enemyCount = Math.floor(Math.random() * (20 + this.round) + 1);

        // Zufälligen Abstand zwischen den Gegnern generieren
        if(this.round < 70) this.delayBetweenEnemies = Math.floor(Math.random() * (1 / (this.round + 20)) * 2500 + 8);
        else if(this.round < 100) this.delayBetweenEnemies = Math.floor(Math.random() * 50 + 3);
        else this.delayBetweenEnemies = Math.floor(Math.random() * 8 + 1);

        // Für jeden Gegner einzeln den Typ zufällig generieren
        for(var i = 0; i < enemyCount; i++) {
            var enemyType = Math.floor(Math.random() * ((this.round + 5) / 10) + 1);
            if(enemyType > 10) enemyType = 10; // Falls die Zahl zu hoch ist, wird sie auf das Maximum gesetzt

            var enemyTypeName;
            switch(enemyType) {
                case 1:
                    enemyTypeName = "red";
                    break;
                case 2:
                    enemyTypeName = "orange";
                    break;
                case 3:
                    enemyTypeName = "yellow";
                    break;
                case 4:
                    enemyTypeName = "green";
                    break;
                case 5:
                    enemyTypeName = "cyan";
                    break;
                case 6:
                    enemyTypeName = "blue";
                    break;
                case 7:
                    enemyTypeName = "pink";
                    break;
                case 8:
                    enemyTypeName = "lightgray";
                    break;
                case 9:
                    enemyTypeName = "gray";
                    break;
                case 10:
                    enemyTypeName = "black";
                    break;
            }

            // Gegner erschaffen
            this.enemies.push(new Enemy(enemyTypeName, this.startPosition, this.startDirection, this.mapPoints));
        }

        // Neue Runde anzeigen
        levelSign.innerHTML = "Level: " + this.round;
    }

    moveEnemies() {
        if(this.enemies.length > this.currentEnemy) { // Falls der neuste Gegner noch verfügbar ist, Gegner bewegen
            for(var i = 0; i <= this.currentEnemy; i++) { // Schleife für alle bereits erschaffenen Gegner durchlaufen
                if(this.enemies[i].lives > 0) { // Überprüfen, ob der Gegner noch lebt
                    if(!this.enemies[i].move()) return false; // Falls der Gegner das Ende erreicht hat, soll das Spiel enden
                }
            }
        }
        return true; // Kein Gegner hat das Ziel erreicht
    }

    nextEnemy() {
        // Nächsten Gegner auswählen
        this.currentEnemy++;
        if(this.enemies.length > this.currentEnemy) {
            // Falls dieser Gegner noch vorhanden ist, Gegner erschaffen
            this.enemies[this.currentEnemy].alive = true;
            return true;
        } else {
            // Falls nicht, Zahl zurücksetzen und false zurückgeben
            this.currentEnemy--;
            return false;
        }
    }

    allEnemiesDead() {
        // Überprüft, ob alle Gegner bereits erschaffen wurden
        if(this.currentEnemy < this.enemies.length - 1) return false;

        // Wenn ein Gegner noch lebt, false zurückgeben, sonst true
        var allDead = true;
        this.enemies.forEach(enemy => {
            if(enemy.alive) allDead = false;
        });

        return allDead;
    }

    getAllEnemies() {
        var aliveEnemies = [];

        // Alle lebendigen Gegner der Liste hinzufügen
        for(var i = 0; i <= this.currentEnemy; i++) {
            if(this.enemies[i].alive) aliveEnemies.push(this.enemies[i]);
        }

        return aliveEnemies;
    }
}