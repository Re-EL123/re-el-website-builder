function createPage() {
  const name = document.getElementById("pageName").value.toLowerCase();
  const content = document.getElementById("pageContent").value;

  if (!name || !content) return alert("Fill all fields");

  const pageBlob = new Blob([content], { type: "text/html" });
  const link = document.createElement("a");

  link.href = URL.createObjectURL(pageBlob);
  link.download = `${name}.html`;
  link.click();
}
