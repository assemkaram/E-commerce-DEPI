import ProductCard from "../product/ProductCard";

function FlashSales(){
    // Layer 1 => Stats (Mangement Data)
    // Layer 2 => Effect (API Call)
    // Layer 3 => Handlers (Logic)
    // Layer 4 => View (Jsx)
    return (
        <section className="flash-sales flex flex-col gap-12 max-w-page mx-auto">
            <div className="flex items center justify-between">
                <h2 className="text-base font-medium text-black"> Flash Sales</h2>
                <a href="#">view all</a>
            </div>
            <div className="flex gap-5">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </section>
    )
}

export default FlashSales;