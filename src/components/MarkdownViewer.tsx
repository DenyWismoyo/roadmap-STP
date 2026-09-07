"use client";

import React from "react";
import { Info, AlertTriangle, CheckCircle, Flame, ShieldAlert } from "lucide-react";

interface Props {
  content: string;
}

export default function MarkdownViewer({ content }: Props) {
  // Parse content into structured blocks
  const renderFormattedContent = () => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let inTable = false;
    let tableRows: string[][] = [];

    const flushTable = (key: number) => {
      if (tableRows.length === 0) return;
      elements.push(
        <div key={`table-${key}`} className="my-6 overflow-x-auto -mx-4 sm:mx-0 rounded-none sm:rounded-2xl border-y sm:border-x border-white/10 bg-slate-950/60 shadow-lg">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-slate-900/90">
                {tableRows[0]?.map((th, i) => (
                  <th key={i} className="py-3.5 px-4 font-bold text-slate-200 uppercase tracking-wider text-[11px]">
                    {th.trim()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {tableRows.slice(1).map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-slate-800/40 transition-colors">
                  {row.map((td, cIdx) => {
                    const text = td.trim();
                    const isBold = text.startsWith("**") && text.endsWith("**");
                    const cleaned = text.replace(/\*\*/g, "");
                    return (
                      <td
                        key={cIdx}
                        className={`py-3 px-4 text-slate-300 ${isBold ? "font-bold text-cyan-300" : ""}`}
                      >
                        {cleaned}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      inTable = false;
    };

    let i = 0;
    while (i < lines.length) {
      const line = lines[i];

      // Table line
      if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
        inTable = true;
        // Check if it's separator line |:---|:---|
        if (!line.includes("---")) {
          const cells = line
            .split("|")
            .slice(1, -1)
            .map((c) => c.trim());
          tableRows.push(cells);
        }
        i++;
        continue;
      } else if (inTable) {
        flushTable(i);
      }

      // GitHub Alert Quotes (> [!NOTE], > [!IMPORTANT], > [!WARNING])
      if (line.startsWith("> [!")) {
        const typeMatch = line.match(/> \[!(NOTE|IMPORTANT|WARNING|TIP|CAUTION)\]/);
        const type = typeMatch ? typeMatch[1] : "NOTE";
        const alertLines: string[] = [];
        i++;
        while (i < lines.length && lines[i].startsWith(">")) {
          alertLines.push(lines[i].replace(/^>\s?/, ""));
          i++;
        }

        const alertStyles = {
          NOTE: {
            border: "border-sky-500/40",
            bg: "bg-sky-950/40 text-sky-200 shadow-[0_0_15px_rgba(14,165,233,0.12)]",
            icon: Info,
            title: "Catatan Strategis",
            titleColor: "text-sky-300",
          },
          IMPORTANT: {
            border: "border-blue-500/40",
            bg: "bg-blue-950/40 text-blue-200 shadow-[0_0_15px_rgba(59,130,246,0.12)]",
            icon: CheckCircle,
            title: "Poin Krusial",
            titleColor: "text-blue-300",
          },
          WARNING: {
            border: "border-amber-500/40",
            bg: "bg-amber-950/40 text-amber-200 shadow-[0_0_15px_rgba(245,158,11,0.12)]",
            icon: AlertTriangle,
            title: "Perhatian / Hambatan Regulasi",
            titleColor: "text-amber-300",
          },
          TIP: {
            border: "border-emerald-500/40",
            bg: "bg-emerald-950/40 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.12)]",
            icon: Flame,
            title: "Peluang Quick Win",
            titleColor: "text-emerald-300",
          },
          CAUTION: {
            border: "border-rose-500/40",
            bg: "bg-rose-950/40 text-rose-200 shadow-[0_0_15px_rgba(244,63,94,0.12)]",
            icon: ShieldAlert,
            title: "Mitigasi Risiko",
            titleColor: "text-rose-300",
          },
        }[type] || {
          border: "border-slate-700",
          bg: "bg-slate-900/60 text-slate-300",
          icon: Info,
          title: "Informasi",
          titleColor: "text-slate-300",
        };

        const Icon = alertStyles.icon;

        elements.push(
          <div
            key={`alert-${i}`}
            className={`my-5 p-4 sm:p-5 rounded-xl sm:rounded-2xl border ${alertStyles.border} ${alertStyles.bg} backdrop-blur-md`}
          >
            <div className={`flex items-center gap-2 font-bold text-xs sm:text-sm uppercase tracking-wider mb-1.5 ${alertStyles.titleColor}`}>
              <Icon className="w-4 h-4" />
              {alertStyles.title}
            </div>
            <div className="text-xs sm:text-sm leading-relaxed text-slate-200">
              {alertLines.join(" ")}
            </div>
          </div>
        );
        continue;
      }

      // Headings
      if (line.startsWith("# ")) {
        elements.push(
          <h1 key={`h1-${i}`} className="text-2xl sm:text-3xl font-black text-white mt-8 mb-4 tracking-tight">
            {line.replace(/^# /, "")}
          </h1>
        );
        i++;
        continue;
      }

      if (line.startsWith("## ")) {
        elements.push(
          <h2 key={`h2-${i}`} className="text-xl sm:text-2xl font-bold text-white mt-8 mb-3 tracking-tight border-b border-white/10 pb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            {line.replace(/^## /, "")}
          </h2>
        );
        i++;
        continue;
      }

      if (line.startsWith("### ")) {
        elements.push(
          <h3 key={`h3-${i}`} className="text-base sm:text-lg font-bold text-cyan-300 mt-5 mb-2">
            {line.replace(/^### /, "")}
          </h3>
        );
        i++;
        continue;
      }

      // Horizontal rules
      if (line.trim() === "---") {
        elements.push(<hr key={`hr-${i}`} className="my-6 border-white/10" />);
        i++;
        continue;
      }

      // Unordered lists
      if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
        const text = line.replace(/^[\s]*[-*]\s/, "");
        elements.push(
          <li key={`li-${i}`} className="ml-5 list-disc text-sm text-slate-200 my-1.5 leading-relaxed">
            {formatInlineText(text)}
          </li>
        );
        i++;
        continue;
      }

      // Ordered lists
      if (/^\d+\.\s/.test(line.trim())) {
        const text = line.replace(/^[\s]*\d+\.\s/, "");
        elements.push(
          <li key={`oli-${i}`} className="ml-5 list-decimal text-sm text-slate-200 my-1.5 leading-relaxed">
            {formatInlineText(text)}
          </li>
        );
        i++;
        continue;
      }

      // Empty lines
      if (!line.trim()) {
        i++;
        continue;
      }

      // Paragraphs
      elements.push(
        <p key={`p-${i}`} className="my-3 text-sm sm:text-base text-slate-200 leading-relaxed">
          {formatInlineText(line)}
        </p>
      );
      i++;
    }

    if (inTable) {
      flushTable(lines.length);
    }

    return elements;
  };

  // Helper for inline bold, italic, code formatting
  const formatInlineText = (text: string): React.ReactNode => {
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="text-white font-bold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith("*") && part.endsWith("*")) {
        return (
          <em key={index} className="text-slate-300 italic">
            {part.slice(1, -1)}
          </em>
        );
      }
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code key={index} className="px-1.5 py-0.5 rounded bg-slate-800 font-mono text-xs text-cyan-300 border border-white/10">
            {part.slice(1, -1)}
          </code>
        );
      }
      return part;
    });
  };

  return <div className="space-y-1">{renderFormattedContent()}</div>;
}
