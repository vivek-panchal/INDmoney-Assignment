'use client';
import NavigationSidebar from "@/components/NavigationMenu";

interface MenuItem {
  title: string;
  url?: string;
  subMenuItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: 'Invest',
    subMenuItems: [
      {
        title: 'INDstocks',
        subMenuItems: [
          {
            title: 'Stocks',
            url: 'https://www.indmoney.com/stocks',
          },
          {
            title: 'SIP in Stocks',
            url: 'https://www.indmoney.com/stocks/category/sip-in-stocks',
          },
          {
            title: 'Indices',
            url: 'https://www.indmoney.com/indices',
          },
          {
            title: 'IPO',
            url: 'https://www.indmoney.com/ipo',
          },
          {
            title: 'Futures & Options',
            url: 'https://www.indmoney.com/futures-and-options',
          },
        ],
      },
      {
        title: 'US Stocks',
        subMenuItems: [
          {
            title: 'US Stocks',
            url: 'https://www.indmoney.com/us-stocks',
          },
        ]
      },
      {
        title: 'ETFs',
        subMenuItems: [
          {
            title: 'Global ETFs',
            url: 'https://www.indmoney.com/us-stocks/top-etfs?heading=Explore+US+Stocks+Categories',
          },
          {
            title: 'Gold ETFs',
            url: 'https://www.indmoney.com/stocks/category/gold-etfs',
          },
          {
            title: 'All ETFs',
            url: 'https://www.indmoney.com/stocks/etf',
          },
        ]
      },
      {
        title: 'Mutual Funds',
        subMenuItems: [
          {
            title: 'All Mutual Funds',
            url: 'https://www.indmoney.com/mutual-funds/equity-funds',
          },
          {
            title: 'Equity Funds',
            url: 'https://www.indmoney.com/mutual-funds/equity-funds',
          },
          {
            title: 'Index Funds',
            url: 'https://www.indmoney.com/mutual-funds/best-index-funds',
          },
          {
            title: 'Debt Funds',
            url: 'https://www.indmoney.com/mutual-funds/debt-funds',
          },
          {
            title: 'Hybrid Funds',
            url: 'https://www.indmoney.com/mutual-funds/hybrid-funds',
          },
        ]
      },
      {
        title: 'NPS',
        subMenuItems: [
          {
            title: 'Invest in NPS',
            url: 'https://www.indmoney.com/features/nps-national-pension-scheme',
          },
          {
            title: 'NPS Calculator',
            url: 'https://www.indmoney.com/calculators/nps-calculator',
          },
        ]
      },
      {
        title: "Other Instruments",
        subMenuItems: [
          {
            title: "Fixed Deposits",
            url: "https://www.indmoney.com/fixed-deposit",
          },
          {
            title: "Insurance",
            url: "https://www.indmoney.com/insurance",
          },
        ]
      }
      
    ],
  },
  {
    title: 'Features',
    subMenuItems: [
      {
        title: 'Calculators',
        subMenuItems: [
          {
            title: 'SIP Calculator',
            url: 'https://www.indmoney.com/calculators/sip-calculator',
          },
          {
            title: 'Brokerage Calculator',
            url: 'https://www.indmoney.com/calculators/brokerage-calculator',
          },
          {
            title: 'SWP Calculator',
            url: 'https://www.indmoney.com/calculators/swp-calculator',
          },
          {
            title: 'Regular vs Direct MF Calculator',
            url: 'https://www.indmoney.com/calculators/direct-regular-mutual-funds',
          },
          {
            title: 'Lumpsum Calculator',
            url: 'https://www.indmoney.com/calculators/lumpsum-calculator',
          },

          {
            title: 'GST Calculator',
            url: 'https://www.indmoney.com/calculators/gst-calculator',
          },
          {
            title: 'NPS Calculator',
            url: 'https://www.indmoney.com/calculators/nps-calculator',
          },
          {
            title: 'Post Office RD Calculator',
            url: 'https://www.indmoney.com/calculators/post-office-rd-calculator',
          },
          {
            title: 'Salary Calculator',
            url: 'https://www.indmoney.com/calculators/salary-calculator',
          },
          {
            title: 'Gratuity Calculator',
            url: 'https://www.indmoney.com/calculators/gratuity-calculator',
          },
          {
            title: 'Mutual Fund Returns Calculator',
            url: 'https://www.indmoney.com/calculators/mutual-funds-returns-calculator',
          },
          {
            title: 'View all Calculator',
            url: 'https://www.indmoney.com/calculators',
          },
        ],
      },
      {
        title: 'Features',
        subMenuItems: [
          {
            title: 'Trading App',
            url: 'https://www.indmoney.com/features/best-trading-app',
          },
          {
            title: 'Goals Tracker',
            url: 'https://www.indmoney.com/features/goals-tracker',
          },
          {
            title: 'Track Your Finances',
            url: 'https://www.indmoney.com/features/track-all-investments',
          },
          {
            title: 'Track Your Credit Card Bills',
            url: 'https://www.indmoney.com/features/track-credit-card-bills',
          },
          {
            title: 'Credit Score',
            url: 'https://www.indmoney.com/check-free-credit-score',
          },
          {
            title: 'Blogs',
            url: 'https://www.indmoney.com/articles',
          },
          {
            title: 'Mutual Fund Analytics',
            url: 'https://www.indmoney.com/features/mutual-fund-analytics',
          },
          {
            title: 'Compare Mutual Funds',
            url: 'https://www.indmoney.com/mutual-funds/compare',
          },
          {
            title: 'Switch Regular to Direct MF',
            url: 'https://www.indmoney.com/features/switch-regular-to-direct-mutual-fund',
          },
          {
            title: 'Track Family Mutual Funds',
            url: 'https://www.indmoney.com/features/track-family-mutual-funds',
          },
          {
            title: 'Set Nominee for Mutual Funds',
            url: 'https://www.indmoney.com/mutual-funds/mutual-fund-nomination',
          },
          {
            title: 'View all Features',
            url: 'https://www.indmoney.com/features',
          },
        ],
      }
    ],
  },
  {
    title: 'Markets',
    subMenuItems: [
      {
        title: 'Market Movers',
        subMenuItems: [
          {
            title: 'Market Today',
            url: 'https://www.indmoney.com/market',
          },
          {
            title: '52 Week High',
            url: 'https://www.indmoney.com/stocks/category/52-week-high',
          },
          {
            title: '52 Week Low',
            url: 'https://www.indmoney.com/stocks/category/52-week-low',
          },
          {
            title: 'Top Gainers',
            url: 'https://www.indmoney.com/stocks/category/top-gainers',
          },
          {
            title: 'Top Losers',
            url: 'https://www.indmoney.com/stocks/category/top-losers',
          },
          {
            title: 'Only Buyers',
            url: 'https://www.indmoney.com/stocks/category/only-buyers',
          },
          {
            title: 'Only Sellers',
            url: 'https://www.indmoney.com/stocks/category/only-sellers',
          },
        ],
      },
      {
        title: 'Stock Category',
        subMenuItems: [
          {
            title: 'Stocks to Buy Today',
            url: 'https://www.indmoney.com/stocks/category/buy-stocks',
          },
          {
            title: 'Penny Stocks',
            url: 'https://www.indmoney.com/stocks/category/penny-stocks',
          },
          {
            title: 'Multi-bagger Stocks',
            url: 'https://www.indmoney.com/stocks/category/multibagger-stocks',
          },
          {
            title: 'Nifty 50 Stocks',
            url: 'https://www.indmoney.com/stocks/category/nifty-50-stocks',
          },
          {
            title: 'Large Cap Stocks',
            url: 'https://www.indmoney.com/stocks/category/large-cap-stocks',
          },
          {
            title: 'Mid Cap Stocks',
            url: 'https://www.indmoney.com/stocks/category/mid-cap-stocks',
          },
          {
            title: 'Small Cap Stocks',
            url: 'https://www.indmoney.com/stocks/category/small-cap-stocks',
          },
        ],
      },
      {
        title: 'Indices',
        subMenuItems: [
          {
            title: 'BSE Sensex',
            url: 'https://www.indmoney.com/indices/sensex',
          },
          {
            title: 'Nifty 50',
            url: 'https://www.indmoney.com/indices/nifty-50',
          },
          {
            title: 'Nifty Midcap 100',
            url: 'https://www.indmoney.com/indices/nifty-midcap-100',
          },
          {
            title: 'Bank Nifty',
            url: 'https://www.indmoney.com/indices/bank-nifty',
          },
          {
            title: 'FINNIFTY',
            url: 'https://www.indmoney.com/indices/nifty-financial',
          },
          {
            title: 'Nifty 500',
            url: 'https://www.indmoney.com/indices/nifty-500',
          },
          {
            title: 'Nifty IT',
            url: 'https://www.indmoney.com/indices/nifty-it',
          },
          {
            title: 'View all Indices',
            url: 'https://www.indmoney.com/indices',
          },
        ],
      },
      {
        title: 'Global Indices',
        subMenuItems: [
          {
            title: 'Gift Nifty',
            url: 'https://www.indmoney.com/indices/gift-nifty',
          },
          {
            title: 'Dow Jones Industrial Average',
            url: 'https://www.indmoney.com/indices/dow-jones-industrial-average',
          },
          {
            title: 'S&P 500',
            url: 'https://www.indmoney.com/indices/s-p-500',
          },
          {
            title: 'Nasdaq 100',
            url: 'https://www.indmoney.com/indices/nasdaq-100',
          },
          {
            title: 'Russell 2000 Index',
            url: 'https://www.indmoney.com/indices/russell-2000-index',
          },
          {
            title: 'Dow Jones Market',
            url: 'https://www.indmoney.com/indices/dow-jones-market',
          },
        ],
      },
    ],
  },
  {
    title: 'Pricing',
    url: 'https://www.indmoney.com/pricing?type=indian-stocks',
  },
  {
    title: 'Disclosure',
    subMenuItems: [
      {
        title: 'Complaint Status',
        url: 'https://www.indmoney.com/complaints-status',
      },
      {
        title: 'SEBI Investor Charter - Investment Advisor',
        url: 'https://www.indmoney.com/sebi-investor-charter',
      },
      {
        title: 'More',
        url: 'https://www.indmoney.com/page/policy-center',
      },
    ],
  },
];

export default function Home() {
  return (
    <nav>
      <div className="flex w-full">
        <NavigationSidebar menuItems={menuItems} />
      </div>
    </nav>
  );
}
