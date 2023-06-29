export const Top = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export function refreshPage() {
  window.location.reload(false);
}
