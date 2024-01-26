import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"

interface Info {
	m: number;
	last: number;
	buy: number;
	sell: number;
	symbol: string
}

export default async function Bitcoin() {

	const dynamicData = await fetch(`https://blockchain.info/ticker`, { cache: 'no-store' })
	// const dynamicData = await fetch(`https://blockchain.info/ticker`, { next: { revalidate: 0 } })
	const data = await dynamicData.json();
	return (
		<>
			<div>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Currency</TableHead>
							<TableHead>15m</TableHead>
							<TableHead>Last</TableHead>
							<TableHead>Buy</TableHead>
							<TableHead>Sell</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{Object.keys(data).map((key) => {
							let currency = data[key];
							let array = Object.values(currency);
							return (
								<Box key={key} m={array[0]} last={array[1]} buy={array[2]} sell={array[3]} symbol={array[4]} />
							);
						})}
					</TableBody>
				</Table>
			</div>
		</>
	);
}

async function Box(props: Info) {
	return (
		<>
			<TableRow>
				<TableCell>{props.symbol}</TableCell>
				<TableCell>{props.m}</TableCell>
				<TableCell>{props.last}</TableCell>
				<TableCell>{props.buy}</TableCell>
				<TableCell>{props.sell}</TableCell>
			</TableRow>
		</>
	)
}

{/* <h2>15m</h2>
<p>{props.m}</p>
<h2>last</h2>
<p>{props.last}</p>
<h2>buy</h2>
<p>{props.buy}</p>
<h2>sell</h2>
<p>{props.sell}</p> */}
