import React, { useState } from "react";
import { LuCheck, LuCode, LuCopy } from "react-icons/lu";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

const AIResponswPreview = ({ content }) => {
  if (!content) return null;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-[14px] prose prose-slate dark:prose-invert max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              const language = match ? match[1] : "";

              const isInLine = !className;

              return !isInLine ? (
                <CodeBlock
                  code={String(children).replace(/\n$/, "")}
                  language={language}
                />
              ) : (
                <code
                  className="px-1 py-0.5 bg-gray-100 rounded text-sm"
                  {...props}
                >
                  {children}
                </code>
              );
            },
            p({ children }) {
              return <p className="mb-4 leading-5">{children}</p>;
            },
            strong({ children }) {
              return (
                <strong className="font-semibold text-gray-900">
                  {children}
                </strong>
              );
            },
            em({ children }) {
              return <em className="italic text-gray-700">{children}</em>;
            },
            ul({ children }) {
              return <ul className="list-disc pl-6 mb-3">{children}</ul>;
            },
            ol({ children }) {
              return <ol className="list-decimal pl-6 mb-3">{children}</ol>;
            },
            li({ children }) {
              return <li className="mb-1">{children}</li>;
            },
            blockquote({ children }) {
              return (
                <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-600 my-4">
                  {children}
                </blockquote>
              );
            },
            h1({ children }) {
              return (
                <h1 className="text-3xl font-bold mt-6 mb-3">{children}</h1>
              );
            },
            h2({ children }) {
              return (
                <h2 className="text-2xl font-bold mt-5 mb-3">{children}</h2>
              );
            },
            h3({ children }) {
              return (
                <h3 className="text-xl font-semibold mt-4 mb-2">{children}</h3>
              );
            },
            h4({ children }) {
              return (
                <h4 className="text-lg font-semibold mt-3 mb-2">{children}</h4>
              );
            },
            h5({ children }) {
              return (
                <h5 className="text-base font-semibold mt-2 mb-1">
                  {children}
                </h5>
              );
            },
            h6({ children }) {
              return (
                <h6 className="text-sm font-semibold mt-2 mb-1 text-gray-600">
                  {children}
                </h6>
              );
            },
            a({ href, children }) {
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  {children}
                </a>
              );
            },
            hr() {
              return <hr className="my-6 border-t border-gray-300" />;
            },
            table({ children }) {
              return (
                <div className="overflow-x-auto my-4">
                  <table className="min-w-full border border-gray-300 text-left">
                    {children}
                  </table>
                </div>
              );
            },
            thead({ children }) {
              return <thead className="bg-gray-100">{children}</thead>;
            },
            tbody({ children }) {
              return <tbody>{children}</tbody>;
            },
            tr({ children }) {
              return <tr className="border-b">{children}</tr>;
            },
            th({ children }) {
              return (
                <th className="py-2 px-4 font-semibold text-sm text-gray-700 border-b uppercase">
                  {children}
                </th>
              );
            },
            td({ children }) {
              return (
                <td className="py-2 px-4 text-sm text-gray-700 border-b">
                  {children}
                </td>
              );
            },
            img({ src, alt }) {
              return (
                <img
                  src={src}
                  alt={alt}
                  className="max-w-full h-auto my-4 rounded-md border"
                />
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

function CodeBlock({ code, language }) {
  const [copied, setCopied] = useState(false);
  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="relative my-6 rounded-lg  overflow-hidden bg-gray-50  border-gray-200">
      <div className="flex items-center justify-between px-4 bg-gray-100 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <LuCode size={16} className="text-gray-500" />
          <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
            {language || ""}
          </span>
        </div>
        <button
          onClick={copyCode}
          className="text-gray-500 hover:text-gray-700 focus:outline-none relative group"
          aria-label="Copy-Code"
        >
          {copied ? (
            <LuCheck size={16} className="text-green-600" />
          ) : (
            <LuCopy size={16} className="" />
          )}
          {copied && (
            <span className="abosolute -top-8 right-0 bg-black text-white text-xs rounded-md px-2 py-1 opacity-80 group-hover:opacity-100 transition">
              Copied!
            </span>
          )}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={oneLight}
        customStyle={{
          fontSize: 12.5,
          margin: 0,
          padding: "1rem",
          background: "transparent",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default AIResponswPreview;
