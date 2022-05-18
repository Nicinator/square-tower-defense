class MapPart {
    constructor(start, end) {
        this.start = start;
        this.end = end;

        this.position = [0, 0];

        // Ecke oben links festlegen
        if(this.start[0] < this.end[0]) {
            this.position[0] = start[0] * 50;
        } else {
            this.position[0] = end[0] * 50;
        }

        if(this.start[1] < this.end[1]) {
            this.position[1] = start[1] * 50;
        } else {
            this.position[1] = end[1] * 50;
        }

        // Länge und Breite berechnen
        this.width = (Math.abs(start[0] - end[0]) + 1) * 50;
        this.height = (Math.abs(start[1] - end[1]) + 1) * 50;
    }

    draw() {
        // Zeichnen
        c.beginPath();
        c.fillStyle = "rgb(255, 200, 89)";
        c.fillRect(this.position[0], this.position[1], this.width, this.height);
    }
}