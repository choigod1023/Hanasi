export const copyText = async (text: string, successMessage?: string) => {
  try {
    await navigator.clipboard.writeText(text);
    if (successMessage) {
      alert(successMessage);
    }
    return true;
  } catch (err) {
    console.error("복사 실패:", err);
    return false;
  }
};
