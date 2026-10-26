import config from "../config";

export type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  description?: string;
  sizes?: string;
  stock?: string;
  category?: string;
  image2?: string;
  image3?: string;
};

const parseCsv = (csv: string): string[][] => {
  const rows: string[][] = [];
  let row: string[] = [];
  let value = "";
  let insideQuotes = false;

  for (let i = 0; i < csv.length; i += 1) {
    const char = csv[i];

    if (char === '"') {
      if (insideQuotes && csv[i + 1] === '"') {
        value += '"';
        i += 1;
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === "," && !insideQuotes) {
      row.push(value);
      value = "";
    } else if ((char === "\n" || char === "\r") && !insideQuotes) {
      if (char === "\r" && csv[i + 1] === "\n") i += 1;
      row.push(value);
      if (row.some((cell) => cell.trim() !== "")) rows.push(row);
      row = [];
      value = "";
    } else {
      value += char;
    }
  }

  if (insideQuotes) throw new Error("Product sheet contains an unclosed CSV quote");
  if (value || row.length > 0) {
    row.push(value);
    if (row.some((cell) => cell.trim() !== "")) rows.push(row);
  }

  return rows;
};

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(config.productSheetCsvUrl);
  if (!response.ok) throw new Error(`Product sheet request failed: ${response.status}`);

  const rows = parseCsv((await response.text()).replace(/^\uFEFF/, ""));
  const headers = rows.shift()?.map((header) => header.trim().toLowerCase());
  if (!headers || !["id", "name", "price", "image"].every((header) => headers.includes(header))) {
    throw new Error("Product sheet is missing one or more required columns: id, name, price, image");
  }

  return rows.map((row) => {
    const cells = new Map(headers.map((header, index) => [header, row[index] ?? ""]));
    return {
      id: cells.get("id") ?? "",
      name: cells.get("name") ?? "",
      price: cells.get("price") ?? "",
      image: cells.get("image") ?? "",
      description: cells.get("description"),
      sizes: cells.get("sizes"),
      stock: cells.get("stock"),
      category: cells.get("category"),
      image2: cells.get("image2"),
      image3: cells.get("image3"),
    };
  });
};
