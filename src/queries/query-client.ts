import { QueryClient, QueryFunction } from "@tanstack/react-query";
import { fetchResource } from "../client/static-client";

const queryFn: QueryFunction = ctx => fetchResource(ctx.queryKey[0] as string, ctx.queryKey[1] as string);

export function createQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: { queryFn }
        }
    })
}
