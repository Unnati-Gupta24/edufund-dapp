# EduFund dApp

EduFund is a decentralized application built on Base that facilitates crowdfunding for orphans' education. The platform enables transparent, secure fundraising through smart contracts while providing an engaging user experience with 3D visualizations.

## Features

- 🎓 Create and manage educational fundraising campaigns
- 💰 Secure donation handling through smart contracts
- 🔒 Escrow system for transparent fund management
- 🌐 Integration with Coinbase Wallet
- 📊 Real-time campaign progress tracking
- 🎨 Interactive 3D visualizations
- 📱 Responsive design for all devices

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v9 or higher)
- A Web3 wallet (like [Coinbase Wallet](https://www.coinbase.com/wallet))
- [Git](https://git-scm.com/) for version control

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/edufund-dapp.git
cd edufund-dapp
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
VITE_BASE_RPC_URL=your_base_rpc_url
VITE_CONTRACT_ADDRESS=your_deployed_contract_address
```

## Smart Contract Deployment

1. Install Hardhat globally:
```bash
npm install -g hardhat
```

2. Deploy the smart contract to Base:
```bash
npx hardhat run scripts/deploy.js --network base
```

3. Update the contract address in your `.env` file with the deployed contract address.

## Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

1. Create a production build:
```bash
npm run build
```

2. Preview the production build:
```bash
npm run preview
```

## Project Structure

```
edufund-dapp/
├── src/
│   ├── components/         # Reusable React components
│   │   ├── 3d/            # Three.js components
│   │   ├── Campaign/      # Campaign-related components
│   │   └── Layout/        # Layout components
│   ├── contracts/         # Smart contracts
│   ├── pages/             # Page components
│   ├── utils/             # Utility functions
│   └── App.tsx            # Main application component
├── public/
│   └── models/           # 3D models
└── package.json
```

## Testing

Run the test suite:
```bash
npm run test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.

## Acknowledgments

- Base Network for the blockchain infrastructure
- Three.js for 3D visualization capabilities
- React and Vite for the frontend framework
- The open-source community for various tools and libraries used in this project