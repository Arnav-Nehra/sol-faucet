import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { Airdrop } from "./components/Airdrop"


function App() {
  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
    <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
            <WalletMultiButton />
            <WalletDisconnectButton />
            <Airdrop></Airdrop>
            </WalletModalProvider>
    </WalletProvider>
</ConnectionProvider>
  )
}

export default App
