
import { useState, useEffect } from 'react';

export const useFetchProductsData = ({ onError }) => {

    const [page, setPage] = useState(1);
    const [cardsData, setCardsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getCardsData = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`https://6075786f0baf7c0017fa64ce.mockapi.io/products?page=${page}&limit=16`);
            const results = await response.json();
            setCardsData((prev) => [...prev, ...results]);
            setPage((prev) => prev + 1);
        } catch (error) {
            onError?.(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getCardsData();
         // eslint-disable-next-line
    }, []);

    return {
        cardsData,
        isLoading,
        getCardsData
    }
};