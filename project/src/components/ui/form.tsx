"use client"

import { useState } from "react"
import { Input } from "./input"

export const Form = () => {

    // States 
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [validateDate, setValidateDate] = useState('');
    const [cvvCode, setCvvCode] = useState('');

    return(
        <form method="POST">
            <Input 
                label="Número" 
                type="text" 
                placeholder="0000 0000 0000 0000"
                value={cardNumber}
                onChange={e => setCardNumber(e)}
            />

            <Input 
                label="Nome do titular do cartão" 
                type="text" 
                placeholder="Nome impresso no cartão"
                value={cardName}
                onChange={e => setCardName(e)}
            />

            <div className="flex items-center gap-3">
                <Input 
                    label="Data de validade" 
                    type="text" 
                    placeholder="MM/AA"
                    value={validateDate}
                    onChange={e => setValidateDate(e)}
                />

                <Input 
                    label="Código CVV" 
                    type="text" 
                    placeholder="000"
                    value={cvvCode}
                    onChange={e => setCvvCode(e)}
                />
            </div>
        </form>
    )
}