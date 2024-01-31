import React from 'react';

const List2 = () => {
  const items = [
    {
      title: 'Great news',
      subtitle: 'Atque quaerat libero maiores vel.',
    },
    {
      title: 'Amazing notification',
      subtitle: 'Aut aut ullam eum possimus.',
    },
    {
      title: 'One more good news',
      subtitle: 'Fugiat praesentium soluta amet non.',
    },
    {
      title: 'Ignored notification',
      subtitle: 'Fugit eaque molestias et aut.',
    },
    {
      title: 'Some critical notification',
      subtitle: 'Labore aut voluptas molestias illo.',
    },
  ];
  return (
    <div className="flex flex-row flex-wrap">
      {items.map((item, i) => (
        <div key={i} className="w-full">
          <div
            className="flex items-center justify-start dropdown-item p-2"
            key={i}
          >
            <div className="ml-2">
              <div className="text-sm font-bold">{item.title}</div>
              <div className="text-xs">{item.subtitle}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List2;
