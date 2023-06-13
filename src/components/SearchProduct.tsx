import React, { useState } from 'react'

import TextField from '@mui/material/TextField';

import { useDispatch } from 'react-redux'
import { productActions } from '../redux/slice/products'


export default function SearchProduct() {
    const [userInput, setUserInput] = useState("")
    const dispatch = useDispatch()

    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setUserInput(event.target.value)
        dispatch(productActions.searchProducts(userInput))
    }
  return (
    <div>
      <TextField onChange={onChangeHandler} id="Search-basic" label="Search" variant="filled" />
    </div>
  )
}