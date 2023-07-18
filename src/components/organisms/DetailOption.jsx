import React, { useEffect, useState } from 'react'
import OptionContainer from '../atoms/option/OptionContainer'
import OptionListBox from 'components/atoms/option/OptionListBox'
import OptionItem from 'components/molecules/OptionItem'
import SubmitButton from 'components/atoms/SubmitButton'
import TotalPrice from 'components/atoms/option/TotalPrice'
import OptionSelected from 'components/molecules/OptionSelected'
import strPrice from 'utils/price'
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const DetailOption = (props) => {
  const initialList = props.options.map((item) => { 
    return {id:item.id, quantity: 0, optionName: item.optionName, price: item.price} 
  })

  const [quantity, setQuantity] = useState(initialList)
  const [open, setOpen] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)

  const selectOption = (id) => {
    setOpen(prev => false)
    const newList = quantity.map((obj) => (
      obj.id === id && obj.quantity === 0
      ? {...obj, quantity: obj.quantity + 1}
      : {...obj} 
    ))
    setQuantity(prev => newList)
  }

  const changeQuantity = (id, newQuntity) => {
    const newList = quantity.map((obj) => (
      obj.id === id
      ? {...obj, quantity: newQuntity}
      : {...obj} 
    ))
    setQuantity(prev => newList)
  }

  useEffect(()=>{
    let p = 0;
    let q = 0
    for (const item of quantity) {
      if (item.quantity > 0) {
        p += item.quantity * item.price
        q += item.quantity
      }
    }
    setTotalPrice(prev => p)
    setTotalQuantity(prev => q)
  }, [quantity])

  return (
    <OptionContainer>
      <OptionListBox open={open}>
        <OptionItem summary={true} onClick={()=>setOpen(prev=>!prev)}> 
          <span className="flex"> 
            선택하기 
            {open 
              ? <RiArrowUpSLine className='w-5 h-5 ml-auto'/>
              : <RiArrowDownSLine className='w-5 h-5 ml-auto'/>
            }
          </span>
        </OptionItem>
        {open 
          ? props.options?.map((item)=>(
            <OptionItem 
              key={item.optionName}
              optionPrice={strPrice(item.price)}
              onClick={() => selectOption(item.id)}
            >
              {item.optionName}
            </OptionItem>
            ))
          : null
        }
        
      </OptionListBox>
      {quantity.map((item) => {
          if (item.quantity > 0) {
            return <OptionSelected 
              key={item.optionName} 
              optionName={item.optionName} 
              quantity={item.quantity}
              price={strPrice(item.quantity * item.price)}
              subDisabled={item.quantity === 1}
              subOnClick={() => changeQuantity(item.id, item.quantity - 1)}
              addOnClick={() => changeQuantity(item.id, item.quantity + 1)}
              clearOnClick={() => changeQuantity(item.id, 0)}
              onChange={(event) => changeQuantity(item.id, parseInt(event.target.value))}
              />
          }
        })}
      <TotalPrice price={strPrice(totalPrice)} quantity={totalQuantity}/>

      <div className='grid grid-cols-2 gap-4'>
        <SubmitButton color="white" border="1px solid gray">장바구니</SubmitButton>
        <SubmitButton>구매하기</SubmitButton>
      </div>
    </OptionContainer>
  )
}

export default DetailOption