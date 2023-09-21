"use client";

import { getQueryClient } from "@/helpers/query/getQueryClient";
import { Hydrate, QueryClient, QueryClientProvider, dehydrate } from "@tanstack/react-query";
import React from "react";

//const queryClient = getQueryClient();

export default function Providers({ children }: { children: React.ReactNode; }) {

    const [queryClient] =React.useState(()=>getQueryClient())
    const dehydratedState = dehydrate(queryClient);

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={dehydratedState}>
                {children}
            </Hydrate>
                {/* {children} */}

        </QueryClientProvider>
    );
}