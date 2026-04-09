import { Check} from "lucide-react";
import { toast } from "react-toastify";

const ProductCard = ({ productData, selectedProduct, setSelectedProduct }) => {

    const isSelected = selectedProduct.find(product => product.id === productData.id)
    // console.log(isSelected);
    
    const handleBuybtn = (productData) =>{
        if(isSelected){
          toast.error('Already Added')
          return
        }
        const filtered = [...selectedProduct, productData]
        setSelectedProduct(filtered)
       
        toast.success('Added To The Cart')
        
        
    }
  return (
    <div className="card bg-base-100 shadow-sm hover:-translate-y-2">
      <div className="card-body">
        <div className="flex justify-between">
            <div className="p-5 rounded-full border-1 border-[#f2f2f2] w-18 h-18">
               <img src={productData.icon} alt="" />
            </div>
            <span className={`badge px-3 py-3 rounded-full text-[#BB4D00] font-medium capitalize ${productData.tag === 'best seller' ? 'bg-[#FEF3C6]' : productData.tag === 'popular' ? 'bg-[#E1E7FF] text-blue-600' : 'bg-[#DBFCE7]'}`}>{productData.tag}</span>
        </div>
        <div>
          <h2 className="text-2xl text-[#101727] font-bold">{productData.name}</h2>
          <p>{productData.description}</p>
          <span className="text-xl"> <span className="font-bold text-2xl text-[#101727]">${productData.price}</span>/{productData.period}</span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs grow-1">
          {
            productData.features.map((feature, index) => <li key={index} className="flex gap-2 items-center"><Check></Check>{feature}</li>)
          }
        </ul>
        <div className="mt-6">
          <button onClick={() => handleBuybtn(productData)} className="btn btn-primary btn-block rounded-full font-bold">
            {
                isSelected ? 'Added To Cart' : 'Buy Now'
            }
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
