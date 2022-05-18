class Enemy {
    constructor(type, startPosition, startDirection, mapPoints) {
        this.type = type;
        this.position = [startPosition[0]*50, startPosition[0]*50]; // Position in Pixeln statt Koordinaten
        this.direction = startDirection;
        this.mapPoints = mapPoints;
        this.positionOnMap = 1;
        this.alive = false;
        
        // Werte des Gegners je nach Typ setzen
        switch(type) {
            case "red":
                this.lives = 1;
                this.speed = 0.9;
                this.color = "rgb(255, 0, 0)";
                this.outline = "rgb(0, 0, 0)";
                this.lineThickness = 1;
                break;
            case "orange":
                this.lives = 2;
                this.speed = 1.5;
                this.color = "rgb(255, 100, 0)";
                this.outline = "rgb(0, 0, 0)";
                this.lineThickness = 1;
                break;
            case "yellow":
                this.lives = 4;
                this.speed = 2.4;
                this.color = "rgb(255, 255, 0)";
                this.outline = "rgb(0, 0, 0)";
                this.lineThickness = 1;
                break;
            case "green":
                this.lives = 8;
                this.speed = 3.6;
                this.color = "rgb(0, 255, 0)";
                this.outline = "rgb(0, 0, 0)";
                this.lineThickness = 1;
                break;
            case "cyan":
                this.lives = 12;
                this.speed = 5.4;
                this.color = "rgb(0, 255, 255)";
                this.outline = "rgb(0, 0, 0)";
                this.lineThickness = 1;
                break;
            case "blue":
                this.lives = 20;
                this.speed = 7.2;
                this.color = "rgb(0, 0, 255)";
                this.outline = "rgb(0, 0, 0)";
                this.lineThickness = 1;
                break;
            case "pink":
                this.lives = 24;
                this.speed = 10.8;
                this.color = "rgb(255, 0, 255)";
                this.outline = "rgb(0, 0, 0)";
                this.lineThickness = 1;
                break;
            case "lightgray":
                this.lives = 250;
                this.speed = 1.5;
                this.color = "rgb(200, 200, 200)";
                this.outline = "rgb(0, 0, 0)";
                this.lineThickness = 1;
                break;
            case "gray":
                this.lives = 500;
                this.speed = 3;
                this.color = "rgb(100, 100, 100)";
                this.outline = "rgb(255, 255, 255)";
                this.lineThickness = 1;
                break;
            case "black":
                this.lives = 1000;
                this.speed = 6;
                this.color = "rgb(0, 0, 0)";
                this.outline = "rgb(0, 255, 255)";
                this.lineThickness = 3;
                break;
        }
    }

    move() {
        // Wenn der Gegner noch lebt, soll die Bewegung ausgeführt werden
        if(this.alive) {
            // Bewegung je nach Richtung
            switch(this.direction) {
                case "up":
                    this.position[1] -= this.speed; // Bewegung durchführen
                    if(this.position[1] <= this.mapPoints[this.positionOnMap][1] * 50) { // Falls eine Ecke erreicht wurde:
                        this.position[1] = this.mapPoints[this.positionOnMap][1] * 50; // Position des Gegners auf die Ecke setzen
                        if(!this.changeDirection()) return false; // Richtung ändern (Falls es nicht mehr geht, soll false zurückgegeben werden, da der Gegner das Ende erreicht hat)
                    }
                    break;
                case "right":
                    this.position[0] += this.speed;
                    if(this.position[0] >= this.mapPoints[this.positionOnMap][0] * 50) {
                        this.position[0] = this.mapPoints[this.positionOnMap][0] * 50;
                        if(!this.changeDirection()) return false;
                    }
                    break;
                case "down":
                    this.position[1] += this.speed;
                    if(this.position[1] >= this.mapPoints[this.positionOnMap][1] * 50) {
                        this.position[1] = this.mapPoints[this.positionOnMap][1] * 50;
                        if(!this.changeDirection()) return false;
                    }
                    break;
                case "left":
                    this.position[0] -= this.speed;
                    if(this.position[0] <= this.mapPoints[this.positionOnMap][0] * 50) {
                        this.position[0] = this.mapPoints[this.positionOnMap][0] * 50;
                        if(!this.changeDirection()) return false;
                    }
                    break;
            }

            // Zusätzliche Sicherung, dass alle Gegner mit 0 Leben tot sind
            if(this.lives < 1) this.alive = false;
            return true; // Kein Gegner hat das Ziel erreicht
        }
    }

    damage(damageAmount) {
        // Gegner bekommt schaden
        if(damageAmount >= this.lives) {
            // Falls der Schaden grösser ist als die Leben, wird der Gegner sofort getötet
            // Geld hinzufügen
            money += this.lives;
            moneySign.innerHTML = money + "$";

            // Gegner töten
            this.alive = false;
            this.lives = 0;
        } else {
            // Falls nicht, sollen die Leben verringert werden
            this.lives -= damageAmount;

            // Geld hinzufügen
            money += damageAmount;
            moneySign.innerHTML = money + "$";

            // Ändern des Types je nach Anzahl der Leben
            if(this.lives >= 501) {
                this.speed = 6;
                this.color = "rgb(0, 0, 0)";
                this.outline = "rgb(0, 255, 255)";
                this.lineThickness = 3;
            } else if (this.lives >= 251) {
                this.speed = 3;
                this.color = "rgb(100, 100, 100)";
                this.outline = "rgb(255, 255, 255)";
                this.lineThickness = 1;
            } else if (this.lives >= 25) {
                this.speed = 1.5;
                this.color = "rgb(200, 200, 200)";
                this.outline = "rgb(0, 0, 0)";
                this.lineThickness = 1;
            } else if (this.lives >= 21) {
                this.speed = 10.8;
                this.color = "rgb(255, 0, 255)";
                this.outline = "rgb(0, 0, 0)";
                this.lineThickness = 1;
            } else if (this.lives >= 13) {
                this.speed = 7.2;
                this.color = "rgb(0, 0, 255)";
                this.outline = "rgb(0, 0, 0)";
                this.lineThickness = 1;
            } else if (this.lives >= 9) {
                this.speed = 5.4;
                this.color = "rgb(0, 255, 255)";
                this.outline = "rgb(0, 0, 0)";
                this.lineThickness = 1;
            } else if (this.lives >= 5) {
                this.speed = 3.6;
                this.color = "rgb(0, 255, 0)";
                this.outline = "rgb(0, 0, 0)";
                this.lineThickness = 1;
            } else if (this.lives >= 3) {
                this.speed = 2.4;
                this.color = "rgb(255, 255, 0)";
                this.outline = "rgb(0, 0, 0)";
                this.lineThickness = 1;
            } else if (this.lives >= 2) {
                this.speed = 1.5;
                this.color = "rgb(255, 100, 0)";
                this.outline = "rgb(0, 0, 0)";
                this.lineThickness = 1;
            } else {
                this.speed = 0.9;
                this.color = "rgb(255, 0, 0)";
                this.outline = "rgb(0, 0, 0)";
                this.lineThickness = 1;
            }
        }
    }

    changeDirection() {
        // Zum nächsten Abschnitt der Map wechseln
        this.positionOnMap++;
        if(this.positionOnMap == this.mapPoints.length) {
            return false; // Falls der Gegner das Ende erreicht hat, false zurückgeben für "game over"
        } else {
            // Richtung wechseln
            if(this.mapPoints[this.positionOnMap][0] * 50 > this.position[0]) this.direction = "right";
            if(this.mapPoints[this.positionOnMap][0] * 50 < this.position[0]) this.direction = "left";
            if(this.mapPoints[this.positionOnMap][1] * 50 > this.position[1]) this.direction = "down";
            if(this.mapPoints[this.positionOnMap][1] * 50 < this.position[1]) this.direction = "up";
            return true; // Kein Game Over
        }
    }

    draw() {
        // Gegner zeichnen
        c.beginPath();
        c.fillStyle = this.color;
        c.strokeStyle = this.outline;
        c.lineWidth = this.lineThickness;
        c.fillRect(this.position[0], this.position[1], 50, 50);
        c.strokeRect(this.position[0], this.position[1], 50, 50);
    }
}