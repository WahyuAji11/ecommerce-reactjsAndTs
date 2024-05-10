'use client'

import Avatar from "@/app/components/Avatar";
import Heading from "@/app/components/products/Heading";
import { product } from "@/utils/product";
import { Rating } from "@mui/material";
import moment from "moment";

interface ListRatingProps{
    product: any;
}

const ListRating:React.FC<ListRatingProps> = () => {
    return (
    <div>
        <Heading title="Product Review" />
        <div className="text-sm mt-2">
            {product.reviews && product.reviews.map
            ((reviews, any) =>
            {
                return <div key={reviews.id}
                className="max-w-{300px}">
                    <div className="flex gap-2 items-center">
                        <Avatar src={reviews.user.image} />
                        <div className="font-semibold">{reviews?.user.name}</div>
                        <div className="font-light">{moment(reviews.createdDate).fromNow()}</div>
                    </div>
                    <div className="mt-2">
                        <Rating value={reviews.rating} readOnly />
                        <div className="mt-2">{reviews.comment}</div>
                        <hr className="mt-4 mb-4" />
                    </div>
                </div>
            })}
        </div>
    </div>
    )
}

export default ListRating;