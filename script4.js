async function play() {
  const text = document.getElementById("inputText").value;
  const summary = document.getElementById("summary");

  if (!text.trim()) {
    alert("Enter the value first");
    return;
  }

  summary.textContent = "Summarizing...";

  try {
    const response = await fetch("/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();

    if (data.error) {
      summary.textContent = data.error;
      return;
    }

    summary.textContent = data.summary;
  } catch (err) {
    summary.textContent = "Server error";
  }
}