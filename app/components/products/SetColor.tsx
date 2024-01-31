'use client'

import { SelectedImgType, CartProductType } from "@/app/product/[productId]/ProductDetails"
import React from "react";

interface SetColorProps {
    images: SelectedImgType[],
    cartProduct: CartProductType,
    handleColorSelect: (value: SelectedImgType) => void
}

const SetColor: React.FC<SetColorProps> = ({
    images,
    cartProduct,
    handleColorSelect,
}) => {
    return( 
    <div>
        <div className="flex gap-4 items-center">
                <span className="font-semibold">Color:</span>
            </div>
    </div>
)
}

export default SetColor;