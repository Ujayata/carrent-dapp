import { useContractSend } from "@/hooks/useContractWrite";



export const approveCar = async ({id}) => {
    const { writeAsync: approve} = useContractSend("carApprove", [id])

    if (!approve) throw new Error("Failed to approve car")
    try {
      await toast.promise(approve(), {
        pending: "Approving Car",
        success: "Successfully approved",
        error: "Unexpected Error"
      })
    } catch (error) {
    }
  }