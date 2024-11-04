type Props = {
    label: string
}

export const ConfirmationText = ({ label }: Props) => {
    return(
        <p className="text-center text-[#555]">{label}</p>
    )
}