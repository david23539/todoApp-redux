
export class Todo {
    id: number;
    text: string;
    completado: boolean;

    constructor( testo: string) {
        this.text = testo.charAt(0).toLocaleUpperCase() + testo.slice(1);
        this.completado = false;
        this.id = Math.random();
    }
}
