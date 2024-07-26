'use server';

interface TransactionData {
    text: string;
    amount: number;
}

interface TransactionDResult {
    data?: TransactionData;
    error?: string;
}
async function addTransaction(formData: FormData): Promise<TransactionDResult> {
    const textValue = formData.get('text') as string;
    const amountValue = formData.get('amount') as string;
    if (!textValue || textValue === '' || !amountValue) {
        return {
            error: 'Please enter text and amount!'
        };
    }
    const text = textValue.toString(); //Ensure text is a string
    const amount = parseFloat(amountValue); //Ensure amount is a number
    const transactionData: TransactionData = {
        text: text,
        amount: amount,
    };
    return {
        data: transactionData
    };
}

export default addTransaction;