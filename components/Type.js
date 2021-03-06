export function Heading1({ children }) {
  return (
    <h1 className="mb-3 text-4xl md:text-6xl font-abcdheading">
      <strong>{children}</strong>
    </h1>
  );
}

export function Heading2({ children }) {
  return (
    <h2 className="mb-3 text-3xl md:text-5xl font-abcdheading">
      <strong>{children}</strong>
    </h2>
  );
}

export function Heading3({ children }) {
  return (
    <h3 className="text-2xl mb-3 font-abcdheading">
      <strong>{children}</strong>
    </h3>
  );
}

export function Paragraph({ children }) {
  return <p className="mb-4 text-justify text-lg">{children}</p>;
}

export function ParagraphWhite({ children }) {
  return <p className="mb-4 text-justify text-lg text-white">{children}</p>;
}

export function Mission({ children }) {
  return <p class="text-blue-700 text-3xl py-10">{children}</p>
}
