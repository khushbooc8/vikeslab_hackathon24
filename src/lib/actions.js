"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleData = void 0;
var fs = require("fs");
exports.sampleData = [
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
function get_wal_data(filePath) {
    var jsonData = fs.readFileSync(filePath, "utf-8");
    var items = [];
    try {
        var parsedData = JSON.parse(jsonData);
        if (Array.isArray(parsedData)) {
            for (var _i = 0, parsedData_1 = parsedData; _i < parsedData_1.length; _i++) {
                var item = parsedData_1[_i];
                if (item && item.__typename === "Product") {
                    items.push(item);
                }
            }
        }
    }
    catch (error) {
        console.error("Error parsing JSON:", error);
    }
    return items;
}
var filePath = "./walmart.json";
var items = get_wal_data(filePath);
console.log(items);
