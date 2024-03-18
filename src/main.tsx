import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="min-h-screen flex py-12 bg-zinc-900 text-zinc-200">
      <section className="container">
        <h1 className="text-3xl font-bold">
          shadcn/ui DataTable w/ advanced column options
        </h1>
        <p className="text-zinc-500 text-sm pt-2">
          This is an example where shadcn/ui's DataTable (built on top of the
          Tanstack Table) is customized to have column-resizability options.
        </p>
        <p className="text-zinc-500 text-sm pt-1">
          Click{" "}
          <a
            href="https://github.com/danielagg/shadcn-data-table-advanced-col-opions"
            target="_blank"
            className="cursor-pointer text-blue-500 hover:underline"
          >
            here
          </a>
          , to view the source on GitHub.
        </p>
      </section>
    </main>
  </React.StrictMode>
);
