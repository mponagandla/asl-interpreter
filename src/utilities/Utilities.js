import React from "react";


export const splitTextToWords = (sentence) => {
    return sentence.match(/\b(\w+)'?(\w+)?\b/g)
}