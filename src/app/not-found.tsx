import { Button } from "@/components/ui/Button";
import { FlameIcon } from "@/components/ui/FlameIcon";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-cream px-6 text-center">
      <FlameIcon className="h-12 w-12 text-saffron" />
      <h1 className="mt-6 font-display text-4xl font-semibold text-indigo sm:text-5xl">
        This Ghat Doesn't Exist
      </h1>
      <p className="mt-4 max-w-md text-ink/70">
        The page you're looking for has drifted downstream. Let's get you
        back to solid ground.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/">Back to Home</Button>
        <Button href="/packages" variant="outline">
          View Packages
        </Button>
      </div>
    </section>
  );
}
