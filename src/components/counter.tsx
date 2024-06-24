export function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="flex items-center justify-center gap-4">
      <div className="text-2xl">{count}</div>
      <button
        className="bg-primary text-primary-foreground hover:bg-primary/90"
        onClick={() => setCount((count) => count + 1)}
      >
        Increment
      </button>
    </div>
  );
}
