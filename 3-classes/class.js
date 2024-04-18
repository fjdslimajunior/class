//conceituando class
class Smartphone {
    serialNumber;
    mark;
    sO;
    generation;

    tabelagem() {
        console.log(`O equipamento ${this.serialNumber}, da marca ${this.mark}. Mostrou ter falha no 
${this.sO} e foi direcionado ao sertor responsável para reparo. Dado : ${this.generation}`);
    }
}
// tabelagem();

const redmiN12 = new Smartphone();
    redmiN12.serialNumber = 13255;
    redmiN12.mark = "Xiaomi-RedmiNote-12";
    redmiN12.sO = "Android Manteira - oV.:5569734214";
    redmiN12.generation = "Primeiro registro o dia!";
redmiN12.tabelagem();