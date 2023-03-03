export async function fetchResource<T>(domain: string, name: string): Promise<T> {
    const url = `https://${domain}.sessionize.com/${name}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new FetchError(response);
    }

    return response.json();
}

export class FetchError extends Error {
    constructor(public response: Response) {
        super(`could not fetch ${response.url} :(`);
    }
}
