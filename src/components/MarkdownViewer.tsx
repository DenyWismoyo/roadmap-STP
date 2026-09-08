"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";
import {
  Info,
  AlertTriangle,
  CheckCircle2,
  Flame,
  ShieldAlert,
  FileText,
  Copy,
  Check,
  Printer,
  BookOpen,
} from "lucide-react";

interface Props {
  content: string;
  showDocumentHeader?: boolean;
}

// Helper to extract plain text from React nodes
function extractText(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (!node) return "";
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (React.isValidElement(node)) {
    const props = node.props as { children?: React.ReactNode };
    return extractText(props?.children);
  }
  return "";
}

// Helper to strip the [!ALERT] header from children
function stripAlertHeader(children: React.ReactNode): React.ReactNode {
  if (typeof children === "string") {
    return children.replace(/^\s*\[!(NOTE|IMPORTANT|WARNING|TIP|CAUTION)\]\s*/i, "");
  }
  if (Array.isArray(children)) {
    return children.map((child, idx) => {
      if (idx === 0) return stripAlertHeader(child);
      return child;
    });
  }
  if (React.isValidElement(children)) {
    const props = children.props as { children?: React.ReactNode };
    if (props && props.children) {
      return React.cloneElement(children, {
        ...props,
        children: stripAlertHeader(props.children),
      } as any);
    }
  }
  return children;
}

export default function MarkdownViewer({ content, showDocumentHeader = true }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopyText = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  // Estimate reading time
  const wordCount = content.split(/\s+/).filter(Boolean).length;
  const readingTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <article className="w-full bg-white text-slate-900 -mx-4 sm:mx-0 rounded-none sm:rounded-3xl border-y sm:border-x border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.12)] relative overflow-hidden transition-all">
      {/* EXECUTIVE WHITE PAPER TOP HEADER */}
      {showDocumentHeader && (
        <header className="px-6 sm:px-10 py-5 bg-gradient-to-r from-slate-50 via-blue-50/40 to-slate-50 border-b border-slate-200/90 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase text-blue-700">
                UPTD KST SOLO TECHNOPARK • DOKUMEN RESMI
              </div>
              <div className="text-xs font-semibold text-slate-600 flex items-center gap-2">
                <span>Naskah Kebijakan Eksekutif</span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1 text-slate-500">
                  <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                  ~{readingTimeMinutes} mnt baca ({wordCount} kata)
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-blue-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shadow-sm transition-colors"
              title="Salin isi dokumen"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Salin Naskah</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-blue-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shadow-sm transition-colors"
              title="Cetak dokumen"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>Cetak / PDF</span>
            </button>
          </div>
        </header>
      )}

      {/* DOCUMENT READING CANVAS IN ULTRA-CRISP WHITE PALETTE */}
      <div className="p-6 sm:p-10 lg:p-14 text-slate-800">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkBreaks]}
          rehypePlugins={[rehypeRaw]}
          components={{
            // HEADINGS
            h1: ({ children }) => (
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 mt-10 mb-5 tracking-tight border-b-2 border-slate-200 pb-3 leading-snug">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 mt-10 mb-4 tracking-tight border-b border-slate-200 pb-2.5 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0"></span>
                <span className="leading-snug">{children}</span>
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-base sm:text-lg font-bold text-blue-950 mt-7 mb-3 tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
                <span>{children}</span>
              </h3>
            ),
            h4: ({ children }) => (
              <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-5 mb-2">
                {children}
              </h4>
            ),

            // PARAGRAPHS & EMPHASIS
            p: ({ children }) => (
              <p className="my-3.5 text-[15px] sm:text-base leading-relaxed text-slate-700 font-normal">
                {children}
              </p>
            ),
            strong: ({ children }) => (
              <strong className="font-bold text-slate-950">{children}</strong>
            ),
            em: ({ children }) => (
              <em className="italic text-slate-700">{children}</em>
            ),

            // LISTS
            ul: ({ children }) => (
              <ul className="my-4 space-y-2 list-disc list-outside ml-6 text-slate-700 text-[15px] sm:text-base leading-relaxed">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="my-4 space-y-2 list-decimal list-outside ml-6 text-slate-700 text-[15px] sm:text-base leading-relaxed">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="leading-relaxed pl-1">{children}</li>
            ),

            // TABLES
            table: ({ children }) => (
              <div className="my-6 overflow-x-auto -mx-4 sm:mx-0 rounded-2xl border border-slate-200 shadow-sm bg-white">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  {children}
                </table>
              </div>
            ),
            thead: ({ children }) => (
              <thead className="bg-slate-100/90 border-b border-slate-200">
                {children}
              </thead>
            ),
            th: ({ children }) => (
              <th className="py-3.5 px-4 font-bold text-slate-900 uppercase tracking-wider text-[11px] font-mono">
                {children}
              </th>
            ),
            tbody: ({ children }) => (
              <tbody className="divide-y divide-slate-100 bg-white">
                {children}
              </tbody>
            ),
            tr: ({ children }) => (
              <tr className="hover:bg-blue-50/40 transition-colors">
                {children}
              </tr>
            ),
            td: ({ children }) => (
              <td className="py-3.5 px-4 text-slate-700 leading-normal border-slate-100">
                {children}
              </td>
            ),

            // BLOCKQUOTES & GITHUB ALERTS (> [!NOTE], > [!IMPORTANT], > [!WARNING])
            blockquote: ({ children }) => {
              const text = extractText(children);
              const match = text.match(/^\s*\[!(NOTE|IMPORTANT|WARNING|TIP|CAUTION)\]/i);

              if (match) {
                const alertType = match[1].toUpperCase() as
                  | "NOTE"
                  | "IMPORTANT"
                  | "WARNING"
                  | "TIP"
                  | "CAUTION";

                const config = {
                  NOTE: {
                    border: "border-sky-300 bg-sky-50/90 text-sky-950",
                    badge: "bg-sky-200/80 text-sky-900",
                    icon: Info,
                    title: "Catatan Strategis",
                  },
                  IMPORTANT: {
                    border: "border-blue-300 bg-blue-50/90 text-blue-950",
                    badge: "bg-blue-200/80 text-blue-900",
                    icon: CheckCircle2,
                    title: "Poin Krusial Kebijakan",
                  },
                  WARNING: {
                    border: "border-amber-300 bg-amber-50/90 text-amber-950",
                    badge: "bg-amber-200/80 text-amber-900",
                    icon: AlertTriangle,
                    title: "Perhatian / Hambatan Regulasi",
                  },
                  TIP: {
                    border: "border-emerald-300 bg-emerald-50/90 text-emerald-950",
                    badge: "bg-emerald-200/80 text-emerald-900",
                    icon: Flame,
                    title: "Peluang Quick Win",
                  },
                  CAUTION: {
                    border: "border-rose-300 bg-rose-50/90 text-rose-950",
                    badge: "bg-rose-200/80 text-rose-900",
                    icon: ShieldAlert,
                    title: "Mitigasi Risiko Tinggi",
                  },
                }[alertType];

                const Icon = config.icon;
                const cleanedChildren = stripAlertHeader(children);

                return (
                  <div
                    className={`my-6 p-4 sm:p-5 rounded-2xl border ${config.border} shadow-sm space-y-2`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${config.badge}`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {config.title}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                      {cleanedChildren}
                    </div>
                  </div>
                );
              }

              return (
                <blockquote className="my-5 border-l-4 border-blue-600 bg-slate-50/80 py-3.5 px-5 rounded-r-xl text-slate-700 italic text-[15px] sm:text-base leading-relaxed">
                  {children}
                </blockquote>
              );
            },

            // CODE
            code: ({ className, children, ...props }) => {
              const isInline = !className;
              if (isInline) {
                return (
                  <code
                    className="px-1.5 py-0.5 rounded bg-slate-100 text-blue-700 font-mono text-xs font-bold border border-slate-200"
                    {...props}
                  >
                    {children}
                  </code>
                );
              }
              return (
                <pre className="my-4 p-4 rounded-xl bg-slate-900 text-emerald-400 font-mono text-xs overflow-x-auto border border-slate-800 shadow-inner">
                  <code className={className} {...props}>
                    {children}
                  </code>
                </pre>
              );
            },

            // HORIZONTAL RULE
            hr: () => <hr className="my-8 border-slate-200" />,

            // LINKS
            a: ({ href, children }) => (
              <a
                href={href}
                className="text-blue-600 hover:text-blue-800 underline font-semibold transition-colors"
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {children}
              </a>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>

      {/* EXECUTIVE WHITE PAPER BOTTOM FOOTER */}
      <footer className="px-6 sm:px-10 py-4 bg-slate-50 border-t border-slate-200/90 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div>
          UPTD Kawasan Sains dan Teknologi Solo Technopark • Pemerintah Kota Surakarta
        </div>
        <div className="font-semibold text-slate-600">
          Paparan Roadmap Kemandirian BLUD 2026–2030
        </div>
      </footer>
    </article>
  );
}
