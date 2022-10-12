import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/util';

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    }, []);

    return (
        <div className='success-wrapper'>
            <div className='success'>
                <p className='icon'>
                    <BsBagCheckFill />
                </p>
                <h2>Thank you for shopping at Kent's IOS Products Store!!!</h2>
                <p className='email-msg'>Please check your email inbox for the receipts of your orders.</p>
                <p className='description'>
                    If you have any questions, please refer to
                    <a className='email' href='mailto:duykhang2302@gmail.com'>
                        duykhang2302@gmail.com
                    </a>

                </p>
                <Link href="/">
                    <button type="button" width="300px" className='btn'>
                        Continue Shopping
                    </button>
                </Link>
            </div>

        </div> 
    )
}

export default Success