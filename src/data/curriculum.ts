import { Curriculum } from "../lib/types";

export const curriculum: Curriculum = {
  version: "0.1.0",
  levels: [
    {
      id: "level-1",
      title: "Level 1 — Forex Foundations",
      description: "Core building blocks: pairs, pips, orders, leverage, market participants.",
      modules: [
        {
          id: "module-basics",
          title: "Foundations",
          description: "What forex is and how it works.",
          lessons: [
            {
              id: "l1-what-is-forex",
              title: "What is the forex market?",
              estimatedMinutes: 8,
              content: [
                { type: "text", title: "Overview", body: "Forex is the global marketplace for exchanging national currencies. It's decentralised and runs 24 hours on weekdays. In this lesson you'll learn the role of market participants and the scale of FX markets." },
                { type: "diagram", name: "market-participants" },
                { type: "exercise", id: "ex-l1-1", description: "Identify three major FX market participants and briefly describe their motivations." }
              ],
              quiz: [
                { id: "q1", type: "tf", prompt: "The forex market is centrally exchange-traded on a single exchange.", answer: "false", explanation: "Forex is largely decentralised and trades OTC across many venues." },
                { id: "q2", type: "multiple", prompt: "Which of the following is a major currency pair?", choices: [ { id: "c1", text: "EUR/USD", correct: true }, { id: "c2", text: "BTC/USD" }, { id: "c3", text: "EUR/JPY", correct: true } ], explanation: "Major pairs involve the USD and other major currencies." }
              ]
            },
            {
              id: "l1-pips-and-lots",
              title: "Pips, lots, and spreads",
              estimatedMinutes: 12,
              content: [
                { type: "text", title: "Pips and lot sizes", body: "A pip is the standard unit of movement in FX. For most pairs it's the 4th decimal place. Lot sizes determine how many units of currency you trade. Example calculations are provided below." },
                { type: "diagram", name: "pip-example" }
              ],
              quiz: [
                { id: "q3", type: "numeric", prompt: "If EUR/USD moves from 1.1200 to 1.1250 and you are long 100,000 units, what is the pip move in USD? (Enter numeric value)", answer: 500, explanation: "A 50 pip move × $10 per pip for standard lot = $500." }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "level-2",
      title: "Level 2 — Technical Analysis",
      description: "Candle reading, structure, support and resistance, indicators.",
      modules: [
        {
          id: "module-candles",
          title: "Candles and Structure",
          description: "Read candles and simple structure.",
          lessons: [
            {
              id: "l2-candlestick-anatomy",
              title: "Candlestick anatomy",
              estimatedMinutes: 10,
              content: [
                { type: "diagram", name: "candlestick-anatomy" },
                { type: "text", title: "How to read candles", body: "Each candle shows open, high, low and close for a timeframe. The body shows direction. Wicks show rejection and extremes." }
              ],
              quiz: [
                { id: "q4", type: "multiple", prompt: "Which part of the candlestick shows the highest traded price during the timeframe?", choices: [ { id: "a", text: "Body" }, { id: "b", text: "Upper wick", correct: true }, { id: "c", text: "Lower wick" } ], explanation: "The wick reaches the high and low." }
              ]
            }
          ]
        }
      ]
    }
  ]
};
