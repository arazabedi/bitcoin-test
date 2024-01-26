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

interface Currency {
  [key: string]: number | string;
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
								<Box key={key} m={array[0] as number} last={array[1] as number} buy={array[2] as number} sell={array[3] as number} symbol={array[4] as string} />
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
