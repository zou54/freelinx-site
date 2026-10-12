"use client";

import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import type { BlocksContent } from "@strapi/blocks-react-renderer";
import { getStrapiMediaUrl } from "@/lib/strapi";

export default function ArticleContent({ content }: { content: BlocksContent }) {
  return (
    <div className="mx-auto max-w-[720px] px-6">
      <BlocksRenderer
        content={content}
        blocks={{
          paragraph: ({ children }) => (
            <p className="mb-5 text-[15.5px] leading-[1.8] text-gray-text">{children}</p>
          ),
          heading: ({ children, level }) => {
            const sizes: Record<number, string> = {
              1: "text-[30px] mt-10 mb-4",
              2: "text-[24px] mt-10 mb-4",
              3: "text-[20px] mt-8 mb-3",
              4: "text-[17px] mt-6 mb-2.5",
              5: "text-[15.5px] mt-6 mb-2.5",
              6: "text-[14px] mt-6 mb-2.5",
            };
            const className = `font-bold leading-[1.3] text-navy ${sizes[level] ?? sizes[3]}`;
            if (level === 1) return <h2 className={className}>{children}</h2>;
            if (level === 2) return <h2 className={className}>{children}</h2>;
            if (level === 3) return <h3 className={className}>{children}</h3>;
            return <h4 className={className}>{children}</h4>;
          },
          list: ({ children, format }) =>
            format === "ordered" ? (
              <ol className="mb-5 list-decimal space-y-2 pl-5 text-[15.5px] leading-[1.75] text-gray-text">
                {children}
              </ol>
            ) : (
              <ul className="mb-5 list-disc space-y-2 pl-5 text-[15.5px] leading-[1.75] text-gray-text">
                {children}
              </ul>
            ),
          "list-item": ({ children }) => <li>{children}</li>,
          quote: ({ children }) => (
            <blockquote className="mb-5 border-l-[3px] border-red bg-pink-pale-2 px-5 py-4 text-[15.5px] italic leading-[1.7] text-navy">
              {children}
            </blockquote>
          ),
          link: ({ children, url }) => (
            <a href={url} className="font-semibold text-red underline decoration-red/40 hover:decoration-red">
              {children}
            </a>
          ),
          image: ({ image }) => {
            const src = getStrapiMediaUrl(image.url);
            if (!src) return null;
            return (
              <span className="mb-6 block overflow-hidden rounded-[16px]">
                <Image
                  src={src}
                  alt={image.alternativeText || ""}
                  width={image.width}
                  height={image.height}
                  className="h-auto w-full object-cover"
                  sizes="720px"
                />
              </span>
            );
          },
          code: ({ children }) => (
            <pre className="mb-5 overflow-x-auto rounded-[12px] bg-navy px-5 py-4 text-[13px] leading-[1.6] text-white">
              <code>{children}</code>
            </pre>
          ),
        }}
        modifiers={{
          bold: ({ children }) => <strong className="font-bold text-navy">{children}</strong>,
          italic: ({ children }) => <em>{children}</em>,
          underline: ({ children }) => <u>{children}</u>,
          strikethrough: ({ children }) => <s>{children}</s>,
          code: ({ children }) => (
            <code className="rounded bg-pink-pale-2 px-1.5 py-0.5 text-[13.5px] text-navy">{children}</code>
          ),
        }}
      />
    </div>
  );
}
