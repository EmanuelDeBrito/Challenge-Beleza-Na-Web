import { Box } from "@/components/ui/box"
import { Form } from "@/components/ui/form"
import { Title } from "@/components/ui/title"

const Page = () => {
    return(
        <div className="px-2 py-5 bg-[#EEE]">
            <Box>
                <Title label="Cartão de crédito" />

                <Form />
            </Box>
        </div>
    )
}

export default Page