'use client'
import { useState, useCallback } from "react";
import { Rating } from "@mui/material";
import SetColor from "@/app/components/products/SetColor";
import SetQuantity from "@/app/components/products/SetQuantity";
import Button from "@/app/components/Button";
import ProductImage from "@/app/components/products/ProductImage";

interface ProductDetailsProps {
    product: any;
}

export type CartProductType = {
    id: string;
    name: string;
    description: string;
    category: string;
    brand: string;
    selectedImg: SelectedImgType;
    quantity: number;
    price: number;
};

export type SelectedImgType = {
    color: string;
    colorCode: string;
    image: string;
};

const Horizontal = () => {
    return <hr className="w-[30%] mt-2 my-2" />;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        selectedImg: { ...product.images[0] },
        quantity: 1,
        price: product.price,
    });

    console.log(cartProduct);

    const productRating =
        product.reviews.reduce((acc: number, items: any) => items.rating + acc, 0) /
        product.reviews.length;

    const handleColorSelect = useCallback(
        (value: SelectedImgType) => {
            setCartProduct((prevCartProduct) => ({
                    ...prevCartProduct,
                    selectedImg: value,
                }));
            }, [cartProduct.selectedImg]
    );

    const handleQtyIncrease = useCallback(() => {
        setCartProduct((prev) => ({
            ...prev,
            quantity: prev.quantity + 1,
        }));
    }, []);

    const handleQtyDecrease = useCallback(() => {
        setCartProduct((prev) => ({
            ...prev,
            quantity: prev.quantity > 1 ? prev.quantity - 1 : 1,
        }));
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProductImage 
            cartProduct={cartProduct} 
            product={product} 
            handleColorSelected={handleColorSelect} />
            <div className="flex flex-col gap-1 text-slate-500 text-sm">
                <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
                <div className="flex items-center gap-2">
                    <Rating value={productRating} readOnly />
                    <div>{product.reviews.length} reviews</div>
                </div>
                <div className="text-justify">{product.description}</div>
                <Horizontal />
                <div>
                    <span className="font-semibold">Category: </span> {product.category}
                </div>
                <div>
                    <span className="font-semibold">Brand: </span> {product.brand}
                </div>
                <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                </div>
                <Horizontal />
                <SetColor
                    cartProduct={cartProduct}
                    images={product.images}
                    handleColorSelect={handleColorSelect}
                />
                <Horizontal />
                <SetQuantity
                    cartProduct={cartProduct}
                    handleQtyIncrease={handleQtyIncrease}
                    handleQtyDecrease={handleQtyDecrease}
                />
                <Horizontal />
                <div className="max-w-[300px]">
                    <Button label="Add To Cart" onClick={() => 
                        {}} />
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
