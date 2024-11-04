import { Product } from "@/types/Product";
import Image from "next/image";

export const CartItem = ({ data }: Product) => {
    return(
        <div className="flex justify-between items-center gap-1">
            <img src={data.img} alt="" width={50} height={50}/>

            <p className="w-[150px] text-center text-black text-[10px]">{data.name}</p>

            {data.descount &&         
                <div className="flex flex-col gap-1">
                    <div className="text-[15px] text-[#AAA] line-through">R$ {data.price}</div>

                    <div className="text-[15px] text-black font-bold">R$ {data.descount}</div>
                </div>
            }

            {!data.descount &&
                <div className="text-[15px] color-black font-bold">R$ {data.price}</div>
            }
        </div>
    )
}