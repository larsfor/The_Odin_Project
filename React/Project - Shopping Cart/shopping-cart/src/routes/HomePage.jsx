import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";

export default function HomePage() {

    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      fetch('https://fakestoreapi.com/products?limit=10', { mode: "cors" })
        .then((response) => {
          if (response.status >= 400) {
            throw new Error('Server error');
          }
          return response.json();
        })
        .then((response) => setProducts(response))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    }, [])

    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading</p>;

    return(
        <>
        <div className='grid-container'>
        { products.map(item => (
          <div key={item.id}>
            <ProductCard 
              id={item.id}
              title={item.title}
              price={item.price}
              desc={item.description}
              category={item.category}
            />
          </div>
        ))}
        </div>
        </>
    )
}