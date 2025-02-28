import { Converter } from "./converter";

/**
 * 
 * @returns 
 */
export function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-400 p-4">
        <div className="flex justify-center items-center h-full">
          <h1 className="font-bold text-white text-xl">Coordinate Converter</h1>
        </div>
      </header>
      <main className="flex-grow p-4">
        <Converter />
      </main>
      <footer className="bg-red-100">
        <div className="flex justify-center items-center h-full p-4">
          <p>© 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
