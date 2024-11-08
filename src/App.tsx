import './App.css'
import { Body } from './components/Body';

// wallet adapter imports
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';


function App() {
  return (
    <div className="bg-[url('https://cdn.vectorstock.com/i/500p/84/65/abstract-white-monochrome-background-vector-32028465.jpg')]  bg-cover bg-fixed bg-center min-h-screen">
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <Body>  
                <div className='pr-2'><WalletMultiButton/></div>
                <div><WalletDisconnectButton /></div>
            </Body>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  )
}

export default App