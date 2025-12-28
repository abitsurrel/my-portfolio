/**
 *  THIS PERSONAL PORTFOLIO WAS DEVELOPED BY: DIANNE RUSSEL P. OCAMPO
 *  FOR THE PURPOSE OF SHOWCASING HER PROGRAMMING SKILLS AS WELL AS 
 *  DESINGING USER INTERFACES.
 *  
 * SOURCE CODE: https://github.com/abitsurrel/my-portfolio/tree/main
 *  MIT License
 *  Copyright (c) 2025 Dianne Russel Ocampo 
 */

import { useState, useEffect, useRef } from 'react';

const useInView = (options) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {

        const currentRef = ref;
        
        const observer = new IntersectionObserver(([entry]) => {
            setIsInView(entry.isIntersecting);
        }, options);

        if (currentRef.current) {
            observer.observe(currentRef.current);
        }

        return () => {
            if (currentRef.current) {
            observer.unobserve(currentRef.current);
            }
            observer.disconnect();
        };

    }, [ref, options]);

    return [ref, isInView];
};

export default useInView;