import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { priceFormater } from "../../utils/formatter";

export function Summary() {

    const { transactions } = useContext(TransactionsContext)


    const summary = transactions.reduce(
        (acc, transactions) => {
            if(transactions.type === 'income'){
                acc.income += transactions.price;
                acc.total += transactions.price;
            } else {
                acc.outcome += transactions.price;
                acc.total -= transactions.price;
            }

            return acc
         },
        {
            income: 0,
            outcome: 0,
            total: 0
        }
    )


    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color={"#00b37e"} />
                </header>
                <strong>{priceFormater.format(summary.income)}</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color={"#f75a68"} />
                </header>
                <strong>{priceFormater.format(summary.outcome)}</strong>
            </SummaryCard>
            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color={"#fff"} />
                </header>
                <strong>{priceFormater.format(summary.total)}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}