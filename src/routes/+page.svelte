<script lang="ts">
  let sortingInput = $state("");
  let sortingOutput = $state("");
  let sortingApproach = $state("uca");

  const validTailorings = ["uca", "ArabicScript", "ArabicInterleaved"];

  async function sortItems() {
    sortingInput = sortingInput.trim().replace(/\n{2,}/g, "\n");
    const lines = sortingInput.split("\n").map((line) => line.trim());

    if (sortingApproach === "naive" || !validTailorings.includes(sortingApproach)) {
      lines.sort();
      sortingOutput = lines.join("\n");
      return;
    }

    const payload = { items: lines, tailoring: sortingApproach };

    try {
      const response = await fetch("https://feruca-api.fly.dev/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Sorting API request failed: ${response.status}, ${response.statusText}`);
      }

      const sortedItems: string[] = await response.json();
      sortingOutput = sortedItems.join("\n");
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error(err);
      }
      sortingOutput = "An error occurred with the sorting API request. Please try again.";
    }
  }

  function clearItems() {
    sortingInput = "";
    sortingOutput = "";
  }
</script>

<h1 class="mb-6 text-3xl">Text sorting playground</h1>

<div class="mb-4 flex gap-4">
  <textarea
    bind:value={sortingInput}
    rows="20"
    placeholder="Enter items to be sorted here, one per line"
    class="grow rounded border bg-white p-2"
  ></textarea>
  <textarea bind:value={sortingOutput} rows="20" readonly class="grow rounded border bg-white p-2"
  ></textarea>
</div>

<div class="flex items-center">
  <button onclick={sortItems} class="mr-4 cursor-pointer rounded bg-blue-700 px-3 py-2 text-white"
    >Sort</button
  >
  <button onclick={clearItems} class="mr-4 cursor-pointer rounded bg-gray-600 px-3 py-2 text-white"
    >Clear</button
  >
  <div class="mr-2">Sorting approach:</div>
  <select bind:value={sortingApproach} class="rounded border bg-white p-2">
    <option value="naive">Naïve</option>
    <option value="uca" selected>UCA default</option>
    <option value="ArabicScript">Arabic first</option>
    <option value="ArabicInterleaved">Arabic interleaved</option>
  </select>
  <button class="ml-auto cursor-pointer rounded bg-green-800 px-3 py-2 text-white">Copy</button>
</div>
