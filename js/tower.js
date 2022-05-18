class Tower {
    constructor(type, position) {
        this.type = type;
        this.position = position;

        this.projectiles = [];
        this.currentReload = 0;
        this.level = 1;

        this.setStats(type);
    }

    tick(enemies) {
        // Falls das Delay für das Nachladen vorüber ist, soll überprüft werden, ob geschossen werden kann
        if(this.currentReload <= 0) {
            if(this.shoot(enemies)) { // Schiessen, falls möglich
                this.currentReload = this.reloadTime; // Delay für das Nachladen zurücksetzen
            }
        }

        // Delay für das Nachladen runterzählen
        this.currentReload--;

        // Game loop für die Projektile
        this.projectiles.forEach(projectile => {
            projectile.tick(enemies);
        });

        // Alle zerstörten Projektile entfernen
        var removable = [];
        this.projectiles.forEach(projectile => {
            if(projectile.dead) removable.push(projectile);
        });

        removable.forEach(remove => {
            for(var i = 0; i < this.projectiles.length; i++){ 
                if (this.projectiles[i] == remove) {
                    this.projectiles.splice(i, 1); 
                    i--;
                }
            }
        });
    }

    shoot(enemies) {
        var firstEnemy;
        var enemyFound = false;

        enemies.forEach(enemy => {
            // Abstand zwischen Turm und Gegner berechnen
            var distanceBetween = Math.sqrt(Math.pow(Math.abs(this.position[0] - enemy.position[0]), 2) + Math.pow(Math.abs(this.position[1] - enemy.position[1]), 2));
            if(distanceBetween <= this.range) {
                if(!enemyFound) { // Falls der Abstand genug klein ist und noch kein Gegner gefunden wurde, wird dieser Gegner als Ziel ausgewählt
                    enemyFound = true;
                    firstEnemy = enemy;
                }
            }
        });

        if(enemyFound) {
            // Falls ein Gegner gefunden wurde, soll ein Projektil verschossen werden
            this.projectiles.push(new Projectile(this.type + this.level, [this.position[0], this.position[1]], firstEnemy));

            return true;
        } else return false;
    }

    upgrade() {
        this.level++;
        this.setStats(this.type);
    }

    setStats(type) {
        // Setzt die Werte des Turms je nach Typ
        switch(type + this.level) {
            case "shooter1":
                this.reloadTime = 120;
                this.color = "rgb(0, 240, 30)";
                this.range = 180;
                this.outline = "rgb(0, 0, 0)";
                this.lineThickness = 1;
                break;
            case "shooter2":
                this.reloadTime = 60;
                this.color = "rgb(0, 240, 30)";
                this.range = 240;
                this.outline = "rgb(120, 120, 120)";
                this.lineThickness = 3;
                break;
            case "shooter3":
                this.reloadTime = 40;
                this.color = "rgb(0, 240, 30)";
                this.range = 300;
                this.outline = "rgb(255, 255, 10)";
                this.lineThickness = 3;
                break;
            case "shooter4":
                this.reloadTime = 30;
                this.color = "rgb(0, 240, 30)";
                this.range = 300;
                this.outline = "rgb(0, 255, 255)";
                this.lineThickness = 3;
                break;
            case "shooter5":
                this.reloadTime = 30;
                this.color = "rgb(0, 240, 30)";
                this.range = 360;
                this.outline = "rgb(180, 0, 255)";
                this.lineThickness = 3;
                break;
            case "bomb1":
                this.reloadTime = 240;
                this.color = "rgb(40, 40, 40)";
                this.range = 120;
                this.outline = "rgb(0, 0, 0)";
                this.lineThickness = 1;
                break;
            case "bomb2":
                this.reloadTime = 160;
                this.color = "rgb(40, 40, 40)";
                this.range = 120;
                this.outline = "rgb(120, 120, 120)";
                this.lineThickness = 3;
                break;
            case "bomb3":
                this.reloadTime = 80;
                this.color = "rgb(40, 40, 40)";
                this.range = 120;
                this.outline = "rgb(255, 255, 10)";
                this.lineThickness = 3;
                break;
            case "bomb4":
                this.reloadTime = 80;
                this.color = "rgb(40, 40, 40)";
                this.range = 240;
                this.outline = "rgb(0, 255, 255)";
                this.lineThickness = 3;
                break;
            case "bomb5":
                this.reloadTime = 60;
                this.color = "rgb(40, 40, 40)";
                this.range = 360;
                this.outline = "rgb(180, 0, 255)";
                this.lineThickness = 3;
                break;
            case "sniper1":
                this.reloadTime = 240;
                this.color = "rgb(80, 150, 40)";
                this.range = 360;
                this.outline = "rgb(0, 0, 0)";
                this.lineThickness = 1;
                break;
            case "sniper2":
                this.reloadTime = 200;
                this.color = "rgb(80, 150, 40)";
                this.range = 360;
                this.outline = "rgb(120, 120, 120)";
                this.lineThickness = 3;
                break;
            case "sniper3":
                this.reloadTime = 160;
                this.color = "rgb(80, 150, 40)";
                this.range = 360;
                this.outline = "rgb(255, 255, 10)";
                this.lineThickness = 3;
                break;
            case "sniper4":
                this.reloadTime = 120;
                this.color = "rgb(80, 150, 40)";
                this.range = 420;
                this.outline = "rgb(0, 255, 255)";
                this.lineThickness = 3;
                break;
            case "sniper5":
                this.reloadTime = 80;
                this.color = "rgb(80, 150, 40)";
                this.range = 720;
                this.outline = "rgb(180, 0, 255)";
                this.lineThickness = 3;
                break;
            case "minigun1":
                this.reloadTime = 6;
                this.color = "rgb(200, 200, 200)";
                this.range = 240;
                this.outline = "rgb(0, 0, 0)";
                this.lineThickness = 1;
                break;
            case "minigun2":
                this.reloadTime = 5;
                this.color = "rgb(200, 200, 200)";
                this.range = 240;
                this.outline = "rgb(120, 120, 120)";
                this.lineThickness = 3;
                break;
            case "minigun3":
                this.reloadTime = 4;
                this.color = "rgb(200, 200, 200)";
                this.range = 300;
                this.outline = "rgb(255, 255, 10)";
                this.lineThickness = 3;
                break;
            case "minigun4":
                this.reloadTime = 3;
                this.color = "rgb(200, 200, 200)";
                this.range = 300;
                this.outline = "rgb(0, 255, 255)";
                this.lineThickness = 3;
                break;
            case "minigun5":
                this.reloadTime = 1;
                this.color = "rgb(200, 200, 200)";
                this.range = 360;
                this.outline = "rgb(180, 0, 255)";
                this.lineThickness = 3;
                break;
            case "plasma canon1":
                this.reloadTime = 360;
                this.color = "rgb(0, 20, 160)";
                this.range = 120;
                this.outline = "rgb(0, 0, 0)";
                this.lineThickness = 1;
                break;
            case "plasma canon2":
                this.reloadTime = 300;
                this.color = "rgb(0, 20, 160)";
                this.range = 120;
                this.outline = "rgb(120, 120, 120)";
                this.lineThickness = 3;
                break;
            case "plasma canon3":
                this.reloadTime = 240;
                this.color = "rgb(0, 20, 160)";
                this.range = 120;
                this.outline = "rgb(255, 255, 10)";
                this.lineThickness = 3;
                break;
            case "plasma canon4":
                this.reloadTime = 200;
                this.color = "rgb(0, 20, 160)";
                this.range = 120;
                this.outline = "rgb(0, 255, 255)";
                this.lineThickness = 3;
                break;
            case "plasma canon5":
                this.reloadTime = 200;
                this.color = "rgb(0, 20, 160)";
                this.range = 180;
                this.outline = "rgb(180, 0, 255)";
                this.lineThickness = 3;
                break;
            case "laser1":
                this.reloadTime = 16;
                this.color = "rgb(255, 80, 0)";
                this.range = 300;
                this.outline = "rgb(0, 0, 0)";
                this.lineThickness = 1;
                break;
            case "laser2":
                this.reloadTime = 10;
                this.color = "rgb(255, 80, 0)";
                this.range = 360;
                this.outline = "rgb(120, 120, 120)";
                this.lineThickness = 3;
                break;
            case "laser3":
                this.reloadTime = 8;
                this.color = "rgb(255, 80, 0)";
                this.range = 420;
                this.outline = "rgb(255, 255, 10)";
                this.lineThickness = 3;
                break;
            case "laser4":
                this.reloadTime = 7;
                this.color = "rgb(255, 80, 0)";
                this.range = 480;
                this.outline = "rgb(0, 255, 255)";
                this.lineThickness = 3;
                break;
            case "laser5":
                this.reloadTime = 5;
                this.color = "rgb(255, 80, 0)";
                this.range = 600;
                this.outline = "rgb(180, 0, 255)";
                this.lineThickness = 3;
                break;
        }
    }

    draw() {
        // Turm zeichnen
        c.beginPath();
        c.fillStyle = this.color;
        c.strokeStyle = this.outline;
        c.lineWidth = this.lineThickness;
        c.fillRect(this.position[0], this.position[1], 50, 50);
        c.strokeRect(this.position[0], this.position[1], 50, 50);
    }

    drawProjectiles() {
        // Alle Projektile für diesen Turm zeichnen
        this.projectiles.forEach(projectile => {
            projectile.draw();
        });
    }
}