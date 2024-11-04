type Props = {
    label: string,
    placeholder: string,
    type: string,
    value: string,
    error?: string,
    onChange: (newValue: string) => void
}

export const Input = ({label, placeholder, type, value, error, onChange}: Props) => {
    return(
        <div className="mb-5">
            <label>
                <p className="mb-[5px] text-[14px]">{label}</p>

                <input 
                    className="w-full p-[14px] border border-[#ccc] placeholder-gray-300 outline-none rounded-md"
                    type={type}
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    placeholder={placeholder}
                />
            </label>
        </div>
    )
}