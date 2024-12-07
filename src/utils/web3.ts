import { ethers } from "ethers";
import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";
import toast from "react-hot-toast";

const CHAIN_ID = 8453; // Base Mainnet
const RPC_URL = import.meta.env.VITE_BASE_RPC_URL;

// Initialize Coinbase Wallet SDK
export const coinbaseWallet = new CoinbaseWalletSDK({
  appName: "EduFund",
  appLogoUrl: "https://example.com/logo.png",
  darkMode: true,
  overrideIsMetaMask: false,
});

// Initialize Web3 provider
export const getProvider = () => {
  return new ethers.JsonRpcProvider(RPC_URL);
};

// Get contract instance
export const getContract = (address: string, abi: any, signer: any) => {
  try {
    return new ethers.Contract(address, abi, signer);
  } catch (error) {
    console.error("Error getting contract instance:", error);
    throw error;
  }
};

// Connect wallet
export const connectWallet = async () => {
  try {
    const ethereum = coinbaseWallet.makeWeb3Provider(RPC_URL, CHAIN_ID);

    // Request account access
    await ethereum.request({ method: "eth_requestAccounts" });

    // Check if we're on the correct network
    const chainId = await ethereum.request({ method: "eth_chainId" });
    if (parseInt(chainId as string) !== CHAIN_ID) {
      try {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: `0x${CHAIN_ID.toString(16)}` }],
        });
      } catch (error) {
        toast.error("Please switch to Base network");
        throw new Error("Wrong network");
      }
    }

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

// Get contract ABI
export const getContractABI = async () => {
  try {
    const response = await fetch("/contracts/EduFund.json");
    const data = await response.json();
    return data.abi;
  } catch (error) {
    console.error("Error loading contract ABI:", error);
    throw error;
  }
};
