(function () {
 function criaCalculadora() {
  return {
   display: document.querySelector('.display'),
   btnClear: document.querySelector('.btn-clear'),
   /****************************************************** */
   inicia() {
    this.cliqueBotoes();
    this.pressionaEnter();
    this.display.focus();
   },/**Inicia() */
   btnParaDisplay(valor) {
    this.display.value += valor;
   },/**btnParaDisplay() */
   realizaConta() {
    let conta = this.display.value;
    try {
     conta = eval(conta);
     if (!conta) {
      alert('Conta Invalida');
      return;
     }
     this.display.value = conta;
    } catch {
     alert('Conta Invalida');
     return;
    }
   },/**realizaConta() */
   clearDisplay() {
    this.display.value = '';
   },/**clearDisplay() */
   apagaUm() {
    this.display.value = this.display.value.slice(0, -1);
   },/**apagaUm() */
   pressionaEnter() {
    this.display.addEventListener('keyup', (e) => {
     if (e.keyCode === 13) {
      this.realizaConta();
     }
    });
   },/**pressionaEnter() */
   cliqueBotoes() {
    document.addEventListener('click', (e) => {
     const el = e.target;
     if (el.classList.contains('btn-num')) {
      this.btnParaDisplay(el.innerText);
     }
     if (el.classList.contains('btn-clear')) {
      this.clearDisplay();
     }
     if (el.classList.contains('btn-backspace')) {
      this.apagaUm();
     }
     if (el.classList.contains('btn-equal')) {
      this.realizaConta();
     }
    })
   },/**cliqueBotoes() */
   /***************************************** */
  };/**Return  */

 }/*criaCalculadora()*/


 const calculadora = criaCalculadora();

 calculadora.inicia();



})();