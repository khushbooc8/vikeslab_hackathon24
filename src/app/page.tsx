import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";
import { Flex } from "@radix-ui/themes";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";

type Item = {
    id: string;
    name: string;
    store_name: string;
    total_price: number;
    price_per_unit: number;
    unit: string; // To indicate 'g' for grams or 'l' for liters
};

const columns: ColumnDef<Item, any>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "store_name",
        header: "Store",
    },
    {
        accessorKey: "total_price",
        header: "Price",
    },
    {
        accessorKey: "price_per_unit",
        header: "Price/unit",
    },
    {
        accessorKey: "unit",
        header: "Unit",
    },
];

const sampleData: Item[] = [
    {
        id: "1",
        name: "Milk",
        store_name: "Walmart",
        total_price: 2.5,
        price_per_unit: 0.5,
        unit: "l",
    },
    {
        id: "2",
        name: "Bread",
        store_name: "Walmart",
        total_price: 1.5,
        price_per_unit: 1.5,
        unit: "kg",
    },
    {
        id: "3",
        name: "Butter",
        store_name: "Walmart",
        total_price: 3.5,
        price_per_unit: 3.5,
        unit: "kg",
    },
    {
        id: "4",
        name: "Eggs",
        store_name: "Walmart",
        total_price: 2.5,
        price_per_unit: 2.5,
        unit: "dozen",
    },
    {
        id: "5",
        name: "Cheese",
        store_name: "Walmart",
        total_price: 4.5,
        price_per_unit: 4.5,
        unit: "kg",
    },
];

export default function Home() {
    return (
        <main>
            <Flex
                direction={"column"}
                justify={"center"}
                width={"100%"}
                maxWidth={"1200px"}
            >
                <Navbar />

                <DataTable
                    columns={columns}
                    data={sampleData}
                />
            </Flex>
        </main>
    );
}
