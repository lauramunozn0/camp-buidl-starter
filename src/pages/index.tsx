import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Add this at the top of the component to make external links more secure
const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer"
};

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Head>
        <title>Web3 Development Guide</title>
        <meta
          content="A comprehensive guide for Web3 development"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      {/* Enhanced Navigation Bar */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                CampBuidl
              </h1>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" asChild>
              <Link href="/examples/simple-storage">Simple Storage</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/examples/erc20">ERC20</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/examples/nft">NFT</Link>
            </Button>
          </div>
          <ConnectButton />
        </div>
      </nav>

      <main className="container mx-auto p-8 max-w-4xl">
        {/* Enhanced Hero Section */}
        <div className="text-center mb-16 py-12 px-4">
          <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent animate-fade-in">
            Welcome to Web3 Development
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your comprehensive guide to building decentralized applications. Start your journey into the future of the web.
          </p>
        </div>

        {/* Vertical Lessons Layout */}
        <div className="space-y-12">
          {/* Lesson 1: React */}
          <div className="relative">
            <div className="absolute left-0 -ml-4 hidden h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent md:block" />
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20">
                <span className="text-2xl">⚛️</span>
              </div>
              <h2 className="text-3xl font-bold">Lesson 1: React Fundamentals</h2>
            </div>
            <Card className="border-2 border-blue-500/20 transition-all duration-300 hover:border-blue-500/50">
              <CardHeader className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <span className="text-blue-500">⚛️</span>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-blue-500 transition-colors">
                    React Components
                  </CardTitle>
                </div>
                <CardDescription className="text-base">
                  Master the fundamentals of React
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Components:</strong> Reusable UI pieces that manage their own content, presentation, and behavior. Learn about functional components, class components, and when to use each.</li>
                  <li><strong>State Management:</strong>
                    <ul className="list-circle pl-6 mt-2 space-y-2">
                      <li>useState for local state</li>
                      <li>useReducer for complex state logic</li>
                      <li>Context API for global state</li>
                      <li>Redux/Zustand for large applications</li>
                    </ul>
                  </li>
                  <li><strong>Lifecycle and Effects:</strong> Understanding useEffect and component lifecycle for data fetching and subscriptions</li>
                </ul>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Useful Resources:</h4>
                  <div className="space-y-2">
                    <Link
                      href="https://react.dev"
                      className="text-blue-500 hover:underline block"
                      {...externalLinkProps}
                    >
                      Official React Documentation →
                    </Link>
                    <Link
                      href="https://beta.reactjs.org/learn"
                      className="text-blue-500 hover:underline block"
                      {...externalLinkProps}
                    >
                      React Learning Path →
                    </Link>
                  </div>
                </div>
                <div className="bg-black rounded-lg p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-blue-500">Code Example</h3>
                  <pre className="bg-black p-4 rounded-lg overflow-x-auto border border-blue-500/20">
                    <code className="text-sm text-blue-50">{`// Modern React Hook Pattern
const [count, setCount] = useState(0);
const increment = () => setCount(prev => prev + 1);

// Using useEffect for side effects
useEffect(() => {
  // Subscription or data fetching logic
  return () => {
    // Cleanup function
  };
}, [dependencies]);`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lesson 2: JavaScript Libraries */}
          <div className="relative">
            <div className="absolute left-0 -ml-4 hidden h-full w-0.5 bg-gradient-to-b from-purple-500 via-green-500 to-transparent md:block" />
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20">
                <span className="text-2xl">📦</span>
              </div>
              <h2 className="text-3xl font-bold">Lesson 2: JavaScript Libraries</h2>
            </div>
            <Card className="border-2 border-purple-500/20 transition-all duration-300 hover:border-purple-500/50">
              <CardHeader className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <span className="text-purple-500">📦</span>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-purple-500 transition-colors">
                    JavaScript Libraries
                  </CardTitle>
                </div>
                <CardDescription className="text-base">
                  Essential tools for Web3 development
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>package.json:</strong> Your project's configuration file</li>
                  <li><strong>dependencies:</strong> External libraries your project needs</li>
                  <li><strong>npm commands:</strong> install, update, remove packages</li>
                </ul>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Essential Tools:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <Link
                      href="https://nodejs.org"
                      className="text-blue-500 hover:underline block"
                      {...externalLinkProps}
                    >
                      Node.js Download →
                    </Link>
                    <Link
                      href="https://docs.npmjs.com"
                      className="text-blue-500 hover:underline block"
                      {...externalLinkProps}
                    >
                      NPM Documentation →
                    </Link>
                  </div>
                </div>
                <div className="bg-black rounded-lg p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-purple-500">Code Example</h3>
                  <pre className="bg-black p-4 rounded-lg overflow-x-auto border border-purple-500/20">
                    <code className="text-sm text-purple-50">{`npm install @rainbow-me/rainbowkit wagmi viem
// This installs Web3 libraries`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lesson 3: RainbowKit & Wallets */}
          <div className="relative">
            <div className="absolute left-0 -ml-4 hidden h-full w-0.5 bg-gradient-to-b from-green-500 via-orange-500 to-transparent md:block" />
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
                <span className="text-2xl">🌈</span>
              </div>
              <h2 className="text-3xl font-bold">Lesson 3: Web3 Wallets</h2>
            </div>
            <Card className="border-2 border-green-500/20 transition-all duration-300 hover:border-green-500/50">
              <CardHeader className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-500">🌈</span>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-green-500 transition-colors">
                    RainbowKit & Wallets
                  </CardTitle>
                </div>
                <CardDescription className="text-base">
                  Connect with blockchain wallets
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>RainbowKit:</strong> Wallet connection interface</li>
                  <li><strong>MetaMask:</strong> Popular Ethereum wallet</li>
                  <li><strong>WalletConnect:</strong> Protocol for connecting wallets</li>
                </ul>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Useful Resources:</h4>
                  <div className="space-y-2">
                    <Link href="https://rainbowkit.com" className="text-blue-500 hover:underline block">
                      RainbowKit Documentation →
                    </Link>
                    <Link href="https://metamask.io" className="text-blue-500 hover:underline block">
                      MetaMask Download →
                    </Link>
                  </div>
                </div>
                <div className="bg-black rounded-lg p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-green-500">Code Example</h3>
                  <pre className="bg-black p-4 rounded-lg overflow-x-auto border border-green-500/20">
                    <code className="text-sm text-green-50">{`<ConnectButton />
// This button handles wallet connections`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lesson 4: Smart Contracts */}
          <div className="relative">
            <div className="absolute left-0 -ml-4 hidden h-full w-0.5 bg-gradient-to-b from-orange-500 to-transparent md:block" />
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20">
                <span className="text-2xl">📝</span>
              </div>
              <h2 className="text-3xl font-bold">Lesson 4: Smart Contracts</h2>
            </div>
            <Card className="border-2 border-orange-500/20 transition-all duration-300 hover:border-orange-500/50">
              <CardHeader className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <span className="text-orange-500">📝</span>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-orange-500 transition-colors">
                    Smart Contracts
                  </CardTitle>
                </div>
                <CardDescription className="text-base">
                  Build blockchain integrations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>Contract ABIs:</strong>
                    <ul className="list-circle pl-6 mt-2 space-y-2">
                      <li>Understanding ABI structure and generation</li>
                      <li>Type safety with TypeChain</li>
                      <li>Managing multiple contract versions</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Interaction Patterns:</strong>
                    <ul className="list-circle pl-6 mt-2 space-y-2">
                      <li>Read operations (view/pure functions)</li>
                      <li>Write operations (transactions)</li>
                      <li>Event listening and websocket connections</li>
                      <li>Gas optimization strategies</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Error Handling:</strong>
                    <ul className="list-circle pl-6 mt-2 space-y-2">
                      <li>Transaction failures and reversions</li>
                      <li>Network issues and retry strategies</li>
                      <li>User feedback patterns</li>
                    </ul>
                  </li>
                </ul>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Essential Tools:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <Link href="https://wagmi.sh" className="text-blue-500 hover:underline block">
                      Wagmi Documentation →
                    </Link>
                    <Link href="https://viem.sh" className="text-blue-500 hover:underline block">
                      Viem Documentation →
                    </Link>
                    <Link href="https://docs.ethers.org" className="text-blue-500 hover:underline block">
                      Ethers.js Documentation →
                    </Link>
                    <Link href="https://hardhat.org" className="text-blue-500 hover:underline block">
                      Hardhat Documentation →
                    </Link>
                  </div>
                </div>
                <div className="bg-black rounded-lg p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-orange-500">Code Example</h3>
                  <pre className="bg-black p-4 rounded-lg overflow-x-auto border border-orange-500/20">
                    <code className="text-sm text-orange-50">{`// Contract interaction example
const { data } = useContractRead({
  address: '0x...',
  abi: contractABI,
  functionName: 'balanceOf'
});`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="border-t mt-24 bg-background/50 backdrop-blur-sm">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with ❤️ for Web3 Development Learning
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </Link>
            <Link
              href="https://github.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              {...externalLinkProps}
            >
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
