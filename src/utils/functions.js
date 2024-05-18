const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error(`Error al copiar al portapapeles: ${error}`);
  }
};

const selectedMenuTab = (path) => {
  if (path.includes("torneos")) {
    return ["torneos"];
  } else if (path.includes("statistics")) {
    return ["statistics"];
  } else if (path.includes("users")) {
    return ["users"];
  } else {
    return ["home"];
  }
};

export { copyToClipboard, selectedMenuTab };
