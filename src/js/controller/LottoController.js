import { MAX_LOTTO_NUMBER, MIN_LOTTO_NUMBER } from '../constants/index.js';
import { $, validator } from '../util/index.js';
export class LottoController {
  constructor(model, view) {
    this.machine = model;
    this.view = view;
  }

  initEvent() {
<<<<<<< HEAD
<<<<<<< HEAD
    this.$purchaseAmountSubmit = $('#purchase-amount-submit');
    this.$lottoToggle = $('.lotto-numbers-toggle-button');
=======
    this.$purchaseAmountForm = $('#purchase-amount-form');
    this.$lottoToggle = $('#lotto-numbers-toggle-button');
    this.$winningNumberInputs = $('[data-winning-number]');
    this.$resultForm = $('#lotto-result-form');
    this.$modal = $('#modal');
    this.$modalClose = $('#modal-close');
    this.$resetButton = $('#reset-button');
>>>>>>> f01c94099a4d507c15b0529048505f6415d9277e

    this.$purchaseAmountForm.setEvent('submit', this.handlePurchaseAmountInput.bind(this));
    this.$lottoToggle.setEvent('click', this.handleLottoToggle.bind(this));
    this.$winningNumberInputs.setEvent('input', this.handleLengthLimit.bind(this));
    this.$resultForm.setEvent('submit', this.handleResult.bind(this));
    this.$modalClose.setEvent('click', () => this.$modal.removeClass('open'));
    this.$resetButton.setEvent('click', this.reset.bind(this));
  }

  handlePurchaseAmountInput(event) {
    event.preventDefault();
    this.$purchaseAmountInput = $('#purchase-amount-input');
    this.$purchaseAmountSubmit = $('#purchase-amount-submit');
    const money = Number(this.$purchaseAmountInput.getValue());
<<<<<<< HEAD
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
=======
    const alertMessage = validator.purchaseAmount(money);
>>>>>>> f01c94099a4d507c15b0529048505f6415d9277e

    if (alertMessage) {
      this.handleInputException(this.$purchaseAmountInput, alertMessage);

      return;
    }

    this.machine.insert(money);
    this.machine.publishLottosByAuto();
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
    this.$lottoNumbers = $('[data-lotto-numbers]');

    this.$lottoContainer.toggleClass('flex-col'); // toggle()을 이용해 flex direction 변경.
    this.$lottoToggle.isCheckedInput() //
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

  handleLengthLimit({ target, target: { value } }) {
    const maxLength = String(MAX_LOTTO_NUMBER).length;

    if (isNaN(value)) {
      target.value = '';

      return;
    }

    if (value.length > maxLength) {
      target.value = value.slice(0, maxLength);
    }
  }

  handleResult(event) {
    event.preventDefault();
    const numbers = this.$winningNumberInputs
      .filter($input => $input.value !== '')
      .map($input => Number($input.value));
    const alertMessage = validator.lottoNumbers(numbers);

    if (alertMessage) {
      this.handleInputException(this.$winningNumberInputs, alertMessage);

      return;
    }

    this.view.renderWinningResult(this.machine.getWinningStatistics(numbers));
    this.$modal.addClass('open');
  }

  reset() {
    this.machine.reset();
    this.$modal.removeClass('open');
    this.$purchaseAmountInput.enable();
    this.$purchaseAmountSubmit.enable();
    this.$purchaseAmountInput.setValue('');
    this.$winningNumberInputs.setValue('');
    this.view.reset();
  }
}
