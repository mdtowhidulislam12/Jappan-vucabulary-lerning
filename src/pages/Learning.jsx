import React from "react";
import { useLoaderData } from "react-router-dom";
import VocabularyCard from "./StartLearning/cards/VocabularyCard";

const Learning = () => {
    const vocabularies = useLoaderData();

    console.log(vocabularies)
   
    return (
        <div className="p-4">
            <h1 className="py-4 my-6 text-lg font-bold text-center text-white rounded-lg bg-stone-500">Start Learning</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 ">
                {vocabularies.map((vocabulary) => (
                   <VocabularyCard vocabulary={vocabulary}></VocabularyCard>
                ))}
            </div>
        </div>
    );
};

export default Learning;
