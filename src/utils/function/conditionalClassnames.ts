export function conditionalClassnames(...classes: (string | null)[]) {
  return classes.filter(Boolean).join(" ");
}
