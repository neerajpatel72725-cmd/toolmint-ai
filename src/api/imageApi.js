export async function generateImage(prompt) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: prompt,
      }),
    }
  );

  if (!response.ok) {
  const error = await response.text();
  console.log(error);
  alert(error);
  throw new Error(error);
}
  const blob = await response.blob();
  return URL.createObjectURL(blob);
}
