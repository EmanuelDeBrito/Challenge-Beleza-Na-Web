type Props = {
    children: React.ReactNode
}

export const Bottom = ({ children }: Props) => {
    return(
        <div className="flex flex-col justify-center gap-4 px-2 py-[25px]">
            {children}
        </div>
    )
}