class Map {
    constructor(mapName) {
        this.mapPoints = [];
        this.mapParts = [];
        this.size = [];
        this.canvas = document.getElementById("canvas");
        this.grid = document.getElementById("grid");

        // Punkte der Map je nach Name ändern
        if(mapName == "Startup") {
            // Eckpunkte
            this.mapPoints.push([0, 0]);
            this.mapPoints.push([0, 3]);
            this.mapPoints.push([2, 3]);
            this.mapPoints.push([2, 7]);
            this.mapPoints.push([10, 7]);
            this.mapPoints.push([10, 2]);
            this.mapPoints.push([12, 2]);
            this.mapPoints.push([12, 10]);
            this.mapPoints.push([18, 10]);
            this.mapPoints.push([18, 8]);
            this.mapPoints.push([24, 8]);
            this.mapPoints.push([24, 16]);
            this.mapPoints.push([36, 16]);

            // Streckenabschnitte
            this.mapParts.push(new MapPart([0, 0], [0, 3]));
            this.mapParts.push(new MapPart([0, 3], [2, 3]));
            this.mapParts.push(new MapPart([2, 3], [2, 7]));
            this.mapParts.push(new MapPart([2, 7], [10, 7]));
            this.mapParts.push(new MapPart([10, 7], [10, 2]));
            this.mapParts.push(new MapPart([10, 2], [12, 2]));
            this.mapParts.push(new MapPart([12, 2], [12, 10]));
            this.mapParts.push(new MapPart([12, 10], [18, 10]));
            this.mapParts.push(new MapPart([18, 10], [18, 8]));
            this.mapParts.push(new MapPart([18, 8], [24, 8]));
            this.mapParts.push(new MapPart([24, 8], [24, 16]));
            this.mapParts.push(new MapPart([24, 16], [36, 16]));

            // Grösse des Canvas und des Gitters setzen
            this.canvas.width = "1850";
            this.canvas.height = "850";
            this.grid.width = "1850";
            this.canvas.style.marginLeft = "-1851px";
            this.grid.height = "850";
            this.size = [1850, 850];

        } else if(mapName == "Kreisel") {
            this.mapPoints.push([8, 8]);
            this.mapPoints.push([8, 0]);
            this.mapPoints.push([0, 0]);
            this.mapPoints.push([0, 8]);
            this.mapPoints.push([6, 8]);
            this.mapPoints.push([6, 2]);
            this.mapPoints.push([2, 2]);
            this.mapPoints.push([2, 6]);
            this.mapPoints.push([4, 6]);
            this.mapPoints.push([4, 4]);

            this.mapParts.push(new MapPart([8, 8], [8, 0]));
            this.mapParts.push(new MapPart([8, 0], [0, 0]));
            this.mapParts.push(new MapPart([0, 0], [0, 8]));
            this.mapParts.push(new MapPart([0, 8], [6, 8]));
            this.mapParts.push(new MapPart([6, 8], [6, 2]));
            this.mapParts.push(new MapPart([6, 2], [2, 2]));
            this.mapParts.push(new MapPart([2, 2], [2, 6]));
            this.mapParts.push(new MapPart([2, 6], [4, 6]));
            this.mapParts.push(new MapPart([4, 6], [4, 4]));

            this.canvas.width = "450";
            this.canvas.height = "450";
            this.grid.width = "450";
            this.canvas.style.marginLeft = "-451px";
            this.grid.height = "450";
            this.size = [450, 450];

        } else if(mapName == "Schlangen") {
            this.mapPoints.push([16, 24]);
            this.mapPoints.push([16, 5]);
            this.mapPoints.push([32, 5]);
            this.mapPoints.push([32, 8]);
            this.mapPoints.push([22, 8]);
            this.mapPoints.push([22, 10]);
            this.mapPoints.push([36, 10]);
            this.mapPoints.push([36, 3]);
            this.mapPoints.push([2, 3]);
            this.mapPoints.push([2, 11]);
            this.mapPoints.push([10, 11]);
            this.mapPoints.push([10, 13]);
            this.mapPoints.push([2, 13]);
            this.mapPoints.push([2, 15]);
            this.mapPoints.push([12, 15]);
            this.mapPoints.push([12, 1]);
            this.mapPoints.push([19, 1]);
            this.mapPoints.push([19, 15]);
            this.mapPoints.push([36, 15]);

            this.mapParts.push(new MapPart([16, 24], [16, 5]));
            this.mapParts.push(new MapPart([16, 5], [32, 5]));
            this.mapParts.push(new MapPart([32, 5], [32, 8]));
            this.mapParts.push(new MapPart([32, 8], [22, 8]));
            this.mapParts.push(new MapPart([22, 8], [22, 10]));
            this.mapParts.push(new MapPart([22, 10], [36, 10]));
            this.mapParts.push(new MapPart([36, 10], [36, 3]));
            this.mapParts.push(new MapPart([36, 3], [2, 3]));
            this.mapParts.push(new MapPart([2, 3], [2, 11]));
            this.mapParts.push(new MapPart([2, 11], [10, 11]));
            this.mapParts.push(new MapPart([10, 11], [10, 13]));
            this.mapParts.push(new MapPart([10, 13], [2, 13]));
            this.mapParts.push(new MapPart([2, 13], [2, 15]));
            this.mapParts.push(new MapPart([2, 15], [12, 15]));
            this.mapParts.push(new MapPart([12, 15], [12, 1]));
            this.mapParts.push(new MapPart([12, 1], [19, 1]));
            this.mapParts.push(new MapPart([19, 1], [19, 15]));
            this.mapParts.push(new MapPart([19, 15], [36, 15]));

            this.canvas.width = "1850";
            this.canvas.height = "850";
            this.grid.width = "1850";
            this.canvas.style.marginLeft = "-1851px";
            this.grid.height = "850";
            this.size = [1850, 850];

        } else if(mapName == "Quadratboss") {
            this.mapPoints.push([1, 1]);
            this.mapPoints.push([10, 1]);
            this.mapPoints.push([10, 10]);
            this.mapPoints.push([1, 10]);
            this.mapPoints.push([1, 1]);

            this.mapParts.push(new MapPart([1, 1], [10, 1]));
            this.mapParts.push(new MapPart([10, 1], [10, 10]));
            this.mapParts.push(new MapPart([10, 10], [1, 10]));
            this.mapParts.push(new MapPart([1, 10], [1, 1]));

            this.canvas.width = "600";
            this.canvas.height = "600";
            this.grid.width = "600";
            this.canvas.style.marginLeft = "-601px";
            this.grid.height = "600";
            this.size = [600, 600];

        } else if(mapName == "Linie") {
            this.mapPoints.push([1, 1]);
            this.mapPoints.push([10, 1]);
            this.mapPoints.push([1, 1]);

            this.mapParts.push(new MapPart([1, 1], [10, 1]));
            this.mapParts.push(new MapPart([10, 1], [1, 1]));

            this.canvas.width = "600";
            this.canvas.height = "150";
            this.grid.width = "600";
            this.canvas.style.marginLeft = "-601px";
            this.grid.height = "150";
            this.size = [600, 150];
        }
    }

    draw() {
        this.mapParts.forEach(mapPart => {
            mapPart.draw(); // Jeden Streckenabschnitt zeichnen
        });
    }

    drawGrid() {
        // Gitter zeichnen (einmalig)
        // Waagerechte Linien
        for(var i = 1; i < this.size[1] / 50; i++) {
            g.beginPath();
            g.moveTo(0, i * 50);
            g.lineTo(this.size[0], i * 50);
            g.stroke();
        }

        // Senkrechte Linien
        for(var i = 1; i < this.size[0] / 50; i++) {
            g.beginPath();
            g.moveTo(i * 50, 0);
            g.lineTo(i * 50, this.size[1]);
            g.stroke(); 
        }
    }
}