type Props = {
    black: boolean,
    label: string
}

export const Button = ({ black, label }: Props) => {
    return(
        <button className={`flex justify-center items-center w-full h-[48px] ${black === false ? 'bg-[#9222DC]' : 'bg-black'} text-white text-lg font-semibold rounded-sm`}>
            {label}
        </button>
    )
}