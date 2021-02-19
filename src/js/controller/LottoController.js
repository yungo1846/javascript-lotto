import { $, validator } from '../util/index.js';
import { LottoView } from '../view/index.js';
import { LottoMachine } from '../model/index.js';

export class LottoController {
  constructor() {
    this.machine = new LottoMachine();
    this.view = new LottoView();
  }

  initEvent() {
<<<<<<< HEAD
    this.$purchaseAmountSubmit = $('#purchase-amount-submit');
    this.$lottoToggle = $('.lotto-numbers-toggle-button');

    this.$purchaseAmountSubmit.setEvent(
      'click',
      this.handlePurchaseAmountInput.bind(this)
    );
    this.$lottoToggle.setEvent('click', this.handleLottoToggle.bind(this));
  }

  handlePurchaseAmountInput() {
    this.$purchaseAmountInput = $('#purchase-amount-input');
    const money = Number(this.$purchaseAmountInput.getValue());
=======
    $('#purchase-amount-submit').setEvent(
      'click',
      this.handlePurchaseAmountInput.bind(this)
    );
    $('.lotto-numbers-toggle-button').setEvent(
      'click',
      this.handleLottoToggle.bind(this)
    );
  }

  handlePurchaseAmountInput() {
    const $input = $('#purchase-amount-input');
    const money = Number($input.getValue());
>>>>>>> 25016aa... refactor: refactoring
    const alertMessage = validator.purchaseAmountInput(money);

    if (alertMessage) {
      this.handleInputException(this.$purchaseAmountInput, alertMessage);

      return;
    }

    this.machine.publishLottosByAuto(money);
    this.view.renderLottoSection(this.machine.lottos);
<<<<<<< HEAD
    this.$purchaseAmountInput.disable();
    this.$purchaseAmountSubmit.disable();
=======
    $input.disable();
    $('#purchase-amount-submit').disable();
>>>>>>> 25016aa... refactor: refactoring
  }

  handleInputException($input, alertMessage) {
    alert(alertMessage);
    $input.setValue('');
  }

  handleLottoToggle() {
<<<<<<< HEAD
    this.$lottoContainer = $('#lotto-container');
    this.$lottoNumbers = $('.lotto-numbers');

    this.$lottoContainer.toggleClass('flex-col'); // toggle()을 이용해 flex direction 변경.
    $('.lotto-numbers-toggle-button').isCheckedInput()
      ? this.$lottoNumbers.show()
      : this.$lottoNumbers.hide();
=======
    const $lottoNumbers = $('.lotto-numbers');

    $('#lotto-container').toggleClass('flex-col'); // toggle()을 이용해 flex direction 변경.
    $('.lotto-numbers-toggle-button').isCheckedInput()
      ? $lottoNumbers.show()
      : $lottoNumbers.hide();
>>>>>>> 25016aa... refactor: refactoring
  }
}
