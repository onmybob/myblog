"use client";

import { getQueryClient } from "@/helpers/client/getQueryClient";
import { Hydrate, QueryClientProvider, dehydrate } from "@tanstack/react-query";

const queryClient = getQueryClient();
const dehydratedState = dehydrate(queryClient);

export default function Providers({ children }: { children: React.ReactNode; }) {

    return (
        <QueryClientProvider client={queryClient}>
            {/* <Hydrate state={dehydratedState}>
                {children}
            </Hydrate> */}
            {children}
        </QueryClientProvider>
    );
}