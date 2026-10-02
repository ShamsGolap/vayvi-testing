(() => {
  const target = document.querySelector("#vayvi-version");

  if (!target) {
    return;
  }

  const privacyUrl = "/vayvi-privacy/";

  fetch(privacyUrl, { cache: "no-store" })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      return response.text();
    })
    .then((html) => {
      const text = new DOMParser()
        .parseFromString(html, "text/html")
        .body.textContent || "";

      const match = text.match(
        /Version\s+concernée\s*:\s*Vayvi\s+(\d+\.\d+\.\d+)\+(\d+)/i,
      );

      if (!match) {
        return;
      }

      const [, version, build] = match;
      target.textContent = `Vayvi ${version} · build ${build}`;
      target.title = "Version synchronisée depuis la politique de confidentialité";
    })
    .catch(() => {
      // Keep the generic fallback already present in the page.
    });
})();
