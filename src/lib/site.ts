export const SITE_URL = "https://apexglobalnet.com";

// TODO: replace with the real business phone number once available.
export const PHONE_DISPLAY = "xxx-xxx-xxxx";
export const PHONE_HREF = "tel:";

export function canonical(path: string) {
  return { rel: "canonical", href: `${SITE_URL}${path}` };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
