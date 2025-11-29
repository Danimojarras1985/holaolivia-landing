export function Button(props: { text: string }) {
  return (
    <button className="bg-brand-primary hover:bg-brand-primary-hover text-text-primary px-32 py-12 rounded-full text-14-bold inline-flex items-center justify-center whitespace-nowrap">
      {props.text}
    </button>
  );
}
