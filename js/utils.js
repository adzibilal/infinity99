export function rupiahFormat(price) {
    if (price === "-") return price;
    return "Rp " + price.toLocaleString("id-ID");
}
