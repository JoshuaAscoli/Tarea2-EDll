//Joshua Ascoli 1515522
//Necesitamos en la clase nodo el dato, el next que sera el nodo que le sigue y el anterior
//Estos van a ser apuntadores, donde apunten a nodos o en este caso al inicio a nulo (null)

class Nodo {
    private data: number; 
    private next: Nodo | null;
    private previous: Nodo | null;

    //El datos se generara automáticamente, generando un numero aleatorio entre 0 y 9 
    //Math.random genera un numero decimal ente 0 y 1, es por esi que se multiplica por 9 para volverlo 
    //decimal pero ya entre 0 y 9, es por eso que se usa al .floor para que use el decimal 
    constructor() {
        this.data = Math.floor(Math.random() * 9) +1;
        this.next = null;
        this.previous = null;
    }

    //Obtener el dato
    public get_data(): number {
        return this.data
    }
    public getNext(): Nodo | null {
        return this.next;
    }
    public getPrevious(): Nodo | null {
        return this.previous;
    }

    //Establece el nodo anterior o siguiente
    public setNext(next: Nodo | null): void {
        this.next = next;
    }
    public setPrevious(previous: Nodo | null): void {
        this.previous = previous;
    }

}

//Esta es la clase de lista doble enlazada, donde la cabeza y la cola seran nulas, por no tener datos 
class Double_list {
    private head: Nodo| null; 
    private tail: Nodo | null; 

    //Estos al inicio van a estar vacíos porque no hay datos al inicio
    constructor() {
        this.head = null;
        this.tail = null;
    }

    //Este metodo e spara insertar al final
    public insert_to_final(): void {
        const NewNode = new Nodo();
        //Si la cabeza y la cola esta vacia, estos pasaran a ser el nuevo nodo
        if (this.head == null && this.tail == null) {
            this.head = NewNode
            this.tail = NewNode
        } 
        //Si no esta vacia la lista que haga:
        //la cola ahora apuntara al nuevo nodo 
        //El nuevo nodo apuntara al nodo previo, osea la cola que estab antes 
        //Esa cola que estaba antes en el anterior datos ahora sera el nuevo nodo 
        else {
            this.tail!.setNext(NewNode);
            NewNode.setPrevious(this.tail);
            this.tail = NewNode
        }
    }

    //Imprimir numeros generados aleatorios pero solo los pares entre el 0 y el 9 
    public print_pairs(): void {
        //Declaramos actual donde será la cabeza para verificar uno por uno de los datos(numeros)
        let actual = this.head;

        //Esto se realizará mientras actual no sea null, si es null, significa que ya no hay datos y terminó
        while (actual !== null) {
            //Obtenemos el primer valor de la cabeza y hacemos un mod 2, si da 0, significa que es par
            if (actual.get_data() % 2 == 0) {
                console.log(actual.get_data());
            }
            //Ahora actual va a ser el siguiente nodo al qeu estabamos anteriormente y se repite el ciclo
            actual = actual.getNext();
        }
    }
}
//Se crea una constante que sea la nueva lista
const lista = new Double_list(); 

//Se hace un for donde solo insertará 5 nodos
for (let i = 0; i < 5; i++) {
    lista.insert_to_final();
}

//Imprime solo los numeros pares llamando a la funion print_pairs establecida anteriormente
console.log("Números pares en la lista:");
lista.print_pairs();
