import React, { useState } from 'react';
import {useLocalStorage} from './useLocalStorage'

const useDarkMode = (key, initialValue = false) => {
    const [darkValue, setDarkValue] = useLocalStorage(key, initialValue)
    const toggleDarkMode = () => {
        setDarkValue(!darkValue)
    }

    return [darkValue, toggleDarkMode]
}

export default useDarkMode
