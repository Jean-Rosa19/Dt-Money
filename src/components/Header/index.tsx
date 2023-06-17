import { HeaderContainer, HeaderContent, LogoContainer, LogoImage, LogoText, NewTransactionButton } from "./styles";
import logoImg from '../../assets/logo.svg';
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionsModal } from "../NewTransactionsModal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <LogoContainer>
                    <LogoImage src={logoImg} alt="Logo" />
                    <LogoText>dt Money</LogoText>
                </LogoContainer>

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                    </Dialog.Trigger>

                <NewTransactionsModal />
                </Dialog.Root>

                
            </HeaderContent>
        </HeaderContainer>
    )
}