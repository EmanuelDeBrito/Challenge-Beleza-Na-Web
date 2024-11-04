import { Bottom } from "@/components/ui/bottom"
import { Box } from "@/components/ui/box"
import { Button } from "@/components/ui/button"
import { CartItem } from "@/components/ui/cartItem"
import { ConfirmationText } from "@/components/ui/confirmationText"
import { InfoItem } from "@/components/ui/infoItem"
import { Title } from "@/components/ui/title"
import { CartData } from "@/data/CartData"

const Page = () => {
    return(
        <div className="px-2 py-5 bg-[#EEE]">
                <Box>
                    <Title center label="Compra efetuada com sucesso" />
                    
                    <ConfirmationText label="****.****.****.4545"/>
                    <ConfirmationText label="Bruce Wayne" />
                    <ConfirmationText label="02/2027" />
                </Box>

                <Box>
                    <p>Produtos</p>

                    {CartData.map((item, key) => <CartItem key={key} withoutPrice data={item}/>)}
                </Box>

                <Bottom>
                    <div>
                        <InfoItem labelLeft="Produto (3 itens)" labelRight="624,80"/>
                        <InfoItem labelLeft="Frete" labelRight="5,30"/>
                        <InfoItem labelLeft="Desconto" labelRight="30,00" purple={true}/>
                        <InfoItem labelLeft="Subtotal" labelRight="600,10" bold={true}/>
                    </div>

                    <Button label="Concluir Compra" black/>
                </Bottom>
        </div>
    )
}

export default Page