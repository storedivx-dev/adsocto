import { ButtonLink } from "@/components/Ui";

export default function NotFound() {
  return (
    <div className="container-page flex flex-1 flex-col items-center justify-center py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-300">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl font-bold">
        This tentacle does not exist.
      </h1>
      <p className="mt-3 max-w-md text-muted">
        The page is gone or the URL is off. Head back to the network home.
      </p>
      <div className="mt-8">
        <ButtonLink href="/">Back to AdsOcto</ButtonLink>
      </div>
    </div>
  );
}
