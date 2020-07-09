import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      valores: [''],
    });
  }

  public form: FormGroup;
  listBinariosAdicionados;
  listBinariosSaida;

  ngOnInit() {
  }

  adicionarValores() {
    // 00000010 = 2, 00000001 = 1, 00000011 = 3, 00010100 = 20 /[^01+-/*]/g [(,)(e)(\g {2})]
    console.log(this.gerarListaDeBinarios(this.form.get('valores').value));
    const binary = ['00000010', '00000001', '00000011', '00010100'];
    binary.forEach(value => {
      const numero: number = parseInt(value, 2);
      console.log('numero', numero);
      console.log('binary', (numero).toString(2));
    });
  }

  confirmar() {
  }

  gerarListaDeBinarios(valores) {
    if (valores != null) {
      const numeros = [];
      const regexp = RegExp('(\\d+)|\\d+', 'g');
      let match;

      while ((match = regexp.exec(valores)) !== null) {
        const valor = match[0];
        numeros.push(valor);
      }
      return numeros;
    }
  }
}
