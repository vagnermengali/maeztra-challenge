import Seo from "@/components/Seo";
import NotFound from "@/components/Templates/NotFound";

const NotFoundPage = () => {
    return (
        <>
            <Seo
                title="Página Não Encontrada | Maeztra - Especialista em E-commerce"
                url="https://maeztra-challenge-vagnermengali.vercel.app/"
                description="Página solicitada não foi encontrada"
            />
            <NotFound />
        </>
    );
}

export default NotFoundPage