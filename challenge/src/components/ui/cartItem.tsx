import { Product } from "@/types/Product";
import Image from "next/image";

type Props = {
    data: Product,
    withoutPrice?: boolean
}

export const CartItem = ({ data, withoutPrice }: Props) => {
    return(
        <div className="flex justify-between items-center gap-1 mb-5">
            <img src={data.img} alt="" width={50} height={50}/>

            <p className={`${withoutPrice === true ? 'w-full' : 'w-[150px]'} text-left text-black text-[10px]`}>{data.name}</p>

            {data.descount && !withoutPrice &&        
                <div className="flex flex-col">
                    <div className="text-[15px] text-[#AAA] line-through">R$ {data.price}</div>

                    <div className="text-[15px] text-black font-bold">R$ {data.descount}</div>
                </div>
            }

            {!data.descount && !withoutPrice &&
                <div className="text-[15px] color-black font-bold">R$ {data.price}</div>
            }
        </div>
    )
}