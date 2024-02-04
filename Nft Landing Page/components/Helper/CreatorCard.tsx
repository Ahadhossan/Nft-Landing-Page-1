import React from 'react'
import Image from 'next/image';

interface Props {
  image: string;
  user: string;
  price: string;
}

const CreatorCard = ({image, price, user }: Props) => {
  return (
    <div className="text-center">
      <div>
        <Image
          src={`${image}`}
          alt={user}
          width={120}
          height={120}
          className="mx-auto"
        />
        <h1 className="mt-[1.5rem] text-white text-[25px]">{user}</h1>
        <p className="text-yellow-400">{price}</p>
      </div>
    </div>
  );
};

export default CreatorCard
