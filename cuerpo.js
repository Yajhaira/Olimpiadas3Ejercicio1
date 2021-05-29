class cuerpo {
    constructor(x, y, colorFondo, corbata, sexo) {
        this.x = x;
        this.y = y;
        this.colorFondo = colorFondo;
        this.corbata = corbata;
        this.sexo = sexo;
        //this.value = 0;
    }

    //Control D para seleccionar varias palabras

    cabeza() { //construcción de la cabeza
        noStroke();
        fill(201, 142, 97);
        ellipse(this.x,this.y, 50, 50);
    }
    

    show() { //mostrar
        
        /* switch (this.sexo) {
            case "true":
                fill (234, 80, 192);
                rect(this.x-10, this.y+25, 50, 50);
                break;

            case "false":
                fill (80, 110, 230);
                rect(this.x-10, this.y+25, 50, 50);
                break;
        } */

        

        switch (this.colorFondo) { //diferentes fondos
            case "azul":
                fill(96,165,246);
                rectMode(CENTER);
                rect(this.x,this.y,150,150);
                break;
            case "rojo":
                fill(246,86,71);
                rectMode(CENTER);
                rect(this.x,this.y,150,150);
                break;
            case "amarillo":
                fill(246,179,47);
                rectMode(CENTER);
                rect(this.x,this.y,150,150);
                break;
            case "verde":
                fill(47,235,43);
                rectMode(CENTER);
                rect(this.x,this.y,150,150);
                break;
        
            default:
                break;
        }

        if(this.sexo === true){ //elección de sexo
            fill (234, 80, 192); //color rosado - sexo femenino
            rect(this.x, this.y+50, 80, 50);
        }else {
            fill (80, 110, 230); //color azul - sexo masculino
            rect(this.x, this.y+50, 80, 50);
        }

        this.cabeza(); //mostrar la cabeza


        if(this.corbata == true){ //accesorio
            fill(90);
            rectMode(CORNER);
            rect(this.x-10,this.y+25, 20, 40);
        }


       /* this.cabeza();
        if(this.corbata == true){
            fill(90);
            rectMode(CORNER);
            rect(this.x-10,this.y+25, 20, 40);
        }*/


        /*switch (this.sexo) {
            case "true":
                fill (234, 80, 192);
                rect(this.x-10, this.y+25, 50, 50);
                break;

            case "false":
                fill (80, 110, 230);
                rect(this.x-10, this.y+25, 50, 50);
                break;
        } */
    }
}