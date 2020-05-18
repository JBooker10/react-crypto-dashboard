import React, { useContext, useEffect } from "react";
import cryptoStreamCTX from "./../../context/pricing/pricingContext";
import Loader from "./../Icons/Loader";
import moment from "moment";
import Numeral from "numeral";
import { HorizontalBar } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

class TradingQueue {
  data: any;
  limit: number;
  constructor(length: number) {
    this.data = [];
    this.limit = length;
  }

  push(trade: any) {
    if (this.data.length <= this.limit) {
      this.data.push(trade);
    } else {
      this.data.shift();
      this.data.push(trade);
    }
  }
}

const queue = new TradingQueue(8);

export default function Trades({ symbol }: any) {
  const cryptoStream = useContext(cryptoStreamCTX);
  const { streamQuote, quote } = cryptoStream;
  const length: number = Object.keys(quote).length;

  useEffect(() => {
    streamQuote(symbol);
  }, [length, streamQuote, symbol]);

  if (
    (quote.TYPE === "0" && quote.F === "2") ||
    quote.F === "1" ||
    quote.F === "9"
  ) {
    setInterval(() => queue.push(quote), 1000);
  }

  const data = {
    labels: queue.data.map((q: any) => moment.unix(q.TS).format(" hh:mm:ss a")),
    datasets: [
      {
        label: "Trade Amount",
        backgroundColor: "rgba(47, 132, 252, 1)",
        borderColor: "rgba(47, 132, 252, 1)",
        hoverBackgroundColor: "rgba(47, 132, 252, 1)",
        hoverBorderColor: "rgba(47, 132, 252, 1)",
        data: queue.data.map((q: any) => q.TOTAL),
      },

      //   {
      //     label: "Purchased Amount",
      //     backgroundColor: "#1f90ff",
      //     borderColor: "#1f90ff",
      //     hoverBackgroundColor: "#1f90ff",
      //     hoverBorderColor: "#1f90ff",
      //     data: queue.data
      //
      //       .filter((q: any) => q.F === "2")
      //       .map((q: any) => q.TOTAL),
      //   },
      //   {
      //     label: "Sell Amount",
      //     backgroundColor: "#f06363",
      //     borderColor: "#f06363",
      //     hoverBackgroundColor: "#f06363",
      //     hoverBorderColor: "#f06363",
      //     data: queue.data
      //
      //       .filter((q: any) => q.F === "1" || q.F === "9")
      //       .map((q: any) => q.TOTAL),
      //   },
    ],
  };

  const options = {
    // animation: {
    //   //   easing: "easeOutBack",
    //   currentStep: 5,
    //   numSteps: 5,
    // },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
            fontColor: "#fff",
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            fontColor: "rgba(255,255,255)",
            display: false,
          },
        },
      ],
    },
    plugins: {
      datalabels: {
        display: true,
        color: "rgba(255,255,255)",
        align: "right",
        formatter: (val: any, ctx: any) => Numeral(val).format("$0.00"),
      },
    },
  };

  return (
    <div>
      {queue.data.length ? (
        <HorizontalBar
          data={data}
          options={options}
          datasetKeyProvider={() => {
            return queue.data[0].ID;
          }}
        />
      ) : (
        <div style={{ display: "flex", height: "50vh" }}>
          <Loader width={100} height={100} />
        </div>
      )}
    </div>
  );
}
