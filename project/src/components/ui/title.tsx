type Props = {
    label: string
}

export const Title = ({ label }: Props) => {
    return(
        <h1 className="mb-2 text-[20px] text-black">{label}</h1>
    )
}