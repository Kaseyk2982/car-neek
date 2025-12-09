import Button from "./Button";
import Heading from "./Heading";

export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <main className="h-screen bg-gray-100 flex justify-center items-center p-16">
      <div className="bg-gray-50 border border-solid border-gray-200 rounded-md p-16 text-center flex flex-col grow-0 shrink basis-[96_rem]">
        <Heading as="h1">Something went wrong 😤</Heading>
        <p className="font-mono text-slate-400 mb-8">{error.message}</p>
        <div>
          <Button onClick={resetErrorBoundary}>Try again</Button>
        </div>
      </div>
    </main>
  );
}
