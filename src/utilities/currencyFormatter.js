const currencyFormat = new Intl.NumberFormat('en-US', {currency: 'USD', style: 'currency'})

export const currencyFormater = (value) => {
    return currencyFormat.format(value)
}