type Props = {
    label: string,
    center?: boolean
}

export const Title = ({ label, center }: Props) => {
    return(
        <h1 className={`mb-2 text-[20px] text-black ${center === true ? 'text-center' : ''}`}>{label}</h1>
    )
}