import { Bottom } from "@/components/ui/bottom"
import { Box } from "@/components/ui/box"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { InfoItem } from "@/components/ui/infoItem"
import { Title } from "@/components/ui/title"

const Page = () => {
    return(
        <>
            <div className="px-2 py-5 bg-[#EEE]">
                <Box>
                    <Title label="Cartão de crédito" />

                    <Form />
                </Box>
            </div>

            <Bottom>
                <div>
                    <InfoItem labelLeft="Produto (3 itens)" labelRight="624,80"/>
                    <InfoItem labelLeft="Frete" labelRight="5,30"/>
                    <InfoItem labelLeft="Desconto" labelRight="30,00" purple={true}/>
                    <InfoItem labelLeft="Subtotal" labelRight="600,10" bold={true}/>
                </div>

                <Button label="Finalizar Pedido" black={false}/>
            </Bottom>
        </>
    )
}

export default Page