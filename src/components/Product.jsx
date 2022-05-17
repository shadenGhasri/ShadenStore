import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
    const {id} = useParams();
    const [product,setProduct] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
          setLoading(true);
          const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
          setProduct(response)
          setLoading(false)

        };
        getProduct();
    
      }, []);

    return (
        <div></div>
    );
}
 
export default Product;