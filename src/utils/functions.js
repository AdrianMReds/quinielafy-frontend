const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error(`Error al copiar al portapapeles: ${error}`);
  }
};

export { copyToClipboard };
