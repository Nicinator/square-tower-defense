class Projectile {
    constructor(type, position, target) {
        this.type = type;
        this.position = position;
        this.target = target;

        this.dead = false;

        // Projektile je nach Typ anders erstellen
        switch(type) {
            case "shooter1":
                this.speed = 1.5;
                this.lifespan = 180;
                this.color = "rgb(200, 100, 0)";
                this.damage = 1;
                this.size = 30;
                this.hitRange = 30;
                this.pierce = 2;
                this.damageDelay = 40;
                this.outline = "rgb(0, 0, 0)";
                this.lineThickness = 1;
                break;
            case "shooter2":
                this.speed = 4.8;
                this.lifespan = 180;
                this.color = "rgb(200, 100, 0)";
                this.damage = 2;
                this.size = 30;
                this.hitRange = 30;
                this.pierce = 2;
                this.damageDelay = 20;
                this.outline = "rgb(120, 120, 120)";
                this.lineThickness = 3;
                break;
            case "shooter3":
                this.speed = 7.2;
                this.lifespan = 200;
                this.color = "rgb(200, 100, 0)";
                this.damage = 4;
                this.size = 30;
                this.hitRange = 30;
                this.pierce = 4;
                this.damageDelay = 10;
                this.outline = "rgb(255, 255, 10)";
                this.lineThickness = 3;
                break;
            case "shooter4":
                this.speed = 15;
                this.lifespan = 200;
                this.color = "rgb(200, 100, 0)";
                this.damage = 8;
                this.size = 50;
                this.hitRange = 50;
                this.pierce = 6;
                this.damageDelay = 8;
                this.outline = "rgb(0, 255, 255)";
                this.lineThickness = 3;
                break;
            case "shooter5":
                this.speed = 18;
                this.lifespan = 200;
                this.color = "rgb(200, 100, 0)";
                this.damage = 14;
                this.size = 50;
                this.hitRange = 50;
                this.pierce = 12;
                this.damageDelay = 6;
                this.outline = "rgb(180, 0, 255)";
                this.lineThickness = 3;
                break;
            case "bomb1":
                this.speed = 0;
                this.lifespan = 1;
                this.color = "rgb(230, 110, 0)";
                this.damage = 1;
                this.size = 100;
                this.hitRange = 170;
                this.pierce = 20;
                this.damageDelay = 0;
                this.outline = "rgb(0, 0, 0)";
                this.lineThickness = 1;
                break;
            case "bomb2":
                this.speed = 0;
                this.lifespan = 1;
                this.color = "rgb(230, 110, 0)";
                this.damage = 1;
                this.size = 100;
                this.hitRange = 170;
                this.pierce = 20;
                this.damageDelay = 0;
                this.outline = "rgb(120, 120, 120)";
                this.lineThickness = 1;
                break;
            case "bomb3":
                this.speed = 0;
                this.lifespan = 1;
                this.color = "rgb(230, 110, 0)";
                this.damage = 1;
                this.size = 100;
                this.hitRange = 170;
                this.pierce = 20;
                this.damageDelay = 0;
                this.outline = "rgb(255, 255, 10)";
                this.lineThickness = 1;
                break;
            case "bomb4":
                this.speed = 0;
                this.lifespan = 3;
                this.color = "rgb(255, 255, 70)";
                this.damage = 1;
                this.size = 300;
                this.hitRange = 450;
                this.pierce = 50;
                this.damageDelay = 0;
                this.outline = "rgb(0, 255, 255)";
                this.lineThickness = 1;
                break;
            case "bomb5":
                this.speed = 0;
                this.lifespan = 10;
                this.color = "rgb(255, 255, 70)";
                this.damage = 2;
                this.size = 450;
                this.hitRange = 1000;
                this.pierce = 100;
                this.damageDelay = 0;
                this.outline = "rgb(180, 0, 255)";
                this.lineThickness = 1;
                break;
            case "sniper1":
                this.speed = 15;
                this.lifespan = 120;
                this.color = "rgb(212, 175, 55)";
                this.damage = 4;
                this.size = 40;
                this.hitRange = 40;
                this.pierce = 20;
                this.damageDelay = 6;
                this.outline = "rgb(0, 0, 0)";
                this.lineThickness = 1;
                break;
            case "sniper2":
                this.speed = 15;
                this.lifespan = 120;
                this.color = "rgb(212, 175, 55)";
                this.damage = 6;
                this.size = 40;
                this.hitRange = 40;
                this.pierce = 25;
                this.damageDelay = 5;
                this.outline = "rgb(120, 120, 120)";
                this.lineThickness = 3;
                break;
            case "sniper3":
                this.speed = 15;
                this.lifespan = 120;
                this.color = "rgb(212, 175, 55)";
                this.damage = 10;
                this.size = 40;
                this.hitRange = 40;
                this.pierce = 30;
                this.damageDelay = 4;
                this.outline = "rgb(255, 255, 10)";
                this.lineThickness = 3;
                break;
            case "sniper4":
                this.speed = 15;
                this.lifespan = 120;
                this.color = "rgb(212, 175, 55)";
                this.damage = 16;
                this.size = 40;
                this.hitRange = 40;
                this.pierce = 40;
                this.damageDelay = 3;
                this.outline = "rgb(0, 255, 255)";
                this.lineThickness = 3;
                break;
            case "sniper5":
                this.speed = 15;
                this.lifespan = 120;
                this.color = "rgb(212, 175, 55)";
                this.damage = 25;
                this.size = 40;
                this.hitRange = 40;
                this.pierce = 50;
                this.damageDelay = 2;
                this.outline = "rgb(180, 0, 255)";
                this.lineThickness = 3;
                break;
            case "minigun1":
                this.speed = 6;
                this.lifespan = 120;
                this.color = "rgb(150, 150, 150)";
                this.damage = 1;
                this.size = 10;
                this.hitRange = 10;
                this.pierce = 1;
                this.damageDelay = 0;
                this.outline = "rgb(0, 0, 0)";
                this.lineThickness = 1;
                break;
            case "minigun2":
                this.speed = 9;
                this.lifespan = 120;
                this.color = "rgb(150, 150, 150)";
                this.damage = 1;
                this.size = 10;
                this.hitRange = 10;
                this.pierce = 1;
                this.damageDelay = 0;
                this.outline = "rgb(120, 120, 120)";
                this.lineThickness = 1;
                break;
            case "minigun3":
                this.speed = 10.8;
                this.lifespan = 120;
                this.color = "rgb(150, 150, 150)";
                this.damage = 2;
                this.size = 10;
                this.hitRange = 10;
                this.pierce = 1;
                this.damageDelay = 0;
                this.outline = "rgb(255, 255, 10)";
                this.lineThickness = 1;
                break;
            case "minigun4":
                this.speed = 14.4;
                this.lifespan = 120;
                this.color = "rgb(150, 150, 150)";
                this.damage = 3;
                this.size = 10;
                this.hitRange = 10;
                this.pierce = 1;
                this.damageDelay = 0;
                this.outline = "rgb(0, 255, 255)";
                this.lineThickness = 1;
                break;
            case "minigun5":
                this.speed = 21.6;
                this.lifespan = 120;
                this.color = "rgb(150, 150, 150)";
                this.damage = 4;
                this.size = 10;
                this.hitRange = 10;
                this.pierce = 1;
                this.damageDelay = 0;
                this.outline = "rgb(180, 0, 255)";
                this.lineThickness = 1;
                break;
            case "plasma canon1":
                this.speed = 0.3;
                this.lifespan = 3600;
                this.color = "rgb(50, 255, 255)";
                this.damage = 1;
                this.size = 50;
                this.hitRange = 70;
                this.pierce = 100;
                this.damageDelay = 4;
                this.outline = "rgb(0, 0, 0)";
                this.lineThickness = 1;
                break;
            case "plasma canon2":
                this.speed = 0.3;
                this.lifespan = 3600;
                this.color = "rgb(50, 255, 255)";
                this.damage = 1;
                this.size = 50;
                this.hitRange = 70;
                this.pierce = 175;
                this.damageDelay = 3;
                this.outline = "rgb(120, 120, 120)";
                this.lineThickness = 3;
                break;
            case "plasma canon3":
                this.speed = 0.3;
                this.lifespan = 3600;
                this.color = "rgb(50, 255, 255)";
                this.damage = 2;
                this.size = 50;
                this.hitRange = 70;
                this.pierce = 175;
                this.damageDelay = 3;
                this.outline = "rgb(255, 255, 10)";
                this.lineThickness = 3;
                break;
            case "plasma canon4":
                this.speed = 0.3;
                this.lifespan = 3600;
                this.color = "rgb(50, 255, 255)";
                this.damage = 2;
                this.size = 50;
                this.hitRange = 70;
                this.pierce = 250;
                this.damageDelay = 2;
                this.outline = "rgb(0, 255, 255)";
                this.lineThickness = 3;
                break;
            case "plasma canon5":
                this.speed = 0.3;
                this.lifespan = 3600;
                this.color = "rgb(50, 255, 255)";
                this.damage = 3;
                this.size = 55;
                this.hitRange = 80;
                this.pierce = 250;
                this.damageDelay = 1;
                this.outline = "rgb(180, 0, 255)";
                this.lineThickness = 3;
                break;
            case "laser1":
                this.speed = 15;
                this.lifespan = 600;
                this.color = "rgb(255, 150, 70)";
                this.damage = 5;
                this.size = 30;
                this.hitRange = 30;
                this.pierce = 5;
                this.damageDelay = 4;
                this.outline = "rgb(0, 0, 0)";
                this.lineThickness = 1;
                break;
            case "laser2":
                this.speed = 18;
                this.lifespan = 600;
                this.color = "rgb(255, 150, 70)";
                this.damage = 6;
                this.size = 30;
                this.hitRange = 30;
                this.pierce = 7;
                this.damageDelay = 4;
                this.outline = "rgb(120, 120, 120)";
                this.lineThickness = 3;
                break;
            case "laser3":
                this.speed = 21;
                this.lifespan = 600;
                this.color = "rgb(255, 150, 70)";
                this.damage = 10;
                this.size = 30;
                this.hitRange = 30;
                this.pierce = 10;
                this.damageDelay = 3;
                this.outline = "rgb(255, 255, 10)";
                this.lineThickness = 3;
                break;
            case "laser4":
                this.speed = 22.8;
                this.lifespan = 600;
                this.color = "rgb(255, 150, 70)";
                this.damage = 15;
                this.size = 30;
                this.hitRange = 30;
                this.pierce = 15;
                this.damageDelay = 2;
                this.outline = "rgb(0, 255, 255)";
                this.lineThickness = 3;
                break;
            case "laser5":
                this.speed = 27;
                this.lifespan = 600;
                this.color = "rgb(255, 150, 70)";
                this.damage = 35;
                this.size = 30;
                this.hitRange = 30;
                this.pierce = 30;
                this.damageDelay = 1;
                this.outline = "rgb(180, 0, 255)";
                this.lineThickness = 3;
                break;
        }

        // Position des Projektils in die Mitte des Turms setzen
        this.position[0] += 25;
        this.position[1] += 25;

        // Abstand zwischen dem anvisierten Gegner berechnen
        var targetDifferenceX = Math.abs(this.position[0] - (target.position[0] + 25));
        var targetDifferenceY = Math.abs(this.position[1] - (target.position[1] + 25));
        var targetDifference = Math.sqrt(Math.pow(targetDifferenceX, 2) + Math.pow(targetDifferenceY, 2));

        // Geschwindigkeit für die X- und die Y- Achse berechnen
        this.velocityX = ((target.position[0] + 25) - this.position[0]) / targetDifference;
        this.velocityY = ((target.position[1] + 25) - this.position[1]) / targetDifference;

        var totalVelocity = Math.sqrt(Math.pow(Math.abs(this.velocityX), 2) + Math.pow(Math.abs(this.velocityY), 2));
        if(totalVelocity > 0) {
            this.velocityX = this.velocityX / totalVelocity;
            this.velocityY = this.velocityY / totalVelocity;
        }

        this.damageCounter = 0;
    }

    tick(enemies) {
        // Überprüfen, ob das Projektil bereits zerstört wurde
        if(!this.dead) {
            // Projektil bewegen
            this.relocate();

            // Überprüfen, ob das Projektil noch intakt ist
            if(this.lifespan > 0 && this.pierce > 0) {
                // Jeden Gegner in der Nähe des Projektils beschädigen
                enemies.forEach(enemy => {
                    // Abstand zwischen Projektil und Gegner berechnen
                    var differenceX = Math.abs(this.position[0] - (enemy.position[0] + 25));
                    var differenceY = Math.abs(this.position[1] - (enemy.position[1] + 25));

                    // Falls der Abstand klein genug ist, Gegner beschädigen
                    if(differenceX < 25 + (this.hitRange / 2) && differenceY < 25 + (this.hitRange / 2)) {
                        // Überprüfen, ob das Projektil den Schaden laut dem damageCounter (Delay) und der Durchschlagskraft ausführen kann
                        if(this.damageCounter <= 0 && this.pierce > 0) {
                            // Durchschlagskraft reduzieren
                            this.pierce--;

                            // Gegner beschädigen
                            enemy.damage(this.damage);

                            // damageCounter zurücksetzen
                            this.damageCounter = this.damageDelay;
                        }
                    }
                });
            } else {
                this.dead = true; // Falls nicht, Projektil zerstören
            }

            // Delay für den Schaden und die Lebensspanne des Projektils runterzählen
            this.lifespan--;
            this.damageCounter--;
        }
    }

    relocate() {
        this.position[0] += this.velocityX * this.speed;
        this.position[1] += this.velocityY * this.speed;
    }

    draw() {
        // Projektil zeichnen
        c.beginPath();
        c.fillStyle = this.color;
        c.strokeStyle = this.outline;
        c.lineWidth = this.lineThickness;
        c.arc(this.position[0], this.position[1], this.size / 2, 0, 2*Math.PI, false);
        c.fill();
        c.stroke();
    }
}