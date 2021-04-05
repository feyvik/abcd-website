export function Heading1({ children }) {
  return (
    <h1 className="mb-3 text-4xl md:text-6xl font-abcdheading">{children}</h1>
  );
}

export function Heading2({ children }) {
  return (
    <h2 className="mb-3 text-4xl md:text-6xl font-abcdheading">{children}</h2>
  );
}

export function Heading3({ children }) {
  return <h3 className="text-5xl mb-3 text-blue-400">{children}</h3>;
}

export function Paragraph({ children }) {
  return <p className="mb-4 text-justify text-2xl">{children}</p>;
}
