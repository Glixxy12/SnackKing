import { useState } from "react";

export default function App() {
  const [snacks, setSnacks] = useState([
    { id: 1, name: "Chips", stock: 10, price: 1.5 },
    { id: 2, name: "Candy Bar", stock: 5, price: 1.0 },
    { id: 3, name: "Juice Box", stock: 8, price: 1.2 },
  ]);
  const [newSnack, setNewSnack] = useState({ name: "", stock: "", price: "" });

  const addSnack = () => {
    if (!newSnack.name || !newSnack.stock || !newSnack.price) return;
    setSnacks([
      ...snacks,
      {
        ...newSnack,
        id: Date.now(),
        stock: parseInt(newSnack.stock),
        price: parseFloat(newSnack.price),
      },
    ]);
    setNewSnack({ name: "", stock: "", price: "" });
  };

  const removeSnack = (id) => {
    setSnacks(snacks.filter((snack) => snack.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">🎒 School Snack Shop</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {snacks.map((snack) => (
          <div key={snack.id} className="rounded-2xl shadow-lg bg-white p-4">
            <div className="text-xl font-semibold">{snack.name}</div>
            <div>Stock: {snack.stock}</div>
            <div>Price: ${snack.price.toFixed(2)}</div>
            <button
              onClick={() => removeSnack(snack.id)}
              className="mt-2 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="p-4 bg-white rounded-2xl shadow-xl space-y-4">
        <h2 className="text-2xl font-bold">Add a New Snack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            placeholder="Snack Name"
            className="border px-3 py-2 rounded-md"
            value={newSnack.name}
            onChange={(e) => setNewSnack({ ...newSnack, name: e.target.value })}
          />
          <input
            placeholder="Stock"
            type="number"
            className="border px-3 py-2 rounded-md"
            value={newSnack.stock}
            onChange={(e) => setNewSnack({ ...newSnack, stock: e.target.value })}
          />
          <input
            placeholder="Price ($)"
            type="number"
            className="border px-3 py-2 rounded-md"
            value={newSnack.price}
            onChange={(e) => setNewSnack({ ...newSnack, price: e.target.value })}
          />
        </div>
        <button
          onClick={addSnack}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add Snack
        </button>
      </div>
    </div>
  );
}
