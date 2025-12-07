import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";

createInertiaApp({
    resolve: (name) => {
        const Page = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return Page[`./Pages/${name}.jsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <App {...props} />
        );
    },
});
