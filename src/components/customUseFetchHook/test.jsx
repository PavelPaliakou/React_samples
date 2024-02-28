import useFetch from ".";

export default function TestCustomUseFetchHook() {
    const { data, loading, error } = useFetch(`https://dummyjson.com/products`, {});

    console.log(data, loading, error);

    return (
        <div>
            <h1>Custom useFetch Hook</h1>
            {
                loading
                    ? <h2>Loading...</h2>
                    : null
            }
            {
                error
                    ? <h2>{error}</h2>
                    : null
            }
            {
                data && data.products && data.products.length 
                ? data.products.map((product) => (<p key={product.id}>{product.title}</p>))
                :null
            }
        </div>
    );
}