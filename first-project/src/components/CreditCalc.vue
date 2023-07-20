<template>
    <div class="calc">
        <h3>Кредитный калькулятор</h3>
        <div class="input">
            <p>Введите сумму кредита</p>
            <input type="text" v-model="creditSum">
            <p>Введите процентную ставку (%)</p>
            <input type="text" v-model="creditPersent">
            <p>Введите срок кредита (лет)</p>
            <input type="text" v-model="creditPeriod">
        </div>
        <div class="result">
            <p>Ежемесячный платеж - {{ monthlyPayment }}</p>
            <p>Общая сумма выплаты - {{ totalSum }} </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CreditCalc',
  data () {
    return {
      creditSum: 0,
      creditPersent: 0,
      creditPeriod: 0
    }
  },
  computed: {
    totalSum: function () {
      if (this.creditPeriod > 0 && this.creditPersent > 0 && this.creditSum > 0) {
        const sum = Number(this.creditSum)
        const period = Number(this.creditPeriod)
        const persent = Number(this.creditPersent) / 100
        return sum + sum * persent * period
      } else {
        return 0
      }
    },
    monthlyPayment: function () {
      if (this.creditPeriod > 0 && this.creditPersent > 0 && this.creditSum > 0) {
        const sum = Number(this.creditSum)
        const period = Number(this.creditPeriod)
        const persent = Number(this.creditPersent) / 100
        return (sum + sum * persent * period) / (period * 12)
      } else {
        return 0
      }
    }
  }
}
</script>

<style scoped lang="scss">
.calc{
    border-radius: 20px;
    border: 1px solid brown;
    margin-left: 150px;
    margin-right: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 100px;
}
.input{
    width: 400px;
}
input{
    width: 300px;
    padding: 10px;
    margin-bottom: 20px;
}
.result{
    display: flex;
    justify-content: space-between;

    p~p{
        margin-left: 25px;
    }
}
</style>
