import { FC } from "react";

type Props = {
  number: number,
  id:string,
  className: string,
  handleClick: () => void,
}

export const Item: FC<Props> = ({number, id, className, handleClick}) => {
  return (
    <div 
      id={id}
      className={className}
      onClick={handleClick}
      data-number={number}
    /> 
  )
}

