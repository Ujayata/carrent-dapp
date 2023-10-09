import React from 'react'
import { RainbowKitProvider, getDefaultWallets, connectorsForWallets } from "@rainbow-me/rainbowkit"
import { metaMaskWallet, trustWallet, ledgerWallet  } from "@rainbow-me/rainbowkit/wallets"
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { celo, celoAlfajores } from "wagmi/chains"
const provide = () => {
  return (
    <div>

    </div>
  )
}

export default provide