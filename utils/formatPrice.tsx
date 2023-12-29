export const formatsPrice = 
    (amount: number) => {
        return new Intl.NumberFormat('ems-US', {style:'currency', currency:'USD'}).format(amount)
    }
