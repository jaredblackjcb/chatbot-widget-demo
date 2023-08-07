import AiBot from "./components/AiBot";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignContent: "flex-start",
        p: 1,
        m: 1,
        bgcolor: "background.paper",
        maxWidth: 380,
        height: 200,
        borderRadius: 1,
      }}
    >
      <AiBot apiKey={"yourApiKey"} namespace={"test2"} initialMesage={"Hello! This is a configurable message."} />
    </Box>
  );
}

export default App;
