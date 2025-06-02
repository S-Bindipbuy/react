import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
const queryClient = new QueryClient();

createInertiaApp({
    resolve: (name) => {
        const Page = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return Page[`./Pages/${name}.jsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <QueryClientProvider client={queryClient}>
                <App {...props} />
            </QueryClientProvider>,
        );
    },
});
