import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Connection, LAMPORTS_PER_SOL } from "@solana/web3.js"

export function Airdrop(){
        const {connection} = useConnection()
        const wallet = useWallet()

        async function reqAirdrop(amount: number) {
            if (wallet.publicKey) {
                await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
                alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
            } else {
                alert("Wallet public key is null");
            }
        }
    
        return <div>
            <br/><br/>
            <input id="amount" type="text" placeholder="Amount" />
            <button onClick={() => {
                const amount = parseFloat((document.getElementById('amount') as HTMLInputElement).value);
                reqAirdrop(amount);
            }}>Request Airdrop</button>
        </div>
}