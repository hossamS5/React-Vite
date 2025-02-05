import React, { useState } from 'react';

interface IProps {
  defaultName: 'Hossam';
}

const CalculationSection: React.FC<IProps> = ({ defaultName }) => {
  const [count, setCount] = useState<number>(0);
  const [name, setname] = useState<string>(defaultName);

  return (
    <section className="flex flex-col items-start justify-center gap-6 py-6">
      <div>
        <h1 className="text-3xl">{name}</h1>
        <div className="flex items-center gap-2 mt-2">
          <input onChange={(e) => setname(e.target.value)} />
        </div>
      </div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </section>
  );
};

export default CalculationSection;
