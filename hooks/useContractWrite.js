import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { toBigInt } from 'ethers';
import CarRent from "../abis/carrent.json"

export const useContractSend = (functionName, args) => {
    // gas limit to use when sending transaction

    // const gasList = 
    const gasLimit = toBigInt(1000000)

    const {config} = usePrepareContractWrite({
        // the address of the car rent contract
        address: CarRent.address,
        // the abi of the contract of the car rent
        abi: CarRent.abi,
        functionName,
        args,
        overrides: {
            gasLimit
        },
        onError: (err) => {
            console.log(err);
        }
    })

    const {data, isSuccess, write, writeAsync, error, isLoading} = useContractWrite(config)
    return { data, isSuccess, write, writeAsync, isLoading}
}