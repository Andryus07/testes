import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.css']
})
export class PrimeiroComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      valores: [''],
    });
  }

  public form: FormGroup;
  public primeiroNumero;
  public listNumerosSaida;
  public listNumerosAdicionados = [];

  ngOnInit() {
  }

  adicionarValores() {
    this.listNumerosSaida = [];

    const valores = this.form.get('valores').value;
    const listNumerosFront = this.gerarListaDeNumeros(valores);

    this.pegarPrimeiroNumero(listNumerosFront);

    listNumerosFront.forEach(f => this.listNumerosAdicionados.push(f));

    this.form.get('valores').setValue('');
  }

  pegarPrimeiroNumero(valores) {
    if (this.primeiroNumero == null) {
      valores.forEach(valor => {
        if (this.primeiroNumero == null && 1 <= valor && valor <= 1000) {
          this.primeiroNumero = valor;
        }
      });
    }
  }

  gerarListaDeNumeros(valores) {
    if (valores != null) {
      const numeros = [];
      const regexp = RegExp('([+-]\\d+)|\\d+', 'g');
      let match;

      while ((match = regexp.exec(valores)) !== null) {
        const valor = match[0];
        numeros.push(valor);
      }
      return numeros;
    }
  }

  ordenarLista(valores) {
    return valores.sort((a, b) => {
      const a1 = parseFloat(a);
      const a2 = parseFloat(b);
      if (a1 < a2) {
        return -1;
      } else if (a1 > a2) {
        return 1;
      }

      return 0;

    });
  }

  async confirmar() {
    const listNumerosFrontOrdenados = this.ordenarLista(this.listNumerosAdicionados);
    listNumerosFrontOrdenados.splice(listNumerosFrontOrdenados.indexOf(this.primeiroNumero), 1);
    const listNumerosSaida = await this.pegarListaDeNumeros(listNumerosFrontOrdenados);

    listNumerosSaida.forEach(list => {
      this.listNumerosSaida.push(list);
    });

    this.primeiroNumero = null;
    this.listNumerosAdicionados = [];
  }

  pegarListaDeNumeros(listNumerosFrontOrdenados) {
    const listNumerosSaida = new Set();

    for (const n of listNumerosFrontOrdenados) {
      if (-1000 <= n && n <= 1000) {
        listNumerosSaida.add(n);
      }
    }
    return listNumerosSaida;
  }

}
