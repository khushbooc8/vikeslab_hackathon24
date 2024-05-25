export type Item = {
    id: string;
    name: string;
    store_name: "Walmart" | "thrifty" | "save-on";
    total_price: number;
    price_per_unit: number;
    unit: string; // To indicate 'g' for grams or 'l' for liters
};

export const sampleData: Item[] = [
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
