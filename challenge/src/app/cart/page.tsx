import { Box } from "@/components/ui/box"
import { CartItem } from "@/components/ui/cartItem"
import { CartData } from "@/data/CartData"

const Page = () => {
    return(
        <div className="px-2 py-5 bg-[#EEE]">
            <Box>
                {CartData.map((item, key) => <CartItem key={key} data={item}/> )}
            </Box>
        </div>
    )
}

export default Page