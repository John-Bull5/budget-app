'use strict'
// date function that is being display on the web page 
const dateBuilder = (d) => {
  const months = ['Jan','Feb','Mar','April','May','June','July','Aug','Sept','Oct','Nov','Dec']
  const days = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat']
  const day = days[d.getDay()]
  const date = d.getDate()
  const month = months[d.getMonth()]
  const year = d.getFullYear()
  return `${day}, ${date} ${month} ${year}.`
}
const now = new Date()
const date = document.querySelector('#date').innerHTML = dateBuilder(now)


let btnAddIncome = document.querySelector('.btn-add-income')
let incomeValue = document.querySelector('.income-value').innerHTML
let incomeField = document.querySelector('.txt-income')
let IncomeResult
btnAddIncome.addEventListener('click', () => {
  IncomeResult = Number(incomeValue) + Number(incomeField.value)
  console.log(IncomeResult)
  incomeValue = IncomeResult
  incomeField.value = ''
})

let expensesArray = []

let displayExp = () => {
  expensesArray.forEach( expensesList => {

  })
}


let addExpenses = (expensesList) => {
  expensesArray.push(expensesList)
}




