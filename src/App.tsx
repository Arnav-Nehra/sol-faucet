import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { Airdrop } from "./components/Airdrop"


function App() {
  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/Auo1oJpdtXb-76GN2xZXKzT02GEWZF3W"}>
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
