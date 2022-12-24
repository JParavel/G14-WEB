const VITE_TRANSACTION_SERVICE = import.meta.env.VITE_TRANSACTION_SERVICE;

export async function getTransactions(token) {
  console.log(VITE_TRANSACTION_SERVICE + "/list");
  const res = await fetch(VITE_TRANSACTION_SERVICE + "/list", {
    headers: {
      token: token,
    },
  });
  const documents = await res.json();
  return documents;
}
