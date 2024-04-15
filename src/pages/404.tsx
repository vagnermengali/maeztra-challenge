import Seo from "@/components/Seo";
import NotFound from "@/components/Templates/NotFound";

const NotFoundPage = () => {
    return (
        <>
            <Seo
                title="Página Não Encontrada | Criação De Sites Profissionais - Tekoa"
                url="https://www.tekoa.dev.br/" 
                description="Página solicitada não foi encontrada"
            />
            <NotFound />
        </>
    );
}

export default NotFoundPage