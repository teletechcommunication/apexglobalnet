export const SITE_URL = "https://apexglobalnet.com";

export const PHONE_DISPLAY = "(866) 381-6479";
export const PHONE_HREF = "tel:+18663816479";

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
