import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold">Vibe Check! 🚀</h1>
      <p className="text-muted-foreground">
        If you see a styled button below, shadcn is working.
      </p>

      <div className="flex gap-5">
        <Button variant="outline">james</Button>

        <Button variant="primary">well</Button>
        <Button variant="primary">Destroy</Button>
      </div>
    </div>
  );
}
