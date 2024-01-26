import Bitcoin from "./(bitcoin)/page";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import Converter from "./(converter)/page";
import { Separator } from "@/components/ui/separator";

export default function Home() {
	return (
		<>
			<div className="flex justify-between">
				<ModeToggle />
				<div className="m-5">
					<Sheet>
						<SheetTrigger asChild>
							<Button>Calculator</Button>
						</SheetTrigger>
						<SheetContent>
							<SheetHeader>
								<SheetTitle>Bitcoin Calculator</SheetTitle>
								<Separator className="my-4" />
								<SheetDescription>
									Input a figure and select a currency to calculate the value in bitcoin.
								</SheetDescription>
								<Converter />
							</SheetHeader>
						</SheetContent>
					</Sheet>
				</div>
			</div>

			<div>
				<h1 className="flex justify-center font-semibold text-3xl">Bitcoin Prices</h1>
			</div>
			<div className="flex min-h-screen flex-col items-center justify-between p-24">
				<Bitcoin />
			</div>
		</>
	);
}
