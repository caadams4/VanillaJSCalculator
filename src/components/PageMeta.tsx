import { useEffect } from "react";

type PageMetaProps = {
  title: string;
  description: string;
};

function ensureMeta(selector: string, attributes: Record<string, string>) {
  let meta = document.querySelector(selector);
  if (!meta) {
    meta = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => {
      meta?.setAttribute(key, value);
    });
    document.head.appendChild(meta);
  }
  return meta;
}

function applyPageMeta(title: string, description: string) {
  document.title = title;

  const descriptionMeta = ensureMeta('meta[name="description"]', {
    name: "description",
  });
  descriptionMeta.setAttribute("content", description);

  const ogTitle = ensureMeta('meta[property="og:title"]', {
    property: "og:title",
  });
  ogTitle.setAttribute("content", title);

  const ogDescription = ensureMeta('meta[property="og:description"]', {
    property: "og:description",
  });
  ogDescription.setAttribute("content", description);

  const ogType = ensureMeta('meta[property="og:type"]', {
    property: "og:type",
  });
  ogType.setAttribute("content", "website");

  const ogImage = ensureMeta('meta[property="og:image"]', {
    property: "og:image",
  });
  ogImage.setAttribute("content", "/og-image.svg");
}

export function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    applyPageMeta(title, description);
  }, [title, description]);

  return null;
}
