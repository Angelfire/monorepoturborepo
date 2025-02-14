import { useState } from "react";

import { Button } from "@repo/ui/components/button";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center space-y-4">
        <Button onClick={() => setCount((count) => count + 1)} variant="default">
          count is {count}
        </Button>
        <p className="text-gray-600">
          Edit <code className="font-mono text-blue-500">src/App.tsx</code>{" "}
          and save to test HMR
        </p>
      </div>
    </div>
  );
}
