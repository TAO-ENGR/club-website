"use client";

import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import { useEffect, useRef, useState } from "react";

type AnnouncementProps = {
  date: string;
  title: string;
  link?: string;
};

export default function Announcement({
  date,
  title,
  link,
}: AnnouncementProps) {
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;

    if (content) {
      setIsOverflowing(content.scrollHeight > content.clientHeight);
    }
  }, [title]);

  return (
    <article className="break-words rounded-xl bg-[#F6F6F6] p-4 transition-transform duration-200 hover:-translate-y-1">
      <p className="text-gray-600">{date}</p>

      <div className="relative mt-2">
        <div
          ref={contentRef}
          className={expanded ? "" : "max-h-48 overflow-hidden"}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkBreaks]}
            components={{
              p: ({ children }) => (
                <p className="mb-3 last:mb-0">{children}</p>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-maroon underline"
                >
                  {children}
                </a>
              ),
              ul: ({ children }) => (
                <ul className="mb-3 list-disc space-y-1 pl-5">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="mb-3 list-decimal space-y-1 pl-5">{children}</ol>
              ),
            }}
          >
            {title}
          </ReactMarkdown>
        </div>
        {!expanded && isOverflowing && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#F6F6F6] to-transparent" />
        )}

        {isOverflowing && (
          <button
            type="button"
            onClick={() => setExpanded(value => !value)}
            className="relative mt-2 text-sm font-medium text-maroon underline"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm font-medium text-maroon underline"
        >
          View announcement
        </a>
      )}
    </article>
  );
}
