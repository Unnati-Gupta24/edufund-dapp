import { ethers } from "ethers";
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";

// Initialize Coinbase Wallet SDK
export const coinbaseWallet = new CoinbaseWalletSDK({
  appName: "EduFund",
  appLogoUrl: "https://example.com/logo.png",
  darkMode: false,
});

// Initialize Web3 provider
export const getProvider = () => {
  const BASE_RPC_URL = import.meta.env.VITE_BASE_RPC_URL;
  return new ethers.JsonRpcProvider(BASE_RPC_URL);
};

// Get contract instance
export const getContract = (address: string, abi: any, signer: any) => {
  return new ethers.Contract(address, abi, signer);
};

// Connect wallet
export const connectWallet = async () => {
  try {
    const ethereum = coinbaseWallet.makeWeb3Provider(
      import.meta.env.VITE_BASE_RPC_URL,
      1
    );
    await ethereum.request({ method: "eth_requestAccounts" });
    return new ethers.BrowserProvider(ethereum);
  } catch (error) {
    console.error("Error connecting wallet:", error);
    throw error;
  }
};

// Format ETH amount
export const formatEth = (amount: string) => {
  return ethers.formatEther(amount);
};

// Parse ETH amount
export const parseEth = (amount: string) => {
  return ethers.parseEther(amount);
};
