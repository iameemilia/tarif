
const data = [
  { name: 'Безлимитный 300', price: 300, speed: 'до 10 Мбит/с', volume: 'Объём включённого тарифа не ограничен' },
  { name: 'Безлимитный 450', price: 450, speed: 'до 50 Мбит/с', volume: 'Объём включённого тарифа не ограничен' },
  { name: 'Безлимитный 550', price: 550, speed: 'до 100 Мбит/с', volume: 'Объём включённого тарифа не ограничен' },
  { name: 'Безлимитный 1000', price: 1000, speed: 'до 200 Мбит/с', volume: 'Объём включённого тарифа не ограничен' },
];

const App = () => {
  return (
    <div className="App">
      {data.map((item, index) => (
        <Tariff key={index} data={item} />
      ))}
    </div>
  );
};

const Tariff = ({ data }) => {
  const { name, price, speed, volume } = data;
  return (
    <div className={`tariff ${price === 550 ? 'big' : ''} ${price === 300 ? 'red' : price === 450 ? 'blue' : price === 550 ? 'green' : price === 1000 ? 'black' : ''}`}>
      <h2 className="tariff-name">{name}</h2>
      <p className="tariff-price">{price} ₽/мес</p>
      <p className="tariff-speed">{speed}</p>
      <p className="tariff-volume">{volume}</p>
    </div>
  );
};

export default App;
