type Props = {
    labelLeft: string,
    labelRight: string,
    purple?: boolean,
    bold?: boolean
}

export const InfoItem = ({ labelLeft, labelRight, purple, bold }: Props) => {
    return(
        <div className={`flex justify-between items-center mb-3 ${bold === true ? 'font-bold' : ''}`}>
            <div className="text-sm text-black">
                {labelLeft}
            </div>

            <div className={`text-sm ${purple === true ? 'text-[#9222DC]': 'text-black'}`}>
                R$ {labelRight}
            </div>
        </div>
    )
}