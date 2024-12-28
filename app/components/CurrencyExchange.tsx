export default function CurrencyExchange() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-white/50">€</span>
          <span className="text-lg">230.00</span>
        </div>
        <button className="px-2 py-1 text-sm bg-white/5 rounded-lg hover:bg-white/10">
          EUR
        </button>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-white/50">$</span>
          <span className="text-lg">244.89</span>
        </div>
        <button className="px-2 py-1 text-sm bg-white/5 rounded-lg hover:bg-white/10">
          USD
        </button>
      </div>
    </div>
  );
}