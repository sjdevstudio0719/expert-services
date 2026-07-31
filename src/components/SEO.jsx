import { useEffect } from "react";

export default function SEO({
  title,
  description,
  keywords,
  image,
  url,
}) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    const setMeta = (name, content) => {
      if (!content) return;

      let tag = document.querySelector(`meta[name="${name}"]`);

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }

      tag.setAttribute("content", content);
    };

    const setProperty = (property, content) => {
      if (!content) return;

      let tag = document.querySelector(`meta[property="${property}"]`);

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }

      tag.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("keywords", keywords);

    setProperty("og:title", title);
    setProperty("og:description", description);
    setProperty("og:image", image);
    setProperty("og:url", url);
    setProperty("og:type", "website");
  }, [title, description, keywords, image, url]);

  return null;
}