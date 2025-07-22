export async function customFetch(input, init) {
  const res = await fetch(input, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    },
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`[${res.status}] ${errorText}`);
  }

  if (res.status === 204) {
    return null;
  }

  return res.json();
}
