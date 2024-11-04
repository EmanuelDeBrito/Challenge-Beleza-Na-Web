type Props = {
    children: React.ReactNode
}

export const Box = ({ children }: Props) => {
    return(
        <div className="flex flex-col gap-2 mb-[20px] px-3 py-4 bg-white border border-[1.5px] border-[#AAA] rounded-sm">
            {children}
        </div>
    )
}