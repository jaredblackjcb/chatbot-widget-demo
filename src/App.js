import AiBot from "./components/AiBot";

function App() {
  return (
    <div>
      <AiBot
        apiKey={"yourApiKey"}
        namespace={"yourNamespace"}
        initialMesage={"Hello! This is a configurable message."}
      />
    </div>
  );
}

export default App;
