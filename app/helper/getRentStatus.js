import carrent from "../../abis/carrent.json"
import { readContract } from "@wagmi/core"

export const getStatus = async ({ params }) => {
  try {
    const rentData = await readContract({
      address: carrent.address,
      abi: carrent.abi,
      functionName: 'getRent',
      args: [params]
    });
    return rentData[5]
  } catch (error) {
    // handle error
  }
};
