import {Connection, LAMPORTS_PER_SOL,clusterApiUrl, PublicKey} from '@solana/web3.js';
//https://solana-devnet.g.alchemy.com/v2/Auo1oJpdtXb-76GN2xZXKzT02GEWZF3W

export function Body() {
    const connection = new Connection("https://api.devnet.solana.com");

    async function airdrop(publicKey: string, amount: number) {
        try {
          const airDropSignature = await connection.requestAirdrop(new PublicKey(publicKey), amount).then(()=>alert('Airdrop successful'));
        } catch (error:any) {
          alert(error);
        }
      }
    return (
        
        <div className="bg-[url('./bg.jpg')]  bg-cover bg-fixed bg-center min-h-screen">
     
            <div className="flex justify-start">
                <svg
                    className="size-12 pt-2 pl-2 pr-2 sm:size-16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#000000"
                >
                    <path
                        d="M20.0486 10.6286L15.3786 8.61859L14.3386 8.17859C14.1786 8.09859 14.0386 7.88859 14.0386 7.70859V4.64859C14.0386 3.68859 13.3286 2.54859 12.4686 2.10859C12.1686 1.95859 11.8086 1.95859 11.5086 2.10859C10.6586 2.54859 9.94859 3.69859 9.94859 4.65859V7.71859C9.94859 7.89859 9.80859 8.10859 9.64859 8.18859L3.94859 10.6386C3.31859 10.8986 2.80859 11.6886 2.80859 12.3686V13.6886C2.80859 14.5386 3.44859 14.9586 4.23859 14.6186L9.24859 12.4586C9.63859 12.2886 9.95859 12.4986 9.95859 12.9286V14.0386V15.8386C9.95859 16.0686 9.82859 16.3986 9.66859 16.5586L7.34859 18.8886C7.10859 19.1286 6.99859 19.5986 7.10859 19.9386L7.55859 21.2986C7.73859 21.8886 8.40859 22.1686 8.95859 21.8886L11.3386 19.8886C11.6986 19.5786 12.2886 19.5786 12.6486 19.8886L15.0286 21.8886C15.5786 22.1586 16.2486 21.8886 16.4486 21.2986L16.8986 19.9386C17.0086 19.6086 16.8986 19.1286 16.6586 18.8886L14.3386 16.5586C14.1686 16.3986 14.0386 16.0686 14.0386 15.8386V12.9286C14.0386 12.4986 14.3486 12.2986 14.7486 12.4586L19.7586 14.6186C20.5486 14.9586 21.1886 14.5386 21.1886 13.6886V12.3686C21.1886 11.6886 20.6786 10.8986 20.0486 10.6286Z"
                        fill="#e2e5e9"
                    ></path>
                </svg>
                <h1 className="text-black font-bold text-2xl pt-3.5 sm:text-4xl sm:pt-5">DropSol</h1>
            </div>
            <div>
                
                            <div>
                                <div className="text-center text-gray-800 font-mono pt-20 text-xl sm:pt-32 sm:text-3xl">
                                    <div className="flex justify-center">Fuel Your Ideas</div>
                                    <div className="pt-4 sm:pt-6">Airdrop Some Solana!!</div>
                                    <div className="pt-16 sm:pt-20">
                                        <div className="p-2 w-full sm:w-1/3 inline-block">
                                            <input type="text" id="default-input" placeholder="Enter your public key" className="bg-gray-300 border-2 hover:border-gray-800 text-gray-900 text-sm rounded-lg block w-full p-2.5 " />
                                        </div>

                                        <div className="flex-row sm:flex justify-center">
                                            <div className="p-2">
                                                <input type="text" id="amount" placeholder="Enter amount" className="bg-gray-300 border-2 hover:border-gray-800 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                                            </div>
                                            <div className="p-2">
                                                <button onClick={() => {
                                                    const publicKey = (document.getElementById('default-input') as HTMLInputElement).value;
                                                    console.log(publicKey)
                                                    const amount = parseFloat((document.getElementById('amount') as HTMLInputElement).value)*LAMPORTS_PER_SOL;
                                                    if(publicKey.length === 0 || amount === 0){
                                                        alert('Please enter a valid public key and amount');
                                                        return;
                                                    }else{
                                                    airdrop(publicKey,amount);}
                                                }}
                                                    type="button" className="text-white bg-gradient-to-br  from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2"> Request Airdrop</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
            </div>
            
        </div>
    );
}
