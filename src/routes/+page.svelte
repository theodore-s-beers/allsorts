<script lang="ts">
  import { onMount } from "svelte";

  let sortingInput = $state("");
  let sortingOutput = $state("");

  let sortingApproach = $state("uca");
  const validTailorings = ["uca", "ArabicScript", "ArabicInterleaved"];

  const title = "Text Sorting Playground";

  async function sortItems() {
    sortingInput = sortingInput.trim().replace(/\n{2,}/g, "\n");
    const lines = sortingInput.split("\n").map((line) => line.trim());
    sortingInput = lines.join("\n");

    localStorage.setItem("allsorts-input", sortingInput);
    localStorage.setItem("allsorts-approach", sortingApproach);

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
    localStorage.removeItem("allsorts-input");
  }

  onMount(() => {
    sortingInput = localStorage.getItem("allsorts-input") || "";
    sortingApproach = localStorage.getItem("allsorts-approach") || "uca";
  });
</script>

<svelte:head>
  <meta
    name="description"
    content="Try sorting text using different approaches—including mixing the Latin and Arabic scripts"
  />

  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:url" content="https://www.theobeers.com/allsorts/" />
  <meta property="og:image" content="https://www.theobeers.com/allsorts/og.jpg" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />

  <title>{title}</title>
</svelte:head>

<h1 class="mb-4 text-3xl">{title}</h1>

<p class="mb-4">
  <em
    >Based on <a
      href="https://github.com/theodore-s-beers/feruca"
      rel="noreferrer"
      target="_blank"
      class="text-blue-800 hover:underline">feruca</a
    >, a simple but conformant & performant implementation of the
    <a
      href="https://www.unicode.org/reports/tr10/"
      rel="noreferrer"
      target="_blank"
      class="text-blue-800 hover:underline">Unicode Collation Algorithm</a
    >, written in safe Rust with minimal dependencies. Give it a try some time!</em
  >
</p>

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
