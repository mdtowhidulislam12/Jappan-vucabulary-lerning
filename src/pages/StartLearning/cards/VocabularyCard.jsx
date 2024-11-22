import React from "react";

const VocabularyCard = ({ vocabulary }) => {
  const {
    word,
    pronunciation,
    meaning,
    part_of_speech,
    difficulty,
    lesson_no,
    when_to_say,
    example,
  } = vocabulary;

  return (
    <div className="max-w-sm mx-auto overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md">
      <div className="p-4">
        {/* Word Title */}
        <h2 className="mb-2 text-2xl font-bold text-blue-500">{word}</h2>

        {/* Pronunciation */}
        <p className="mb-2 text-sm text-gray-600">
          <span className="font-semibold">Pronunciation:</span> {pronunciation}
        </p>

        {/* Meaning */}
        <p className="mb-4 text-gray-700">
          <span className="font-semibold">Meaning:</span> {meaning}
        </p>

        {/* Extra Details */}
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
          <p>
            <span className="font-semibold">Part of Speech:</span>{" "}
            {part_of_speech}
          </p>
          <p>
            <span className="font-semibold">Difficulty:</span> {difficulty}
          </p>
          <p>
            <span className="font-semibold">Lesson No:</span> {lesson_no}
          </p>
        </div>

        {/* Context */}
        <p className="mt-4 text-gray-700">
          <span className="font-semibold">When to Say:</span> {when_to_say}
        </p>

        {/* Example */}
        <p className="mt-4 text-gray-700">
          <span className="font-semibold">Example:</span> <br />
          <span className="italic">{example}</span>
        </p>
      </div>
    </div>
  );
};

export default VocabularyCard;
