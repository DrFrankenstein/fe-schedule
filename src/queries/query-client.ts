import { QueryClient } from "@tanstack/react-query";
import { fetchResource } from "../client/client";

export function createQueryClient(domain: string) {
    return new QueryClient({
        defaultOptions: {
            queries: {
                queryFn: ctx => fetchResource(domain, ctx.queryKey[0] as string)
            }
        }
    })
}
